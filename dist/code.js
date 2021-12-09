/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./code/util/color.ts":
/*!****************************!*\
  !*** ./code/util/color.ts ***!
  \****************************/
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

/***/ "./code/util/font.ts":
/*!***************************!*\
  !*** ./code/util/font.ts ***!
  \***************************/
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

/***/ "./code/util/frame.ts":
/*!****************************!*\
  !*** ./code/util/frame.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFrameNode": () => (/* binding */ createFrameNode)
/* harmony export */ });
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ "./code/util/color.ts");

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
    frame.layoutAlign = layoutAlign;
    return frame;
}


/***/ }),

/***/ "./code/util/text.ts":
/*!***************************!*\
  !*** ./code/util/text.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTextNode": () => (/* binding */ createTextNode)
/* harmony export */ });
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ "./code/util/color.ts");

;
function createTextNode({ family = "IBM Plex Mono", style = "SemiBold", fontSize = 16, alignHorizontal = "CENTER", resizeWithoutConstraints = null, 
//type= 'SOLID', 
color = 'ffffff', alignVertical = "CENTER", boxAutoResize = 'WIDTH_AND_HEIGHT', name, resize = null, autoRename = true, characters, textCase = "ORIGINAL" }) {
    const text = figma.createText();
    text.fontName = { family, style };
    text.fontSize = fontSize;
    text.textAlignHorizontal = alignHorizontal;
    text.textAlignVertical = alignVertical;
    text.name = name;
    if (resize)
        text.resize(...resize);
    text.textAutoResize = boxAutoResize;
    text.autoRename = autoRename;
    text.characters = characters;
    text.textCase = textCase;
    text.fills = [{ type: "SOLID", color: (0,_color__WEBPACK_IMPORTED_MODULE_0__.colorConverter)(color) }];
    resizeWithoutConstraints && text.resizeWithoutConstraints(...resizeWithoutConstraints);
    return text;
}


/***/ }),

/***/ "./code/widgets/column.ts":
/*!********************************!*\
  !*** ./code/widgets/column.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createColumn)
/* harmony export */ });
/* harmony import */ var _util_frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/frame */ "./code/util/frame.ts");

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
    altAxisSizing: 'AUTO',
    mainAxisSizing: 'AUTO',
};
function createColumn(userSettings) {
    const settings = Object.assign(columnSettings, userSettings);
    return (0,_util_frame__WEBPACK_IMPORTED_MODULE_0__.createFrameNode)(settings);
}


/***/ }),

/***/ "./code/widgets/constraint.ts":
/*!************************************!*\
  !*** ./code/widgets/constraint.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createConstraint)
/* harmony export */ });
/* harmony import */ var _util_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/text */ "./code/util/text.ts");
/* harmony import */ var _util_frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/frame */ "./code/util/frame.ts");


function createConstraint(name, constraints) {
    const widget = (0,_util_frame__WEBPACK_IMPORTED_MODULE_1__.createFrameNode)({
        name,
        paddingDirection: [0, 10, 0, 10],
        color: '222326',
        itemSpacing: 8,
        mainAxis: 'HORIZONTAL',
        mainAxisAlign: 'MIN',
        resize: [10, 40]
    });
    for (const constraint of constraints) {
        const id = (0,_util_frame__WEBPACK_IMPORTED_MODULE_1__.createFrameNode)({ layoutAlign: 'CENTER', paddingDirection: [0, 8, 0, 8], cornerRadius: 30, name: constraint, color: '626364' });
        const text = (0,_util_text__WEBPACK_IMPORTED_MODULE_0__.createTextNode)({ textCase: "UPPER", name: 'constraint', characters: constraint, fontSize: 14, style: 'Regular' });
        id.appendChild(text);
        widget.appendChild(id);
    }
    return widget;
}


/***/ }),

/***/ "./code/widgets/dataType.ts":
/*!**********************************!*\
  !*** ./code/widgets/dataType.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createDataType)
/* harmony export */ });
/* harmony import */ var _util_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/text */ "./code/util/text.ts");
/* harmony import */ var _util_frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/frame */ "./code/util/frame.ts");


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
    const id = (0,_util_frame__WEBPACK_IMPORTED_MODULE_1__.createFrameNode)({ mainAxisAlign: 'MIN', resize: [1, 40], altAxisAlign: "CENTER", name: 'id_' + name, color: '222326', paddingDirection: [0, 10, 0, 10] });
    const text = (0,_util_text__WEBPACK_IMPORTED_MODULE_0__.createTextNode)({ name, color: dataTypeColors[dataType], characters: name, fontSize: 14, textCase: 'UPPER', style: 'Regular' });
    id.appendChild(text);
    return id;
}


/***/ }),

/***/ "./code/widgets/id.ts":
/*!****************************!*\
  !*** ./code/widgets/id.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createId)
/* harmony export */ });
/* harmony import */ var _util_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/text */ "./code/util/text.ts");
/* harmony import */ var _util_frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/frame */ "./code/util/frame.ts");


function createId(name) {
    const id = (0,_util_frame__WEBPACK_IMPORTED_MODULE_1__.createFrameNode)({ name, resize: [10, 40], mainAxisAlign: "MIN", color: '222326', paddingDirection: [0, 0, 0, 10] });
    const text = (0,_util_text__WEBPACK_IMPORTED_MODULE_0__.createTextNode)({ name, characters: name, fontSize: 14 });
    id.appendChild(text);
    return id;
}


/***/ }),

/***/ "./code/widgets/key.ts":
/*!*****************************!*\
  !*** ./code/widgets/key.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createKey)
/* harmony export */ });
/* harmony import */ var _util_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/text */ "./code/util/text.ts");
/* harmony import */ var _util_frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/frame */ "./code/util/frame.ts");


const defaultKeySettings = {
    mainAxis: 'VERTICAL',
    resize: [10, 40],
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

/***/ "./code/widgets/table.ts":
/*!*******************************!*\
  !*** ./code/widgets/table.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTable)
/* harmony export */ });
/* harmony import */ var _util_frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/frame */ "./code/util/frame.ts");

function createTable(tableName) {
    const table = (0,_util_frame__WEBPACK_IMPORTED_MODULE_0__.createFrameNode)({
        name: tableName,
        clipsContent: true,
        layoutAlign: 'STRETCH',
        cornerRadius: 5,
        mainAxis: 'VERTICAL',
        color: '4E4F51',
    });
    return table;
}


/***/ }),

/***/ "./code/widgets/title.ts":
/*!*******************************!*\
  !*** ./code/widgets/title.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTitle)
/* harmony export */ });
/* harmony import */ var _util_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/text */ "./code/util/text.ts");
/* harmony import */ var _util_frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/frame */ "./code/util/frame.ts");


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
/*!**********************!*\
  !*** ./code/code.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_font__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/font */ "./code/util/font.ts");
/* harmony import */ var _widgets_column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgets/column */ "./code/widgets/column.ts");
/* harmony import */ var _widgets_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widgets/key */ "./code/widgets/key.ts");
/* harmony import */ var _widgets_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widgets/id */ "./code/widgets/id.ts");
/* harmony import */ var _widgets_dataType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widgets/dataType */ "./code/widgets/dataType.ts");
/* harmony import */ var _widgets_constraint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widgets/constraint */ "./code/widgets/constraint.ts");
/* harmony import */ var _widgets_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widgets/table */ "./code/widgets/table.ts");
/* harmony import */ var _widgets_title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./widgets/title */ "./code/widgets/title.ts");
/* harmony import */ var _util_frame__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util/frame */ "./code/util/frame.ts");
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
            const grid = (0,_util_frame__WEBPACK_IMPORTED_MODULE_8__.createFrameNode)({ mainAxis: 'HORIZONTAL', name: 'tableData' });
            columns.forEach(column => grid.appendChild(column));
            table.appendChild(grid);
        }
    });
}
generatePopulatedTable();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQU1PLFNBQVMsY0FBYyxDQUFDLEtBQWdCO0lBQzNDLElBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFDO1FBQzNCLElBQUcsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQ25CLE1BQU0sS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFDLEdBQUcsQ0FBQztRQUM3QyxNQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUMsR0FBRyxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBQyxHQUFHLENBQUM7UUFDN0MsT0FBTyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7S0FDaEI7U0FDRztRQUNGLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDO1FBQ2YsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUM7UUFDZixLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQztRQUNmLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQmMsU0FBZSxRQUFRLENBQUMsS0FBYTs7UUFDaEQsS0FBSSxNQUFNLElBQUksSUFBSSxLQUFLO1lBQ25CLE1BQU0sS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQMkM7QUFtQjNDLENBQUM7QUFFRixNQUFNLFlBQVksR0FBRyxDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBRTdFLFNBQVMsZUFBZSxDQUFDLEVBQzVCLElBQUksRUFDSixZQUFZLEdBQUUsS0FBSyxFQUNuQixnQkFBZ0IsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUM1QixLQUFLLEdBQUMsUUFBUSxFQUNkLFFBQVEsR0FBRyxZQUFZLEVBQ3ZCLGNBQWMsR0FBRyxNQUFNLEVBQ3ZCLGFBQWEsR0FBRyxNQUFNLEVBQ3RCLE1BQU0sRUFDTixhQUFhLEdBQUUsUUFBUSxFQUN2QixZQUFZLEdBQUcsUUFBUSxFQUN2QixXQUFXLEdBQUcsU0FBUyxFQUN2QixZQUFZLEdBQUcsQ0FBQyxFQUNoQixXQUFXLEVBQ1I7SUFDSCxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbEIsS0FBSyxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDbEMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsc0RBQWMsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUQsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDckIsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pELElBQUksV0FBVztRQUNYLEtBQUssQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ3BDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO0lBQzVCLEtBQUssQ0FBQyxxQkFBcUIsR0FBRyxjQUFjLENBQUM7SUFDN0MsS0FBSyxDQUFDLHFCQUFxQixHQUFHLGFBQWEsQ0FBQztJQUM1QyxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLEtBQUssQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ2xDLEtBQUssQ0FBQyxxQkFBcUIsR0FBRyxhQUFhLENBQUM7SUFDNUMsS0FBSyxDQUFDLHFCQUFxQixHQUFJLFlBQVksQ0FBQztJQUM1QyxLQUFLLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNoQyxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEQyQztBQWlCM0MsQ0FBQztBQUdLLFNBQVMsY0FBYyxDQUFDLEVBQzNCLE1BQU0sR0FBRyxlQUFlLEVBQ3hCLEtBQUssR0FBRyxVQUFVLEVBQ2xCLFFBQVEsR0FBQyxFQUFFLEVBQ1gsZUFBZSxHQUFHLFFBQVEsRUFDMUIsd0JBQXdCLEdBQUcsSUFBSTtBQUMvQixpQkFBaUI7QUFDakIsS0FBSyxHQUFHLFFBQVEsRUFDaEIsYUFBYSxHQUFHLFFBQVEsRUFDeEIsYUFBYSxHQUFHLGtCQUFrQixFQUNsQyxJQUFJLEVBQ0osTUFBTSxHQUFHLElBQUksRUFDYixVQUFVLEdBQUMsSUFBSSxFQUNmLFVBQVUsRUFDVixRQUFRLEdBQUMsVUFBVSxFQUNqQjtJQUNGLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO0lBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQ3pCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxlQUFlLENBQUM7SUFDM0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGFBQWEsQ0FBQztJQUN2QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNqQixJQUFJLE1BQU07UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7SUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsc0RBQWMsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO0lBQzNELHdCQUF3QixJQUFJLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLHdCQUF3QixDQUFDLENBQUM7SUFDdkYsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEb0Q7QUFFckQsdURBQXVEO0FBQ3ZEOzs7Ozs7Ozs7O0VBVUU7QUFFRixNQUFNLGNBQWMsR0FBRztJQUNuQixRQUFRLEVBQUUsVUFBVTtJQUNwQixhQUFhLEVBQUUsTUFBTTtJQUNyQixjQUFjLEVBQUUsTUFBTTtDQUN6QixDQUFDO0FBRWEsU0FBUyxZQUFZLENBQUMsWUFBbUI7SUFDcEQsTUFBTSxRQUFRLEdBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDOUQsT0FBTyw0REFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3JDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJnRDtBQUNNO0FBRXhDLFNBQVMsZ0JBQWdCLENBQUMsSUFBVyxFQUFFLFdBQW9CO0lBQ3RFLE1BQU0sTUFBTSxHQUFHLDREQUFlLENBQUM7UUFDM0IsSUFBSTtRQUNKLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1FBQzdCLEtBQUssRUFBRSxRQUFRO1FBQ2YsV0FBVyxFQUFFLENBQUM7UUFDZCxRQUFRLEVBQUUsWUFBWTtRQUN0QixhQUFhLEVBQUUsS0FBSztRQUNwQixNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDO0tBQ2xCLENBQUMsQ0FBQztJQUVILEtBQUksTUFBTSxVQUFVLElBQUksV0FBVyxFQUFDO1FBQ2hDLE1BQU0sRUFBRSxHQUFHLDREQUFlLENBQUMsRUFBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsWUFBWSxFQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO1FBQ3JJLE1BQU0sSUFBSSxHQUFHLDBEQUFjLENBQUMsRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFDO1FBQzVILEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUMxQjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJnRDtBQUNNO0FBR3ZELE1BQU0sY0FBYyxHQUFHO0lBQ25CLFNBQVMsRUFBRSxRQUFRO0lBQ25CLE9BQU8sRUFBRSxRQUFRO0lBQ2pCLElBQUksRUFBRSxRQUFRO0lBQ2QsTUFBTSxFQUFFLFFBQVE7SUFDaEIsT0FBTyxFQUFFLFFBQVE7SUFDakIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsaUJBQWlCLEVBQUUsUUFBUTtJQUMzQixHQUFHLEVBQUUsUUFBUTtDQUNoQjtBQUVjLFNBQVMsY0FBYyxDQUFDLElBQVcsRUFBRSxRQUFpQjtJQUNqRSxNQUFNLEVBQUUsR0FBRyw0REFBZSxDQUFDLEVBQUMsYUFBYSxFQUFFLEtBQUssRUFBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUMsWUFBWSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxHQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzNKLE1BQU0sSUFBSSxHQUFHLDBEQUFjLENBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLENBQUM7SUFDekksRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixPQUFPLEVBQUUsQ0FBQztBQUNkLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJnRDtBQUNNO0FBRXhDLFNBQVMsUUFBUSxDQUFDLElBQVc7SUFDeEMsTUFBTSxFQUFFLEdBQUcsNERBQWUsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLEVBQUMsYUFBYSxFQUFFLEtBQUssRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ3RILE1BQU0sSUFBSSxHQUFHLDBEQUFjLENBQUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFDLENBQUM7SUFDbkUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixPQUFPLEVBQUUsQ0FBQztBQUNkLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUmdEO0FBQ007QUFFdkQsTUFBTSxrQkFBa0IsR0FBRztJQUN2QixRQUFRLEVBQUUsVUFBVTtJQUNwQixNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDO0lBQ2QsY0FBYyxFQUFFLE1BQU07Q0FDekI7QUFFRCxNQUFNLHVCQUF1QixHQUFHO0lBQzVCLFFBQVEsRUFBRSxFQUFFO0lBQ1osd0JBQXdCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ2xDLElBQUksRUFBRSxTQUFTO0NBQ2xCO0FBQ0QsTUFBTSxxQkFBcUIsR0FBRztJQUMxQixRQUFRLEVBQUUsQ0FBQztJQUNYLEtBQUssRUFBRSxPQUFPO0lBQ2QsVUFBVSxFQUFFLEtBQUs7Q0FDcEI7QUFFRCxNQUFNLGtCQUFrQixHQUFHO0lBQ3ZCLEtBQUssRUFBRSxRQUFRO0lBQ2YsSUFBSSxFQUFFLFNBQVM7SUFDZixVQUFVLEVBQUUsSUFBSTtDQUNuQjtBQUVELE1BQU0sa0JBQWtCLEdBQUc7SUFDdkIsS0FBSyxFQUFFLFFBQVE7SUFDZixJQUFJLEVBQUUsU0FBUztJQUNmLFVBQVUsRUFBRSxJQUFJO0NBQ25CO0FBV2MsU0FBUyxTQUFTLENBQUMsRUFDMUIsSUFBSSxFQUNKLGdCQUFnQixFQUNoQixlQUFlLEVBQ2YsV0FBVyxFQUNWO0lBRUwsSUFBSSxTQUFTLENBQUM7SUFDZCxJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFDekIsUUFBTyxJQUFJLEVBQUM7UUFDUixLQUFLLFNBQVM7WUFDVixlQUFlLEdBQUcsa0JBQWtCLENBQUM7WUFDckMsU0FBUyxHQUFHLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBQztZQUM3QixNQUFNO1FBQ1YsS0FBSyxTQUFTO1lBQ1YsZUFBZSxHQUFHLGtCQUFrQixDQUFDO1lBQ3JDLFNBQVMsR0FBRyxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUM7WUFDN0IsTUFBTTtRQUNWO1lBQ0ksU0FBUyxHQUFHLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQztLQUNuQztJQUVELE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ2xGLE1BQU0sR0FBRyxHQUFHLDREQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsTUFBTSxRQUFRLEdBQUcsMERBQWMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLHVCQUF1QixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNySCxNQUFNLE9BQU8sR0FBRywwREFBYyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsU0FBUyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ2hHLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QixPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RTZDO0FBRS9CLFNBQVMsV0FBVyxDQUFDLFNBQWdCO0lBQ2hELE1BQU0sS0FBSyxHQUFHLDREQUFlLENBQUM7UUFDMUIsSUFBSSxFQUFFLFNBQVM7UUFDZixZQUFZLEVBQUUsSUFBSTtRQUNsQixXQUFXLEVBQUMsU0FBUztRQUNyQixZQUFZLEVBQUUsQ0FBQztRQUNmLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLEtBQUssRUFBRSxRQUFRO0tBQ2xCLENBQUMsQ0FBQztJQUNILE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWmdEO0FBQ007QUFFeEMsU0FBUyxXQUFXLENBQUMsU0FBZ0I7SUFDaEQsTUFBTSxTQUFTLEdBQUcsNERBQWUsQ0FBQztRQUM5QixLQUFLLEVBQUUsUUFBUTtRQUNmLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUksRUFBRSxTQUFTO1FBQ2YsY0FBYyxFQUFFLE9BQU87UUFDdkIsYUFBYSxFQUFFLE1BQU07UUFDckIsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQztRQUNoQixhQUFhLEVBQUUsUUFBUTtRQUN2QixZQUFZLEVBQUUsS0FBSztLQUN0QixDQUFDLENBQUM7SUFDSCxNQUFNLEtBQUssR0FBRywwREFBYyxDQUFDO1FBQ3pCLE1BQU0sRUFBQyxXQUFXO1FBQ2xCLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLGVBQWUsRUFBRSxNQUFNO1FBQ3ZCLGFBQWEsRUFBRSxRQUFRO1FBQ3ZCLElBQUksRUFBRSxTQUFTO0tBQ2xCLENBQUMsQ0FBQztJQUVILFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsT0FBTyxTQUFTLENBQUM7QUFDckIsQ0FBQzs7Ozs7OztVQ3pCRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFDUztBQUNOO0FBQ0Y7QUFDVztBQUNLO0FBQ1Y7QUFDQTtBQUNHO0FBRTVDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFdEIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBRTVCLFNBQWUsc0JBQXNCOztRQUVuQyxNQUFNLHNEQUFRLENBQUM7WUFDYixFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtZQUMxQyxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtZQUMzQyxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtZQUM3QyxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtTQUMvQyxDQUFDLENBQUM7UUFFSCxJQUFJLEtBQUssQ0FBQyxVQUFVLEtBQUssT0FBTyxFQUFFO1lBQ2hDLE1BQU0sS0FBSyxHQUFHLDBEQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEMsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBRW5CLE1BQU0sS0FBSyxHQUFHLDBEQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUV6QixNQUFNLGdCQUFnQixHQUFHLDJEQUFZLENBQUMsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDO1lBQ3RFLE1BQU0sR0FBRyxHQUFHLHdEQUFTLENBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBQyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxFQUFDLENBQUM7WUFDM0YsTUFBTSxHQUFHLEdBQUcsd0RBQVMsQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFDLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLEVBQUMsQ0FBQztZQUMzRixLQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDekIsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUVqQyxNQUFNLFFBQVEsR0FBRywyREFBWSxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztZQUN6RCxNQUFNLEdBQUcsR0FBRyx1REFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sR0FBRyxHQUFHLHVEQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbEMsS0FBSSxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3hCLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDM0IsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUV6QixNQUFNLGNBQWMsR0FBRywyREFBWSxDQUFDLEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztZQUNyRSxNQUFNLEdBQUcsR0FBRyw2REFBYyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUNqRCxNQUFNLEdBQUcsR0FBRyw2REFBYyxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUN4RCxLQUFJLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDeEIsY0FBYyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNqQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRS9CLE1BQU0saUJBQWlCLEdBQUcsMkRBQVksQ0FBQyxFQUFDLElBQUksRUFBQyxhQUFhLEVBQUUsS0FBSyxFQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7WUFDM0UsTUFBTSxJQUFJLEdBQUcsK0RBQWdCLENBQUMsYUFBYSxFQUFFLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbkUsTUFBTSxJQUFJLEdBQUcsK0RBQWdCLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0RCxLQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztnQkFDM0IsaUJBQWlCLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUVsQyxNQUFNLGdCQUFnQixHQUFHLDJEQUFZLENBQUMsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDO1lBQ3RFLE1BQU0sR0FBRyxHQUFHLHdEQUFTLENBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBQyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxFQUFDLENBQUM7WUFDM0YsTUFBTSxHQUFHLEdBQUcsd0RBQVMsQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFDLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLEVBQUMsQ0FBQztZQUMzRixLQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDekIsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUVqQyxNQUFNLElBQUksR0FBRyw0REFBZSxDQUFDLEVBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztZQUMxRSxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3BELEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekI7SUFDSCxDQUFDO0NBQUE7QUFDRCxzQkFBc0IsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vemVicmEvLi9jb2RlL3V0aWwvY29sb3IudHMiLCJ3ZWJwYWNrOi8vemVicmEvLi9jb2RlL3V0aWwvZm9udC50cyIsIndlYnBhY2s6Ly96ZWJyYS8uL2NvZGUvdXRpbC9mcmFtZS50cyIsIndlYnBhY2s6Ly96ZWJyYS8uL2NvZGUvdXRpbC90ZXh0LnRzIiwid2VicGFjazovL3plYnJhLy4vY29kZS93aWRnZXRzL2NvbHVtbi50cyIsIndlYnBhY2s6Ly96ZWJyYS8uL2NvZGUvd2lkZ2V0cy9jb25zdHJhaW50LnRzIiwid2VicGFjazovL3plYnJhLy4vY29kZS93aWRnZXRzL2RhdGFUeXBlLnRzIiwid2VicGFjazovL3plYnJhLy4vY29kZS93aWRnZXRzL2lkLnRzIiwid2VicGFjazovL3plYnJhLy4vY29kZS93aWRnZXRzL2tleS50cyIsIndlYnBhY2s6Ly96ZWJyYS8uL2NvZGUvd2lkZ2V0cy90YWJsZS50cyIsIndlYnBhY2s6Ly96ZWJyYS8uL2NvZGUvd2lkZ2V0cy90aXRsZS50cyIsIndlYnBhY2s6Ly96ZWJyYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly96ZWJyYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vemVicmEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly96ZWJyYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3plYnJhLy4vY29kZS9jb2RlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgUmdiIHtcclxuICAgIHI6IG51bWJlcjtcclxuICAgIGc6IG51bWJlcjtcclxuICAgIGI6IG51bWJlcjtcclxuICB9XHJcbiAgXHJcbmV4cG9ydCBmdW5jdGlvbiBjb2xvckNvbnZlcnRlcihjb2xvcjpSZ2J8c3RyaW5nKXtcclxuICAgIGlmKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycpe1xyXG4gICAgICBpZihjb2xvci5sZW5ndGggIT09IDYpXHJcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2hleCBjb2xvcnMgbXVzdCBoYXZlIDYgY2hhcmFjdGVycycpO1xyXG4gICAgICBjb25zdCByID0gcGFyc2VJbnQoY29sb3Iuc2xpY2UoMCwyKSwgMTYpLzI1NTtcclxuICAgICAgY29uc3QgZyA9IHBhcnNlSW50KGNvbG9yLnNsaWNlKDIsNCksIDE2KS8yNTU7XHJcbiAgICAgIGNvbnN0IGIgPSBwYXJzZUludChjb2xvci5zbGljZSg0LDYpLCAxNikvMjU1O1xyXG4gICAgICByZXR1cm4ge3IsZyxifTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGNvbG9yLnIgLz0gMjU1O1xyXG4gICAgICBjb2xvci5nIC89IDI1NTtcclxuICAgICAgY29sb3IuYiAvPSAyNTU7XHJcbiAgICAgIHJldHVybiBjb2xvcjtcclxuICAgIH1cclxufSIsImludGVyZmFjZSBGb250c3tcclxuICAgIGZhbWlseTogc3RyaW5nLFxyXG4gICAgc3R5bGU6IHN0cmluZ1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNhbGxGb250KGZvbnRzOkZvbnRzW10pe1xyXG4gICAgZm9yKGNvbnN0IGZvbnQgb2YgZm9udHMpXHJcbiAgICAgICAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyhmb250KTtcclxufSIsImltcG9ydCB7UmdiLCBjb2xvckNvbnZlcnRlcn0gZnJvbSBcIi4vY29sb3JcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRnJhbWV7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBwYWRkaW5nRGlyZWN0aW9uPzogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XHJcbiAgICBwYWRkaW5nPzogbnVtYmVyO1xyXG4gICAgY2xpcHNDb250ZW50PzogYm9vbGVhbjtcclxuICAgIGNvbG9yPzogc3RyaW5nfFJnYjtcclxuICAgIG1haW5BeGlzPzogXCJOT05FXCIgfCBcIkhPUklaT05UQUxcIiB8IFwiVkVSVElDQUxcIjtcclxuICAgIG1haW5BeGlzU2l6aW5nPzogXCJGSVhFRFwiIHwgXCJBVVRPXCI7XHJcbiAgICBhbHRBeGlzU2l6aW5nPzogXCJGSVhFRFwiIHwgXCJBVVRPXCI7XHJcbiAgICByZXNpemU/OiBbbnVtYmVyLCBudW1iZXJdO1xyXG4gICAgbWFpbkF4aXNBbGlnbj86IFwiTUlOXCIgfCBcIk1BWFwiIHwgXCJDRU5URVJcIiB8IFwiU1BBQ0VfQkVUV0VFTlwiO1xyXG4gICAgYWx0QXhpc0FsaWduPzogXCJNSU5cIiB8IFwiTUFYXCIgfCBcIkNFTlRFUlwiO1xyXG4gICAgY291bnRlckF4aXNTaXppbmdNb2RlPzogXCJGSVhFRFwiIHwgXCJBVVRPXCI7XHJcbiAgICBwcmltYXJ5QXhpc1NpemluZ01vZGU/OiBcIkZJWEVEXCIgfCBcIkFVVE9cIjtcclxuICAgIGNvcm5lclJhZGl1cz86IG51bWJlclxyXG4gICAgbGF5b3V0QWxpZ24/OiBcIk1JTlwiIHwgXCJDRU5URVJcIiB8IFwiTUFYXCIgfCBcIlNUUkVUQ0hcIiB8IFwiSU5IRVJJVFwiO1xyXG4gICAgaXRlbVNwYWNpbmc/OiBudW1iZXJcclxufTtcclxuXHJcbmNvbnN0IHBhZGRpbmdDbG9jayA9IFsncGFkZGluZ1RvcCcsICdwYWRkaW5nUmlnaHQnLCAncGFkZGluZ0JvdHRvbScsICdwYWRkaW5nTGVmdCddO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZyYW1lTm9kZSh7XHJcbiAgICBuYW1lLFxyXG4gICAgY2xpcHNDb250ZW50PSBmYWxzZSxcclxuICAgIHBhZGRpbmdEaXJlY3Rpb24gPSBbMCwwLDAsMF0sXHJcbiAgICBjb2xvcj0nZmZmZmZmJyxcclxuICAgIG1haW5BeGlzID0gJ0hPUklaT05UQUwnLFxyXG4gICAgbWFpbkF4aXNTaXppbmcgPSAnQVVUTycsXHJcbiAgICBhbHRBeGlzU2l6aW5nID0gJ0FVVE8nLFxyXG4gICAgcmVzaXplLFxyXG4gICAgbWFpbkF4aXNBbGlnbj0gJ0NFTlRFUicsXHJcbiAgICBhbHRBeGlzQWxpZ24gPSAnQ0VOVEVSJyxcclxuICAgIGxheW91dEFsaWduID0gJ1NUUkVUQ0gnLFxyXG4gICAgY29ybmVyUmFkaXVzID0gMCxcclxuICAgIGl0ZW1TcGFjaW5nXHJcbn06RnJhbWUpOkZyYW1lTm9kZXtcclxuICAgIGNvbnN0IGZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcclxuICAgIGZyYW1lLm5hbWUgPSBuYW1lO1xyXG4gICAgZnJhbWUuY2xpcHNDb250ZW50ID0gY2xpcHNDb250ZW50O1xyXG4gICAgZnJhbWUuZmlsbHMgPSBbe3R5cGU6ICdTT0xJRCcsIGNvbG9yOiBjb2xvckNvbnZlcnRlcihjb2xvcil9XTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCA0OyBpKyspXHJcbiAgICAgICAgZnJhbWVbcGFkZGluZ0Nsb2NrW2ldXSA9IHBhZGRpbmdEaXJlY3Rpb25baV07XHJcbiAgICBpZiAoaXRlbVNwYWNpbmcpXHJcbiAgICAgICAgZnJhbWUuaXRlbVNwYWNpbmcgPSBpdGVtU3BhY2luZztcclxuICAgIGZyYW1lLmxheW91dE1vZGUgPSBtYWluQXhpcztcclxuICAgIGZyYW1lLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IG1haW5BeGlzU2l6aW5nO1xyXG4gICAgZnJhbWUuY291bnRlckF4aXNTaXppbmdNb2RlID0gYWx0QXhpc1NpemluZztcclxuICAgIHJlc2l6ZSAmJiBmcmFtZS5yZXNpemUoLi4ucmVzaXplKTtcclxuICAgIGZyYW1lLmNvcm5lclJhZGl1cyA9IGNvcm5lclJhZGl1cztcclxuICAgIGZyYW1lLnByaW1hcnlBeGlzQWxpZ25JdGVtcyA9IG1haW5BeGlzQWxpZ247XHJcbiAgICBmcmFtZS5jb3VudGVyQXhpc0FsaWduSXRlbXMgPSAgYWx0QXhpc0FsaWduO1xyXG4gICAgZnJhbWUubGF5b3V0QWxpZ24gPSBsYXlvdXRBbGlnbjtcclxuICAgIHJldHVybiBmcmFtZTtcclxufSIsIlxyXG5pbXBvcnQge1JnYiwgY29sb3JDb252ZXJ0ZXJ9IGZyb20gXCIuL2NvbG9yXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRleHR7XHJcbiAgICBmYW1pbHk/OiBzdHJpbmc7XHJcbiAgICBzdHlsZT86IHN0cmluZztcclxuICAgIGZvbnRTaXplPzogbnVtYmVyO1xyXG4gICAgYWxpZ25Ib3Jpem9udGFsPzpcIkNFTlRFUlwiIHwgXCJMRUZUXCIgfCBcIlJJR0hUXCIgfCBcIkpVU1RJRklFRFwiO1xyXG4gICAgcmVzaXplV2l0aG91dENvbnN0cmFpbnRzPzogW251bWJlciwgbnVtYmVyXTtcclxuICAgIHJlc2l6ZT86IFtudW1iZXIsIG51bWJlcl0gfCBudWxsO1xyXG4gICAgLy90eXBlPzogc3RyaW5nO1xyXG4gICAgY29sb3I/OiBzdHJpbmd8UmdiO1xyXG4gICAgYWxpZ25WZXJ0aWNhbD86XCJUT1BcIiB8IFwiQ0VOVEVSXCIgfCBcIkJPVFRPTVwiO1xyXG4gICAgYm94QXV0b1Jlc2l6ZT86ICAnV0lEVEhfQU5EX0hFSUdIVCcgfCBcIk5PTkVcIiB8IFwiSEVJR0hUXCI7XHJcbiAgICBhdXRvUmVuYW1lPzogYm9vbGVhbjtcclxuICAgIG5hbWU6c3RyaW5nO1xyXG4gICAgY2hhcmFjdGVyczogc3RyaW5nO1xyXG4gICAgdGV4dENhc2U/OiBcIk9SSUdJTkFMXCIgfCBcIlVQUEVSXCIgfCBcIkxPV0VSXCIgfCBcIlRJVExFXCI7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRleHROb2RlKHtcclxuICAgIGZhbWlseSA9IFwiSUJNIFBsZXggTW9ub1wiLFxyXG4gICAgc3R5bGUgPSBcIlNlbWlCb2xkXCIsXHJcbiAgICBmb250U2l6ZT0xNixcclxuICAgIGFsaWduSG9yaXpvbnRhbCA9IFwiQ0VOVEVSXCIsXHJcbiAgICByZXNpemVXaXRob3V0Q29uc3RyYWludHMgPSBudWxsLFxyXG4gICAgLy90eXBlPSAnU09MSUQnLCBcclxuICAgIGNvbG9yID0gJ2ZmZmZmZicsXHJcbiAgICBhbGlnblZlcnRpY2FsID0gXCJDRU5URVJcIixcclxuICAgIGJveEF1dG9SZXNpemUgPSAnV0lEVEhfQU5EX0hFSUdIVCcsXHJcbiAgICBuYW1lLFxyXG4gICAgcmVzaXplID0gbnVsbCxcclxuICAgIGF1dG9SZW5hbWU9dHJ1ZSxcclxuICAgIGNoYXJhY3RlcnMsXHJcbiAgICB0ZXh0Q2FzZT1cIk9SSUdJTkFMXCJcclxufTpUZXh0KTpUZXh0Tm9kZXtcclxuICAgIGNvbnN0IHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XHJcbiAgICB0ZXh0LmZvbnROYW1lID0ge2ZhbWlseSwgc3R5bGV9O1xyXG4gICAgdGV4dC5mb250U2l6ZSA9IGZvbnRTaXplO1xyXG4gICAgdGV4dC50ZXh0QWxpZ25Ib3Jpem9udGFsID0gYWxpZ25Ib3Jpem9udGFsO1xyXG4gICAgdGV4dC50ZXh0QWxpZ25WZXJ0aWNhbCA9IGFsaWduVmVydGljYWw7XHJcbiAgICB0ZXh0Lm5hbWUgPSBuYW1lO1xyXG4gICAgaWYgKHJlc2l6ZSlcclxuICAgICAgICB0ZXh0LnJlc2l6ZSguLi5yZXNpemUpO1xyXG4gICAgdGV4dC50ZXh0QXV0b1Jlc2l6ZSA9IGJveEF1dG9SZXNpemU7XHJcbiAgICB0ZXh0LmF1dG9SZW5hbWUgPSBhdXRvUmVuYW1lO1xyXG4gICAgdGV4dC5jaGFyYWN0ZXJzID0gY2hhcmFjdGVycztcclxuICAgIHRleHQudGV4dENhc2UgPSB0ZXh0Q2FzZTtcclxuICAgIHRleHQuZmlsbHMgPSBbe3R5cGU6XCJTT0xJRFwiLCBjb2xvcjogY29sb3JDb252ZXJ0ZXIoY29sb3IpfV1cclxuICAgIHJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cyAmJiB0ZXh0LnJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cyguLi5yZXNpemVXaXRob3V0Q29uc3RyYWludHMpO1xyXG4gICAgcmV0dXJuIHRleHQ7XHJcbn0iLCJpbXBvcnQge2NyZWF0ZUZyYW1lTm9kZSwgRnJhbWV9IGZyb20gJy4uL3V0aWwvZnJhbWUnO1xyXG5cclxuLy9kZWZhdWx0IHZhbHVlcyBmb3IgZnJhbWVzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vKlxyXG4gICAgbmFtZSxcclxuICAgIHBhZGRpbmdEaXJlY3Rpb24gPSBbMCwwLDAsMF0sXHJcbiAgICBjb2xvcj0nZmZmZmZmJyxcclxuICAgIG1haW5BeGlzID0gJ0hPUklaT05UQUwnLFxyXG4gICAgbWFpbkF4aXNTaXppbmcgPSAnQVVUTycsXHJcbiAgICBhbHRBeGlzU2l6aW5nID0gJ0FVVE8nLFxyXG4gICAgcmVzaXplLFxyXG4gICAgbWFpbkF4aXNBbGlnbj0gJ0NFTlRFUicsXHJcbiAgICBhbHRBeGlzQWxpZ24gPSAnQ0VOVEVSJ1xyXG4qL1xyXG5cclxuY29uc3QgY29sdW1uU2V0dGluZ3MgPSB7XHJcbiAgICBtYWluQXhpczogJ1ZFUlRJQ0FMJyxcclxuICAgIGFsdEF4aXNTaXppbmc6ICdBVVRPJyxcclxuICAgIG1haW5BeGlzU2l6aW5nOiAnQVVUTycsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDb2x1bW4odXNlclNldHRpbmdzOiBGcmFtZSl7XHJcbiAgICBjb25zdCBzZXR0aW5ncyA9ICBPYmplY3QuYXNzaWduKGNvbHVtblNldHRpbmdzLCB1c2VyU2V0dGluZ3MpO1xyXG4gICAgcmV0dXJuIGNyZWF0ZUZyYW1lTm9kZShzZXR0aW5ncyk7XHJcbn0iLCJpbXBvcnQge2NyZWF0ZVRleHROb2RlLCBUZXh0fSBmcm9tICcuLi91dGlsL3RleHQnXHJcbmltcG9ydCB7IGNyZWF0ZUZyYW1lTm9kZSwgRnJhbWUgfSBmcm9tICcuLi91dGlsL2ZyYW1lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNvbnN0cmFpbnQobmFtZTpzdHJpbmcsIGNvbnN0cmFpbnRzOnN0cmluZ1tdKSB7XHJcbiAgICBjb25zdCB3aWRnZXQgPSBjcmVhdGVGcmFtZU5vZGUoe1xyXG4gICAgICAgIG5hbWUsIFxyXG4gICAgICAgIHBhZGRpbmdEaXJlY3Rpb246IFswLDEwLDAsMTBdLFxyXG4gICAgICAgIGNvbG9yOiAnMjIyMzI2JyxcclxuICAgICAgICBpdGVtU3BhY2luZzogOCxcclxuICAgICAgICBtYWluQXhpczogJ0hPUklaT05UQUwnLCBcclxuICAgICAgICBtYWluQXhpc0FsaWduOiAnTUlOJyxcclxuICAgICAgICByZXNpemU6IFsxMCw0MF1cclxuICAgIH0pO1xyXG5cclxuICAgIGZvcihjb25zdCBjb25zdHJhaW50IG9mIGNvbnN0cmFpbnRzKXtcclxuICAgICAgICBjb25zdCBpZCA9IGNyZWF0ZUZyYW1lTm9kZSh7bGF5b3V0QWxpZ246ICdDRU5URVInLCBwYWRkaW5nRGlyZWN0aW9uOiBbMCw4LDAsOF0sIGNvcm5lclJhZGl1czozMCwgbmFtZTogY29uc3RyYWludCwgY29sb3I6ICc2MjYzNjQnfSk7XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IGNyZWF0ZVRleHROb2RlKHt0ZXh0Q2FzZTpcIlVQUEVSXCIsIG5hbWU6ICdjb25zdHJhaW50JywgY2hhcmFjdGVyczogY29uc3RyYWludCwgZm9udFNpemU6IDE0LCBzdHlsZTogJ1JlZ3VsYXInfSk7XHJcbiAgICAgICAgaWQuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICAgICAgd2lkZ2V0LmFwcGVuZENoaWxkKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gd2lkZ2V0O1xyXG59XHJcbiIsImltcG9ydCB7Y3JlYXRlVGV4dE5vZGUsIFRleHR9IGZyb20gJy4uL3V0aWwvdGV4dCdcclxuaW1wb3J0IHsgY3JlYXRlRnJhbWVOb2RlLCBGcmFtZSB9IGZyb20gJy4uL3V0aWwvZnJhbWUnO1xyXG5cclxudHlwZSBEYXRhVHlwZSA9ICdjaGFyYWN0ZXInIHwgJ251bWVyaWMnIHwgJ2RhdGUnIHwgJ2JpbmFyeScgfCAnYm9vbGVhbicgfCAnc3RyaW5nJyB8ICdnZW9tZXRyaWMnIHwgJ25ldHdvcmsgYWRkcmVzcycgfCAnYml0JztcclxuY29uc3QgZGF0YVR5cGVDb2xvcnMgPSB7XHJcbiAgICBjaGFyYWN0ZXI6ICdFRkM5MDAnLFxyXG4gICAgbnVtZXJpYzogJ0YxNzQwMCcsXHJcbiAgICBkYXRlOiAnMDBEMEFCJyxcclxuICAgIGJpbmFyeTogJzAwMjZFRicsXHJcbiAgICBib29sZWFuOiAnMDA3REYxJyxcclxuICAgIHN0cmluZzogJ0QwMDAyNScsXHJcbiAgICBnZW9tZXRyaWM6ICc3RUM2MzknLFxyXG4gICAgJ25ldHdvcmsgYWRkcmVzcyc6ICdDRjJFRDEnLFxyXG4gICAgYml0OiAnMDBGRkY2J1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVEYXRhVHlwZShuYW1lOnN0cmluZywgZGF0YVR5cGU6RGF0YVR5cGUpOkZyYW1lTm9kZSB7XHJcbiAgICBjb25zdCBpZCA9IGNyZWF0ZUZyYW1lTm9kZSh7bWFpbkF4aXNBbGlnbjogJ01JTicscmVzaXplOiBbMSw0MF0sYWx0QXhpc0FsaWduOiBcIkNFTlRFUlwiLCBuYW1lOiAnaWRfJytuYW1lLCBjb2xvcjogJzIyMjMyNicsIHBhZGRpbmdEaXJlY3Rpb246IFswLDEwLDAsMTBdfSk7XHJcbiAgICBjb25zdCB0ZXh0ID0gY3JlYXRlVGV4dE5vZGUoe25hbWUsIGNvbG9yOiBkYXRhVHlwZUNvbG9yc1tkYXRhVHlwZV0sIGNoYXJhY3RlcnM6IG5hbWUsIGZvbnRTaXplOiAxNCwgdGV4dENhc2U6ICdVUFBFUicsIHN0eWxlOiAnUmVndWxhcid9KVxyXG4gICAgaWQuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICByZXR1cm4gaWQ7XHJcbn1cclxuIiwiaW1wb3J0IHtjcmVhdGVUZXh0Tm9kZSwgVGV4dH0gZnJvbSAnLi4vdXRpbC90ZXh0J1xyXG5pbXBvcnQgeyBjcmVhdGVGcmFtZU5vZGUsIEZyYW1lIH0gZnJvbSAnLi4vdXRpbC9mcmFtZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVJZChuYW1lOnN0cmluZyk6RnJhbWVOb2RlIHtcclxuICAgIGNvbnN0IGlkID0gY3JlYXRlRnJhbWVOb2RlKHtuYW1lLCByZXNpemU6WzEwLDQwXSxtYWluQXhpc0FsaWduOiBcIk1JTlwiLGNvbG9yOiAnMjIyMzI2JywgcGFkZGluZ0RpcmVjdGlvbjogWzAsMCwwLDEwXX0pO1xyXG4gICAgY29uc3QgdGV4dCA9IGNyZWF0ZVRleHROb2RlKHtuYW1lLCBjaGFyYWN0ZXJzOiBuYW1lLCBmb250U2l6ZTogMTR9KVxyXG4gICAgaWQuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICByZXR1cm4gaWQ7XHJcbn1cclxuIiwiaW1wb3J0IHtjcmVhdGVUZXh0Tm9kZSwgVGV4dH0gZnJvbSAnLi4vdXRpbC90ZXh0J1xyXG5pbXBvcnQgeyBjcmVhdGVGcmFtZU5vZGUsIEZyYW1lIH0gZnJvbSAnLi4vdXRpbC9mcmFtZSc7XHJcblxyXG5jb25zdCBkZWZhdWx0S2V5U2V0dGluZ3MgPSB7XHJcbiAgICBtYWluQXhpczogJ1ZFUlRJQ0FMJyxcclxuICAgIHJlc2l6ZTpbMTAsNDBdLFxyXG4gICAgbWFpbkF4aXNTaXppbmc6ICdBVVRPJ1xyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0S2V5VGl0bGVTZXR0aW5ncyA9IHtcclxuICAgIGZvbnRTaXplOiAxMCxcclxuICAgIHJlc2l6ZVdpdGhvdXRDb25zdHJhaW50czogWzY3LCAxM10sXHJcbiAgICBuYW1lOiAna2V5VHlwZSdcclxufVxyXG5jb25zdCBkZWZhbHRLZXlMaW5rU2V0dGluZ3MgPSB7XHJcbiAgICBmb250U2l6ZTogOSxcclxuICAgIHN0eWxlOiAnTGlnaHQnLFxyXG4gICAgY2hhcmFjdGVyczogJ04vQSdcclxufVxyXG5cclxuY29uc3QgZm9yZWlnbktleVNldHRpbmdzID0ge1xyXG4gICAgY29sb3I6ICcyMTJCM0InLFxyXG4gICAgbmFtZTogJ0ZPUkVJR04nLCBcclxuICAgIGNoYXJhY3RlcnM6ICdGSydcclxufVxyXG5cclxuY29uc3QgcHJpbWFyeUtleVNldHRpbmdzID0ge1xyXG4gICAgY29sb3I6ICczODM5M0EnLFxyXG4gICAgbmFtZTogJ1BSSU1BUlknLFxyXG4gICAgY2hhcmFjdGVyczogJ1BLJ1xyXG59XHJcblxyXG50eXBlIGtleVR5cGUgPSAnRk9SRUlHTicgfCAnUFJJTUFSWScgfCAnQ1VTVE9NJztcclxuXHJcbmludGVyZmFjZSBLZXl7XHJcbiAgICB0eXBlOiBrZXlUeXBlLCBcclxuICAgIGtleVRpdGxlU2V0dGluZ3M/OlRleHQsIFxyXG4gICAga2V5TGlua1NldHRpbmdzOlRleHQsXHJcbiAgICBrZXlTZXR0aW5ncz86RnJhbWVcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlS2V5KHtcclxuICAgICAgICB0eXBlLCBcclxuICAgICAgICBrZXlUaXRsZVNldHRpbmdzLFxyXG4gICAgICAgIGtleUxpbmtTZXR0aW5ncyxcclxuICAgICAgICBrZXlTZXR0aW5nc1xyXG4gICAgfTpLZXkpe1xyXG5cclxuICAgIGxldCB0ZXh0Q29sb3I7XHJcbiAgICBsZXQga2V5VHlwZVNldHRpbmdzID0ge307XHJcbiAgICBzd2l0Y2godHlwZSl7XHJcbiAgICAgICAgY2FzZSAnRk9SRUlHTic6XHJcbiAgICAgICAgICAgIGtleVR5cGVTZXR0aW5ncyA9IGZvcmVpZ25LZXlTZXR0aW5ncztcclxuICAgICAgICAgICAgdGV4dENvbG9yID0ge2NvbG9yOiAnMTM3MWZmJ31cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnUFJJTUFSWSc6XHJcbiAgICAgICAgICAgIGtleVR5cGVTZXR0aW5ncyA9IHByaW1hcnlLZXlTZXR0aW5ncztcclxuICAgICAgICAgICAgdGV4dENvbG9yID0ge2NvbG9yOiAnRkY3NjEzJ31cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGV4dENvbG9yID0ge25hbWU6ICdDVVNUT00nfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBrZXlBc3NpZ24gPSBPYmplY3QuYXNzaWduKGRlZmF1bHRLZXlTZXR0aW5ncywga2V5VHlwZVNldHRpbmdzLCBrZXlTZXR0aW5ncyk7XHJcbiAgICBjb25zdCBrZXkgPSBjcmVhdGVGcmFtZU5vZGUoa2V5QXNzaWduKTtcclxuICAgIGNvbnN0IGtleVRpdGxlID0gY3JlYXRlVGV4dE5vZGUoT2JqZWN0LmFzc2lnbihkZWZhdWx0S2V5VGl0bGVTZXR0aW5ncywga2V5VHlwZVNldHRpbmdzLCBrZXlUaXRsZVNldHRpbmdzLCB0ZXh0Q29sb3IpKVxyXG4gICAgY29uc3Qga2V5TGluayA9IGNyZWF0ZVRleHROb2RlKE9iamVjdC5hc3NpZ24oZGVmYWx0S2V5TGlua1NldHRpbmdzLCB0ZXh0Q29sb3IsIGtleUxpbmtTZXR0aW5ncykpXHJcbiAgICBrZXkuYXBwZW5kQ2hpbGQoa2V5VGl0bGUpO1xyXG4gICAga2V5LmFwcGVuZENoaWxkKGtleUxpbmspO1xyXG4gICAgcmV0dXJuIGtleTtcclxufSIsImltcG9ydCB7Y3JlYXRlRnJhbWVOb2RlfSBmcm9tICcuLi91dGlsL2ZyYW1lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRhYmxlKHRhYmxlTmFtZTpzdHJpbmcpe1xyXG4gICAgY29uc3QgdGFibGUgPSBjcmVhdGVGcmFtZU5vZGUoe1xyXG4gICAgICAgIG5hbWU6IHRhYmxlTmFtZSxcclxuICAgICAgICBjbGlwc0NvbnRlbnQ6IHRydWUsXHJcbiAgICAgICAgbGF5b3V0QWxpZ246J1NUUkVUQ0gnLFxyXG4gICAgICAgIGNvcm5lclJhZGl1czogNSxcclxuICAgICAgICBtYWluQXhpczogJ1ZFUlRJQ0FMJyxcclxuICAgICAgICBjb2xvcjogJzRFNEY1MScsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0YWJsZTtcclxufSIsImltcG9ydCB7Y3JlYXRlVGV4dE5vZGUsIFRleHR9IGZyb20gJy4uL3V0aWwvdGV4dCdcclxuaW1wb3J0IHsgY3JlYXRlRnJhbWVOb2RlLCBGcmFtZSB9IGZyb20gJy4uL3V0aWwvZnJhbWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVGl0bGUodGFibGVOYW1lOnN0cmluZyl7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVGcmFtZU5vZGUoe1xyXG4gICAgICAgIGNvbG9yOiAnNGI0YzRlJyxcclxuICAgICAgICBtYWluQXhpczogJ1ZFUlRJQ0FMJyxcclxuICAgICAgICBwYWRkaW5nRGlyZWN0aW9uOiBbMCwwLDAsMTBdLFxyXG4gICAgICAgIG5hbWU6IHRhYmxlTmFtZSxcclxuICAgICAgICBtYWluQXhpc1NpemluZzogJ0ZJWEVEJyxcclxuICAgICAgICBhbHRBeGlzU2l6aW5nOiAnQVVUTycsXHJcbiAgICAgICAgcmVzaXplOiBbNDAwLDQwXSxcclxuICAgICAgICBtYWluQXhpc0FsaWduOiAnQ0VOVEVSJyxcclxuICAgICAgICBhbHRBeGlzQWxpZ246ICdNSU4nXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlVGV4dE5vZGUoe1xyXG4gICAgICAgIGZhbWlseTonV29yayBTYW5zJyxcclxuICAgICAgICBjaGFyYWN0ZXJzOiB0YWJsZU5hbWUsXHJcbiAgICAgICAgYWxpZ25Ib3Jpem9udGFsOiAnTEVGVCcsXHJcbiAgICAgICAgYWxpZ25WZXJ0aWNhbDogJ0NFTlRFUicsXHJcbiAgICAgICAgbmFtZTogdGFibGVOYW1lXHJcbiAgICB9KTtcclxuICBcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY2FsbEZvbnQgZnJvbSAnLi91dGlsL2ZvbnQnO1xyXG5pbXBvcnQgY3JlYXRlQ29sdW1uIGZyb20gJy4vd2lkZ2V0cy9jb2x1bW4nO1xyXG5pbXBvcnQgY3JlYXRlS2V5IGZyb20gJy4vd2lkZ2V0cy9rZXknO1xyXG5pbXBvcnQgY3JlYXRlSWQgZnJvbSAnLi93aWRnZXRzL2lkJztcclxuaW1wb3J0IGNyZWF0ZURhdGFUeXBlIGZyb20gJy4vd2lkZ2V0cy9kYXRhVHlwZSdcclxuaW1wb3J0IGNyZWF0ZUNvbnN0cmFpbnQgZnJvbSAnLi93aWRnZXRzL2NvbnN0cmFpbnQnO1xyXG5pbXBvcnQgY3JlYXRlVGFibGUgZnJvbSAnLi93aWRnZXRzL3RhYmxlJztcclxuaW1wb3J0IGNyZWF0ZVRpdGxlIGZyb20gJy4vd2lkZ2V0cy90aXRsZSc7XHJcbmltcG9ydCB7Y3JlYXRlRnJhbWVOb2RlfSBmcm9tICcuL3V0aWwvZnJhbWUnO1xyXG5cclxuIGZpZ21hLnNob3dVSShfX2h0bWxfXyk7XHJcblxyXG4gIGZpZ21hLnVpLnJlc2l6ZSg0MDAsIDYwMCk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVBvcHVsYXRlZFRhYmxlKCl7XHJcblxyXG4gIGF3YWl0IGNhbGxGb250KFtcclxuICAgIHsgZmFtaWx5OiBcIldvcmsgU2Fuc1wiLCBzdHlsZTogXCJTZW1pQm9sZFwiIH0sXHJcbiAgICB7IGZhbWlseTogXCJJQk0gUGxleCBNb25vXCIsIHN0eWxlOiBcIkxpZ2h0XCIgfSxcclxuICAgIHsgZmFtaWx5OiBcIklCTSBQbGV4IE1vbm9cIiwgc3R5bGU6IFwiUmVndWxhclwiIH0sXHJcbiAgICB7IGZhbWlseTogXCJJQk0gUGxleCBNb25vXCIsIHN0eWxlOiBcIlNlbWlCb2xkXCIgfVxyXG4gIF0pO1xyXG5cclxuICBpZiAoZmlnbWEuZWRpdG9yVHlwZSA9PT0gJ2ZpZ21hJykge1xyXG4gICAgY29uc3QgdGFibGUgPSBjcmVhdGVUYWJsZSgnbWlsaycpO1xyXG4gICAgY29uc3QgY29sdW1ucyA9IFtdO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlVGl0bGUoJ3Rlc3QnKTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgICBjb25zdCBmb3JlaWduS2V5Q29sdW1uID0gY3JlYXRlQ29sdW1uKHtuYW1lOidGT1JFSUdOJywgY29sb3I6JzRFNEY1MSd9KTtcclxuICAgICAgY29uc3QgZmsxID0gY3JlYXRlS2V5KHt0eXBlOiAnRk9SRUlHTicsIGtleUxpbmtTZXR0aW5nczp7bmFtZTona2UxJywgY2hhcmFjdGVyczogJ3Rlc3QxJ319KVxyXG4gICAgICBjb25zdCBmazIgPSBjcmVhdGVLZXkoe3R5cGU6ICdGT1JFSUdOJywga2V5TGlua1NldHRpbmdzOntuYW1lOidrZTInLCBjaGFyYWN0ZXJzOiAndGVzdDInfX0pXHJcbiAgICAgIGZvcihjb25zdCBrZXkgb2YgW2ZrMSwgZmsyXSlcclxuICAgICAgICBmb3JlaWduS2V5Q29sdW1uLmFwcGVuZENoaWxkKGtleSk7XHJcbiAgICAgIGNvbHVtbnMucHVzaChmb3JlaWduS2V5Q29sdW1uKTtcclxuXHJcbiAgICBjb25zdCBpZENvbHVtbiA9IGNyZWF0ZUNvbHVtbih7bmFtZTonSUQnLCBjb2xvcjonNEU0RjUxJ30pO1xyXG4gICAgICBjb25zdCBpZDEgPSBjcmVhdGVJZCgnRmlyc3QgSUQnKTtcclxuICAgICAgY29uc3QgaWQyID0gY3JlYXRlSWQoJ1NlY29uZCBJZCcpO1xyXG4gICAgICBmb3IoY29uc3QgaWQgb2YgW2lkMSwgaWQyXSlcclxuICAgICAgICBpZENvbHVtbi5hcHBlbmRDaGlsZChpZCk7XHJcbiAgICAgIGNvbHVtbnMucHVzaChpZENvbHVtbik7XHJcblxyXG4gICAgY29uc3QgZGF0YVR5cGVDb2x1bW4gPSBjcmVhdGVDb2x1bW4oe25hbWU6J0RBVEFUWVBFJywgY29sb3I6JzRFNEY1MSd9KTtcclxuICAgICAgY29uc3QgZHQxID0gY3JlYXRlRGF0YVR5cGUoJ2ludGVnZXInLCAnbnVtZXJpYycpO1xyXG4gICAgICBjb25zdCBkdDIgPSBjcmVhdGVEYXRhVHlwZSgndmFyY2hhcigyNTUpJywgJ2NoYXJhY3RlcicpO1xyXG4gICAgICBmb3IoY29uc3QgZHQgb2YgW2R0MSwgZHQyXSlcclxuICAgICAgICBkYXRhVHlwZUNvbHVtbi5hcHBlbmRDaGlsZChkdCk7XHJcbiAgICAgIGNvbHVtbnMucHVzaChkYXRhVHlwZUNvbHVtbik7XHJcblxyXG4gICAgY29uc3QgY29uc3RyYWludHNDb2x1bW4gPSBjcmVhdGVDb2x1bW4oe25hbWU6J0NPTlNUUkFJTlRTJywgY29sb3I6JzRFNEY1MSd9KTtcclxuICAgICAgY29uc3QgY3N0MSA9IGNyZWF0ZUNvbnN0cmFpbnQoJ2NvbnN0cmFpbnQxJywgWydOT1QgTlVMTCcsICdVVUlEJ10pO1xyXG4gICAgICBjb25zdCBjc3QyID0gY3JlYXRlQ29uc3RyYWludCgnY29uc3RyYWludDInLCBbJ0lOQyddKTtcclxuICAgICAgZm9yKGNvbnN0IGNzdCBvZiBbY3N0MSwgY3N0Ml0pXHJcbiAgICAgICAgY29uc3RyYWludHNDb2x1bW4uYXBwZW5kQ2hpbGQoY3N0KTtcclxuICAgICAgY29sdW1ucy5wdXNoKGNvbnN0cmFpbnRzQ29sdW1uKTtcclxuXHJcbiAgICBjb25zdCBwcmltYXJ5S2V5Q29sdW1uID0gY3JlYXRlQ29sdW1uKHtuYW1lOidQUklNQVJZJywgY29sb3I6JzRFNEY1MSd9KTtcclxuICAgICAgY29uc3QgcGsxID0gY3JlYXRlS2V5KHt0eXBlOiAnUFJJTUFSWScsIGtleUxpbmtTZXR0aW5nczp7bmFtZTona2UxJywgY2hhcmFjdGVyczogJ3Rlc3QxJ319KVxyXG4gICAgICBjb25zdCBwazIgPSBjcmVhdGVLZXkoe3R5cGU6ICdQUklNQVJZJywga2V5TGlua1NldHRpbmdzOntuYW1lOidrZTInLCBjaGFyYWN0ZXJzOiAndGVzdDInfX0pXHJcbiAgICAgIGZvcihjb25zdCBrZXkgb2YgW3BrMSwgcGsyXSlcclxuICAgICAgICBwcmltYXJ5S2V5Q29sdW1uLmFwcGVuZENoaWxkKGtleSk7XHJcbiAgICAgIGNvbHVtbnMucHVzaChwcmltYXJ5S2V5Q29sdW1uKTtcclxuICAgIFxyXG4gICAgY29uc3QgZ3JpZCA9IGNyZWF0ZUZyYW1lTm9kZSh7bWFpbkF4aXM6ICdIT1JJWk9OVEFMJywgbmFtZTogJ3RhYmxlRGF0YSd9KTtcclxuICAgIGNvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4gZ3JpZC5hcHBlbmRDaGlsZChjb2x1bW4pKTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKGdyaWQpO1xyXG4gIH1cclxufVxyXG5nZW5lcmF0ZVBvcHVsYXRlZFRhYmxlKCk7XHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=