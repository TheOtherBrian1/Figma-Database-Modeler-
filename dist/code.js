/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./code/updateUIFunctions/createDefaultColumn.ts":
/*!*******************************************************!*\
  !*** ./code/updateUIFunctions/createDefaultColumn.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createDefaultColumns)
/* harmony export */ });
/* harmony import */ var _widgets_column__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../widgets/column */ "./code/widgets/column.ts");
/* harmony import */ var _widgets_key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../widgets/key */ "./code/widgets/key.ts");
/* harmony import */ var _widgets_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widgets/id */ "./code/widgets/id.ts");
/* harmony import */ var _widgets_dataType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../widgets/dataType */ "./code/widgets/dataType.ts");
/* harmony import */ var _widgets_constraint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widgets/constraint */ "./code/widgets/constraint.ts");
/* harmony import */ var _util_frame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/frame */ "./code/util/frame.ts");






function createDefaultColumns() {
    const columns = [];
    const foreignKeyColumn = (0,_widgets_column__WEBPACK_IMPORTED_MODULE_0__["default"])({ name: 'FOREIGN', color: '4E4F51' });
    const fk = (0,_widgets_key__WEBPACK_IMPORTED_MODULE_1__["default"])({ type: 'FOREIGN', keyLinkSettings: { name: 'FK', characters: 'N/A' } });
    foreignKeyColumn.appendChild(fk);
    columns.push(foreignKeyColumn);
    const idColumn = (0,_widgets_column__WEBPACK_IMPORTED_MODULE_0__["default"])({ name: 'ID', color: '4E4F51' });
    const id = (0,_widgets_id__WEBPACK_IMPORTED_MODULE_2__["default"])('new_id');
    idColumn.appendChild(id);
    columns.push(idColumn);
    const dataTypeColumn = (0,_widgets_column__WEBPACK_IMPORTED_MODULE_0__["default"])({ name: 'DATATYPE', color: '4E4F51' });
    const dt = (0,_widgets_dataType__WEBPACK_IMPORTED_MODULE_3__["default"])('integer', 'numeric');
    dataTypeColumn.appendChild(dt);
    columns.push(dataTypeColumn);
    const constraintsColumn = (0,_widgets_column__WEBPACK_IMPORTED_MODULE_0__["default"])({ name: 'CONSTRAINTS', color: '4E4F51' });
    const cst = (0,_widgets_constraint__WEBPACK_IMPORTED_MODULE_4__["default"])('constraint1', ['NOT NULL']);
    constraintsColumn.appendChild(cst);
    columns.push(constraintsColumn);
    const primaryKeyColumn = (0,_widgets_column__WEBPACK_IMPORTED_MODULE_0__["default"])({ name: 'PRIMARY', color: '4E4F51' });
    const pk = (0,_widgets_key__WEBPACK_IMPORTED_MODULE_1__["default"])({ type: 'PRIMARY', keyLinkSettings: { name: 'PK', characters: 'N/A' } });
    primaryKeyColumn.appendChild(pk);
    columns.push(primaryKeyColumn);
    const grid = (0,_util_frame__WEBPACK_IMPORTED_MODULE_5__.createFrameNode)({ mainAxis: 'HORIZONTAL', name: 'tableData' });
    columns.forEach(column => grid.appendChild(column));
    return grid;
}


/***/ }),

/***/ "./code/updateUIFunctions/createDefaultTable.ts":
/*!******************************************************!*\
  !*** ./code/updateUIFunctions/createDefaultTable.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createDefaultTable)
/* harmony export */ });
/* harmony import */ var _widgets_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../widgets/table */ "./code/widgets/table.ts");
/* harmony import */ var _widgets_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../widgets/title */ "./code/widgets/title.ts");
/* harmony import */ var _createDefaultColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createDefaultColumn */ "./code/updateUIFunctions/createDefaultColumn.ts");



function createDefaultTable(uuid) {
    console.log('createDefaultTableUUID', uuid);
    const table = (0,_widgets_table__WEBPACK_IMPORTED_MODULE_0__["default"])('TABLE');
    table.setPluginData('uuid', uuid);
    const title = (0,_widgets_title__WEBPACK_IMPORTED_MODULE_1__["default"])('untitled');
    table.appendChild(title);
    table.appendChild((0,_createDefaultColumn__WEBPACK_IMPORTED_MODULE_2__["default"])());
    figma.ui.postMessage({ figmaId: table.id, uuid });
}
/*

    const columns = [];

    const title = createTitle('test');
    table.appendChild(title);

    const foreignKeyColumn = createColumn({name:'FOREIGN', color:'4E4F51'});
      const fk1 = createKey({type: 'FOREIGN', keyLinkSettings:{name:'ke1', characters: 'test1'}})
      const fk2 = createKey({type: 'FOREIGN', keyLinkSettings:{name:'ke2', characters: 'test2'}})
      for(const key of [fk1, fk2])
        foreignKeyColumn.appendChild(key);
      columns.push(foreignKeyColumn);

    const idColumn = createColumn({name:'ID', color:'4E4F51'});
      const id1 = createId('First ID');
      const id2 = createId('Second Id');
      for(const id of [id1, id2])
        idColumn.appendChild(id);
      columns.push(idColumn);

    const dataTypeColumn = createColumn({name:'DATATYPE', color:'4E4F51'});
      const dt1 = createDataType('integer', 'numeric');
      const dt2 = createDataType('varchar(255)', 'character');
      for(const dt of [dt1, dt2])
        dataTypeColumn.appendChild(dt);
      columns.push(dataTypeColumn);

    const constraintsColumn = createColumn({name:'CONSTRAINTS', color:'4E4F51'});
      const cst1 = createConstraint('constraint1', ['NOT NULL', 'UUID']);
      const cst2 = createConstraint('constraint2', ['INC']);
      for(const cst of [cst1, cst2])
        constraintsColumn.appendChild(cst);
      columns.push(constraintsColumn);

    const primaryKeyColumn = createColumn({name:'PRIMARY', color:'4E4F51'});
      const pk1 = createKey({type: 'PRIMARY', keyLinkSettings:{name:'ke1', characters: 'test1'}})
      const pk2 = createKey({type: 'PRIMARY', keyLinkSettings:{name:'ke2', characters: 'test2'}})
      for(const key of [pk1, pk2])
        primaryKeyColumn.appendChild(key);
      columns.push(primaryKeyColumn);
    
    const grid = createFrameNode({mainAxis: 'HORIZONTAL', name: 'tableData'});
    columns.forEach(column => grid.appendChild(column));
    table.appendChild(grid);
  }
*/ 


/***/ }),

/***/ "./code/updateUIFunctions/deleteTable.ts":
/*!***********************************************!*\
  !*** ./code/updateUIFunctions/deleteTable.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createDefaultTable)
/* harmony export */ });
function createDefaultTable(uuid, figmaId) {
    console.log('createDefaultTableUUID', uuid);
    figma.getNodeById(figmaId).remove();
    figma.ui.postMessage({ uuid });
}


/***/ }),

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
/* harmony import */ var _updateUIFunctions_createDefaultTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateUIFunctions/createDefaultTable */ "./code/updateUIFunctions/createDefaultTable.ts");
/* harmony import */ var _updateUIFunctions_deleteTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateUIFunctions/deleteTable */ "./code/updateUIFunctions/deleteTable.ts");
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
figma.ui.resize(450, 600);
function generatePopulatedTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0,_util_font__WEBPACK_IMPORTED_MODULE_0__["default"])([
            { family: "Work Sans", style: "SemiBold" },
            { family: "IBM Plex Mono", style: "Light" },
            { family: "IBM Plex Mono", style: "Regular" },
            { family: "IBM Plex Mono", style: "SemiBold" }
        ]);
    });
}
//if (figma.editorType === 'figma') 
generatePopulatedTable();
const orchestrateModel = {
    CREATE_TABLE: 'CREATE_TABLE',
    REMOVE_TABLE: 'REMOVE_TABLE',
    MODIFY_TITLE: 'MODIFY_TITLE',
    MODIFY_ID: 'MODIFY_ID',
    MODIFY_DATATYPE: 'MODIFY_DATATYPE',
    MODIFY_CONSTRAINTS: 'MODIFY_CONSTRAINTS',
    MODIFY_KEYS: 'MODIFY_KEYS'
};
figma.ui.onmessage = (message) => {
    //figma.getNodeById(id: string);
    //node.id
    console.log(message, 'duck');
    const load = message.payload;
    switch (message.type) {
        case orchestrateModel.CREATE_TABLE:
            (0,_updateUIFunctions_createDefaultTable__WEBPACK_IMPORTED_MODULE_1__["default"])(load.tableUUID);
            break;
        case orchestrateModel.REMOVE_TABLE:
            //
            (0,_updateUIFunctions_deleteTable__WEBPACK_IMPORTED_MODULE_2__["default"])(load.tableUUID, load.figmaId);
            break;
        case orchestrateModel.MODIFY_TITLE:
            //modifyTitle();
            break;
        case orchestrateModel.MODIFY_ID:
            //modifyId();
            break;
        case orchestrateModel.MODIFY_DATATYPE:
            //modifyDatatype();
            break;
        case orchestrateModel.MODIFY_CONSTRAINTS:
            //modifyConstraints();
            break;
        case orchestrateModel.MODIFY_KEYS:
            //modifyKeys();
            break;
        default:
            break;
    }
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBZ0IsQ0FBQyxZQUFZO1lBQzlCLGlGQUFrQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNuQyxNQUFNO1FBQ1YsS0FBSyxnQkFBZ0IsQ0FBQyxZQUFZO1lBQ2hDLEVBQUU7WUFDQSwwRUFBVyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzFDLE1BQU07UUFDVixLQUFLLGdCQUFnQixDQUFDLFlBQVk7WUFDOUIsZ0JBQWdCO1lBQ2hCLE1BQU07UUFDVixLQUFLLGdCQUFnQixDQUFDLFNBQVM7WUFDM0IsYUFBYTtZQUNiLE1BQU07UUFDVixLQUFLLGdCQUFnQixDQUFDLGVBQWU7WUFDakMsbUJBQW1CO1lBQ25CLE1BQU07UUFDVixLQUFLLGdCQUFnQixDQUFDLGtCQUFrQjtZQUNwQyxzQkFBc0I7WUFDdEIsTUFBTTtRQUNWLEtBQUssZ0JBQWdCLENBQUMsV0FBVztZQUM3QixlQUFlO1lBQ2YsTUFBTTtRQUNWO1lBQ0ksTUFBTTtLQUNYO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3plYnJhLy4vY29kZS91cGRhdGVVSUZ1bmN0aW9ucy9jcmVhdGVEZWZhdWx0Q29sdW1uLnRzIiwid2VicGFjazovL3plYnJhLy4vY29kZS91cGRhdGVVSUZ1bmN0aW9ucy9jcmVhdGVEZWZhdWx0VGFibGUudHMiLCJ3ZWJwYWNrOi8vemVicmEvLi9jb2RlL3VwZGF0ZVVJRnVuY3Rpb25zL2RlbGV0ZVRhYmxlLnRzIiwid2VicGFjazovL3plYnJhLy4vY29kZS91dGlsL2NvbG9yLnRzIiwid2VicGFjazovL3plYnJhLy4vY29kZS91dGlsL2ZvbnQudHMiLCJ3ZWJwYWNrOi8vemVicmEvLi9jb2RlL3V0aWwvZnJhbWUudHMiLCJ3ZWJwYWNrOi8vemVicmEvLi9jb2RlL3V0aWwvdGV4dC50cyIsIndlYnBhY2s6Ly96ZWJyYS8uL2NvZGUvd2lkZ2V0cy9jb2x1bW4udHMiLCJ3ZWJwYWNrOi8vemVicmEvLi9jb2RlL3dpZGdldHMvY29uc3RyYWludC50cyIsIndlYnBhY2s6Ly96ZWJyYS8uL2NvZGUvd2lkZ2V0cy9kYXRhVHlwZS50cyIsIndlYnBhY2s6Ly96ZWJyYS8uL2NvZGUvd2lkZ2V0cy9pZC50cyIsIndlYnBhY2s6Ly96ZWJyYS8uL2NvZGUvd2lkZ2V0cy9rZXkudHMiLCJ3ZWJwYWNrOi8vemVicmEvLi9jb2RlL3dpZGdldHMvdGFibGUudHMiLCJ3ZWJwYWNrOi8vemVicmEvLi9jb2RlL3dpZGdldHMvdGl0bGUudHMiLCJ3ZWJwYWNrOi8vemVicmEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vemVicmEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3plYnJhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vemVicmEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly96ZWJyYS8uL2NvZGUvY29kZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlQ29sdW1uIGZyb20gJy4uL3dpZGdldHMvY29sdW1uJztcclxuaW1wb3J0IGNyZWF0ZUtleSBmcm9tICcuLi93aWRnZXRzL2tleSc7XHJcbmltcG9ydCBjcmVhdGVJZCBmcm9tICcuLi93aWRnZXRzL2lkJztcclxuaW1wb3J0IGNyZWF0ZURhdGFUeXBlIGZyb20gJy4uL3dpZGdldHMvZGF0YVR5cGUnO1xyXG5pbXBvcnQgY3JlYXRlQ29uc3RyYWludHMgZnJvbSAnLi4vd2lkZ2V0cy9jb25zdHJhaW50JztcclxuaW1wb3J0IHtjcmVhdGVGcmFtZU5vZGV9IGZyb20gJy4uL3V0aWwvZnJhbWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRGVmYXVsdENvbHVtbnMoKXtcclxuICAgIGNvbnN0IGNvbHVtbnMgPSBbXTtcclxuXHJcbiAgICBjb25zdCBmb3JlaWduS2V5Q29sdW1uID0gY3JlYXRlQ29sdW1uKHtuYW1lOidGT1JFSUdOJywgY29sb3I6JzRFNEY1MSd9KTtcclxuICAgICAgICBjb25zdCBmayA9IGNyZWF0ZUtleSh7dHlwZTogJ0ZPUkVJR04nLCBrZXlMaW5rU2V0dGluZ3M6e25hbWU6J0ZLJywgY2hhcmFjdGVyczogJ04vQSd9fSlcclxuICAgICAgICBmb3JlaWduS2V5Q29sdW1uLmFwcGVuZENoaWxkKGZrKTtcclxuICAgICAgICBjb2x1bW5zLnB1c2goZm9yZWlnbktleUNvbHVtbik7XHJcblxyXG4gICAgY29uc3QgaWRDb2x1bW4gPSBjcmVhdGVDb2x1bW4oe25hbWU6J0lEJywgY29sb3I6JzRFNEY1MSd9KTtcclxuICAgICAgICBjb25zdCBpZCA9IGNyZWF0ZUlkKCduZXdfaWQnKTtcclxuICAgICAgICBpZENvbHVtbi5hcHBlbmRDaGlsZChpZCk7XHJcbiAgICAgICAgY29sdW1ucy5wdXNoKGlkQ29sdW1uKTtcclxuXHJcbiAgICBjb25zdCBkYXRhVHlwZUNvbHVtbiA9IGNyZWF0ZUNvbHVtbih7bmFtZTonREFUQVRZUEUnLCBjb2xvcjonNEU0RjUxJ30pO1xyXG4gICAgICAgIGNvbnN0IGR0ID0gY3JlYXRlRGF0YVR5cGUoJ2ludGVnZXInLCAnbnVtZXJpYycpOyAgICAgIFxyXG4gICAgICAgIGRhdGFUeXBlQ29sdW1uLmFwcGVuZENoaWxkKGR0KTtcclxuICAgICAgICBjb2x1bW5zLnB1c2goZGF0YVR5cGVDb2x1bW4pO1xyXG5cclxuICAgIGNvbnN0IGNvbnN0cmFpbnRzQ29sdW1uID0gY3JlYXRlQ29sdW1uKHtuYW1lOidDT05TVFJBSU5UUycsIGNvbG9yOic0RTRGNTEnfSk7XHJcbiAgICAgICAgY29uc3QgY3N0ID0gY3JlYXRlQ29uc3RyYWludHMoJ2NvbnN0cmFpbnQxJywgWydOT1QgTlVMTCddKTtcclxuICAgICAgICBjb25zdHJhaW50c0NvbHVtbi5hcHBlbmRDaGlsZChjc3QpO1xyXG4gICAgICAgIGNvbHVtbnMucHVzaChjb25zdHJhaW50c0NvbHVtbik7XHJcblxyXG4gICAgY29uc3QgcHJpbWFyeUtleUNvbHVtbiA9IGNyZWF0ZUNvbHVtbih7bmFtZTonUFJJTUFSWScsIGNvbG9yOic0RTRGNTEnfSk7XHJcbiAgICAgICAgY29uc3QgcGsgPSBjcmVhdGVLZXkoe3R5cGU6ICdQUklNQVJZJywga2V5TGlua1NldHRpbmdzOntuYW1lOidQSycsIGNoYXJhY3RlcnM6ICdOL0EnfX0pXHJcbiAgICAgICAgcHJpbWFyeUtleUNvbHVtbi5hcHBlbmRDaGlsZChwayk7XHJcbiAgICAgICAgY29sdW1ucy5wdXNoKHByaW1hcnlLZXlDb2x1bW4pO1xyXG5cclxuICAgIGNvbnN0IGdyaWQgPSBjcmVhdGVGcmFtZU5vZGUoe21haW5BeGlzOiAnSE9SSVpPTlRBTCcsIG5hbWU6ICd0YWJsZURhdGEnfSk7XHJcbiAgICBjb2x1bW5zLmZvckVhY2goY29sdW1uID0+IGdyaWQuYXBwZW5kQ2hpbGQoY29sdW1uKSk7XHJcbiAgICByZXR1cm4gZ3JpZDtcclxufSIsImltcG9ydCBjcmVhdGVUYWJsZSBmcm9tICcuLi93aWRnZXRzL3RhYmxlJztcclxuaW1wb3J0IGNyZWF0ZVRpdGxlIGZyb20gJy4uL3dpZGdldHMvdGl0bGUnO1xyXG5pbXBvcnQgY3JlYXRlRGVmYXVsdENvbHVtbiBmcm9tICcuL2NyZWF0ZURlZmF1bHRDb2x1bW4nO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRUYWJsZSh1dWlkOnN0cmluZyl7XHJcbiAgICBjb25zb2xlLmxvZygnY3JlYXRlRGVmYXVsdFRhYmxlVVVJRCcsIHV1aWQpXHJcbiAgICBjb25zdCB0YWJsZSA9IGNyZWF0ZVRhYmxlKCdUQUJMRScpO1xyXG4gICAgdGFibGUuc2V0UGx1Z2luRGF0YSgndXVpZCcsIHV1aWQpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVUaXRsZSgndW50aXRsZWQnKTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKGNyZWF0ZURlZmF1bHRDb2x1bW4oKSk7XHJcbiAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7ZmlnbWFJZDp0YWJsZS5pZCwgdXVpZH0pO1xyXG59XHJcblxyXG5cclxuLypcclxuXHJcbiAgICBjb25zdCBjb2x1bW5zID0gW107XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVUaXRsZSgndGVzdCcpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IGZvcmVpZ25LZXlDb2x1bW4gPSBjcmVhdGVDb2x1bW4oe25hbWU6J0ZPUkVJR04nLCBjb2xvcjonNEU0RjUxJ30pO1xyXG4gICAgICBjb25zdCBmazEgPSBjcmVhdGVLZXkoe3R5cGU6ICdGT1JFSUdOJywga2V5TGlua1NldHRpbmdzOntuYW1lOidrZTEnLCBjaGFyYWN0ZXJzOiAndGVzdDEnfX0pXHJcbiAgICAgIGNvbnN0IGZrMiA9IGNyZWF0ZUtleSh7dHlwZTogJ0ZPUkVJR04nLCBrZXlMaW5rU2V0dGluZ3M6e25hbWU6J2tlMicsIGNoYXJhY3RlcnM6ICd0ZXN0Mid9fSlcclxuICAgICAgZm9yKGNvbnN0IGtleSBvZiBbZmsxLCBmazJdKVxyXG4gICAgICAgIGZvcmVpZ25LZXlDb2x1bW4uYXBwZW5kQ2hpbGQoa2V5KTtcclxuICAgICAgY29sdW1ucy5wdXNoKGZvcmVpZ25LZXlDb2x1bW4pO1xyXG5cclxuICAgIGNvbnN0IGlkQ29sdW1uID0gY3JlYXRlQ29sdW1uKHtuYW1lOidJRCcsIGNvbG9yOic0RTRGNTEnfSk7XHJcbiAgICAgIGNvbnN0IGlkMSA9IGNyZWF0ZUlkKCdGaXJzdCBJRCcpO1xyXG4gICAgICBjb25zdCBpZDIgPSBjcmVhdGVJZCgnU2Vjb25kIElkJyk7XHJcbiAgICAgIGZvcihjb25zdCBpZCBvZiBbaWQxLCBpZDJdKVxyXG4gICAgICAgIGlkQ29sdW1uLmFwcGVuZENoaWxkKGlkKTtcclxuICAgICAgY29sdW1ucy5wdXNoKGlkQ29sdW1uKTtcclxuXHJcbiAgICBjb25zdCBkYXRhVHlwZUNvbHVtbiA9IGNyZWF0ZUNvbHVtbih7bmFtZTonREFUQVRZUEUnLCBjb2xvcjonNEU0RjUxJ30pO1xyXG4gICAgICBjb25zdCBkdDEgPSBjcmVhdGVEYXRhVHlwZSgnaW50ZWdlcicsICdudW1lcmljJyk7XHJcbiAgICAgIGNvbnN0IGR0MiA9IGNyZWF0ZURhdGFUeXBlKCd2YXJjaGFyKDI1NSknLCAnY2hhcmFjdGVyJyk7XHJcbiAgICAgIGZvcihjb25zdCBkdCBvZiBbZHQxLCBkdDJdKVxyXG4gICAgICAgIGRhdGFUeXBlQ29sdW1uLmFwcGVuZENoaWxkKGR0KTtcclxuICAgICAgY29sdW1ucy5wdXNoKGRhdGFUeXBlQ29sdW1uKTtcclxuXHJcbiAgICBjb25zdCBjb25zdHJhaW50c0NvbHVtbiA9IGNyZWF0ZUNvbHVtbih7bmFtZTonQ09OU1RSQUlOVFMnLCBjb2xvcjonNEU0RjUxJ30pO1xyXG4gICAgICBjb25zdCBjc3QxID0gY3JlYXRlQ29uc3RyYWludCgnY29uc3RyYWludDEnLCBbJ05PVCBOVUxMJywgJ1VVSUQnXSk7XHJcbiAgICAgIGNvbnN0IGNzdDIgPSBjcmVhdGVDb25zdHJhaW50KCdjb25zdHJhaW50MicsIFsnSU5DJ10pO1xyXG4gICAgICBmb3IoY29uc3QgY3N0IG9mIFtjc3QxLCBjc3QyXSlcclxuICAgICAgICBjb25zdHJhaW50c0NvbHVtbi5hcHBlbmRDaGlsZChjc3QpO1xyXG4gICAgICBjb2x1bW5zLnB1c2goY29uc3RyYWludHNDb2x1bW4pO1xyXG5cclxuICAgIGNvbnN0IHByaW1hcnlLZXlDb2x1bW4gPSBjcmVhdGVDb2x1bW4oe25hbWU6J1BSSU1BUlknLCBjb2xvcjonNEU0RjUxJ30pO1xyXG4gICAgICBjb25zdCBwazEgPSBjcmVhdGVLZXkoe3R5cGU6ICdQUklNQVJZJywga2V5TGlua1NldHRpbmdzOntuYW1lOidrZTEnLCBjaGFyYWN0ZXJzOiAndGVzdDEnfX0pXHJcbiAgICAgIGNvbnN0IHBrMiA9IGNyZWF0ZUtleSh7dHlwZTogJ1BSSU1BUlknLCBrZXlMaW5rU2V0dGluZ3M6e25hbWU6J2tlMicsIGNoYXJhY3RlcnM6ICd0ZXN0Mid9fSlcclxuICAgICAgZm9yKGNvbnN0IGtleSBvZiBbcGsxLCBwazJdKVxyXG4gICAgICAgIHByaW1hcnlLZXlDb2x1bW4uYXBwZW5kQ2hpbGQoa2V5KTtcclxuICAgICAgY29sdW1ucy5wdXNoKHByaW1hcnlLZXlDb2x1bW4pO1xyXG4gICAgXHJcbiAgICBjb25zdCBncmlkID0gY3JlYXRlRnJhbWVOb2RlKHttYWluQXhpczogJ0hPUklaT05UQUwnLCBuYW1lOiAndGFibGVEYXRhJ30pO1xyXG4gICAgY29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiBncmlkLmFwcGVuZENoaWxkKGNvbHVtbikpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoZ3JpZCk7XHJcbiAgfVxyXG4qLyIsImltcG9ydCBjcmVhdGVUYWJsZSBmcm9tICcuLi93aWRnZXRzL3RhYmxlJztcclxuaW1wb3J0IGNyZWF0ZVRpdGxlIGZyb20gJy4uL3dpZGdldHMvdGl0bGUnO1xyXG5pbXBvcnQgY3JlYXRlRGVmYXVsdENvbHVtbiBmcm9tICcuL2NyZWF0ZURlZmF1bHRDb2x1bW4nO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRUYWJsZSh1dWlkOnN0cmluZywgZmlnbWFJZDogc3RyaW5nKXtcclxuICAgIGNvbnNvbGUubG9nKCdjcmVhdGVEZWZhdWx0VGFibGVVVUlEJywgdXVpZClcclxuICAgIGZpZ21hLmdldE5vZGVCeUlkKGZpZ21hSWQpLnJlbW92ZSgpO1xyXG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe3V1aWR9KTtcclxufVxyXG4iLCJleHBvcnQgaW50ZXJmYWNlIFJnYiB7XHJcbiAgICByOiBudW1iZXI7XHJcbiAgICBnOiBudW1iZXI7XHJcbiAgICBiOiBudW1iZXI7XHJcbiAgfVxyXG4gIFxyXG5leHBvcnQgZnVuY3Rpb24gY29sb3JDb252ZXJ0ZXIoY29sb3I6UmdifHN0cmluZyl7XHJcbiAgICBpZih0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnKXtcclxuICAgICAgaWYoY29sb3IubGVuZ3RoICE9PSA2KVxyXG4gICAgICAgIHRocm93IEVycm9yKCdoZXggY29sb3JzIG11c3QgaGF2ZSA2IGNoYXJhY3RlcnMnKTtcclxuICAgICAgY29uc3QgciA9IHBhcnNlSW50KGNvbG9yLnNsaWNlKDAsMiksIDE2KS8yNTU7XHJcbiAgICAgIGNvbnN0IGcgPSBwYXJzZUludChjb2xvci5zbGljZSgyLDQpLCAxNikvMjU1O1xyXG4gICAgICBjb25zdCBiID0gcGFyc2VJbnQoY29sb3Iuc2xpY2UoNCw2KSwgMTYpLzI1NTtcclxuICAgICAgcmV0dXJuIHtyLGcsYn07XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBjb2xvci5yIC89IDI1NTtcclxuICAgICAgY29sb3IuZyAvPSAyNTU7XHJcbiAgICAgIGNvbG9yLmIgLz0gMjU1O1xyXG4gICAgICByZXR1cm4gY29sb3I7XHJcbiAgICB9XHJcbn0iLCJpbnRlcmZhY2UgRm9udHN7XHJcbiAgICBmYW1pbHk6IHN0cmluZyxcclxuICAgIHN0eWxlOiBzdHJpbmdcclxufVxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjYWxsRm9udChmb250czpGb250c1tdKXtcclxuICAgIGZvcihjb25zdCBmb250IG9mIGZvbnRzKVxyXG4gICAgICAgIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMoZm9udCk7XHJcbn0iLCJpbXBvcnQge1JnYiwgY29sb3JDb252ZXJ0ZXJ9IGZyb20gXCIuL2NvbG9yXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZyYW1le1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgcGFkZGluZ0RpcmVjdGlvbj86IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdO1xyXG4gICAgcGFkZGluZz86IG51bWJlcjtcclxuICAgIGNsaXBzQ29udGVudD86IGJvb2xlYW47XHJcbiAgICBjb2xvcj86IHN0cmluZ3xSZ2I7XHJcbiAgICBtYWluQXhpcz86IFwiTk9ORVwiIHwgXCJIT1JJWk9OVEFMXCIgfCBcIlZFUlRJQ0FMXCI7XHJcbiAgICBtYWluQXhpc1NpemluZz86IFwiRklYRURcIiB8IFwiQVVUT1wiO1xyXG4gICAgYWx0QXhpc1NpemluZz86IFwiRklYRURcIiB8IFwiQVVUT1wiO1xyXG4gICAgcmVzaXplPzogW251bWJlciwgbnVtYmVyXTtcclxuICAgIG1haW5BeGlzQWxpZ24/OiBcIk1JTlwiIHwgXCJNQVhcIiB8IFwiQ0VOVEVSXCIgfCBcIlNQQUNFX0JFVFdFRU5cIjtcclxuICAgIGFsdEF4aXNBbGlnbj86IFwiTUlOXCIgfCBcIk1BWFwiIHwgXCJDRU5URVJcIjtcclxuICAgIGNvdW50ZXJBeGlzU2l6aW5nTW9kZT86IFwiRklYRURcIiB8IFwiQVVUT1wiO1xyXG4gICAgcHJpbWFyeUF4aXNTaXppbmdNb2RlPzogXCJGSVhFRFwiIHwgXCJBVVRPXCI7XHJcbiAgICBjb3JuZXJSYWRpdXM/OiBudW1iZXJcclxuICAgIGxheW91dEFsaWduPzogXCJNSU5cIiB8IFwiQ0VOVEVSXCIgfCBcIk1BWFwiIHwgXCJTVFJFVENIXCIgfCBcIklOSEVSSVRcIjtcclxuICAgIGl0ZW1TcGFjaW5nPzogbnVtYmVyXHJcbn07XHJcblxyXG5jb25zdCBwYWRkaW5nQ2xvY2sgPSBbJ3BhZGRpbmdUb3AnLCAncGFkZGluZ1JpZ2h0JywgJ3BhZGRpbmdCb3R0b20nLCAncGFkZGluZ0xlZnQnXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGcmFtZU5vZGUoe1xyXG4gICAgbmFtZSxcclxuICAgIGNsaXBzQ29udGVudD0gZmFsc2UsXHJcbiAgICBwYWRkaW5nRGlyZWN0aW9uID0gWzAsMCwwLDBdLFxyXG4gICAgY29sb3I9J2ZmZmZmZicsXHJcbiAgICBtYWluQXhpcyA9ICdIT1JJWk9OVEFMJyxcclxuICAgIG1haW5BeGlzU2l6aW5nID0gJ0FVVE8nLFxyXG4gICAgYWx0QXhpc1NpemluZyA9ICdBVVRPJyxcclxuICAgIHJlc2l6ZSxcclxuICAgIG1haW5BeGlzQWxpZ249ICdDRU5URVInLFxyXG4gICAgYWx0QXhpc0FsaWduID0gJ0NFTlRFUicsXHJcbiAgICBsYXlvdXRBbGlnbiA9ICdTVFJFVENIJyxcclxuICAgIGNvcm5lclJhZGl1cyA9IDAsXHJcbiAgICBpdGVtU3BhY2luZ1xyXG59OkZyYW1lKTpGcmFtZU5vZGV7XHJcbiAgICBjb25zdCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XHJcbiAgICBmcmFtZS5uYW1lID0gbmFtZTtcclxuICAgIGZyYW1lLmNsaXBzQ29udGVudCA9IGNsaXBzQ29udGVudDtcclxuICAgIGZyYW1lLmZpbGxzID0gW3t0eXBlOiAnU09MSUQnLCBjb2xvcjogY29sb3JDb252ZXJ0ZXIoY29sb3IpfV07XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgNDsgaSsrKVxyXG4gICAgICAgIGZyYW1lW3BhZGRpbmdDbG9ja1tpXV0gPSBwYWRkaW5nRGlyZWN0aW9uW2ldO1xyXG4gICAgaWYgKGl0ZW1TcGFjaW5nKVxyXG4gICAgICAgIGZyYW1lLml0ZW1TcGFjaW5nID0gaXRlbVNwYWNpbmc7XHJcbiAgICBmcmFtZS5sYXlvdXRNb2RlID0gbWFpbkF4aXM7XHJcbiAgICBmcmFtZS5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBtYWluQXhpc1NpemluZztcclxuICAgIGZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IGFsdEF4aXNTaXppbmc7XHJcbiAgICByZXNpemUgJiYgZnJhbWUucmVzaXplKC4uLnJlc2l6ZSk7XHJcbiAgICBmcmFtZS5jb3JuZXJSYWRpdXMgPSBjb3JuZXJSYWRpdXM7XHJcbiAgICBmcmFtZS5wcmltYXJ5QXhpc0FsaWduSXRlbXMgPSBtYWluQXhpc0FsaWduO1xyXG4gICAgZnJhbWUuY291bnRlckF4aXNBbGlnbkl0ZW1zID0gIGFsdEF4aXNBbGlnbjtcclxuICAgIGZyYW1lLmxheW91dEFsaWduID0gbGF5b3V0QWxpZ247XHJcbiAgICByZXR1cm4gZnJhbWU7XHJcbn0iLCJcclxuaW1wb3J0IHtSZ2IsIGNvbG9yQ29udmVydGVyfSBmcm9tIFwiLi9jb2xvclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUZXh0e1xyXG4gICAgZmFtaWx5Pzogc3RyaW5nO1xyXG4gICAgc3R5bGU/OiBzdHJpbmc7XHJcbiAgICBmb250U2l6ZT86IG51bWJlcjtcclxuICAgIGFsaWduSG9yaXpvbnRhbD86XCJDRU5URVJcIiB8IFwiTEVGVFwiIHwgXCJSSUdIVFwiIHwgXCJKVVNUSUZJRURcIjtcclxuICAgIHJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cz86IFtudW1iZXIsIG51bWJlcl07XHJcbiAgICByZXNpemU/OiBbbnVtYmVyLCBudW1iZXJdIHwgbnVsbDtcclxuICAgIC8vdHlwZT86IHN0cmluZztcclxuICAgIGNvbG9yPzogc3RyaW5nfFJnYjtcclxuICAgIGFsaWduVmVydGljYWw/OlwiVE9QXCIgfCBcIkNFTlRFUlwiIHwgXCJCT1RUT01cIjtcclxuICAgIGJveEF1dG9SZXNpemU/OiAgJ1dJRFRIX0FORF9IRUlHSFQnIHwgXCJOT05FXCIgfCBcIkhFSUdIVFwiO1xyXG4gICAgYXV0b1JlbmFtZT86IGJvb2xlYW47XHJcbiAgICBuYW1lOnN0cmluZztcclxuICAgIGNoYXJhY3RlcnM6IHN0cmluZztcclxuICAgIHRleHRDYXNlPzogXCJPUklHSU5BTFwiIHwgXCJVUFBFUlwiIHwgXCJMT1dFUlwiIHwgXCJUSVRMRVwiO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUZXh0Tm9kZSh7XHJcbiAgICBmYW1pbHkgPSBcIklCTSBQbGV4IE1vbm9cIixcclxuICAgIHN0eWxlID0gXCJTZW1pQm9sZFwiLFxyXG4gICAgZm9udFNpemU9MTYsXHJcbiAgICBhbGlnbkhvcml6b250YWwgPSBcIkNFTlRFUlwiLFxyXG4gICAgcmVzaXplV2l0aG91dENvbnN0cmFpbnRzID0gbnVsbCxcclxuICAgIC8vdHlwZT0gJ1NPTElEJywgXHJcbiAgICBjb2xvciA9ICdmZmZmZmYnLFxyXG4gICAgYWxpZ25WZXJ0aWNhbCA9IFwiQ0VOVEVSXCIsXHJcbiAgICBib3hBdXRvUmVzaXplID0gJ1dJRFRIX0FORF9IRUlHSFQnLFxyXG4gICAgbmFtZSxcclxuICAgIHJlc2l6ZSA9IG51bGwsXHJcbiAgICBhdXRvUmVuYW1lPXRydWUsXHJcbiAgICBjaGFyYWN0ZXJzLFxyXG4gICAgdGV4dENhc2U9XCJPUklHSU5BTFwiXHJcbn06VGV4dCk6VGV4dE5vZGV7XHJcbiAgICBjb25zdCB0ZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xyXG4gICAgdGV4dC5mb250TmFtZSA9IHtmYW1pbHksIHN0eWxlfTtcclxuICAgIHRleHQuZm9udFNpemUgPSBmb250U2l6ZTtcclxuICAgIHRleHQudGV4dEFsaWduSG9yaXpvbnRhbCA9IGFsaWduSG9yaXpvbnRhbDtcclxuICAgIHRleHQudGV4dEFsaWduVmVydGljYWwgPSBhbGlnblZlcnRpY2FsO1xyXG4gICAgdGV4dC5uYW1lID0gbmFtZTtcclxuICAgIGlmIChyZXNpemUpXHJcbiAgICAgICAgdGV4dC5yZXNpemUoLi4ucmVzaXplKTtcclxuICAgIHRleHQudGV4dEF1dG9SZXNpemUgPSBib3hBdXRvUmVzaXplO1xyXG4gICAgdGV4dC5hdXRvUmVuYW1lID0gYXV0b1JlbmFtZTtcclxuICAgIHRleHQuY2hhcmFjdGVycyA9IGNoYXJhY3RlcnM7XHJcbiAgICB0ZXh0LnRleHRDYXNlID0gdGV4dENhc2U7XHJcbiAgICB0ZXh0LmZpbGxzID0gW3t0eXBlOlwiU09MSURcIiwgY29sb3I6IGNvbG9yQ29udmVydGVyKGNvbG9yKX1dXHJcbiAgICByZXNpemVXaXRob3V0Q29uc3RyYWludHMgJiYgdGV4dC5yZXNpemVXaXRob3V0Q29uc3RyYWludHMoLi4ucmVzaXplV2l0aG91dENvbnN0cmFpbnRzKTtcclxuICAgIHJldHVybiB0ZXh0O1xyXG59IiwiaW1wb3J0IHtjcmVhdGVGcmFtZU5vZGUsIEZyYW1lfSBmcm9tICcuLi91dGlsL2ZyYW1lJztcclxuXHJcbi8vZGVmYXVsdCB2YWx1ZXMgZm9yIGZyYW1lcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLypcclxuICAgIG5hbWUsXHJcbiAgICBwYWRkaW5nRGlyZWN0aW9uID0gWzAsMCwwLDBdLFxyXG4gICAgY29sb3I9J2ZmZmZmZicsXHJcbiAgICBtYWluQXhpcyA9ICdIT1JJWk9OVEFMJyxcclxuICAgIG1haW5BeGlzU2l6aW5nID0gJ0FVVE8nLFxyXG4gICAgYWx0QXhpc1NpemluZyA9ICdBVVRPJyxcclxuICAgIHJlc2l6ZSxcclxuICAgIG1haW5BeGlzQWxpZ249ICdDRU5URVInLFxyXG4gICAgYWx0QXhpc0FsaWduID0gJ0NFTlRFUidcclxuKi9cclxuXHJcbmNvbnN0IGNvbHVtblNldHRpbmdzID0ge1xyXG4gICAgbWFpbkF4aXM6ICdWRVJUSUNBTCcsXHJcbiAgICBhbHRBeGlzU2l6aW5nOiAnQVVUTycsXHJcbiAgICBtYWluQXhpc1NpemluZzogJ0FVVE8nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ29sdW1uKHVzZXJTZXR0aW5nczogRnJhbWUpe1xyXG4gICAgY29uc3Qgc2V0dGluZ3MgPSAgT2JqZWN0LmFzc2lnbihjb2x1bW5TZXR0aW5ncywgdXNlclNldHRpbmdzKTtcclxuICAgIHJldHVybiBjcmVhdGVGcmFtZU5vZGUoc2V0dGluZ3MpO1xyXG59IiwiaW1wb3J0IHtjcmVhdGVUZXh0Tm9kZSwgVGV4dH0gZnJvbSAnLi4vdXRpbC90ZXh0J1xyXG5pbXBvcnQgeyBjcmVhdGVGcmFtZU5vZGUsIEZyYW1lIH0gZnJvbSAnLi4vdXRpbC9mcmFtZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDb25zdHJhaW50KG5hbWU6c3RyaW5nLCBjb25zdHJhaW50czpzdHJpbmdbXSkge1xyXG4gICAgY29uc3Qgd2lkZ2V0ID0gY3JlYXRlRnJhbWVOb2RlKHtcclxuICAgICAgICBuYW1lLCBcclxuICAgICAgICBwYWRkaW5nRGlyZWN0aW9uOiBbMCwxMCwwLDEwXSxcclxuICAgICAgICBjb2xvcjogJzIyMjMyNicsXHJcbiAgICAgICAgaXRlbVNwYWNpbmc6IDgsXHJcbiAgICAgICAgbWFpbkF4aXM6ICdIT1JJWk9OVEFMJywgXHJcbiAgICAgICAgbWFpbkF4aXNBbGlnbjogJ01JTicsXHJcbiAgICAgICAgcmVzaXplOiBbMTAsNDBdXHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IoY29uc3QgY29uc3RyYWludCBvZiBjb25zdHJhaW50cyl7XHJcbiAgICAgICAgY29uc3QgaWQgPSBjcmVhdGVGcmFtZU5vZGUoe2xheW91dEFsaWduOiAnQ0VOVEVSJywgcGFkZGluZ0RpcmVjdGlvbjogWzAsOCwwLDhdLCBjb3JuZXJSYWRpdXM6MzAsIG5hbWU6IGNvbnN0cmFpbnQsIGNvbG9yOiAnNjI2MzY0J30pO1xyXG4gICAgICAgIGNvbnN0IHRleHQgPSBjcmVhdGVUZXh0Tm9kZSh7dGV4dENhc2U6XCJVUFBFUlwiLCBuYW1lOiAnY29uc3RyYWludCcsIGNoYXJhY3RlcnM6IGNvbnN0cmFpbnQsIGZvbnRTaXplOiAxNCwgc3R5bGU6ICdSZWd1bGFyJ30pO1xyXG4gICAgICAgIGlkLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgICAgIHdpZGdldC5hcHBlbmRDaGlsZChpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHdpZGdldDtcclxufVxyXG4iLCJpbXBvcnQge2NyZWF0ZVRleHROb2RlLCBUZXh0fSBmcm9tICcuLi91dGlsL3RleHQnXHJcbmltcG9ydCB7IGNyZWF0ZUZyYW1lTm9kZSwgRnJhbWUgfSBmcm9tICcuLi91dGlsL2ZyYW1lJztcclxuXHJcbnR5cGUgRGF0YVR5cGUgPSAnY2hhcmFjdGVyJyB8ICdudW1lcmljJyB8ICdkYXRlJyB8ICdiaW5hcnknIHwgJ2Jvb2xlYW4nIHwgJ3N0cmluZycgfCAnZ2VvbWV0cmljJyB8ICduZXR3b3JrIGFkZHJlc3MnIHwgJ2JpdCc7XHJcbmNvbnN0IGRhdGFUeXBlQ29sb3JzID0ge1xyXG4gICAgY2hhcmFjdGVyOiAnRUZDOTAwJyxcclxuICAgIG51bWVyaWM6ICdGMTc0MDAnLFxyXG4gICAgZGF0ZTogJzAwRDBBQicsXHJcbiAgICBiaW5hcnk6ICcwMDI2RUYnLFxyXG4gICAgYm9vbGVhbjogJzAwN0RGMScsXHJcbiAgICBzdHJpbmc6ICdEMDAwMjUnLFxyXG4gICAgZ2VvbWV0cmljOiAnN0VDNjM5JyxcclxuICAgICduZXR3b3JrIGFkZHJlc3MnOiAnQ0YyRUQxJyxcclxuICAgIGJpdDogJzAwRkZGNidcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRGF0YVR5cGUobmFtZTpzdHJpbmcsIGRhdGFUeXBlOkRhdGFUeXBlKTpGcmFtZU5vZGUge1xyXG4gICAgY29uc3QgaWQgPSBjcmVhdGVGcmFtZU5vZGUoe21haW5BeGlzQWxpZ246ICdNSU4nLHJlc2l6ZTogWzEsNDBdLGFsdEF4aXNBbGlnbjogXCJDRU5URVJcIiwgbmFtZTogJ2lkXycrbmFtZSwgY29sb3I6ICcyMjIzMjYnLCBwYWRkaW5nRGlyZWN0aW9uOiBbMCwxMCwwLDEwXX0pO1xyXG4gICAgY29uc3QgdGV4dCA9IGNyZWF0ZVRleHROb2RlKHtuYW1lLCBjb2xvcjogZGF0YVR5cGVDb2xvcnNbZGF0YVR5cGVdLCBjaGFyYWN0ZXJzOiBuYW1lLCBmb250U2l6ZTogMTQsIHRleHRDYXNlOiAnVVBQRVInLCBzdHlsZTogJ1JlZ3VsYXInfSlcclxuICAgIGlkLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgcmV0dXJuIGlkO1xyXG59XHJcbiIsImltcG9ydCB7Y3JlYXRlVGV4dE5vZGUsIFRleHR9IGZyb20gJy4uL3V0aWwvdGV4dCdcclxuaW1wb3J0IHsgY3JlYXRlRnJhbWVOb2RlLCBGcmFtZSB9IGZyb20gJy4uL3V0aWwvZnJhbWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSWQobmFtZTpzdHJpbmcpOkZyYW1lTm9kZSB7XHJcbiAgICBjb25zdCBpZCA9IGNyZWF0ZUZyYW1lTm9kZSh7bmFtZSwgcmVzaXplOlsxMCw0MF0sbWFpbkF4aXNBbGlnbjogXCJNSU5cIixjb2xvcjogJzIyMjMyNicsIHBhZGRpbmdEaXJlY3Rpb246IFswLDAsMCwxMF19KTtcclxuICAgIGNvbnN0IHRleHQgPSBjcmVhdGVUZXh0Tm9kZSh7bmFtZSwgY2hhcmFjdGVyczogbmFtZSwgZm9udFNpemU6IDE0fSlcclxuICAgIGlkLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgcmV0dXJuIGlkO1xyXG59XHJcbiIsImltcG9ydCB7Y3JlYXRlVGV4dE5vZGUsIFRleHR9IGZyb20gJy4uL3V0aWwvdGV4dCdcclxuaW1wb3J0IHsgY3JlYXRlRnJhbWVOb2RlLCBGcmFtZSB9IGZyb20gJy4uL3V0aWwvZnJhbWUnO1xyXG5cclxuY29uc3QgZGVmYXVsdEtleVNldHRpbmdzID0ge1xyXG4gICAgbWFpbkF4aXM6ICdWRVJUSUNBTCcsXHJcbiAgICByZXNpemU6WzEwLDQwXSxcclxuICAgIG1haW5BeGlzU2l6aW5nOiAnQVVUTydcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdEtleVRpdGxlU2V0dGluZ3MgPSB7XHJcbiAgICBmb250U2l6ZTogMTAsXHJcbiAgICByZXNpemVXaXRob3V0Q29uc3RyYWludHM6IFs2NywgMTNdLFxyXG4gICAgbmFtZTogJ2tleVR5cGUnXHJcbn1cclxuY29uc3QgZGVmYWx0S2V5TGlua1NldHRpbmdzID0ge1xyXG4gICAgZm9udFNpemU6IDksXHJcbiAgICBzdHlsZTogJ0xpZ2h0JyxcclxuICAgIGNoYXJhY3RlcnM6ICdOL0EnXHJcbn1cclxuXHJcbmNvbnN0IGZvcmVpZ25LZXlTZXR0aW5ncyA9IHtcclxuICAgIGNvbG9yOiAnMjEyQjNCJyxcclxuICAgIG5hbWU6ICdGT1JFSUdOJywgXHJcbiAgICBjaGFyYWN0ZXJzOiAnRksnXHJcbn1cclxuXHJcbmNvbnN0IHByaW1hcnlLZXlTZXR0aW5ncyA9IHtcclxuICAgIGNvbG9yOiAnMzgzOTNBJyxcclxuICAgIG5hbWU6ICdQUklNQVJZJyxcclxuICAgIGNoYXJhY3RlcnM6ICdQSydcclxufVxyXG5cclxudHlwZSBrZXlUeXBlID0gJ0ZPUkVJR04nIHwgJ1BSSU1BUlknIHwgJ0NVU1RPTSc7XHJcblxyXG5pbnRlcmZhY2UgS2V5e1xyXG4gICAgdHlwZToga2V5VHlwZSwgXHJcbiAgICBrZXlUaXRsZVNldHRpbmdzPzpUZXh0LCBcclxuICAgIGtleUxpbmtTZXR0aW5nczpUZXh0LFxyXG4gICAga2V5U2V0dGluZ3M/OkZyYW1lXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUtleSh7XHJcbiAgICAgICAgdHlwZSwgXHJcbiAgICAgICAga2V5VGl0bGVTZXR0aW5ncyxcclxuICAgICAgICBrZXlMaW5rU2V0dGluZ3MsXHJcbiAgICAgICAga2V5U2V0dGluZ3NcclxuICAgIH06S2V5KXtcclxuXHJcbiAgICBsZXQgdGV4dENvbG9yO1xyXG4gICAgbGV0IGtleVR5cGVTZXR0aW5ncyA9IHt9O1xyXG4gICAgc3dpdGNoKHR5cGUpe1xyXG4gICAgICAgIGNhc2UgJ0ZPUkVJR04nOlxyXG4gICAgICAgICAgICBrZXlUeXBlU2V0dGluZ3MgPSBmb3JlaWduS2V5U2V0dGluZ3M7XHJcbiAgICAgICAgICAgIHRleHRDb2xvciA9IHtjb2xvcjogJzEzNzFmZid9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ1BSSU1BUlknOlxyXG4gICAgICAgICAgICBrZXlUeXBlU2V0dGluZ3MgPSBwcmltYXJ5S2V5U2V0dGluZ3M7XHJcbiAgICAgICAgICAgIHRleHRDb2xvciA9IHtjb2xvcjogJ0ZGNzYxMyd9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRleHRDb2xvciA9IHtuYW1lOiAnQ1VTVE9NJ31cclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3Qga2V5QXNzaWduID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0S2V5U2V0dGluZ3MsIGtleVR5cGVTZXR0aW5ncywga2V5U2V0dGluZ3MpO1xyXG4gICAgY29uc3Qga2V5ID0gY3JlYXRlRnJhbWVOb2RlKGtleUFzc2lnbik7XHJcbiAgICBjb25zdCBrZXlUaXRsZSA9IGNyZWF0ZVRleHROb2RlKE9iamVjdC5hc3NpZ24oZGVmYXVsdEtleVRpdGxlU2V0dGluZ3MsIGtleVR5cGVTZXR0aW5ncywga2V5VGl0bGVTZXR0aW5ncywgdGV4dENvbG9yKSlcclxuICAgIGNvbnN0IGtleUxpbmsgPSBjcmVhdGVUZXh0Tm9kZShPYmplY3QuYXNzaWduKGRlZmFsdEtleUxpbmtTZXR0aW5ncywgdGV4dENvbG9yLCBrZXlMaW5rU2V0dGluZ3MpKVxyXG4gICAga2V5LmFwcGVuZENoaWxkKGtleVRpdGxlKTtcclxuICAgIGtleS5hcHBlbmRDaGlsZChrZXlMaW5rKTtcclxuICAgIHJldHVybiBrZXk7XHJcbn0iLCJpbXBvcnQge2NyZWF0ZUZyYW1lTm9kZX0gZnJvbSAnLi4vdXRpbC9mcmFtZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUYWJsZSh0YWJsZU5hbWU6c3RyaW5nKXtcclxuICAgIGNvbnN0IHRhYmxlID0gY3JlYXRlRnJhbWVOb2RlKHtcclxuICAgICAgICBuYW1lOiB0YWJsZU5hbWUsXHJcbiAgICAgICAgY2xpcHNDb250ZW50OiB0cnVlLFxyXG4gICAgICAgIGxheW91dEFsaWduOidTVFJFVENIJyxcclxuICAgICAgICBjb3JuZXJSYWRpdXM6IDUsXHJcbiAgICAgICAgbWFpbkF4aXM6ICdWRVJUSUNBTCcsXHJcbiAgICAgICAgY29sb3I6ICc0RTRGNTEnLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGFibGU7XHJcbn0iLCJpbXBvcnQge2NyZWF0ZVRleHROb2RlLCBUZXh0fSBmcm9tICcuLi91dGlsL3RleHQnXHJcbmltcG9ydCB7IGNyZWF0ZUZyYW1lTm9kZSwgRnJhbWUgfSBmcm9tICcuLi91dGlsL2ZyYW1lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRpdGxlKHRhYmxlTmFtZTpzdHJpbmcpe1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRnJhbWVOb2RlKHtcclxuICAgICAgICBjb2xvcjogJzRiNGM0ZScsXHJcbiAgICAgICAgbWFpbkF4aXM6ICdWRVJUSUNBTCcsXHJcbiAgICAgICAgcGFkZGluZ0RpcmVjdGlvbjogWzAsMCwwLDEwXSxcclxuICAgICAgICBuYW1lOiB0YWJsZU5hbWUsXHJcbiAgICAgICAgbWFpbkF4aXNTaXppbmc6ICdGSVhFRCcsXHJcbiAgICAgICAgYWx0QXhpc1NpemluZzogJ0FVVE8nLFxyXG4gICAgICAgIHJlc2l6ZTogWzQwMCw0MF0sXHJcbiAgICAgICAgbWFpbkF4aXNBbGlnbjogJ0NFTlRFUicsXHJcbiAgICAgICAgYWx0QXhpc0FsaWduOiAnTUlOJ1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZVRleHROb2RlKHtcclxuICAgICAgICBmYW1pbHk6J1dvcmsgU2FucycsXHJcbiAgICAgICAgY2hhcmFjdGVyczogdGFibGVOYW1lLFxyXG4gICAgICAgIGFsaWduSG9yaXpvbnRhbDogJ0xFRlQnLFxyXG4gICAgICAgIGFsaWduVmVydGljYWw6ICdDRU5URVInLFxyXG4gICAgICAgIG5hbWU6IHRhYmxlTmFtZVxyXG4gICAgfSk7XHJcbiAgXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNhbGxGb250IGZyb20gJy4vdXRpbC9mb250JztcclxuaW1wb3J0IGNyZWF0ZURlZmF1bHRUYWJsZSBmcm9tICcuL3VwZGF0ZVVJRnVuY3Rpb25zL2NyZWF0ZURlZmF1bHRUYWJsZSc7XHJcbmltcG9ydCBkZWxldGVUYWJsZSBmcm9tICcuL3VwZGF0ZVVJRnVuY3Rpb25zL2RlbGV0ZVRhYmxlJztcclxuXHJcbmZpZ21hLnNob3dVSShfX2h0bWxfXyk7XHJcblxyXG5maWdtYS51aS5yZXNpemUoNDUwLCA2MDApO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVQb3B1bGF0ZWRUYWJsZSgpe1xyXG4gIGF3YWl0IGNhbGxGb250KFtcclxuICAgIHsgZmFtaWx5OiBcIldvcmsgU2Fuc1wiLCBzdHlsZTogXCJTZW1pQm9sZFwiIH0sXHJcbiAgICB7IGZhbWlseTogXCJJQk0gUGxleCBNb25vXCIsIHN0eWxlOiBcIkxpZ2h0XCIgfSxcclxuICAgIHsgZmFtaWx5OiBcIklCTSBQbGV4IE1vbm9cIiwgc3R5bGU6IFwiUmVndWxhclwiIH0sXHJcbiAgICB7IGZhbWlseTogXCJJQk0gUGxleCBNb25vXCIsIHN0eWxlOiBcIlNlbWlCb2xkXCIgfVxyXG4gIF0pO1xyXG59XHJcbi8vaWYgKGZpZ21hLmVkaXRvclR5cGUgPT09ICdmaWdtYScpIFxyXG5nZW5lcmF0ZVBvcHVsYXRlZFRhYmxlKCk7XHJcblxyXG5jb25zdCBvcmNoZXN0cmF0ZU1vZGVsID0ge1xyXG4gIENSRUFURV9UQUJMRTogJ0NSRUFURV9UQUJMRScsXHJcbiAgUkVNT1ZFX1RBQkxFOiAnUkVNT1ZFX1RBQkxFJyxcclxuICBNT0RJRllfVElUTEU6ICdNT0RJRllfVElUTEUnLFxyXG4gIE1PRElGWV9JRDogJ01PRElGWV9JRCcsXHJcbiAgTU9ESUZZX0RBVEFUWVBFOiAnTU9ESUZZX0RBVEFUWVBFJyxcclxuICBNT0RJRllfQ09OU1RSQUlOVFM6ICdNT0RJRllfQ09OU1RSQUlOVFMnLFxyXG4gIE1PRElGWV9LRVlTOiAnTU9ESUZZX0tFWVMnXHJcbn1cclxuXHJcblxyXG5maWdtYS51aS5vbm1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xyXG4gIC8vZmlnbWEuZ2V0Tm9kZUJ5SWQoaWQ6IHN0cmluZyk7XHJcbiAgLy9ub2RlLmlkXHJcbiAgY29uc29sZS5sb2cobWVzc2FnZSwgJ2R1Y2snKTtcclxuICBjb25zdCBsb2FkID0gbWVzc2FnZS5wYXlsb2FkO1xyXG4gIHN3aXRjaChtZXNzYWdlLnR5cGUpe1xyXG4gICAgY2FzZSBvcmNoZXN0cmF0ZU1vZGVsLkNSRUFURV9UQUJMRTpcclxuICAgICAgICBjcmVhdGVEZWZhdWx0VGFibGUobG9hZC50YWJsZVVVSUQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBvcmNoZXN0cmF0ZU1vZGVsLlJFTU9WRV9UQUJMRTpcclxuICAgICAgLy9cclxuICAgICAgICBkZWxldGVUYWJsZShsb2FkLnRhYmxlVVVJRCwgbG9hZC5maWdtYUlkKTtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2Ugb3JjaGVzdHJhdGVNb2RlbC5NT0RJRllfVElUTEU6XHJcbiAgICAgICAgLy9tb2RpZnlUaXRsZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBvcmNoZXN0cmF0ZU1vZGVsLk1PRElGWV9JRDpcclxuICAgICAgICAvL21vZGlmeUlkKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIG9yY2hlc3RyYXRlTW9kZWwuTU9ESUZZX0RBVEFUWVBFOlxyXG4gICAgICAgIC8vbW9kaWZ5RGF0YXR5cGUoKTtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2Ugb3JjaGVzdHJhdGVNb2RlbC5NT0RJRllfQ09OU1RSQUlOVFM6XHJcbiAgICAgICAgLy9tb2RpZnlDb25zdHJhaW50cygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBvcmNoZXN0cmF0ZU1vZGVsLk1PRElGWV9LRVlTOlxyXG4gICAgICAgIC8vbW9kaWZ5S2V5cygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=