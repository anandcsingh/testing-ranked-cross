(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[26],{

/***/ 9637:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/dashboard",
      function () {
        return __webpack_require__(1343);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 9329:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ layout_Header; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/layout/partials/Logo.js
var Logo = __webpack_require__(2393);
;// CONCATENATED MODULE: ./modules/profile.js
const Profile = {
    address: "B62qpzAWcbZSjzQH9hiTKvHbDx1eCsmRR7dDzK2DuYjRT2sTyW9vSpR",
    getShortAddress: function() {
        return this.address.substring(0, 5) + "..." + this.address.substring(this.address.length - 5, this.address.length);
    },
    loggedIn: false
};
/* harmony default export */ var profile = ((/* unused pure expression or super */ null && (Profile)));

// EXTERNAL MODULE: ./modules/Authentication.js + 1 modules
var Authentication = __webpack_require__(3051);
// EXTERNAL MODULE: ./modules/Snackbar.js
var Snackbar = __webpack_require__(5542);
// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(1163);
;// CONCATENATED MODULE: ./components/layout/Header.js










const propTypes = {
    navPosition: (prop_types_default()).string,
    hideNav: (prop_types_default()).bool,
    hideExtraNav: (prop_types_default()).bool,
    hideSignin: (prop_types_default()).bool,
    bottomOuterDivider: (prop_types_default()).bool,
    bottomDivider: (prop_types_default()).bool
};
const defaultProps = {
    navPosition: "",
    hideNav: false,
    hideExtraNav: false,
    hideSignin: false,
    bottomOuterDivider: false,
    bottomDivider: false
};
const Header = (param)=>{
    let { className , navPosition , hideNav , hideExtraNav , hideSignin , bottomOuterDivider , bottomDivider , ...props } = param;
    console.log(Authentication/* default.loggedIn */.Z.loggedIn);
    const [isActive, setIsactive] = (0,react.useState)(false);
    const nav = (0,react.useRef)(null);
    const hamburger = (0,react.useRef)(null);
    (0,react.useEffect)(()=>{
        isActive && openMenu();
        document.addEventListener("keydown", keyPress);
        document.addEventListener("click", clickOutside);
        return ()=>{
            document.removeEventListener("keydown", keyPress);
            document.removeEventListener("click", clickOutside);
            closeMenu();
        };
    });
    const openMenu = ()=>{
        document.body.classList.add("off-nav-is-active");
        nav.current.style.maxHeight = nav.current.scrollHeight + "px";
        setIsactive(true);
    };
    const copyAndClose = (e)=>{
        navigator.clipboard.writeText(e.currentTarget.title);
        (0,Snackbar/* default */.Z)("Copied wallet address", 1500);
        closeMenu();
    };
    const closeMenu = ()=>{
        document.body.classList.remove("off-nav-is-active");
        nav.current && (nav.current.style.maxHeight = null);
        setIsactive(false);
    };
    const keyPress = (e)=>{
        isActive && e.keyCode === 27 && closeMenu();
    };
    const clickOutside = (e)=>{
        if (!nav.current) return;
        if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
        closeMenu();
    };
    const classes = classnames_default()("site-header", bottomOuterDivider && "has-bottom-divider", className);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("header", {
        ...props,
        className: classes,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classnames_default()("site-header-inner", bottomDivider && "has-bottom-divider"),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Logo/* default */.Z, {}),
                    !hideNav && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                ref: hamburger,
                                className: "header-nav-toggle",
                                onClick: isActive ? closeMenu : openMenu,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "screen-reader",
                                        children: "Menu"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "hamburger",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "hamburger-inner"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("nav", {
                                ref: nav,
                                className: classnames_default()("header-nav", isActive && "is-active"),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "header-nav-inner",
                                    children: [
                                        !hideExtraNav && /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                            className: classnames_default()("list-reset text-xs", navPosition && "header-nav-center"),
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                        className: "button button-dark button-wide-mobile button-sm",
                                                        href: "rank",
                                                        onClick: closeMenu,
                                                        children: "Rank"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                        className: "button button-dark button-wide-mobile button-sm",
                                                        href: "lineage",
                                                        onClick: closeMenu,
                                                        children: "Lineage"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                        className: "button button-dark button-wide-mobile button-sm",
                                                        href: "students",
                                                        onClick: closeMenu,
                                                        children: "Students"
                                                    })
                                                })
                                            ]
                                        }),
                                        !hideSignin && /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                                            className: "list-reset header-nav-right",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                children: !Authentication/* default.loggedIn */.Z.loggedIn || (0,router.useRouter)().pathname == "/welcome" ? /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                    href: "rank",
                                                    className: "button button-primary button-wide-mobile button-sm",
                                                    onClick: closeMenu,
                                                    children: "Launch App"
                                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                        className: "button button-dark rounded auth-address",
                                                        title: Authentication/* default.address */.Z.address,
                                                        onClick: copyAndClose,
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            children: Authentication/* default.getShortAddress */.Z.getShortAddress()
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
/* harmony default export */ var layout_Header = (Header);


/***/ }),

/***/ 2393:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);




const Logo = (param)=>{
    let { className , ...props } = param;
    const classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()("brand", className);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ...props,
        className: classes,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
            className: "m-0",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: "/welcome",
                children: "Ranked"
            })
        })
    });
};
/* harmony default export */ __webpack_exports__["Z"] = (Logo);


/***/ }),

/***/ 9685:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ sections_RankTiles; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./modules/Authentication.js + 1 modules
var Authentication = __webpack_require__(3051);
// EXTERNAL MODULE: ./modules/Rank.ts
var Rank = __webpack_require__(2581);
// EXTERNAL MODULE: ./modules/RankedV1ContractVerifier.ts
var RankedV1ContractVerifier = __webpack_require__(4910);
// EXTERNAL MODULE: ./node_modules/snarkyjs/dist/web/index.js
var web = __webpack_require__(6400);
;// CONCATENATED MODULE: ./components/sections/partials/RankItem.js








const propTypes = {
    martialArtShortName: (prop_types_default()).string,
    rank: (prop_types_default()).string,
    martialArt: (prop_types_default()).string,
    certified: (prop_types_default()).bool,
    verifiedCallback: (prop_types_default()).func,
    verifyingCallback: (prop_types_default()).func
};
const defaultProps = {
    martialArtShortName: "",
    rank: "",
    martialArt: "",
    certified: false,
    verifiedCallback: null,
    verifyingCallback: null
};
const RankItem = (param)=>{
    let { martialArtShortName , rank , martialArt , certified , verifiedCallback , verifyingCallback , ...props } = param;
    let [veri, setVerfied] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        (async ()=>{
            const rankVerifier = new RankedV1ContractVerifier/* RankedV1ContractVerifier */.K(Authentication/* default.zkClient */.Z.zkClient);
            const ma = new Rank/* Rank */.y();
            ma.address = Authentication/* default.address */.Z.address;
            ma.martialArt = martialArtShortName;
            ma.rank = rank;
            verifyingCallback(ma);
            const verified = await rankVerifier.verify(ma);
            verifiedCallback(ma, verified);
            console.log(ma.martialArt, ":", verified);
            setVerfied(verified);
            const verifiedClasses = verified ? "verified-ma" : "unverified-ma";
            const verifiedCheckClasses = verified ? "check" : "uncheck";
        })();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "tiles-item",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: veri ? "verified-ma" : "unverified-ma",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: martialArtShortName,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "pl-8 pt-8  ".concat(veri ? "check" : "uncheck"),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "mt-auto mb-8",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "mt-24 fw-500 tt-u",
                                children: rank
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-xs",
                                children: martialArt
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ var partials_RankItem = (RankItem);

// EXTERNAL MODULE: ./modules/firestore.js
var firestore = __webpack_require__(6525);
// EXTERNAL MODULE: ./node_modules/firebase/firestore/dist/esm/index.esm.js
var index_esm = __webpack_require__(9828);
;// CONCATENATED MODULE: ./components/sections/RankTiles.js









const RankTiles = ()=>{
    const [error, setError] = (0,react.useState)(null);
    const [isLoaded, setIsLoaded] = (0,react.useState)(false);
    const [items, setItems] = (0,react.useState)([]);
    const [maCount, setMaCount] = (0,react.useState)(0);
    const [verifying, setVerifying] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        (async ()=>{
            var address = Authentication/* default.address */.Z.address != "" ? Authentication/* default.address */.Z.address : "B62qpzAWcbZSjzQH9hiTKvHbDx1eCsmRR7dDzK2DuYjRT2sTyW9vSpR";
            const docRef = (0,index_esm/* doc */.JU)(firestore/* database */.F, "users", address);
            const docSnap = await (0,index_esm/* getDoc */.QT)(docRef);
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                const ma = docSnap.data().martialArts;
                setIsLoaded(true);
                setItems(ma);
                setMaCount(ma.length);
                setError(ma.length > 0 ? null : "Could not find any Martial Arts. Click the plus button to add one.");
            } else {
                setIsLoaded(true);
                setError("Could not find any Martial Arts. Click the plus button to add one.");
            }
        })();
    }, []);
    const checkedVerification = function(rank, verfied) {
        console.log("verified ", rank.martialArt, verfied);
        setVerifying(false);
    };
    const verifyingCallback = function(rank) {
        console.log("verifying ", rank.martialArt);
        setVerifying(true);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: "section",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "section-inner",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "rank-messages",
                        children: [
                            !isLoaded && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "loading-snarky m-0 mb-32 reveal-from-bottom login-subtext p-16",
                                "data-reveal-delay": "400",
                                children: "Loading Martial Arts..."
                            }),
                            isLoaded && (maCount == 0 || error != null) && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "m-0 mb-32 reveal-from-bottom login-subtext p-16",
                                "data-reveal-delay": "400",
                                children: error
                            }),
                            verifying && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "loading-snarky m-0 mb-32 reveal-from-bottom login-subtext p-16",
                                "data-reveal-delay": "400",
                                children: "Verifying Martial Arts on Mina..."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "tiles-wrap",
                        children: [
                            items.map((i, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(partials_RankItem, {
                                    verifyingCallback: verifyingCallback,
                                    verifiedCallback: checkedVerification,
                                    martialArtShortName: i.martialArtShortName,
                                    rank: i.rank,
                                    martialArt: i.martialArt,
                                    certified: i.certified
                                }, index)),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                href: "addrank",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "tiles-item",
                                    title: "Add new Martial Art",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "ma-add-btn",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "pl-8 pt-8 text-sm",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {})
                                        })
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ var sections_RankTiles = (RankTiles);


/***/ }),

/***/ 3051:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ modules_Authentication; }
});

// EXTERNAL MODULE: ./node_modules/snarkyjs/dist/web/index.js
var web = __webpack_require__(6400);
;// CONCATENATED MODULE: ./pages/zkappWorkerClient.ts

class ZkappWorkerClient {
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
    async getNum() {
        const result = await this._call("getNum", {});
        return Field.fromJSON(JSON.parse(result));
    }
    createUpdateTransaction() {
        return this._call("createUpdateTransaction", {});
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
        this.worker = new Worker(__webpack_require__.tu(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(812), __webpack_require__.b)));
        this.promises = {};
        this.nextId = 0;
        this.worker.onmessage = (event)=>{
            this.promises[event.data.id].resolve(event.data.data);
            delete this.promises[event.data.id];
        };
    }
}


;// CONCATENATED MODULE: ./modules/Authentication.js


const Authentication = {
    contractAddress: "B62qiijS17F93uaP4EGAXPgXKwm9B9YoqUuYRfuMrnoCSGnQ23Y4NBG",
    loggedIn: false,
    zkClient: null,
    authentication: null,
    hasWallet: null,
    hasBeenSetup: false,
    accountExists: false,
    currentNum: null,
    publicKey: null,
    zkappPublicKey: null,
    creatingTransaction: false,
    snarkyLoaded: false,
    showRequestingAccount: false,
    showCreateWallet: false,
    fundAccount: false,
    showLoadingContracts: false,
    setZkClient: function(client) {
        this.zkClient = client;
    },
    loadSnarky: async function() {
        await this.zkClient.loadSnarkyJS();
        await this.zkClient.setActiveInstanceToBerkeley();
        this.snarkyLoaded = true;
        return true;
    },
    checkForWallet: async function() {
        const mina = window.mina;
        this.hasWallet = mina != null;
        return this.hasWallet;
    },
    login: async function() {
        try {
            const mina = window.mina;
            this.address = (await mina.requestAccounts())[0];
            this.loggedIn = true;
            return {
                success: true
            };
        } catch (e) {
            this.loggedIn = false;
            var result = {
                success: false
            };
            if (e.message == "user reject") {
                result.error = e.message;
                result.message = "You cancelled connection with Mina wallet!";
            } else if (e.message == "please create or restore wallet first") {
                result.error = e.message;
                result.message = "Please create or restore a wallet first!";
            }
            return result;
        }
    },
    doesAccountExist: async function() {
        const publicKey = web/* PublicKey.fromBase58 */.nh.fromBase58(this.address);
        const res = await this.zkClient.fetchAccount({
            publicKey: publicKey
        });
        this.fundAccount = res.error != null;
        return !this.fundAccount;
    },
    setupContracts: async function() {
        await this.zkClient.loadContract();
        await this.zkClient.compileContract();
        //const contractAddress = 'B62qqEme9EYMj3KC4vSXij2vAwt8qxLiKLsrHPprQeYXXmjTFUH16wF';
        const zkappPublicKey = web/* PublicKey.fromBase58 */.nh.fromBase58(this.contractAddress);
        await this.zkClient.initZkappInstance(zkappPublicKey);
        this.hasBeenSetup = true;
        return true;
    },
    fetchZkappAccount: async function() {
        await this.zkClient.fetchAccount({
            publicKey: this.contractAddress
        });
    },
    getNum: async function() {
        if (this.hasBeenSetup) {
            //const zkappPublicKey = PublicKey.fromBase58('B62qqEme9EYMj3KC4vSXij2vAwt8qxLiKLsrHPprQeYXXmjTFUH16wF');
            await this.zkClient.fetchAccount({
                publicKey: this.contractAddress
            });
            const currentNum = await this.zkClient.getNum();
            console.log("current state:", currentNum.toString());
        } else {
            console.log("has not been setup");
        }
    },
    address: "",
    getShortAddress: function() {
        return this.address.substring(0, 5) + "..." + this.address.substring(this.address.length - 5, this.address.length);
    }
};
/* harmony default export */ var modules_Authentication = (Authentication);


/***/ }),

/***/ 2581:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": function() { return /* binding */ Rank; }
/* harmony export */ });
class Rank {
}


/***/ }),

/***/ 4910:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": function() { return /* binding */ RankedV1ContractVerifier; }
/* harmony export */ });
/* harmony import */ var _Rank__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2581);
/* harmony import */ var snarkyjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6400);
/* harmony import */ var _firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6525);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9828);
/* harmony import */ var _Authentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3051);
/* harmony import */ var _UserApiClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4953);






class RankedV1ContractVerifier {
    async promote(certifier, newRank) {
        let result = {
            successful: false,
            message: null
        };
        try {
            const currentField = await this.getCurrentRankHash(newRank);
            const newField = this.getHashFromRank(newRank);
            await this.zkClient.fetchAccount({
                publicKey: snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .PublicKey.fromBase58 */ .nh.fromBase58(_Authentication__WEBPACK_IMPORTED_MODULE_3__/* ["default"].contractAddress */ .Z.contractAddress)
            });
            await this.zkClient.createCertifyTransaction(newRank.martialArt, certifier, currentField, newField);
            console.log("current rank hash:", currentField.toString());
            console.log("new rank hash:", newField.toString());
            // proof etc
            console.log("creating proof...");
            await this.zkClient.proveUpdateTransaction();
            console.log("getting Transaction JSON...");
            const transactionJSON = await this.zkClient.getTransactionJSON();
            console.log("requesting send transaction...");
            let transactionFee = 0.1;
            const { hash  } = await window.mina.sendTransaction({
                transaction: transactionJSON,
                feePayer: {
                    fee: transactionFee,
                    memo: ""
                }
            });
            console.log("See transaction at https://berkeley.minaexplorer.com/transaction/" + hash);
            // update DB with Rank
            let martialArtsDictionary = {
                "ibjjf": "Brazilian Jiu Jitsu",
                "itf": "Taekwon-Do",
                "wkf": "Karate"
            };
            const maLongName = martialArtsDictionary[newRank.martialArt];
            console.log("on the way to firebase");
            return await (0,_UserApiClient__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)().promoteStudent(newRank.address.toBase58(), maLongName, newRank.martialArt, newRank.rank);
        } catch (e) {
            result.successful = false;
            result.message = e.message;
        }
    }
    async getCurrentRankHash(rank) {
        await this.zkClient.fetchAccount({
            publicKey: snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .PublicKey.fromBase58 */ .nh.fromBase58(_Authentication__WEBPACK_IMPORTED_MODULE_3__/* ["default"].contractAddress */ .Z.contractAddress)
        });
        let martialArtHash = (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(0);
        martialArtHash = await this.zkClient.getRank(rank.martialArt);
        console.log("from current hash:", martialArtHash.toString());
        return martialArtHash;
    }
    async getCurrentRank(address, martialArt) {
        const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__/* .doc */ .JU)(_firestore__WEBPACK_IMPORTED_MODULE_1__/* .database */ .F, "users", address.toBase58());
        const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__/* .getDoc */ .QT)(docRef);
        if (docSnap.exists()) {
            const ma = docSnap.data().martialArts;
            for(var i = 0; i < ma.length; i++){
                let one = ma[i];
                if (one.martialArtShortName == martialArt) {
                    let rank = new _Rank__WEBPACK_IMPORTED_MODULE_5__/* .Rank */ .y();
                    rank.address = address;
                    rank.martialArt = one.martialArtShortName;
                    rank.rank = one.martialArtShortName;
                    return rank;
                }
            }
        }
        return new _Rank__WEBPACK_IMPORTED_MODULE_5__/* .Rank */ .y();
    }
    getHashFromRank(rank) {
        console.log(JSON.stringify(rank));
        const stringData = snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .CircuitString.fromString */ ._G.fromString(JSON.stringify(rank));
        const fields = stringData.toFields();
        const data = snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Poseidon.hash */ .jm.hash(fields);
        return data;
    }
    constructor(zkClient){
        this.verify = async (rank)=>{
            const rankField = this.getHashFromRank(rank);
            console.log("rank from verify", rank.martialArt, rankField.toString());
            const verify = false;
            console.log("contract adddress: ", _Authentication__WEBPACK_IMPORTED_MODULE_3__/* ["default"].contractAddress */ .Z.contractAddress);
            let martialArtHash = await this.getCurrentRankHash(rank);
            return rankField.toString() == martialArtHash.toString();
        };
        this.zkClient = zkClient;
    }
}


/***/ }),

/***/ 5542:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
const Snackbar = (text, duration)=>{
    const div = document.createElement("div");
    div.setAttribute("style", "-webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;animation: fadein 0.5s, fadeout 0.5s 2.5s;;min-width: 250px;margin-left: -125px; background-color: rgba(0, 0, 0, 0.257); color: #fff; text-align: center; border-radius: 2px; padding: 16px; position: fixed; z-index: 1; left: 50%;top: 70px;");
    const node = document.createTextNode(text);
    div.appendChild(node);
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(div);
    setTimeout(function() {
        body.removeChild(div);
    }, duration);
};
/* harmony default export */ __webpack_exports__["Z"] = (Snackbar);


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

/***/ 1343:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./components/layout/Header.js + 1 modules
var Header = __webpack_require__(9329);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./modules/Authentication.js + 1 modules
var Authentication = __webpack_require__(3051);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(1163);
var router_default = /*#__PURE__*/__webpack_require__.n(router);
;// CONCATENATED MODULE: ./components/auth/AuthenticatedPage.js






const AuthenticatedPage = (param)=>{
    let { children  } = param;
    (0,react.useEffect)(()=>{
        if (!Authentication/* default.loggedIn */.Z.loggedIn) {
            router_default().push("/login");
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: children
    });
};
/* harmony default export */ var auth_AuthenticatedPage = (AuthenticatedPage);

// EXTERNAL MODULE: ./components/sections/RankTiles.js + 1 modules
var RankTiles = __webpack_require__(9685);
// EXTERNAL MODULE: ./pages/reactCOIServiceWorker.ts
var reactCOIServiceWorker = __webpack_require__(8285);
;// CONCATENATED MODULE: ./pages/dashboard.page.tsx





function Home() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(auth_AuthenticatedPage, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Header/* default */.Z, {
                    hideExtraNav: false,
                    navPosition: "right",
                    className: "reveal-from-bottom",
                    hideNav: false,
                    hideSignin: false,
                    bottomOuterDivider: false,
                    bottomDivider: false
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
                    className: "site-content",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RankTiles/* default */.Z, {})
                })
            ]
        })
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


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [829,16,863,312,774,888,179], function() { return __webpack_exec__(9637); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);