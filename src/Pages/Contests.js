import Registration from "../Components/Registrat"
import { Navbar, Nav, Container, Form, Button, Row, Col } from 'react-bootstrap'
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import React, { useRef, useEffect } from 'react'
const URL = 'http://127.0.0.1/'



function Contests() {
    const canvasRef = useRef(null)
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 1000);
        console.log(canvasRef.current)
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            alpha: true
        });
        renderer.setSize(800, 400);

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0xffffff, 0);

        //renderer.setSize(window.innerWidth, window.innerHeight);
        var loader = new GLTFLoader();
        console.log("started loading")
        var msu;
        loader.load('src/Components/msu.glb', function (gltf) {
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
        function onPointerMove(event) {

            // calculate pointer position in normalized device coordinates
            // (-1 to +1) for both components

            var pointerx = (event.clientX / window.innerWidth) * 2 - 1;
            var pointery = - (event.clientY / window.innerHeight) * 2 + 1;
            if (msu) {
                if (pointerx - lastMouseX < 0) {
                    msu.rotation.y -= 0.03
                } else {
                    msu.rotation.y += 0.03
                }
            }
            lastMouseX = pointerx

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
    }, [])





    async function getData() {
        const response = await fetch(URL + 'user-contest/');
        const data = await response.json();
        // setResults(data); 
    }
   // getData();

    //console.log(results);

    return (
        <div>
            <div>
                <span>Регистрация</span>
                <span>Создать</span>
            </div>
            <canvas ref={canvasRef} style={{ position: "absolute" }} width="400" height="400" id="bg"></canvas>

            <div>Мои контесты</div>
            <div>
                {/* <ul>
                    {results.map(contest => (
                        <div>
                            <li key={contest.id}>{contest.name}</li>
                        </div>
                    ))}
                </ul> */}
            </div>
        </div>

    )

}

export const contests = () => {
    return (
        <Contests />
    )
}