const scena = new THREE.Scene();
const kamera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1,10000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth*0.69, window.innerHeight*0.69 );

const sonce = new THREE.DirectionalLight( 0xfcff96, 1);
sonce.position.set(1200,150,100);
scena.add(sonce);

const light = new THREE.AmbientLight( 0x404040,8 ); // soft white light
scena.add( light );

scena.background = new THREE.Color(0x87ceeb);

document.body.appendChild( renderer.domElement );

const material = new THREE.MeshPhongMaterial( { vertexColors: true } );

kamera.position.z = 100;
kamera.position.y = 400;
kamera.position.x = 400;
kamera.rotation.x = 0;

var OBJFile = 'Skripti/Cesta.obj';
var MTLFile = 'Skripti/Cesta.mtl';
new THREE.MTLLoader()
.load(MTLFile, function (materials) {
    materials.preload();
    new THREE.OBJLoader()
        .setMaterials(materials)
        .load(OBJFile, function (object) {
            object.position.z = - 905;
            var texture = new THREE.TextureLoader();

            object.traverse(function (child) {   // aka setTexture
                if (child instanceof THREE.Mesh) {
                    child.material.map = texture;
                }
            });
            scena.add(object);
        });
});
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scena, kamera );
}
animate();
