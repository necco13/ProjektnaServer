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

const avto = new THREE.Group();

kamera.position.z = -878;
kamera.position.y = 100;
kamera.position.x = 30;
kamera.rotation.x = 0;

function nalozi(pot)
{
var OBJFile = pot+'.obj';
var MTLFile = pot+'.mtl';
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
            if(pot=='Modeli/Cesta')
              scena.add(object);
            else
            {
              object.position.y = 80;
              avto.add(object);
            }
        });
});
}
nalozi('Modeli/Cesta');
nalozi('Modeli/Avto');
avto.add(kamera);
avto.position.x=450;
avto.position.y=-20;
scena.add(avto);

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scena, kamera );
}
animate();
