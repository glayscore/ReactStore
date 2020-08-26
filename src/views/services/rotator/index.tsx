import React, { useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import * as THREE from 'three';
import * as dat from 'dat.gui';
import { OrbitControls } from 'three-orbitcontrols-ts';
import { OBJLoader2 } from 'three/examples/jsm/loaders/OBJLoader2';
import { createEquirectangularShader } from './shaders';

interface Props {
}

class ControlGui {
    private _fov: number = 75;

    get fov(): number {
        return this._fov;
    }
    set fov(value: number) {
        this._fov = value;
    }
};

const Rotator = (props: Props) => {
    const mount = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const controlGui = new ControlGui();
        const gui = new dat.GUI();
        gui.add(controlGui, 'fov', 0, 100);

        const loader = new OBJLoader2();

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            controlGui.fov, 
            window.innerWidth / window.innerHeight, 
            0.1,
            1000,
        );
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0xffffff);

        loader.load('/models/Sphere.obj', (geometry) => {
            const texture = new THREE.TextureLoader().load('/images/Bathroom_Janis_Cam360_001.jpg');
            const equirectangularShader = createEquirectangularShader(texture);
            // @ts-ignore
            const mesh: THREE.Mesh = geometry.getObjectByName('Sphere');

            mesh.material = equirectangularShader;
            mesh.scale.x = -0.1;
            mesh.scale.y = 0.1;
            mesh.scale.z = 0.1;
            scene.add(geometry);
        }, undefined, undefined, undefined);
    
        camera.position.z = 0.3;

        const controls = new OrbitControls(camera, renderer.domElement);

        const animate = () => {
            requestAnimationFrame(animate);
            camera.fov = controlGui.fov;
            
            camera.updateProjectionMatrix();
            controls.update();
            renderer.render(scene, camera);
        };

        animate();

        mount.current?.appendChild(renderer.domElement);
    }, []);

    return (
        <>
            <div ref={mount} />
        </>
    );
};

export default withRouter(Rotator);
