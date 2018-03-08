import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import * as THREE from 'three';

@IonicPage()
@Component({
  selector: 'page-box-place',
  templateUrl: 'box-place.html'
})
export class BoxPlacePage {
  @ViewChild('rendererContainer') rendererContainer: ElementRef;

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  camera = null;
  scene = null;
  plane = null;
  cube = null;
  mouse = null;
  raycaster = null;
  isShiftDown = false;
  rollOverMesh = null;
  rollOverMaterial = null;
  cubeGeo = null;
  cubeMaterial = null;
  objects = [];

  constructor() {
    this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
    this.camera.position.set( 500, 800, 1300 );
    this.camera.lookAt( new THREE.Vector3() );

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color( 0xf0f0f0 );

    // roll-over helpers
    const rollOverGeo = new THREE.BoxGeometry( 50, 50, 50 );
    this.rollOverMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000, opacity: 0.5, transparent: true } );
    this.rollOverMesh = new THREE.Mesh( rollOverGeo, this.rollOverMaterial );
    this.scene.add( this.rollOverMesh );

    // cubes
    this.cubeGeo = new THREE.BoxGeometry( 50, 50, 50 );
    this.cubeMaterial = new THREE.MeshLambertMaterial({
      color: 0xfeb74c, map: new THREE.TextureLoader().load('assets/img/square-outline-textured.png')});

    // grid
    const gridHelper = new THREE.GridHelper( 1000, 20 );
    this.scene.add( gridHelper );

    //
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    const geometry = new THREE.PlaneBufferGeometry( 1000, 1000 );
    geometry.rotateX( - Math.PI / 2 );

    this.plane = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { visible: false } ) );
    this.scene.add( this.plane );

    this.objects.push( this.plane );

    // Lights
    const ambientLight = new THREE.AmbientLight( 0x606060 );
    this.scene.add( ambientLight );

    const directionalLight = new THREE.DirectionalLight( 0xffffff );
    directionalLight.position.set( 1, 0.75, 0.5 ).normalize();
    this.scene.add( directionalLight );
  }

  ngAfterViewInit() {
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

    // Add Event Listeners
    this.rendererContainer.nativeElement.addEventListener('mousemove', (event) => {
      this.onMouseMove(event);
    });
    this.rendererContainer.nativeElement.addEventListener('mousedown', (event) => {
      this.onMouseDown(event);
    });
    this.rendererContainer.nativeElement.addEventListener('keydown', (event) => {
      this.onKeyDown(event);
    });
    this.rendererContainer.nativeElement.addEventListener('keyup', (event) => {
      this.onKeyUp(event);
    });

    window.addEventListener('resize', () => {
      this.onWindowResize();
    });

    this.render();
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize( window.innerWidth, window.innerHeight );
  }

  onMouseMove( event ) {
    event.preventDefault();
    this.mouse.set( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1 );
    this.raycaster.setFromCamera( this.mouse, this.camera );
    const intersects = this.raycaster.intersectObjects( this.objects );
    if ( intersects.length > 0 ) {
      const intersect = intersects[ 0 ];
      this.rollOverMesh.position.copy( intersect.point ).add( intersect.face.normal );
      this.rollOverMesh.position.divideScalar( 50 ).floor().multiplyScalar( 50 ).addScalar( 25 );
    }
    this.render();
  }

  onMouseDown( event ) {
    event.preventDefault();
    this.mouse.set( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1 );
    this.raycaster.setFromCamera( this.mouse, this.camera );
    const intersects = this.raycaster.intersectObjects( this.objects );
    if ( intersects.length > 0 ) {
      const intersect = intersects[ 0 ];
      // delete cube
      if ( this.isShiftDown ) {
        if ( intersect.object !== this.plane ) {
          this.scene.remove( intersect.object );
          this.objects.splice( this.objects.indexOf( intersect.object ), 1 );
        }
      // create cube
      } else {
        const voxel = new THREE.Mesh( this.cubeGeo, this.cubeMaterial );
        voxel.position.copy( intersect.point ).add( intersect.face.normal );
        voxel.position.divideScalar( 50 ).floor().multiplyScalar( 50 ).addScalar( 25 );
        this.scene.add( voxel );
        this.objects.push( voxel );
      }
      this.render();
    }
  }

  onKeyDown( event ) {
    switch ( event.keyCode ) {
      case 16: this.isShiftDown = true; break;
    }
  }

  onKeyUp( event ) {
    switch ( event.keyCode ) {
      case 16: this.isShiftDown = false; break;
    }
  }

  render() {
    this.renderer.render( this.scene, this.camera );
  }

}
