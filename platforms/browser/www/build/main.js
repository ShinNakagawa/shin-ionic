webpackJsonp([16],{

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(49);
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

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__(576);
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
            selector: 'page-chart',template:/*ion-inline-start:"E:\ionic\shin-ionic\src\pages\chart\chart.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>chart</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card>\n      <ion-card-header>\n        Stack Report: user[{{userid}}]\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #barCanvas></canvas>\n      </ion-card-content>\n    </ion-card>\n    <ion-card-header>\n      Cue Report: Stack[{{title}}]\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #pieCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"E:\ionic\shin-ionic\src\pages\chart\chart.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], ChartPage);
    return ChartPage;
}());

//# sourceMappingURL=chart.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
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

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoragePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_upload_model__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_storage__ = __webpack_require__(635);
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

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxPlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__(400);
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

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__(400);
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

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Three1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__box_place_box_place__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__box_box__ = __webpack_require__(159);
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

/***/ 172:
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
webpackEmptyAsyncContext.id = 172;

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/edit-user/edit-user.module": [
		680,
		9
	],
	"../pages/about/newyear/newyear.module": [
		681,
		8
	],
	"../pages/about/pay/pay.module": [
		682,
		7
	],
	"../pages/chart/chart.module": [
		685,
		15
	],
	"../pages/contact/create-event/create-event.module": [
		683,
		6
	],
	"../pages/contact/edit-event/edit-event.module": [
		684,
		5
	],
	"../pages/contact/event/event.module": [
		686,
		14
	],
	"../pages/home/create-song/create-song.module": [
		687,
		4
	],
	"../pages/home/edit-song/edit-song.module": [
		688,
		3
	],
	"../pages/home/login/login.module": [
		689,
		2
	],
	"../pages/home/signup/signup.module": [
		690,
		1
	],
	"../pages/home/song/song.module": [
		691,
		0
	],
	"../pages/storage/storage.module": [
		692,
		13
	],
	"../pages/three1/box-place/box-place.module": [
		693,
		12
	],
	"../pages/three1/box/box.module": [
		694,
		11
	],
	"../pages/three1/three1.module": [
		695,
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
webpackAsyncContext.id = 215;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__storage_storage__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__three1_three1__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chart_chart__ = __webpack_require__(155);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\ionic\shin-ionic\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Video" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="User" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Event" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Storage" tabIcon="cloud"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="3D" tabIcon="map"></ion-tab>\n  <ion-tab [root]="tab6Root" tabTitle="Chart" tabIcon="analytics"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"E:\ionic\shin-ionic\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(49);
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

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_event__ = __webpack_require__(156);
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

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(154);
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

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YtProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(79);
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

/***/ 448:
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

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(470);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_chart_chart__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_event_event__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_three1_box_box__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_three1_box_place_box_place__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_three1_three1__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_storage_storage__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_auth_auth__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_http__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_youtube_video_player__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_yt_yt__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pipes_moment_moment__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_flash_card_flash_card__ = __webpack_require__(448);
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
                __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_storage_storage__["a" /* StoragePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_three1_three1__["a" /* Three1Page */],
                __WEBPACK_IMPORTED_MODULE_6__pages_three1_box_box__["a" /* BoxPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_three1_box_place_box_place__["a" /* BoxPlacePage */],
                __WEBPACK_IMPORTED_MODULE_23__pipes_moment_moment__["a" /* MomentPipe */],
                __WEBPACK_IMPORTED_MODULE_24__components_flash_card_flash_card__["a" /* FlashCardComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_chart_chart__["a" /* ChartPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2__["a" /* AngularFireModule */],
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/edit-user/edit-user.module#EditUserPageModule', name: 'EditUserPage', segment: 'edit-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/about/newyear/newyear.module#NewYearPageModule', name: 'NewYearPage', segment: 'newyear', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/about/pay/pay.module#PayPageModule', name: 'PayPage', segment: 'pay', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/create-event/create-event.module#CreateEventPageModule', name: 'CreateEventPage', segment: 'create-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/edit-event/edit-event.module#EditEventPageModule', name: 'EditEventPage', segment: 'edit-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chart/chart.module#ChartPageModule', name: 'ChartPage', segment: 'chart', priority: 'low', defaultHistory: [] },
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
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_storage_storage__["a" /* StoragePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_three1_three1__["a" /* Three1Page */],
                __WEBPACK_IMPORTED_MODULE_6__pages_three1_box_box__["a" /* BoxPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_three1_box_place_box_place__["a" /* BoxPlacePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_chart_chart__["a" /* ChartPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */],
                __WEBPACK_IMPORTED_MODULE_19__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_yt_yt__["a" /* YtProvider */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_23__pipes_moment_moment__["a" /* MomentPipe */],
                __WEBPACK_IMPORTED_MODULE_24__components_flash_card_flash_card__["a" /* FlashCardComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 264,
	"./af.js": 264,
	"./ar": 265,
	"./ar-dz": 266,
	"./ar-dz.js": 266,
	"./ar-kw": 267,
	"./ar-kw.js": 267,
	"./ar-ly": 268,
	"./ar-ly.js": 268,
	"./ar-ma": 269,
	"./ar-ma.js": 269,
	"./ar-sa": 270,
	"./ar-sa.js": 270,
	"./ar-tn": 271,
	"./ar-tn.js": 271,
	"./ar.js": 265,
	"./az": 272,
	"./az.js": 272,
	"./be": 273,
	"./be.js": 273,
	"./bg": 274,
	"./bg.js": 274,
	"./bm": 275,
	"./bm.js": 275,
	"./bn": 276,
	"./bn.js": 276,
	"./bo": 277,
	"./bo.js": 277,
	"./br": 278,
	"./br.js": 278,
	"./bs": 279,
	"./bs.js": 279,
	"./ca": 280,
	"./ca.js": 280,
	"./cs": 281,
	"./cs.js": 281,
	"./cv": 282,
	"./cv.js": 282,
	"./cy": 283,
	"./cy.js": 283,
	"./da": 284,
	"./da.js": 284,
	"./de": 285,
	"./de-at": 286,
	"./de-at.js": 286,
	"./de-ch": 287,
	"./de-ch.js": 287,
	"./de.js": 285,
	"./dv": 288,
	"./dv.js": 288,
	"./el": 289,
	"./el.js": 289,
	"./en-au": 290,
	"./en-au.js": 290,
	"./en-ca": 291,
	"./en-ca.js": 291,
	"./en-gb": 292,
	"./en-gb.js": 292,
	"./en-ie": 293,
	"./en-ie.js": 293,
	"./en-il": 294,
	"./en-il.js": 294,
	"./en-nz": 295,
	"./en-nz.js": 295,
	"./eo": 296,
	"./eo.js": 296,
	"./es": 297,
	"./es-do": 298,
	"./es-do.js": 298,
	"./es-us": 299,
	"./es-us.js": 299,
	"./es.js": 297,
	"./et": 300,
	"./et.js": 300,
	"./eu": 301,
	"./eu.js": 301,
	"./fa": 302,
	"./fa.js": 302,
	"./fi": 303,
	"./fi.js": 303,
	"./fo": 304,
	"./fo.js": 304,
	"./fr": 305,
	"./fr-ca": 306,
	"./fr-ca.js": 306,
	"./fr-ch": 307,
	"./fr-ch.js": 307,
	"./fr.js": 305,
	"./fy": 308,
	"./fy.js": 308,
	"./gd": 309,
	"./gd.js": 309,
	"./gl": 310,
	"./gl.js": 310,
	"./gom-latn": 311,
	"./gom-latn.js": 311,
	"./gu": 312,
	"./gu.js": 312,
	"./he": 313,
	"./he.js": 313,
	"./hi": 314,
	"./hi.js": 314,
	"./hr": 315,
	"./hr.js": 315,
	"./hu": 316,
	"./hu.js": 316,
	"./hy-am": 317,
	"./hy-am.js": 317,
	"./id": 318,
	"./id.js": 318,
	"./is": 319,
	"./is.js": 319,
	"./it": 320,
	"./it.js": 320,
	"./ja": 321,
	"./ja.js": 321,
	"./jv": 322,
	"./jv.js": 322,
	"./ka": 323,
	"./ka.js": 323,
	"./kk": 324,
	"./kk.js": 324,
	"./km": 325,
	"./km.js": 325,
	"./kn": 326,
	"./kn.js": 326,
	"./ko": 327,
	"./ko.js": 327,
	"./ky": 328,
	"./ky.js": 328,
	"./lb": 329,
	"./lb.js": 329,
	"./lo": 330,
	"./lo.js": 330,
	"./lt": 331,
	"./lt.js": 331,
	"./lv": 332,
	"./lv.js": 332,
	"./me": 333,
	"./me.js": 333,
	"./mi": 334,
	"./mi.js": 334,
	"./mk": 335,
	"./mk.js": 335,
	"./ml": 336,
	"./ml.js": 336,
	"./mr": 337,
	"./mr.js": 337,
	"./ms": 338,
	"./ms-my": 339,
	"./ms-my.js": 339,
	"./ms.js": 338,
	"./mt": 340,
	"./mt.js": 340,
	"./my": 341,
	"./my.js": 341,
	"./nb": 342,
	"./nb.js": 342,
	"./ne": 343,
	"./ne.js": 343,
	"./nl": 344,
	"./nl-be": 345,
	"./nl-be.js": 345,
	"./nl.js": 344,
	"./nn": 346,
	"./nn.js": 346,
	"./pa-in": 347,
	"./pa-in.js": 347,
	"./pl": 348,
	"./pl.js": 348,
	"./pt": 349,
	"./pt-br": 350,
	"./pt-br.js": 350,
	"./pt.js": 349,
	"./ro": 351,
	"./ro.js": 351,
	"./ru": 352,
	"./ru.js": 352,
	"./sd": 353,
	"./sd.js": 353,
	"./se": 354,
	"./se.js": 354,
	"./si": 355,
	"./si.js": 355,
	"./sk": 356,
	"./sk.js": 356,
	"./sl": 357,
	"./sl.js": 357,
	"./sq": 358,
	"./sq.js": 358,
	"./sr": 359,
	"./sr-cyrl": 360,
	"./sr-cyrl.js": 360,
	"./sr.js": 359,
	"./ss": 361,
	"./ss.js": 361,
	"./sv": 362,
	"./sv.js": 362,
	"./sw": 363,
	"./sw.js": 363,
	"./ta": 364,
	"./ta.js": 364,
	"./te": 365,
	"./te.js": 365,
	"./tet": 366,
	"./tet.js": 366,
	"./tg": 367,
	"./tg.js": 367,
	"./th": 368,
	"./th.js": 368,
	"./tl-ph": 369,
	"./tl-ph.js": 369,
	"./tlh": 370,
	"./tlh.js": 370,
	"./tr": 371,
	"./tr.js": 371,
	"./tzl": 372,
	"./tzl.js": 372,
	"./tzm": 373,
	"./tzm-latn": 374,
	"./tzm-latn.js": 374,
	"./tzm.js": 373,
	"./ug-cn": 375,
	"./ug-cn.js": 375,
	"./uk": 376,
	"./uk.js": 376,
	"./ur": 377,
	"./ur.js": 377,
	"./uz": 378,
	"./uz-latn": 379,
	"./uz-latn.js": 379,
	"./uz.js": 378,
	"./vi": 380,
	"./vi.js": 380,
	"./x-pseudo": 381,
	"./x-pseudo.js": 381,
	"./yo": 382,
	"./yo.js": 382,
	"./zh-cn": 383,
	"./zh-cn.js": 383,
	"./zh-hk": 384,
	"./zh-hk.js": 384,
	"./zh-tw": 385,
	"./zh-tw.js": 385
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
webpackContext.id = 575;

/***/ }),

/***/ 625:
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

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(443);
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

/***/ 679:
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

},[449]);
//# sourceMappingURL=main.js.map