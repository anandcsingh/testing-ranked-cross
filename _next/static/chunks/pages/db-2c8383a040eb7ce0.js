(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[615],{

/***/ 3454:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ref, ref1;
module.exports = ((ref = __webpack_require__.g.process) == null ? void 0 : ref.env) && typeof ((ref1 = __webpack_require__.g.process) == null ? void 0 : ref1.env) === "object" ? __webpack_require__.g.process : __webpack_require__(7663);

//# sourceMappingURL=process.js.map

/***/ }),

/***/ 5252:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/db",
      function () {
        return __webpack_require__(7379);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 4953:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(594);
/* harmony import */ var _modules_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6525);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9828);



const UserApiClient = function() {
    return {
        addMartialArt: async function(address, martialArt, martialArtShortName, rank) {
            var user = null;
            console.log("begin add ma here Address " + address);
            const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .doc */ .JU)(_modules_firestore__WEBPACK_IMPORTED_MODULE_0__/* .database */ .F, "users", address);
            const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .getDoc */ .QT)(docRef);
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                user = docSnap.data();
                return addIfNotThere(user, address, martialArt, martialArtShortName, rank, false);
            } else {
                console.log("NO Document data:");
                return createEmptyUser(address, martialArt, martialArtShortName, rank);
            }
        },
        getUser: async function(address) {
            var user = null;
            console.log("Address " + address);
            await axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get("api/user/".concat(address)).then((r)=>user = r.data).catch((e)=>console.log(e.message));
            return user;
        },
        promoteStudent: async function(address, martialArt, martialArtShortName, rank) {
            var user = null;
            console.log("promo");
            const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .doc */ .JU)(_modules_firestore__WEBPACK_IMPORTED_MODULE_0__/* .database */ .F, "users", address);
            const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .getDoc */ .QT)(docRef);
            if (docSnap.exists()) {
                user = docSnap.data();
                return addIfNotThere(user, address, martialArt, martialArtShortName, rank, true);
            } else {
                let result = {};
                result.success = false;
                result.message = "Student not found with address ".concat(address, ". Ensure you entered the correct address or ask the student to join Ranked.");
                return result;
            }
        }
    };
    async function createEmptyUser(address, martialArt, martialArtShortName, rank) {
        let result = {};
        try {
            const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .doc */ .JU)(_modules_firestore__WEBPACK_IMPORTED_MODULE_0__/* .database */ .F, "users", address);
            const data = {
                address,
                martialArts: [
                    {
                        martialArt,
                        rank,
                        martialArtShortName,
                        certified: false
                    }
                ]
            };
            const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .getDoc */ .QT)(docRef);
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .setDoc */ .pl)(docRef, data);
            console.log("first add");
            result.success = true;
            result.message = "Martial Art ".concat(martialArt, " and rank ").concat(rank, " added.");
        } catch (error) {
            result.success = false;
            result.message = error.message;
        }
        return result;
    }
    ;
    async function addIfNotThere(user, address, martialArt, martialArtShortName, rank, allowUpdate) {
        let result = {};
        try {
            var _user_martialArts;
            var found = false;
            var foundMaIndex = -1;
            console.log("adding if not there");
            if (!user.martialArts) {
                user.martialArts = [];
            }
            for(var i = 0; i < ((_user_martialArts = user.martialArts) === null || _user_martialArts === void 0 ? void 0 : _user_martialArts.length); i++){
                if (user.martialArts[i].martialArt == martialArt) {
                    found = true;
                    foundMaIndex = i;
                }
            }
            if (!found) {
                user.martialArts.push({
                    martialArt,
                    rank,
                    martialArtShortName,
                    certified: false
                });
            } else if (found && allowUpdate) {
                user.martialArts[foundMaIndex] = {
                    martialArt,
                    rank,
                    martialArtShortName,
                    certified: false
                };
            } else {
                result.success = false;
                result.message = "Martial Art ".concat(martialArt, " already added, you can only get promoted by a qualifed instructor.");
            }
            const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .doc */ .JU)(_modules_firestore__WEBPACK_IMPORTED_MODULE_0__/* .database */ .F, "users", address);
            const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .getDoc */ .QT)(docRef);
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .setDoc */ .pl)(docRef, user);
            result.success = true;
            result.message = allowUpdate ? result.message = "Student ".concat(address, " promoted to ").concat(rank, " in Martial Art ").concat(martialArt, ".") : result.message;
        } catch (error) {
            result.success = false;
            result.message = error.message;
        }
        return result;
        await axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"].put */ .Z.put("api/user/".concat(address), user).then((response)=>{
            if (response.status == 200) {
                result.success = true;
                result.message = "Martial Art ".concat(martialArt, " and rank ").concat(rank, " added.");
            } else {
                result.success = false;
                result.message = response.statusText;
            }
        }).catch((error)=>{
            result.success = false;
            result.message = error.message;
        });
        return result;
    }
    ;
};
/* harmony default export */ __webpack_exports__["Z"] = (UserApiClient);


/***/ }),

/***/ 6525:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": function() { return /* binding */ database; }
/* harmony export */ });
/* unused harmony export app */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3977);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9828);
// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtuS9orJ_XKD8Z0OM0kqTwlITVkm3ct_4",
    authDomain: "keito-7e506.firebaseapp.com",
    projectId: "keito-7e506",
    storageBucket: "keito-7e506.appspot.com",
    messagingSenderId: "632520103184",
    appId: "1:632520103184:web:3b67a3ca5c5ba30b0d4195"
};
// Initialize Firebase
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__/* .initializeApp */ .ZF)(firebaseConfig);
const database = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .getFirestore */ .ad)(app);


/***/ }),

/***/ 7379:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ db; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _modules_UserApiClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4953);
/* harmony import */ var _reactCOIServiceWorker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8285);
/* harmony import */ var _reactCOIServiceWorker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reactCOIServiceWorker__WEBPACK_IMPORTED_MODULE_3__);




function db() {
    let [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        input: ""
    });
    const handleJsonChange = function(e) {
        setState({
            ...state,
            input: e.target.value
        });
    };
    const checkDB = async ()=>{
        console.log("checking DB...");
        var input = JSON.parse(state.input);
        let address = "qxxsw11";
        let martialArt = "BJJ";
        let martialArtShortName = "bjj";
        let rank = "Blue";
        (0,_modules_UserApiClient__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)().addMartialArt(address, martialArt, martialArtShortName, rank);
        console.log("added");
    };
    let mainContent;
    if (true) {
        mainContent = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea", {
                    id: "json",
                    onChange: handleJsonChange
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                    onClick: checkDB,
                    children: " Connect SB "
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        children: mainContent
    });
}


/***/ }),

/***/ 8285:
/***/ (function() {

function loadCOIServiceWorker() {
    if ( true && window.location.hostname != "localhost") {
        const coi = window.document.createElement("script");
        coi.setAttribute("src", "/testing-ranked-cross/coi-serviceworker.min.js");
        window.document.head.appendChild(coi);
    }
}
loadCOIServiceWorker();


/***/ }),

/***/ 7663:
/***/ (function(module) {

var __dirname = "/";
(function(){var e={229:function(e){var t=e.exports={};var r;var n;function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}(function(){try{if(typeof setTimeout==="function"){r=setTimeout}else{r=defaultSetTimout}}catch(e){r=defaultSetTimout}try{if(typeof clearTimeout==="function"){n=clearTimeout}else{n=defaultClearTimeout}}catch(e){n=defaultClearTimeout}})();function runTimeout(e){if(r===setTimeout){return setTimeout(e,0)}if((r===defaultSetTimout||!r)&&setTimeout){r=setTimeout;return setTimeout(e,0)}try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}function runClearTimeout(e){if(n===clearTimeout){return clearTimeout(e)}if((n===defaultClearTimeout||!n)&&clearTimeout){n=clearTimeout;return clearTimeout(e)}try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}var i=[];var o=false;var u;var a=-1;function cleanUpNextTick(){if(!o||!u){return}o=false;if(u.length){i=u.concat(i)}else{a=-1}if(i.length){drainQueue()}}function drainQueue(){if(o){return}var e=runTimeout(cleanUpNextTick);o=true;var t=i.length;while(t){u=i;i=[];while(++a<t){if(u){u[a].run()}}a=-1;t=i.length}u=null;o=false;runClearTimeout(e)}t.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1){for(var r=1;r<arguments.length;r++){t[r-1]=arguments[r]}}i.push(new Item(e,t));if(i.length===1&&!o){runTimeout(drainQueue)}};function Item(e,t){this.fun=e;this.array=t}Item.prototype.run=function(){this.fun.apply(null,this.array)};t.title="browser";t.browser=true;t.env={};t.argv=[];t.version="";t.versions={};function noop(){}t.on=noop;t.addListener=noop;t.once=noop;t.off=noop;t.removeListener=noop;t.removeAllListeners=noop;t.emit=noop;t.prependListener=noop;t.prependOnceListener=noop;t.listeners=function(e){return[]};t.binding=function(e){throw new Error("process.binding is not supported")};t.cwd=function(){return"/"};t.chdir=function(e){throw new Error("process.chdir is not supported")};t.umask=function(){return 0}}};var t={};function __nccwpck_require__(r){var n=t[r];if(n!==undefined){return n.exports}var i=t[r]={exports:{}};var o=true;try{e[r](i,i.exports,__nccwpck_require__);o=false}finally{if(o)delete t[r]}return i.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var r=__nccwpck_require__(229);module.exports=r})();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [16,312,774,888,179], function() { return __webpack_exec__(5252); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);