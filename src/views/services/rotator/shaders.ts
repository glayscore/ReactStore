/* eslint-disable no-multi-str */
import * as THREE from 'three';

export const createEquirectangularShader = (texture: THREE.Texture) => new THREE.ShaderMaterial({
  // side: THREE.BackSide,
  uniforms: {
    map: {
      // @ts-ignore
      type: 't',
      value: texture,
    },
    placement: {
      // @ts-ignore
      type: 'v3',
      value: new THREE.Vector3(),
    }
  },
  vertexShader: '\
    varying vec3 worldPosition;\n\
    void main () {\n\
      vec4 p = vec4 (position, 1.0);\n\
      worldPosition = (modelMatrix * p).xyz;\n\
      gl_Position = projectionMatrix * modelViewMatrix * p;\n\
  }',
  fragmentShader: '\
    uniform sampler2D map;\n\
    uniform vec3 placement;\n\
    varying vec3 worldPosition;\n\
    const float seamWidth = 0.01;\n\
    void main () {\n\
      vec3 R = worldPosition - placement;\n\
      float r = length (R);\n\
      float c = -R.y / r;\n\
      float theta = acos (c);\n\
      float phi = atan (R.x, -R.z);\n\
      float seam = \n\
        max (0.0, 20.0 - abs (R.x / r) / seamWidth) *\n\
        clamp (1.0 + (R.z / r) / seamWidth, 0.0, 1.0);\n\
      gl_FragColor = texture2D (map, vec2 (\n\
        0.5 + phi / 6.2831852,\n\
        theta / 3.1415926\n\
      ), -2.0 * log2(1.0 + c * c) -12.3 * seam);\n\
    }',
});
