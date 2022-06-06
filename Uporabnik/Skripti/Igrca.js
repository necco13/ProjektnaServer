const scena = new THREE.Scene();
const kamera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth*0.69, window.innerHeight*0.69 );

const sonce = new THREE.DirectionalLight( 0xfcff96, 0.6);
sonce.position.set(100,-300,400);
scena.add(sonce);

const svetloba = new THREE.AmbientLight( 0xffffff, 0.6);
scena.add(svetloba);

scena.background = new THREE.Color(0x87ceeb);

document.body.appendChild( renderer.domElement );


kamera.position.z = 3;
kamera.position.y = -5;
kamera.rotation.x = 1.3;

scena.add(naredia());
scena.add(naredic(0,0));

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scena, kamera );
}
animate();
