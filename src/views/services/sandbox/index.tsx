import React, { useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import * as THREE from 'three';
import * as dat from 'dat.gui';

interface Props {
}

class Controls {
  constructor (scene: THREE.Scene, planeGeometry: THREE.PlaneGeometry) {
    this._scene = scene;
    this._planeGeometry = planeGeometry;
    this._numberOfObjects = scene.children.length;
  };

  private _scene: THREE.Scene;
  private _planeGeometry: THREE.PlaneGeometry;
  private _rotationSpeed: number = 0.02;
  private _numberOfObjects: number = 0;

  removeCube = () => {
      const allChildren: THREE.Object3D[] = this._scene.children;
      const lastObject: THREE.Object3D = allChildren[allChildren.length - 1];

      if (lastObject instanceof THREE.Mesh) {
          this._scene.remove(lastObject);
          this._numberOfObjects = this._scene.children.length;
      }
  };

  addCube = () => {
      const cubeSize: number = Math.ceil((Math.random() * 3));
      const cubeGeometry: THREE.BoxGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
      const cubeMaterial: THREE.MeshLambertMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff});
      const cube: THREE.Mesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

      cube.castShadow = true;
      cube.name = "cube-" + this._scene.children.length;

      // position the cube randomly in the scene

      cube.position.x = -30 + Math.round((Math.random() * this._planeGeometry.parameters.width));
      cube.position.y = Math.round((Math.random() * 5));
      cube.position.z = -20 + Math.round((Math.random() * this._planeGeometry.parameters.height));

      // add the cube to the scene
      this._scene.add(cube);
      this._numberOfObjects = this._scene.children.length;
  };

  outputObjects = () => {
      console.log(this._scene.children);
  }

  set rotationSpeed(value: number) {
    this._rotationSpeed = value;
  }
  get rotationSpeed(): number {
    return this._rotationSpeed;
  }
  set numberOfObjects(value: number) {
    this._numberOfObjects = value;
  }
  get numberOfObjects(): number {
    return this._numberOfObjects;
  }

};

const Sandbox = (props: Props) => {
    const mount = useRef<HTMLDivElement>(null);

    useEffect(() => {
      // create a scene, that will hold all our elements such as objects, cameras and lights.
      const scene: THREE.Scene = new THREE.Scene();

      // create a camera, which defines where we're looking at.
      const camera: THREE.PerspectiveCamera = 
        new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
      scene.add(camera);
      scene.fog = new THREE.FogExp2(0xffffff, 0.01);
      scene.overrideMaterial = new THREE.MeshLambertMaterial({ color: 0x000000 });

      // create a render and set the size
      const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();

      renderer.setClearColor(new THREE.Color(0xEEEEEE));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.shadowMapEnabled = true;

      // create the ground plane
      const planeGeometry: THREE.PlaneGeometry = new THREE.PlaneGeometry(60, 40, 1, 1);
      const planeMaterial: THREE.MeshLambertMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
      const plane: THREE.Mesh = new THREE.Mesh(planeGeometry, planeMaterial);
      plane.receiveShadow = true;

      // rotate and position the plane
      plane.rotation.x = -0.5 * Math.PI;
      plane.position.x = 0;
      plane.position.y = 0;
      plane.position.z = 0;

      // add the plane to the scene
      scene.add(plane);

      // position and point the camera to the center of the scene
      camera.position.x = -30;
      camera.position.y = 40;
      camera.position.z = 30;
      camera.lookAt(scene.position);

      // add subtle ambient lighting
      var ambientLight: THREE.AmbientLight = new THREE.AmbientLight(0x0c0c0c);
      scene.add(ambientLight);

      // add spotlight for the shadows
      var spotLight: THREE.SpotLight = new THREE.SpotLight(0xffffff);
      spotLight.position.set(-40, 60, -10);
      spotLight.castShadow = true;
      scene.add(spotLight);

      var gui: dat.GUI = new dat.GUI();
      const controls: Controls = new Controls(scene, planeGeometry);

      gui.add(controls, 'rotationSpeed', 0, 0.5);
      gui.add(controls, 'addCube');
      gui.add(controls, 'removeCube');
      gui.add(controls, 'outputObjects');
      gui.add(controls, 'numberOfObjects').listen();

      mount.current?.appendChild(renderer.domElement);

      const render = () => {
          // rotate the cubes around its axes
          scene.traverse(function (e) {
              if (e instanceof THREE.Mesh && e !== plane) {

                  e.rotation.x += controls.rotationSpeed;
                  e.rotation.y += controls.rotationSpeed;
                  e.rotation.z += controls.rotationSpeed;
              }
          });

          // render using requestAnimationFrame
          requestAnimationFrame(render);
          renderer.render(scene, camera);
      }

      render();
    }, []);

    return (
        <>
            <div ref={mount} />
        </>
    );
};

export default withRouter(Sandbox);
