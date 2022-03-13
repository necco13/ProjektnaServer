const scena = new THREE.Scene();
const kamera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth*0.69, window.innerHeight*0.69 );
renderer.domElement.style.left="1000px";
document.body.appendChild( renderer.domElement );

const geometrija = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const kocka = new THREE.Mesh( geometrija, material );
scena.add( kocka );

kamera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scena, kamera );
}
animate();
