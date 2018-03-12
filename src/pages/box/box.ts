import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import * as THREE from 'three';

//import { dat } from 'dat.gui';

@IonicPage()
@Component({
  selector: 'page-box',
  templateUrl: 'box.html'
})
export class BoxPage {
  @ViewChild('rendererContainer') rendererContainer: ElementRef;

 renderer = new THREE.WebGLRenderer();
 scene = null;
 camera = null;
 mesh = null;

  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.z = 1000;
    const geometry = new THREE.BoxGeometry(200, 200, 200);
    const material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});
    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);
  }

  ngAfterViewInit() {
     this.renderer.setSize(window.innerWidth, window.innerHeight);
     this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
     this.animate();
   }

  animate() {
    window.requestAnimationFrame(() => this.animate());
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.02;
    this.renderer.render(this.scene, this.camera);
  }



  // container = null;
  // camera = null;
  // controls = null;
  // scene = null;
  // renderer = null;
  // light = null;
  // pointLight = null;

  // material1 = null;
  // material2 = null;
  // material3 = null;

  // analyser1 = null;
  // analyser2 = null;
  // analyser3 = null;

	// clock = new THREE.Clock();

	// constructor() {
  //   this.camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 10000 );
  //   this.camera.position.set( 0, 25, 0 );

  //   let listener = new THREE.AudioListener();
  //   this.camera.add( listener );

  //   this.scene = new THREE.Scene();
  //   this.scene.fog = new THREE.FogExp2( 0x000000, 0.0025 );

  //   this.light = new THREE.DirectionalLight( 0xffffff );
  //   this.light.position.set( 0, 0.5, 1 ).normalize();
  //   this.scene.add( this.light );

  //   let sphere = new THREE.SphereGeometry( 20, 32, 16 );

  //   this.material1 = new THREE.MeshPhongMaterial( { color: 0xffaa00, flatShading: true, shininess: 0 } );
  //   this.material2 = new THREE.MeshPhongMaterial( { color: 0xff2200, flatShading: true, shininess: 0 } );
  //   this.material3 = new THREE.MeshPhongMaterial( { color: 0x6622aa, flatShading: true, shininess: 0 } );

  //   // sound spheres
  //   let audioLoader = new THREE.AudioLoader();
  //   let mesh1 = new THREE.Mesh( sphere, this.material1 );
  //   mesh1.position.set( -250, 30, 0 );
  //   this.scene.add( mesh1 );

  //   let sound1 = new THREE.PositionalAudio( listener );
  //   audioLoader.load( 'sounds/358232_j_s_song.ogg', function( buffer ) {
  //     sound1.setBuffer( buffer );
  //     sound1.setRefDistance( 20 );
  //     sound1.play();
  //   }, null, null);
  //   mesh1.add( sound1 );

  //   //
  //   let mesh2 = new THREE.Mesh( sphere, this.material2 );
  //   mesh2.position.set( 250, 30, 0 );
  //   this.scene.add( mesh2 );

  //   let sound2 = new THREE.PositionalAudio( listener );
  //   audioLoader.load( 'sounds/376737_Skullbeatz___Bad_Cat_Maste.ogg', function( buffer ) {
  //     sound2.setBuffer( buffer );
  //     sound2.setRefDistance( 20 );
  //     sound2.play();
  //   }, null, null);
  //   mesh2.add( sound2 );
  //   //

  //   let mesh3 = new THREE.Mesh( sphere, this.material3 );
  //   mesh3.position.set( 0, 30, -250 );
  //   this.scene.add( mesh3 );

  //   let sound3 = new THREE.PositionalAudio( listener );
  //   let oscillator = listener.context.createOscillator();
  //   oscillator.type = 'sine';
  //   oscillator.frequency.value = 144;
  //   oscillator.start(0);
  //   //sound3.setNodeSource(oscillator);
  //   sound3.setRefDistance( 20 );
  //   sound3.setVolume(0.5);
  //   mesh3.add(sound3);

  //   // analysers
  //   this.analyser1 = new THREE.AudioAnalyser( sound1, 32 );
  //   this.analyser2 = new THREE.AudioAnalyser( sound2, 32 );
  //   this.analyser3 = new THREE.AudioAnalyser( sound3, 32 );

  //   // global ambient audio
  //   let sound4 = new THREE.Audio( listener );
  //   audioLoader.load( 'sounds/Project_Utopia.ogg', function( buffer ) {
  //     sound4.setBuffer( buffer );
  //     sound4.setLoop(true);
  //     sound4.setVolume(0.5);
  //     sound4.play();}, null, null);

  //   // ground
  //   let helper = new THREE.GridHelper( 1000, 10, 0x444444, 0x444444 );
  //   helper.position.y = 0.1;
  //   this.scene.add( helper );

  //   //
  //   let SoundControls = function() {
  //     this.master = listener.getMasterVolume();
  //     this.firstSphere =  sound1.getVolume();
  //     this.secondSphere =  sound2.getVolume();
  //     this.thirdSphere = sound3.getVolume();
  //     this.Ambient =  sound4.getVolume();
  //   };
  //   let GeneratorControls = function() {
  //     this.frequency = oscillator.frequency.value;
  //     this.wavetype = oscillator.type;
  //   };
  //   let gui = new dat.GUI();
  //   let soundControls = new SoundControls();
  //   let generatorControls = new GeneratorControls();
  //   let volumeFolder = gui.addFolder('sound volume');
  //   let generatorFolder = gui.addFolder('sound generator');
  //   volumeFolder.add(soundControls, 'master').min(0.0).max(1.0).step(0.01).onChange(function() {
  //     listener.setMasterVolume(soundControls.master);
  //   });
  //   volumeFolder.add(soundControls, 'firstSphere').min(0.0).max(1.0).step(0.01).onChange(function() {
  //     sound1.setVolume(soundControls.firstSphere);
  //   });
  //   volumeFolder.add(soundControls, 'secondSphere').min(0.0).max(1.0).step(0.01).onChange(function() {
  //     sound2.setVolume(soundControls.secondSphere);
  //   });

  //   volumeFolder.add(soundControls, 'thirdSphere').min(0.0).max(1.0).step(0.01).onChange(function() {
  //     sound3.setVolume(soundControls.thirdSphere);
  //   });
  //   volumeFolder.add(soundControls, 'Ambient').min(0.0).max(1.0).step(0.01).onChange(function() {
  //     sound4.setVolume(soundControls.Ambient);
  //   });
  //   volumeFolder.open();
  //   generatorFolder.add(generatorControls, 'frequency').min(50.0).max(5000.0).step(1.0).onChange(function() {
  //     oscillator.frequency.value = generatorControls.frequency;
  //   });
  //   generatorFolder.add(generatorControls, 'wavetype', ['sine', 'square', 'sawtooth', 'triangle']).onChange(function() {
  //     oscillator.type = generatorControls.wavetype;
  //   });
  //   generatorFolder.open();


  //   this.renderer = new THREE.WebGLRenderer( { antialias: true } );
  //   this.renderer.setPixelRatio( window.devicePixelRatio );
  //   this.renderer.setSize( window.innerWidth, window.innerHeight );
  //   this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
  //   //
  //   this.controls = new THREE.FirstPersonControls( this.camera, this.renderer.domElement );

  //   this.controls.movementSpeed = 70;
  //   this.controls.lookSpeed = 0.05;
  //   this.controls.noFly = true;
  //   this.controls.lookVertical = false;

  //   window.addEventListener('resize', () => {
  //     this.onWindowResize();
  //   });
	// }

  // onWindowResize() {
  //   this.camera.aspect = window.innerWidth / window.innerHeight;
  //   this.camera.updateProjectionMatrix();
  //   this.renderer.setSize( window.innerWidth, window.innerHeight );
  //   this.controls.handleResize();
  // }

  // animate() {
  //   window.requestAnimationFrame( this.animate );
  //   this.render();
  // }

  // render() {
  //   let delta = this.clock.getDelta();
  //   this.controls.update( delta );
  //   this.material1.emissive.b = this.analyser1.getAverageFrequency() / 256;
  //   this.material2.emissive.b = this.analyser2.getAverageFrequency() / 256;
  //   this.material3.emissive.b = this.analyser3.getAverageFrequency() / 256;
  //   this.renderer.render( this.scene, this.camera );
  // }


}
