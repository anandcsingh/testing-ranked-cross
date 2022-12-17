(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[810],{

/***/ 7350:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/lineage",
      function () {
        return __webpack_require__(7402);
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

/***/ 7402:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Lineage; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_auth_AuthPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4377);
/* harmony import */ var _reactCOIServiceWorker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8285);
/* harmony import */ var _reactCOIServiceWorker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reactCOIServiceWorker__WEBPACK_IMPORTED_MODULE_2__);



function Lineage() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_auth_AuthPage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
            className: "section",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "section-inner",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "container-xs",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                            className: "mt-0 mb-16",
                            children: "Martial Arts Lineage"
                        })
                    })
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
/******/ __webpack_require__.O(0, [829,863,675,893,774,888,179], function() { return __webpack_exec__(7350); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);