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

	avto.position.z=0.3;
		return avto;
}

function naredic(x,y)
{
	const cesta = new THREE.Group();

	const asfalt = new THREE.Mesh(
		new THREE.BoxGeometry(5,10,0.1),
		new THREE.MeshBasicMaterial( { color: 0x282B2A } ));
	cesta.add(asfalt);

	const crta = new THREE.Mesh(
		new THREE.BoxGeometry(0.2,1,0.1),
		new THREE.MeshBasicMaterial( { color: 0xffffff } ));
		crta.position.y=-1.2;
		crta.position.z=0.01;
	cesta.add(crta);

	const crta2 = new THREE.Mesh(
		new THREE.BoxGeometry(0.2,1,0.1),
		new THREE.MeshBasicMaterial( { color: 0xffffff } ));
		crta2.position.z=0.01;
		crta2.position.y=1.2;
	cesta.add(crta2);

	const crta3 = new THREE.Mesh(
		new THREE.BoxGeometry(0.2,1,0.1),
		new THREE.MeshBasicMaterial( { color: 0xffffff } ));
		crta3.position.z=0.01;
		crta3.position.y=3.6;
	cesta.add(crta3);

	const plocnikl = new THREE.Mesh(
		new THREE.BoxGeometry(1,10,0.1),
		new THREE.MeshBasicMaterial( { color: 0x545454 } ));
		plocnikl.position.x=3;
		plocnikl.position.z=0.1;
	cesta.add(plocnikl);

	const plocnikd = new THREE.Mesh(
		new THREE.BoxGeometry(1,10,0.1),
		new THREE.MeshBasicMaterial( { color: 0x545454 } ));
		plocnikd.position.x=-3;
		plocnikd.position.z=0.1;
	cesta.add(plocnikd);

	const trava = new THREE.Mesh(
		new THREE.BoxGeometry(34,10,0.1),
		new THREE.MeshBasicMaterial( { color: 0x008000 } ));
		trava.position.z=-0.1;
	cesta.add(trava);
	cesta.position.x=x;
	cesta.position.y=y;
	return cesta;

}

function naredid(x,y)
{
	const drevo = new THREE.Group();

	const steblo = new THREE.Mesh(
		new THREE.CylinderGeometry( 0.2, 0.2, 1.15, 12),
		new THREE.MeshBasicMaterial( { color: 0x53350A } ));
	drevo.add(steblo);

	const krosnja = new THREE.Mesh(
		new THREE.SphereGeometry( 3, 3, 16 ),
		new THREE.MeshBasicMaterial( { color: 0x42692f } ));
	drevo.add(krosnja);

	drevo.position.x=x;
	drevo.position.y=y;
	return drevo;

}
