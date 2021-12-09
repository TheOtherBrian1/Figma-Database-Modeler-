/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/util/color.ts":
/*!***************************!*\
  !*** ./src/util/color.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "colorConverter": () => (/* binding */ colorConverter)
/* harmony export */ });
function colorConverter(color) {
    if (typeof color === 'string') {
        if (color.length !== 6)
            throw Error('hex colors must have 6 characters');
        const r = parseInt(color.slice(0, 2), 16) / 255;
        const g = parseInt(color.slice(2, 4), 16) / 255;
        const b = parseInt(color.slice(4, 6), 16) / 255;
        return { r, g, b };
    }
    else {
        color.r /= 255;
        color.g /= 255;
        color.b /= 255;
        return color;
    }
}


/***/ }),

/***/ "./src/util/font.ts":
/*!**************************!*\
  !*** ./src/util/font.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ callFont)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function callFont(fonts) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const font of fonts)
            yield figma.loadFontAsync(font);
    });
}


/***/ }),

/***/ "./src/util/frame.ts":
/*!***************************!*\
  !*** ./src/util/frame.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFrameNode": () => (/* binding */ createFrameNode)
/* harmony export */ });
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ "./src/util/color.ts");

;
const paddingClock = ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'];
function createFrameNode({ name, clipsContent = false, paddingDirection = [0, 0, 0, 0], color = 'ffffff', mainAxis = 'HORIZONTAL', mainAxisSizing = 'AUTO', altAxisSizing = 'AUTO', resize, mainAxisAlign = 'CENTER', altAxisAlign = 'CENTER', layoutAlign = 'STRETCH', cornerRadius = 0, itemSpacing }) {
    const frame = figma.createFrame();
    frame.name = name;
    frame.clipsContent = clipsContent;
    frame.fills = [{ type: 'SOLID', color: (0,_color__WEBPACK_IMPORTED_MODULE_0__.colorConverter)(color) }];
    for (let i = 0; i < 4; i++)
        frame[paddingClock[i]] = paddingDirection[i];
    if (itemSpacing)
        frame.itemSpacing = itemSpacing;
    frame.layoutMode = mainAxis;
    frame.primaryAxisSizingMode = mainAxisSizing;
    frame.counterAxisSizingMode = altAxisSizing;
    resize && frame.resize(...resize);
    frame.cornerRadius = cornerRadius;
    frame.primaryAxisAlignItems = mainAxisAlign;
    frame.counterAxisAlignItems = altAxisAlign;
    return frame;
}


/***/ }),

/***/ "./src/util/text.ts":
/*!**************************!*\
  !*** ./src/util/text.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTextNode": () => (/* binding */ createTextNode)
/* harmony export */ });
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ "./src/util/color.ts");

;
function createTextNode({ family = "IBM Plex Mono", style = "SemiBold", fontSize = 16, alignHorizontal = "CENTER", resizeWithoutConstraints = null, 
//type= 'SOLID', 
color = 'ffffff', alignVertical = "CENTER", boxAutoResize = 'WIDTH_AND_HEIGHT', name, autoRename = true, characters, textCase = "ORIGINAL" }) {
    const text = figma.createText();
    text.fontName = { family, style };
    text.fontSize = fontSize;
    text.textAlignHorizontal = alignHorizontal;
    text.textAlignVertical = alignVertical;
    text.name = name;
    text.textAutoResize = boxAutoResize;
    text.autoRename = autoRename;
    text.characters = characters;
    text.textCase = textCase;
    text.fills = [{ type: "SOLID", color: (0,_color__WEBPACK_IMPORTED_MODULE_0__.colorConverter)(color) }];
    resizeWithoutConstraints && text.resizeWithoutConstraints(...resizeWithoutConstraints);
    return text;
}


/***/ }),

/***/ "./src/widgets/column.ts":
/*!*******************************!*\
  !*** ./src/widgets/column.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createColumn)
/* harmony export */ });
/* harmony import */ var _util_frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/frame */ "./src/util/frame.ts");

//default values for frames----------------------------
/*
    name,
    paddingDirection = [0,0,0,0],
    color='ffffff',
    mainAxis = 'HORIZONTAL',
    mainAxisSizing = 'AUTO',
    altAxisSizing = 'AUTO',
    resize,
    mainAxisAlign= 'CENTER',
    altAxisAlign = 'CENTER'
*/
const columnSettings = {
    mainAxis: 'VERTICAL',
};
function createColumn(userSettings) {
    const settings = Object.assign(columnSettings, userSettings);
    return (0,_util_frame__WEBPACK_IMPORTED_MODULE_0__.createFrameNode)(settings);
}


/***/ }),

/***/ "./src/widgets/constraint.ts":
/*!***********************************!*\
  !*** ./src/widgets/constraint.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createConstraint)
/* harmony export */ });
/* harmony import */ var _util_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/text */ "./src/util/text.ts");
/* harmony import */ var _util_frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/frame */ "./src/util/frame.ts");


function createConstraint(name, constraints) {
    const widget = (0,_util_frame__WEBPACK_IMPORTED_MODULE_1__.createFrameNode)({
        name,
        color: '222326',
        resize: [1, 40],
        itemSpacing: 8,
        mainAxis: 'HORIZONTAL'
    });
    for (const constraint of constraints) {
        const id = (0,_util_frame__WEBPACK_IMPORTED_MODULE_1__.createFrameNode)({ paddingDirection: [0, 8, 0, 8], cornerRadius: 30, name: constraint, color: '626364' });
        const text = (0,_util_text__WEBPACK_IMPORTED_MODULE_0__.createTextNode)({ textCase: "UPPER", name: 'constraint', characters: constraint, fontSize: 14, style: 'Regular' });
        id.appendChild(text);
        widget.appendChild(id);
    }
    return widget;
}


/***/ }),

/***/ "./src/widgets/dataType.ts":
/*!*********************************!*\
  !*** ./src/widgets/dataType.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createDataType)
/* harmony export */ });
/* harmony import */ var _util_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/text */ "./src/util/text.ts");
/* harmony import */ var _util_frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/frame */ "./src/util/frame.ts");


const dataTypeColors = {
    character: 'EFC900',
    numeric: 'F17400',
    date: '00D0AB',
    binary: '0026EF',
    boolean: '007DF1',
    string: 'D00025',
    geometric: '7EC639',
    'network address': 'CF2ED1',
    bit: '00FFF6'
};
function createDataType(name, dataType) {
    const id = (0,_util_frame__WEBPACK_IMPORTED_MODULE_1__.createFrameNode)({ name: 'id_' + name, color: '222326', paddingDirection: [0, 10, 0, 10] });
    const text = (0,_util_text__WEBPACK_IMPORTED_MODULE_0__.createTextNode)({ name, color: dataTypeColors[dataType], characters: name, fontSize: 14, textCase: 'UPPER', style: 'Regular' });
    id.appendChild(text);
    return id;
}


/***/ }),

/***/ "./src/widgets/id.ts":
/*!***************************!*\
  !*** ./src/widgets/id.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createId)
/* harmony export */ });
/* harmony import */ var _util_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/text */ "./src/util/text.ts");
/* harmony import */ var _util_frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/frame */ "./src/util/frame.ts");


function createId(name) {
    const id = (0,_util_frame__WEBPACK_IMPORTED_MODULE_1__.createFrameNode)({ name, color: '222326', paddingDirection: [0, 0, 0, 10] });
    const text = (0,_util_text__WEBPACK_IMPORTED_MODULE_0__.createTextNode)({ name, characters: name, fontSize: 14 });
    id.appendChild(text);
    return id;
}


/***/ }),

/***/ "./src/widgets/key.ts":
/*!****************************!*\
  !*** ./src/widgets/key.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createKey)
/* harmony export */ });
/* harmony import */ var _util_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/text */ "./src/util/text.ts");
/* harmony import */ var _util_frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/frame */ "./src/util/frame.ts");


const defaultKeySettings = {
    mainAxis: 'VERTICAL',
    mainAxisSizing: 'AUTO'
};
const defaultKeyTitleSettings = {
    fontSize: 10,
    resizeWithoutConstraints: [67, 13],
    name: 'keyType'
};
const defaltKeyLinkSettings = {
    fontSize: 9,
    style: 'Light',
    characters: 'N/A'
};
const foreignKeySettings = {
    color: '212B3B',
    name: 'FOREIGN',
    characters: 'FK'
};
const primaryKeySettings = {
    color: '38393A',
    name: 'PRIMARY',
    characters: 'PK'
};
function createKey({ type, keyTitleSettings, keyLinkSettings, keySettings }) {
    let textColor;
    let keyTypeSettings = {};
    switch (type) {
        case 'FOREIGN':
            keyTypeSettings = foreignKeySettings;
            textColor = { color: '1371ff' };
            break;
        case 'PRIMARY':
            keyTypeSettings = primaryKeySettings;
            textColor = { color: 'FF7613' };
            break;
        default:
            textColor = { name: 'CUSTOM' };
    }
    const keyAssign = Object.assign(defaultKeySettings, keyTypeSettings, keySettings);
    const key = (0,_util_frame__WEBPACK_IMPORTED_MODULE_1__.createFrameNode)(keyAssign);
    const keyTitle = (0,_util_text__WEBPACK_IMPORTED_MODULE_0__.createTextNode)(Object.assign(defaultKeyTitleSettings, keyTypeSettings, keyTitleSettings, textColor));
    const keyLink = (0,_util_text__WEBPACK_IMPORTED_MODULE_0__.createTextNode)(Object.assign(defaltKeyLinkSettings, textColor, keyLinkSettings));
    key.appendChild(keyTitle);
    key.appendChild(keyLink);
    return key;
}


/***/ }),

/***/ "./src/widgets/table.ts":
/*!******************************!*\
  !*** ./src/widgets/table.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTable)
/* harmony export */ });
/* harmony import */ var _util_frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/frame */ "./src/util/frame.ts");

function createTable(tableName) {
    const table = (0,_util_frame__WEBPACK_IMPORTED_MODULE_0__.createFrameNode)({
        name: tableName,
        clipsContent: true,
        cornerRadius: 5,
        mainAxis: 'VERTICAL',
        color: '4E4F51',
    });
    //table.setPluginData(tableName);
    //equivalent to hugs content
    //table.primaryAxisSizingMode = 'AUTO';
    //table.counterAxisSizingMode = 'AUTO';
    return table;
}


/***/ }),

/***/ "./src/widgets/title.ts":
/*!******************************!*\
  !*** ./src/widgets/title.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTitle)
/* harmony export */ });
/* harmony import */ var _util_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/text */ "./src/util/text.ts");
/* harmony import */ var _util_frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/frame */ "./src/util/frame.ts");


function createTitle(tableName) {
    const container = (0,_util_frame__WEBPACK_IMPORTED_MODULE_1__.createFrameNode)({
        color: '4b4c4e',
        mainAxis: 'VERTICAL',
        paddingDirection: [0, 0, 0, 10],
        name: tableName,
        mainAxisSizing: 'FIXED',
        altAxisSizing: 'AUTO',
        resize: [400, 40],
        mainAxisAlign: 'CENTER',
        altAxisAlign: 'MIN'
    });
    const title = (0,_util_text__WEBPACK_IMPORTED_MODULE_0__.createTextNode)({
        family: 'Work Sans',
        characters: tableName,
        alignHorizontal: 'LEFT',
        alignVertical: 'CENTER',
        name: tableName
    });
    container.appendChild(title);
    return container;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_font__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/font */ "./src/util/font.ts");
/* harmony import */ var _widgets_column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgets/column */ "./src/widgets/column.ts");
/* harmony import */ var _widgets_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widgets/key */ "./src/widgets/key.ts");
/* harmony import */ var _widgets_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widgets/id */ "./src/widgets/id.ts");
/* harmony import */ var _widgets_dataType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widgets/dataType */ "./src/widgets/dataType.ts");
/* harmony import */ var _widgets_constraint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widgets/constraint */ "./src/widgets/constraint.ts");
/* harmony import */ var _widgets_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widgets/table */ "./src/widgets/table.ts");
/* harmony import */ var _widgets_title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./widgets/title */ "./src/widgets/title.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








figma.showUI(__html__);
figma.ui.resize(400, 600);
function generatePopulatedTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0,_util_font__WEBPACK_IMPORTED_MODULE_0__["default"])([
            { family: "Work Sans", style: "SemiBold" },
            { family: "IBM Plex Mono", style: "Light" },
            { family: "IBM Plex Mono", style: "Regular" },
            { family: "IBM Plex Mono", style: "SemiBold" }
        ]);
        if (figma.editorType === 'figma') {
            const table = (0,_widgets_table__WEBPACK_IMPORTED_MODULE_6__["default"])('milk');
            const columns = [];
            const title = (0,_widgets_title__WEBPACK_IMPORTED_MODULE_7__["default"])('test');
            table.appendChild(title);
            const foreignKeyColumn = (0,_widgets_column__WEBPACK_IMPORTED_MODULE_1__["default"])({ name: 'FOREIGN', color: '4E4F51' });
            const fk1 = (0,_widgets_key__WEBPACK_IMPORTED_MODULE_2__["default"])({ type: 'FOREIGN', keyLinkSettings: { name: 'ke1', characters: 'test1' } });
            const fk2 = (0,_widgets_key__WEBPACK_IMPORTED_MODULE_2__["default"])({ type: 'FOREIGN', keyLinkSettings: { name: 'ke2', characters: 'test2' } });
            for (const key of [fk1, fk2])
                foreignKeyColumn.appendChild(key);
            columns.push(foreignKeyColumn);
            const idColumn = (0,_widgets_column__WEBPACK_IMPORTED_MODULE_1__["default"])({ name: 'ID', color: '4E4F51' });
            const id1 = (0,_widgets_id__WEBPACK_IMPORTED_MODULE_3__["default"])('First ID');
            const id2 = (0,_widgets_id__WEBPACK_IMPORTED_MODULE_3__["default"])('Second Id');
            for (const id of [id1, id2])
                idColumn.appendChild(id);
            columns.push(idColumn);
            const dataTypeColumn = (0,_widgets_column__WEBPACK_IMPORTED_MODULE_1__["default"])({ name: 'DATATYPE', color: '4E4F51' });
            const dt1 = (0,_widgets_dataType__WEBPACK_IMPORTED_MODULE_4__["default"])('integer', 'numeric');
            const dt2 = (0,_widgets_dataType__WEBPACK_IMPORTED_MODULE_4__["default"])('varchar(255)', 'character');
            for (const dt of [dt1, dt2])
                dataTypeColumn.appendChild(dt);
            columns.push(dataTypeColumn);
            const constraintsColumn = (0,_widgets_column__WEBPACK_IMPORTED_MODULE_1__["default"])({ name: 'CONSTRAINTS', color: '4E4F51' });
            const cst1 = (0,_widgets_constraint__WEBPACK_IMPORTED_MODULE_5__["default"])('constraint1', ['NOT NULL', 'UUID']);
            const cst2 = (0,_widgets_constraint__WEBPACK_IMPORTED_MODULE_5__["default"])('constraint2', ['INC']);
            for (const cst of [cst1, cst2])
                constraintsColumn.appendChild(cst);
            columns.push(constraintsColumn);
            const primaryKeyColumn = (0,_widgets_column__WEBPACK_IMPORTED_MODULE_1__["default"])({ name: 'PRIMARY', color: '4E4F51' });
            const pk1 = (0,_widgets_key__WEBPACK_IMPORTED_MODULE_2__["default"])({ type: 'PRIMARY', keyLinkSettings: { name: 'ke1', characters: 'test1' } });
            const pk2 = (0,_widgets_key__WEBPACK_IMPORTED_MODULE_2__["default"])({ type: 'PRIMARY', keyLinkSettings: { name: 'ke2', characters: 'test2' } });
            for (const key of [pk1, pk2])
                primaryKeyColumn.appendChild(key);
            columns.push(primaryKeyColumn);
            columns.forEach(column => table.appendChild(column));
            figma.closePlugin();
        }
    });
}
generatePopulatedTable();
// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUMsQ0FBQztZQUVyRCxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDckI7SUFDSCxDQUFDO0NBQUE7QUFDRCxzQkFBc0IsRUFBRSxDQUFDO0FBQ3ZCLDRFQUE0RTtBQUM1RSwyRUFBMkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZWJyYS8uL3NyYy91dGlsL2NvbG9yLnRzIiwid2VicGFjazovL3plYnJhLy4vc3JjL3V0aWwvZm9udC50cyIsIndlYnBhY2s6Ly96ZWJyYS8uL3NyYy91dGlsL2ZyYW1lLnRzIiwid2VicGFjazovL3plYnJhLy4vc3JjL3V0aWwvdGV4dC50cyIsIndlYnBhY2s6Ly96ZWJyYS8uL3NyYy93aWRnZXRzL2NvbHVtbi50cyIsIndlYnBhY2s6Ly96ZWJyYS8uL3NyYy93aWRnZXRzL2NvbnN0cmFpbnQudHMiLCJ3ZWJwYWNrOi8vemVicmEvLi9zcmMvd2lkZ2V0cy9kYXRhVHlwZS50cyIsIndlYnBhY2s6Ly96ZWJyYS8uL3NyYy93aWRnZXRzL2lkLnRzIiwid2VicGFjazovL3plYnJhLy4vc3JjL3dpZGdldHMva2V5LnRzIiwid2VicGFjazovL3plYnJhLy4vc3JjL3dpZGdldHMvdGFibGUudHMiLCJ3ZWJwYWNrOi8vemVicmEvLi9zcmMvd2lkZ2V0cy90aXRsZS50cyIsIndlYnBhY2s6Ly96ZWJyYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly96ZWJyYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vemVicmEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly96ZWJyYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3plYnJhLy4vc3JjL2NvZGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBSZ2Ige1xyXG4gICAgcjogbnVtYmVyO1xyXG4gICAgZzogbnVtYmVyO1xyXG4gICAgYjogbnVtYmVyO1xyXG4gIH1cclxuICBcclxuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yQ29udmVydGVyKGNvbG9yOlJnYnxzdHJpbmcpe1xyXG4gICAgaWYodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyl7XHJcbiAgICAgIGlmKGNvbG9yLmxlbmd0aCAhPT0gNilcclxuICAgICAgICB0aHJvdyBFcnJvcignaGV4IGNvbG9ycyBtdXN0IGhhdmUgNiBjaGFyYWN0ZXJzJyk7XHJcbiAgICAgIGNvbnN0IHIgPSBwYXJzZUludChjb2xvci5zbGljZSgwLDIpLCAxNikvMjU1O1xyXG4gICAgICBjb25zdCBnID0gcGFyc2VJbnQoY29sb3Iuc2xpY2UoMiw0KSwgMTYpLzI1NTtcclxuICAgICAgY29uc3QgYiA9IHBhcnNlSW50KGNvbG9yLnNsaWNlKDQsNiksIDE2KS8yNTU7XHJcbiAgICAgIHJldHVybiB7cixnLGJ9O1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgY29sb3IuciAvPSAyNTU7XHJcbiAgICAgIGNvbG9yLmcgLz0gMjU1O1xyXG4gICAgICBjb2xvci5iIC89IDI1NTtcclxuICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgfVxyXG59IiwiaW50ZXJmYWNlIEZvbnRze1xyXG4gICAgZmFtaWx5OiBzdHJpbmcsXHJcbiAgICBzdHlsZTogc3RyaW5nXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY2FsbEZvbnQoZm9udHM6Rm9udHNbXSl7XHJcbiAgICBmb3IoY29uc3QgZm9udCBvZiBmb250cylcclxuICAgICAgICBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKGZvbnQpO1xyXG59IiwiaW1wb3J0IHtSZ2IsIGNvbG9yQ29udmVydGVyfSBmcm9tIFwiLi9jb2xvclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGcmFtZXtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHBhZGRpbmdEaXJlY3Rpb24/OiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcclxuICAgIHBhZGRpbmc/OiBudW1iZXI7XHJcbiAgICBjbGlwc0NvbnRlbnQ/OiBib29sZWFuO1xyXG4gICAgY29sb3I/OiBzdHJpbmd8UmdiO1xyXG4gICAgbWFpbkF4aXM/OiBcIk5PTkVcIiB8IFwiSE9SSVpPTlRBTFwiIHwgXCJWRVJUSUNBTFwiO1xyXG4gICAgbWFpbkF4aXNTaXppbmc/OiBcIkZJWEVEXCIgfCBcIkFVVE9cIjtcclxuICAgIGFsdEF4aXNTaXppbmc/OiBcIkZJWEVEXCIgfCBcIkFVVE9cIjtcclxuICAgIHJlc2l6ZT86IFtudW1iZXIsIG51bWJlcl07XHJcbiAgICBtYWluQXhpc0FsaWduPzogXCJNSU5cIiB8IFwiTUFYXCIgfCBcIkNFTlRFUlwiIHwgXCJTUEFDRV9CRVRXRUVOXCI7XHJcbiAgICBhbHRBeGlzQWxpZ24/OiBcIk1JTlwiIHwgXCJNQVhcIiB8IFwiQ0VOVEVSXCI7XHJcbiAgICBjb3VudGVyQXhpc1NpemluZ01vZGU/OiBcIkZJWEVEXCIgfCBcIkFVVE9cIjtcclxuICAgIHByaW1hcnlBeGlzU2l6aW5nTW9kZT86IFwiRklYRURcIiB8IFwiQVVUT1wiO1xyXG4gICAgY29ybmVyUmFkaXVzPzogbnVtYmVyXHJcbiAgICBsYXlvdXRBbGlnbj86IFwiTUlOXCIgfCBcIkNFTlRFUlwiIHwgXCJNQVhcIiB8IFwiU1RSRVRDSFwiIHwgXCJJTkhFUklUXCI7XHJcbiAgICBpdGVtU3BhY2luZz86IG51bWJlclxyXG59O1xyXG5cclxuY29uc3QgcGFkZGluZ0Nsb2NrID0gWydwYWRkaW5nVG9wJywgJ3BhZGRpbmdSaWdodCcsICdwYWRkaW5nQm90dG9tJywgJ3BhZGRpbmdMZWZ0J107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRnJhbWVOb2RlKHtcclxuICAgIG5hbWUsXHJcbiAgICBjbGlwc0NvbnRlbnQ9IGZhbHNlLFxyXG4gICAgcGFkZGluZ0RpcmVjdGlvbiA9IFswLDAsMCwwXSxcclxuICAgIGNvbG9yPSdmZmZmZmYnLFxyXG4gICAgbWFpbkF4aXMgPSAnSE9SSVpPTlRBTCcsXHJcbiAgICBtYWluQXhpc1NpemluZyA9ICdBVVRPJyxcclxuICAgIGFsdEF4aXNTaXppbmcgPSAnQVVUTycsXHJcbiAgICByZXNpemUsXHJcbiAgICBtYWluQXhpc0FsaWduPSAnQ0VOVEVSJyxcclxuICAgIGFsdEF4aXNBbGlnbiA9ICdDRU5URVInLFxyXG4gICAgbGF5b3V0QWxpZ24gPSAnU1RSRVRDSCcsXHJcbiAgICBjb3JuZXJSYWRpdXMgPSAwLFxyXG4gICAgaXRlbVNwYWNpbmdcclxufTpGcmFtZSk6RnJhbWVOb2Rle1xyXG4gICAgY29uc3QgZnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xyXG4gICAgZnJhbWUubmFtZSA9IG5hbWU7XHJcbiAgICBmcmFtZS5jbGlwc0NvbnRlbnQgPSBjbGlwc0NvbnRlbnQ7XHJcbiAgICBmcmFtZS5maWxscyA9IFt7dHlwZTogJ1NPTElEJywgY29sb3I6IGNvbG9yQ29udmVydGVyKGNvbG9yKX1dO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDQ7IGkrKylcclxuICAgICAgICBmcmFtZVtwYWRkaW5nQ2xvY2tbaV1dID0gcGFkZGluZ0RpcmVjdGlvbltpXTtcclxuICAgIGlmIChpdGVtU3BhY2luZylcclxuICAgICAgICBmcmFtZS5pdGVtU3BhY2luZyA9IGl0ZW1TcGFjaW5nO1xyXG4gICAgZnJhbWUubGF5b3V0TW9kZSA9IG1haW5BeGlzO1xyXG4gICAgZnJhbWUucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gbWFpbkF4aXNTaXppbmc7XHJcbiAgICBmcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBhbHRBeGlzU2l6aW5nO1xyXG4gICAgcmVzaXplICYmIGZyYW1lLnJlc2l6ZSguLi5yZXNpemUpO1xyXG4gICAgZnJhbWUuY29ybmVyUmFkaXVzID0gY29ybmVyUmFkaXVzO1xyXG4gICAgZnJhbWUucHJpbWFyeUF4aXNBbGlnbkl0ZW1zID0gbWFpbkF4aXNBbGlnbjtcclxuICAgIGZyYW1lLmNvdW50ZXJBeGlzQWxpZ25JdGVtcyA9ICBhbHRBeGlzQWxpZ247XHJcbiAgICByZXR1cm4gZnJhbWU7XHJcbn0iLCJcclxuaW1wb3J0IHtSZ2IsIGNvbG9yQ29udmVydGVyfSBmcm9tIFwiLi9jb2xvclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUZXh0e1xyXG4gICAgZmFtaWx5Pzogc3RyaW5nO1xyXG4gICAgc3R5bGU/OiBzdHJpbmc7XHJcbiAgICBmb250U2l6ZT86IG51bWJlcjtcclxuICAgIGFsaWduSG9yaXpvbnRhbD86XCJDRU5URVJcIiB8IFwiTEVGVFwiIHwgXCJSSUdIVFwiIHwgXCJKVVNUSUZJRURcIjtcclxuICAgIHJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cz86IFtudW1iZXIsIG51bWJlcl07XHJcbiAgICAvL3R5cGU/OiBzdHJpbmc7XHJcbiAgICBjb2xvcj86IHN0cmluZ3xSZ2I7XHJcbiAgICBhbGlnblZlcnRpY2FsPzpcIlRPUFwiIHwgXCJDRU5URVJcIiB8IFwiQk9UVE9NXCI7XHJcbiAgICBib3hBdXRvUmVzaXplPzogICdXSURUSF9BTkRfSEVJR0hUJyB8IFwiTk9ORVwiIHwgXCJIRUlHSFRcIjtcclxuICAgIGF1dG9SZW5hbWU/OiBib29sZWFuO1xyXG4gICAgbmFtZTpzdHJpbmc7XHJcbiAgICBjaGFyYWN0ZXJzOiBzdHJpbmc7XHJcbiAgICB0ZXh0Q2FzZT86IFwiT1JJR0lOQUxcIiB8IFwiVVBQRVJcIiB8IFwiTE9XRVJcIiB8IFwiVElUTEVcIjtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGV4dE5vZGUoe1xyXG4gICAgZmFtaWx5ID0gXCJJQk0gUGxleCBNb25vXCIsXHJcbiAgICBzdHlsZSA9IFwiU2VtaUJvbGRcIixcclxuICAgIGZvbnRTaXplPTE2LFxyXG4gICAgYWxpZ25Ib3Jpem9udGFsID0gXCJDRU5URVJcIixcclxuICAgIHJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cyA9IG51bGwsXHJcbiAgICAvL3R5cGU9ICdTT0xJRCcsIFxyXG4gICAgY29sb3IgPSAnZmZmZmZmJyxcclxuICAgIGFsaWduVmVydGljYWwgPSBcIkNFTlRFUlwiLFxyXG4gICAgYm94QXV0b1Jlc2l6ZSA9ICdXSURUSF9BTkRfSEVJR0hUJyxcclxuICAgIG5hbWUsXHJcbiAgICBhdXRvUmVuYW1lPXRydWUsXHJcbiAgICBjaGFyYWN0ZXJzLFxyXG4gICAgdGV4dENhc2U9XCJPUklHSU5BTFwiXHJcbn06VGV4dCk6VGV4dE5vZGV7XHJcbiAgICBjb25zdCB0ZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xyXG4gICAgdGV4dC5mb250TmFtZSA9IHtmYW1pbHksIHN0eWxlfTtcclxuICAgIHRleHQuZm9udFNpemUgPSBmb250U2l6ZTtcclxuICAgIHRleHQudGV4dEFsaWduSG9yaXpvbnRhbCA9IGFsaWduSG9yaXpvbnRhbDtcclxuICAgIHRleHQudGV4dEFsaWduVmVydGljYWwgPSBhbGlnblZlcnRpY2FsO1xyXG4gICAgdGV4dC5uYW1lID0gbmFtZTtcclxuICAgIHRleHQudGV4dEF1dG9SZXNpemUgPSBib3hBdXRvUmVzaXplO1xyXG4gICAgdGV4dC5hdXRvUmVuYW1lID0gYXV0b1JlbmFtZTtcclxuICAgIHRleHQuY2hhcmFjdGVycyA9IGNoYXJhY3RlcnM7XHJcbiAgICB0ZXh0LnRleHRDYXNlID0gdGV4dENhc2U7XHJcbiAgICB0ZXh0LmZpbGxzID0gW3t0eXBlOlwiU09MSURcIiwgY29sb3I6IGNvbG9yQ29udmVydGVyKGNvbG9yKX1dXHJcbiAgICByZXNpemVXaXRob3V0Q29uc3RyYWludHMgJiYgdGV4dC5yZXNpemVXaXRob3V0Q29uc3RyYWludHMoLi4ucmVzaXplV2l0aG91dENvbnN0cmFpbnRzKTtcclxuICAgIHJldHVybiB0ZXh0O1xyXG59IiwiaW1wb3J0IHtjcmVhdGVGcmFtZU5vZGUsIEZyYW1lfSBmcm9tICcuLi91dGlsL2ZyYW1lJztcclxuXHJcbi8vZGVmYXVsdCB2YWx1ZXMgZm9yIGZyYW1lcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLypcclxuICAgIG5hbWUsXHJcbiAgICBwYWRkaW5nRGlyZWN0aW9uID0gWzAsMCwwLDBdLFxyXG4gICAgY29sb3I9J2ZmZmZmZicsXHJcbiAgICBtYWluQXhpcyA9ICdIT1JJWk9OVEFMJyxcclxuICAgIG1haW5BeGlzU2l6aW5nID0gJ0FVVE8nLFxyXG4gICAgYWx0QXhpc1NpemluZyA9ICdBVVRPJyxcclxuICAgIHJlc2l6ZSxcclxuICAgIG1haW5BeGlzQWxpZ249ICdDRU5URVInLFxyXG4gICAgYWx0QXhpc0FsaWduID0gJ0NFTlRFUidcclxuKi9cclxuXHJcbmNvbnN0IGNvbHVtblNldHRpbmdzID0ge1xyXG4gICAgbWFpbkF4aXM6ICdWRVJUSUNBTCcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDb2x1bW4odXNlclNldHRpbmdzOiBGcmFtZSl7XHJcbiAgICBjb25zdCBzZXR0aW5ncyA9ICBPYmplY3QuYXNzaWduKGNvbHVtblNldHRpbmdzLCB1c2VyU2V0dGluZ3MpO1xyXG4gICAgcmV0dXJuIGNyZWF0ZUZyYW1lTm9kZShzZXR0aW5ncyk7XHJcbn0iLCJpbXBvcnQge2NyZWF0ZVRleHROb2RlLCBUZXh0fSBmcm9tICcuLi91dGlsL3RleHQnXHJcbmltcG9ydCB7IGNyZWF0ZUZyYW1lTm9kZSwgRnJhbWUgfSBmcm9tICcuLi91dGlsL2ZyYW1lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNvbnN0cmFpbnQobmFtZTpzdHJpbmcsIGNvbnN0cmFpbnRzOnN0cmluZ1tdKSB7XHJcbiAgICBjb25zdCB3aWRnZXQgPSBjcmVhdGVGcmFtZU5vZGUoe1xyXG4gICAgICAgIG5hbWUsIFxyXG4gICAgICAgIGNvbG9yOiAnMjIyMzI2JyxcclxuICAgICAgICByZXNpemU6WzEsNDBdLFxyXG4gICAgICAgIGl0ZW1TcGFjaW5nOiA4LFxyXG4gICAgICAgIG1haW5BeGlzOiAnSE9SSVpPTlRBTCdcclxuICAgIH0pO1xyXG5cclxuICAgIGZvcihjb25zdCBjb25zdHJhaW50IG9mIGNvbnN0cmFpbnRzKXtcclxuICAgICAgICBjb25zdCBpZCA9IGNyZWF0ZUZyYW1lTm9kZSh7cGFkZGluZ0RpcmVjdGlvbjogWzAsOCwwLDhdLCBjb3JuZXJSYWRpdXM6MzAsIG5hbWU6IGNvbnN0cmFpbnQsIGNvbG9yOiAnNjI2MzY0J30pO1xyXG4gICAgICAgIGNvbnN0IHRleHQgPSBjcmVhdGVUZXh0Tm9kZSh7dGV4dENhc2U6XCJVUFBFUlwiLCBuYW1lOiAnY29uc3RyYWludCcsIGNoYXJhY3RlcnM6IGNvbnN0cmFpbnQsIGZvbnRTaXplOiAxNCwgc3R5bGU6ICdSZWd1bGFyJ30pO1xyXG4gICAgICAgIGlkLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgICAgIHdpZGdldC5hcHBlbmRDaGlsZChpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHdpZGdldDtcclxufVxyXG4iLCJpbXBvcnQge2NyZWF0ZVRleHROb2RlLCBUZXh0fSBmcm9tICcuLi91dGlsL3RleHQnXHJcbmltcG9ydCB7IGNyZWF0ZUZyYW1lTm9kZSwgRnJhbWUgfSBmcm9tICcuLi91dGlsL2ZyYW1lJztcclxuXHJcbnR5cGUgRGF0YVR5cGUgPSAnY2hhcmFjdGVyJyB8ICdudW1lcmljJyB8ICdkYXRlJyB8ICdiaW5hcnknIHwgJ2Jvb2xlYW4nIHwgJ3N0cmluZycgfCAnZ2VvbWV0cmljJyB8ICduZXR3b3JrIGFkZHJlc3MnIHwgJ2JpdCc7XHJcbmNvbnN0IGRhdGFUeXBlQ29sb3JzID0ge1xyXG4gICAgY2hhcmFjdGVyOiAnRUZDOTAwJyxcclxuICAgIG51bWVyaWM6ICdGMTc0MDAnLFxyXG4gICAgZGF0ZTogJzAwRDBBQicsXHJcbiAgICBiaW5hcnk6ICcwMDI2RUYnLFxyXG4gICAgYm9vbGVhbjogJzAwN0RGMScsXHJcbiAgICBzdHJpbmc6ICdEMDAwMjUnLFxyXG4gICAgZ2VvbWV0cmljOiAnN0VDNjM5JyxcclxuICAgICduZXR3b3JrIGFkZHJlc3MnOiAnQ0YyRUQxJyxcclxuICAgIGJpdDogJzAwRkZGNidcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRGF0YVR5cGUobmFtZTpzdHJpbmcsIGRhdGFUeXBlOkRhdGFUeXBlKTpGcmFtZU5vZGUge1xyXG4gICAgY29uc3QgaWQgPSBjcmVhdGVGcmFtZU5vZGUoe25hbWU6ICdpZF8nK25hbWUsIGNvbG9yOiAnMjIyMzI2JywgcGFkZGluZ0RpcmVjdGlvbjogWzAsMTAsMCwxMF19KTtcclxuICAgIGNvbnN0IHRleHQgPSBjcmVhdGVUZXh0Tm9kZSh7bmFtZSwgY29sb3I6IGRhdGFUeXBlQ29sb3JzW2RhdGFUeXBlXSwgY2hhcmFjdGVyczogbmFtZSwgZm9udFNpemU6IDE0LCB0ZXh0Q2FzZTogJ1VQUEVSJywgc3R5bGU6ICdSZWd1bGFyJ30pXHJcbiAgICBpZC5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgIHJldHVybiBpZDtcclxufVxyXG4iLCJpbXBvcnQge2NyZWF0ZVRleHROb2RlLCBUZXh0fSBmcm9tICcuLi91dGlsL3RleHQnXHJcbmltcG9ydCB7IGNyZWF0ZUZyYW1lTm9kZSwgRnJhbWUgfSBmcm9tICcuLi91dGlsL2ZyYW1lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUlkKG5hbWU6c3RyaW5nKTpGcmFtZU5vZGUge1xyXG4gICAgY29uc3QgaWQgPSBjcmVhdGVGcmFtZU5vZGUoe25hbWUsIGNvbG9yOiAnMjIyMzI2JywgcGFkZGluZ0RpcmVjdGlvbjogWzAsMCwwLDEwXX0pO1xyXG4gICAgY29uc3QgdGV4dCA9IGNyZWF0ZVRleHROb2RlKHtuYW1lLCBjaGFyYWN0ZXJzOiBuYW1lLCBmb250U2l6ZTogMTR9KVxyXG4gICAgaWQuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICByZXR1cm4gaWQ7XHJcbn1cclxuIiwiaW1wb3J0IHtjcmVhdGVUZXh0Tm9kZSwgVGV4dH0gZnJvbSAnLi4vdXRpbC90ZXh0J1xyXG5pbXBvcnQgeyBjcmVhdGVGcmFtZU5vZGUsIEZyYW1lIH0gZnJvbSAnLi4vdXRpbC9mcmFtZSc7XHJcblxyXG5jb25zdCBkZWZhdWx0S2V5U2V0dGluZ3MgPSB7XHJcbiAgICBtYWluQXhpczogJ1ZFUlRJQ0FMJyxcclxuICAgIG1haW5BeGlzU2l6aW5nOiAnQVVUTydcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdEtleVRpdGxlU2V0dGluZ3MgPSB7XHJcbiAgICBmb250U2l6ZTogMTAsXHJcbiAgICByZXNpemVXaXRob3V0Q29uc3RyYWludHM6IFs2NywgMTNdLFxyXG4gICAgbmFtZTogJ2tleVR5cGUnXHJcbn1cclxuY29uc3QgZGVmYWx0S2V5TGlua1NldHRpbmdzID0ge1xyXG4gICAgZm9udFNpemU6IDksXHJcbiAgICBzdHlsZTogJ0xpZ2h0JyxcclxuICAgIGNoYXJhY3RlcnM6ICdOL0EnXHJcbn1cclxuXHJcbmNvbnN0IGZvcmVpZ25LZXlTZXR0aW5ncyA9IHtcclxuICAgIGNvbG9yOiAnMjEyQjNCJyxcclxuICAgIG5hbWU6ICdGT1JFSUdOJywgXHJcbiAgICBjaGFyYWN0ZXJzOiAnRksnXHJcbn1cclxuXHJcbmNvbnN0IHByaW1hcnlLZXlTZXR0aW5ncyA9IHtcclxuICAgIGNvbG9yOiAnMzgzOTNBJyxcclxuICAgIG5hbWU6ICdQUklNQVJZJyxcclxuICAgIGNoYXJhY3RlcnM6ICdQSydcclxufVxyXG5cclxudHlwZSBrZXlUeXBlID0gJ0ZPUkVJR04nIHwgJ1BSSU1BUlknIHwgJ0NVU1RPTSc7XHJcblxyXG5pbnRlcmZhY2UgS2V5e1xyXG4gICAgdHlwZToga2V5VHlwZSwgXHJcbiAgICBrZXlUaXRsZVNldHRpbmdzPzpUZXh0LCBcclxuICAgIGtleUxpbmtTZXR0aW5nczpUZXh0LFxyXG4gICAga2V5U2V0dGluZ3M/OkZyYW1lXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUtleSh7XHJcbiAgICAgICAgdHlwZSwgXHJcbiAgICAgICAga2V5VGl0bGVTZXR0aW5ncyxcclxuICAgICAgICBrZXlMaW5rU2V0dGluZ3MsXHJcbiAgICAgICAga2V5U2V0dGluZ3NcclxuICAgIH06S2V5KXtcclxuXHJcbiAgICBsZXQgdGV4dENvbG9yO1xyXG4gICAgbGV0IGtleVR5cGVTZXR0aW5ncyA9IHt9O1xyXG4gICAgc3dpdGNoKHR5cGUpe1xyXG4gICAgICAgIGNhc2UgJ0ZPUkVJR04nOlxyXG4gICAgICAgICAgICBrZXlUeXBlU2V0dGluZ3MgPSBmb3JlaWduS2V5U2V0dGluZ3M7XHJcbiAgICAgICAgICAgIHRleHRDb2xvciA9IHtjb2xvcjogJzEzNzFmZid9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ1BSSU1BUlknOlxyXG4gICAgICAgICAgICBrZXlUeXBlU2V0dGluZ3MgPSBwcmltYXJ5S2V5U2V0dGluZ3M7XHJcbiAgICAgICAgICAgIHRleHRDb2xvciA9IHtjb2xvcjogJ0ZGNzYxMyd9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRleHRDb2xvciA9IHtuYW1lOiAnQ1VTVE9NJ31cclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3Qga2V5QXNzaWduID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0S2V5U2V0dGluZ3MsIGtleVR5cGVTZXR0aW5ncywga2V5U2V0dGluZ3MpO1xyXG4gICAgY29uc3Qga2V5ID0gY3JlYXRlRnJhbWVOb2RlKGtleUFzc2lnbik7XHJcbiAgICBjb25zdCBrZXlUaXRsZSA9IGNyZWF0ZVRleHROb2RlKE9iamVjdC5hc3NpZ24oZGVmYXVsdEtleVRpdGxlU2V0dGluZ3MsIGtleVR5cGVTZXR0aW5ncywga2V5VGl0bGVTZXR0aW5ncywgdGV4dENvbG9yKSlcclxuICAgIGNvbnN0IGtleUxpbmsgPSBjcmVhdGVUZXh0Tm9kZShPYmplY3QuYXNzaWduKGRlZmFsdEtleUxpbmtTZXR0aW5ncywgdGV4dENvbG9yLCBrZXlMaW5rU2V0dGluZ3MpKVxyXG4gICAga2V5LmFwcGVuZENoaWxkKGtleVRpdGxlKTtcclxuICAgIGtleS5hcHBlbmRDaGlsZChrZXlMaW5rKTtcclxuICAgIHJldHVybiBrZXk7XHJcbn0iLCJpbXBvcnQge2NyZWF0ZUZyYW1lTm9kZX0gZnJvbSAnLi4vdXRpbC9mcmFtZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUYWJsZSh0YWJsZU5hbWU6c3RyaW5nKXtcclxuICAgIGNvbnN0IHRhYmxlID0gY3JlYXRlRnJhbWVOb2RlKHtcclxuICAgICAgICBuYW1lOiB0YWJsZU5hbWUsXHJcbiAgICAgICAgY2xpcHNDb250ZW50OiB0cnVlLFxyXG4gICAgICAgIGNvcm5lclJhZGl1czogNSxcclxuICAgICAgICBtYWluQXhpczogJ1ZFUlRJQ0FMJyxcclxuICAgICAgICBjb2xvcjogJzRFNEY1MScsXHJcbiAgICB9KTtcclxuICAgIC8vdGFibGUuc2V0UGx1Z2luRGF0YSh0YWJsZU5hbWUpO1xyXG4gICAgLy9lcXVpdmFsZW50IHRvIGh1Z3MgY29udGVudFxyXG4gICAgLy90YWJsZS5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSAnQVVUTyc7XHJcbiAgICAvL3RhYmxlLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9ICdBVVRPJztcclxuICAgIHJldHVybiB0YWJsZTtcclxufSIsImltcG9ydCB7Y3JlYXRlVGV4dE5vZGUsIFRleHR9IGZyb20gJy4uL3V0aWwvdGV4dCdcclxuaW1wb3J0IHsgY3JlYXRlRnJhbWVOb2RlLCBGcmFtZSB9IGZyb20gJy4uL3V0aWwvZnJhbWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVGl0bGUodGFibGVOYW1lOnN0cmluZyl7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVGcmFtZU5vZGUoe1xyXG4gICAgICAgIGNvbG9yOiAnNGI0YzRlJyxcclxuICAgICAgICBtYWluQXhpczogJ1ZFUlRJQ0FMJyxcclxuICAgICAgICBwYWRkaW5nRGlyZWN0aW9uOiBbMCwwLDAsMTBdLFxyXG4gICAgICAgIG5hbWU6IHRhYmxlTmFtZSxcclxuICAgICAgICBtYWluQXhpc1NpemluZzogJ0ZJWEVEJyxcclxuICAgICAgICBhbHRBeGlzU2l6aW5nOiAnQVVUTycsXHJcbiAgICAgICAgcmVzaXplOiBbNDAwLDQwXSxcclxuICAgICAgICBtYWluQXhpc0FsaWduOiAnQ0VOVEVSJyxcclxuICAgICAgICBhbHRBeGlzQWxpZ246ICdNSU4nXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlVGV4dE5vZGUoe1xyXG4gICAgICAgIGZhbWlseTonV29yayBTYW5zJyxcclxuICAgICAgICBjaGFyYWN0ZXJzOiB0YWJsZU5hbWUsXHJcbiAgICAgICAgYWxpZ25Ib3Jpem9udGFsOiAnTEVGVCcsXHJcbiAgICAgICAgYWxpZ25WZXJ0aWNhbDogJ0NFTlRFUicsXHJcbiAgICAgICAgbmFtZTogdGFibGVOYW1lXHJcbiAgICB9KTtcclxuICBcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY2FsbEZvbnQgZnJvbSAnLi91dGlsL2ZvbnQnO1xyXG5pbXBvcnQgY3JlYXRlQ29sdW1uIGZyb20gJy4vd2lkZ2V0cy9jb2x1bW4nO1xyXG5pbXBvcnQgY3JlYXRlS2V5IGZyb20gJy4vd2lkZ2V0cy9rZXknO1xyXG5pbXBvcnQgY3JlYXRlSWQgZnJvbSAnLi93aWRnZXRzL2lkJztcclxuaW1wb3J0IGNyZWF0ZURhdGFUeXBlIGZyb20gJy4vd2lkZ2V0cy9kYXRhVHlwZSdcclxuaW1wb3J0IGNyZWF0ZUNvbnN0cmFpbnQgZnJvbSAnLi93aWRnZXRzL2NvbnN0cmFpbnQnO1xyXG5pbXBvcnQgY3JlYXRlVGFibGUgZnJvbSAnLi93aWRnZXRzL3RhYmxlJztcclxuaW1wb3J0IGNyZWF0ZVRpdGxlIGZyb20gJy4vd2lkZ2V0cy90aXRsZSc7XHJcblxyXG4gZmlnbWEuc2hvd1VJKF9faHRtbF9fKTtcclxuXHJcbiAgZmlnbWEudWkucmVzaXplKDQwMCwgNjAwKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlUG9wdWxhdGVkVGFibGUoKXtcclxuXHJcbiAgYXdhaXQgY2FsbEZvbnQoW1xyXG4gICAgeyBmYW1pbHk6IFwiV29yayBTYW5zXCIsIHN0eWxlOiBcIlNlbWlCb2xkXCIgfSxcclxuICAgIHsgZmFtaWx5OiBcIklCTSBQbGV4IE1vbm9cIiwgc3R5bGU6IFwiTGlnaHRcIiB9LFxyXG4gICAgeyBmYW1pbHk6IFwiSUJNIFBsZXggTW9ub1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSxcclxuICAgIHsgZmFtaWx5OiBcIklCTSBQbGV4IE1vbm9cIiwgc3R5bGU6IFwiU2VtaUJvbGRcIiB9XHJcbiAgXSk7XHJcblxyXG4gIGlmIChmaWdtYS5lZGl0b3JUeXBlID09PSAnZmlnbWEnKSB7XHJcbiAgICBjb25zdCB0YWJsZSA9IGNyZWF0ZVRhYmxlKCdtaWxrJyk7XHJcbiAgICBjb25zdCBjb2x1bW5zID0gW107XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVUaXRsZSgndGVzdCcpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IGZvcmVpZ25LZXlDb2x1bW4gPSBjcmVhdGVDb2x1bW4oe25hbWU6J0ZPUkVJR04nLCBjb2xvcjonNEU0RjUxJ30pO1xyXG4gICAgICBjb25zdCBmazEgPSBjcmVhdGVLZXkoe3R5cGU6ICdGT1JFSUdOJywga2V5TGlua1NldHRpbmdzOntuYW1lOidrZTEnLCBjaGFyYWN0ZXJzOiAndGVzdDEnfX0pXHJcbiAgICAgIGNvbnN0IGZrMiA9IGNyZWF0ZUtleSh7dHlwZTogJ0ZPUkVJR04nLCBrZXlMaW5rU2V0dGluZ3M6e25hbWU6J2tlMicsIGNoYXJhY3RlcnM6ICd0ZXN0Mid9fSlcclxuICAgICAgZm9yKGNvbnN0IGtleSBvZiBbZmsxLCBmazJdKVxyXG4gICAgICAgIGZvcmVpZ25LZXlDb2x1bW4uYXBwZW5kQ2hpbGQoa2V5KTtcclxuICAgICAgY29sdW1ucy5wdXNoKGZvcmVpZ25LZXlDb2x1bW4pO1xyXG5cclxuICAgIGNvbnN0IGlkQ29sdW1uID0gY3JlYXRlQ29sdW1uKHtuYW1lOidJRCcsIGNvbG9yOic0RTRGNTEnfSk7XHJcbiAgICAgIGNvbnN0IGlkMSA9IGNyZWF0ZUlkKCdGaXJzdCBJRCcpO1xyXG4gICAgICBjb25zdCBpZDIgPSBjcmVhdGVJZCgnU2Vjb25kIElkJyk7XHJcbiAgICAgIGZvcihjb25zdCBpZCBvZiBbaWQxLCBpZDJdKVxyXG4gICAgICAgIGlkQ29sdW1uLmFwcGVuZENoaWxkKGlkKTtcclxuICAgICAgY29sdW1ucy5wdXNoKGlkQ29sdW1uKTtcclxuXHJcbiAgICBjb25zdCBkYXRhVHlwZUNvbHVtbiA9IGNyZWF0ZUNvbHVtbih7bmFtZTonREFUQVRZUEUnLCBjb2xvcjonNEU0RjUxJ30pO1xyXG4gICAgICBjb25zdCBkdDEgPSBjcmVhdGVEYXRhVHlwZSgnaW50ZWdlcicsICdudW1lcmljJyk7XHJcbiAgICAgIGNvbnN0IGR0MiA9IGNyZWF0ZURhdGFUeXBlKCd2YXJjaGFyKDI1NSknLCAnY2hhcmFjdGVyJyk7XHJcbiAgICAgIGZvcihjb25zdCBkdCBvZiBbZHQxLCBkdDJdKVxyXG4gICAgICAgIGRhdGFUeXBlQ29sdW1uLmFwcGVuZENoaWxkKGR0KTtcclxuICAgICAgY29sdW1ucy5wdXNoKGRhdGFUeXBlQ29sdW1uKTtcclxuXHJcbiAgICBjb25zdCBjb25zdHJhaW50c0NvbHVtbiA9IGNyZWF0ZUNvbHVtbih7bmFtZTonQ09OU1RSQUlOVFMnLCBjb2xvcjonNEU0RjUxJ30pO1xyXG4gICAgICBjb25zdCBjc3QxID0gY3JlYXRlQ29uc3RyYWludCgnY29uc3RyYWludDEnLCBbJ05PVCBOVUxMJywgJ1VVSUQnXSk7XHJcbiAgICAgIGNvbnN0IGNzdDIgPSBjcmVhdGVDb25zdHJhaW50KCdjb25zdHJhaW50MicsIFsnSU5DJ10pO1xyXG4gICAgICBmb3IoY29uc3QgY3N0IG9mIFtjc3QxLCBjc3QyXSlcclxuICAgICAgICBjb25zdHJhaW50c0NvbHVtbi5hcHBlbmRDaGlsZChjc3QpO1xyXG4gICAgICBjb2x1bW5zLnB1c2goY29uc3RyYWludHNDb2x1bW4pO1xyXG5cclxuICAgIGNvbnN0IHByaW1hcnlLZXlDb2x1bW4gPSBjcmVhdGVDb2x1bW4oe25hbWU6J1BSSU1BUlknLCBjb2xvcjonNEU0RjUxJ30pO1xyXG4gICAgICBjb25zdCBwazEgPSBjcmVhdGVLZXkoe3R5cGU6ICdQUklNQVJZJywga2V5TGlua1NldHRpbmdzOntuYW1lOidrZTEnLCBjaGFyYWN0ZXJzOiAndGVzdDEnfX0pXHJcbiAgICAgIGNvbnN0IHBrMiA9IGNyZWF0ZUtleSh7dHlwZTogJ1BSSU1BUlknLCBrZXlMaW5rU2V0dGluZ3M6e25hbWU6J2tlMicsIGNoYXJhY3RlcnM6ICd0ZXN0Mid9fSlcclxuICAgICAgZm9yKGNvbnN0IGtleSBvZiBbcGsxLCBwazJdKVxyXG4gICAgICAgIHByaW1hcnlLZXlDb2x1bW4uYXBwZW5kQ2hpbGQoa2V5KTtcclxuICAgICAgY29sdW1ucy5wdXNoKHByaW1hcnlLZXlDb2x1bW4pO1xyXG4gICAgXHJcbiAgICBjb2x1bW5zLmZvckVhY2goY29sdW1uID0+IHRhYmxlLmFwcGVuZENoaWxkKGNvbHVtbikpO1xyXG5cclxuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XHJcbiAgfVxyXG59XHJcbmdlbmVyYXRlUG9wdWxhdGVkVGFibGUoKTtcclxuICAvLyBNYWtlIHN1cmUgdG8gY2xvc2UgdGhlIHBsdWdpbiB3aGVuIHlvdSdyZSBkb25lLiBPdGhlcndpc2UgdGhlIHBsdWdpbiB3aWxsXHJcbiAgLy8ga2VlcCBydW5uaW5nLCB3aGljaCBzaG93cyB0aGUgY2FuY2VsIGJ1dHRvbiBhdCB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4uXHJcbiAgXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==