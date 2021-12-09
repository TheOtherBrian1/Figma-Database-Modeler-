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
    frame.layoutAlign = layoutAlign;
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
    altAxisSizing: 'AUTO',
    mainAxisSizing: 'AUTO',
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
    const id = (0,_util_frame__WEBPACK_IMPORTED_MODULE_1__.createFrameNode)({ mainAxisAlign: 'MIN', resize: [1, 40], altAxisAlign: "CENTER", name: 'id_' + name, color: '222326', paddingDirection: [0, 10, 0, 10] });
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
    const id = (0,_util_frame__WEBPACK_IMPORTED_MODULE_1__.createFrameNode)({ name, resize: [10, 40], mainAxisAlign: "MIN", color: '222326', paddingDirection: [0, 0, 0, 10] });
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
        layoutAlign: 'STRETCH',
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
/* harmony import */ var _util_frame__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util/frame */ "./src/util/frame.ts");
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
            // figma.closePlugin();
        }
    });
}
generatePopulatedTable();
// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVEsRUFBQyxDQUFDLENBQUM7WUFDdEUsTUFBTSxHQUFHLEdBQUcsd0RBQVMsQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFDLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLEVBQUMsQ0FBQztZQUMzRixNQUFNLEdBQUcsR0FBRyx3REFBUyxDQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUMsRUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsRUFBQyxDQUFDO1lBQzNGLEtBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUN6QixnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDcEMsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBRWpDLE1BQU0sSUFBSSxHQUFHLDREQUFlLENBQUMsRUFBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDO1lBQzFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDcEQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUd6Qix1QkFBdUI7U0FDdkI7SUFDSCxDQUFDO0NBQUE7QUFDRCxzQkFBc0IsRUFBRSxDQUFDO0FBQ3ZCLDRFQUE0RTtBQUM1RSwyRUFBMkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZWJyYS8uL3NyYy91dGlsL2NvbG9yLnRzIiwid2VicGFjazovL3plYnJhLy4vc3JjL3V0aWwvZm9udC50cyIsIndlYnBhY2s6Ly96ZWJyYS8uL3NyYy91dGlsL2ZyYW1lLnRzIiwid2VicGFjazovL3plYnJhLy4vc3JjL3V0aWwvdGV4dC50cyIsIndlYnBhY2s6Ly96ZWJyYS8uL3NyYy93aWRnZXRzL2NvbHVtbi50cyIsIndlYnBhY2s6Ly96ZWJyYS8uL3NyYy93aWRnZXRzL2NvbnN0cmFpbnQudHMiLCJ3ZWJwYWNrOi8vemVicmEvLi9zcmMvd2lkZ2V0cy9kYXRhVHlwZS50cyIsIndlYnBhY2s6Ly96ZWJyYS8uL3NyYy93aWRnZXRzL2lkLnRzIiwid2VicGFjazovL3plYnJhLy4vc3JjL3dpZGdldHMva2V5LnRzIiwid2VicGFjazovL3plYnJhLy4vc3JjL3dpZGdldHMvdGFibGUudHMiLCJ3ZWJwYWNrOi8vemVicmEvLi9zcmMvd2lkZ2V0cy90aXRsZS50cyIsIndlYnBhY2s6Ly96ZWJyYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly96ZWJyYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vemVicmEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly96ZWJyYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3plYnJhLy4vc3JjL2NvZGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBSZ2Ige1xyXG4gICAgcjogbnVtYmVyO1xyXG4gICAgZzogbnVtYmVyO1xyXG4gICAgYjogbnVtYmVyO1xyXG4gIH1cclxuICBcclxuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yQ29udmVydGVyKGNvbG9yOlJnYnxzdHJpbmcpe1xyXG4gICAgaWYodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyl7XHJcbiAgICAgIGlmKGNvbG9yLmxlbmd0aCAhPT0gNilcclxuICAgICAgICB0aHJvdyBFcnJvcignaGV4IGNvbG9ycyBtdXN0IGhhdmUgNiBjaGFyYWN0ZXJzJyk7XHJcbiAgICAgIGNvbnN0IHIgPSBwYXJzZUludChjb2xvci5zbGljZSgwLDIpLCAxNikvMjU1O1xyXG4gICAgICBjb25zdCBnID0gcGFyc2VJbnQoY29sb3Iuc2xpY2UoMiw0KSwgMTYpLzI1NTtcclxuICAgICAgY29uc3QgYiA9IHBhcnNlSW50KGNvbG9yLnNsaWNlKDQsNiksIDE2KS8yNTU7XHJcbiAgICAgIHJldHVybiB7cixnLGJ9O1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgY29sb3IuciAvPSAyNTU7XHJcbiAgICAgIGNvbG9yLmcgLz0gMjU1O1xyXG4gICAgICBjb2xvci5iIC89IDI1NTtcclxuICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgfVxyXG59IiwiaW50ZXJmYWNlIEZvbnRze1xyXG4gICAgZmFtaWx5OiBzdHJpbmcsXHJcbiAgICBzdHlsZTogc3RyaW5nXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY2FsbEZvbnQoZm9udHM6Rm9udHNbXSl7XHJcbiAgICBmb3IoY29uc3QgZm9udCBvZiBmb250cylcclxuICAgICAgICBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKGZvbnQpO1xyXG59IiwiaW1wb3J0IHtSZ2IsIGNvbG9yQ29udmVydGVyfSBmcm9tIFwiLi9jb2xvclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGcmFtZXtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHBhZGRpbmdEaXJlY3Rpb24/OiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcclxuICAgIHBhZGRpbmc/OiBudW1iZXI7XHJcbiAgICBjbGlwc0NvbnRlbnQ/OiBib29sZWFuO1xyXG4gICAgY29sb3I/OiBzdHJpbmd8UmdiO1xyXG4gICAgbWFpbkF4aXM/OiBcIk5PTkVcIiB8IFwiSE9SSVpPTlRBTFwiIHwgXCJWRVJUSUNBTFwiO1xyXG4gICAgbWFpbkF4aXNTaXppbmc/OiBcIkZJWEVEXCIgfCBcIkFVVE9cIjtcclxuICAgIGFsdEF4aXNTaXppbmc/OiBcIkZJWEVEXCIgfCBcIkFVVE9cIjtcclxuICAgIHJlc2l6ZT86IFtudW1iZXIsIG51bWJlcl07XHJcbiAgICBtYWluQXhpc0FsaWduPzogXCJNSU5cIiB8IFwiTUFYXCIgfCBcIkNFTlRFUlwiIHwgXCJTUEFDRV9CRVRXRUVOXCI7XHJcbiAgICBhbHRBeGlzQWxpZ24/OiBcIk1JTlwiIHwgXCJNQVhcIiB8IFwiQ0VOVEVSXCI7XHJcbiAgICBjb3VudGVyQXhpc1NpemluZ01vZGU/OiBcIkZJWEVEXCIgfCBcIkFVVE9cIjtcclxuICAgIHByaW1hcnlBeGlzU2l6aW5nTW9kZT86IFwiRklYRURcIiB8IFwiQVVUT1wiO1xyXG4gICAgY29ybmVyUmFkaXVzPzogbnVtYmVyXHJcbiAgICBsYXlvdXRBbGlnbj86IFwiTUlOXCIgfCBcIkNFTlRFUlwiIHwgXCJNQVhcIiB8IFwiU1RSRVRDSFwiIHwgXCJJTkhFUklUXCI7XHJcbiAgICBpdGVtU3BhY2luZz86IG51bWJlclxyXG59O1xyXG5cclxuY29uc3QgcGFkZGluZ0Nsb2NrID0gWydwYWRkaW5nVG9wJywgJ3BhZGRpbmdSaWdodCcsICdwYWRkaW5nQm90dG9tJywgJ3BhZGRpbmdMZWZ0J107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRnJhbWVOb2RlKHtcclxuICAgIG5hbWUsXHJcbiAgICBjbGlwc0NvbnRlbnQ9IGZhbHNlLFxyXG4gICAgcGFkZGluZ0RpcmVjdGlvbiA9IFswLDAsMCwwXSxcclxuICAgIGNvbG9yPSdmZmZmZmYnLFxyXG4gICAgbWFpbkF4aXMgPSAnSE9SSVpPTlRBTCcsXHJcbiAgICBtYWluQXhpc1NpemluZyA9ICdBVVRPJyxcclxuICAgIGFsdEF4aXNTaXppbmcgPSAnQVVUTycsXHJcbiAgICByZXNpemUsXHJcbiAgICBtYWluQXhpc0FsaWduPSAnQ0VOVEVSJyxcclxuICAgIGFsdEF4aXNBbGlnbiA9ICdDRU5URVInLFxyXG4gICAgbGF5b3V0QWxpZ24gPSAnU1RSRVRDSCcsXHJcbiAgICBjb3JuZXJSYWRpdXMgPSAwLFxyXG4gICAgaXRlbVNwYWNpbmdcclxufTpGcmFtZSk6RnJhbWVOb2Rle1xyXG4gICAgY29uc3QgZnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xyXG4gICAgZnJhbWUubmFtZSA9IG5hbWU7XHJcbiAgICBmcmFtZS5jbGlwc0NvbnRlbnQgPSBjbGlwc0NvbnRlbnQ7XHJcbiAgICBmcmFtZS5maWxscyA9IFt7dHlwZTogJ1NPTElEJywgY29sb3I6IGNvbG9yQ29udmVydGVyKGNvbG9yKX1dO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDQ7IGkrKylcclxuICAgICAgICBmcmFtZVtwYWRkaW5nQ2xvY2tbaV1dID0gcGFkZGluZ0RpcmVjdGlvbltpXTtcclxuICAgIGlmIChpdGVtU3BhY2luZylcclxuICAgICAgICBmcmFtZS5pdGVtU3BhY2luZyA9IGl0ZW1TcGFjaW5nO1xyXG4gICAgZnJhbWUubGF5b3V0TW9kZSA9IG1haW5BeGlzO1xyXG4gICAgZnJhbWUucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gbWFpbkF4aXNTaXppbmc7XHJcbiAgICBmcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBhbHRBeGlzU2l6aW5nO1xyXG4gICAgcmVzaXplICYmIGZyYW1lLnJlc2l6ZSguLi5yZXNpemUpO1xyXG4gICAgZnJhbWUuY29ybmVyUmFkaXVzID0gY29ybmVyUmFkaXVzO1xyXG4gICAgZnJhbWUucHJpbWFyeUF4aXNBbGlnbkl0ZW1zID0gbWFpbkF4aXNBbGlnbjtcclxuICAgIGZyYW1lLmNvdW50ZXJBeGlzQWxpZ25JdGVtcyA9ICBhbHRBeGlzQWxpZ247XHJcbiAgICBmcmFtZS5sYXlvdXRBbGlnbiA9IGxheW91dEFsaWduO1xyXG4gICAgcmV0dXJuIGZyYW1lO1xyXG59IiwiXHJcbmltcG9ydCB7UmdiLCBjb2xvckNvbnZlcnRlcn0gZnJvbSBcIi4vY29sb3JcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGV4dHtcclxuICAgIGZhbWlseT86IHN0cmluZztcclxuICAgIHN0eWxlPzogc3RyaW5nO1xyXG4gICAgZm9udFNpemU/OiBudW1iZXI7XHJcbiAgICBhbGlnbkhvcml6b250YWw/OlwiQ0VOVEVSXCIgfCBcIkxFRlRcIiB8IFwiUklHSFRcIiB8IFwiSlVTVElGSUVEXCI7XHJcbiAgICByZXNpemVXaXRob3V0Q29uc3RyYWludHM/OiBbbnVtYmVyLCBudW1iZXJdO1xyXG4gICAgcmVzaXplPzogW251bWJlciwgbnVtYmVyXSB8IG51bGw7XHJcbiAgICAvL3R5cGU/OiBzdHJpbmc7XHJcbiAgICBjb2xvcj86IHN0cmluZ3xSZ2I7XHJcbiAgICBhbGlnblZlcnRpY2FsPzpcIlRPUFwiIHwgXCJDRU5URVJcIiB8IFwiQk9UVE9NXCI7XHJcbiAgICBib3hBdXRvUmVzaXplPzogICdXSURUSF9BTkRfSEVJR0hUJyB8IFwiTk9ORVwiIHwgXCJIRUlHSFRcIjtcclxuICAgIGF1dG9SZW5hbWU/OiBib29sZWFuO1xyXG4gICAgbmFtZTpzdHJpbmc7XHJcbiAgICBjaGFyYWN0ZXJzOiBzdHJpbmc7XHJcbiAgICB0ZXh0Q2FzZT86IFwiT1JJR0lOQUxcIiB8IFwiVVBQRVJcIiB8IFwiTE9XRVJcIiB8IFwiVElUTEVcIjtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGV4dE5vZGUoe1xyXG4gICAgZmFtaWx5ID0gXCJJQk0gUGxleCBNb25vXCIsXHJcbiAgICBzdHlsZSA9IFwiU2VtaUJvbGRcIixcclxuICAgIGZvbnRTaXplPTE2LFxyXG4gICAgYWxpZ25Ib3Jpem9udGFsID0gXCJDRU5URVJcIixcclxuICAgIHJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cyA9IG51bGwsXHJcbiAgICAvL3R5cGU9ICdTT0xJRCcsIFxyXG4gICAgY29sb3IgPSAnZmZmZmZmJyxcclxuICAgIGFsaWduVmVydGljYWwgPSBcIkNFTlRFUlwiLFxyXG4gICAgYm94QXV0b1Jlc2l6ZSA9ICdXSURUSF9BTkRfSEVJR0hUJyxcclxuICAgIG5hbWUsXHJcbiAgICByZXNpemUgPSBudWxsLFxyXG4gICAgYXV0b1JlbmFtZT10cnVlLFxyXG4gICAgY2hhcmFjdGVycyxcclxuICAgIHRleHRDYXNlPVwiT1JJR0lOQUxcIlxyXG59OlRleHQpOlRleHROb2Rle1xyXG4gICAgY29uc3QgdGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcclxuICAgIHRleHQuZm9udE5hbWUgPSB7ZmFtaWx5LCBzdHlsZX07XHJcbiAgICB0ZXh0LmZvbnRTaXplID0gZm9udFNpemU7XHJcbiAgICB0ZXh0LnRleHRBbGlnbkhvcml6b250YWwgPSBhbGlnbkhvcml6b250YWw7XHJcbiAgICB0ZXh0LnRleHRBbGlnblZlcnRpY2FsID0gYWxpZ25WZXJ0aWNhbDtcclxuICAgIHRleHQubmFtZSA9IG5hbWU7XHJcbiAgICBpZiAocmVzaXplKVxyXG4gICAgICAgIHRleHQucmVzaXplKC4uLnJlc2l6ZSk7XHJcbiAgICB0ZXh0LnRleHRBdXRvUmVzaXplID0gYm94QXV0b1Jlc2l6ZTtcclxuICAgIHRleHQuYXV0b1JlbmFtZSA9IGF1dG9SZW5hbWU7XHJcbiAgICB0ZXh0LmNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzO1xyXG4gICAgdGV4dC50ZXh0Q2FzZSA9IHRleHRDYXNlO1xyXG4gICAgdGV4dC5maWxscyA9IFt7dHlwZTpcIlNPTElEXCIsIGNvbG9yOiBjb2xvckNvbnZlcnRlcihjb2xvcil9XVxyXG4gICAgcmVzaXplV2l0aG91dENvbnN0cmFpbnRzICYmIHRleHQucmVzaXplV2l0aG91dENvbnN0cmFpbnRzKC4uLnJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cyk7XHJcbiAgICByZXR1cm4gdGV4dDtcclxufSIsImltcG9ydCB7Y3JlYXRlRnJhbWVOb2RlLCBGcmFtZX0gZnJvbSAnLi4vdXRpbC9mcmFtZSc7XHJcblxyXG4vL2RlZmF1bHQgdmFsdWVzIGZvciBmcmFtZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8qXHJcbiAgICBuYW1lLFxyXG4gICAgcGFkZGluZ0RpcmVjdGlvbiA9IFswLDAsMCwwXSxcclxuICAgIGNvbG9yPSdmZmZmZmYnLFxyXG4gICAgbWFpbkF4aXMgPSAnSE9SSVpPTlRBTCcsXHJcbiAgICBtYWluQXhpc1NpemluZyA9ICdBVVRPJyxcclxuICAgIGFsdEF4aXNTaXppbmcgPSAnQVVUTycsXHJcbiAgICByZXNpemUsXHJcbiAgICBtYWluQXhpc0FsaWduPSAnQ0VOVEVSJyxcclxuICAgIGFsdEF4aXNBbGlnbiA9ICdDRU5URVInXHJcbiovXHJcblxyXG5jb25zdCBjb2x1bW5TZXR0aW5ncyA9IHtcclxuICAgIG1haW5BeGlzOiAnVkVSVElDQUwnLFxyXG4gICAgYWx0QXhpc1NpemluZzogJ0FVVE8nLFxyXG4gICAgbWFpbkF4aXNTaXppbmc6ICdBVVRPJyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNvbHVtbih1c2VyU2V0dGluZ3M6IEZyYW1lKXtcclxuICAgIGNvbnN0IHNldHRpbmdzID0gIE9iamVjdC5hc3NpZ24oY29sdW1uU2V0dGluZ3MsIHVzZXJTZXR0aW5ncyk7XHJcbiAgICByZXR1cm4gY3JlYXRlRnJhbWVOb2RlKHNldHRpbmdzKTtcclxufSIsImltcG9ydCB7Y3JlYXRlVGV4dE5vZGUsIFRleHR9IGZyb20gJy4uL3V0aWwvdGV4dCdcclxuaW1wb3J0IHsgY3JlYXRlRnJhbWVOb2RlLCBGcmFtZSB9IGZyb20gJy4uL3V0aWwvZnJhbWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ29uc3RyYWludChuYW1lOnN0cmluZywgY29uc3RyYWludHM6c3RyaW5nW10pIHtcclxuICAgIGNvbnN0IHdpZGdldCA9IGNyZWF0ZUZyYW1lTm9kZSh7XHJcbiAgICAgICAgbmFtZSwgXHJcbiAgICAgICAgcGFkZGluZ0RpcmVjdGlvbjogWzAsMTAsMCwxMF0sXHJcbiAgICAgICAgY29sb3I6ICcyMjIzMjYnLFxyXG4gICAgICAgIGl0ZW1TcGFjaW5nOiA4LFxyXG4gICAgICAgIG1haW5BeGlzOiAnSE9SSVpPTlRBTCcsIFxyXG4gICAgICAgIG1haW5BeGlzQWxpZ246ICdNSU4nLFxyXG4gICAgICAgIHJlc2l6ZTogWzEwLDQwXVxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yKGNvbnN0IGNvbnN0cmFpbnQgb2YgY29uc3RyYWludHMpe1xyXG4gICAgICAgIGNvbnN0IGlkID0gY3JlYXRlRnJhbWVOb2RlKHtsYXlvdXRBbGlnbjogJ0NFTlRFUicsIHBhZGRpbmdEaXJlY3Rpb246IFswLDgsMCw4XSwgY29ybmVyUmFkaXVzOjMwLCBuYW1lOiBjb25zdHJhaW50LCBjb2xvcjogJzYyNjM2NCd9KTtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gY3JlYXRlVGV4dE5vZGUoe3RleHRDYXNlOlwiVVBQRVJcIiwgbmFtZTogJ2NvbnN0cmFpbnQnLCBjaGFyYWN0ZXJzOiBjb25zdHJhaW50LCBmb250U2l6ZTogMTQsIHN0eWxlOiAnUmVndWxhcid9KTtcclxuICAgICAgICBpZC5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgICAgICB3aWRnZXQuYXBwZW5kQ2hpbGQoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB3aWRnZXQ7XHJcbn1cclxuIiwiaW1wb3J0IHtjcmVhdGVUZXh0Tm9kZSwgVGV4dH0gZnJvbSAnLi4vdXRpbC90ZXh0J1xyXG5pbXBvcnQgeyBjcmVhdGVGcmFtZU5vZGUsIEZyYW1lIH0gZnJvbSAnLi4vdXRpbC9mcmFtZSc7XHJcblxyXG50eXBlIERhdGFUeXBlID0gJ2NoYXJhY3RlcicgfCAnbnVtZXJpYycgfCAnZGF0ZScgfCAnYmluYXJ5JyB8ICdib29sZWFuJyB8ICdzdHJpbmcnIHwgJ2dlb21ldHJpYycgfCAnbmV0d29yayBhZGRyZXNzJyB8ICdiaXQnO1xyXG5jb25zdCBkYXRhVHlwZUNvbG9ycyA9IHtcclxuICAgIGNoYXJhY3RlcjogJ0VGQzkwMCcsXHJcbiAgICBudW1lcmljOiAnRjE3NDAwJyxcclxuICAgIGRhdGU6ICcwMEQwQUInLFxyXG4gICAgYmluYXJ5OiAnMDAyNkVGJyxcclxuICAgIGJvb2xlYW46ICcwMDdERjEnLFxyXG4gICAgc3RyaW5nOiAnRDAwMDI1JyxcclxuICAgIGdlb21ldHJpYzogJzdFQzYzOScsXHJcbiAgICAnbmV0d29yayBhZGRyZXNzJzogJ0NGMkVEMScsXHJcbiAgICBiaXQ6ICcwMEZGRjYnXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZURhdGFUeXBlKG5hbWU6c3RyaW5nLCBkYXRhVHlwZTpEYXRhVHlwZSk6RnJhbWVOb2RlIHtcclxuICAgIGNvbnN0IGlkID0gY3JlYXRlRnJhbWVOb2RlKHttYWluQXhpc0FsaWduOiAnTUlOJyxyZXNpemU6IFsxLDQwXSxhbHRBeGlzQWxpZ246IFwiQ0VOVEVSXCIsIG5hbWU6ICdpZF8nK25hbWUsIGNvbG9yOiAnMjIyMzI2JywgcGFkZGluZ0RpcmVjdGlvbjogWzAsMTAsMCwxMF19KTtcclxuICAgIGNvbnN0IHRleHQgPSBjcmVhdGVUZXh0Tm9kZSh7bmFtZSwgY29sb3I6IGRhdGFUeXBlQ29sb3JzW2RhdGFUeXBlXSwgY2hhcmFjdGVyczogbmFtZSwgZm9udFNpemU6IDE0LCB0ZXh0Q2FzZTogJ1VQUEVSJywgc3R5bGU6ICdSZWd1bGFyJ30pXHJcbiAgICBpZC5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgIHJldHVybiBpZDtcclxufVxyXG4iLCJpbXBvcnQge2NyZWF0ZVRleHROb2RlLCBUZXh0fSBmcm9tICcuLi91dGlsL3RleHQnXHJcbmltcG9ydCB7IGNyZWF0ZUZyYW1lTm9kZSwgRnJhbWUgfSBmcm9tICcuLi91dGlsL2ZyYW1lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUlkKG5hbWU6c3RyaW5nKTpGcmFtZU5vZGUge1xyXG4gICAgY29uc3QgaWQgPSBjcmVhdGVGcmFtZU5vZGUoe25hbWUsIHJlc2l6ZTpbMTAsNDBdLG1haW5BeGlzQWxpZ246IFwiTUlOXCIsY29sb3I6ICcyMjIzMjYnLCBwYWRkaW5nRGlyZWN0aW9uOiBbMCwwLDAsMTBdfSk7XHJcbiAgICBjb25zdCB0ZXh0ID0gY3JlYXRlVGV4dE5vZGUoe25hbWUsIGNoYXJhY3RlcnM6IG5hbWUsIGZvbnRTaXplOiAxNH0pXHJcbiAgICBpZC5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgIHJldHVybiBpZDtcclxufVxyXG4iLCJpbXBvcnQge2NyZWF0ZVRleHROb2RlLCBUZXh0fSBmcm9tICcuLi91dGlsL3RleHQnXHJcbmltcG9ydCB7IGNyZWF0ZUZyYW1lTm9kZSwgRnJhbWUgfSBmcm9tICcuLi91dGlsL2ZyYW1lJztcclxuXHJcbmNvbnN0IGRlZmF1bHRLZXlTZXR0aW5ncyA9IHtcclxuICAgIG1haW5BeGlzOiAnVkVSVElDQUwnLFxyXG4gICAgcmVzaXplOlsxMCw0MF0sXHJcbiAgICBtYWluQXhpc1NpemluZzogJ0FVVE8nXHJcbn1cclxuXHJcbmNvbnN0IGRlZmF1bHRLZXlUaXRsZVNldHRpbmdzID0ge1xyXG4gICAgZm9udFNpemU6IDEwLFxyXG4gICAgcmVzaXplV2l0aG91dENvbnN0cmFpbnRzOiBbNjcsIDEzXSxcclxuICAgIG5hbWU6ICdrZXlUeXBlJ1xyXG59XHJcbmNvbnN0IGRlZmFsdEtleUxpbmtTZXR0aW5ncyA9IHtcclxuICAgIGZvbnRTaXplOiA5LFxyXG4gICAgc3R5bGU6ICdMaWdodCcsXHJcbiAgICBjaGFyYWN0ZXJzOiAnTi9BJ1xyXG59XHJcblxyXG5jb25zdCBmb3JlaWduS2V5U2V0dGluZ3MgPSB7XHJcbiAgICBjb2xvcjogJzIxMkIzQicsXHJcbiAgICBuYW1lOiAnRk9SRUlHTicsIFxyXG4gICAgY2hhcmFjdGVyczogJ0ZLJ1xyXG59XHJcblxyXG5jb25zdCBwcmltYXJ5S2V5U2V0dGluZ3MgPSB7XHJcbiAgICBjb2xvcjogJzM4MzkzQScsXHJcbiAgICBuYW1lOiAnUFJJTUFSWScsXHJcbiAgICBjaGFyYWN0ZXJzOiAnUEsnXHJcbn1cclxuXHJcbnR5cGUga2V5VHlwZSA9ICdGT1JFSUdOJyB8ICdQUklNQVJZJyB8ICdDVVNUT00nO1xyXG5cclxuaW50ZXJmYWNlIEtleXtcclxuICAgIHR5cGU6IGtleVR5cGUsIFxyXG4gICAga2V5VGl0bGVTZXR0aW5ncz86VGV4dCwgXHJcbiAgICBrZXlMaW5rU2V0dGluZ3M6VGV4dCxcclxuICAgIGtleVNldHRpbmdzPzpGcmFtZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVLZXkoe1xyXG4gICAgICAgIHR5cGUsIFxyXG4gICAgICAgIGtleVRpdGxlU2V0dGluZ3MsXHJcbiAgICAgICAga2V5TGlua1NldHRpbmdzLFxyXG4gICAgICAgIGtleVNldHRpbmdzXHJcbiAgICB9OktleSl7XHJcblxyXG4gICAgbGV0IHRleHRDb2xvcjtcclxuICAgIGxldCBrZXlUeXBlU2V0dGluZ3MgPSB7fTtcclxuICAgIHN3aXRjaCh0eXBlKXtcclxuICAgICAgICBjYXNlICdGT1JFSUdOJzpcclxuICAgICAgICAgICAga2V5VHlwZVNldHRpbmdzID0gZm9yZWlnbktleVNldHRpbmdzO1xyXG4gICAgICAgICAgICB0ZXh0Q29sb3IgPSB7Y29sb3I6ICcxMzcxZmYnfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdQUklNQVJZJzpcclxuICAgICAgICAgICAga2V5VHlwZVNldHRpbmdzID0gcHJpbWFyeUtleVNldHRpbmdzO1xyXG4gICAgICAgICAgICB0ZXh0Q29sb3IgPSB7Y29sb3I6ICdGRjc2MTMnfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB0ZXh0Q29sb3IgPSB7bmFtZTogJ0NVU1RPTSd9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGtleUFzc2lnbiA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdEtleVNldHRpbmdzLCBrZXlUeXBlU2V0dGluZ3MsIGtleVNldHRpbmdzKTtcclxuICAgIGNvbnN0IGtleSA9IGNyZWF0ZUZyYW1lTm9kZShrZXlBc3NpZ24pO1xyXG4gICAgY29uc3Qga2V5VGl0bGUgPSBjcmVhdGVUZXh0Tm9kZShPYmplY3QuYXNzaWduKGRlZmF1bHRLZXlUaXRsZVNldHRpbmdzLCBrZXlUeXBlU2V0dGluZ3MsIGtleVRpdGxlU2V0dGluZ3MsIHRleHRDb2xvcikpXHJcbiAgICBjb25zdCBrZXlMaW5rID0gY3JlYXRlVGV4dE5vZGUoT2JqZWN0LmFzc2lnbihkZWZhbHRLZXlMaW5rU2V0dGluZ3MsIHRleHRDb2xvciwga2V5TGlua1NldHRpbmdzKSlcclxuICAgIGtleS5hcHBlbmRDaGlsZChrZXlUaXRsZSk7XHJcbiAgICBrZXkuYXBwZW5kQ2hpbGQoa2V5TGluayk7XHJcbiAgICByZXR1cm4ga2V5O1xyXG59IiwiaW1wb3J0IHtjcmVhdGVGcmFtZU5vZGV9IGZyb20gJy4uL3V0aWwvZnJhbWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVGFibGUodGFibGVOYW1lOnN0cmluZyl7XHJcbiAgICBjb25zdCB0YWJsZSA9IGNyZWF0ZUZyYW1lTm9kZSh7XHJcbiAgICAgICAgbmFtZTogdGFibGVOYW1lLFxyXG4gICAgICAgIGNsaXBzQ29udGVudDogdHJ1ZSxcclxuICAgICAgICBsYXlvdXRBbGlnbjonU1RSRVRDSCcsXHJcbiAgICAgICAgY29ybmVyUmFkaXVzOiA1LFxyXG4gICAgICAgIG1haW5BeGlzOiAnVkVSVElDQUwnLFxyXG4gICAgICAgIGNvbG9yOiAnNEU0RjUxJyxcclxuICAgIH0pO1xyXG4gICAgLy90YWJsZS5zZXRQbHVnaW5EYXRhKHRhYmxlTmFtZSk7XHJcbiAgICAvL2VxdWl2YWxlbnQgdG8gaHVncyBjb250ZW50XHJcbiAgICAvL3RhYmxlLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9ICdBVVRPJztcclxuICAgIC8vdGFibGUuY291bnRlckF4aXNTaXppbmdNb2RlID0gJ0FVVE8nO1xyXG4gICAgcmV0dXJuIHRhYmxlO1xyXG59IiwiaW1wb3J0IHtjcmVhdGVUZXh0Tm9kZSwgVGV4dH0gZnJvbSAnLi4vdXRpbC90ZXh0J1xyXG5pbXBvcnQgeyBjcmVhdGVGcmFtZU5vZGUsIEZyYW1lIH0gZnJvbSAnLi4vdXRpbC9mcmFtZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUaXRsZSh0YWJsZU5hbWU6c3RyaW5nKXtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUZyYW1lTm9kZSh7XHJcbiAgICAgICAgY29sb3I6ICc0YjRjNGUnLFxyXG4gICAgICAgIG1haW5BeGlzOiAnVkVSVElDQUwnLFxyXG4gICAgICAgIHBhZGRpbmdEaXJlY3Rpb246IFswLDAsMCwxMF0sXHJcbiAgICAgICAgbmFtZTogdGFibGVOYW1lLFxyXG4gICAgICAgIG1haW5BeGlzU2l6aW5nOiAnRklYRUQnLFxyXG4gICAgICAgIGFsdEF4aXNTaXppbmc6ICdBVVRPJyxcclxuICAgICAgICByZXNpemU6IFs0MDAsNDBdLFxyXG4gICAgICAgIG1haW5BeGlzQWxpZ246ICdDRU5URVInLFxyXG4gICAgICAgIGFsdEF4aXNBbGlnbjogJ01JTidcclxuICAgIH0pO1xyXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVUZXh0Tm9kZSh7XHJcbiAgICAgICAgZmFtaWx5OidXb3JrIFNhbnMnLFxyXG4gICAgICAgIGNoYXJhY3RlcnM6IHRhYmxlTmFtZSxcclxuICAgICAgICBhbGlnbkhvcml6b250YWw6ICdMRUZUJyxcclxuICAgICAgICBhbGlnblZlcnRpY2FsOiAnQ0VOVEVSJyxcclxuICAgICAgICBuYW1lOiB0YWJsZU5hbWVcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjYWxsRm9udCBmcm9tICcuL3V0aWwvZm9udCc7XHJcbmltcG9ydCBjcmVhdGVDb2x1bW4gZnJvbSAnLi93aWRnZXRzL2NvbHVtbic7XHJcbmltcG9ydCBjcmVhdGVLZXkgZnJvbSAnLi93aWRnZXRzL2tleSc7XHJcbmltcG9ydCBjcmVhdGVJZCBmcm9tICcuL3dpZGdldHMvaWQnO1xyXG5pbXBvcnQgY3JlYXRlRGF0YVR5cGUgZnJvbSAnLi93aWRnZXRzL2RhdGFUeXBlJ1xyXG5pbXBvcnQgY3JlYXRlQ29uc3RyYWludCBmcm9tICcuL3dpZGdldHMvY29uc3RyYWludCc7XHJcbmltcG9ydCBjcmVhdGVUYWJsZSBmcm9tICcuL3dpZGdldHMvdGFibGUnO1xyXG5pbXBvcnQgY3JlYXRlVGl0bGUgZnJvbSAnLi93aWRnZXRzL3RpdGxlJztcclxuaW1wb3J0IHtjcmVhdGVGcmFtZU5vZGV9IGZyb20gJy4vdXRpbC9mcmFtZSc7XHJcblxyXG4gZmlnbWEuc2hvd1VJKF9faHRtbF9fKTtcclxuXHJcbiAgZmlnbWEudWkucmVzaXplKDQwMCwgNjAwKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlUG9wdWxhdGVkVGFibGUoKXtcclxuXHJcbiAgYXdhaXQgY2FsbEZvbnQoW1xyXG4gICAgeyBmYW1pbHk6IFwiV29yayBTYW5zXCIsIHN0eWxlOiBcIlNlbWlCb2xkXCIgfSxcclxuICAgIHsgZmFtaWx5OiBcIklCTSBQbGV4IE1vbm9cIiwgc3R5bGU6IFwiTGlnaHRcIiB9LFxyXG4gICAgeyBmYW1pbHk6IFwiSUJNIFBsZXggTW9ub1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSxcclxuICAgIHsgZmFtaWx5OiBcIklCTSBQbGV4IE1vbm9cIiwgc3R5bGU6IFwiU2VtaUJvbGRcIiB9XHJcbiAgXSk7XHJcblxyXG4gIGlmIChmaWdtYS5lZGl0b3JUeXBlID09PSAnZmlnbWEnKSB7XHJcbiAgICBjb25zdCB0YWJsZSA9IGNyZWF0ZVRhYmxlKCdtaWxrJyk7XHJcbiAgICBjb25zdCBjb2x1bW5zID0gW107XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVUaXRsZSgndGVzdCcpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IGZvcmVpZ25LZXlDb2x1bW4gPSBjcmVhdGVDb2x1bW4oe25hbWU6J0ZPUkVJR04nLCBjb2xvcjonNEU0RjUxJ30pO1xyXG4gICAgICBjb25zdCBmazEgPSBjcmVhdGVLZXkoe3R5cGU6ICdGT1JFSUdOJywga2V5TGlua1NldHRpbmdzOntuYW1lOidrZTEnLCBjaGFyYWN0ZXJzOiAndGVzdDEnfX0pXHJcbiAgICAgIGNvbnN0IGZrMiA9IGNyZWF0ZUtleSh7dHlwZTogJ0ZPUkVJR04nLCBrZXlMaW5rU2V0dGluZ3M6e25hbWU6J2tlMicsIGNoYXJhY3RlcnM6ICd0ZXN0Mid9fSlcclxuICAgICAgZm9yKGNvbnN0IGtleSBvZiBbZmsxLCBmazJdKVxyXG4gICAgICAgIGZvcmVpZ25LZXlDb2x1bW4uYXBwZW5kQ2hpbGQoa2V5KTtcclxuICAgICAgY29sdW1ucy5wdXNoKGZvcmVpZ25LZXlDb2x1bW4pO1xyXG5cclxuICAgIGNvbnN0IGlkQ29sdW1uID0gY3JlYXRlQ29sdW1uKHtuYW1lOidJRCcsIGNvbG9yOic0RTRGNTEnfSk7XHJcbiAgICAgIGNvbnN0IGlkMSA9IGNyZWF0ZUlkKCdGaXJzdCBJRCcpO1xyXG4gICAgICBjb25zdCBpZDIgPSBjcmVhdGVJZCgnU2Vjb25kIElkJyk7XHJcbiAgICAgIGZvcihjb25zdCBpZCBvZiBbaWQxLCBpZDJdKVxyXG4gICAgICAgIGlkQ29sdW1uLmFwcGVuZENoaWxkKGlkKTtcclxuICAgICAgY29sdW1ucy5wdXNoKGlkQ29sdW1uKTtcclxuXHJcbiAgICBjb25zdCBkYXRhVHlwZUNvbHVtbiA9IGNyZWF0ZUNvbHVtbih7bmFtZTonREFUQVRZUEUnLCBjb2xvcjonNEU0RjUxJ30pO1xyXG4gICAgICBjb25zdCBkdDEgPSBjcmVhdGVEYXRhVHlwZSgnaW50ZWdlcicsICdudW1lcmljJyk7XHJcbiAgICAgIGNvbnN0IGR0MiA9IGNyZWF0ZURhdGFUeXBlKCd2YXJjaGFyKDI1NSknLCAnY2hhcmFjdGVyJyk7XHJcbiAgICAgIGZvcihjb25zdCBkdCBvZiBbZHQxLCBkdDJdKVxyXG4gICAgICAgIGRhdGFUeXBlQ29sdW1uLmFwcGVuZENoaWxkKGR0KTtcclxuICAgICAgY29sdW1ucy5wdXNoKGRhdGFUeXBlQ29sdW1uKTtcclxuXHJcbiAgICBjb25zdCBjb25zdHJhaW50c0NvbHVtbiA9IGNyZWF0ZUNvbHVtbih7bmFtZTonQ09OU1RSQUlOVFMnLCBjb2xvcjonNEU0RjUxJ30pO1xyXG4gICAgICBjb25zdCBjc3QxID0gY3JlYXRlQ29uc3RyYWludCgnY29uc3RyYWludDEnLCBbJ05PVCBOVUxMJywgJ1VVSUQnXSk7XHJcbiAgICAgIGNvbnN0IGNzdDIgPSBjcmVhdGVDb25zdHJhaW50KCdjb25zdHJhaW50MicsIFsnSU5DJ10pO1xyXG4gICAgICBmb3IoY29uc3QgY3N0IG9mIFtjc3QxLCBjc3QyXSlcclxuICAgICAgICBjb25zdHJhaW50c0NvbHVtbi5hcHBlbmRDaGlsZChjc3QpO1xyXG4gICAgICBjb2x1bW5zLnB1c2goY29uc3RyYWludHNDb2x1bW4pO1xyXG5cclxuICAgIGNvbnN0IHByaW1hcnlLZXlDb2x1bW4gPSBjcmVhdGVDb2x1bW4oe25hbWU6J1BSSU1BUlknLCBjb2xvcjonNEU0RjUxJ30pO1xyXG4gICAgICBjb25zdCBwazEgPSBjcmVhdGVLZXkoe3R5cGU6ICdQUklNQVJZJywga2V5TGlua1NldHRpbmdzOntuYW1lOidrZTEnLCBjaGFyYWN0ZXJzOiAndGVzdDEnfX0pXHJcbiAgICAgIGNvbnN0IHBrMiA9IGNyZWF0ZUtleSh7dHlwZTogJ1BSSU1BUlknLCBrZXlMaW5rU2V0dGluZ3M6e25hbWU6J2tlMicsIGNoYXJhY3RlcnM6ICd0ZXN0Mid9fSlcclxuICAgICAgZm9yKGNvbnN0IGtleSBvZiBbcGsxLCBwazJdKVxyXG4gICAgICAgIHByaW1hcnlLZXlDb2x1bW4uYXBwZW5kQ2hpbGQoa2V5KTtcclxuICAgICAgY29sdW1ucy5wdXNoKHByaW1hcnlLZXlDb2x1bW4pO1xyXG4gICAgXHJcbiAgICBjb25zdCBncmlkID0gY3JlYXRlRnJhbWVOb2RlKHttYWluQXhpczogJ0hPUklaT05UQUwnLCBuYW1lOiAndGFibGVEYXRhJ30pO1xyXG4gICAgY29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiBncmlkLmFwcGVuZENoaWxkKGNvbHVtbikpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoZ3JpZCk7XHJcbiAgICAgIFxyXG5cclxuICAgLy8gZmlnbWEuY2xvc2VQbHVnaW4oKTtcclxuICB9XHJcbn1cclxuZ2VuZXJhdGVQb3B1bGF0ZWRUYWJsZSgpO1xyXG4gIC8vIE1ha2Ugc3VyZSB0byBjbG9zZSB0aGUgcGx1Z2luIHdoZW4geW91J3JlIGRvbmUuIE90aGVyd2lzZSB0aGUgcGx1Z2luIHdpbGxcclxuICAvLyBrZWVwIHJ1bm5pbmcsIHdoaWNoIHNob3dzIHRoZSBjYW5jZWwgYnV0dG9uIGF0IHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbi5cclxuICBcclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9