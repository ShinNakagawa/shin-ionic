webpackJsonp([15],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(377);
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
        var path = "users/" + this.currentUserId;
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
        var path = "users/" + this.currentUserId;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoragePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_upload_model__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_storage__ = __webpack_require__(574);
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
        this.basePath = '/uploads';
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxPlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__(385);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('rendererContainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], BoxPlacePage.prototype, "rendererContainer", void 0);
    BoxPlacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-box-place',template:/*ion-inline-start:"E:\ionic\shin-ionic\src\pages\three1\box-place\box-place.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>ThreeJS Box Place</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div #rendererContainer></div>\n</ion-content>'/*ion-inline-end:"E:\ionic\shin-ionic\src\pages\three1\box-place\box-place.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], BoxPlacePage);
    return BoxPlacePage;
}());

//# sourceMappingURL=box-place.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__(385);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('rendererContainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], BoxPage.prototype, "rendererContainer", void 0);
    BoxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-box',template:/*ion-inline-start:"E:\ionic\shin-ionic\src\pages\three1\box\box.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>ThreeJS Box</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div #rendererContainer></div>\n</ion-content>'/*ion-inline-end:"E:\ionic\shin-ionic\src\pages\three1\box\box.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], BoxPage);
    return BoxPage;
}());

//# sourceMappingURL=box.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Three1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__box_place_box_place__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__box_box__ = __webpack_require__(150);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], Three1Page.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('drop'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], Three1Page.prototype, "dropContainer", void 0);
    Three1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-three1',template:/*ion-inline-start:"E:\ionic\shin-ionic\src\pages\three1\three1.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Three and GoogleMap</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="box()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="boxPlace()">\n        <ion-icon name="list"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <button ion-button color="danger" (click)="ReadGeoJSON()">ReadGeoJSON</button>\n  <button ion-button color="danger" (click)="Rectangle()">Rectangle</button>\n  <button ion-button color="danger" (click)="getDirection()">Get the Direction</button>\n  <button ion-button color="light" (click)="getPolyline()">Get the Polyline</button>\n  <div #map id="map"></div>\n  <div #drop id="drop-container"><div id="drop-silhouette"></div></div>\n</ion-content>'/*ion-inline-end:"E:\ionic\shin-ionic\src\pages\three1\three1.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], Three1Page);
    return Three1Page;
}());

//# sourceMappingURL=three1.js.map

/***/ }),

/***/ 163:
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
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/edit-user/edit-user.module": [
		619,
		10
	],
	"../pages/about/newyear/newyear.module": [
		620,
		9
	],
	"../pages/about/pay/pay.module": [
		621,
		8
	],
	"../pages/contact/create-event/create-event.module": [
		622,
		7
	],
	"../pages/contact/edit-event/edit-event.module": [
		623,
		6
	],
	"../pages/contact/event/event.module": [
		624,
		5
	],
	"../pages/home/create-song/create-song.module": [
		625,
		4
	],
	"../pages/home/edit-song/edit-song.module": [
		626,
		3
	],
	"../pages/home/login/login.module": [
		627,
		2
	],
	"../pages/home/signup/signup.module": [
		628,
		1
	],
	"../pages/home/song/song.module": [
		629,
		0
	],
	"../pages/storage/storage.module": [
		630,
		14
	],
	"../pages/three1/box-place/box-place.module": [
		631,
		13
	],
	"../pages/three1/box/box.module": [
		632,
		12
	],
	"../pages/three1/three1.module": [
		633,
		11
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
webpackAsyncContext.id = 206;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__storage_storage__ = __webpack_require__(148);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\ionic\shin-ionic\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Song" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="User" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Event" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Storage" tabIcon="cloud"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Three1" tabIcon="map"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"E:\ionic\shin-ionic\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
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
        this.userPath = 'users';
        this.payPath = 'pays';
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"E:\ionic\shin-ionic\src\pages\about\about.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>User List</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n    <!-- <ion-item>\n      <ion-icon name="calendar" item-start></ion-icon>\n      <ion-label>Year</ion-label>\n      <ion-datetime displayFormat="YYYY" max="2050" [(ngModel)]="yearPay"></ion-datetime>\n    </ion-item>\n    <button ion-button (click)="newYear()">New Year</button> -->\n      \n\n    <ion-list>\n      <ion-item-sliding *ngFor="let user of users | async">\n        <button ion-item (click)="userTapped($event, user)">\n          <ion-avatar item-start>\n            <img *ngIf="user.imageUrl" [src]="user.imageUrl" />\n          </ion-avatar>\n          <h2>{{user.displayName}}</h2>\n        </button>\n        <ion-item-options>\n          <button ion-button clear small color="secondary" icon-left (click)="userEdit(user)">\n            <ion-icon name=\'create\'></ion-icon>\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </ion-content>'/*ion-inline-end:"E:\ionic\shin-ionic\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
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




var ContactPage = (function () {
    function ContactPage(modalCtrl, db) {
        this.modalCtrl = modalCtrl;
        this.db = db;
        this.basePath = 'events';
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
        var itemModel = this.modalCtrl.create('EventPage', { item: item }, { cssClass: 'inset-modal' });
        itemModel.onDidDismiss(function (data) {
            if (data) {
                //console.log("test1111");
            }
        });
        itemModel.present();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"E:\ionic\shin-ionic\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Event List</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="loadingData()">\n        <ion-icon name=\'star\'></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="createItem()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-icon name="calendar" item-start></ion-icon>\n    <ion-label>Year</ion-label>\n    <ion-datetime displayFormat="YYYY" max="2050" [(ngModel)]="yearPay"></ion-datetime>\n  </ion-item>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of items | async">\n      <button ion-item (click)="itemTapped($event, item)">\n        <ion-avatar item-start>\n          <img *ngIf="item.imageUrl" [src]="item.imageUrl" />\n        </ion-avatar>\n        <h2>{{item.name}}</h2>\n        <p item-end>{{item.date}}</p>\n      </button>\n      <ion-item-options>\n        <button ion-button clear small color="danger" icon-left (click)="deleteItem(item)">\n          <ion-icon name=\'trash\'></ion-icon>\n        </button>\n        <button ion-button clear small color="secondary" icon-left (click)="editItem(item)">\n          <ion-icon name=\'create\'></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"E:\ionic\shin-ionic\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
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
        this.basePath = 'songs';
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\ionic\shin-ionic\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Song List</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="createSong()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor="let song of songs | async">\n      <button ion-item (click)="songTapped($event, song)">\n        <ion-avatar item-start>\n          <img *ngIf="song.imageUrl" [src]="song.imageUrl" />\n        </ion-avatar>\n        <h2>{{song.name}}</h2>\n        <!-- <p item-end>{{song.description}}</p> -->\n      </button>\n      <ion-item-options>\n        <button ion-button clear small color="danger" icon-left (click)="deleteSong(song)">\n          <ion-icon name=\'trash\'></ion-icon>\n        </button>\n        <button ion-button clear small color="secondary" icon-left (click)="editSong(song)">\n          <ion-icon name=\'create\'></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n    <!-- Float Action Buttons -->\n  <ion-fab bottom right >\n    <button ion-fab class="pop-in" color="danger">Accout</button>\n    <ion-fab-list side="top">\n      <button ion-fab color="primary" (click)="openModalLogin()">\n        <ion-icon  name="log-in"></ion-icon>\n      </button>\n      <button ion-fab color="secondary" (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n      <button ion-fab color="danger" (click)="openModalSignup()">\n        <ion-icon name="link"></ion-icon>\n      </button>\n    </ion-fab-list>\n    <ion-fab-list side="left">\n      <button ion-fab>\n        <ion-icon name="logo-github"></ion-icon>\n      </button>\n    </ion-fab-list>\n  </ion-fab>\n    \n</ion-content>'/*ion-inline-end:"E:\ionic\shin-ionic\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YtProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(379);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], YtProvider);
    return YtProvider;
}());

//# sourceMappingURL=yt.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(454);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_three1_box_box__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_three1_box_place_box_place__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_three1_three1__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_storage_storage__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_youtube_video_player__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_yt_yt__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pipes_moment_moment__ = __webpack_require__(618);
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

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_storage_storage__["a" /* StoragePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_three1_three1__["a" /* Three1Page */],
                __WEBPACK_IMPORTED_MODULE_4__pages_three1_box_box__["a" /* BoxPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_three1_box_place_box_place__["a" /* BoxPlacePage */],
                __WEBPACK_IMPORTED_MODULE_21__pipes_moment_moment__["a" /* MomentPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2__["a" /* AngularFireModule */],
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
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
                        { loadChildren: '../pages/three1/box/box.module#BoxPageModule', name: 'BoxPage', segment: 'box', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/three1/three1.module#Three1PageModule', name: 'Three1Page', segment: 'three1', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_storage_storage__["a" /* StoragePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_three1_three1__["a" /* Three1Page */],
                __WEBPACK_IMPORTED_MODULE_4__pages_three1_box_box__["a" /* BoxPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_three1_box_place_box_place__["a" /* BoxPlacePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */],
                __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_yt_yt__["a" /* YtProvider */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_21__pipes_moment_moment__["a" /* MomentPipe */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 255,
	"./af.js": 255,
	"./ar": 256,
	"./ar-dz": 257,
	"./ar-dz.js": 257,
	"./ar-kw": 258,
	"./ar-kw.js": 258,
	"./ar-ly": 259,
	"./ar-ly.js": 259,
	"./ar-ma": 260,
	"./ar-ma.js": 260,
	"./ar-sa": 261,
	"./ar-sa.js": 261,
	"./ar-tn": 262,
	"./ar-tn.js": 262,
	"./ar.js": 256,
	"./az": 263,
	"./az.js": 263,
	"./be": 264,
	"./be.js": 264,
	"./bg": 265,
	"./bg.js": 265,
	"./bm": 266,
	"./bm.js": 266,
	"./bn": 267,
	"./bn.js": 267,
	"./bo": 268,
	"./bo.js": 268,
	"./br": 269,
	"./br.js": 269,
	"./bs": 270,
	"./bs.js": 270,
	"./ca": 271,
	"./ca.js": 271,
	"./cs": 272,
	"./cs.js": 272,
	"./cv": 273,
	"./cv.js": 273,
	"./cy": 274,
	"./cy.js": 274,
	"./da": 275,
	"./da.js": 275,
	"./de": 276,
	"./de-at": 277,
	"./de-at.js": 277,
	"./de-ch": 278,
	"./de-ch.js": 278,
	"./de.js": 276,
	"./dv": 279,
	"./dv.js": 279,
	"./el": 280,
	"./el.js": 280,
	"./en-au": 281,
	"./en-au.js": 281,
	"./en-ca": 282,
	"./en-ca.js": 282,
	"./en-gb": 283,
	"./en-gb.js": 283,
	"./en-ie": 284,
	"./en-ie.js": 284,
	"./en-il": 285,
	"./en-il.js": 285,
	"./en-nz": 286,
	"./en-nz.js": 286,
	"./eo": 287,
	"./eo.js": 287,
	"./es": 288,
	"./es-do": 289,
	"./es-do.js": 289,
	"./es-us": 290,
	"./es-us.js": 290,
	"./es.js": 288,
	"./et": 291,
	"./et.js": 291,
	"./eu": 292,
	"./eu.js": 292,
	"./fa": 293,
	"./fa.js": 293,
	"./fi": 294,
	"./fi.js": 294,
	"./fo": 295,
	"./fo.js": 295,
	"./fr": 296,
	"./fr-ca": 297,
	"./fr-ca.js": 297,
	"./fr-ch": 298,
	"./fr-ch.js": 298,
	"./fr.js": 296,
	"./fy": 299,
	"./fy.js": 299,
	"./gd": 300,
	"./gd.js": 300,
	"./gl": 301,
	"./gl.js": 301,
	"./gom-latn": 302,
	"./gom-latn.js": 302,
	"./gu": 303,
	"./gu.js": 303,
	"./he": 304,
	"./he.js": 304,
	"./hi": 305,
	"./hi.js": 305,
	"./hr": 306,
	"./hr.js": 306,
	"./hu": 307,
	"./hu.js": 307,
	"./hy-am": 308,
	"./hy-am.js": 308,
	"./id": 309,
	"./id.js": 309,
	"./is": 310,
	"./is.js": 310,
	"./it": 311,
	"./it.js": 311,
	"./ja": 312,
	"./ja.js": 312,
	"./jv": 313,
	"./jv.js": 313,
	"./ka": 314,
	"./ka.js": 314,
	"./kk": 315,
	"./kk.js": 315,
	"./km": 316,
	"./km.js": 316,
	"./kn": 317,
	"./kn.js": 317,
	"./ko": 318,
	"./ko.js": 318,
	"./ky": 319,
	"./ky.js": 319,
	"./lb": 320,
	"./lb.js": 320,
	"./lo": 321,
	"./lo.js": 321,
	"./lt": 322,
	"./lt.js": 322,
	"./lv": 323,
	"./lv.js": 323,
	"./me": 324,
	"./me.js": 324,
	"./mi": 325,
	"./mi.js": 325,
	"./mk": 326,
	"./mk.js": 326,
	"./ml": 327,
	"./ml.js": 327,
	"./mr": 328,
	"./mr.js": 328,
	"./ms": 329,
	"./ms-my": 330,
	"./ms-my.js": 330,
	"./ms.js": 329,
	"./mt": 331,
	"./mt.js": 331,
	"./my": 332,
	"./my.js": 332,
	"./nb": 333,
	"./nb.js": 333,
	"./ne": 334,
	"./ne.js": 334,
	"./nl": 335,
	"./nl-be": 336,
	"./nl-be.js": 336,
	"./nl.js": 335,
	"./nn": 337,
	"./nn.js": 337,
	"./pa-in": 338,
	"./pa-in.js": 338,
	"./pl": 339,
	"./pl.js": 339,
	"./pt": 340,
	"./pt-br": 341,
	"./pt-br.js": 341,
	"./pt.js": 340,
	"./ro": 342,
	"./ro.js": 342,
	"./ru": 343,
	"./ru.js": 343,
	"./sd": 344,
	"./sd.js": 344,
	"./se": 345,
	"./se.js": 345,
	"./si": 346,
	"./si.js": 346,
	"./sk": 347,
	"./sk.js": 347,
	"./sl": 348,
	"./sl.js": 348,
	"./sq": 349,
	"./sq.js": 349,
	"./sr": 350,
	"./sr-cyrl": 351,
	"./sr-cyrl.js": 351,
	"./sr.js": 350,
	"./ss": 352,
	"./ss.js": 352,
	"./sv": 353,
	"./sv.js": 353,
	"./sw": 354,
	"./sw.js": 354,
	"./ta": 355,
	"./ta.js": 355,
	"./te": 356,
	"./te.js": 356,
	"./tet": 357,
	"./tet.js": 357,
	"./tg": 358,
	"./tg.js": 358,
	"./th": 359,
	"./th.js": 359,
	"./tl-ph": 360,
	"./tl-ph.js": 360,
	"./tlh": 361,
	"./tlh.js": 361,
	"./tr": 362,
	"./tr.js": 362,
	"./tzl": 363,
	"./tzl.js": 363,
	"./tzm": 364,
	"./tzm-latn": 365,
	"./tzm-latn.js": 365,
	"./tzm.js": 364,
	"./ug-cn": 366,
	"./ug-cn.js": 366,
	"./uk": 367,
	"./uk.js": 367,
	"./ur": 368,
	"./ur.js": 368,
	"./uz": 369,
	"./uz-latn": 370,
	"./uz-latn.js": 370,
	"./uz.js": 369,
	"./vi": 371,
	"./vi.js": 371,
	"./x-pseudo": 372,
	"./x-pseudo.js": 372,
	"./yo": 373,
	"./yo.js": 373,
	"./zh-cn": 374,
	"./zh-cn.js": 374,
	"./zh-hk": 375,
	"./zh-hk.js": 375,
	"./zh-tw": 376,
	"./zh-tw.js": 376
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
webpackContext.id = 559;

/***/ }),

/***/ 564:
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

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(428);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\ionic\shin-ionic\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\ionic\shin-ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 618:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'moment'
        })
    ], MomentPipe);
    return MomentPipe;
}());

//# sourceMappingURL=moment.js.map

/***/ })

},[433]);
//# sourceMappingURL=main.js.map