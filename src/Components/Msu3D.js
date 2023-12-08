import * as THREE from 'three';

import { useEffect, useRef } from "react";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import modelPath from '../Components/msu.glb'
function Msu3D(props) {
    const { sizeX, sizeY } = props
    const refContainer = useRef(null);
    useEffect(() => {
        // === THREE.JS CODE START ===
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, sizeX / sizeY, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(sizeX, sizeY);

        renderer.setClearColor(0xffffff, 0);    // document.body.appendChild( renderer.domElement );
        // use ref as a mount point of the Three.js scene instead of the document.body
        refContainer.current && refContainer.current.appendChild(renderer.domElement);
        var loader = new GLTFLoader();
        console.log("started loading")
        var msu;
        loader.load(modelPath, function (gltf) {
            console.log("loaded")
            msu = gltf.scene;  // sword 3D object is loaded
            msu.scale.set(2, 2, 2);
            msu.position.z = 0
            msu.position.y = -0.3
            scene.add(msu)
        });
        const light = new THREE.AmbientLight(0x404040);
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        camera.position.setZ(0.7)
        scene.add(light)
        let lastMouseX = 0
        let lastMouseY = 0
        function onPointerMove(event) {
            var pointerx = (event.clientX / window.innerWidth) * 2 - 1;
            var pointery = - (event.clientY / window.innerHeight) * 2 + 1;
            if (msu) {
                if (Math.abs(pointerx - lastMouseX) > 0.003) {
                    // if (pointerx - lastMouseX < 0) {
                    //     msu.rotation.y -= 0.03
                    // } else {
                    //     msu.rotation.y += 0.03
                    // }
                    msu.rotation.y += (pointerx - lastMouseX)*3
                }
                if (Math.abs(pointery - lastMouseY) > 0.003) {
                    // if (pointery - lastMouseY < 0) {
                    //     msu.rotation.x += 0.01
                    // } else {
                    //     msu.rotation.x -= 0.01
                    // }

                }
                lastMouseX = pointerx
                lastMouseY = pointery

            }
        }
            window.addEventListener('pointermove', onPointerMove);
            function animate() {
                // if (msu) {
                //     msu.rotation.y += 0.01
                // }
                requestAnimationFrame(animate);
                renderer.render(scene, camera)
            }
            animate()
        }, []);
    return (
        <div ref={refContainer}></div>

    );
}

export default Msu3D