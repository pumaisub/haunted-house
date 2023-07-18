import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

THREE.ColorManagement.enabled = false

/**
 * Base
 */
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Axes helper
const axesHelper = new THREE.AxesHelper()
//scene.add(axesHelper)
/**
 * Textures
 */
const matcapTextureArray = [];

const textureLoader = new THREE.TextureLoader()
const matcapTexture = textureLoader.load('/textures/matcaps/1.png')
const matcapTexture2 = textureLoader.load('/textures/matcaps/2.png')
const matcapTexture3 = textureLoader.load('/textures/matcaps/3.png')
const matcapTexture4 = textureLoader.load('/textures/matcaps/4.png')
const matcapTexture5 = textureLoader.load('/textures/matcaps/5.png')
const matcapTexture6 = textureLoader.load('/textures/matcaps/6.png')
const matcapTexture7 = textureLoader.load('/textures/matcaps/7.png')
const matcapTexture8 = textureLoader.load('/textures/matcaps/8.png')

console.log(matcapTexture)

matcapTextureArray.push(matcapTexture)
matcapTextureArray.push(matcapTexture2)
matcapTextureArray.push(matcapTexture3)
matcapTextureArray.push(matcapTexture4)
matcapTextureArray.push(matcapTexture5)
matcapTextureArray.push(matcapTexture6)
matcapTextureArray.push(matcapTexture7)
matcapTextureArray.push(matcapTexture8)

console.log(matcapTextureArray)


/* 
* Fonts 
*/ 
const fontLoader = new FontLoader()

fontLoader.load(
    '/fonts/helvetiker_regular.typeface.json',
    (font) =>
    {
        const textGeometry = new TextGeometry(
            'i love donuts',
            {
                font: font,
                size: 0.5,
                height: 0.2,
                curveSegments: 5,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegment: 3
            }
        )
        textGeometry.computeBoundingBox()
        textGeometry.translate(
            - (textGeometry.boundingBox.max.x - 0.02)* 0.5,
            - (textGeometry.boundingBox.max.y - 0.02) * 0.5,
            - (textGeometry.boundingBox.max.z - 0.03) * 0.5
        )
        console.log(textGeometry.boundingBox)


        const textMaterial = new THREE.MeshBasicMaterial()
        const textMetcapMaterial = new THREE.MeshMatcapMaterial()
        textMaterial.wireframe = true 
        textMetcapMaterial.wireframe = false
        textMetcapMaterial.matcap = matcapTexture4
        const text = new THREE.Mesh(textGeometry, textMaterial)
        scene.add(text)

        console.time('donuts')

        //const donutWireframeMaterial = new THREE.MeshBasicMaterial

        const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45)
        const donutMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapTexture })
        const donutMaterial2 = new THREE.MeshMatcapMaterial({ matcap: matcapTexture2 })
        const donutMaterial3 = new THREE.MeshMatcapMaterial({ matcap: matcapTexture3 })
        const donutMaterial4 = new THREE.MeshMatcapMaterial({ matcap: matcapTexture4 })
        const donutMaterial5 = new THREE.MeshMatcapMaterial({ matcap: matcapTexture5 })
        const donutMaterial6 = new THREE.MeshMatcapMaterial({ matcap: matcapTexture6 })
        const donutMaterial7 = new THREE.MeshMatcapMaterial({ matcap: matcapTexture7 })
        const donutMaterial8 = new THREE.MeshMatcapMaterial({ matcap: matcapTexture8 })

        
        const donutMaterialArray = []
        donutMaterialArray.push(donutMaterial)
        donutMaterialArray.push(donutMaterial2)
        donutMaterialArray.push(donutMaterial3)
        donutMaterialArray.push(donutMaterial4)
        donutMaterialArray.push(donutMaterial5)
        donutMaterialArray.push(donutMaterial6)
        donutMaterialArray.push(donutMaterial7)
        donutMaterialArray.push(donutMaterial8)



        const x = 0, y = 0;

        const heartShape = new THREE.Shape();

        heartShape.moveTo(x + 5, y + 5);
        heartShape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y);
        heartShape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7);
        heartShape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19);
        heartShape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7);
        heartShape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y);
        heartShape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5);

        const geometry = new THREE.ShapeGeometry(heartShape);
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const mesh = new THREE.Mesh(geometry, material);
        //scene.add(mesh);


        for(let i = 0; i < 300 ; i++){
            //const donut = new THREE.Mesh(donutGeometry, donutMaterialArray[(Math.floor(Math.random() * donutMaterialArray.length))])
            const donut = new THREE.Mesh(donutGeometry, donutMaterial)
           
            donut.position.x = (Math.random() - 0.5) * 10
            donut.position.y = (Math.random() - 0.5) * 10
            donut.position.z = (Math.random() - 0.5) * 10

            donut.rotation.x = Math.random() * Math.PI
            donut.rotation.y = Math.random() * Math.PI

            const scale = Math.random()
            donut.scale.set(scale,scale,scale)


            scene.add(donut)
    
        }

        for (let i = 0; i < 500; i++) {
            //const donut = new THREE.Mesh(donutGeometry, donutMaterialArray[(Math.floor(Math.random() * donutMaterialArray.length))])
            const mesh = new THREE.Mesh(geometry, material);

            mesh.position.x = (Math.random() - 0.5) * 10
            mesh.position.y = (Math.random() - 0.5) * 10
            mesh.position.z = (Math.random() - 0.5) * 10

            mesh.rotation.x = Math.random() * Math.PI
            mesh.rotation.y = Math.random() * Math.PI

            const scale = Math.random()
            mesh.scale.set(0.03*scale,0.03*scale,0.03*scale)


            scene.add(mesh)

        }

        console.timeEnd('donuts')
    }
)


/**
 * Object
 */
const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial()
)



/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.outputColorSpace = THREE.LinearSRGBColorSpace
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()