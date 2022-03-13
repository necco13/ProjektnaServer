const scena = new THREE.Scene();
const kamera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth*0.69, window.innerHeight*0.69 );

const sonce = new THREE.DirectionalLight( 0xfcff96, 0.6);
sonce.position.set(100,-300,400);
scena.add(sonce);

const svetloba = new THREE.AmbientLight( 0xffffff, 0.6);
scena.add(svetloba);

scena.background = new THREE.Color(0x009933);

document.body.appendChild( renderer.domElement );


kamera.position.z = 5;
kamera.position.y = -5;
kamera.rotation.x = 1.2;

scena.add(naredia())

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scena, kamera );
}
animate();


function naredia()
{
	const avto = new THREE.Group()

	const telo = new THREE.Mesh(
		new THREE.BoxGeometry(1,1.8,0.5),
		new THREE.MeshBasicMaterial( { color: 0x0000FF } ));
	avto.add(telo);

	const kabina = new THREE.Mesh(
		new THREE.BoxGeometry(0.91,1,0.3),
		new THREE.MeshBasicMaterial( { color: 0xffffff } ));
		kabina.position.y=-0.1;
		kabina.position.z=0.3;
	avto.add(kabina);

	const okno = new THREE.Mesh(
		new THREE.BoxGeometry(0.85,0.3,0.2),
		new THREE.MeshBasicMaterial( { color: 0x000000 } ));
		okno.position.y=-0.52;
		okno.position.z=0.3;
	avto.add(okno);

	const zkolo = new THREE.Mesh(
		new THREE.CylinderGeometry( 0.2, 0.2, 1.15, 12),
		new THREE.MeshBasicMaterial( { color: 0x000000 } ));
		zkolo.rotation.z=1.56;
		zkolo.position.y=-0.63;
		zkolo.position.z=-0.2;
	avto.add(zkolo);

	const pkolo = new THREE.Mesh(
		new THREE.CylinderGeometry( 0.2, 0.2, 1.15, 12),
		new THREE.MeshBasicMaterial( { color: 0x000000 } ));
		pkolo.rotation.z=1.54;
		pkolo.position.y=0.63;
		pkolo.position.z=-0.2;
	avto.add(pkolo);
		return avto;
}

function naredic()
{


}
