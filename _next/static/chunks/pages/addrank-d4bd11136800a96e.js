(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[87],{

/***/ 3972:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/addrank",
      function () {
        return __webpack_require__(6470);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 4377:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9008);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layout_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9329);
/* harmony import */ var _layout_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5439);
/* harmony import */ var _modules_Authentication__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3051);
/* harmony import */ var _pages_rankedWorkerClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8240);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1163);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7294);
/* harmony import */ var _modules_Snackbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5542);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var snarkyjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6400);













const AuthPage = (param)=>{
    let { children  } = param;
    // load from Authentication values
    //Authentication.getNum();
    let [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)({
        authentication: null,
        hasWallet: _modules_Authentication__WEBPACK_IMPORTED_MODULE_6__/* ["default"].hasWallet */ .Z.hasWallet,
        hasBeenSetup: _modules_Authentication__WEBPACK_IMPORTED_MODULE_6__/* ["default"].hasBeenSetup */ .Z.hasBeenSetup,
        accountExists: _modules_Authentication__WEBPACK_IMPORTED_MODULE_6__/* ["default"].accountExists */ .Z.accountExists,
        currentNum: null,
        publicKey: null,
        zkappPublicKey: null,
        creatingTransaction: false,
        snarkyLoaded: _modules_Authentication__WEBPACK_IMPORTED_MODULE_6__/* ["default"].sn */ .Z.sn,
        showRequestingAccount: false,
        showCreateWallet: false,
        showFundAccount: false,
        showLoadingContracts: false
    });
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        (async ()=>{
            if (!_modules_Authentication__WEBPACK_IMPORTED_MODULE_6__/* ["default"].loggedIn */ .Z.loggedIn) {
                if (!state.hasBeenSetup) {
                    const zkappWorkerClient = new _pages_rankedWorkerClient__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z();
                    _modules_Authentication__WEBPACK_IMPORTED_MODULE_6__/* ["default"].setZkClient */ .Z.setZkClient(zkappWorkerClient);
                    const loadedSnarky = await _modules_Authentication__WEBPACK_IMPORTED_MODULE_6__/* ["default"].loadSnarky */ .Z.loadSnarky();
                    setState({
                        ...state,
                        snarkyLoaded: true
                    });
                    const hasWallet = await _modules_Authentication__WEBPACK_IMPORTED_MODULE_6__/* ["default"].checkForWallet */ .Z.checkForWallet();
                    if (!hasWallet) {
                        setState({
                            ...state,
                            hasWallet: false,
                            snarkyLoaded: true
                        });
                        return;
                    } else {
                        setState({
                            ...state,
                            hasWallet: true,
                            snarkyLoaded: true,
                            showRequestingAccount: true
                        });
                    }
                    const loginResult = await _modules_Authentication__WEBPACK_IMPORTED_MODULE_6__/* ["default"].login */ .Z.login();
                    if (loginResult.error == "user reject") {
                        (0,_modules_Snackbar__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)("You cancelled connection with Mina wallet!", 1500);
                    } else if (loginResult.error == "please create or restore wallet first") {
                        setState({
                            ...state,
                            showCreateWallet: true,
                            hasWallet: true,
                            snarkyLoaded: true,
                            showRequestingAccount: false
                        });
                    }
                    const accountExists = await _modules_Authentication__WEBPACK_IMPORTED_MODULE_6__/* ["default"].doesAccountExist */ .Z.doesAccountExist();
                    if (!accountExists) {
                        setState({
                            ...state,
                            showFundAccount: true,
                            showCreateWallet: false,
                            hasWallet: true,
                            snarkyLoaded: true,
                            showRequestingAccount: false
                        });
                    } else {
                        setState({
                            ...state,
                            showLoadingContracts: true,
                            showFundAccount: false,
                            showCreateWallet: false,
                            hasWallet: true,
                            snarkyLoaded: true,
                            showRequestingAccount: false
                        });
                        const hasBeenSetup = await _modules_Authentication__WEBPACK_IMPORTED_MODULE_6__/* ["default"].setupContracts */ .Z.setupContracts();
                        setState({
                            ...state,
                            hasBeenSetup: hasBeenSetup,
                            showLoadingContracts: false,
                            showFundAccount: false,
                            showCreateWallet: false,
                            hasWallet: true,
                            snarkyLoaded: true,
                            showRequestingAccount: false
                        });
                    }
                }
            }
        })();
    }, []);
    const loginClicked = async ()=>{
        try {
            const loggedIn = await _modules_Authentication__WEBPACK_IMPORTED_MODULE_6__/* ["default"].login */ .Z.login();
            if (loggedIn) {
                next_router__WEBPACK_IMPORTED_MODULE_8___default().push("/dashboard");
            }
        } catch (e) {
            console.log("Login Failed", e.message);
            if (e.message == "user reject") {
                (0,_modules_Snackbar__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)("You cancelled connection with Mina wallet!", 1500);
            }
        }
    // const loggedIn = Authentication.login();
    // if (Authentication.loggedIn) {
    //   Router.push('/dashboard')
    // }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "keito-page",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "keito-content-wrap",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_layout_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        hideExtraNav: false,
                        navPosition: "right",
                        className: "reveal-from-bottom",
                        hideNav: false,
                        hideSignin: false,
                        bottomOuterDivider: false,
                        bottomDivider: false
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("main", {
                        className: "site-content",
                        children: !state.hasBeenSetup ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
                            className: "hero section center-content has-top-divider",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "container-sm",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "hero-inner section-inner",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "hero-content",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                                                className: "mt-0 mb-16 reveal-from-bottom",
                                                "data-reveal-delay": "200",
                                                children: "Getting things ready..."
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "container-xs",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "".concat(!state.snarkyLoaded || state.showRequestingAccount || state.showLoadingContracts ? "loading-snarky" : "", " m-0 mb-32 reveal-from-bottom login-subtext p-16"),
                                                        "data-reveal-delay": "400",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    display: state.snarkyLoaded ? "none" : "block"
                                                                },
                                                                children: [
                                                                    "Loading ",
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                        className: "text-color-primary",
                                                                        children: "SnarkyJS"
                                                                    }),
                                                                    "..."
                                                                ]
                                                            }),
                                                            state.hasWallet != null && !state.hasWallet && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "text-color-warning",
                                                                children: [
                                                                    "Could not find a wallet. Install Auro wallet here ",
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                                                                        href: "https://www.aurowallet.com/",
                                                                        target: "_blank",
                                                                        rel: "noreferrer",
                                                                        children: "Auro wallet"
                                                                    })
                                                                ]
                                                            }),
                                                            state.showRequestingAccount && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                children: "Requesting account"
                                                            }),
                                                            state.showCreateWallet && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "text-color-warning",
                                                                children: "Please create or restore a wallet first!"
                                                            }),
                                                            state.showFundAccount && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "text-color-warning",
                                                                children: [
                                                                    "Your account does not exist, visit the ",
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                                                                        href: "https://faucet.minaprotocol.com/",
                                                                        target: "_blank",
                                                                        rel: "noreferrer",
                                                                        children: "faucet"
                                                                    }),
                                                                    " to fund it"
                                                                ]
                                                            }),
                                                            state.showLoadingContracts && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                children: "Loading contracts..."
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "reveal-from-bottom login-btn-container",
                                                        "data-reveal-delay": "600"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            children: children
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_layout_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                className: "footer-container",
                topOuterDivider: false,
                topDivider: false
            })
        ]
    });
};
/* harmony default export */ __webpack_exports__["Z"] = (AuthPage);


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

/***/ 6470:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AddRank; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_auth_AuthPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4377);
/* harmony import */ var _modules_Authentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3051);
/* harmony import */ var _modules_UserApiClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4953);
/* harmony import */ var _reactCOIServiceWorker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8285);
/* harmony import */ var _reactCOIServiceWorker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_reactCOIServiceWorker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7294);







function AddRank() {
    let [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({
        addSuccess: false,
        addAttempt: false,
        addMessage: null
    });
    const addClicked = async (event)=>{
        var address = _modules_Authentication__WEBPACK_IMPORTED_MODULE_3__/* ["default"].address */ .Z.address != "" ? _modules_Authentication__WEBPACK_IMPORTED_MODULE_3__/* ["default"].address */ .Z.address : "B62qpzAWcbZSjzQH9hiTKvHbDx1eCsmRR7dDzK2DuYjRT2sTyW9vSpR";
        setState({
            ...state,
            addMessage: null
        });
        event.preventDefault();
        const { martialArt , rank  } = event.target.elements;
        console.log("ma more times" + martialArt);
        const result = await (0,_modules_UserApiClient__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)().addMartialArt(address, martialArt.options[martialArt.selectedIndex].text, martialArt.value, rank.value);
        console.log("rank result", result);
        setState({
            ...state,
            addAttempt: true,
            addSuccess: result.success,
            addMessage: result.message
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_auth_AuthPage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
            className: "section",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "section-inner",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "section-header",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "container-xs",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                    className: "mt-0 mb-16",
                                    children: "Add Martial Art and Rank"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            children:  true ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("form", {
                                onSubmit: addClicked,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mb-16",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                                    className: "form-label",
                                                    htmlFor: "martialArt",
                                                    children: "Martial Art"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                    id: "martialArt",
                                                    name: "martialArt",
                                                    className: "form-select",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                            hidden: true,
                                                            children: "Choose your Martial Art"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                            value: "ibjjf",
                                                            children: "Brazilian Jiu Jitsu"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                            value: "itf",
                                                            children: "Taekwon-Do"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                            value: "wkf",
                                                            children: "Karate"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mb-16",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                                    className: "form-label",
                                                    htmlFor: "rank",
                                                    children: "Rank"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                    id: "rank",
                                                    name: "rank",
                                                    className: "form-select",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                            hidden: true,
                                                            children: "Choose your Rank"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                            children: "White Belt"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                            children: "Yellow Belt"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                            children: "Green Belt"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                            children: "Blue Belt"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                            children: "Purple Belt"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                            children: "Brown Belt"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                            children: "Black Belt"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                            children: "Coral Belt"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mt-24",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "button-group",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                                            type: "submit",
                                                            className: "button button-primary button-wide-mobile",
                                                            children: "Submit"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "rank",
                                                            className: "button-link text-xs",
                                                            children: "Cancel"
                                                        })
                                                    ]
                                                }),
                                                state.addAttempt && state.addMessage != null && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                    className: "form-hint",
                                                    children: state.addMessage
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }) : /*#__PURE__*/ 0
                        })
                    ]
                })
            })
        })
    });
}


/***/ }),

/***/ 8240:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ RankedWorkerClient; }
/* harmony export */ });
/* harmony import */ var snarkyjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6400);

class RankedWorkerClient {
    // ---------------------------------------------------------------------------------------
    loadSnarkyJS() {
        return this._call("loadSnarkyJS", {});
    }
    setActiveInstanceToBerkeley() {
        return this._call("setActiveInstanceToBerkeley", {});
    }
    loadContract() {
        return this._call("loadContract", {});
    }
    compileContract() {
        return this._call("compileContract", {});
    }
    fetchAccount(param) {
        let { publicKey  } = param;
        const result = this._call("fetchAccount", {
            publicKey58: publicKey.toBase58()
        });
        return result;
    }
    initZkappInstance(publicKey) {
        return this._call("initZkappInstance", {
            publicKey58: publicKey.toBase58()
        });
    }
    async getInstructor() {
        const result = await this._call("getInstructor", {});
        return snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .PublicKey.fromJSON */ .nh.fromJSON(JSON.parse(result));
    }
    async getIbjjf() {
        const result = await this._call("getIbjjf", {});
        return snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field.fromJSON */ .gN.fromJSON(JSON.parse(result));
    }
    async getItf() {
        const result = await this._call("getIbjjf", {});
        return snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field.fromJSON */ .gN.fromJSON(JSON.parse(result));
    }
    async getWkf() {
        const result = await this._call("getIbjjf", {});
        return snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field.fromJSON */ .gN.fromJSON(JSON.parse(result));
    }
    async getRank(martialArt) {
        const result = await this._call("getRank", {
            martialArt
        });
        return snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field.fromJSON */ .gN.fromJSON(JSON.parse(result));
    }
    createUpdateBlackBeltTransaction(newBlackBelt) {
        return this._call("createUpdateBlackBeltTransaction", {
            newBlackBelt
        });
    }
    createCertifyTransaction(martialArt, certifier, userOldData, userNewData) {
        return this._call("createCertifyTransaction", {
            martialArt,
            certifier,
            userOldData,
            userNewData
        });
    }
    proveUpdateTransaction() {
        return this._call("proveUpdateTransaction", {});
    }
    async getTransactionJSON() {
        const result = await this._call("getTransactionJSON", {});
        return result;
    }
    _call(fn, args) {
        return new Promise((resolve, reject)=>{
            this.promises[this.nextId] = {
                resolve,
                reject
            };
            const message = {
                id: this.nextId,
                fn,
                args
            };
            this.worker.postMessage(message);
            this.nextId++;
        });
    }
    constructor(){
        this.worker = new Worker(__webpack_require__.tu(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(372), __webpack_require__.b)));
        this.promises = {};
        this.nextId = 0;
        this.worker.onmessage = (event)=>{
            this.promises[event.data.id].resolve(event.data.data);
            delete this.promises[event.data.id];
        };
    }
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

/***/ 9008:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* unused reexport */ __webpack_require__(3121)


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [829,16,863,675,312,893,774,888,179], function() { return __webpack_exec__(3972); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);