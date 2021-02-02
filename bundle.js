/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/Block.tsx":
/*!***********************!*\
  !*** ./lib/Block.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Block": () => /* binding */ Block,
/* harmony export */   "Corollary": () => /* binding */ Corollary,
/* harmony export */   "Definition": () => /* binding */ Definition,
/* harmony export */   "Example": () => /* binding */ Example,
/* harmony export */   "Exercise": () => /* binding */ Exercise,
/* harmony export */   "Lemma": () => /* binding */ Lemma,
/* harmony export */   "Remark": () => /* binding */ Remark,
/* harmony export */   "Proof": () => /* binding */ Proof,
/* harmony export */   "Proposition": () => /* binding */ Proposition,
/* harmony export */   "Theorem": () => /* binding */ Theorem
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

const block = (className) => function (props) {
    const { blockTitle, children } = props, attrs = __rest(props, ["blockTitle", "children"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("aside", Object.assign({ className: `block ${className}` }, attrs),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", null,
            blockTitle && (className === "block" ? "" : "("),
            blockTitle,
            blockTitle && (className === "block" ? "" : ")")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "content" }, children)));
};
const Block = block("");
const Corollary = block("corollary");
const Definition = block("definition");
const Example = block("example");
const Exercise = block("exercise");
const Lemma = block("lemma");
const Remark = block("remark");
const Proof = block("proof");
const Proposition = block("proposition");
const Theorem = block("theorem");


/***/ }),

/***/ "./lib/FatFingers.tsx":
/*!****************************!*\
  !*** ./lib/FatFingers.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {
    const { className, fatR, fatRef } = props, attrs = __rest(props, ["className", "fatR", "fatRef"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", Object.assign({ ref: ref, className: className }, attrs)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", Object.assign({ className: className ? className + " fat-fingers" : "fat-fingers", ref: fatRef }, attrs, { r: fatR !== null && fatR !== void 0 ? fatR : attrs.r }))));
}));


/***/ }),

/***/ "./lib/GlowOrb.tsx":
/*!*************************!*\
  !*** ./lib/GlowOrb.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ GlowOrb
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

function GlowOrb(props) {
    const { r1, r2, dur } = props, attrs = __rest(props, ["r1", "r2", "dur"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", Object.assign({ r: r1, fill: "transparent", pointerEvents: "none" }, attrs),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("animate", { attributeName: "r", from: r1, to: r2, dur: dur, begin: "0s", repeatCount: "indefinite" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("animate", { attributeType: "CSS", attributeName: "opacity", from: "1", to: "0", dur: dur, begin: "0s", repeatCount: "indefinite" })));
}


/***/ }),

/***/ "./lib/Input.tsx":
/*!***********************!*\
  !*** ./lib/Input.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rangetouch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rangetouch */ "rangetouch");
/* harmony import */ var rangetouch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rangetouch__WEBPACK_IMPORTED_MODULE_2__);



const { onClick } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.mobile;

const NON_TEXT_TYPES = ["button", "checkbox", "file", "hidden", "image", "radio", "range", "reset", "submit"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {
    const player = (0,ractive_player__WEBPACK_IMPORTED_MODULE_1__.usePlayer)();
    const innerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const combinedRef = useCombinedRefs(ref, innerRef);
    const onBlur = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e) => {
        var _a;
        if (!NON_TEXT_TYPES.includes(props.type)) {
            player.resumeKeyCapture();
        }
        (_a = props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }, []);
    const onKeyPress = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e) => {
        var _a;
        if (e.key === "Enter") {
            innerRef.current.blur();
        }
        (_a = props.onKeyPress) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }, []);
    const onFocus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e) => {
        var _a;
        if (!NON_TEXT_TYPES.includes(props.type)) {
            player.suspendKeyCapture();
        }
        (_a = props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }, []);
    const focus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => onClick((e) => {
        if (!NON_TEXT_TYPES.includes(props.type)) {
            e.currentTarget.focus();
        }
    }), []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (props.type === "range")
            new (rangetouch__WEBPACK_IMPORTED_MODULE_2___default())(innerRef.current);
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", Object.assign({}, props, { onBlur, onFocus, onKeyPress }, { onMouseUp: ractive_player__WEBPACK_IMPORTED_MODULE_1__.Player.preventCanvasClick }, focus, { ref: combinedRef, value: props.value })));
}));
function useCombinedRefs(...refs) {
    const targetRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        refs.forEach(ref => {
            if (!ref)
                return;
            if (typeof ref === "function") {
                ref(targetRef.current);
            }
            else {
                ref.current = targetRef.current;
            }
        });
    }, [refs]);
    return targetRef;
}


/***/ }),

/***/ "./lib/Link.tsx":
/*!**********************!*\
  !*** ./lib/Link.tsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Link
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


function Link(props) {
    const { children } = props, attrs = __rest(props, ["children"]);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", Object.assign({ onMouseUp: ractive_player__WEBPACK_IMPORTED_MODULE_1__.Player.preventCanvasClick, target: "_blank" }, attrs), children);
}


/***/ }),

/***/ "./lib/LoadingScreen.tsx":
/*!*******************************!*\
  !*** ./lib/LoadingScreen.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ LoadingScreen
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function LoadingScreen() {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "rp-loading-screen" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "rp-loading-spinner" })));
}


/***/ }),

/***/ "./lib/ThreeFiber.tsx":
/*!****************************!*\
  !*** ./lib/ThreeFiber.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R3FContext": () => /* binding */ R3FContext,
/* harmony export */   "ThreeScene": () => /* binding */ ThreeScene,
/* harmony export */   "APIHelper": () => /* binding */ APIHelper,
/* harmony export */   "useDraggable": () => /* binding */ useDraggable,
/* harmony export */   "intercept": () => /* binding */ intercept
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-three-fiber */ "react-three-fiber");
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_three_fiber__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_3__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};





const { anyHover } = ractive_player__WEBPACK_IMPORTED_MODULE_3__.Utils.mobile;

const R3FContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
function ThreeScene(props) {
    const { children } = props, attrs = __rest(props, ["children"]);
    const player = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ractive_player__WEBPACK_IMPORTED_MODULE_3__.Player.Context);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.Canvas, Object.assign({ "touch-action": "none", onMouseUp: ractive_player__WEBPACK_IMPORTED_MODULE_3__.Player.preventCanvasClick }, attrs),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(ractive_player__WEBPACK_IMPORTED_MODULE_3__.Player.Context.Provider, { value: player },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(APIHelper, null, children))));
}
function APIHelper(props) {
    const $three = (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useThree)();
    $three.gl.localClippingEnabled = true;
    const api = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
        activeListener: null,
        controls: null,
        dragging: false,
        meshes: {},
        $three,
        screenToNDC(x, y) {
            const rect = $three.gl.domElement.getBoundingClientRect();
            return new three__WEBPACK_IMPORTED_MODULE_1__.Vector2((x - rect.left) / rect.width * 2 - 1, -(y - rect.top) / rect.height * 2 + 1);
        },
        screenToScene(x, y, plane) {
            const rect = $three.gl.domElement.getBoundingClientRect();
            const ndc = api.screenToNDC(x, y), mouse = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(ndc.x, ndc.y, 0);
            mouse.unproject($three.camera);
            const dir = mouse.sub($three.camera.position).normalize();
            const distance = -plane.distanceToPoint($three.camera.position) / Math.cos(dir.angleTo(plane.normal));
            return $three.camera.position.clone().add(dir.multiplyScalar(distance));
        }
    }), [$three]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const { domElement } = $three.gl;
        domElement.addEventListener("pointermove", e => {
            if (api.activeListener)
                api.activeListener(e);
        });
        domElement.addEventListener("pointerup", e => {
            if (api.controls) {
                api.controls.enabled = true;
            }
            api.dragging = false;
            api.activeListener = null;
            domElement.classList.remove("dragging");
        });
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(R3FContext.Provider, { value: api }, props.children));
}
function useDraggable(move, down, up) {
    const { gl: { domElement } } = (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useThree)();
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(R3FContext);
    const events = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            onPointerOver: (e) => {
                if (e.intersections[0].object !== e.eventObject)
                    return;
                domElement.classList.add("draggable");
            },
            onPointerOut: (e) => {
                domElement.classList.remove("draggable");
            },
            onPointerDown: (e) => {
                if (e.intersections[0].object !== e.eventObject)
                    return;
                if (state.controls) {
                    state.controls.enabled = false;
                }
                state.dragging = true;
                state.activeListener = move;
                domElement.classList.add("dragging");
                down === null || down === void 0 ? void 0 : down(e);
            }
        };
    }, [move]);
    return events;
}
const intercept = {
    onPointerOver: () => { },
    onPointerDown: () => { },
    onPointerOut: () => { }
};


/***/ }),

/***/ "./lib/easings.ts":
/*!************************!*\
  !*** ./lib/easings.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "easeInSine": () => /* binding */ easeInSine,
/* harmony export */   "easeOutSine": () => /* binding */ easeOutSine,
/* harmony export */   "easeInOutSine": () => /* binding */ easeInOutSine,
/* harmony export */   "easeInQuad": () => /* binding */ easeInQuad,
/* harmony export */   "easeOutQuad": () => /* binding */ easeOutQuad,
/* harmony export */   "easeInOutQuad": () => /* binding */ easeInOutQuad,
/* harmony export */   "easeInCubic": () => /* binding */ easeInCubic,
/* harmony export */   "easeOutCubic": () => /* binding */ easeOutCubic,
/* harmony export */   "easeInOutCubic": () => /* binding */ easeInOutCubic,
/* harmony export */   "easeInQuart": () => /* binding */ easeInQuart,
/* harmony export */   "easeOutQuart": () => /* binding */ easeOutQuart,
/* harmony export */   "easeInOutQuart": () => /* binding */ easeInOutQuart,
/* harmony export */   "easeInQuint": () => /* binding */ easeInQuint,
/* harmony export */   "easeOutQuint": () => /* binding */ easeOutQuint,
/* harmony export */   "easeInOutQuint": () => /* binding */ easeInOutQuint,
/* harmony export */   "easeInExpo": () => /* binding */ easeInExpo,
/* harmony export */   "easeOutExpo": () => /* binding */ easeOutExpo,
/* harmony export */   "easeInOutExpo": () => /* binding */ easeInOutExpo,
/* harmony export */   "easeInCirc": () => /* binding */ easeInCirc,
/* harmony export */   "easeOutCirc": () => /* binding */ easeOutCirc,
/* harmony export */   "easeInOutCirc": () => /* binding */ easeInOutCirc,
/* harmony export */   "easeInBack": () => /* binding */ easeInBack,
/* harmony export */   "easeOutBack": () => /* binding */ easeOutBack,
/* harmony export */   "easeInOutBack": () => /* binding */ easeInOutBack
/* harmony export */ });
const easeInSine = [0.47, 0, 0.745, 0.715];
const easeOutSine = [0.39, 0.575, 0.565, 1];
const easeInOutSine = [0.445, 0.05, 0.55, 0.95];
const easeInQuad = [0.55, 0.085, 0.68, 0.53];
const easeOutQuad = [0.25, 0.46, 0.45, 0.94];
const easeInOutQuad = [0.455, 0.03, 0.515, 0.955];
const easeInCubic = [0.55, 0.055, 0.675, 0.19];
const easeOutCubic = [0.215, 0.61, 0.355, 1];
const easeInOutCubic = [0.645, 0.045, 0.355, 1];
const easeInQuart = [0.895, 0.03, 0.685, 0.22];
const easeOutQuart = [0.165, 0.84, 0.44, 1];
const easeInOutQuart = [0.77, 0, 0.175, 1];
const easeInQuint = [0.755, 0.05, 0.855, 0.06];
const easeOutQuint = [0.23, 1, 0.32, 1];
const easeInOutQuint = [0.86, 0, 0.07, 1];
const easeInExpo = [0.95, 0.05, 0.795, 0.035];
const easeOutExpo = [0.19, 1, 0.22, 1];
const easeInOutExpo = [1, 0, 0, 1];
const easeInCirc = [0.6, 0.04, 0.98, 0.335];
const easeOutCirc = [0.075, 0.82, 0.165, 1];
const easeInOutCirc = [0.785, 0.135, 0.15, 0.86];
const easeInBack = [0.6, -0.28, 0.735, 0.045];
const easeOutBack = [0.175, 0.885, 0.32, 1.275];
const easeInOutBack = [0.68, -0.55, 0.265, 1.55];


/***/ }),

/***/ "./lib/graphics.ts":
/*!*************************!*\
  !*** ./lib/graphics.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "marchingSquares": () => /* binding */ marchingSquares,
/* harmony export */   "marchingCubes": () => /* binding */ marchingCubes,
/* harmony export */   "intersectSurfacesImplicit": () => /* binding */ intersectSurfacesImplicit,
/* harmony export */   "curvePoint": () => /* binding */ curvePoint,
/* harmony export */   "solve22Matrix": () => /* binding */ solve22Matrix,
/* harmony export */   "arrowOrient": () => /* binding */ arrowOrient
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);

function marchingSquares(xMin, xMax, yMin, yMax, zFunc, c, resolution) {
    const xStep = (xMax - xMin) / resolution;
    const yStep = (yMax - yMin) / resolution;
    const points = [];
    for (let x = xMin; x < xMax; x += xStep) {
        for (let y = yMin; y < yMax; y += yStep) {
            const z1 = zFunc(x, y);
            const z2 = zFunc(x + xStep, y);
            const z4 = zFunc(x + xStep, y + yStep);
            const z8 = zFunc(x, y + yStep);
            let n = 0;
            if (z1 > c)
                n += 1;
            if (z2 > c)
                n += 2;
            if (z4 > c)
                n += 4;
            if (z8 > c)
                n += 8;
            const bottomInterp = (c - z1) / (z2 - z1) * xStep;
            const topInterp = (c - z8) / (z4 - z8) * xStep;
            const leftInterp = (c - z1) / (z8 - z1) * yStep;
            const rightInterp = (c - z2) / (z4 - z2) * yStep;
            if (n == 1 || n == 14)
                points.push([x, y + leftInterp, c], [x + bottomInterp, y, c]);
            else if (n == 2 || n == 13)
                points.push([x + bottomInterp, y, c], [x + xStep, y + rightInterp, c]);
            else if (n == 4 || n == 11)
                points.push([x + topInterp, y + yStep, c], [x + xStep, y + rightInterp, c]);
            else if (n == 8 || n == 7)
                points.push([x, y + leftInterp, c], [x + topInterp, y + yStep, c]);
            else if (n == 3 || n == 12)
                points.push([x, y + leftInterp, c], [x + xStep, y + rightInterp, c]);
            else if (n == 6 || n == 9)
                points.push([x + bottomInterp, y, c], [x + topInterp, y + yStep, c]);
            else if (n == 5)
                points.push([x, y + leftInterp, c], [x + bottomInterp, y, c], [x + topInterp, y + yStep, c], [x + xStep, y + rightInterp, c]);
            else if (n == 10)
                points.push([x + bottomInterp, y, c], [x + xStep, y + rightInterp, c], [x, y + yStep / 2, c], [x, y + leftInterp, c], [x + topInterp, y + yStep, c]);
            else if (n == 0 || n == 15)
                points.push();
        }
    }
    return points;
}
three__WEBPACK_IMPORTED_MODULE_0__.edgeTable = new Int32Array([
    0x0, 0x109, 0x203, 0x30a, 0x406, 0x50f, 0x605, 0x70c,
    0x80c, 0x905, 0xa0f, 0xb06, 0xc0a, 0xd03, 0xe09, 0xf00,
    0x190, 0x99, 0x393, 0x29a, 0x596, 0x49f, 0x795, 0x69c,
    0x99c, 0x895, 0xb9f, 0xa96, 0xd9a, 0xc93, 0xf99, 0xe90,
    0x230, 0x339, 0x33, 0x13a, 0x636, 0x73f, 0x435, 0x53c,
    0xa3c, 0xb35, 0x83f, 0x936, 0xe3a, 0xf33, 0xc39, 0xd30,
    0x3a0, 0x2a9, 0x1a3, 0xaa, 0x7a6, 0x6af, 0x5a5, 0x4ac,
    0xbac, 0xaa5, 0x9af, 0x8a6, 0xfaa, 0xea3, 0xda9, 0xca0,
    0x460, 0x569, 0x663, 0x76a, 0x66, 0x16f, 0x265, 0x36c,
    0xc6c, 0xd65, 0xe6f, 0xf66, 0x86a, 0x963, 0xa69, 0xb60,
    0x5f0, 0x4f9, 0x7f3, 0x6fa, 0x1f6, 0xff, 0x3f5, 0x2fc,
    0xdfc, 0xcf5, 0xfff, 0xef6, 0x9fa, 0x8f3, 0xbf9, 0xaf0,
    0x650, 0x759, 0x453, 0x55a, 0x256, 0x35f, 0x55, 0x15c,
    0xe5c, 0xf55, 0xc5f, 0xd56, 0xa5a, 0xb53, 0x859, 0x950,
    0x7c0, 0x6c9, 0x5c3, 0x4ca, 0x3c6, 0x2cf, 0x1c5, 0xcc,
    0xfcc, 0xec5, 0xdcf, 0xcc6, 0xbca, 0xac3, 0x9c9, 0x8c0,
    0x8c0, 0x9c9, 0xac3, 0xbca, 0xcc6, 0xdcf, 0xec5, 0xfcc,
    0xcc, 0x1c5, 0x2cf, 0x3c6, 0x4ca, 0x5c3, 0x6c9, 0x7c0,
    0x950, 0x859, 0xb53, 0xa5a, 0xd56, 0xc5f, 0xf55, 0xe5c,
    0x15c, 0x55, 0x35f, 0x256, 0x55a, 0x453, 0x759, 0x650,
    0xaf0, 0xbf9, 0x8f3, 0x9fa, 0xef6, 0xfff, 0xcf5, 0xdfc,
    0x2fc, 0x3f5, 0xff, 0x1f6, 0x6fa, 0x7f3, 0x4f9, 0x5f0,
    0xb60, 0xa69, 0x963, 0x86a, 0xf66, 0xe6f, 0xd65, 0xc6c,
    0x36c, 0x265, 0x16f, 0x66, 0x76a, 0x663, 0x569, 0x460,
    0xca0, 0xda9, 0xea3, 0xfaa, 0x8a6, 0x9af, 0xaa5, 0xbac,
    0x4ac, 0x5a5, 0x6af, 0x7a6, 0xaa, 0x1a3, 0x2a9, 0x3a0,
    0xd30, 0xc39, 0xf33, 0xe3a, 0x936, 0x83f, 0xb35, 0xa3c,
    0x53c, 0x435, 0x73f, 0x636, 0x13a, 0x33, 0x339, 0x230,
    0xe90, 0xf99, 0xc93, 0xd9a, 0xa96, 0xb9f, 0x895, 0x99c,
    0x69c, 0x795, 0x49f, 0x596, 0x29a, 0x393, 0x99, 0x190,
    0xf00, 0xe09, 0xd03, 0xc0a, 0xb06, 0xa0f, 0x905, 0x80c,
    0x70c, 0x605, 0x50f, 0x406, 0x30a, 0x203, 0x109, 0x0
]);
three__WEBPACK_IMPORTED_MODULE_0__.triTable = new Int32Array([
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    0, 8, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    0, 1, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    1, 8, 3, 9, 8, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    1, 2, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    0, 8, 3, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    9, 2, 10, 0, 2, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    2, 8, 3, 2, 10, 8, 10, 9, 8, -1, -1, -1, -1, -1, -1, -1,
    3, 11, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    0, 11, 2, 8, 11, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    1, 9, 0, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    1, 11, 2, 1, 9, 11, 9, 8, 11, -1, -1, -1, -1, -1, -1, -1,
    3, 10, 1, 11, 10, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    0, 10, 1, 0, 8, 10, 8, 11, 10, -1, -1, -1, -1, -1, -1, -1,
    3, 9, 0, 3, 11, 9, 11, 10, 9, -1, -1, -1, -1, -1, -1, -1,
    9, 8, 10, 10, 8, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    4, 7, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    4, 3, 0, 7, 3, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    0, 1, 9, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    4, 1, 9, 4, 7, 1, 7, 3, 1, -1, -1, -1, -1, -1, -1, -1,
    1, 2, 10, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    3, 4, 7, 3, 0, 4, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1,
    9, 2, 10, 9, 0, 2, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1,
    2, 10, 9, 2, 9, 7, 2, 7, 3, 7, 9, 4, -1, -1, -1, -1,
    8, 4, 7, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    11, 4, 7, 11, 2, 4, 2, 0, 4, -1, -1, -1, -1, -1, -1, -1,
    9, 0, 1, 8, 4, 7, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1,
    4, 7, 11, 9, 4, 11, 9, 11, 2, 9, 2, 1, -1, -1, -1, -1,
    3, 10, 1, 3, 11, 10, 7, 8, 4, -1, -1, -1, -1, -1, -1, -1,
    1, 11, 10, 1, 4, 11, 1, 0, 4, 7, 11, 4, -1, -1, -1, -1,
    4, 7, 8, 9, 0, 11, 9, 11, 10, 11, 0, 3, -1, -1, -1, -1,
    4, 7, 11, 4, 11, 9, 9, 11, 10, -1, -1, -1, -1, -1, -1, -1,
    9, 5, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    9, 5, 4, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    0, 5, 4, 1, 5, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    8, 5, 4, 8, 3, 5, 3, 1, 5, -1, -1, -1, -1, -1, -1, -1,
    1, 2, 10, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    3, 0, 8, 1, 2, 10, 4, 9, 5, -1, -1, -1, -1, -1, -1, -1,
    5, 2, 10, 5, 4, 2, 4, 0, 2, -1, -1, -1, -1, -1, -1, -1,
    2, 10, 5, 3, 2, 5, 3, 5, 4, 3, 4, 8, -1, -1, -1, -1,
    9, 5, 4, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    0, 11, 2, 0, 8, 11, 4, 9, 5, -1, -1, -1, -1, -1, -1, -1,
    0, 5, 4, 0, 1, 5, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1,
    2, 1, 5, 2, 5, 8, 2, 8, 11, 4, 8, 5, -1, -1, -1, -1,
    10, 3, 11, 10, 1, 3, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1,
    4, 9, 5, 0, 8, 1, 8, 10, 1, 8, 11, 10, -1, -1, -1, -1,
    5, 4, 0, 5, 0, 11, 5, 11, 10, 11, 0, 3, -1, -1, -1, -1,
    5, 4, 8, 5, 8, 10, 10, 8, 11, -1, -1, -1, -1, -1, -1, -1,
    9, 7, 8, 5, 7, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    9, 3, 0, 9, 5, 3, 5, 7, 3, -1, -1, -1, -1, -1, -1, -1,
    0, 7, 8, 0, 1, 7, 1, 5, 7, -1, -1, -1, -1, -1, -1, -1,
    1, 5, 3, 3, 5, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    9, 7, 8, 9, 5, 7, 10, 1, 2, -1, -1, -1, -1, -1, -1, -1,
    10, 1, 2, 9, 5, 0, 5, 3, 0, 5, 7, 3, -1, -1, -1, -1,
    8, 0, 2, 8, 2, 5, 8, 5, 7, 10, 5, 2, -1, -1, -1, -1,
    2, 10, 5, 2, 5, 3, 3, 5, 7, -1, -1, -1, -1, -1, -1, -1,
    7, 9, 5, 7, 8, 9, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1,
    9, 5, 7, 9, 7, 2, 9, 2, 0, 2, 7, 11, -1, -1, -1, -1,
    2, 3, 11, 0, 1, 8, 1, 7, 8, 1, 5, 7, -1, -1, -1, -1,
    11, 2, 1, 11, 1, 7, 7, 1, 5, -1, -1, -1, -1, -1, -1, -1,
    9, 5, 8, 8, 5, 7, 10, 1, 3, 10, 3, 11, -1, -1, -1, -1,
    5, 7, 0, 5, 0, 9, 7, 11, 0, 1, 0, 10, 11, 10, 0, -1,
    11, 10, 0, 11, 0, 3, 10, 5, 0, 8, 0, 7, 5, 7, 0, -1,
    11, 10, 5, 7, 11, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    10, 6, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    0, 8, 3, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    9, 0, 1, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    1, 8, 3, 1, 9, 8, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1,
    1, 6, 5, 2, 6, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    1, 6, 5, 1, 2, 6, 3, 0, 8, -1, -1, -1, -1, -1, -1, -1,
    9, 6, 5, 9, 0, 6, 0, 2, 6, -1, -1, -1, -1, -1, -1, -1,
    5, 9, 8, 5, 8, 2, 5, 2, 6, 3, 2, 8, -1, -1, -1, -1,
    2, 3, 11, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    11, 0, 8, 11, 2, 0, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1,
    0, 1, 9, 2, 3, 11, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1,
    5, 10, 6, 1, 9, 2, 9, 11, 2, 9, 8, 11, -1, -1, -1, -1,
    6, 3, 11, 6, 5, 3, 5, 1, 3, -1, -1, -1, -1, -1, -1, -1,
    0, 8, 11, 0, 11, 5, 0, 5, 1, 5, 11, 6, -1, -1, -1, -1,
    3, 11, 6, 0, 3, 6, 0, 6, 5, 0, 5, 9, -1, -1, -1, -1,
    6, 5, 9, 6, 9, 11, 11, 9, 8, -1, -1, -1, -1, -1, -1, -1,
    5, 10, 6, 4, 7, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    4, 3, 0, 4, 7, 3, 6, 5, 10, -1, -1, -1, -1, -1, -1, -1,
    1, 9, 0, 5, 10, 6, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1,
    10, 6, 5, 1, 9, 7, 1, 7, 3, 7, 9, 4, -1, -1, -1, -1,
    6, 1, 2, 6, 5, 1, 4, 7, 8, -1, -1, -1, -1, -1, -1, -1,
    1, 2, 5, 5, 2, 6, 3, 0, 4, 3, 4, 7, -1, -1, -1, -1,
    8, 4, 7, 9, 0, 5, 0, 6, 5, 0, 2, 6, -1, -1, -1, -1,
    7, 3, 9, 7, 9, 4, 3, 2, 9, 5, 9, 6, 2, 6, 9, -1,
    3, 11, 2, 7, 8, 4, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1,
    5, 10, 6, 4, 7, 2, 4, 2, 0, 2, 7, 11, -1, -1, -1, -1,
    0, 1, 9, 4, 7, 8, 2, 3, 11, 5, 10, 6, -1, -1, -1, -1,
    9, 2, 1, 9, 11, 2, 9, 4, 11, 7, 11, 4, 5, 10, 6, -1,
    8, 4, 7, 3, 11, 5, 3, 5, 1, 5, 11, 6, -1, -1, -1, -1,
    5, 1, 11, 5, 11, 6, 1, 0, 11, 7, 11, 4, 0, 4, 11, -1,
    0, 5, 9, 0, 6, 5, 0, 3, 6, 11, 6, 3, 8, 4, 7, -1,
    6, 5, 9, 6, 9, 11, 4, 7, 9, 7, 11, 9, -1, -1, -1, -1,
    10, 4, 9, 6, 4, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    4, 10, 6, 4, 9, 10, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1,
    10, 0, 1, 10, 6, 0, 6, 4, 0, -1, -1, -1, -1, -1, -1, -1,
    8, 3, 1, 8, 1, 6, 8, 6, 4, 6, 1, 10, -1, -1, -1, -1,
    1, 4, 9, 1, 2, 4, 2, 6, 4, -1, -1, -1, -1, -1, -1, -1,
    3, 0, 8, 1, 2, 9, 2, 4, 9, 2, 6, 4, -1, -1, -1, -1,
    0, 2, 4, 4, 2, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    8, 3, 2, 8, 2, 4, 4, 2, 6, -1, -1, -1, -1, -1, -1, -1,
    10, 4, 9, 10, 6, 4, 11, 2, 3, -1, -1, -1, -1, -1, -1, -1,
    0, 8, 2, 2, 8, 11, 4, 9, 10, 4, 10, 6, -1, -1, -1, -1,
    3, 11, 2, 0, 1, 6, 0, 6, 4, 6, 1, 10, -1, -1, -1, -1,
    6, 4, 1, 6, 1, 10, 4, 8, 1, 2, 1, 11, 8, 11, 1, -1,
    9, 6, 4, 9, 3, 6, 9, 1, 3, 11, 6, 3, -1, -1, -1, -1,
    8, 11, 1, 8, 1, 0, 11, 6, 1, 9, 1, 4, 6, 4, 1, -1,
    3, 11, 6, 3, 6, 0, 0, 6, 4, -1, -1, -1, -1, -1, -1, -1,
    6, 4, 8, 11, 6, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    7, 10, 6, 7, 8, 10, 8, 9, 10, -1, -1, -1, -1, -1, -1, -1,
    0, 7, 3, 0, 10, 7, 0, 9, 10, 6, 7, 10, -1, -1, -1, -1,
    10, 6, 7, 1, 10, 7, 1, 7, 8, 1, 8, 0, -1, -1, -1, -1,
    10, 6, 7, 10, 7, 1, 1, 7, 3, -1, -1, -1, -1, -1, -1, -1,
    1, 2, 6, 1, 6, 8, 1, 8, 9, 8, 6, 7, -1, -1, -1, -1,
    2, 6, 9, 2, 9, 1, 6, 7, 9, 0, 9, 3, 7, 3, 9, -1,
    7, 8, 0, 7, 0, 6, 6, 0, 2, -1, -1, -1, -1, -1, -1, -1,
    7, 3, 2, 6, 7, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    2, 3, 11, 10, 6, 8, 10, 8, 9, 8, 6, 7, -1, -1, -1, -1,
    2, 0, 7, 2, 7, 11, 0, 9, 7, 6, 7, 10, 9, 10, 7, -1,
    1, 8, 0, 1, 7, 8, 1, 10, 7, 6, 7, 10, 2, 3, 11, -1,
    11, 2, 1, 11, 1, 7, 10, 6, 1, 6, 7, 1, -1, -1, -1, -1,
    8, 9, 6, 8, 6, 7, 9, 1, 6, 11, 6, 3, 1, 3, 6, -1,
    0, 9, 1, 11, 6, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    7, 8, 0, 7, 0, 6, 3, 11, 0, 11, 6, 0, -1, -1, -1, -1,
    7, 11, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    7, 6, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    3, 0, 8, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    0, 1, 9, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    8, 1, 9, 8, 3, 1, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1,
    10, 1, 2, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    1, 2, 10, 3, 0, 8, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1,
    2, 9, 0, 2, 10, 9, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1,
    6, 11, 7, 2, 10, 3, 10, 8, 3, 10, 9, 8, -1, -1, -1, -1,
    7, 2, 3, 6, 2, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    7, 0, 8, 7, 6, 0, 6, 2, 0, -1, -1, -1, -1, -1, -1, -1,
    2, 7, 6, 2, 3, 7, 0, 1, 9, -1, -1, -1, -1, -1, -1, -1,
    1, 6, 2, 1, 8, 6, 1, 9, 8, 8, 7, 6, -1, -1, -1, -1,
    10, 7, 6, 10, 1, 7, 1, 3, 7, -1, -1, -1, -1, -1, -1, -1,
    10, 7, 6, 1, 7, 10, 1, 8, 7, 1, 0, 8, -1, -1, -1, -1,
    0, 3, 7, 0, 7, 10, 0, 10, 9, 6, 10, 7, -1, -1, -1, -1,
    7, 6, 10, 7, 10, 8, 8, 10, 9, -1, -1, -1, -1, -1, -1, -1,
    6, 8, 4, 11, 8, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    3, 6, 11, 3, 0, 6, 0, 4, 6, -1, -1, -1, -1, -1, -1, -1,
    8, 6, 11, 8, 4, 6, 9, 0, 1, -1, -1, -1, -1, -1, -1, -1,
    9, 4, 6, 9, 6, 3, 9, 3, 1, 11, 3, 6, -1, -1, -1, -1,
    6, 8, 4, 6, 11, 8, 2, 10, 1, -1, -1, -1, -1, -1, -1, -1,
    1, 2, 10, 3, 0, 11, 0, 6, 11, 0, 4, 6, -1, -1, -1, -1,
    4, 11, 8, 4, 6, 11, 0, 2, 9, 2, 10, 9, -1, -1, -1, -1,
    10, 9, 3, 10, 3, 2, 9, 4, 3, 11, 3, 6, 4, 6, 3, -1,
    8, 2, 3, 8, 4, 2, 4, 6, 2, -1, -1, -1, -1, -1, -1, -1,
    0, 4, 2, 4, 6, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    1, 9, 0, 2, 3, 4, 2, 4, 6, 4, 3, 8, -1, -1, -1, -1,
    1, 9, 4, 1, 4, 2, 2, 4, 6, -1, -1, -1, -1, -1, -1, -1,
    8, 1, 3, 8, 6, 1, 8, 4, 6, 6, 10, 1, -1, -1, -1, -1,
    10, 1, 0, 10, 0, 6, 6, 0, 4, -1, -1, -1, -1, -1, -1, -1,
    4, 6, 3, 4, 3, 8, 6, 10, 3, 0, 3, 9, 10, 9, 3, -1,
    10, 9, 4, 6, 10, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    4, 9, 5, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    0, 8, 3, 4, 9, 5, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1,
    5, 0, 1, 5, 4, 0, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1,
    11, 7, 6, 8, 3, 4, 3, 5, 4, 3, 1, 5, -1, -1, -1, -1,
    9, 5, 4, 10, 1, 2, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1,
    6, 11, 7, 1, 2, 10, 0, 8, 3, 4, 9, 5, -1, -1, -1, -1,
    7, 6, 11, 5, 4, 10, 4, 2, 10, 4, 0, 2, -1, -1, -1, -1,
    3, 4, 8, 3, 5, 4, 3, 2, 5, 10, 5, 2, 11, 7, 6, -1,
    7, 2, 3, 7, 6, 2, 5, 4, 9, -1, -1, -1, -1, -1, -1, -1,
    9, 5, 4, 0, 8, 6, 0, 6, 2, 6, 8, 7, -1, -1, -1, -1,
    3, 6, 2, 3, 7, 6, 1, 5, 0, 5, 4, 0, -1, -1, -1, -1,
    6, 2, 8, 6, 8, 7, 2, 1, 8, 4, 8, 5, 1, 5, 8, -1,
    9, 5, 4, 10, 1, 6, 1, 7, 6, 1, 3, 7, -1, -1, -1, -1,
    1, 6, 10, 1, 7, 6, 1, 0, 7, 8, 7, 0, 9, 5, 4, -1,
    4, 0, 10, 4, 10, 5, 0, 3, 10, 6, 10, 7, 3, 7, 10, -1,
    7, 6, 10, 7, 10, 8, 5, 4, 10, 4, 8, 10, -1, -1, -1, -1,
    6, 9, 5, 6, 11, 9, 11, 8, 9, -1, -1, -1, -1, -1, -1, -1,
    3, 6, 11, 0, 6, 3, 0, 5, 6, 0, 9, 5, -1, -1, -1, -1,
    0, 11, 8, 0, 5, 11, 0, 1, 5, 5, 6, 11, -1, -1, -1, -1,
    6, 11, 3, 6, 3, 5, 5, 3, 1, -1, -1, -1, -1, -1, -1, -1,
    1, 2, 10, 9, 5, 11, 9, 11, 8, 11, 5, 6, -1, -1, -1, -1,
    0, 11, 3, 0, 6, 11, 0, 9, 6, 5, 6, 9, 1, 2, 10, -1,
    11, 8, 5, 11, 5, 6, 8, 0, 5, 10, 5, 2, 0, 2, 5, -1,
    6, 11, 3, 6, 3, 5, 2, 10, 3, 10, 5, 3, -1, -1, -1, -1,
    5, 8, 9, 5, 2, 8, 5, 6, 2, 3, 8, 2, -1, -1, -1, -1,
    9, 5, 6, 9, 6, 0, 0, 6, 2, -1, -1, -1, -1, -1, -1, -1,
    1, 5, 8, 1, 8, 0, 5, 6, 8, 3, 8, 2, 6, 2, 8, -1,
    1, 5, 6, 2, 1, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    1, 3, 6, 1, 6, 10, 3, 8, 6, 5, 6, 9, 8, 9, 6, -1,
    10, 1, 0, 10, 0, 6, 9, 5, 0, 5, 6, 0, -1, -1, -1, -1,
    0, 3, 8, 5, 6, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    10, 5, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    11, 5, 10, 7, 5, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    11, 5, 10, 11, 7, 5, 8, 3, 0, -1, -1, -1, -1, -1, -1, -1,
    5, 11, 7, 5, 10, 11, 1, 9, 0, -1, -1, -1, -1, -1, -1, -1,
    10, 7, 5, 10, 11, 7, 9, 8, 1, 8, 3, 1, -1, -1, -1, -1,
    11, 1, 2, 11, 7, 1, 7, 5, 1, -1, -1, -1, -1, -1, -1, -1,
    0, 8, 3, 1, 2, 7, 1, 7, 5, 7, 2, 11, -1, -1, -1, -1,
    9, 7, 5, 9, 2, 7, 9, 0, 2, 2, 11, 7, -1, -1, -1, -1,
    7, 5, 2, 7, 2, 11, 5, 9, 2, 3, 2, 8, 9, 8, 2, -1,
    2, 5, 10, 2, 3, 5, 3, 7, 5, -1, -1, -1, -1, -1, -1, -1,
    8, 2, 0, 8, 5, 2, 8, 7, 5, 10, 2, 5, -1, -1, -1, -1,
    9, 0, 1, 5, 10, 3, 5, 3, 7, 3, 10, 2, -1, -1, -1, -1,
    9, 8, 2, 9, 2, 1, 8, 7, 2, 10, 2, 5, 7, 5, 2, -1,
    1, 3, 5, 3, 7, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    0, 8, 7, 0, 7, 1, 1, 7, 5, -1, -1, -1, -1, -1, -1, -1,
    9, 0, 3, 9, 3, 5, 5, 3, 7, -1, -1, -1, -1, -1, -1, -1,
    9, 8, 7, 5, 9, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    5, 8, 4, 5, 10, 8, 10, 11, 8, -1, -1, -1, -1, -1, -1, -1,
    5, 0, 4, 5, 11, 0, 5, 10, 11, 11, 3, 0, -1, -1, -1, -1,
    0, 1, 9, 8, 4, 10, 8, 10, 11, 10, 4, 5, -1, -1, -1, -1,
    10, 11, 4, 10, 4, 5, 11, 3, 4, 9, 4, 1, 3, 1, 4, -1,
    2, 5, 1, 2, 8, 5, 2, 11, 8, 4, 5, 8, -1, -1, -1, -1,
    0, 4, 11, 0, 11, 3, 4, 5, 11, 2, 11, 1, 5, 1, 11, -1,
    0, 2, 5, 0, 5, 9, 2, 11, 5, 4, 5, 8, 11, 8, 5, -1,
    9, 4, 5, 2, 11, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    2, 5, 10, 3, 5, 2, 3, 4, 5, 3, 8, 4, -1, -1, -1, -1,
    5, 10, 2, 5, 2, 4, 4, 2, 0, -1, -1, -1, -1, -1, -1, -1,
    3, 10, 2, 3, 5, 10, 3, 8, 5, 4, 5, 8, 0, 1, 9, -1,
    5, 10, 2, 5, 2, 4, 1, 9, 2, 9, 4, 2, -1, -1, -1, -1,
    8, 4, 5, 8, 5, 3, 3, 5, 1, -1, -1, -1, -1, -1, -1, -1,
    0, 4, 5, 1, 0, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    8, 4, 5, 8, 5, 3, 9, 0, 5, 0, 3, 5, -1, -1, -1, -1,
    9, 4, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    4, 11, 7, 4, 9, 11, 9, 10, 11, -1, -1, -1, -1, -1, -1, -1,
    0, 8, 3, 4, 9, 7, 9, 11, 7, 9, 10, 11, -1, -1, -1, -1,
    1, 10, 11, 1, 11, 4, 1, 4, 0, 7, 4, 11, -1, -1, -1, -1,
    3, 1, 4, 3, 4, 8, 1, 10, 4, 7, 4, 11, 10, 11, 4, -1,
    4, 11, 7, 9, 11, 4, 9, 2, 11, 9, 1, 2, -1, -1, -1, -1,
    9, 7, 4, 9, 11, 7, 9, 1, 11, 2, 11, 1, 0, 8, 3, -1,
    11, 7, 4, 11, 4, 2, 2, 4, 0, -1, -1, -1, -1, -1, -1, -1,
    11, 7, 4, 11, 4, 2, 8, 3, 4, 3, 2, 4, -1, -1, -1, -1,
    2, 9, 10, 2, 7, 9, 2, 3, 7, 7, 4, 9, -1, -1, -1, -1,
    9, 10, 7, 9, 7, 4, 10, 2, 7, 8, 7, 0, 2, 0, 7, -1,
    3, 7, 10, 3, 10, 2, 7, 4, 10, 1, 10, 0, 4, 0, 10, -1,
    1, 10, 2, 8, 7, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    4, 9, 1, 4, 1, 7, 7, 1, 3, -1, -1, -1, -1, -1, -1, -1,
    4, 9, 1, 4, 1, 7, 0, 8, 1, 8, 7, 1, -1, -1, -1, -1,
    4, 0, 3, 7, 4, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    4, 8, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    9, 10, 8, 10, 11, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    3, 0, 9, 3, 9, 11, 11, 9, 10, -1, -1, -1, -1, -1, -1, -1,
    0, 1, 10, 0, 10, 8, 8, 10, 11, -1, -1, -1, -1, -1, -1, -1,
    3, 1, 10, 11, 3, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    1, 2, 11, 1, 11, 9, 9, 11, 8, -1, -1, -1, -1, -1, -1, -1,
    3, 0, 9, 3, 9, 11, 1, 2, 9, 2, 11, 9, -1, -1, -1, -1,
    0, 2, 11, 8, 0, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    3, 2, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    2, 3, 8, 2, 8, 10, 10, 8, 9, -1, -1, -1, -1, -1, -1, -1,
    9, 10, 2, 0, 9, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    2, 3, 8, 2, 8, 10, 0, 1, 8, 1, 10, 8, -1, -1, -1, -1,
    1, 10, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    1, 3, 8, 9, 1, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    0, 9, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    0, 3, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1
]);
three__WEBPACK_IMPORTED_MODULE_0__.Geometry.prototype.computeCentroids = function () {
    for (const face of this.faces) {
        face.centroid.set(0, 0, 0);
        face.centroid.add(this.vertices[face.a]);
        face.centroid.add(this.vertices[face.b]);
        face.centroid.add(this.vertices[face.c]);
        face.centroid.divideScalar(3);
    }
};
const oldConstructor = three__WEBPACK_IMPORTED_MODULE_0__.Face3;
three__WEBPACK_IMPORTED_MODULE_0__.Face3 = function (...args) {
    oldConstructor.apply(this, args);
    this.centroid = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
};
function marchingCubes(fn, axisMin, axisMax, size) {
    const points = [], values = [];
    const axisRange = axisMax - axisMin;
    for (let k = 0; k < size; k++)
        for (let j = 0; j < size; j++)
            for (let i = 0; i < size; i++) {
                const x = axisMin + axisRange * i / (size - 1), y = axisMin + axisRange * j / (size - 1), z = axisMin + axisRange * k / (size - 1);
                points.push(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(x, y, z));
                const value = fn(x, y, z);
                values.push(value);
            }
    const size2 = size * size;
    const vlist = new Array(12);
    const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.Geometry();
    let vertexIndex = 0;
    for (let z = 0; z < size - 1; z++)
        for (let y = 0; y < size - 1; y++)
            for (let x = 0; x < size - 1; x++) {
                const p = x + size * y + size2 * z, px = p + 1, py = p + size, pxy = py + 1, pz = p + size2, pxz = px + size2, pyz = py + size2, pxyz = pxy + size2;
                const value0 = values[p], value1 = values[px], value2 = values[py], value3 = values[pxy], value4 = values[pz], value5 = values[pxz], value6 = values[pyz], value7 = values[pxyz];
                const isolevel = 0;
                let cubeindex = 0;
                if (value0 < isolevel)
                    cubeindex |= 1;
                if (value1 < isolevel)
                    cubeindex |= 2;
                if (value2 < isolevel)
                    cubeindex |= 8;
                if (value3 < isolevel)
                    cubeindex |= 4;
                if (value4 < isolevel)
                    cubeindex |= 16;
                if (value5 < isolevel)
                    cubeindex |= 32;
                if (value6 < isolevel)
                    cubeindex |= 128;
                if (value7 < isolevel)
                    cubeindex |= 64;
                const bits = three__WEBPACK_IMPORTED_MODULE_0__.edgeTable[cubeindex];
                if (bits === 0)
                    continue;
                let mu = 0.5;
                if (bits & 1) {
                    mu = (isolevel - value0) / (value1 - value0);
                    vlist[0] = points[p].clone().lerp(points[px], mu);
                }
                if (bits & 2) {
                    mu = (isolevel - value1) / (value3 - value1);
                    vlist[1] = points[px].clone().lerp(points[pxy], mu);
                }
                if (bits & 4) {
                    mu = (isolevel - value2) / (value3 - value2);
                    vlist[2] = points[py].clone().lerp(points[pxy], mu);
                }
                if (bits & 8) {
                    mu = (isolevel - value0) / (value2 - value0);
                    vlist[3] = points[p].clone().lerp(points[py], mu);
                }
                if (bits & 16) {
                    mu = (isolevel - value4) / (value5 - value4);
                    vlist[4] = points[pz].clone().lerp(points[pxz], mu);
                }
                if (bits & 32) {
                    mu = (isolevel - value5) / (value7 - value5);
                    vlist[5] = points[pxz].clone().lerp(points[pxyz], mu);
                }
                if (bits & 64) {
                    mu = (isolevel - value6) / (value7 - value6);
                    vlist[6] = points[pyz].clone().lerp(points[pxyz], mu);
                }
                if (bits & 128) {
                    mu = (isolevel - value4) / (value6 - value4);
                    vlist[7] = points[pz].clone().lerp(points[pyz], mu);
                }
                if (bits & 256) {
                    mu = (isolevel - value0) / (value4 - value0);
                    vlist[8] = points[p].clone().lerp(points[pz], mu);
                }
                if (bits & 512) {
                    mu = (isolevel - value1) / (value5 - value1);
                    vlist[9] = points[px].clone().lerp(points[pxz], mu);
                }
                if (bits & 1024) {
                    mu = (isolevel - value3) / (value7 - value3);
                    vlist[10] = points[pxy].clone().lerp(points[pxyz], mu);
                }
                if (bits & 2048) {
                    mu = (isolevel - value2) / (value6 - value2);
                    vlist[11] = points[py].clone().lerp(points[pyz], mu);
                }
                let i = 0;
                cubeindex <<= 4;
                while (three__WEBPACK_IMPORTED_MODULE_0__.triTable[cubeindex + i] != -1) {
                    const index1 = three__WEBPACK_IMPORTED_MODULE_0__.triTable[cubeindex + i];
                    const index2 = three__WEBPACK_IMPORTED_MODULE_0__.triTable[cubeindex + i + 1];
                    const index3 = three__WEBPACK_IMPORTED_MODULE_0__.triTable[cubeindex + i + 2];
                    geometry.vertices.push(vlist[index1].clone());
                    geometry.vertices.push(vlist[index2].clone());
                    geometry.vertices.push(vlist[index3].clone());
                    const face = new three__WEBPACK_IMPORTED_MODULE_0__.Face3(vertexIndex, vertexIndex + 1, vertexIndex + 2);
                    geometry.faces.push(face);
                    geometry.faceVertexUvs[0].push([new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(0, 0), new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(0, 1), new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(1, 1)]);
                    vertexIndex += 3;
                    i += 3;
                }
            }
    geometry.computeCentroids();
    geometry.computeFaceNormals();
    geometry.computeVertexNormals();
    return geometry;
}
function intersectSurfacesImplicit(f, g, df, dg, q0, samples, step) {
    const points = [];
    let p = q0;
    while (points.length < samples) {
        const tangent = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3().crossVectors(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3().fromArray(df(p.x, p.y, p.z)), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3().fromArray(dg(p.x, p.y, p.z))).normalize();
        points.push(curvePoint(f, g, df, dg, p.clone().add(tangent.multiplyScalar(step))));
        p = points[points.length - 1];
    }
    return points;
}
function curvePoint(f, g, df, dg, q0) {
    const epsilon = 0.1;
    let qk = q0, diff = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
    do {
        const dfqk = df(qk.x, qk.y, qk.z), dgqk = dg(qk.x, qk.y, qk.z), jacT = [dfqk, dgqk];
        const matrix = [[0, 0], [0, 0]];
        for (let i = 0; i < 2; ++i)
            for (let j = 0; j < 2; ++j)
                for (let k = 0; k < 3; ++k) {
                    matrix[i][j] += jacT[i][k] * jacT[j][k];
                }
        const [alpha, beta] = solve22Matrix(matrix, [
            -f(qk.x, qk.y, qk.z),
            -g(qk.x, qk.y, qk.z)
        ]);
        diff =
            new three__WEBPACK_IMPORTED_MODULE_0__.Vector3().fromArray(dfqk).multiplyScalar(alpha).add(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3().fromArray(dgqk).multiplyScalar(beta));
        qk = qk.clone().add(diff);
    } while (diff.length() >= epsilon);
    return qk;
}
function solve22Matrix([[a, b], [c, d]], [y1, y2]) {
    return [
        (y1 * d - b * y2) / (a * d - b * c),
        (a * y2 - y1 * c) / (a * d - b * c)
    ];
}
function arrowOrient(pointX, pointY) {
    const direction = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3().subVectors(pointY, pointX);
    const orientation = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();
    orientation.lookAt(pointX, pointY, new three__WEBPACK_IMPORTED_MODULE_0__.Object3D().up);
    orientation.multiply(new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4().set(1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1));
    const position = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3((pointY.x + pointX.x) / 2, (pointY.y + pointX.y) / 2, (pointY.z + pointX.z) / 2);
    return [orientation, position];
}


/***/ }),

/***/ "./lib/r3f.ts":
/*!********************!*\
  !*** ./lib/r3f.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "three/examples/jsm/controls/OrbitControls");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-three-fiber */ "react-three-fiber");
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_three_fiber__WEBPACK_IMPORTED_MODULE_1__);


(0,react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.extend)({ OrbitControls: three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__.OrbitControls });


/***/ }),

/***/ "./lib/rebind-arrow-keys.ts":
/*!**********************************!*\
  !*** ./lib/rebind-arrow-keys.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((player) => {
    const { keymap, script } = player;
    for (const h of keymap.getHandlers("ArrowLeft"))
        keymap.unbind("ArrowLeft", h);
    for (const h of keymap.getHandlers("ArrowRight"))
        keymap.unbind("ArrowRight", h);
    keymap.bind("ArrowLeft", script.back);
    keymap.bind("ArrowRight", script.forward);
});


/***/ }),

/***/ "./lib/seekonload.ts":
/*!***************************!*\
  !*** ./lib/seekonload.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_0__);

const { timeRegexp } = ractive_player__WEBPACK_IMPORTED_MODULE_0__.Utils.time;
const rgx = new RegExp("(?:^\\?|&)t=(" +
    timeRegexp.toString().replace(/^\/\^|\$\/$/g, "") +
    ")");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((playback) => {
    const $_ = parent.location.search.match(rgx);
    if ($_) {
        playback.seek($_[1]);
    }
});


/***/ }),

/***/ "./lib/svg-extrude.ts":
/*!****************************!*\
  !*** ./lib/svg-extrude.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ extrudeSvg
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three_examples_jsm_loaders_SVGLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/SVGLoader */ "three/examples/jsm/loaders/SVGLoader");
/* harmony import */ var three_examples_jsm_loaders_SVGLoader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three_examples_jsm_loaders_SVGLoader__WEBPACK_IMPORTED_MODULE_1__);


function extrudeSvg(path) {
    return new Promise((resolve, reject) => {
        const loader = new (three_examples_jsm_loaders_SVGLoader__WEBPACK_IMPORTED_MODULE_1___default())();
        loader.load(path, data => {
            const paths = data.paths;
            const group = new three__WEBPACK_IMPORTED_MODULE_0__.Group();
            group.scale.multiplyScalar(0.02);
            group.scale.y *= -1;
            for (const path of paths) {
                const fillColor = path.userData.style.fill;
                if (fillColor !== undefined && fillColor !== "none") {
                    const material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({
                        color: new three__WEBPACK_IMPORTED_MODULE_0__.Color().setStyle(fillColor),
                        opacity: path.userData.style.fillOpacity,
                        transparent: path.userData.style.fillOpacity < 1,
                        side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide,
                        depthWrite: false
                    });
                    const shapes = path.toShapes(true);
                    for (const shape of shapes) {
                        const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.ExtrudeBufferGeometry(shape, { depth: 0.2, bevelEnabled: false });
                        const mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material);
                        group.add(mesh);
                    }
                }
                const strokeColor = path.userData.style.stroke;
                if (strokeColor !== undefined && strokeColor !== "none") {
                    const material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({
                        color: new three__WEBPACK_IMPORTED_MODULE_0__.Color().setStyle(strokeColor),
                        opacity: path.userData.style.strokeOpacity,
                        transparent: path.userData.style.strokeOpacity < 1,
                        side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide,
                        depthWrite: false
                    });
                    for (const subPath of path.subPaths) {
                        const geometry = three_examples_jsm_loaders_SVGLoader__WEBPACK_IMPORTED_MODULE_1___default().pointsToStroke(subPath.getPoints(), path.userData.style);
                        if (geometry) {
                            const mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material);
                            group.add(mesh);
                        }
                    }
                }
            }
            resolve(group);
        });
    });
}


/***/ }),

/***/ "./lib/svg-utils.ts":
/*!**************************!*\
  !*** ./lib/svg-utils.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "graph": () => /* binding */ graph,
/* harmony export */   "screenToSVG": () => /* binding */ screenToSVG,
/* harmony export */   "screenToSVGVector": () => /* binding */ screenToSVGVector
/* harmony export */ });
function graph(f, a = 0, b = 1, sampling = 100) {
    const instructions = new Array(sampling + 1)
        .fill(null)
        .map((_, n) => {
        const [x, y] = f(a + (n / sampling) * (b - a));
        return (n === 0) ? `M ${x} ${y}` : `L ${x} ${y}`;
    });
    return instructions.join(" ");
}
function screenToSVG(elt, x, y) {
    let graphicsElt = elt;
    while (!(graphicsElt instanceof SVGGraphicsElement))
        graphicsElt = graphicsElt.parentNode;
    const svgElt = (elt instanceof SVGSVGElement ? elt : elt.ownerSVGElement);
    const transform = graphicsElt.getScreenCTM().inverse();
    let pt = svgElt.createSVGPoint();
    pt.x = x, pt.y = y;
    pt = pt.matrixTransform(transform);
    return [pt.x, pt.y];
}
function screenToSVGVector(svg, dx, dy) {
    const rect = svg.getBoundingClientRect(), viewBox = svg.viewBox.baseVal, aspectX = rect.width / viewBox.width, aspectY = rect.height / viewBox.height, svgDx = dx / aspectX, svgDy = dy / aspectY;
    return [svgDx, svgDy];
}


/***/ }),

/***/ "./node_modules/bezier-easing/src/index.js":
/*!*************************************************!*\
  !*** ./node_modules/bezier-easing/src/index.js ***!
  \*************************************************/
/***/ ((module) => {


var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
var float32ArraySupported = typeof Float32Array === 'function';
function A(aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
function B(aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
function C(aA1) { return 3.0 * aA1; }
function calcBezier(aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }
function getSlope(aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }
function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX, currentT, i = 0;
    do {
        currentT = aA + (aB - aA) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0.0) {
            aB = currentT;
        }
        else {
            aA = currentT;
        }
    } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
    return currentT;
}
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
        var currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0.0) {
            return aGuessT;
        }
        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
}
function LinearEasing(x) {
    return x;
}
module.exports = function bezier(mX1, mY1, mX2, mY2) {
    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
        throw new Error('bezier x values must be in [0, 1] range');
    }
    if (mX1 === mY1 && mX2 === mY2) {
        return LinearEasing;
    }
    var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
    for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
    function getTForX(aX) {
        var intervalStart = 0.0;
        var currentSample = 1;
        var lastSample = kSplineTableSize - 1;
        for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += kSampleStepSize;
        }
        --currentSample;
        var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        var guessForT = intervalStart + dist * kSampleStepSize;
        var initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= NEWTON_MIN_SLOPE) {
            return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        }
        else if (initialSlope === 0.0) {
            return guessForT;
        }
        else {
            return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
    }
    return function BezierEasing(x) {
        if (x === 0) {
            return 0;
        }
        if (x === 1) {
            return 1;
        }
        return calcBezier(getTForX(x), mY1, mY2);
    };
};


/***/ }),

/***/ "./node_modules/rp-katex/rp-katex.js":
/*!*******************************************!*\
  !*** ./node_modules/rp-katex/rp-katex.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


!function (e, t) {  true ? module.exports = t(__webpack_require__(/*! react */ "react"), __webpack_require__(/*! ractive-player */ "ractive-player")) : 0; }(self, (function (e, t) { return (() => {
    "use strict";
    var r = { 121: (e, t, r) => { r.r(t), r.d(t, { KTX: () => i, KTXBlocking: () => i, KTXNonBlocking: () => l, KaTeXReady: () => u }); var n = r(888), o = r(576), c = function (e, t) { var r = {}; for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]); if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
        } return r; }; const s = new Promise((e => { const t = document.getElementById("js-async-katex"); t && (window.hasOwnProperty("katex") ? e(katex) : t.addEventListener("load", (() => e(katex)))); })), a = new Promise((e => { const t = {}, r = Array.from(document.querySelectorAll("head > script[type='math/tex']")); return Promise.all(r.map((e => fetch(e.src).then((t => { if (t.ok)
            return t.text(); throw new Error(`${t.status} ${t.statusText}: ${e.src}`); })).then((e => { Object.assign(t, function (e) { const t = {}, r = /\\(?:ktx)?newcommand\{(.+?)\}(?:\[\d+\])?\{/g; let n; for (; n = r.exec(e);) {
            let r = "";
            const o = n[1];
            let c = 1;
            for (let t = n.index + n[0].length; c > 0 && t < e.length; ++t) {
                const n = e[t];
                if ("{" === n)
                    c++;
                else if ("}" === n) {
                    if (c--, 0 === c)
                        break;
                }
                else if ("\\" === n) {
                    r += e.slice(t, t + 2), ++t;
                    continue;
                }
                r += n;
            }
            t[o] = r;
        } return t; }(e)); }))))).then((() => e(t))); })), u = Promise.all([s, a]), l = n.forwardRef((function (e, t) { const r = n.useRef(), { children: o, display: s } = e, a = c(e, ["children", "display"]), l = (0, n.useRef)(), i = (0, n.useMemo)((() => new Promise((e => { l.current = e; }))), []); return (0, n.useImperativeHandle)(t, (() => ({ domElement: r.current, ready: i }))), (0, n.useEffect)((() => { u.then((([e, t]) => { e.render(o.toString(), r.current, { displayMode: !!s, macros: t, strict: "ignore", throwOnError: !1, trust: !0 }), l.current(); })); }), [o]), s && (a.style || (a.style = {}), a.style.display = "block"), n.createElement("span", Object.assign({}, a, { ref: r })); })); const i = (0, n.forwardRef)((function (e, t) { const r = (0, o.usePlayer)(), c = (0, n.useRef)(); t && (t.current = c.current); const s = (0, n.useRef)(null); return (0, n.useMemo)((() => { const e = new Promise((e => { s.current = e; })); r.obstruct("canplay", e), r.obstruct("canplaythrough", e); }), []), (0, n.useEffect)((() => { t && (t.current = c.current), c.current.ready.then((() => s.current())); }), []), n.createElement(l, Object.assign({ ref: c }, e)); })); }, 576: e => { e.exports = t; }, 888: t => { t.exports = e; } }, n = {};
    function o(e) { if (n[e])
        return n[e].exports; var t = n[e] = { exports: {} }; return r[e](t, t.exports, o), t.exports; }
    return o.n = e => { var t = e && e.__esModule ? () => e.default : () => e; return o.d(t, { a: t }), t; }, o.d = (e, t) => { for (var r in t)
        o.o(t, r) && !o.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] }); }, o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), o.r = e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, o(121);
})(); }));


/***/ }),

/***/ "./node_modules/rp-mathjax/rp-mathjax.js":
/*!***********************************************!*\
  !*** ./node_modules/rp-mathjax/rp-mathjax.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


!function (e, t) {  true ? module.exports = t(__webpack_require__(/*! react */ "react"), __webpack_require__(/*! ractive-player */ "ractive-player")) : 0; }(self, (function (e, t) { return (() => {
    "use strict";
    var n = { 187: e => { var t, n = "object" == typeof Reflect ? Reflect : null, r = n && "function" == typeof n.apply ? n.apply : function (e, t, n) { return Function.prototype.apply.call(e, t, n); }; t = n && "function" == typeof n.ownKeys ? n.ownKeys : Object.getOwnPropertySymbols ? function (e) { return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e)); } : function (e) { return Object.getOwnPropertyNames(e); }; var s = Number.isNaN || function (e) { return e != e; }; function o() { o.init.call(this); } e.exports = o, e.exports.once = function (e, t) { return new Promise((function (n, r) { function s() { void 0 !== o && e.removeListener("error", o), n([].slice.call(arguments)); } var o; "error" !== t && (o = function (n) { e.removeListener(t, s), r(n); }, e.once("error", o)), e.once(t, s); })); }, o.EventEmitter = o, o.prototype._events = void 0, o.prototype._eventsCount = 0, o.prototype._maxListeners = void 0; var i = 10; function a(e) { if ("function" != typeof e)
            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e); } function u(e) { return void 0 === e._maxListeners ? o.defaultMaxListeners : e._maxListeners; } function c(e, t, n, r) { var s, o, i, c; if (a(n), void 0 === (o = e._events) ? (o = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== o.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), o = e._events), i = o[t]), void 0 === i)
            i = o[t] = n, ++e._eventsCount;
        else if ("function" == typeof i ? i = o[t] = r ? [n, i] : [i, n] : r ? i.unshift(n) : i.push(n), (s = u(e)) > 0 && i.length > s && !i.warned) {
            i.warned = !0;
            var l = new Error("Possible EventEmitter memory leak detected. " + i.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            l.name = "MaxListenersExceededWarning", l.emitter = e, l.type = t, l.count = i.length, c = l, console && console.warn && console.warn(c);
        } return e; } function l() { if (!this.fired)
            return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments); } function h(e, t, n) { var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n }, s = l.bind(r); return s.listener = n, r.wrapFn = s, s; } function p(e, t, n) { var r = e._events; if (void 0 === r)
            return []; var s = r[t]; return void 0 === s ? [] : "function" == typeof s ? n ? [s.listener || s] : [s] : n ? function (e) { for (var t = new Array(e.length), n = 0; n < t.length; ++n)
            t[n] = e[n].listener || e[n]; return t; }(s) : d(s, s.length); } function f(e) { var t = this._events; if (void 0 !== t) {
            var n = t[e];
            if ("function" == typeof n)
                return 1;
            if (void 0 !== n)
                return n.length;
        } return 0; } function d(e, t) { for (var n = new Array(t), r = 0; r < t; ++r)
            n[r] = e[r]; return n; } Object.defineProperty(o, "defaultMaxListeners", { enumerable: !0, get: function () { return i; }, set: function (e) { if ("number" != typeof e || e < 0 || s(e))
                throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + "."); i = e; } }), o.init = function () { void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0; }, o.prototype.setMaxListeners = function (e) { if ("number" != typeof e || e < 0 || s(e))
            throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + "."); return this._maxListeners = e, this; }, o.prototype.getMaxListeners = function () { return u(this); }, o.prototype.emit = function (e) { for (var t = [], n = 1; n < arguments.length; n++)
            t.push(arguments[n]); var s = "error" === e, o = this._events; if (void 0 !== o)
            s = s && void 0 === o.error;
        else if (!s)
            return !1; if (s) {
            var i;
            if (t.length > 0 && (i = t[0]), i instanceof Error)
                throw i;
            var a = new Error("Unhandled error." + (i ? " (" + i.message + ")" : ""));
            throw a.context = i, a;
        } var u = o[e]; if (void 0 === u)
            return !1; if ("function" == typeof u)
            r(u, this, t);
        else {
            var c = u.length, l = d(u, c);
            for (n = 0; n < c; ++n)
                r(l[n], this, t);
        } return !0; }, o.prototype.addListener = function (e, t) { return c(this, e, t, !1); }, o.prototype.on = o.prototype.addListener, o.prototype.prependListener = function (e, t) { return c(this, e, t, !0); }, o.prototype.once = function (e, t) { return a(t), this.on(e, h(this, e, t)), this; }, o.prototype.prependOnceListener = function (e, t) { return a(t), this.prependListener(e, h(this, e, t)), this; }, o.prototype.removeListener = function (e, t) { var n, r, s, o, i; if (a(t), void 0 === (r = this._events))
            return this; if (void 0 === (n = r[e]))
            return this; if (n === t || n.listener === t)
            0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
        else if ("function" != typeof n) {
            for (s = -1, o = n.length - 1; o >= 0; o--)
                if (n[o] === t || n[o].listener === t) {
                    i = n[o].listener, s = o;
                    break;
                }
            if (s < 0)
                return this;
            0 === s ? n.shift() : function (e, t) { for (; t + 1 < e.length; t++)
                e[t] = e[t + 1]; e.pop(); }(n, s), 1 === n.length && (r[e] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", e, i || t);
        } return this; }, o.prototype.off = o.prototype.removeListener, o.prototype.removeAllListeners = function (e) { var t, n, r; if (void 0 === (n = this._events))
            return this; if (void 0 === n.removeListener)
            return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this; if (0 === arguments.length) {
            var s, o = Object.keys(n);
            for (r = 0; r < o.length; ++r)
                "removeListener" !== (s = o[r]) && this.removeAllListeners(s);
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
        } if ("function" == typeof (t = n[e]))
            this.removeListener(e, t);
        else if (void 0 !== t)
            for (r = t.length - 1; r >= 0; r--)
                this.removeListener(e, t[r]); return this; }, o.prototype.listeners = function (e) { return p(this, e, !0); }, o.prototype.rawListeners = function (e) { return p(this, e, !1); }, o.listenerCount = function (e, t) { return "function" == typeof e.listenerCount ? e.listenerCount(t) : f.call(e, t); }, o.prototype.listenerCount = f, o.prototype.eventNames = function () { return this._eventsCount > 0 ? t(this._events) : []; }; }, 846: (e, t, n) => { n.r(t), n.d(t, { MJX: () => y, MJXBlocking: () => y, MJXNonBlocking: () => a, MJXText: () => m, MJXTextBlocking: () => m, MJXTextNonBlocking: () => u, MathJaxReady: () => i, RenderGroup: () => c, recursiveMap: () => p, typeset: () => l }); var r = n(888), s = n(187), o = function (e, t) { var n = {}; for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]); if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var s = 0;
            for (r = Object.getOwnPropertySymbols(e); s < r.length; s++)
                t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]]);
        } return n; }; const i = new Promise(((e, t) => { const n = document.getElementById("js-async-mathjax"); n && (window.hasOwnProperty("MathJax") ? MathJax.Hub.Register.StartupHook("LoadHead Ready", (() => e(MathJax))) : n.addEventListener("load", (() => MathJax.Hub.Register.StartupHook("LoadHead Ready", (() => e(MathJax)))))); })); class a extends r.Component {
            constructor(e) { super(e), this.hub = new s, this.hub.setMaxListeners(0), this.ready = new Promise(((e, t) => this.resolveReady = e)); for (const t of ["Rerender", "Text", "Typeset"])
                this[t] = this[t].bind(this); }
            async componentDidMount() { await i, this.Typeset().then((() => this.jax = MathJax.Hub.getAllJax(this.domElement)[0])).then(this.resolveReady), this.props.resize && (window.addEventListener("resize", this.Rerender), function (e) { for (const t of ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"])
                document.addEventListener(t, e); }(this.Rerender)); }
            shouldComponentUpdate(e) { const t = this.props.children instanceof Array ? this.props.children.join("") : this.props.children, n = e.children instanceof Array ? e.children.join("") : e.children; if (this.jax && t !== n && this.Text(e.children), this.props.className !== e.className) {
                const t = this.props.className ? this.props.className.split(" ") : [], n = e.className ? e.className.split(" ") : [], r = n.filter((e => !t.includes(e))), s = t.filter((e => !n.includes(e)));
                for (const e of s)
                    this.domElement.classList.remove(e);
                for (const e of r)
                    this.domElement.classList.add(e);
            } return JSON.stringify(this.props.style) !== JSON.stringify(e.style) && (Object.keys(this.props.style || {}).filter((t => !(e.style || {}).hasOwnProperty(t))).forEach((e => this.props.style[e] = null)), Object.assign(this.domElement.style, e.style)), !1; }
            Rerender() { MathJax.Hub.Queue(["Rerender", MathJax.Hub, this.domElement]), MathJax.Hub.Queue((() => this.hub.emit("Rerender"))); }
            Text(e) { return new Promise(((t, n) => { const r = []; if (this.props.renderer) {
                const t = MathJax.Hub.config.menuSettings.renderer;
                r.push(["setRenderer", MathJax.Hub, this.props.renderer]), r.push(["Text", this.jax, e]), r.push(["setRenderer", MathJax.Hub, t]);
            }
            else
                r.push(["Text", this.jax, e]); r.push((() => this.hub.emit("Text"))), r.push(t), MathJax.Hub.Queue(...r); })); }
            Typeset() { return new Promise(((e, t) => { const n = []; if (this.props.renderer) {
                const e = MathJax.Hub.config.menuSettings.renderer;
                n.push(["setRenderer", MathJax.Hub, this.props.renderer]), n.push(["Typeset", MathJax.Hub, this.domElement]), n.push(["setRenderer", MathJax.Hub, e]);
            }
            else
                n.push(["Typeset", MathJax.Hub, this.domElement]); n.push((() => this.hub.emit("Typeset"))), n.push(e), MathJax.Hub.Queue(...n); })); }
            render() { const e = this.props, { children: t, display: n, resize: s } = e, i = o(e, ["children", "display", "resize"]), [a, u] = n ? ["\\[", "\\]"] : ["\\(", "\\)"]; return n && (i.style || (i.style = {}), i.style.display = "block"), r.createElement("span", Object.assign({}, i, { ref: e => this.domElement = e }), a + t + u); }
        } a.defaultProps = { display: !1, resize: !1 }; class u extends r.Component {
            constructor(e) { super(e), this.ready = new Promise(((e, t) => this.resolveReady = e)), this.ref = r.createRef(); }
            async componentDidMount() { await i, l(this.ref.current).then(this.resolveReady); }
            render() { const e = this.props, { tagName: t = "p", children: n } = e, s = o(e, ["tagName", "children"]); return r.createElement(t, Object.assign(Object.assign({}, s), { ref: this.ref }), n); }
        } class c extends r.Component {
            componentDidMount() { this.ready = Promise.all(this.promises).then((() => { })); }
            render() { return this.promises = [], p(this.props.children, (e => { if (function (e) { return r.isValidElement(e) && "function" == typeof e.type && e.type.prototype instanceof MJX; }(e)) {
                const t = e.ref;
                return r.cloneElement(e, { ref: e => { e && (this.promises.push(e.ready), "function" == typeof t ? t(e) : t && "object" == typeof t && (t.current = e)); } });
            } return e; })); }
        } function l(e) { return new Promise((async (t, n) => { await i, MathJax.Hub.Queue(["Typeset", MathJax.Hub, e]), MathJax.Hub.Queue(t); })); } function h(e) { return e.type === e.STYLE_RULE; } function p(e, t) { return r.Children.map(e, (e => r.isValidElement(e) ? ("children" in e.props && (e = r.cloneElement(e, { children: p(e.props.children, t) })), t(e)) : e)); } i.then((function () { for (const e of Array.from(document.querySelectorAll("style"))) {
            if (!e.textContent.match(/.MathJax:focus/))
                continue;
            const t = e.sheet;
            for (let e = 0; e < t.cssRules.length; ++e) {
                const n = t.cssRules[e];
                if (h(n) && n.selectorText.match(".MathJax:focus")) {
                    t.deleteRule(e);
                    break;
                }
            }
        } })); var f = n(576); const { attachClickHandler: d } = f.Utils.mobile; class y extends a {
            async componentDidMount() { const e = this.context; e.obstruct("canplay", this.ready), e.obstruct("canplaythrough", this.ready), super.componentDidMount(); }
        } y.contextType = f.Player.Context; class m extends u {
            async componentDidMount() { const e = this.context; e.obstruct("canplay", this.ready), e.obstruct("canplaythrough", this.ready), super.componentDidMount(); }
        } m.contextType = f.Player.Context; }, 576: e => { e.exports = t; }, 888: t => { t.exports = e; } }, r = {};
    function s(e) { if (r[e])
        return r[e].exports; var t = r[e] = { exports: {} }; return n[e](t, t.exports, s), t.exports; }
    return s.d = (e, t) => { for (var n in t)
        s.o(t, n) && !s.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] }); }, s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), s.r = e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, s(846);
})(); }));


/***/ }),

/***/ "./node_modules/rp-xyjax/rp-xyjax.js":
/*!*******************************************!*\
  !*** ./node_modules/rp-xyjax/rp-xyjax.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


!function (e, t) {  true ? module.exports = t(__webpack_require__(/*! rp-mathjax */ "./node_modules/rp-mathjax/rp-mathjax.js"), __webpack_require__(/*! react */ "react"), __webpack_require__(/*! ractive-player */ "ractive-player")) : 0; }(self, (function (e, t, r) { return (() => {
    "use strict";
    var n = { 607: (e, t, r) => { r.r(t), r.d(t, { lerp: () => s, a$opacity: () => u, useAnimateArrows: () => c, useMathAnimation: () => p, useAnimation: () => f, useLazy: () => h, extendXY: () => d, xyEncodeColor: () => y, xyDecodeColor: () => g, tob52: () => m, fromb52: () => S }); var n = r(138), o = r(888), i = r(576); const { animate: a } = i.Utils.animation; function s(e, t, r) { return e + r * (t - e); } function u(e, t) { for (const r of t)
            r.style.opacity = e.toString(); } function c(e, t) { const { playback: r } = (0, i.usePlayer)(), n = (0, o.useRef)(), a = (0, o.useRef)({}), c = (0, o.useCallback)((e => { if (!n.current)
            return; const { x1: t, x2: r, y1: o, y2: i } = a.current; 0 === e ? n.current.style.opacity = "0" : (n.current.style.opacity = "1", n.current.setAttribute("x2", s(t, r, e).toString()), n.current.setAttribute("y2", s(o, i, e).toString())); }), []); (0, o.useEffect)((() => { const t = () => { if (!e.ref.current)
            return; const t = a.current.hasOwnProperty("y2"); n.current = e.ref.current.domElement.querySelector(e.tail); const o = parseFloat(n.current.getAttribute("x1")), i = parseFloat(n.current.getAttribute("y1")); if (t)
            a.current.x2 *= parseFloat(n.current.getAttribute("x1")) / a.current.x1, a.current.y2 *= parseFloat(n.current.getAttribute("y1")) / a.current.y1;
        else
            for (const e of ["x2", "y2"])
                a.current[e] = parseFloat(n.current.getAttribute(e)); a.current.x1 = o, a.current.y1 = i, t && c(e.tailFn(r.currentTime)); }; return e.ref.current.ready.then(t), e.ref.current.hub.on("Rerender", t), () => { e.ref.current.hub.off("Rerender", t); }; }), t), h(e.tailFn, c, t), p({ ref: e.ref, selector: e.head, fn: e.headFn, cb: u }, t), p({ ref: e.ref, selector: e.label, fn: e.labelFn, cb: u }, t); } function p(e, t) { const { playback: r } = (0, i.usePlayer)(), n = (0, o.useRef)(), a = (0, o.useRef)([]); (0, o.useEffect)((() => { let t = !1; const n = () => { e.ref.current && (a.current = Array.from(e.ref.current.domElement.querySelectorAll(e.selector)), t ? e.cb(e.fn(r.currentTime), a.current) : t = !0); }; return e.ref.current.ready.then(n), e.ref.current.hub.on("Rerender", n), () => { e.ref.current.hub.off("Rerender", n); }; }), t), (0, i.useTimeUpdate)((t => { const r = e.fn(t); n.current !== r && (n.current = r, e.cb(r, a.current)); }), t); } function f(e, t) { const { script: r } = (0, i.usePlayer)(); e.startTime = r.parseStart(e.startTime); const n = a(e); (0, i.useTimeUpdate)((e => { t(n(e)); })); } function h(e, t, r) { const n = (0, o.useRef)(); (0, i.useTimeUpdate)((r => { const o = e(r); n.current !== o && (n.current = o, t(o)); }), r); } function d() { n.MathJaxReady.then((e => { e.Hub.Register.StartupHook("Device-Independent Xy-pic Ready", (function () { const { xypic: t } = e.Extension, { AST: r, memoize: n } = t; r.Modifier.Shape.SetColor = r.Modifier.Subclass({ preprocess() { }, modifyShape(e, r, n, o) { return r = this.proceedModifyShape(e, r, n), t.Shape.ChangeColorShape(g(o), r); } }), t.repositories.modifierRepository.put("color", r.Modifier.Shape.SetColor()), t.Graphics.SVG.Augment({ createChangeDataGroup: function (e) { return t.Graphics.SVG.ChangeDataGroup(this, e); } }), t.Graphics.SVG.ChangeDataGroup = t.Graphics.SVG.Subclass({ Init: function (e, t) { this.parent = e, this.drawArea = this.parent.createSVGElement("g"), Object.assign(this.drawArea.dataset, JSON.parse("{" + S(t) + "}")), n(this, "getOrigin"); }, remove: function () { this.drawArea.parentNode.removeChild(this.drawArea); }, extendBoundingBox: function (e) { this.parent.extendBoundingBox(e); }, getOrigin: function () { return this.parent.getOrigin(); } }), t.Shape.ChangeDataShape = t.Shape.Subclass({ Init: function (e, t) { this.data = e, this.shape = t, n(this, "getBoundingBox"); }, draw: function (e) { const t = e.createChangeDataGroup(this.data); this.shape.draw(t); }, getBoundingBox: function () { return this.shape.getBoundingBox(); }, toString: function () { return this.shape + ", data:" + this.data; } }), r.Modifier.Shape.SetData = r.Modifier.Subclass({ preprocess() { }, modifyShape(e, r, n, o) { return r = this.proceedModifyShape(e, r, n), t.Shape.ChangeDataShape(o, r); } }), t.repositories.modifierRepository.put("data", r.Modifier.Shape.SetData()), r.Modifier.Shape.Alphabets.Augment({ preprocess: function (e, r) { if (this.alphabets.startsWith("color"))
                return t.repositories.modifierRepository.get("color").preprocess(e, r); if (this.alphabets.startsWith("data"))
                return t.repositories.modifierRepository.get("data").preprocess(e, r); const n = t.repositories.modifierRepository.get(this.alphabets); return void 0 !== n ? n.preprocess(e, r) : void 0; }, modifyShape: function (e, r, n) { if (this.alphabets.startsWith("color"))
                return t.repositories.modifierRepository.get("color").modifyShape(e, r, n, this.alphabets.substr("color".length)); if (this.alphabets.startsWith("data"))
                return t.repositories.modifierRepository.get("data").modifyShape(e, r, n, this.alphabets.substr("data".length)); const o = t.repositories.modifierRepository.get(this.alphabets); return void 0 !== o ? o.modifyShape(e, r, n) : void 0; } }); })); })); } const l = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; function y(e) { return e.toUpperCase().replace(/[#0-9]/g, (e => "#" === e ? "" : String.fromCharCode("G".charCodeAt(0) + parseInt(e)))); } function g(e) { return "#" + e.replace(/[G-P]/g, (e => (e.charCodeAt(0) - "G".charCodeAt(0)).toString())); } function m(e) { const t = []; for (let r = 0; r < e.length; ++r)
            t[r] = e.charCodeAt(r); return function (e, t) { let r, n, o, i, a = [], s = ""; for (r in e)
            for (n = 0, o = e[r], s += o || s.length ^ r ? "" : 1; n in a || o;)
                i = a[n], i = i ? 256 * i + o : o, o = i / t.length | 0, a[n] = i % t.length, n++; for (; n--;)
            s += t[a[n]]; return s; }(new Uint8Array(t), l); } function S(e) { const t = function (e, t) { let r, n, o, i, a = [], s = []; for (r in e) {
            if (n = 0, o = t.indexOf(e[r]), o < 0)
                return;
            for (o || s.length ^ r || s.push(0); n in a || o;)
                i = a[n], i = i ? i * t.length + o : o, o = i >> 8, a[n] = i % 256, n++;
        } for (; n--;)
            s.push(a[n]); return new Uint8Array(s); }(e, l); let r = ""; for (let n = 0; n < t.length; ++n)
            r += String.fromCharCode(t[n]); return r; } }, 576: e => { e.exports = r; }, 888: e => { e.exports = t; }, 138: t => { t.exports = e; } }, o = {};
    function i(e) { if (o[e])
        return o[e].exports; var t = o[e] = { exports: {} }; return n[e](t, t.exports, i), t.exports; }
    return i.n = e => { var t = e && e.__esModule ? () => e.default : () => e; return i.d(t, { a: t }), t; }, i.d = (e, t) => { for (var r in t)
        i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] }); }, i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), i.r = e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, i(607);
})(); }));


/***/ }),

/***/ "./src/3d/Arrow.tsx":
/*!**************************!*\
  !*** ./src/3d/Arrow.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Arrow
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-three-fiber */ "react-three-fiber");
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_three_fiber__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_svg_extrude__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lib/svg-extrude */ "./lib/svg-extrude.ts");
/* harmony import */ var _media_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../media-url */ "./src/media-url.ts");






function Arrow() {
    const { scene } = (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useThree)();
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        (0,_lib_svg_extrude__WEBPACK_IMPORTED_MODULE_4__.default)(`${_media_url__WEBPACK_IMPORTED_MODULE_5__.MEDIA_URL}/img/arrow.svg`).then(group => {
            group.rotation.set(Math.PI / 2, 0, 0);
            const box = new three__WEBPACK_IMPORTED_MODULE_1__.Box3().setFromObject(group);
            const size = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3();
            box.getSize(size);
            group.position.set(-size.x / 2, 0, size.z);
            ref.current = group;
            group.visible = (script.markerIndex >= arrowIndex);
            scene.add(group);
        });
    }, []);
    const { script } = (0,ractive_player__WEBPACK_IMPORTED_MODULE_3__.usePlayer)();
    const arrowIndex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => script.markerNumberOf("3d/svg"), []);
    (0,ractive_player__WEBPACK_IMPORTED_MODULE_3__.useMarkerUpdate)(() => {
        if (!ref.current)
            return;
        ref.current.visible = (script.markerIndex >= arrowIndex);
    }, []);
    return null;
}


/***/ }),

/***/ "./src/3d/Cylinder.tsx":
/*!*****************************!*\
  !*** ./src/3d/Cylinder.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Cylinder
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_ThreeFiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/ThreeFiber */ "./lib/ThreeFiber.tsx");





const { constrain } = ractive_player__WEBPACK_IMPORTED_MODULE_2__.Utils.misc, { anyHover } = ractive_player__WEBPACK_IMPORTED_MODULE_2__.Utils.mobile;

const TWOPI = 2 * Math.PI;
function Cylinder() {
    const { script } = (0,ractive_player__WEBPACK_IMPORTED_MODULE_2__.usePlayer)();
    const radius = 3;
    const height = 8;
    const cylinder = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const slider = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const fat = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const api = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_lib_ThreeFiber__WEBPACK_IMPORTED_MODULE_3__.R3FContext);
    const plane = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new three__WEBPACK_IMPORTED_MODULE_1__.Plane());
    const move = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e) => {
        const pos = api.screenToScene(e.clientX, e.clientY, plane.current);
        const h = constrain(-height / 2, pos.z, height / 2);
        slider.current.position.setZ(h);
        if (!anyHover)
            fat.current.position.setZ(h);
    }, []);
    const down = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e) => {
        const int = e.intersections.find(_ => _.object.name === "cylinder");
        if (!int)
            return;
        const normalMatrix = new three__WEBPACK_IMPORTED_MODULE_1__.Matrix3().getNormalMatrix(int.object.matrixWorld);
        const normal = int.face.normal;
        normal.applyMatrix3(normalMatrix).normalize();
        plane.current.setFromNormalAndCoplanarPoint(normal, int.point).normalize();
    }, []);
    const events = (0,_lib_ThreeFiber__WEBPACK_IMPORTED_MODULE_3__.useDraggable)(move, down);
    const index = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => script.markerNumberOf("3d/drag"), []);
    (0,ractive_player__WEBPACK_IMPORTED_MODULE_2__.useMarkerUpdate)(() => {
        slider.current.visible = script.markerIndex >= index;
        if (fat.current) {
            fat.current.visible = script.markerIndex >= index;
        }
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("mesh", Object.assign({ name: "cylinder", ref: cylinder, position: [-6, 0, 0], rotation: [TWOPI / 4, 0, 0] }, _lib_ThreeFiber__WEBPACK_IMPORTED_MODULE_3__.intercept),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("cylinderBufferGeometry", { args: [radius, radius, height, 32, 1, true] }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("meshPhongMaterial", { color: 0xAE81FF, side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide, clipShadows: true })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("mesh", Object.assign({ name: "slider", position: [-6, 0, 0], ref: slider }, events, { visible: script.markerIndex >= index }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("torusBufferGeometry", { args: [radius, 0.1, 8, 32] }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("meshBasicMaterial", { color: 0xFFAA00 })),
        anyHover ? null : react__WEBPACK_IMPORTED_MODULE_0__.createElement("mesh", Object.assign({ name: "fat-slider", position: [-6, 0, 0], ref: fat }, events, { visible: script.markerIndex >= index }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("torusBufferGeometry", { args: [radius, 0.5, 8, 32] }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("meshBasicMaterial", { opacity: 0, transparent: true }))));
}


/***/ }),

/***/ "./src/3d/HelpControl.tsx":
/*!********************************!*\
  !*** ./src/3d/HelpControl.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ HelpControl
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);



const { anyHover, onClick } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.mobile;
function HelpControl() {
    const { script } = (0,ractive_player__WEBPACK_IMPORTED_MODULE_1__.usePlayer)();
    const classNames = ["rp-3d-help-wrap"];
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const events = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => onClick(() => {
        setOpen(prev => !prev);
    }), []);
    if (open)
        classNames.push("open");
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    (0,ractive_player__WEBPACK_IMPORTED_MODULE_1__.useMarkerUpdate)(() => {
        ref.current.classList.toggle("relevant", script.markerName.startsWith("3d/"));
    }, []);
    if (script.markerName.startsWith("3d/"))
        classNames.push("relevant");
    const controls = anyHover ? [
        ["Left mouse", "Orbit"],
        ["Scroll wheel", "Zoom"],
        ["Right mouse", "Pan"]
    ] : [
        ["Swipe", "Orbit"],
        ["Pinch", "Zoom"],
        ["Two fingers", "Pan"],
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: classNames.join(" "), ref: ref },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("aside", { className: "rp-3d-help" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("caption", null, "3d controls"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, controls.map(([key, action]) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: key },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, key),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, action))))))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({ className: "rp-controls-help", viewBox: "0 0 20 20" }, events),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "m 10.896484,3.8652344 c -1.2309996,0 -1.7499996,0.8536094 -1.7499996,1.4746094 -0.026,0.737 0.39525,1.1816406 1.2812496,1.1816406 1.059,0 1.679688,-0.7171875 1.679688,-1.4921875 0,-0.621 -0.274938,-1.1640625 -1.210938,-1.1640625 z", fill: "#FFF", stroke: "none" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "m 10.847656,8.0332031 c -0.765,0 -2.5524216,0.7615469 -4.1074216,2.0605469 l 0.3183594,0.523438 c 0.49,-0.33 1.3207187,-0.664063 1.5117187,-0.664063 0.148,0 0.127,0.193734 0,0.677734 L 7.8378906,13.65625 c -0.447,1.705 0.020156,2.09375 0.6601563,2.09375 0.639,0 2.2877811,-0.58175 3.8007811,-2.09375 L 11.9375,13.169922 c -0.618,0.487 -1.247453,0.71875 -1.439453,0.71875 -0.149,0 -0.2115,-0.19386 -0.0625,-0.75586 l 0.839844,-3.179687 c 0.319,-1.164 0.212265,-1.9199219 -0.427735,-1.9199219 z", fill: "#FFF", stroke: "none" }))));
}


/***/ }),

/***/ "./src/3d/Parametric.tsx":
/*!*******************************!*\
  !*** ./src/3d/Parametric.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Parametric
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_2__);




const { cos, sin } = Math;
const r = 2;
const TWOPI = 2 * Math.PI;
function Parametric() {
    const curve = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((u, v, dest) => {
        u = -TWOPI / 2 + u * 2 * TWOPI;
        v = -TWOPI / 2 + v * 2 * TWOPI;
        const x = r * sin(3 * u) / (2 + cos(v));
        const y = r * (sin(u) + 2 * sin(2 * u)) / (2 + cos(v + TWOPI / 3));
        const z = r / 2 * (cos(u) - 2 * cos(2 * u)) * (2 + cos(v)) * (2 + cos(v + TWOPI / 3)) / 4;
        dest.set(x, y, z);
        return dest;
    }, []);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const { script } = (0,ractive_player__WEBPACK_IMPORTED_MODULE_2__.usePlayer)();
    const index = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => script.markerNumberOf("3d/parametric"), []);
    (0,ractive_player__WEBPACK_IMPORTED_MODULE_2__.useMarkerUpdate)(() => {
        ref.current.visible = script.markerIndex >= index;
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("mesh", { ref: ref, position: [8, 0, 0], rotation: [0, 0, TWOPI / 4], visible: script.markerIndex >= index },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("parametricBufferGeometry", { args: [curve, 100, 100] }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("meshPhongMaterial", { color: 0x1a69b5, side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide })));
}


/***/ }),

/***/ "./src/3d/Sphere.tsx":
/*!***************************!*\
  !*** ./src/3d/Sphere.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Sphere
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bezier_easing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bezier-easing */ "./node_modules/bezier-easing/src/index.js");
/* harmony import */ var bezier_easing__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bezier_easing__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_easings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lib/easings */ "./lib/easings.ts");





const { animate } = ractive_player__WEBPACK_IMPORTED_MODULE_2__.Utils.animation;


function Sphere() {
    const { script } = (0,ractive_player__WEBPACK_IMPORTED_MODULE_2__.usePlayer)();
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const grow = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => animate({
        duration: 1000,
        easing: bezier_easing__WEBPACK_IMPORTED_MODULE_3__(..._lib_easings__WEBPACK_IMPORTED_MODULE_4__.easeInCubic),
        endValue: 3,
        startTime: script.parseStart("3d/anim"),
    }), []);
    const last = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    (0,ractive_player__WEBPACK_IMPORTED_MODULE_2__.useTimeUpdate)(t => {
        const r = grow(t);
        if (last.current === r)
            return;
        last.current = r;
        if (r === 0) {
            ref.current.visible = false;
        }
        else {
            ref.current.visible = script.markerName.startsWith("3d/");
            ref.current.geometry = new three__WEBPACK_IMPORTED_MODULE_1__.SphereBufferGeometry(r, 64, 64);
        }
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("mesh", { name: "sphere", position: [0, 8, 0], ref: ref, visible: false },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("sphereBufferGeometry", { args: [0, 64, 64] }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("meshPhongMaterial", { color: 0x1BBB68, side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide })));
}


/***/ }),

/***/ "./src/5d/Elliptic.tsx":
/*!*****************************!*\
  !*** ./src/5d/Elliptic.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Elliptic
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_graphics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/graphics */ "./lib/graphics.ts");


function Elliptic(props) {
    const edges = (0,_lib_graphics__WEBPACK_IMPORTED_MODULE_1__.marchingSquares)(-5, 5, -5, 5, (x, y) => y ** 2 - x ** 3 - props.a * x - props.b, 0, 128);
    const path = [];
    for (let i = 0; i < edges.length; i += 2) {
        path.push(`M ${edges[i][0]} ${edges[i][1]}`);
        path.push(`L ${edges[i + 1][0]} ${edges[i + 1][1]}`);
    }
    const curve = path.join(" ");
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { viewBox: "-5 -5 10 10" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "0", x2: "0", y1: "-5", y2: "5", stroke: "#EEE", strokeWidth: "0.01" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "-5", x2: "5", y1: "0", y2: "0", stroke: "#EEE", strokeWidth: "0.01" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: curve, fill: "none", stroke: "#FF0070", strokeWidth: "0.1" })));
}


/***/ }),

/***/ "./src/5d/Moduli.tsx":
/*!***************************!*\
  !*** ./src/5d/Moduli.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Moduli
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-three-fiber */ "react-three-fiber");
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_three_fiber__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_graphics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/graphics */ "./lib/graphics.ts");
/* harmony import */ var _lib_ThreeFiber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lib/ThreeFiber */ "./lib/ThreeFiber.tsx");






function CameraControls() {
    const $three = (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useThree)();
    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_lib_ThreeFiber__WEBPACK_IMPORTED_MODULE_4__.R3FContext);
    const { camera, gl: { domElement } } = $three;
    domElement.$three = $three;
    camera.up.set(0, 0, 1);
    const controls = (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useResource)();
    (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame)(() => controls.current.update());
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        context.controls = controls.current;
    }, [controls.current]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        camera.position.set(4.3, -9.5, 6);
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("orbitControls", { ref: controls, args: [camera, domElement] }));
}
function Moduli(props) {
    const moduliGeometry = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_lib_graphics__WEBPACK_IMPORTED_MODULE_3__.marchingCubes)((x, y, z) => y ** 2 - x ** 3 - z * x - props.b, -5, 5, 32), [props.b]);
    const section = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        const edges = (0,_lib_graphics__WEBPACK_IMPORTED_MODULE_3__.marchingSquares)(-5, 5, -5, 5, (x, y) => y ** 2 - x ** 3 - props.a * x - props.b + props.a, props.a, 64);
        const lineGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.LineSegmentsGeometry().setPositions(edges.reduce((a, b) => a.concat(b)));
        const lineMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.LineMaterial({ color: 0xFF0070, linewidth: 6 });
        lineMaterial.resolution.set(window.innerWidth, window.innerHeight);
        const linePavement = new three__WEBPACK_IMPORTED_MODULE_1__.LineSegments2(lineGeometry, lineMaterial);
        return linePavement;
    }, [props.a, props.b]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_ThreeFiber__WEBPACK_IMPORTED_MODULE_4__.ThreeScene, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("ambientLight", null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("pointLight", { position: [10, 10, 10] }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(CameraControls, null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("mesh", { geometry: moduliGeometry },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("meshPhongMaterial", { color: 0x1BBB68, side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("primitive", { object: section })));
}


/***/ }),

/***/ "./src/FiveD.tsx":
/*!***********************!*\
  !*** ./src/FiveD.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ FiveD
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rp_katex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rp-katex */ "./node_modules/rp-katex/rp-katex.js");
/* harmony import */ var rp_katex__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rp_katex__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/Input */ "./lib/Input.tsx");
/* harmony import */ var _prompts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prompts */ "./src/prompts.tsx");
/* harmony import */ var _5d_Elliptic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./5d/Elliptic */ "./src/5d/Elliptic.tsx");
/* harmony import */ var _5d_Moduli__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./5d/Moduli */ "./src/5d/Moduli.tsx");



const { during } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.authoring;





function FiveD() {
    const [a, setA] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const [b, setB] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
    const onChangeA = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e) => {
        setA(parseFloat(e.currentTarget.value));
    }, []);
    const onChangeB = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e) => {
        setB(parseFloat(e.currentTarget.value));
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", Object.assign({ id: "sec-5d" }, during("5d/")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("figure", { id: "elliptic", onMouseUp: ractive_player__WEBPACK_IMPORTED_MODULE_1__.Player.preventCanvasClick },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_5d_Elliptic__WEBPACK_IMPORTED_MODULE_5__.default, Object.assign({}, { a, b }))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { id: "fived-controls", onMouseUp: ractive_player__WEBPACK_IMPORTED_MODULE_1__.Player.preventCanvasClick },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("caption", null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(rp_katex__WEBPACK_IMPORTED_MODULE_2__.KTX, null, "y^2 = x^3 + ax + b")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(rp_katex__WEBPACK_IMPORTED_MODULE_2__.KTX, null, "a")),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { min: -5, max: 5, step: "0.01", type: "range", onChange: onChangeA, value: a.toString() })),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Input__WEBPACK_IMPORTED_MODULE_3__.default, { min: -5, max: 5, step: "0.01", type: "number", onChange: onChangeA, value: a.toString() }))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(rp_katex__WEBPACK_IMPORTED_MODULE_2__.KTX, null, "b")),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Input__WEBPACK_IMPORTED_MODULE_3__.default, { min: -5, max: 5, step: "0.01", type: "range", onChange: onChangeB, value: b.toString() })),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Input__WEBPACK_IMPORTED_MODULE_3__.default, { min: -5, max: 5, step: "0.01", type: "number", onChange: onChangeB, value: b.toString() })))))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("figure", { id: "moduli" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_5d_Moduli__WEBPACK_IMPORTED_MODULE_6__.default, Object.assign({}, { a, b }))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_prompts__WEBPACK_IMPORTED_MODULE_4__.FiveDScript, null)));
}


/***/ }),

/***/ "./src/Intro.tsx":
/*!***********************!*\
  !*** ./src/Intro.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Intro
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/Link */ "./lib/Link.tsx");
/* harmony import */ var _prompts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prompts */ "./src/prompts.tsx");



const { during, from } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.authoring, { onClick } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.mobile, { formatTime } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.time;


function Intro() {
    const { playback, script } = (0,ractive_player__WEBPACK_IMPORTED_MODULE_1__.usePlayer)();
    const seek = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => onClick((e) => {
        e.preventDefault();
        playback.seek(e.currentTarget.getAttribute("href").slice(3));
    }), []);
    const contents = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [
        ["Introduction", script.parseStart("intro/toc")],
        ["KaTeX", script.parseStart("ktx/")],
        ["MathJax", script.parseStart("mjx/")],
        ["XyJax", script.parseStart("xyjx/")],
        ["2D graphics", script.parseStart("2d/")],
        ["3D graphics", script.parseStart("3d/")]
    ], []);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", Object.assign({ id: "sec-intro" }, during("intro/")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Ractive-Player math tutorial"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", Object.assign({ className: "toc" }, during("intro/toc")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, contents.map((row, i) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: row[0], onMouseUp: ractive_player__WEBPACK_IMPORTED_MODULE_1__.Player.preventCanvasClick },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null,
                    i + 1,
                    "."),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: "name" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", Object.assign({ href: `?t=${formatTime(row[1])}` }, seek), row[0])),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: "time" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", Object.assign({ href: `?t=${formatTime(row[1])}` }, seek), formatTime(row[1])))))))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", Object.assign({}, from("intro/main")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_2__.default, { href: "https://ractive-player.org/" }, "General-purpose tutorial"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", Object.assign({}, from("intro/explain")), "explains what ractives are, how to write and record them"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", Object.assign({}, from("intro/codebooth")), "coding plugin"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", Object.assign({}, from("intro/paint")), "freehand drawing plugin"))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", Object.assign({}, from("intro/clone")),
                "Clone this tutorial: ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_2__.default, { href: "https://github.com/ysulyma/rp-tutorial-math" }, "https://github.com/ysulyma/rp-tutorial-math")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", Object.assign({}, from("intro/links")), "Links"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", Object.assign({}, from("intro/js")),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_2__.default, { href: "https://javascript.info/" }, "Javascript.info course")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", Object.assign({}, from("intro/ts")),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_2__.default, { href: "https://www.typescriptlang.org/" }, "TypeScript documentation")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", Object.assign({}, from("intro/react")),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_2__.default, { href: "https://reactjs.org/" }, "React documentation")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", Object.assign({}, from("intro/node")),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_2__.default, { href: "https://nodejs.org/en/" }, "Node.js")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", Object.assign({}, from("intro/lmqm")),
                    "Inspiration: ",
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_2__.default, { href: "https://lmqm.xyz/" }, "La mer qui monte")))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_prompts__WEBPACK_IMPORTED_MODULE_3__.IntroScript, null)));
}


/***/ }),

/***/ "./src/KaTeX.tsx":
/*!***********************!*\
  !*** ./src/KaTeX.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ KaTeXSlide
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/Link */ "./lib/Link.tsx");
/* harmony import */ var _prompts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prompts */ "./src/prompts.tsx");
/* harmony import */ var _lib_Block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lib/Block */ "./lib/Block.tsx");
/* harmony import */ var rp_katex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rp-katex */ "./node_modules/rp-katex/rp-katex.js");
/* harmony import */ var rp_katex__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rp_katex__WEBPACK_IMPORTED_MODULE_5__);


const { during, from } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.authoring;




const { raw } = String;
function KaTeXSlide() {
    const m1 = raw `\htmlData{from-first=ktx/align-1}`;
    const m2 = raw `\htmlData{from-first=ktx/align-2}`;
    const m3 = raw `\htmlData{from-first=ktx/align-3}`;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", Object.assign({ id: "sec-katex" }, during("ktx/")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Block__WEBPACK_IMPORTED_MODULE_4__.Definition, { blockTitle: "Derivative of a function" },
            "The ",
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("dfn", null,
                "derivative of ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(rp_katex__WEBPACK_IMPORTED_MODULE_5__.KTX, null, "f"),
                " at ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(rp_katex__WEBPACK_IMPORTED_MODULE_5__.KTX, null, "x"),
                ","),
            " denoted ",
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(rp_katex__WEBPACK_IMPORTED_MODULE_5__.KTX, null, "f'(x),"),
            " is",
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(rp_katex__WEBPACK_IMPORTED_MODULE_5__.KTX, Object.assign({ display: true }, from("ktx/display")), raw `f'(x) := \lim_{\epsilon\to0}\frac{f(x+\epsilon)-f(x)}{\epsilon}.`)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Block__WEBPACK_IMPORTED_MODULE_4__.Example, Object.assign({ blockTitle: react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                "The derivative of ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(rp_katex__WEBPACK_IMPORTED_MODULE_5__.KTX, null, "x^2")) }, from("ktx/ex")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(rp_katex__WEBPACK_IMPORTED_MODULE_5__.KTX, { display: true }, raw `\begin{aligned}
        \lim_{\epsilon\to0}\frac{(x+\epsilon)^2-x^2}{\epsilon}
        &${m1}{= \lim_{\epsilon\to0}\frac{(x^2 + 2\epsilon x + \epsilon^2)-x^2}{\epsilon}}\\[1em]
        &${m2}{= \lim_{\epsilon\to0}\Big(2x + \epsilon\Big)}\\[1em]
        &${m3}{= 2x.}
      \end{aligned}`)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Block__WEBPACK_IMPORTED_MODULE_4__.Example, Object.assign({}, from("ktx/macros")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null,
                "Can load macros from file: ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(rp_katex__WEBPACK_IMPORTED_MODULE_5__.KTX, null, raw `\THH(R;\Z_p)`)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", Object.assign({}, from("ktx/docs")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_2__.default, { href: "https://katex.org/" }, "KaTeX documentation"))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_prompts__WEBPACK_IMPORTED_MODULE_3__.KaTeXScript, null)));
}


/***/ }),

/***/ "./src/MathJax.tsx":
/*!*************************!*\
  !*** ./src/MathJax.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ MathJaxSlide
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/Link */ "./lib/Link.tsx");
/* harmony import */ var _prompts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prompts */ "./src/prompts.tsx");
/* harmony import */ var _lib_Block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lib/Block */ "./lib/Block.tsx");
/* harmony import */ var rp_mathjax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rp-mathjax */ "./node_modules/rp-mathjax/rp-mathjax.js");
/* harmony import */ var rp_mathjax__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rp_mathjax__WEBPACK_IMPORTED_MODULE_5__);


const { from, during } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.authoring;




const { raw } = String;
function MathJaxSlide() {
    const m1 = raw `\data{"fromFirst":"mjx/align-1"}`;
    const m2 = raw `\data{"fromFirst":"mjx/align-2"}`;
    const m3 = raw `\data{"fromFirst":"mjx/align-3"}`;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", Object.assign({ id: "sec-mathjax" }, during("mjx/")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Block__WEBPACK_IMPORTED_MODULE_4__.Definition, { blockTitle: "Derivative of a function" },
            "The ",
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("dfn", null,
                "derivative of ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(rp_mathjax__WEBPACK_IMPORTED_MODULE_5__.MJX, null, "f"),
                " at ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(rp_mathjax__WEBPACK_IMPORTED_MODULE_5__.MJX, null, "x"),
                ","),
            " denoted ",
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(rp_mathjax__WEBPACK_IMPORTED_MODULE_5__.MJX, null, "f'(x),"),
            " is",
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(rp_mathjax__WEBPACK_IMPORTED_MODULE_5__.MJX, Object.assign({ display: true }, from("mjx/display")), raw `f'(x) := \lim_{\epsilon\to0}\frac{f(x+\epsilon)-f(x)}{\epsilon}.`)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Block__WEBPACK_IMPORTED_MODULE_4__.Example, Object.assign({ blockTitle: react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                "The derivative of ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(rp_mathjax__WEBPACK_IMPORTED_MODULE_5__.MJX, null, "x^2")) }, from("mjx/ex")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(rp_mathjax__WEBPACK_IMPORTED_MODULE_5__.MJX, { display: true }, raw `\begin{aligned}
        \lim_{\epsilon\to0}\frac{(x+\epsilon)^2-x^2}{\epsilon}
        &${m1}{= \lim_{\epsilon\to0}\frac{(x^2 + 2\epsilon x + \epsilon^2)-x^2}{\epsilon}}\\[1em]
        &${m2}{= \lim_{\epsilon\to0}\Big(2x + \epsilon\Big)}\\[1em]
        &${m3}{= 2x.}
      \end{aligned}`),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", Object.assign({}, from("mjx/extn")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "\\data"),
                " command provided by MathJax extension ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_2__.default, { href: "https://github.com/ysulyma/mathjax-annotations" }, "annotations.js"))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Block__WEBPACK_IMPORTED_MODULE_4__.Example, Object.assign({}, from("mjx/macros")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null,
                "Can load macros from file: ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(rp_mathjax__WEBPACK_IMPORTED_MODULE_5__.MJX, null, raw `\THH(R;\Z_p)`)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", Object.assign({}, from("mjx/docs")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_2__.default, { href: "https://docs.mathjax.org/en/v2.7-latest/" }, "MathJax 2.7 documentation"))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_prompts__WEBPACK_IMPORTED_MODULE_3__.MathJaxScript, null)));
}


/***/ }),

/***/ "./src/ThreeD.tsx":
/*!************************!*\
  !*** ./src/ThreeD.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Scene
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_r3f__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/r3f */ "./lib/r3f.ts");
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-three-fiber */ "react-three-fiber");
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_three_fiber__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lib/Link */ "./lib/Link.tsx");
/* harmony import */ var _lib_ThreeFiber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lib/ThreeFiber */ "./lib/ThreeFiber.tsx");
/* harmony import */ var _prompts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prompts */ "./src/prompts.tsx");
/* harmony import */ var _3d_Arrow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./3d/Arrow */ "./src/3d/Arrow.tsx");
/* harmony import */ var _3d_Cylinder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./3d/Cylinder */ "./src/3d/Cylinder.tsx");
/* harmony import */ var _3d_Parametric__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./3d/Parametric */ "./src/3d/Parametric.tsx");
/* harmony import */ var _3d_Sphere__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./3d/Sphere */ "./src/3d/Sphere.tsx");





const { during, from } = ractive_player__WEBPACK_IMPORTED_MODULE_3__.Utils.authoring, { between } = ractive_player__WEBPACK_IMPORTED_MODULE_3__.Utils.misc;







function CameraControls() {
    const $three = (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useThree)();
    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_lib_ThreeFiber__WEBPACK_IMPORTED_MODULE_5__.R3FContext);
    const { camera, gl: { domElement } } = $three;
    domElement.$three = $three;
    camera.up.set(0, 0, 1);
    const controls = (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useResource)();
    (0,react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame)(() => controls.current.update());
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        context.controls = controls.current;
    }, [controls.current]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        camera.position.set(4.3, -9.5, 6);
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("orbitControls", { ref: controls, args: [camera, domElement] }));
}
function Scene() {
    const { playback, script } = (0,ractive_player__WEBPACK_IMPORTED_MODULE_3__.usePlayer)();
    const arrowIndex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => script.markerNumberOf("3d/svg"), []);
    const helperRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    (0,ractive_player__WEBPACK_IMPORTED_MODULE_3__.useMarkerUpdate)(() => {
        if (!helperRef.current)
            return;
        helperRef.current.visible = (script.markerIndex < arrowIndex);
    }, []);
    const m = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => script.parseStart("3d/pause"), []);
    const prev = react__WEBPACK_IMPORTED_MODULE_0__.useRef(playback.currentTime);
    const EPSILON = 300;
    (0,ractive_player__WEBPACK_IMPORTED_MODULE_3__.useTimeUpdate)(t => {
        if (between(m - EPSILON, prev.current, m) && between(m, t, m + EPSILON)) {
            playback.pause();
        }
        prev.current = t;
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("figure", Object.assign({ id: "three-d" }, during("3d/")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("aside", Object.assign({ id: "three-explain" }, from("3d/three", "3d/hide")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_4__.default, { href: "https://threejs.org/docs/" }, "THREE.js"),
                " for 3d graphics"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", Object.assign({}, from("3d/r3f")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_4__.default, { href: "https://github.com/react-spring/react-three-fiber/" }, "react-three-fiber"),
                " for use with React")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_ThreeFiber__WEBPACK_IMPORTED_MODULE_5__.ThreeScene, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("ambientLight", null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("pointLight", { position: [10, 10, 10] }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(CameraControls, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("axesHelper", { args: [5], ref: helperRef }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_3d_Cylinder__WEBPACK_IMPORTED_MODULE_8__.default, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_3d_Sphere__WEBPACK_IMPORTED_MODULE_10__.default, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_3d_Parametric__WEBPACK_IMPORTED_MODULE_9__.default, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_3d_Arrow__WEBPACK_IMPORTED_MODULE_7__.default, null)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_prompts__WEBPACK_IMPORTED_MODULE_6__.ThreeDScript, null)));
}


/***/ }),

/***/ "./src/TwoD.tsx":
/*!**********************!*\
  !*** ./src/TwoD.tsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ TwoD
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_FatFingers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/FatFingers */ "./lib/FatFingers.tsx");
/* harmony import */ var _lib_GlowOrb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/GlowOrb */ "./lib/GlowOrb.tsx");
/* harmony import */ var _lib_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lib/Input */ "./lib/Input.tsx");
/* harmony import */ var _lib_svg_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lib/svg-utils */ "./lib/svg-utils.ts");
/* harmony import */ var _prompts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prompts */ "./src/prompts.tsx");
/* harmony import */ var rp_katex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rp-katex */ "./node_modules/rp-katex/rp-katex.js");
/* harmony import */ var rp_katex__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rp_katex__WEBPACK_IMPORTED_MODULE_7__);



const { during, from } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.authoring, { dragHelperReact } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.interactivity, { constrain, range } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.misc, { anyHover } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.mobile;






const { raw } = String;
const a = -4, b = 4;
const minX = -5, maxX = 5;
const negF = (x) => [x, 2 - x * x];
const f = (x) => [x, x * x - 2];
const df = (x) => 2 * x;
function TwoD() {
    const [x, setX] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
    const svgRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const [showOrb, setShowOrb] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        for (const target of Array.from(svgRef.current.querySelectorAll("circle"))) {
            target.addEventListener("touchstart", e => e.preventDefault(), { passive: false });
        }
    }, [svgRef.current]);
    const onDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e) => {
        setShowOrb(false);
        document.body.classList.add("dragging");
    }, []);
    const onUp = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        document.body.classList.remove("dragging");
    }, []);
    const onMoveA = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((...[e, hit]) => {
        const [svgX, svgY] = (0,_lib_svg_utils__WEBPACK_IMPORTED_MODULE_5__.screenToSVG)(svgRef.current, hit.x, hit.y);
        setX(constrain(a, closestPoint(svgX, -svgY), b));
    }, [svgRef]);
    const A = f(x);
    const slope = df(x), intercept = A[1] - slope * A[0];
    let tangentEqn;
    if (slope === 0) {
        tangentEqn = fmt(intercept);
    }
    else {
        tangentEqn = fmt(slope) + "x";
        if (intercept > 0) {
            tangentEqn += "+" + fmt(intercept);
        }
        else if (intercept < 0) {
            tangentEqn += fmt(intercept);
        }
    }
    const inputA = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e) => {
        const val = parseFloat(e.currentTarget.value);
        if (!isNaN(val))
            setX(constrain(a, val, b));
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", Object.assign({ id: "sec-2d" }, during("2d/")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { id: "tangent-demo", ref: svgRef, viewBox: "-5.3 -5.3 10.6 10.6", onMouseUp: ractive_player__WEBPACK_IMPORTED_MODULE_1__.Player.preventCanvasClick },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(CartesianGrid, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { className: "plot", d: (0,_lib_svg_utils__WEBPACK_IMPORTED_MODULE_5__.graph)(negF, a, b, 200) }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { className: "tangent-line", x1: minX, y1: -(minX * slope + intercept), x2: maxX, y2: -(maxX * slope + intercept) }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_FatFingers__WEBPACK_IMPORTED_MODULE_2__.default, Object.assign({ className: "draggable point-A", cx: A[0], cy: -A[1], r: "0.1", fatR: "0.4" }, dragHelperReact(onMoveA, onDown, onUp))),
            showOrb && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_GlowOrb__WEBPACK_IMPORTED_MODULE_3__.default, { className: "glow", cx: A[0], cy: -A[1], dur: "1s", r1: 0.1, r2: 0.3 })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { id: "explain", onMouseUp: ractive_player__WEBPACK_IMPORTED_MODULE_1__.Player.preventCanvasClick },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(rp_katex__WEBPACK_IMPORTED_MODULE_7__.KTX, { display: true, id: "defn" }, raw `
          \begin{aligned}
            \htmlClass{plot}{y} &\htmlClass{plot}{= x^2-2}\\
            \htmlClass{tangent-line}{y} &\htmlClass{tangent-line}{= ${tangentEqn}}
          \end{aligned}
        `),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(rp_katex__WEBPACK_IMPORTED_MODULE_7__.KTX, { id: "val-c" }, raw `\htmlClass{pt1}{c =}`)),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Input__WEBPACK_IMPORTED_MODULE_4__.default, { key: x, onChange: inputA, type: "text", value: fmt(x).toString() }))))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null,
                "Try moving the point on the graph with your ",
                anyHover ? "mouse" : "finger",
                "."),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", Object.assign({}, from("2d/consider")), "Considerations"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", Object.assign({}, from("2d/signify")), "use consistent signifiers to indicate interactive components"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", Object.assign({}, from("2d/fat")),
                    "need larger hit area for mobile (",
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "fat-fingers"),
                    " in the code)"))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_prompts__WEBPACK_IMPORTED_MODULE_6__.TwoDScript, null)));
}
function CartesianGrid() {
    const minY = -5, maxY = 5;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", null,
        range(minX, maxX + 1).map(n => n !== 0 && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: `x_${n}` },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { className: "gridline", x1: n, x2: n, y1: -maxY, y2: -minY }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { className: "axis-tick", x1: n, x2: n, y1: "-0.15", y2: "0.15" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", { className: "axis-label", x: n, y: 0, dx: 0.15, dy: .5 }, n.toString().replace("-", "–"))))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", { className: "axis-label", x: 0, y: 0, dx: 0.25, dy: 0.4 }, "0"),
        range(minY, maxY + 1).map(n => n !== 0 && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: `y-${n}` },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { className: "gridline", x1: minX, x2: maxX, y1: -n, y2: -n }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { className: "axis-tick", x1: -.15, x2: .15, y1: -n, y2: -n }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", { className: "axis-label", x: 0, y: -n, dx: 0.4 }, n.toString().replace("-", "–"))))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { className: "major-axis", x1: minX, x2: maxX, y1: "0", y2: "0" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { className: "major-axis", x1: "0", x2: "0", y1: -minY, y2: -maxY })));
}
function fmt(x, l = 4) {
    return parseFloat(x.toFixed(l));
}
function closestPoint(x0, y0) {
    const minX = a, maxX = b;
    const samples = 1000;
    const dx = (maxX - minX) / samples;
    let best = minX, minVal = (x0 - best) ** 2 + (y0 - f(best)[1]) ** 2;
    for (let i = 1; i <= samples; ++i) {
        const xi = minX + i * dx;
        const val = (x0 - xi) ** 2 + (y0 - f(xi)[1]) ** 2;
        if (val < minVal) {
            minVal = val;
            best = xi;
        }
    }
    return best;
}


/***/ }),

/***/ "./src/XyJax.tsx":
/*!***********************!*\
  !*** ./src/XyJax.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ XyJaxSlide
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bezier_easing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bezier-easing */ "./node_modules/bezier-easing/src/index.js");
/* harmony import */ var bezier_easing__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bezier_easing__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rp_mathjax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rp-mathjax */ "./node_modules/rp-mathjax/rp-mathjax.js");
/* harmony import */ var rp_mathjax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rp_mathjax__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rp_xyjax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rp-xyjax */ "./node_modules/rp-xyjax/rp-xyjax.js");
/* harmony import */ var rp_xyjax__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rp_xyjax__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_Block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lib/Block */ "./lib/Block.tsx");
/* harmony import */ var _lib_easings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lib/easings */ "./lib/easings.ts");
/* harmony import */ var _lib_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @lib/Link */ "./lib/Link.tsx");
/* harmony import */ var _prompts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./prompts */ "./src/prompts.tsx");



const { animate } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.animation, { from, during } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.authoring;



(0,rp_xyjax__WEBPACK_IMPORTED_MODULE_4__.extendXY)();




const { raw } = String;
function XyJaxSlide() {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", Object.assign({ id: "sec-xyjax" }, during("xyjx/")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Block__WEBPACK_IMPORTED_MODULE_5__.Remark, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null,
                "commutative diagrams (",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "xymatrix"),
                " syntax) using ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_Link__WEBPACK_IMPORTED_MODULE_7__.default, { href: "https://sonoisa.github.io/xyjax/xyjax.html" }, "XyJax"))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("aside", { id: "xyjax-demos" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(rp_mathjax__WEBPACK_IMPORTED_MODULE_3__.MJX, Object.assign({}, during("xyjx/diagram"), { resize: true }), raw `${"\\"}xymatrix{
          A \ar[r] \ar[d] & B \ar[d]\\
          C \ar[r] & D
        }`),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(rp_mathjax__WEBPACK_IMPORTED_MODULE_3__.MJX, Object.assign({}, during("xyjx/pullback"), { resize: true }), raw `
          \vcenter{${"\\"}xymatrix{
            X \times_Z Y \pullback \ar[r] \ar[d] & Y \ar[d]\\\
            X \ar[r] & Z
          }}
          \quad
          \vcenter{${"\\"}xymatrix{
            Z \ar[d] \ar[r] & Y \ar[d]\\\
            X \ar[r] & X\cup_Z Y \pushout
          }}
          `),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(rp_mathjax__WEBPACK_IMPORTED_MODULE_3__.MJX, Object.assign({}, during("xyjx/color"), { resize: true }), raw `
        ${"\\"}xymatrix{
          H_n(X,A) \ar@[color${(0,rp_xyjax__WEBPACK_IMPORTED_MODULE_4__.xyEncodeColor)("AF1866")}][r]^-{\color{#AF1866} \partial} & H_{n-1}(A)
        }
        `),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(AnimatedArrows, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(Brouwer, null)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_prompts__WEBPACK_IMPORTED_MODULE_8__.XyJaxScript, null)));
}
function AnimatedArrows() {
    const { script } = (0,ractive_player__WEBPACK_IMPORTED_MODULE_1__.usePlayer)();
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const fadeTail = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => animate({
        startTime: script.parseStart("xyjx/arrows/anim"),
        duration: 800,
        easing: bezier_easing__WEBPACK_IMPORTED_MODULE_2__(..._lib_easings__WEBPACK_IMPORTED_MODULE_6__.easeOutCubic)
    }), []);
    const fadeHead = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => animate({
        startTime: script.parseStart("xyjx/arrows/anim") + 500,
        duration: 200,
        easing: bezier_easing__WEBPACK_IMPORTED_MODULE_2__(..._lib_easings__WEBPACK_IMPORTED_MODULE_6__.easeOutCubic)
    }), []);
    (0,rp_xyjax__WEBPACK_IMPORTED_MODULE_4__.useAnimateArrows)({
        head: "*[data-anim] path",
        tail: "*[data-anim] line",
        label: ".fade",
        ref,
        headFn: fadeHead,
        tailFn: fadeTail,
        labelFn: fadeHead
    });
    const line = "\"anim\":true";
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(rp_mathjax__WEBPACK_IMPORTED_MODULE_3__.MJX, Object.assign({ resize: true, ref: ref }, during("xyjx/arrows")), raw `
      ${"\\"}xymatrix{
        {*} \ar[d]_-0 \ar[r]^-{t_0} & \mathbb R \ar[d]^- p\\
        I \ar[r]_-{\alpha} \ar@[data${(0,rp_xyjax__WEBPACK_IMPORTED_MODULE_4__.tob52)(line)}]@{..>}[ur]^-{\class{fade}{\exists!\ \widetilde\alpha}} & S^1
      }
    `));
}
function Brouwer() {
    const player = (0,ractive_player__WEBPACK_IMPORTED_MODULE_1__.usePlayer)();
    const { script } = player;
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const dur = {
        piFadeIn: 300,
        fadeOut: 400,
        fadeIn: 400
    };
    const times = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
        piFadeIn: script.parseStart("xyjx/pi1"),
        fadeOut: script.parseStart("xyjx/apply"),
        contradiction: script.parseStart("xyjx/contradiction"),
    }), []);
    const piFadeIn = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => animate({
        startTime: times.piFadeIn,
        duration: dur.piFadeIn,
        easing: bezier_easing__WEBPACK_IMPORTED_MODULE_2__(..._lib_easings__WEBPACK_IMPORTED_MODULE_6__.easeInSine)
    }), []);
    const fadeOut = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => animate({
        startTime: times.fadeOut,
        duration: dur.fadeOut,
        startValue: 1,
        endValue: 0,
        easing: bezier_easing__WEBPACK_IMPORTED_MODULE_2__(..._lib_easings__WEBPACK_IMPORTED_MODULE_6__.easeOutSine)
    }), []);
    const fadeIn = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => animate({
        startTime: times.fadeOut + dur.fadeOut * 2 / 3,
        duration: dur.fadeIn,
        easing: bezier_easing__WEBPACK_IMPORTED_MODULE_2__(..._lib_easings__WEBPACK_IMPORTED_MODULE_6__.easeInSine)
    }), []);
    (0,ractive_player__WEBPACK_IMPORTED_MODULE_1__.useTimeUpdate)(t => {
        const node = ref.current.domElement;
        for (const term of getDelimiters(node, "pi")) {
            term.style.opacity = (t < times.fadeOut ? piFadeIn : fadeOut)(t).toString();
        }
        for (const term of getDelimiters(node, "out")) {
            term.style.opacity = fadeOut(t).toString();
        }
        for (const term of getDelimiters(node, "in")) {
            term.style.opacity = fadeIn(t).toString();
        }
        node.classList.toggle("contradiction", t >= times.contradiction);
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(rp_mathjax__WEBPACK_IMPORTED_MODULE_3__.MJX, Object.assign({ resize: true, ref: ref }, from("xyjx/brouwer")), raw `
      \class{pi-l}{}\pi_1\left(\class{pi-r}{}
      \vcenter{${"\\"}xymatrix@=1.5em{
        \class{out-l}{}S^1\class{out-r}{} \class{in-l}{}\hspace{-.8em}\Z\class{in-r}{} \ar@{=}[rr] \ar[ddr] &&
        \class{out-l}{}S^1\class{out-r}{} \class{in-l}{}\hspace{-1.15em}\Z\class{in-r}{}\\
        \\
        & \class{out-l}{}D^2\class{out-r}{} \class{in-l}{}\hspace{-1em}0\class{in-r}{} \hspace{.2em} \ar[uur]
      }}
      \hspace{.2em}
      \class{pi-l}{}\right)\class{pi-r}{}
    `));
}
function getDelimiters(node, name) {
    const nodes = [];
    const delimiters = Array.from(node.querySelectorAll(`span.${name}-l`));
    for (const delimL of delimiters) {
        for (let next = delimL.nextElementSibling; next; next = next.nextElementSibling || next.parentNode.nextElementSibling) {
            if (next.classList.contains(`${name}-r`)) {
                break;
            }
            if (next.childElementCount > 0) {
                next = next.firstElementChild;
            }
            nodes.push(next);
        }
    }
    return nodes;
}


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_LoadingScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/LoadingScreen */ "./lib/LoadingScreen.tsx");
/* harmony import */ var _lib_rebind_arrow_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lib/rebind-arrow-keys */ "./lib/rebind-arrow-keys.ts");
/* harmony import */ var _lib_seekonload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lib/seekonload */ "./lib/seekonload.ts");
/* harmony import */ var _media_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./media-url */ "./src/media-url.ts");
/* harmony import */ var _markers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./markers */ "./src/markers.ts");
/* harmony import */ var _Intro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Intro */ "./src/Intro.tsx");
/* harmony import */ var _KaTeX__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./KaTeX */ "./src/KaTeX.tsx");
/* harmony import */ var _MathJax__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MathJax */ "./src/MathJax.tsx");
/* harmony import */ var _XyJax__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./XyJax */ "./src/XyJax.tsx");
/* harmony import */ var _TwoD__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TwoD */ "./src/TwoD.tsx");
/* harmony import */ var _ThreeD__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ThreeD */ "./src/ThreeD.tsx");
/* harmony import */ var _FiveD__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FiveD */ "./src/FiveD.tsx");
/* harmony import */ var _3d_HelpControl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./3d/HelpControl */ "./src/3d/HelpControl.tsx");
















const controls = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
    ractive_player__WEBPACK_IMPORTED_MODULE_2__.Player.defaultControlsLeft,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "rp-controls-right" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_3d_HelpControl__WEBPACK_IMPORTED_MODULE_15__.default, null),
        ractive_player__WEBPACK_IMPORTED_MODULE_2__.Player.defaultControlsRight)));
function Ractive() {
    const playerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        const player = playerRef.current;
        (0,_lib_rebind_arrow_keys__WEBPACK_IMPORTED_MODULE_4__.default)(player);
        player.canPlay.then(() => {
            (0,_lib_seekonload__WEBPACK_IMPORTED_MODULE_5__.default)(player.playback);
            player.ready();
        });
    }, []);
    const script = new ractive_player__WEBPACK_IMPORTED_MODULE_2__.Script(_markers__WEBPACK_IMPORTED_MODULE_7__.default);
    const ps = script.parseStart;
    const highlights = [
        { title: "KaTeX", time: ps("ktx/") },
        { title: "MathJax", time: ps("mjx/") },
        { title: "XyJax", time: ps("xyjx/") },
        { title: "2D graphics", time: ps("2d/") },
        { title: "3D graphics", time: ps("3d/") }
    ];
    const thumbData = {
        cols: 5,
        rows: 5,
        height: 100,
        width: 160,
        frequency: 4,
        path: `${_media_url__WEBPACK_IMPORTED_MODULE_6__.MEDIA_URL}/thumbs/%s.png`,
        highlights
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(ractive_player__WEBPACK_IMPORTED_MODULE_2__.Player, { controls: controls, ref: playerRef, script: script, thumbs: thumbData },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_LoadingScreen__WEBPACK_IMPORTED_MODULE_3__.default, null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(ractive_player__WEBPACK_IMPORTED_MODULE_2__.Audio, { start: 0 },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("source", { src: `${_media_url__WEBPACK_IMPORTED_MODULE_6__.MEDIA_URL}/audio/audio.webm`, type: "audio/webm" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("source", { src: `${_media_url__WEBPACK_IMPORTED_MODULE_6__.MEDIA_URL}/audio/audio.mp4`, type: "audio/mp4" })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Intro__WEBPACK_IMPORTED_MODULE_8__.default, null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_KaTeX__WEBPACK_IMPORTED_MODULE_9__.default, null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MathJax__WEBPACK_IMPORTED_MODULE_10__.default, null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_XyJax__WEBPACK_IMPORTED_MODULE_11__.default, null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TwoD__WEBPACK_IMPORTED_MODULE_12__.default, null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ThreeD__WEBPACK_IMPORTED_MODULE_13__.default, null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FiveD__WEBPACK_IMPORTED_MODULE_14__.default, null)));
}
react_dom__WEBPACK_IMPORTED_MODULE_1__.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ractive, null), document.querySelector("main"));


/***/ }),

/***/ "./src/markers.ts":
/*!************************!*\
  !*** ./src/markers.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
    ["intro/toc", "0:12.475"],
    ["intro/main", "0:08.619"],
    ["intro/explain", "0:06.572"],
    ["intro/codebooth", "0:02.740"],
    ["intro/paint", "0:08.239"],
    ["intro/clone", "0:09.802"],
    ["intro/links", "0:05.315"],
    ["intro/js", "0:03.866"],
    ["intro/ts", "0:04.530"],
    ["intro/react", "0:07.922"],
    ["intro/node", "0:12.258"],
    ["intro/lmqm", "0:05.510"],
    ["ktx/", "0:05.211"],
    ["ktx/display", "0:02.478"],
    ["ktx/ex", "0:01.233"],
    ["ktx/align-1", "0:00.805"],
    ["ktx/align-2", "0:01.690"],
    ["ktx/align-3", "0:08.769"],
    ["ktx/macros", "0:19.377"],
    ["ktx/docs", "0:04.313"],
    ["mjx/", "0:04.922"],
    ["mjx/display", "0:02.389"],
    ["mjx/ex", "0:00.834"],
    ["mjx/align-1", "0:00.263"],
    ["mjx/align-2", "0:00.714"],
    ["mjx/align-3", "0:00.982"],
    ["mjx/extn", "0:11.211"],
    ["mjx/macros", "0:06.839"],
    ["mjx/docs", "0:19.265"],
    ["xyjx/", "0:07.763"],
    ["xyjx/diagram", "0:15.260"],
    ["xyjx/pullback", "0:05.948"],
    ["xyjx/color", "0:03.396"],
    ["xyjx/arrows", "0:02.146"],
    ["xyjx/arrows/anim", "0:02.407"],
    ["xyjx/brouwer", "0:08.851"],
    ["xyjx/pi1", "0:02.191"],
    ["xyjx/apply", "0:03.569"],
    ["xyjx/contradiction", "0:05.652"],
    ["2d/", "0:13.371"],
    ["2d/consider", "0:12.590"],
    ["2d/signify", "0:15.475"],
    ["2d/fat", "0:17.716"],
    ["3d/", "0:11.866"],
    ["3d/three", "0:08.654"],
    ["3d/r3f", "0:08.660"],
    ["3d/hide", "0:03.719"],
    ["3d/drag", "0:10.377"],
    ["3d/pause", "0:03.587"],
    ["3d/anim", "0:02.586"],
    ["3d/parametric", "0:05.215"],
    ["3d/svg", "0:11.541"],
    ["5d/", "0:43.52"]
]);


/***/ }),

/***/ "./src/media-url.ts":
/*!**************************!*\
  !*** ./src/media-url.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MEDIA_URL": () => /* binding */ MEDIA_URL
/* harmony export */ });
const MEDIA_URL = "https://d2og9lpzrymesl.cloudfront.net/r/rp-tutorial-math";


/***/ }),

/***/ "./src/prompts.tsx":
/*!*************************!*\
  !*** ./src/prompts.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroScript": () => /* binding */ IntroScript,
/* harmony export */   "KaTeXScript": () => /* binding */ KaTeXScript,
/* harmony export */   "MathJaxScript": () => /* binding */ MathJaxScript,
/* harmony export */   "XyJaxScript": () => /* binding */ XyJaxScript,
/* harmony export */   "TwoDScript": () => /* binding */ TwoDScript,
/* harmony export */   "ThreeDScript": () => /* binding */ ThreeDScript,
/* harmony export */   "FiveDScript": () => /* binding */ FiveDScript
/* harmony export */ });
const IntroScript = () => null;
const KaTeXScript = () => null;
const MathJaxScript = () => null;
const XyJaxScript = () => null;
const TwoDScript = () => null;
const ThreeDScript = () => null;
const FiveDScript = () => null;


/***/ }),

/***/ "react-three-fiber":
/*!**********************!*\
  !*** external "R3F" ***!
  \**********************/
/***/ ((module) => {

module.exports = R3F;

/***/ }),

/***/ "ractive-player":
/*!********************************!*\
  !*** external "RactivePlayer" ***!
  \********************************/
/***/ ((module) => {

module.exports = RactivePlayer;

/***/ }),

/***/ "rangetouch":
/*!*****************************!*\
  !*** external "RangeTouch" ***!
  \*****************************/
/***/ ((module) => {

module.exports = RangeTouch;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = ReactDOM;

/***/ }),

/***/ "three":
/*!************************!*\
  !*** external "THREE" ***!
  \************************/
/***/ ((module) => {

module.exports = THREE;

/***/ }),

/***/ "three/examples/jsm/controls/OrbitControls":
/*!**************************************!*\
  !*** external "THREE.OrbitControls" ***!
  \**************************************/
/***/ ((module) => {

module.exports = THREE.OrbitControls;

/***/ }),

/***/ "three/examples/jsm/loaders/SVGLoader":
/*!**********************************!*\
  !*** external "THREE.SVGLoader" ***!
  \**********************************/
/***/ ((module) => {

module.exports = THREE.SVGLoader;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.tsx");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;