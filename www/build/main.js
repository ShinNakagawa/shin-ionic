webpackJsonp([15],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthProvider = (function () {
    function AuthProvider(db, af) {
        this.db = db;
        this.af = af;
        this.basePath = 'shin/users';
        this.user = af.authState;
    }
    AuthProvider.prototype.login = function (email, password) {
        var _this = this;
        return this.af.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.authState = user;
            _this.setUserStatus('online');
            console.log("success to log in: uid=", _this.authState.uid);
        }).catch(function (error) {
            console.log(error);
        });
    };
    AuthProvider.prototype.logout = function () {
        this.af.auth.signOut();
        this.setUserStatus('offline');
        //  console.log("success to log out");
    };
    Object.defineProperty(AuthProvider.prototype, "currentUserId", {
        get: function () {
            return this.authState !== null ? this.authState.uid : '';
        },
        enumerable: true,
        configurable: true
    });
    AuthProvider.prototype.registerUser = function (credentials) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            _this.af.auth.createUserWithEmailAndPassword(credentials.email, credentials.password).then(function (authData) {
                observer.next(authData);
                _this.authState = authData;
                var status = 'online';
                _this.setUserData(credentials.email, credentials.username, credentials.imageUrl, status, authData.uid);
            }).catch(function (error) {
                observer.error(error);
            });
        });
    };
    AuthProvider.prototype.setUserData = function (email, displayName, imageUrl, status, uid) {
        var path = this.basePath + "/" + this.currentUserId;
        var data = {
            email: email,
            displayName: displayName,
            imageUrl: imageUrl,
            status: status,
            uid: uid
        };
        this.db.object(path).update(data)
            .catch(function (error) { return console.log(error); });
    };
    AuthProvider.prototype.setUserStatus = function (status) {
        var path = this.basePath + "/" + this.currentUserId;
        var data = {
            status: status
        };
        this.db.object(path).update(data)
            .catch(function (error) { return console.log(error); });
    };
    Object.defineProperty(AuthProvider.prototype, "currentUser", {
        get: function () {
            return this.af.auth.currentUser ? this.af.auth.currentUser.email : null;
        },
        enumerable: true,
        configurable: true
    });
    AuthProvider.prototype.authUser = function () {
        return this.user;
    };
    AuthProvider.prototype.resetPassword = function (emailAddress) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            _this.af.auth.sendPasswordResetEmail(emailAddress).then(function (success) {
                //console.log('email sent', success);
                observer.next(success);
            }, function (error) {
                //console.log('error sending email',error);
                observer.error(error);
            });
        });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventPage = (function () {
    function EventPage(navParams) {
        this.navParams = navParams;
        this.place = 'City hall';
        this.latData = 52.130889;
        this.lngData = -106.660233;
        this.item = navParams.get('item');
        var dataString = this.item.place;
        var data = dataString.split(',');
        if (data[0] !== '') {
            this.place = data[0];
        }
        if (data[1] !== '' && data[2] !== '') {
            this.latData = Number(data[1]);
            this.lngData = Number(data[2]);
        }
    }
    EventPage.prototype.ionViewDidLoad = function () {
        this.LoadMap();
    };
    EventPage.prototype.LoadMap = function () {
        var _this = this;
        var latLng = new google.maps.LatLng(this.latData, this.lngData);
        var mapOptions = {
            center: latLng,
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        //add marker
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            title: this.place,
            position: latLng
        });
        var infoWindow = new google.maps.InfoWindow({
            content: "<h4>Center Location</h4>"
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], EventPage.prototype, "mapElement", void 0);
    EventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-event',template:/*ion-inline-start:"E:\ionic\shin-ionic\src\pages\contact\event\event.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Event Information</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <img *ngIf="item.imageUrl"  [src]="item.imageUrl" />\n    <ion-card-content>\n      <h2 class="card-title">{{item.name}}</h2>\n      <p>Place: {{place}}</p>\n      <p>Date: {{item.date}}</p>\n      <p>Description: {{item.description}}</p>\n    </ion-card-content>\n  </ion-card>\n\n  <h2>{{place}}</h2>\n  <div #map id="map"></div>\n</ion-content>'/*ion-inline-end:"E:\ionic\shin-ionic\src\pages\contact\event\event.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EventPage);
    return EventPage;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoragePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_upload_model__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_storage__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 // to help loop over files more succinctly



var StoragePage = (function () {
    function StoragePage(navCtrl, loadingCtrl, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.basePath = 'shin/uploads';
        this.uploadItems = this.db.list(this.basePath + "/").valueChanges();
    }
    StoragePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StoragePage');
    };
    StoragePage.prototype.handleFiles = function (event) {
        this.files = event.target.files;
    };
    StoragePage.prototype.uploadFiles = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        var filesToUpload = this.files;
        var filesIdx = __WEBPACK_IMPORTED_MODULE_3_lodash__["range"](filesToUpload.length);
        __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](filesIdx, function (idx) {
            // console.log(filesToUpload[idx]);
            _this.upload = new __WEBPACK_IMPORTED_MODULE_2__models_upload_model__["a" /* Upload */](filesToUpload[idx]);
            var storageRef = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["storage"]().ref();
            var uploadTask = storageRef.child(_this.basePath + "/" + _this.upload.file.name)
                .put(_this.upload.file);
            loader.present();
            uploadTask.on(__WEBPACK_IMPORTED_MODULE_5_firebase_app__["storage"].TaskEvent.STATE_CHANGED, 
            // three observers
            // 1.) state_changed observer
            function (snapshot) {
                // upload in progress
                _this.upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
                console.log(_this.upload.progress);
            }, 
            // 2.) error observer
            function (error) {
                // upload failed
                console.log(error);
                loader.dismiss();
            }, 
            // 3.) success observer
            function () {
                _this.upload.url = uploadTask.snapshot.downloadURL;
                _this.upload.name = _this.upload.file.name;
                _this.saveFileData(_this.upload);
                loader.dismiss();
            });
        });
    };
    StoragePage.prototype.saveFileData = function (upload) {
        var key = this.db.list(this.basePath + "/").push(upload).key;
        var path = this.basePath + "/" + key;
        var data = {
            id: key
        };
        this.db.object(path).update(data)
            .catch(function (error) { return console.log(error); });
        console.log('File saved!: ' + upload.url);
    };
    StoragePage.prototype.deleteItem = function (item) {
        console.log(item);
        //delete data in list
        var path = this.basePath + "/" + item.id;
        this.db.object(path).remove().then(function (res) {
            console.log('Data deleted from database! ' + item.name);
        }).catch(function (err) {
            console.log(err);
        });
        //delete file in storage
        var storageRef = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["storage"]().ref().child(this.basePath + "/" + item.name);
        storageRef.delete().then(function (snapshot) {
            console.log('File deleted from storage!: ' + item.name);
        }).catch(function (err) {
            console.log('Failed to delete from storage!: ' + item.name);
        });
        var alert = this.alertCtrl.create({
            title: 'delete file',
            message: 'delete file from storage:',
            buttons: ['OK']
        });
        alert.present();
    };
    StoragePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-storage',template:/*ion-inline-start:"E:\ionic\shin-ionic\src\pages\storage\storage.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Storage</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="container">\n    <div *ngIf="upload">\n      <div class="progress">\n        <div class="progress-bar progress-bar-animated" \n        [ngStyle]="{ \'width\': upload?.progress + \'%\' }"></div>\n      </div>\n      Progress: {{upload?.progress}}% Complete\n    </div>\n    <div class="container">\n      <input type="file" (change)="handleFiles($event)" multiple>\n      <button ion-button color="secondary" small (click)="uploadFiles()">\n        <ion-icon name="cloud-upload"></ion-icon>\n      </button>\n    </div>\n  </div>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of uploadItems | async">\n      <ion-item>\n        <ion-avatar item-start>\n          <img [src]="item.url" />\n        </ion-avatar>\n        <ion-icon name="download"></ion-icon>\n        <a href="{{item.url}}" download>{{item.name}}</a>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="danger" (click)="deleteItem(item)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"E:\ionic\shin-ionic\src\pages\storage\storage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], StoragePage);
    return StoragePage;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxPlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__(386);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoxPlacePage = (function () {
    function BoxPlacePage() {
        this.renderer = new __WEBPACK_IMPORTED_MODULE_1_three__["p" /* WebGLRenderer */]({ antialias: true });
        this.camera = null;
        this.scene = null;
        this.plane = null;
        this.cube = null;
        this.mouse = null;
        this.raycaster = null;
        this.isShiftDown = false;
        this.rollOverMesh = null;
        this.rollOverMaterial = null;
        this.cubeGeo = null;
        this.cubeMaterial = null;
        this.objects = [];
        this.camera = new __WEBPACK_IMPORTED_MODULE_1_three__["i" /* PerspectiveCamera */](45, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.set(500, 800, 1300);
        this.camera.lookAt(new __WEBPACK_IMPORTED_MODULE_1_three__["o" /* Vector3 */]());
        this.scene = new __WEBPACK_IMPORTED_MODULE_1_three__["l" /* Scene */]();
        this.scene.background = new __WEBPACK_IMPORTED_MODULE_1_three__["c" /* Color */](0xf0f0f0);
        // roll-over helpers
        var rollOverGeo = new __WEBPACK_IMPORTED_MODULE_1_three__["b" /* BoxGeometry */](50, 50, 50);
        this.rollOverMaterial = new __WEBPACK_IMPORTED_MODULE_1_three__["g" /* MeshBasicMaterial */]({ color: 0xff0000, opacity: 0.5, transparent: true });
        this.rollOverMesh = new __WEBPACK_IMPORTED_MODULE_1_three__["f" /* Mesh */](rollOverGeo, this.rollOverMaterial);
        this.scene.add(this.rollOverMesh);
        // cubes
        this.cubeGeo = new __WEBPACK_IMPORTED_MODULE_1_three__["b" /* BoxGeometry */](50, 50, 50);
        this.cubeMaterial = new __WEBPACK_IMPORTED_MODULE_1_three__["h" /* MeshLambertMaterial */]({
            color: 0xfeb74c, map: new __WEBPACK_IMPORTED_MODULE_1_three__["m" /* TextureLoader */]().load('assets/img/square-outline-textured.png')
        });
        // grid
        var gridHelper = new __WEBPACK_IMPORTED_MODULE_1_three__["e" /* GridHelper */](1000, 20);
        this.scene.add(gridHelper);
        //
        this.raycaster = new __WEBPACK_IMPORTED_MODULE_1_three__["k" /* Raycaster */]();
        this.mouse = new __WEBPACK_IMPORTED_MODULE_1_three__["n" /* Vector2 */]();
        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["j" /* PlaneBufferGeometry */](1000, 1000);
        geometry.rotateX(-Math.PI / 2);
        this.plane = new __WEBPACK_IMPORTED_MODULE_1_three__["f" /* Mesh */](geometry, new __WEBPACK_IMPORTED_MODULE_1_three__["g" /* MeshBasicMaterial */]({ visible: false }));
        this.scene.add(this.plane);
        this.objects.push(this.plane);
        // Lights
        var ambientLight = new __WEBPACK_IMPORTED_MODULE_1_three__["a" /* AmbientLight */](0x606060);
        this.scene.add(ambientLight);
        var directionalLight = new __WEBPACK_IMPORTED_MODULE_1_three__["d" /* DirectionalLight */](0xffffff);
        directionalLight.position.set(1, 0.75, 0.5).normalize();
        this.scene.add(directionalLight);
    }
    BoxPlacePage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
        // Add Event Listeners
        this.rendererContainer.nativeElement.addEventListener('mousemove', function (event) {
            _this.onMouseMove(event);
        });
        this.rendererContainer.nativeElement.addEventListener('mousedown', function (event) {
            _this.onMouseDown(event);
        });
        this.rendererContainer.nativeElement.addEventListener('keydown', function (event) {
            _this.onKeyDown(event);
        });
        this.rendererContainer.nativeElement.addEventListener('keyup', function (event) {
            _this.onKeyUp(event);
        });
        window.addEventListener('resize', function () {
            _this.onWindowResize();
        });
        this.render();
    };
    BoxPlacePage.prototype.onWindowResize = function () {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    };
    BoxPlacePage.prototype.onMouseMove = function (event) {
        event.preventDefault();
        this.mouse.set((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1);
        this.raycaster.setFromCamera(this.mouse, this.camera);
        var intersects = this.raycaster.intersectObjects(this.objects);
        if (intersects.length > 0) {
            var intersect = intersects[0];
            this.rollOverMesh.position.copy(intersect.point).add(intersect.face.normal);
            this.rollOverMesh.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25);
        }
        this.render();
    };
    BoxPlacePage.prototype.onMouseDown = function (event) {
        event.preventDefault();
        this.mouse.set((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1);
        this.raycaster.setFromCamera(this.mouse, this.camera);
        var intersects = this.raycaster.intersectObjects(this.objects);
        if (intersects.length > 0) {
            var intersect = intersects[0];
            // delete cube
            if (this.isShiftDown) {
                if (intersect.object !== this.plane) {
                    this.scene.remove(intersect.object);
                    this.objects.splice(this.objects.indexOf(intersect.object), 1);
                }
                // create cube
            }
            else {
                var voxel = new __WEBPACK_IMPORTED_MODULE_1_three__["f" /* Mesh */](this.cubeGeo, this.cubeMaterial);
                voxel.position.copy(intersect.point).add(intersect.face.normal);
                voxel.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25);
                this.scene.add(voxel);
                this.objects.push(voxel);
            }
            this.render();
        }
    };
    BoxPlacePage.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case 16:
                this.isShiftDown = true;
                break;
        }
    };
    BoxPlacePage.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case 16:
                this.isShiftDown = false;
                break;
        }
    };
    BoxPlacePage.prototype.render = function () {
        this.renderer.render(this.scene, this.camera);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('rendererContainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], BoxPlacePage.prototype, "rendererContainer", void 0);
    BoxPlacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-box-place',template:/*ion-inline-start:"E:\ionic\shin-ionic\src\pages\three1\box-place\box-place.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>ThreeJS Box Place</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div #rendererContainer></div>\n</ion-content>'/*ion-inline-end:"E:\ionic\shin-ionic\src\pages\three1\box-place\box-place.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], BoxPlacePage);
    return BoxPlacePage;
}());

//# sourceMappingURL=box-place.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Three1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__box_place_box_place__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__box_box__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Three1Page = (function () {
    function Three1Page(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Three1Page.prototype.ionViewDidLoad = function () {
        this.LoadMap();
    };
    Three1Page.prototype.LoadMap = function () {
        var _this = this;
        var latLng = new google.maps.LatLng(52.130889, -106.660233);
        var mapOptions = {
            center: latLng,
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        //add marker
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            title: "City hall",
            position: latLng
        });
        var infoWindow = new google.maps.InfoWindow({
            content: "<h4>Center Location</h4>"
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
        // map-specific events
        google.maps.event.addListener(this.map, 'keyup', function (event) {
            _this.showPanel(event);
        });
        // overlay specific events (since it only appears once drag starts)
        this.drop = new google.maps.Map(this.dropContainer.nativeElement, mapOptions);
        google.maps.event.addListener(this.drop, 'dragover', function (event) {
            _this.showPanel(event);
        });
        google.maps.event.addListener(this.drop, 'drop', function (event) {
            _this.handleDrop(event);
        });
        google.maps.event.addListener(this.drop, 'dragleave', function (event) {
            _this.hidePanel(event);
        });
    };
    Three1Page.prototype.showPanel = function (e) {
        e.stopPropagation();
        e.preventDefault();
        document.getElementById('drop-container').style.display = 'block';
        return false;
    };
    Three1Page.prototype.hidePanel = function (e) {
        document.getElementById('drop-container').style.display = 'none';
    };
    Three1Page.prototype.handleDrop = function (e) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        this.hidePanel(e);
        var files = e.dataTransfer.files;
        if (files.length) {
            // process file(s) being dropped
            // grab the file data from each file
            for (var i = 0, file; file = files[i]; i++) {
                var reader = new FileReader();
                reader.onload = (function (theFile) {
                    _this.loadGeoJsonString(e.target.result);
                });
                reader.onerror = function (e) {
                    console.error('reading failed');
                };
                reader.readAsText(file);
            }
        }
        else {
            // process non-file (e.g. text or html) content being dropped
            // grab the plain text version of the data
            var plainText = e.dataTransfer.getData('text/plain');
            if (plainText) {
                this.loadGeoJsonString(plainText);
            }
        }
        // prevent drag event from bubbling further
        return false;
    };
    Three1Page.prototype.ReadGeoJSON = function () {
        this.map = null;
        var latLng = new google.maps.LatLng(-28, 137);
        var mapOptions = {
            center: latLng,
            zoom: 4,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        // NOTE: This uses cross-domain XHR, and may not work on older browsers.
        this.map.data.loadGeoJson('https://storage.googleapis.com/mapsdevsite/json/google.json');
        // Set the fill color to red when the feature is clicked.
        // Stroke weight remains 3.
        this.map.data.addListener('click', function (event) {
            this.map.data.overrideStyle(event.feature, { fillColor: 'red' });
        });
    };
    Three1Page.prototype.loadGeoJsonString = function (geoString) {
        var geojson = JSON.parse(geoString);
        this.map.data.addGeoJson(geojson);
        this.zoom(this.map);
    };
    Three1Page.prototype.zoom = function (map) {
        var bounds = new google.maps.LatLngBounds();
        map.data.forEach(function (feature) {
            this.processPoints(feature.getGeometry(), bounds.extend, bounds);
        });
        map.fitBounds(bounds);
    };
    Three1Page.prototype.processPoints = function (geometry, callback, thisArg) {
        if (geometry instanceof google.maps.LatLng) {
            callback.call(thisArg, geometry);
        }
        else if (geometry instanceof google.maps.Data.Point) {
            callback.call(thisArg, geometry.get());
        }
        else {
            geometry.getArray().forEach(function (g) {
                this.processPoints(g, callback, thisArg);
            });
        }
    };
    Three1Page.prototype.getPolyline = function () {
        var flightPlanCoordinates = [
            { lat: 52.144, lng: -106.691 },
            { lat: 52.144, lng: -106.681 },
            { lat: 52.134, lng: -106.681 },
            { lat: 52.144, lng: -106.691 }
        ];
        var flightPath = new google.maps.Polyline({
            path: flightPlanCoordinates,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });
        flightPath.setMap(this.map);
    };
    Three1Page.prototype.getDirection = function () {
        var latLng = new google.maps.LatLng(52.130889, -106.660233);
        var latLng2 = new google.maps.LatLng(52.130889, -106.650233);
        var directionsDisplay = new google.maps.DirectionsRenderer();
        var directionsService = new google.maps.DirectionsService();
        directionsDisplay.setMap(this.map);
        directionsDisplay.setPanel(document.getElementById('map'));
        var request = {
            origin: latLng,
            destination: latLng2,
            travelMode: google.maps.DirectionsTravelMode.DRIVING
        };
        directionsService.route(request, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            }
        });
    };
    Three1Page.prototype.Rectangle = function () {
        var _this = this;
        var bounds = {
            north: 52.130889,
            south: 52.030889,
            east: -106.660233,
            west: -106.860233
        };
        // Define the rectangle and set its editable property to true.
        var rectangle = new google.maps.Rectangle({
            bounds: bounds,
            editable: true,
            draggable: true
        });
        rectangle.setMap(this.map);
        // Define an info window on the map.
        var infoWindow = new google.maps.InfoWindow();
        // Add an event listener on the rectangle.
        rectangle.addListener('bounds_changed', function () {
            var ne = rectangle.getBounds().getNorthEast();
            var sw = rectangle.getBounds().getSouthWest();
            var contentString = '<b>Rectangle moved.</b><br>' +
                'New north-east corner: ' + ne.lat() + ', ' + ne.lng() + '<br>' +
                'New south-west corner: ' + sw.lat() + ', ' + sw.lng();
            // Set the info window's content and position.
            infoWindow.setContent(contentString);
            infoWindow.setPosition(ne);
            infoWindow.open(_this.map);
        });
    };
    Three1Page.prototype.box = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__box_box__["a" /* BoxPage */], null);
    };
    Three1Page.prototype.boxPlace = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__box_place_box_place__["a" /* BoxPlacePage */], null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], Three1Page.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('drop'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], Three1Page.prototype, "dropContainer", void 0);
    Three1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-three1',template:/*ion-inline-start:"E:\ionic\shin-ionic\src\pages\three1\three1.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Three and GoogleMap</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="box()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="boxPlace()">\n        <ion-icon name="list"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <button ion-button color="danger" (click)="ReadGeoJSON()">ReadGeoJSON</button>\n  <button ion-button color="danger" (click)="Rectangle()">Rectangle</button>\n  <button ion-button color="danger" (click)="getDirection()">Get the Direction</button>\n  <button ion-button color="light" (click)="getPolyline()">Get the Polyline</button>\n  <div #map id="map"></div>\n  <div #drop id="drop-container"><div id="drop-silhouette"></div></div>\n</ion-content>'/*ion-inline-end:"E:\ionic\shin-ionic\src\pages\three1\three1.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], Three1Page);
    return Three1Page;
}());

//# sourceMappingURL=three1.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__(386);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoxPage = (function () {
    function BoxPage() {
        this.renderer = new __WEBPACK_IMPORTED_MODULE_1_three__["p" /* WebGLRenderer */]();
        this.scene = null;
        this.camera = null;
        this.mesh = null;
        this.scene = new __WEBPACK_IMPORTED_MODULE_1_three__["l" /* Scene */]();
        this.camera = new __WEBPACK_IMPORTED_MODULE_1_three__["i" /* PerspectiveCamera */](75, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.z = 1000;
        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["b" /* BoxGeometry */](200, 200, 200);
        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["g" /* MeshBasicMaterial */]({ color: 0xff0000, wireframe: true });
        this.mesh = new __WEBPACK_IMPORTED_MODULE_1_three__["f" /* Mesh */](geometry, material);
        this.scene.add(this.mesh);
    }
    BoxPage.prototype.ngAfterViewInit = function () {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
        this.animate();
    };
    BoxPage.prototype.animate = function () {
        var _this = this;
        window.requestAnimationFrame(function () { return _this.animate(); });
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.02;
        this.renderer.render(this.scene, this.camera);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('rendererContainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], BoxPage.prototype, "rendererContainer", void 0);
    BoxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-box',template:/*ion-inline-start:"E:\ionic\shin-ionic\src\pages\three1\box\box.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>ThreeJS Box</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-card>\n      <div #rendererContainer></div>\n  </ion-card> -->\n\n  <flash-card>\n    <div class="fc-front">    \n      <h2 text-center>3D Model with Flash Card</h2>\n      <p>Description: 3D Model Rotation Animation Test</p>\n      <p>Start testing by clicking here</p>\n    </div>\n    <div class="fc-back">\n      <div #rendererContainer></div>\n    </div>\n  </flash-card>\n\n  <!-- <div #rendererContainer></div> -->\n</ion-content>'/*ion-inline-end:"E:\ionic\shin-ionic\src\pages\three1\box\box.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], BoxPage);
    return BoxPage;
}());

//# sourceMappingURL=box.js.map

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/edit-user/edit-user.module": [
		621,
		9
	],
	"../pages/about/newyear/newyear.module": [
		622,
		8
	],
	"../pages/about/pay/pay.module": [
		623,
		7
	],
	"../pages/contact/create-event/create-event.module": [
		624,
		6
	],
	"../pages/contact/edit-event/edit-event.module": [
		625,
		5
	],
	"../pages/contact/event/event.module": [
		626,
		14
	],
	"../pages/home/create-song/create-song.module": [
		627,
		4
	],
	"../pages/home/edit-song/edit-song.module": [
		628,
		3
	],
	"../pages/home/login/login.module": [
		629,
		2
	],
	"../pages/home/signup/signup.module": [
		630,
		1
	],
	"../pages/home/song/song.module": [
		631,
		0
	],
	"../pages/storage/storage.module": [
		632,
		13
	],
	"../pages/three1/box-place/box-place.module": [
		633,
		12
	],
	"../pages/three1/box/box.module": [
		635,
		11
	],
	"../pages/three1/three1.module": [
		634,
		10
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 207;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__storage_storage__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__three1_three1__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__storage_storage__["a" /* StoragePage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__three1_three1__["a" /* Three1Page */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\ionic\shin-ionic\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Video" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="User" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Event" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Storage" tabIcon="cloud"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="3D" tabIcon="map"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"E:\ionic\shin-ionic\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = (function () {
    function AboutPage(db, modalCtrl) {
        this.db = db;
        this.modalCtrl = modalCtrl;
        this.userPath = 'shin/users';
        this.payPath = 'shin/pays';
        this.users = this.db.list(this.userPath + "/").valueChanges();
        this.yearPay = __WEBPACK_IMPORTED_MODULE_3_moment___default()(new Date()).format('YYYY');
    }
    AboutPage.prototype.userTapped = function (event, user) {
        var payModal = this.modalCtrl.create('PayPage', { user: user, yearPay: this.yearPay }, { cssClass: 'inset-modal' });
        payModal.onDidDismiss(function (data) {
            if (data) {
                //this.items.add(data);
            }
        });
        payModal.present();
    };
    AboutPage.prototype.userEdit = function (user) {
        var editUserModel = this.modalCtrl.create('EditUserPage', { user: user }, { cssClass: 'inset-modal' });
        editUserModel.onDidDismiss(function (data) {
            if (data) {
                //console.log("test1111");
            }
        });
        editUserModel.present();
    };
    AboutPage.prototype.newYear = function () {
        var _this = this;
        var data = this.db.list(this.payPath + "/" + this.yearPay + "/").valueChanges();
        data.subscribe(function (rs) {
            console.log('re.length=', rs.length);
            if (rs.length < 1) {
                var newYearModal = _this.modalCtrl.create('NewYearPage', { yearPay: _this.yearPay }, { cssClass: 'inset-modal' });
                newYearModal.onDidDismiss(function (data) {
                    if (data) {
                        //this.items.add(data);
                    }
                });
                newYearModal.present();
            }
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"E:\ionic\shin-ionic\src\pages\about\about.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>User List</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n    <!-- <ion-item>\n      <ion-icon name="calendar" item-start></ion-icon>\n      <ion-label>Year</ion-label>\n      <ion-datetime displayFormat="YYYY" max="2050" [(ngModel)]="yearPay"></ion-datetime>\n    </ion-item>\n    <button ion-button (click)="newYear()">New Year</button> -->\n      \n\n    <ion-list>\n      <ion-item-sliding *ngFor="let user of users | async">\n        <button ion-item (click)="userTapped($event, user)">\n          <ion-avatar item-start>\n            <img *ngIf="user.imageUrl" [src]="user.imageUrl" />\n          </ion-avatar>\n          <h2>{{user.displayName}}</h2>\n        </button>\n        <ion-item-options>\n          <button ion-button clear small color="secondary" icon-left (click)="userEdit(user)">\n            <ion-icon name=\'create\'></ion-icon>\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </ion-content>'/*ion-inline-end:"E:\ionic\shin-ionic\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_event__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactPage = (function () {
    function ContactPage(modalCtrl, navCtrl, db) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.db = db;
        this.basePath = 'shin/events';
        this.yearPay = __WEBPACK_IMPORTED_MODULE_3_moment___default()(new Date()).format('YYYY');
        this.loadingData();
    }
    ContactPage.prototype.loadingData = function () {
        this.items = this.db.list(this.basePath + "/" + this.yearPay + "/").valueChanges();
    };
    ContactPage.prototype.createItem = function () {
        var createModel = this.modalCtrl.create('CreateEventPage', { yearPay: this.yearPay }, { cssClass: 'inset-modal' });
        createModel.onDidDismiss(function (data) {
            if (data) {
                //console.log("created an item");
            }
        });
        createModel.present();
    };
    ContactPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__event_event__["a" /* EventPage */], { item: item });
        // let itemModel = this.modalCtrl.create('EventPage', {item: item}, { cssClass: 'inset-modal' });
        // itemModel.onDidDismiss(data => {
        //   if (data) {
        //     //console.log("test1111");
        //   }
        // });
        // itemModel.present();
    };
    ContactPage.prototype.editItem = function (item) {
        var editModel = this.modalCtrl.create('EditEventPage', { item: item, yearPay: this.yearPay }, { cssClass: 'inset-modal' });
        editModel.onDidDismiss(function (data) {
            if (data) {
                //console.log("test1111");
            }
        });
        editModel.present();
    };
    ContactPage.prototype.deleteItem = function (item) {
        this.db.object(this.basePath + "/" + this.yearPay + "/" + item.id).remove()
            .catch(function (error) { return console.log(error); });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"E:\ionic\shin-ionic\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Event List</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="loadingData()">\n        <ion-icon name=\'star\'></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="createItem()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-icon name="calendar" item-start></ion-icon>\n    <ion-label>Year</ion-label>\n    <ion-datetime displayFormat="YYYY" max="2050" [(ngModel)]="yearPay"></ion-datetime>\n  </ion-item>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of items | async">\n      <button ion-item (click)="itemTapped($event, item)">\n        <ion-avatar item-start>\n          <img *ngIf="item.imageUrl" [src]="item.imageUrl" />\n        </ion-avatar>\n        <h2>{{item.name}}</h2>\n        <p item-end>{{item.date}}</p>\n      </button>\n      <ion-item-options>\n        <button ion-button clear small color="danger" icon-left (click)="deleteItem(item)">\n          <ion-icon name=\'trash\'></ion-icon>\n        </button>\n        <button ion-button clear small color="secondary" icon-left (click)="editItem(item)">\n          <ion-icon name=\'create\'></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"E:\ionic\shin-ionic\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(modalCtrl, auth, db) {
        this.modalCtrl = modalCtrl;
        this.auth = auth;
        this.db = db;
        this.basePath = 'shin/songs';
        this.songs = this.db.list("" + this.basePath).valueChanges();
    }
    HomePage.prototype.createSong = function () {
        var createSongModel = this.modalCtrl.create('CreateSongPage', null, { cssClass: 'inset-modal' });
        createSongModel.onDidDismiss(function (data) {
            if (data) {
                console.log("created song");
            }
        });
        createSongModel.present();
    };
    HomePage.prototype.songTapped = function (event, song) {
        var songModel = this.modalCtrl.create('SongPage', { song: song }, { cssClass: 'inset-modal' });
        songModel.onDidDismiss(function (data) {
            if (data) {
                console.log("test1111");
            }
        });
        songModel.present();
    };
    HomePage.prototype.editSong = function (song) {
        var editSongModel = this.modalCtrl.create('EditSongPage', { song: song }, { cssClass: 'inset-modal' });
        editSongModel.onDidDismiss(function (data) {
            if (data) {
                console.log("test1111");
            }
        });
        editSongModel.present();
    };
    HomePage.prototype.deleteSong = function (song) {
        this.db.object(this.basePath + "/" + song.id).remove()
            .catch(function (error) { return console.log(error); });
    };
    //==========================================================
    //Shinichi : shinichi0719@hotmail.com
    //James Bykowy  : shin234@example.com
    //April Sora : test@example.com
    //Ann DeVito : test2@example.com
    //Kristie Muzyka : test3@example.com
    //Bryan Bock : test4@example.com
    //Jeff : test5@example.com
    //Audra Balion : test6@example.com
    HomePage.prototype.openModalLogin = function () {
        var loginModel = this.modalCtrl.create('LoginPage', null, { cssClass: 'inset-modal' });
        loginModel.onDidDismiss(function (data) {
            if (data) {
                console.log("HomePage::openModalLogin login");
                //window.location.reload();
            }
        });
        loginModel.present();
    };
    HomePage.prototype.openModalSignup = function () {
        var signupModel = this.modalCtrl.create('SignupPage', null, { cssClass: 'inset-modal' });
        signupModel.onDidDismiss(function (data) {
            if (data) {
                console.log("HomePage::openModalSignup signup");
                //window.location.reload();        
            }
        });
        signupModel.present();
    };
    HomePage.prototype.logout = function () {
        this.auth.logout();
        //window.location.reload();    
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\ionic\shin-ionic\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Video Group List</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="createSong()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor="let song of songs | async">\n      <button ion-item (click)="songTapped($event, song)">\n        <ion-avatar item-start>\n          <img *ngIf="song.imageUrl" [src]="song.imageUrl" />\n        </ion-avatar>\n        <h2>{{song.name}}</h2>\n        <!-- <p item-end>{{song.description}}</p> -->\n      </button>\n      <ion-item-options>\n        <button ion-button clear small color="danger" icon-left (click)="deleteSong(song)">\n          <ion-icon name=\'trash\'></ion-icon>\n        </button>\n        <button ion-button clear small color="secondary" icon-left (click)="editSong(song)">\n          <ion-icon name=\'create\'></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n    <!-- Float Action Buttons -->\n  <ion-fab bottom right >\n    <button ion-fab class="pop-in" color="danger">Accout</button>\n    <ion-fab-list side="top">\n      <button ion-fab color="primary" (click)="openModalLogin()">\n        <ion-icon  name="log-in"></ion-icon>\n      </button>\n      <button ion-fab color="secondary" (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n      <button ion-fab color="danger" (click)="openModalSignup()">\n        <ion-icon name="link"></ion-icon>\n      </button>\n    </ion-fab-list>\n    <ion-fab-list side="left">\n      <button ion-fab>\n        <ion-icon name="logo-github"></ion-icon>\n      </button>\n    </ion-fab-list>\n  </ion-fab>\n    \n</ion-content>'/*ion-inline-end:"E:\ionic\shin-ionic\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YtProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var YtProvider = (function () {
    function YtProvider(http) {
        this.http = http;
        this.apiKey = 'AIzaSyCNWIL_2QY77plm4XU9AQVhfiLwYfOnMc4';
    }
    YtProvider.prototype.getPlaylistsForChannel = function (channel) {
        return this.http.get('https://www.googleapis.com/youtube/v3/playlists?key=' + this.apiKey + '&channelId=' + channel + '&part=snippet,id&maxResults=20')
            .map(function (res) {
            return res.json()['items'];
        });
    };
    YtProvider.prototype.getListVideos = function (listId) {
        return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?key=' + this.apiKey + '&playlistId=' + listId + '&part=snippet,id&maxResults=20')
            .map(function (res) {
            return res.json()['items'];
        });
    };
    // https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=AIzaSyCNWIL_2QY77plm4XU9AQVhfiLwYfOnMc4&id=MZjsDuAh7v8
    YtProvider.prototype.getVideoSnippet = function (videoId) {
        return this.http.get('https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=' + this.apiKey + '&id=' + videoId)
            .map(function (res) {
            return res.json()['items'];
        });
    };
    YtProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], YtProvider);
    return YtProvider;
}());

//# sourceMappingURL=yt.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlashCardComponent = (function () {
    function FlashCardComponent() {
        this.toggled = false;
    }
    FlashCardComponent.prototype.ngAfterViewChecked = function () {
        var frontH = this.fcFront.nativeElement.querySelector('.fc-front').offsetHeight + 40;
        var backH = this.fcBack.nativeElement.querySelector('.fc-back').offsetHeight + 40;
        var h = ((frontH > backH) ? frontH : backH) + 'px';
        this.fcContainer.nativeElement.style.height = h;
        this.fcBack.nativeElement.style.height = h;
        this.fcFront.nativeElement.style.height = h;
    };
    FlashCardComponent.prototype.toggle = function () {
        this.toggled = !this.toggled;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('fcContainer'),
        __metadata("design:type", Object)
    ], FlashCardComponent.prototype, "fcContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('front'),
        __metadata("design:type", Object)
    ], FlashCardComponent.prototype, "fcFront", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('back'),
        __metadata("design:type", Object)
    ], FlashCardComponent.prototype, "fcBack", void 0);
    FlashCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'flash-card',template:/*ion-inline-start:"E:\ionic\shin-ionic\src\components\flash-card\flash-card.html"*/'<ion-card class="fc-container" (click)="toggle()" [class.fc-back]="toggled" #fcContainer>\n    <div class="front" #front>\n        <ng-content class="" select=".fc-front"></ng-content>\n    </div>\n \n    <div class="back" #back>\n        <ng-content select=".fc-back"></ng-content>\n    </div>\n</ion-card>'/*ion-inline-end:"E:\ionic\shin-ionic\src\components\flash-card\flash-card.html"*/
        })
    ], FlashCardComponent);
    return FlashCardComponent;
}());

//# sourceMappingURL=flash-card.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(456);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_contact_event_event__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_three1_box_box__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_three1_box_place_box_place__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_three1_three1__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_storage_storage__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_auth_auth__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_youtube_video_player__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_yt_yt__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipes_moment_moment__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_flash_card_flash_card__ = __webpack_require__(434);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















//firebase



var firebaseConfig = {
    apiKey: "AIzaSyCEo24FMxTyU8IemGPVY8-XRXuO_ZkZVn4",
    authDomain: "base-gallery.firebaseapp.com",
    databaseURL: "https://base-gallery.firebaseio.com",
    projectId: "base-gallery",
    storageBucket: "base-gallery.appspot.com",
    messagingSenderId: "103599334911"
};

//youtube



//pipes

//components

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_storage_storage__["a" /* StoragePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_three1_three1__["a" /* Three1Page */],
                __WEBPACK_IMPORTED_MODULE_5__pages_three1_box_box__["a" /* BoxPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_three1_box_place_box_place__["a" /* BoxPlacePage */],
                __WEBPACK_IMPORTED_MODULE_22__pipes_moment_moment__["a" /* MomentPipe */],
                __WEBPACK_IMPORTED_MODULE_23__components_flash_card_flash_card__["a" /* FlashCardComponent */],
                __WEBPACK_IMPORTED_MODULE_4__pages_contact_event_event__["a" /* EventPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/edit-user/edit-user.module#EditUserPageModule', name: 'EditUserPage', segment: 'edit-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/about/newyear/newyear.module#NewYearPageModule', name: 'NewYearPage', segment: 'newyear', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/about/pay/pay.module#PayPageModule', name: 'PayPage', segment: 'pay', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/create-event/create-event.module#CreateEventPageModule', name: 'CreateEventPage', segment: 'create-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/edit-event/edit-event.module#EditEventPageModule', name: 'EditEventPage', segment: 'edit-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/event/event.module#EventPageModule', name: 'EventPage', segment: 'event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/create-song/create-song.module#CreateSongPageModule', name: 'CreateSongPage', segment: 'create-song', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/edit-song/edit-song.module#EditSongPageModule', name: 'EditSongPage', segment: 'edit-song', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/song/song.module#SongPageModule', name: 'SongPage', segment: 'song', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/storage/storage.module#StoragePageModule', name: 'StoragePage', segment: 'storage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/three1/box-place/box-place.module#BoxPlacePageModule', name: 'BoxPlacePage', segment: 'box-place', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/three1/three1.module#Three1PageModule', name: 'Three1Page', segment: 'three1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/three1/box/box.module#BoxPageModule', name: 'BoxPage', segment: 'box', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_storage_storage__["a" /* StoragePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_three1_three1__["a" /* Three1Page */],
                __WEBPACK_IMPORTED_MODULE_5__pages_three1_box_box__["a" /* BoxPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_three1_box_place_box_place__["a" /* BoxPlacePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_contact_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */],
                __WEBPACK_IMPORTED_MODULE_18__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_yt_yt__["a" /* YtProvider */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_22__pipes_moment_moment__["a" /* MomentPipe */],
                __WEBPACK_IMPORTED_MODULE_23__components_flash_card_flash_card__["a" /* FlashCardComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 256,
	"./af.js": 256,
	"./ar": 257,
	"./ar-dz": 258,
	"./ar-dz.js": 258,
	"./ar-kw": 259,
	"./ar-kw.js": 259,
	"./ar-ly": 260,
	"./ar-ly.js": 260,
	"./ar-ma": 261,
	"./ar-ma.js": 261,
	"./ar-sa": 262,
	"./ar-sa.js": 262,
	"./ar-tn": 263,
	"./ar-tn.js": 263,
	"./ar.js": 257,
	"./az": 264,
	"./az.js": 264,
	"./be": 265,
	"./be.js": 265,
	"./bg": 266,
	"./bg.js": 266,
	"./bm": 267,
	"./bm.js": 267,
	"./bn": 268,
	"./bn.js": 268,
	"./bo": 269,
	"./bo.js": 269,
	"./br": 270,
	"./br.js": 270,
	"./bs": 271,
	"./bs.js": 271,
	"./ca": 272,
	"./ca.js": 272,
	"./cs": 273,
	"./cs.js": 273,
	"./cv": 274,
	"./cv.js": 274,
	"./cy": 275,
	"./cy.js": 275,
	"./da": 276,
	"./da.js": 276,
	"./de": 277,
	"./de-at": 278,
	"./de-at.js": 278,
	"./de-ch": 279,
	"./de-ch.js": 279,
	"./de.js": 277,
	"./dv": 280,
	"./dv.js": 280,
	"./el": 281,
	"./el.js": 281,
	"./en-au": 282,
	"./en-au.js": 282,
	"./en-ca": 283,
	"./en-ca.js": 283,
	"./en-gb": 284,
	"./en-gb.js": 284,
	"./en-ie": 285,
	"./en-ie.js": 285,
	"./en-il": 286,
	"./en-il.js": 286,
	"./en-nz": 287,
	"./en-nz.js": 287,
	"./eo": 288,
	"./eo.js": 288,
	"./es": 289,
	"./es-do": 290,
	"./es-do.js": 290,
	"./es-us": 291,
	"./es-us.js": 291,
	"./es.js": 289,
	"./et": 292,
	"./et.js": 292,
	"./eu": 293,
	"./eu.js": 293,
	"./fa": 294,
	"./fa.js": 294,
	"./fi": 295,
	"./fi.js": 295,
	"./fo": 296,
	"./fo.js": 296,
	"./fr": 297,
	"./fr-ca": 298,
	"./fr-ca.js": 298,
	"./fr-ch": 299,
	"./fr-ch.js": 299,
	"./fr.js": 297,
	"./fy": 300,
	"./fy.js": 300,
	"./gd": 301,
	"./gd.js": 301,
	"./gl": 302,
	"./gl.js": 302,
	"./gom-latn": 303,
	"./gom-latn.js": 303,
	"./gu": 304,
	"./gu.js": 304,
	"./he": 305,
	"./he.js": 305,
	"./hi": 306,
	"./hi.js": 306,
	"./hr": 307,
	"./hr.js": 307,
	"./hu": 308,
	"./hu.js": 308,
	"./hy-am": 309,
	"./hy-am.js": 309,
	"./id": 310,
	"./id.js": 310,
	"./is": 311,
	"./is.js": 311,
	"./it": 312,
	"./it.js": 312,
	"./ja": 313,
	"./ja.js": 313,
	"./jv": 314,
	"./jv.js": 314,
	"./ka": 315,
	"./ka.js": 315,
	"./kk": 316,
	"./kk.js": 316,
	"./km": 317,
	"./km.js": 317,
	"./kn": 318,
	"./kn.js": 318,
	"./ko": 319,
	"./ko.js": 319,
	"./ky": 320,
	"./ky.js": 320,
	"./lb": 321,
	"./lb.js": 321,
	"./lo": 322,
	"./lo.js": 322,
	"./lt": 323,
	"./lt.js": 323,
	"./lv": 324,
	"./lv.js": 324,
	"./me": 325,
	"./me.js": 325,
	"./mi": 326,
	"./mi.js": 326,
	"./mk": 327,
	"./mk.js": 327,
	"./ml": 328,
	"./ml.js": 328,
	"./mr": 329,
	"./mr.js": 329,
	"./ms": 330,
	"./ms-my": 331,
	"./ms-my.js": 331,
	"./ms.js": 330,
	"./mt": 332,
	"./mt.js": 332,
	"./my": 333,
	"./my.js": 333,
	"./nb": 334,
	"./nb.js": 334,
	"./ne": 335,
	"./ne.js": 335,
	"./nl": 336,
	"./nl-be": 337,
	"./nl-be.js": 337,
	"./nl.js": 336,
	"./nn": 338,
	"./nn.js": 338,
	"./pa-in": 339,
	"./pa-in.js": 339,
	"./pl": 340,
	"./pl.js": 340,
	"./pt": 341,
	"./pt-br": 342,
	"./pt-br.js": 342,
	"./pt.js": 341,
	"./ro": 343,
	"./ro.js": 343,
	"./ru": 344,
	"./ru.js": 344,
	"./sd": 345,
	"./sd.js": 345,
	"./se": 346,
	"./se.js": 346,
	"./si": 347,
	"./si.js": 347,
	"./sk": 348,
	"./sk.js": 348,
	"./sl": 349,
	"./sl.js": 349,
	"./sq": 350,
	"./sq.js": 350,
	"./sr": 351,
	"./sr-cyrl": 352,
	"./sr-cyrl.js": 352,
	"./sr.js": 351,
	"./ss": 353,
	"./ss.js": 353,
	"./sv": 354,
	"./sv.js": 354,
	"./sw": 355,
	"./sw.js": 355,
	"./ta": 356,
	"./ta.js": 356,
	"./te": 357,
	"./te.js": 357,
	"./tet": 358,
	"./tet.js": 358,
	"./tg": 359,
	"./tg.js": 359,
	"./th": 360,
	"./th.js": 360,
	"./tl-ph": 361,
	"./tl-ph.js": 361,
	"./tlh": 362,
	"./tlh.js": 362,
	"./tr": 363,
	"./tr.js": 363,
	"./tzl": 364,
	"./tzl.js": 364,
	"./tzm": 365,
	"./tzm-latn": 366,
	"./tzm-latn.js": 366,
	"./tzm.js": 365,
	"./ug-cn": 367,
	"./ug-cn.js": 367,
	"./uk": 368,
	"./uk.js": 368,
	"./ur": 369,
	"./ur.js": 369,
	"./uz": 370,
	"./uz-latn": 371,
	"./uz-latn.js": 371,
	"./uz.js": 370,
	"./vi": 372,
	"./vi.js": 372,
	"./x-pseudo": 373,
	"./x-pseudo.js": 373,
	"./yo": 374,
	"./yo.js": 374,
	"./zh-cn": 375,
	"./zh-cn.js": 375,
	"./zh-hk": 376,
	"./zh-hk.js": 376,
	"./zh-tw": 377,
	"./zh-tw.js": 377
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 561;

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Upload; });
var Upload = (function () {
    function Upload(file) {
        this.createdOn = new Date();
        this.file = file;
    }
    return Upload;
}());

//# sourceMappingURL=upload.model.js.map

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(429);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\ionic\shin-ionic\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\ionic\shin-ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MomentPipe = (function () {
    function MomentPipe() {
    }
    MomentPipe.prototype.transform = function (value, args) {
        args = args || '';
        return args === 'ago' ? __WEBPACK_IMPORTED_MODULE_1_moment___default()(value).fromNow() : __WEBPACK_IMPORTED_MODULE_1_moment___default()(value).format(args);
    };
    MomentPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'moment'
        })
    ], MomentPipe);
    return MomentPipe;
}());

//# sourceMappingURL=moment.js.map

/***/ })

},[435]);
//# sourceMappingURL=main.js.map