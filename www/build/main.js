webpackJsonp([18],{

/***/ 1041:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(592);
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

/***/ 1042:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Monthly; });
var Monthly = (function () {
    function Monthly() {
    }
    return Monthly;
}());

//# sourceMappingURL=monthly.model.js.map

/***/ }),

/***/ 1044:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
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

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
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

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxPlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__(322);
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
            selector: 'page-box-place',template:/*ion-inline-start:"E:\ionic\shin-ionic\src\pages\box-place\box-place.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>ThreeJS Box Place</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div #rendererContainer></div>\n</ion-content>'/*ion-inline-end:"E:\ionic\shin-ionic\src\pages\box-place\box-place.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], BoxPlacePage);
    return BoxPlacePage;
}());

//# sourceMappingURL=box-place.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__(322);
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
            selector: 'page-box',template:/*ion-inline-start:"E:\ionic\shin-ionic\src\pages\box\box.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>ThreeJS Box</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <flash-card>\n    <div class="fc-front">    \n      <h2 text-center>3D Model with Flash Card</h2>\n      <p>Description: 3D Model Rotation Animation Test</p>\n      <p>Start testing by clicking here</p>\n    </div>\n    <div class="fc-back">\n      <div #rendererContainer></div>\n    </div>\n  </flash-card>\n\n  <!-- <div #rendererContainer></div> -->\n</ion-content>'/*ion-inline-end:"E:\ionic\shin-ionic\src\pages\box\box.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], BoxPage);
    return BoxPage;
}());

//# sourceMappingURL=box.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GpsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_location_tracker_location_tracker__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tracking_tracking__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GpsPage = (function () {
    function GpsPage(modalCtrl, navCtrl, locationTracker, db) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.locationTracker = locationTracker;
        this.db = db;
        this.ticks = 0;
        this.autoSave = false;
        this.interval = 5;
        this.lineColor = "#FF0000";
        this.trackingPath = 'shin/tracking';
        this.trackings = this.db.list(this.trackingPath + "/").valueChanges();
    }
    GpsPage.prototype.start = function () {
        this.locationTracker.startTracking();
    };
    GpsPage.prototype.stop = function () {
        alert('stop tracking');
        this.stopTimer();
        this.locationTracker.stopTracking();
        var data = {
            name: 'Name:' + __WEBPACK_IMPORTED_MODULE_5_moment___default()(new Date()).format('MMM DD YYYY'),
            date: __WEBPACK_IMPORTED_MODULE_5_moment___default()(new Date()).format('MMM DD YYYY'),
            gps: this.gps,
        };
        var key = this.db.list(this.trackingPath + "/").push(data).key;
        var dataKey = {
            id: key
        };
        this.db.object(this.trackingPath + "/" + key).update(dataKey)
            .catch(function (error) { return console.log(error); });
    };
    GpsPage.prototype.tickerFunc = function (tick) {
        console.log("tickerFunc tick=", tick);
        this.ticks = tick;
        this.gps.push({ lat: this.locationTracker.lat, lng: this.locationTracker.lng });
        this.updatePolyline(this.locationTracker.lat, this.locationTracker.lng);
    };
    GpsPage.prototype.startTimer = function () {
        var _this = this;
        console.log("start timer");
        this.gps = [];
        //5 every second (5000ms), starting after 0.5(500ms) seconds
        this.timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].timer(500, this.interval * 1000);
        // subscribing to a observable returns a subscription object
        this.sub = this.timer.subscribe(function (t) { return _this.tickerFunc(t); });
        this.gps.push({ lat: this.locationTracker.lat, lng: this.locationTracker.lng });
        this.LoadMap(this.locationTracker.lat, this.locationTracker.lng);
        this.setPolyline();
    };
    ;
    GpsPage.prototype.stopTimer = function () {
        console.log("stop timer");
        this.sub.unsubscribe();
    };
    GpsPage.prototype.ionViewDidLoad = function () {
        this.LoadMap(52.130889, -106.660233);
    };
    GpsPage.prototype.LoadMap = function (lat, lng) {
        var _this = this;
        var latLng = new google.maps.LatLng(lat, lng);
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
            title: "Current Position",
            position: latLng
        });
        var infoWindow = new google.maps.InfoWindow({
            content: "<h4>Center Location</h4>"
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    GpsPage.prototype.setPolyline = function () {
        //console.log(this.gps);
        if (this.gps.length > 0) {
            var lineSymbol = {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 8,
                strokeColor: '#393'
            };
            this.linePath = new google.maps.Polyline({
                path: this.gps,
                geodesic: true,
                strokeColor: this.lineColor,
                strokeOpacity: 1.0,
                strokeWeight: 2,
                icons: [{
                        icon: lineSymbol,
                        offset: '100%'
                    }],
            });
            this.linePath.setMap(this.map);
        }
    };
    GpsPage.prototype.updatePolyline = function (lat, lng) {
        var path = this.linePath.getPath();
        var newCord = new google.maps.LatLng(lat, lng);
        path.push(newCord);
        this.linePath.setPath(path);
    };
    GpsPage.prototype.trackTapped = function (event, tracking) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__tracking_tracking__["a" /* TrackingPage */], { tracking: tracking, lineColor: this.lineColor });
    };
    GpsPage.prototype.editTrack = function (tracking) {
        var editTrackModel = this.modalCtrl.create('EditTrackPage', { tracking: tracking }, { cssClass: 'inset-modal' });
        editTrackModel.onDidDismiss(function (data) {
            if (data) {
                console.log("test1111");
            }
        });
        editTrackModel.present();
    };
    GpsPage.prototype.deleteTrack = function (tracking) {
        this.db.object(this.trackingPath + "/" + tracking.id).remove()
            .catch(function (error) { return console.log(error); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], GpsPage.prototype, "mapElement", void 0);
    GpsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-gps',template:/*ion-inline-start:"E:\ionic\shin-ionic\src\pages\gps\gps.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>GPS Tracking</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <p>Current: {{locationTracker.lat}}, {{locationTracker.lng}}</p>\n  <button ion-button color="danger" (click)="start()">Start Tracking</button>\n  <button ion-button color="light" (click)="startTimer()">Start Timer</button>\n  <button ion-button color="secondary" (click)="stop()">Stop Tracking</button>\n  <div #map id="map"></div>\n  <ion-list>\n    <ion-item>\n      <ion-label> Auto Save </ion-label>\n      <ion-toggle [(ngModel)]="autoSave" (click)="autoSave()"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label> Interval(s) </ion-label>\n      <ion-select [(ngModel)]="interval">\n        <ion-option value=5>5</ion-option>\n        <ion-option value=10>10</ion-option>\n        <ion-option value=20>20</ion-option>\n        <ion-option value=50>50</ion-option>\n        <ion-option value=100>100</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label> Line Color </ion-label>\n      <ion-select [(ngModel)]="lineColor">\n        <ion-option value="#FF0000">Red</ion-option>\n        <ion-option value="#488AFF">Blue</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n  <p>GPS Tracking List:</p>\n  <ion-list>\n    <ion-item-sliding *ngFor="let tracking of trackings | async">\n      <button ion-item (click)="trackTapped($event, tracking)">\n        <h2>{{tracking.name}}</h2>\n        <p item-end>{{tracking.date}}</p>\n      </button>\n      <ion-item-options>\n        <button ion-button clear small color="danger" icon-left (click)="deleteTrack(tracking)">\n          <ion-icon name=\'trash\'></ion-icon>\n        </button>\n        <button ion-button clear small color="secondary" icon-left (click)="editTrack(tracking)">\n          <ion-icon name=\'create\'></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"E:\ionic\shin-ionic\src\pages\gps\gps.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_location_tracker_location_tracker__["a" /* LocationTrackerProvider */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], GpsPage);
    return GpsPage;
}());

//# sourceMappingURL=gps.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrackingPage = (function () {
    function TrackingPage(navParams) {
        this.navParams = navParams;
        this.tracking = navParams.get('tracking');
        this.lineColor = navParams.get('lineColor');
    }
    TrackingPage.prototype.ionViewDidLoad = function () {
        this.LoadMap(this.tracking.gps[0].lat, this.tracking.gps[0].lng);
        this.setPolyline();
    };
    TrackingPage.prototype.LoadMap = function (lat, lng) {
        var _this = this;
        var latLng = new google.maps.LatLng(lat, lng);
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
            title: "Start Position",
            position: latLng
        });
        var infoWindow = new google.maps.InfoWindow({
            content: "<h4>Start Location</h4>"
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    TrackingPage.prototype.setPolyline = function () {
        //console.log(this.tracking.gps);
        if (this.tracking.gps.length > 0) {
            var lineSymbol = {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 8,
                strokeColor: '#393'
            };
            var linePath = new google.maps.Polyline({
                path: this.tracking.gps,
                geodesic: true,
                strokeColor: this.lineColor,
                strokeOpacity: 1.0,
                strokeWeight: 2,
                icons: [{
                        icon: lineSymbol,
                        offset: '100%'
                    }],
            });
            linePath.setMap(this.map);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], TrackingPage.prototype, "mapElement", void 0);
    TrackingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tracking',template:/*ion-inline-start:"E:\ionic\shin-ionic\src\pages\tracking\tracking.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>GPS Tracking Review</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>{{tracking.name}}</h2>\n  <p>{{tracking.date}}</p>\n  <div #map id="map"></div>\n</ion-content>\n'/*ion-inline-end:"E:\ionic\shin-ionic\src\pages\tracking\tracking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TrackingPage);
    return TrackingPage;
}());

//# sourceMappingURL=tracking.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
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
        this.item = navParams.get('item');
        var dataString = this.item.place;
        if (dataString === null || dataString === undefined || dataString === '') {
            this.place = 'City hall';
            this.latData = 52.130889;
            this.lngData = -106.660233;
        }
        else {
            var data = dataString.split(',');
            if (data[0] !== '') {
                this.place = data[0];
            }
            if (data[1] !== '' && data[2] !== '') {
                this.latData = Number(data[1]);
                this.lngData = Number(data[2]);
            }
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
            selector: 'page-event',template:/*ion-inline-start:"E:\ionic\shin-ionic\src\pages\contact\event\event.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Event Information</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-content>\n      <img *ngIf="item.imageUrl"  [src]="item.imageUrl" />\n      <h2 class="card-title">{{item.name}}</h2>\n      <p>Place: {{place}}</p>\n      <p>Date: {{item.date}}</p>\n      <p>Description: {{item.description}}</p>\n    </ion-card-content>\n  </ion-card>\n\n  <h2>{{place}}</h2>\n  <div #map id="map"></div>\n</ion-content>'/*ion-inline-end:"E:\ionic\shin-ionic\src\pages\contact\event\event.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EventPage);
    return EventPage;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoragePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_upload_model__ = __webpack_require__(954);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(955);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(956);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_storage__ = __webpack_require__(962);
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
        this.folder = 'song';
        this.uploadItems = this.db.list(this.basePath + "/" + this.folder + "/").valueChanges();
    }
    StoragePage.prototype.segmentChanged = function () {
        console.log('segmentChanged =', this.folder);
        this.uploadItems = this.db.list(this.basePath + "/" + this.folder + "/").valueChanges();
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
            var uploadTask = storageRef.child(_this.basePath + "/" + _this.folder + "/" + _this.upload.file.name)
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
        var key = this.db.list(this.basePath + "/" + this.folder + "/").push(upload).key;
        var path = this.basePath + "/" + this.folder + "/" + key;
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
        var path = this.basePath + "/" + this.folder + "/" + item.id;
        this.db.object(path).remove().then(function (res) {
            console.log('Data deleted from database! ' + item.name);
        }).catch(function (err) {
            console.log(err);
        });
        //delete file in storage
        var storageRef = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["storage"]().ref().child(this.basePath + "/" + this.folder + "/" + item.name);
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
            selector: 'page-storage',template:/*ion-inline-start:"E:\ionic\shin-ionic\src\pages\storage\storage.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-segment [(ngModel)]="folder" color="danger" (ionChange)="segmentChanged($event)">\n      <ion-segment-button value="song">\n        Song\n      </ion-segment-button>\n      <ion-segment-button value="business">\n        Business\n      </ion-segment-button>\n      <ion-segment-button value="others">\n        Others\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="container">\n    <div *ngIf="upload">\n      <div class="progress">\n        <div class="progress-bar progress-bar-animated" \n        [ngStyle]="{ \'width\': upload?.progress + \'%\' }"></div>\n      </div>\n      Progress: {{upload?.progress}}% Complete\n    </div>\n    <div class="container">\n      <input type="file" (change)="handleFiles($event)" multiple>\n      <button ion-button color="secondary" small (click)="uploadFiles()">\n        <ion-icon name="cloud-upload"></ion-icon>\n      </button>\n    </div>\n  </div>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of uploadItems | async">\n      <ion-item>\n        <ion-avatar item-start>\n          <img [src]="item.url" />\n        </ion-avatar>\n        <ion-icon name="download"></ion-icon>\n        <a href="{{item.url}}" download>{{item.name}}</a>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="danger" (click)="deleteItem(item)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"E:\ionic\shin-ionic\src\pages\storage\storage.html"*/,
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

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartPage = (function () {
    function ChartPage() {
        this.title = 'title';
        this.userid = '12345';
        this.rates = [];
        this.status = [];
        //get all cues to classify
        var goodCueIndex = 1;
        var badCueIndex = 2;
        var neverCueIndex = 3;
        this.rates.push({ name: 'good', count: goodCueIndex });
        this.rates.push({ name: 'bad', count: badCueIndex });
        this.rates.push({ name: 'never show', count: neverCueIndex });
        //get all stacks to classify
        var favorStackIndex = 3;
        var studyStackIndex = 2;
        var allStackIndex = 1;
        this.status.push({ name: 'favorite', count: favorStackIndex });
        this.status.push({ name: 'study', count: studyStackIndex });
        this.status.push({ name: 'all', count: allStackIndex });
    }
    ChartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChartPage');
    };
    ChartPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.barChart = _this.getBarChart();
        }, 150);
        setTimeout(function () {
            _this.pieChart = _this.getPieChart();
        }, 350);
    };
    ChartPage.prototype.getChart = function (context, chartType, data, options) {
        return new __WEBPACK_IMPORTED_MODULE_1_chart_js___default.a(context, {
            data: data,
            options: options,
            type: chartType,
        });
    };
    ChartPage.prototype.getPieChart = function () {
        var data = {
            labels: [this.rates[0].name, this.rates[1].name, this.rates[2].name],
            datasets: [
                {
                    data: [this.rates[0].count, this.rates[1].count, this.rates[2].count],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                }
            ]
        };
        return this.getChart(this.pieCanvas.nativeElement, 'pie', data);
    };
    ChartPage.prototype.getBarChart = function () {
        var data = {
            labels: [this.status[0].name, this.status[1].name, this.status[2].name],
            datasets: [{
                    label: '# of Votes',
                    data: [this.status[0].count, this.status[1].count, this.status[2].count],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
        };
        var options = {
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
            }
        };
        return this.getChart(this.barCanvas.nativeElement, 'bar', data, options);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], ChartPage.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('pieCanvas'),
        __metadata("design:type", Object)
    ], ChartPage.prototype, "pieCanvas", void 0);
    ChartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-chart',template:/*ion-inline-start:"E:\ionic\shin-ionic\src\pages\chart\chart.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>chart</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card>\n      <ion-card-header>\n        Report1: user[{{userid}}]\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #barCanvas></canvas>\n      </ion-card-content>\n    </ion-card>\n    <ion-card-header>\n      Report2: Title[{{title}}]\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #pieCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"E:\ionic\shin-ionic\src\pages\chart\chart.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], ChartPage);
    return ChartPage;
}());

//# sourceMappingURL=chart.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Three1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__box_place_box_place__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__box_box__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_map__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gps_gps__ = __webpack_require__(212);
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
    Three1Page.prototype.goToBox = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__box_box__["a" /* BoxPage */], null);
    };
    Three1Page.prototype.goToBoxPlace = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__box_place_box_place__["a" /* BoxPlacePage */], null);
    };
    Three1Page.prototype.goToMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__map_map__["a" /* MapPage */], null);
    };
    Three1Page.prototype.goToGPS = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__gps_gps__["a" /* GpsPage */], null);
    };
    Three1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-three1',template:/*ion-inline-start:"E:\ionic\shin-ionic\src\pages\three1\three1.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Three and GoogleMap</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <button ion-button full color="secondary" (click)="goToGPS()">GPS Tracking</button>\n  <button ion-button full color="danger" (click)="goToMap()">GoogleMap</button>\n  <button ion-button full color="light" (click)="goToBox()">3DBox</button>\n  <button ion-button full color="secondary" (click)="goToBoxPlace()">BoxPlace</button>\n</ion-content>'/*ion-inline-end:"E:\ionic\shin-ionic\src\pages\three1\three1.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], Three1Page);
    return Three1Page;
}());

//# sourceMappingURL=three1.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapPage = (function () {
    function MapPage() {
    }
    MapPage.prototype.ionViewDidLoad = function () {
        this.LoadMap();
    };
    MapPage.prototype.LoadMap = function () {
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
    MapPage.prototype.showPanel = function (e) {
        e.stopPropagation();
        e.preventDefault();
        document.getElementById('drop-container').style.display = 'block';
        return false;
    };
    MapPage.prototype.hidePanel = function (e) {
        document.getElementById('drop-container').style.display = 'none';
    };
    MapPage.prototype.handleDrop = function (e) {
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
    MapPage.prototype.ReadGeoJSON = function () {
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
    MapPage.prototype.loadGeoJsonString = function (geoString) {
        var geojson = JSON.parse(geoString);
        this.map.data.addGeoJson(geojson);
        this.zoom(this.map);
    };
    MapPage.prototype.zoom = function (map) {
        var bounds = new google.maps.LatLngBounds();
        map.data.forEach(function (feature) {
            this.processPoints(feature.getGeometry(), bounds.extend, bounds);
        });
        map.fitBounds(bounds);
    };
    MapPage.prototype.processPoints = function (geometry, callback, thisArg) {
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
    MapPage.prototype.getPolyline = function () {
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
    MapPage.prototype.getDirection = function () {
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
    MapPage.prototype.Rectangle = function () {
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], MapPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('drop'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], MapPage.prototype, "dropContainer", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"E:\ionic\shin-ionic\src\pages\map\map.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>GoogleMap</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <button ion-button color="danger" (click)="ReadGeoJSON()">ReadGeoJSON</button>\n  <button ion-button color="danger" (click)="Rectangle()">Rectangle</button>\n  <button ion-button color="danger" (click)="getDirection()">Get the Direction</button>\n  <button ion-button color="light" (click)="getPolyline()">Get the Polyline</button>\n  <div #map id="map"></div>\n  <div #drop id="drop-container"><div id="drop-silhouette"></div></div>\n</ion-content>'/*ion-inline-end:"E:\ionic\shin-ionic\src\pages\map\map.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 231:
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
webpackEmptyAsyncContext.id = 231;

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/edit-user/edit-user.module": [
		1045,
		8
	],
	"../pages/about/pay/pay.module": [
		1060,
		7
	],
	"../pages/box-place/box-place.module": [
		1046,
		17
	],
	"../pages/box/box.module": [
		1047,
		16
	],
	"../pages/chart/chart.module": [
		1058,
		15
	],
	"../pages/contact/create-event/create-event.module": [
		1048,
		6
	],
	"../pages/contact/edit-event/edit-event.module": [
		1049,
		5
	],
	"../pages/contact/event/event.module": [
		1051,
		14
	],
	"../pages/gps/gps.module": [
		1050,
		13
	],
	"../pages/home/create-song/create-song.module": [
		1056,
		4
	],
	"../pages/home/edit-song/edit-song.module": [
		1052,
		3
	],
	"../pages/home/login/login.module": [
		1053,
		2
	],
	"../pages/home/signup/signup.module": [
		1054,
		1
	],
	"../pages/home/song/song.module": [
		1055,
		0
	],
	"../pages/map/map.module": [
		1061,
		12
	],
	"../pages/storage/storage.module": [
		1057,
		11
	],
	"../pages/three1/three1.module": [
		1059,
		10
	],
	"../pages/tracking/tracking.module": [
		1062,
		9
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
webpackAsyncContext.id = 276;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationTrackerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_background_geolocation__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LocationTrackerProvider = (function () {
    function LocationTrackerProvider(zone, backgroundGeolocation, geolocation) {
        this.zone = zone;
        this.backgroundGeolocation = backgroundGeolocation;
        this.geolocation = geolocation;
        this.lat = 0;
        this.lng = 0;
    }
    LocationTrackerProvider.prototype.startTracking = function () {
        var _this = this;
        var config = {
            desiredAccuracy: 0,
            stationaryRadius: 20,
            distanceFilter: 10,
            debug: true,
            interval: 2000
        };
        this.backgroundGeolocation.configure(config).subscribe(function (location) {
            console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);
            // Update inside of Angular's zone
            _this.zone.run(function () {
                _this.lat = location.latitude;
                _this.lng = location.longitude;
            });
        }, function (err) {
            console.log(err);
        });
        this.backgroundGeolocation.start();
        // Background tracking
        var options = {
            frequency: 3000,
            enableHighAccuracy: true
        };
        this.watch = this.geolocation.watchPosition(options).filter(function (p) { return p.code === undefined; }).subscribe(function (position) {
            console.log(position);
            _this.zone.run(function () {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
            });
        });
    };
    LocationTrackerProvider.prototype.stopTracking = function () {
        console.log('stopTracking');
        this.backgroundGeolocation.finish();
        this.watch.unsubscribe();
    };
    LocationTrackerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], LocationTrackerProvider);
    return LocationTrackerProvider;
}());

//# sourceMappingURL=location-tracker.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__storage_storage__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__three1_three1__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chart_chart__ = __webpack_require__(216);
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
        this.tab6Root = __WEBPACK_IMPORTED_MODULE_6__chart_chart__["a" /* ChartPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\ionic\shin-ionic\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Video" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="User" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Event" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Storage" tabIcon="cloud"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Map3D" tabIcon="map"></ion-tab>\n  <ion-tab [root]="tab6Root" tabTitle="Chart" tabIcon="analytics"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"E:\ionic\shin-ionic\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_monthly_model__ = __webpack_require__(1042);
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
        var _this = this;
        this.db = db;
        this.modalCtrl = modalCtrl;
        this.userPath = 'shin/users';
        this.payPath = 'shin/pays';
        this.yearPay = __WEBPACK_IMPORTED_MODULE_3_moment___default()(new Date()).format('YYYY');
        this.db.list(this.userPath + "/").valueChanges().subscribe(function (res) {
            _this.users = [];
            res.forEach(function (rs) {
                var user = rs;
                _this.users.push({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    imageUrl: user.imageUrl,
                    count: 0
                });
            });
        });
        this.loadingData();
    }
    AboutPage.prototype.loadingData = function () {
        var _this = this;
        this.db.list(this.payPath + "/" + this.yearPay + "/").valueChanges().subscribe(function (res) {
            res.forEach(function (rs1) {
                var count = 0;
                var pay = rs1;
                Object.keys(pay.monthly).map(function (index) {
                    var monthly = new __WEBPACK_IMPORTED_MODULE_4__models_monthly_model__["a" /* Monthly */];
                    monthly = pay.monthly[index];
                    if (monthly.date !== '') {
                        count++;
                    }
                });
                //console.log('user=', pay.userid, ', count=', count);
                var check = _this.users.filter(function (item) { return item.uid === pay.userid; });
                if (check.length > 0) {
                    check[0].count = count;
                    //console.log('found user=', pay.userid, ', count=', count);
                }
            });
        });
    };
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
    AboutPage.prototype.doView = function () {
        var _this = this;
        this.db.list(this.payPath + "/" + this.yearPay + "/").valueChanges().subscribe(function (rs) {
            console.log('re.length=', rs.length);
            if (rs.length < 1) {
                var monthly_1 = [];
                for (var i = 0; i < 12; i++) {
                    monthly_1.push({ date: '' });
                }
                _this.users.forEach(function (user) {
                    var data = {
                        userid: user.uid,
                        monthly: monthly_1
                    };
                    var key = _this.db.list(_this.payPath + "/" + _this.yearPay + "/").push(data).key;
                    var dataKey = {
                        id: key
                    };
                    _this.db.object(_this.payPath + "/" + _this.yearPay + "/" + key + "/").update(dataKey)
                        .catch(function (error) { return console.log(error); });
                });
            }
        });
        this.loadingData();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"E:\ionic\shin-ionic\src\pages\about\about.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>User List</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-item>\n      <ion-icon name="calendar" item-start></ion-icon>\n      <ion-label>Year</ion-label>\n      <ion-datetime displayFormat="YYYY" max="2050" [(ngModel)]="yearPay" (ngModelChange)="doView()"></ion-datetime>\n    </ion-item>    \n\n    <ion-list>\n      <ion-item-sliding *ngFor="let user of users">\n        <button ion-item (click)="userTapped($event, user)">\n          <ion-avatar item-start>\n            <img *ngIf="user.imageUrl" [src]="user.imageUrl" />\n          </ion-avatar>\n          <h2>{{user.displayName}}</h2>\n          <ion-note item-end>{{user.count}}/12</ion-note>\n        </button>\n        <ion-item-options>\n          <button ion-button clear small color="secondary" icon-left (click)="userEdit(user)">\n            <ion-icon name=\'create\'></ion-icon>\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </ion-content>'/*ion-inline-end:"E:\ionic\shin-ionic\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_event__ = __webpack_require__(214);
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
            selector: 'page-contact',template:/*ion-inline-start:"E:\ionic\shin-ionic\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Event List</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="createItem()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-icon name="calendar" item-start></ion-icon>\n    <ion-label>Year</ion-label>\n    <ion-datetime displayFormat="YYYY" max="2050" [(ngModel)]="yearPay" (ngModelChange)="loadingData()"></ion-datetime>\n  </ion-item>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of items | async">\n      <button ion-item (click)="itemTapped($event, item)">\n        <ion-avatar item-start>\n          <img *ngIf="item.imageUrl" [src]="item.imageUrl" />\n        </ion-avatar>\n        <h2>{{item.name}}</h2>\n        <p item-end>{{item.date}}</p>\n      </button>\n      <ion-item-options>\n        <button ion-button clear small color="danger" icon-left (click)="deleteItem(item)">\n          <ion-icon name=\'trash\'></ion-icon>\n        </button>\n        <button ion-button clear small color="secondary" icon-left (click)="editItem(item)">\n          <ion-icon name=\'create\'></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"E:\ionic\shin-ionic\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(209);
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
            selector: 'page-home',template:/*ion-inline-start:"E:\ionic\shin-ionic\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Youtube Play List</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="createSong()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor="let song of songs | async">\n      <button ion-item (click)="songTapped($event, song)">\n        <ion-avatar item-start>\n          <img *ngIf="song.imageUrl" [src]="song.imageUrl" />\n        </ion-avatar>\n        <h2>{{song.name}}</h2>\n        <!-- <p item-end>{{song.description}}</p> -->\n      </button>\n      <ion-item-options>\n        <button ion-button clear small color="danger" icon-left (click)="deleteSong(song)">\n          <ion-icon name=\'trash\'></ion-icon>\n        </button>\n        <button ion-button clear small color="secondary" icon-left (click)="editSong(song)">\n          <ion-icon name=\'create\'></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n    <!-- Float Action Buttons -->\n  <ion-fab bottom right >\n    <button ion-fab class="pop-in" color="danger">Accout</button>\n    <ion-fab-list side="top">\n      <button ion-fab color="primary" (click)="openModalLogin()">\n        <ion-icon  name="log-in"></ion-icon>\n      </button>\n      <button ion-fab color="secondary" (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n      <button ion-fab color="danger" (click)="openModalSignup()">\n        <ion-icon name="link"></ion-icon>\n      </button>\n    </ion-fab-list>\n    <ion-fab-list side="left">\n      <button ion-fab>\n        <ion-icon name="logo-github"></ion-icon>\n      </button>\n    </ion-fab-list>\n  </ion-fab>\n    \n</ion-content>'/*ion-inline-end:"E:\ionic\shin-ionic\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YtProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(64);
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

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(603);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(1041);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tracking_tracking__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_gps_gps__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_map_map__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_chart_chart__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_event_event__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_box_box__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_box_place_box_place__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_three1_three1__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_storage_storage__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_about_about__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_database__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2_auth__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_auth_auth__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_http__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_youtube_video_player__ = __webpack_require__(1043);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_yt_yt__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pipes_moment_moment__ = __webpack_require__(1044);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_flash_card_flash_card__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_geolocation__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_background_geolocation__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_location_tracker_location_tracker__ = __webpack_require__(410);
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

//geolocation



var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_storage_storage__["a" /* StoragePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_three1_three1__["a" /* Three1Page */],
                __WEBPACK_IMPORTED_MODULE_9__pages_box_box__["a" /* BoxPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_box_place_box_place__["a" /* BoxPlacePage */],
                __WEBPACK_IMPORTED_MODULE_26__pipes_moment_moment__["a" /* MomentPipe */],
                __WEBPACK_IMPORTED_MODULE_27__components_flash_card_flash_card__["a" /* FlashCardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_chart_chart__["a" /* ChartPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_gps_gps__["a" /* GpsPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tracking_tracking__["a" /* TrackingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_19_angularfire2__["a" /* AngularFireModule */],
                __WEBPACK_IMPORTED_MODULE_20_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_21_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_19_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/edit-user/edit-user.module#EditUserPageModule', name: 'EditUserPage', segment: 'edit-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/box-place/box-place.module#BoxPlacePageModule', name: 'BoxPlacePage', segment: 'box-place', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/box/box.module#BoxPageModule', name: 'BoxPage', segment: 'box', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/create-event/create-event.module#CreateEventPageModule', name: 'CreateEventPage', segment: 'create-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/edit-event/edit-event.module#EditEventPageModule', name: 'EditEventPage', segment: 'edit-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gps/gps.module#GpsPageModule', name: 'GpsPage', segment: 'gps', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/event/event.module#EventPageModule', name: 'EventPage', segment: 'event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/edit-song/edit-song.module#EditSongPageModule', name: 'EditSongPage', segment: 'edit-song', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/song/song.module#SongPageModule', name: 'SongPage', segment: 'song', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/create-song/create-song.module#CreateSongPageModule', name: 'CreateSongPage', segment: 'create-song', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/storage/storage.module#StoragePageModule', name: 'StoragePage', segment: 'storage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chart/chart.module#ChartPageModule', name: 'ChartPage', segment: 'chart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/three1/three1.module#Three1PageModule', name: 'Three1Page', segment: 'three1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/about/pay/pay.module#PayPageModule', name: 'PayPage', segment: 'pay', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tracking/tracking.module#TrackingPageModule', name: 'TrackingPage', segment: 'tracking', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_storage_storage__["a" /* StoragePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_three1_three1__["a" /* Three1Page */],
                __WEBPACK_IMPORTED_MODULE_9__pages_box_box__["a" /* BoxPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_box_place_box_place__["a" /* BoxPlacePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_chart_chart__["a" /* ChartPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_gps_gps__["a" /* GpsPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tracking_tracking__["a" /* TrackingPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */],
                __WEBPACK_IMPORTED_MODULE_22__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_yt_yt__["a" /* YtProvider */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */],
                __WEBPACK_IMPORTED_MODULE_30__providers_location_tracker_location_tracker__["a" /* LocationTrackerProvider */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_26__pipes_moment_moment__["a" /* MomentPipe */],
                __WEBPACK_IMPORTED_MODULE_27__components_flash_card_flash_card__["a" /* FlashCardComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 950:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 415,
	"./af.js": 415,
	"./ar": 416,
	"./ar-dz": 417,
	"./ar-dz.js": 417,
	"./ar-kw": 418,
	"./ar-kw.js": 418,
	"./ar-ly": 419,
	"./ar-ly.js": 419,
	"./ar-ma": 420,
	"./ar-ma.js": 420,
	"./ar-sa": 421,
	"./ar-sa.js": 421,
	"./ar-tn": 422,
	"./ar-tn.js": 422,
	"./ar.js": 416,
	"./az": 423,
	"./az.js": 423,
	"./be": 424,
	"./be.js": 424,
	"./bg": 425,
	"./bg.js": 425,
	"./bm": 426,
	"./bm.js": 426,
	"./bn": 427,
	"./bn.js": 427,
	"./bo": 428,
	"./bo.js": 428,
	"./br": 429,
	"./br.js": 429,
	"./bs": 430,
	"./bs.js": 430,
	"./ca": 431,
	"./ca.js": 431,
	"./cs": 432,
	"./cs.js": 432,
	"./cv": 433,
	"./cv.js": 433,
	"./cy": 434,
	"./cy.js": 434,
	"./da": 435,
	"./da.js": 435,
	"./de": 436,
	"./de-at": 437,
	"./de-at.js": 437,
	"./de-ch": 438,
	"./de-ch.js": 438,
	"./de.js": 436,
	"./dv": 439,
	"./dv.js": 439,
	"./el": 440,
	"./el.js": 440,
	"./en-au": 441,
	"./en-au.js": 441,
	"./en-ca": 442,
	"./en-ca.js": 442,
	"./en-gb": 443,
	"./en-gb.js": 443,
	"./en-ie": 444,
	"./en-ie.js": 444,
	"./en-il": 445,
	"./en-il.js": 445,
	"./en-nz": 446,
	"./en-nz.js": 446,
	"./eo": 447,
	"./eo.js": 447,
	"./es": 448,
	"./es-do": 449,
	"./es-do.js": 449,
	"./es-us": 450,
	"./es-us.js": 450,
	"./es.js": 448,
	"./et": 451,
	"./et.js": 451,
	"./eu": 452,
	"./eu.js": 452,
	"./fa": 453,
	"./fa.js": 453,
	"./fi": 454,
	"./fi.js": 454,
	"./fo": 455,
	"./fo.js": 455,
	"./fr": 456,
	"./fr-ca": 457,
	"./fr-ca.js": 457,
	"./fr-ch": 458,
	"./fr-ch.js": 458,
	"./fr.js": 456,
	"./fy": 459,
	"./fy.js": 459,
	"./gd": 460,
	"./gd.js": 460,
	"./gl": 461,
	"./gl.js": 461,
	"./gom-latn": 462,
	"./gom-latn.js": 462,
	"./gu": 463,
	"./gu.js": 463,
	"./he": 464,
	"./he.js": 464,
	"./hi": 465,
	"./hi.js": 465,
	"./hr": 466,
	"./hr.js": 466,
	"./hu": 467,
	"./hu.js": 467,
	"./hy-am": 468,
	"./hy-am.js": 468,
	"./id": 469,
	"./id.js": 469,
	"./is": 470,
	"./is.js": 470,
	"./it": 471,
	"./it.js": 471,
	"./ja": 472,
	"./ja.js": 472,
	"./jv": 473,
	"./jv.js": 473,
	"./ka": 474,
	"./ka.js": 474,
	"./kk": 475,
	"./kk.js": 475,
	"./km": 476,
	"./km.js": 476,
	"./kn": 477,
	"./kn.js": 477,
	"./ko": 478,
	"./ko.js": 478,
	"./ky": 479,
	"./ky.js": 479,
	"./lb": 480,
	"./lb.js": 480,
	"./lo": 481,
	"./lo.js": 481,
	"./lt": 482,
	"./lt.js": 482,
	"./lv": 483,
	"./lv.js": 483,
	"./me": 484,
	"./me.js": 484,
	"./mi": 485,
	"./mi.js": 485,
	"./mk": 486,
	"./mk.js": 486,
	"./ml": 487,
	"./ml.js": 487,
	"./mr": 488,
	"./mr.js": 488,
	"./ms": 489,
	"./ms-my": 490,
	"./ms-my.js": 490,
	"./ms.js": 489,
	"./mt": 491,
	"./mt.js": 491,
	"./my": 492,
	"./my.js": 492,
	"./nb": 493,
	"./nb.js": 493,
	"./ne": 494,
	"./ne.js": 494,
	"./nl": 495,
	"./nl-be": 496,
	"./nl-be.js": 496,
	"./nl.js": 495,
	"./nn": 497,
	"./nn.js": 497,
	"./pa-in": 498,
	"./pa-in.js": 498,
	"./pl": 499,
	"./pl.js": 499,
	"./pt": 500,
	"./pt-br": 501,
	"./pt-br.js": 501,
	"./pt.js": 500,
	"./ro": 502,
	"./ro.js": 502,
	"./ru": 503,
	"./ru.js": 503,
	"./sd": 504,
	"./sd.js": 504,
	"./se": 505,
	"./se.js": 505,
	"./si": 506,
	"./si.js": 506,
	"./sk": 507,
	"./sk.js": 507,
	"./sl": 508,
	"./sl.js": 508,
	"./sq": 509,
	"./sq.js": 509,
	"./sr": 510,
	"./sr-cyrl": 511,
	"./sr-cyrl.js": 511,
	"./sr.js": 510,
	"./ss": 512,
	"./ss.js": 512,
	"./sv": 513,
	"./sv.js": 513,
	"./sw": 514,
	"./sw.js": 514,
	"./ta": 515,
	"./ta.js": 515,
	"./te": 516,
	"./te.js": 516,
	"./tet": 517,
	"./tet.js": 517,
	"./tg": 518,
	"./tg.js": 518,
	"./th": 519,
	"./th.js": 519,
	"./tl-ph": 520,
	"./tl-ph.js": 520,
	"./tlh": 521,
	"./tlh.js": 521,
	"./tr": 522,
	"./tr.js": 522,
	"./tzl": 523,
	"./tzl.js": 523,
	"./tzm": 524,
	"./tzm-latn": 525,
	"./tzm-latn.js": 525,
	"./tzm.js": 524,
	"./ug-cn": 526,
	"./ug-cn.js": 526,
	"./uk": 527,
	"./uk.js": 527,
	"./ur": 528,
	"./ur.js": 528,
	"./uz": 529,
	"./uz-latn": 530,
	"./uz-latn.js": 530,
	"./uz.js": 529,
	"./vi": 531,
	"./vi.js": 531,
	"./x-pseudo": 532,
	"./x-pseudo.js": 532,
	"./yo": 533,
	"./yo.js": 533,
	"./zh-cn": 534,
	"./zh-cn.js": 534,
	"./zh-hk": 535,
	"./zh-hk.js": 535,
	"./zh-tw": 536,
	"./zh-tw.js": 536
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
webpackContext.id = 950;

/***/ }),

/***/ 954:
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

/***/ })

},[598]);
//# sourceMappingURL=main.js.map