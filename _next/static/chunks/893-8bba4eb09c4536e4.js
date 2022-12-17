"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[893],{

/***/ 5439:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ layout_Footer; }
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
// EXTERNAL MODULE: ./components/layout/partials/Logo.js
var Logo = __webpack_require__(2393);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(1163);
;// CONCATENATED MODULE: ./components/layout/partials/FooterNav.js





const FooterNav = (param)=>{
    let { className , ...props } = param;
    const classes = classnames_default()("footer-nav", className);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("nav", {
        ...props,
        className: classes,
        children: (0,router.useRouter)().pathname != "/welcome" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
            className: "list-reset",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                        href: "rank",
                        children: "Rank"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                        href: "lineage",
                        children: "Lineage"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                        href: "students",
                        children: "Students"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ var partials_FooterNav = (FooterNav);

;// CONCATENATED MODULE: ./components/layout/partials/FooterSocial.js



const FooterSocial = (param)=>{
    let { className , ...props } = param;
    const classes = classnames_default()("footer-social", className);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ...props,
        className: classes,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
            className: "list-reset",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                    href: "https://twitter.com/anandcsingh",
                    target: "_blank",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("title", {
                                children: "Twitter"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ var partials_FooterSocial = (FooterSocial);

;// CONCATENATED MODULE: ./components/layout/Footer.js








const propTypes = {
    topOuterDivider: (prop_types_default()).bool,
    topDivider: (prop_types_default()).bool
};
const defaultProps = {
    topOuterDivider: false,
    topDivider: false
};
const Footer = (param)=>{
    let { className , topOuterDivider , topDivider , ...props } = param;
    const classes = classnames_default()("site-footer center-content-mobile", topOuterDivider && "has-top-divider", className);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("footer", {
        ...props,
        className: classes,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classnames_default()("site-footer-inner", topDivider && "has-top-divider"),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "footer-top space-between text-xxs",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Logo/* default */.Z, {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(partials_FooterSocial, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "footer-bottom space-between text-xxs invert-order-desktop",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(partials_FooterNav, {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "footer-copyright",
                                children: "smood.."
                            })
                        ]
                    })
                ]
            })
        })
    });
};
Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
/* harmony default export */ var layout_Footer = (Footer);


/***/ }),

/***/ 9329:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


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

/***/ 3051:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


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

/***/ 5542:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

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


/***/ })

}]);