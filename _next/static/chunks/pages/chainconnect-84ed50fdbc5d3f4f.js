(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[898],{

/***/ 3454:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ref, ref1;
module.exports = ((ref = __webpack_require__.g.process) == null ? void 0 : ref.env) && typeof ((ref1 = __webpack_require__.g.process) == null ? void 0 : ref1.env) === "object" ? __webpack_require__.g.process : __webpack_require__(7663);

//# sourceMappingURL=process.js.map

/***/ }),

/***/ 6807:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/chainconnect",
      function () {
        return __webpack_require__(6621);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 6621:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _reactCOIServiceWorker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8285);
/* harmony import */ var _reactCOIServiceWorker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reactCOIServiceWorker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rankedWorkerClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8240);
/* harmony import */ var snarkyjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6400);





let transactionFee = 0.1;
function App() {
    let [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        zkappWorkerClient: null,
        hasWallet: null,
        hasBeenSetup: false,
        accountExists: false,
        currentNum: null,
        publicKey: null,
        zkappPublicKey: null,
        creatingTransaction: false,
        input: ""
    });
    // -------------------------------------------------------
    // Do Setup
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (async ()=>{
            if (!state.hasBeenSetup) {
                const zkappWorkerClient = new _rankedWorkerClient__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z();
                console.log("Loading SnarkyJS...");
                await zkappWorkerClient.loadSnarkyJS();
                console.log("done");
                await zkappWorkerClient.setActiveInstanceToBerkeley();
                const mina = window.mina;
                if (mina == null) {
                    setState({
                        ...state,
                        hasWallet: false
                    });
                    return;
                }
                const publicKeyBase58 = (await mina.requestAccounts())[0];
                const publicKey = snarkyjs__WEBPACK_IMPORTED_MODULE_4__/* .PublicKey.fromBase58 */ .nh.fromBase58(publicKeyBase58);
                console.log("using key", publicKey.toBase58());
                console.log("checking if account exists...");
                const res = await zkappWorkerClient.fetchAccount({
                    publicKey: publicKey
                });
                const accountExists = res.error == null;
                await zkappWorkerClient.loadContract();
                console.log("compiling zkApp");
                await zkappWorkerClient.compileContract();
                console.log("zkApp compiled");
                const zkappPublicKey = snarkyjs__WEBPACK_IMPORTED_MODULE_4__/* .PublicKey.fromBase58 */ .nh.fromBase58("B62qiijS17F93uaP4EGAXPgXKwm9B9YoqUuYRfuMrnoCSGnQ23Y4NBG");
                await zkappWorkerClient.initZkappInstance(zkappPublicKey);
                console.log("getting zkApp state...");
                await zkappWorkerClient.fetchAccount({
                    publicKey: zkappPublicKey
                });
                const currentNum = await zkappWorkerClient.getIbjjf();
                console.log("current ibjjf:", currentNum.toString());
                const currentInstructor = await zkappWorkerClient.getInstructor();
                console.log("current instructor: ", currentInstructor.toBase58());
                setState({
                    ...state,
                    zkappWorkerClient,
                    hasWallet: true,
                    hasBeenSetup: true,
                    publicKey,
                    zkappPublicKey,
                    accountExists,
                    currentNum
                });
            }
        })();
    }, []);
    // -------------------------------------------------------
    // Wait for account to exist, if it didn't
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (async ()=>{
            if (state.hasBeenSetup && !state.accountExists) {
                for(;;){
                    console.log("checking if account exists...");
                    const res = await state.zkappWorkerClient.fetchAccount({
                        publicKey: state.publicKey
                    });
                    const accountExists = res.error == null;
                    if (accountExists) {
                        break;
                    }
                    await new Promise((resolve)=>setTimeout(resolve, 5000));
                }
                setState({
                    ...state,
                    accountExists: true
                });
            }
        })();
    }, [
        state.hasBeenSetup
    ]);
    // -------------------------------------------------------
    // Send a transaction
    const onUpdateInstructor = async ()=>{
        //setState({ ...state, creatingTransaction: true });
        console.log("sending a transaction...");
        await state.zkappWorkerClient.fetchAccount({
            publicKey: state.publicKey
        });
        const blackbelt = snarkyjs__WEBPACK_IMPORTED_MODULE_4__/* .PublicKey.fromBase58 */ .nh.fromBase58("B62qpzAWcbZSjzQH9hiTKvHbDx1eCsmRR7dDzK2DuYjRT2sTyW9vSpR");
        console.log("sending blackbelt as: ", blackbelt.toBase58());
        await state.zkappWorkerClient.createUpdateBlackBeltTransaction(blackbelt);
        console.log("creating proof...");
        await state.zkappWorkerClient.proveUpdateTransaction();
        console.log("getting Transaction JSON...");
        const transactionJSON = await state.zkappWorkerClient.getTransactionJSON();
        console.log("requesting send transaction...");
        const { hash  } = await window.mina.sendTransaction({
            transaction: transactionJSON,
            feePayer: {
                fee: transactionFee,
                memo: ""
            }
        });
        console.log("See transaction at https://berkeley.minaexplorer.com/transaction/" + hash);
        setState({
            ...state,
            creatingTransaction: false
        });
    };
    const onSendTransaction = async ()=>{
        //setState({ ...state, creatingTransaction: true });
        console.log("sending a transaction...");
        await state.zkappWorkerClient.fetchAccount({
            publicKey: state.publicKey
        });
        //const certifier = PublicKey.fromBase58("B62qiijS17F93uaP4EGAXPgXKwm9B9YoqUuYRfuMrnoCSGnQ23Y4NBG");
        const blackbelt = snarkyjs__WEBPACK_IMPORTED_MODULE_4__/* .PublicKey.fromBase58 */ .nh.fromBase58("B62qpzAWcbZSjzQH9hiTKvHbDx1eCsmRR7dDzK2DuYjRT2sTyW9vSpR");
        const intialState = (0,snarkyjs__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .gN)(0); //await state.zkappWorkerClient!.getIbjjf();
        console.log("sending initial state as: ", intialState.toString());
        console.log("sending blackbelt state as: ", blackbelt.toBase58());
        const promotion1 = {
            address: "B62qpzAWcbZSjzQH9hiTKvHbDx1eCsmRR7dDzK2DuYjRT2sTyW9vSpR",
            rank: "blue belt"
        };
        console.log("sending rank state as: ", promotion1.rank);
        const promotion1stringData = snarkyjs__WEBPACK_IMPORTED_MODULE_4__/* .CircuitString.fromString */ ._G.fromString(JSON.stringify(promotion1));
        const promotion1fields = promotion1stringData.toFields();
        const promotion1Data = snarkyjs__WEBPACK_IMPORTED_MODULE_4__/* .Poseidon.hash */ .jm.hash(promotion1fields);
        console.log("sending promotion data as: ", promotion1Data.toString());
        await state.zkappWorkerClient.createCertifyTransaction("ibjjf", blackbelt, intialState, promotion1Data);
        console.log("creating proof...");
        await state.zkappWorkerClient.proveUpdateTransaction();
        console.log("getting Transaction JSON...");
        const transactionJSON = await state.zkappWorkerClient.getTransactionJSON();
        console.log("requesting send transaction...");
        const { hash  } = await window.mina.sendTransaction({
            transaction: transactionJSON,
            feePayer: {
                fee: transactionFee,
                memo: ""
            }
        });
        console.log("See transaction at https://berkeley.minaexplorer.com/transaction/" + hash);
        setState({
            ...state,
            creatingTransaction: false
        });
    };
    // -------------------------------------------------------
    // Refresh the current state
    const onRefreshCurrentNum = async ()=>{
        console.log("getting zkApp state...");
        await state.zkappWorkerClient.fetchAccount({
            publicKey: state.zkappPublicKey
        });
        const currentNum = await state.zkappWorkerClient.getIbjjf();
        console.log("current state:", currentNum.toString());
        const currentInstructor = await state.zkappWorkerClient.getInstructor();
        console.log("current instructor: ", currentInstructor.toBase58());
        setState({
            ...state,
            currentNum
        });
    };
    const handleJsonChange = function(e) {
        setState({
            ...state,
            input: e.target.value
        });
    };
    const verifyRank = async ()=>{
        console.log("verifying rank...");
        var input = JSON.parse(state.input);
        const promotion1stringData = snarkyjs__WEBPACK_IMPORTED_MODULE_4__/* .CircuitString.fromString */ ._G.fromString(JSON.stringify(input));
        const promotion1fields = promotion1stringData.toFields();
        const promotion1Data = snarkyjs__WEBPACK_IMPORTED_MODULE_4__/* .Poseidon.hash */ .jm.hash(promotion1fields);
        await state.zkappWorkerClient.fetchAccount({
            publicKey: state.zkappPublicKey
        });
        const currentNum = await state.zkappWorkerClient.getRank(input.martialArt);
        console.log("current state:", currentNum.toString());
        console.log("new state:", promotion1Data.toString());
        console.log("Valid?: ", promotion1Data.toString() == currentNum.toString());
    };
    const promotetoJson = async ()=>{
        console.log("promoting rank...");
        const blackbelt = snarkyjs__WEBPACK_IMPORTED_MODULE_4__/* .PublicKey.fromBase58 */ .nh.fromBase58("B62qpzAWcbZSjzQH9hiTKvHbDx1eCsmRR7dDzK2DuYjRT2sTyW9vSpR");
        let json = {
            "address": "B62qpzAWcbZSjzQH9hiTKvHbDx1eCsmRR7dDzK2DuYjRT2sTyW9vSpR",
            "rank": "blue belt"
        };
        const originalstringData = snarkyjs__WEBPACK_IMPORTED_MODULE_4__/* .CircuitString.fromString */ ._G.fromString(JSON.stringify(json));
        const originalfields = originalstringData.toFields();
        const originalData = snarkyjs__WEBPACK_IMPORTED_MODULE_4__/* .Poseidon.hash */ .jm.hash(originalfields);
        const promo = JSON.parse(state.input);
        const promotion1stringData = snarkyjs__WEBPACK_IMPORTED_MODULE_4__/* .CircuitString.fromString */ ._G.fromString(JSON.stringify(promo));
        const promotion1fields = promotion1stringData.toFields();
        const promotion1Data = snarkyjs__WEBPACK_IMPORTED_MODULE_4__/* .Poseidon.hash */ .jm.hash(promotion1fields);
        await state.zkappWorkerClient.fetchAccount({
            publicKey: state.zkappPublicKey
        });
        let intialState = await state.zkappWorkerClient.getRank(promo.martialArt);
        console.log("from contract: ", intialState.toString());
        intialState = originalData;
        console.log("from json: ", originalData.toString());
        console.log("from rank: ", promotion1Data.toString());
        console.log("state zkapp key: ", state.zkappPublicKey.toBase58());
        await state.zkappWorkerClient.fetchAccount({
            publicKey: state.zkappPublicKey
        });
        await state.zkappWorkerClient.createCertifyTransaction("ibjjf", blackbelt, intialState, promotion1Data);
        console.log("creating proof...");
        await state.zkappWorkerClient.proveUpdateTransaction();
        console.log("getting Transaction JSON...");
        const transactionJSON = await state.zkappWorkerClient.getTransactionJSON();
        console.log("requesting send transaction...");
        const { hash  } = await window.mina.sendTransaction({
            transaction: transactionJSON,
            feePayer: {
                fee: transactionFee,
                memo: ""
            }
        });
        console.log("See transaction at https://berkeley.minaexplorer.com/transaction/" + hash);
    };
    // -------------------------------------------------------
    // Create UI elements
    let hasWallet;
    if (state.hasWallet != null && !state.hasWallet) {
        const auroLink = "https://www.aurowallet.com/";
        const auroLinkElem = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
            href: auroLink,
            target: "_blank",
            rel: "noreferrer",
            children: " [Link] "
        });
        hasWallet = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                " Could not find a wallet. Install Auro wallet here: ",
                auroLinkElem
            ]
        });
    }
    let setupText = state.hasBeenSetup ? "SnarkyJS Ready" : "Setting up SnarkyJS...";
    let setup = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            " ",
            setupText,
            " ",
            hasWallet
        ]
    });
    let accountDoesNotExist;
    if (state.hasBeenSetup && !state.accountExists) {
        const faucetLink = "https://faucet.minaprotocol.com/?address=" + state.publicKey.toBase58();
        accountDoesNotExist = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                "Account does not exist. Please visit the faucet to fund this account",
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                    href: faucetLink,
                    target: "_blank",
                    rel: "noreferrer",
                    children: " [Link] "
                })
            ]
        });
    }
    let mainContent;
    if (state.hasBeenSetup && state.accountExists) {
        mainContent = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                    onClick: onSendTransaction,
                    disabled: state.creatingTransaction,
                    children: " Send Transaction "
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                        onClick: onUpdateInstructor,
                        children: " Update Black Belt "
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        " Current Number in zkApp: ",
                        state.currentNum.toString(),
                        " "
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                    onClick: onRefreshCurrentNum,
                    children: " Get Latest State "
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea", {
                    id: "json",
                    onChange: handleJsonChange
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                    onClick: verifyRank,
                    children: " Verify Rank "
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                    onClick: promotetoJson,
                    children: " Promote to Rank "
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            setup,
            accountDoesNotExist,
            mainContent
        ]
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

/***/ 7663:
/***/ (function(module) {

var __dirname = "/";
(function(){var e={229:function(e){var t=e.exports={};var r;var n;function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}(function(){try{if(typeof setTimeout==="function"){r=setTimeout}else{r=defaultSetTimout}}catch(e){r=defaultSetTimout}try{if(typeof clearTimeout==="function"){n=clearTimeout}else{n=defaultClearTimeout}}catch(e){n=defaultClearTimeout}})();function runTimeout(e){if(r===setTimeout){return setTimeout(e,0)}if((r===defaultSetTimout||!r)&&setTimeout){r=setTimeout;return setTimeout(e,0)}try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}function runClearTimeout(e){if(n===clearTimeout){return clearTimeout(e)}if((n===defaultClearTimeout||!n)&&clearTimeout){n=clearTimeout;return clearTimeout(e)}try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}var i=[];var o=false;var u;var a=-1;function cleanUpNextTick(){if(!o||!u){return}o=false;if(u.length){i=u.concat(i)}else{a=-1}if(i.length){drainQueue()}}function drainQueue(){if(o){return}var e=runTimeout(cleanUpNextTick);o=true;var t=i.length;while(t){u=i;i=[];while(++a<t){if(u){u[a].run()}}a=-1;t=i.length}u=null;o=false;runClearTimeout(e)}t.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1){for(var r=1;r<arguments.length;r++){t[r-1]=arguments[r]}}i.push(new Item(e,t));if(i.length===1&&!o){runTimeout(drainQueue)}};function Item(e,t){this.fun=e;this.array=t}Item.prototype.run=function(){this.fun.apply(null,this.array)};t.title="browser";t.browser=true;t.env={};t.argv=[];t.version="";t.versions={};function noop(){}t.on=noop;t.addListener=noop;t.once=noop;t.off=noop;t.removeListener=noop;t.removeAllListeners=noop;t.emit=noop;t.prependListener=noop;t.prependOnceListener=noop;t.listeners=function(e){return[]};t.binding=function(e){throw new Error("process.binding is not supported")};t.cwd=function(){return"/"};t.chdir=function(e){throw new Error("process.chdir is not supported")};t.umask=function(){return 0}}};var t={};function __nccwpck_require__(r){var n=t[r];if(n!==undefined){return n.exports}var i=t[r]={exports:{}};var o=true;try{e[r](i,i.exports,__nccwpck_require__);o=false}finally{if(o)delete t[r]}return i.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var r=__nccwpck_require__(229);module.exports=r})();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [829,774,888,179], function() { return __webpack_exec__(6807); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);