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






function createDefaultColumns(uuid) {
    const columns = [];
    const nodeIds = {
        fk: null,
        id: '',
        dataType: '',
        constraint: '',
        pk: null
    };
    const foreignKeyColumn = (0,_widgets_column__WEBPACK_IMPORTED_MODULE_0__["default"])({ name: 'FOREIGN', color: '4E4F51' });
    const fk = (0,_widgets_key__WEBPACK_IMPORTED_MODULE_1__["default"])({ type: 'FOREIGN', keyLinkSettings: { name: 'FK', characters: 'N/A' } });
    foreignKeyColumn.appendChild(fk);
    columns.push(foreignKeyColumn);
    const idColumn = (0,_widgets_column__WEBPACK_IMPORTED_MODULE_0__["default"])({ name: 'ID', color: '4E4F51' });
    const id = (0,_widgets_id__WEBPACK_IMPORTED_MODULE_2__["default"])('new_id');
    idColumn.appendChild(id.node);
    nodeIds.id = id.id;
    columns.push(idColumn);
    const dataTypeColumn = (0,_widgets_column__WEBPACK_IMPORTED_MODULE_0__["default"])({ name: 'DATATYPE', color: '4E4F51' });
    const dt = (0,_widgets_dataType__WEBPACK_IMPORTED_MODULE_3__["default"])('integer', 'numeric');
    dataTypeColumn.appendChild(dt.node);
    nodeIds.dataType = dt.id;
    columns.push(dataTypeColumn);
    const constraintsColumn = (0,_widgets_column__WEBPACK_IMPORTED_MODULE_0__["default"])({ name: 'CONSTRAINTS', color: '4E4F51' });
    const cst = (0,_widgets_constraint__WEBPACK_IMPORTED_MODULE_4__["default"])('constraint1', ['NOT NULL']);
    constraintsColumn.appendChild(cst.node);
    nodeIds.constraint = cst.node.id;
    columns.push(constraintsColumn);
    const primaryKeyColumn = (0,_widgets_column__WEBPACK_IMPORTED_MODULE_0__["default"])({ name: 'PRIMARY', color: '4E4F51' });
    const pk = (0,_widgets_key__WEBPACK_IMPORTED_MODULE_1__["default"])({ type: 'PRIMARY', keyLinkSettings: { name: 'PK', characters: 'N/A' } });
    primaryKeyColumn.appendChild(pk);
    columns.push(primaryKeyColumn);
    const grid = (0,_util_frame__WEBPACK_IMPORTED_MODULE_5__.createFrameNode)({ mainAxis: 'HORIZONTAL', name: 'tableData' });
    columns.forEach(column => grid.appendChild(column));
    return { type: 'UPDATE_FIGMA_IDS_NEW_COLUMN', node: grid, figmaIds: nodeIds, uuid };
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
    const table = (0,_widgets_table__WEBPACK_IMPORTED_MODULE_0__["default"])('TABLE');
    table.setPluginData('uuid', uuid);
    const title = (0,_widgets_title__WEBPACK_IMPORTED_MODULE_1__["default"])('untitled');
    table.appendChild(title);
    const grid = (0,_createDefaultColumn__WEBPACK_IMPORTED_MODULE_2__["default"])(uuid);
    table.appendChild(grid.node);
    return { type: 'UPDATE_FIGMA_IDS_NEW_TABLE', node: table, figmaIds: Object.assign({ table: table.id }, grid.figmaIds), uuid };
}


/***/ }),

/***/ "./code/updateUIFunctions/deleteColumn.ts":
/*!************************************************!*\
  !*** ./code/updateUIFunctions/deleteColumn.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteTable)
/* harmony export */ });
function deleteTable(uuid, figmaId) {
    figma.getNodeById(figmaId).remove();
    return { type: 'REMOVE_TABLE', uuid };
}


/***/ }),

/***/ "./code/updateUIFunctions/deleteTable.ts":
/*!***********************************************!*\
  !*** ./code/updateUIFunctions/deleteTable.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteTable)
/* harmony export */ });
function deleteTable(uuid, figmaId) {
    figma.getNodeById(figmaId).remove();
    return { type: 'REMOVE_TABLE', uuid };
}


/***/ }),

/***/ "./code/updateUIFunctions/modifyConstraints.ts":
/*!*****************************************************!*\
  !*** ./code/updateUIFunctions/modifyConstraints.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ modifyConstraints)
/* harmony export */ });
/* harmony import */ var _widgets_constraint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../widgets/constraint */ "./code/widgets/constraint.ts");

function modifyConstraints(uuid, newConstraints, figmaId) {
    const constraintNode = figma.getNodeById(figmaId);
    const prevConstraints = constraintNode.children;
    prevConstraints.forEach(node => node.remove());
    (0,_widgets_constraint__WEBPACK_IMPORTED_MODULE_0__.createConstraintTiles)(newConstraints, constraintNode);
    return { type: 'MODIFY_CONSTRAINTS', uuid };
}


/***/ }),

/***/ "./code/updateUIFunctions/modifyDataType.ts":
/*!**************************************************!*\
  !*** ./code/updateUIFunctions/modifyDataType.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ modifyDatatype)
/* harmony export */ });
function modifyDatatype(uuid, dataType, figmaId) {
    const dataTypeNode = figma.getNodeById(figmaId);
    dataTypeNode.characters = dataType;
    return { type: 'MODIFY_DATA_TYPE', uuid };
}


/***/ }),

/***/ "./code/updateUIFunctions/modifyId.ts":
/*!********************************************!*\
  !*** ./code/updateUIFunctions/modifyId.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ modifyId)
/* harmony export */ });
function modifyId(uuid, id, figmaId) {
    const idNode = figma.getNodeById(figmaId);
    idNode.characters = id;
    return { type: 'MODIFY_ID', uuid };
}


/***/ }),

/***/ "./code/updateUIFunctions/modifyTitle.ts":
/*!***********************************************!*\
  !*** ./code/updateUIFunctions/modifyTitle.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ modifyTitle)
/* harmony export */ });
function modifyTitle(uuid, title, figmaId) {
    const titleNode = figma.getNodeById(figmaId);
    titleNode.characters = title;
    return { type: 'MODIFY_TITLE', uuid };
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
/* harmony export */   "default": () => (/* binding */ createConstraint),
/* harmony export */   "createConstraintTiles": () => (/* binding */ createConstraintTiles)
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
    const node = createConstraintTiles(constraints, widget);
    return node;
}
function createConstraintTiles(constraints, widget) {
    const ids = [];
    for (const constraint of constraints) {
        const id = (0,_util_frame__WEBPACK_IMPORTED_MODULE_1__.createFrameNode)({ layoutAlign: 'CENTER', paddingDirection: [0, 8, 0, 8], cornerRadius: 30, name: constraint, color: '626364' });
        const text = (0,_util_text__WEBPACK_IMPORTED_MODULE_0__.createTextNode)({ textCase: "UPPER", name: 'constraint', characters: constraint, fontSize: 14, style: 'Regular' });
        id.appendChild(text);
        ids.push(id.id);
        widget.appendChild(id);
    }
    return { node: widget, ids };
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
    const dataTypeNode = (0,_util_frame__WEBPACK_IMPORTED_MODULE_1__.createFrameNode)({ mainAxisAlign: 'MIN', resize: [1, 40], altAxisAlign: "CENTER", name: 'id_' + name, color: '222326', paddingDirection: [0, 10, 0, 10] });
    const text = (0,_util_text__WEBPACK_IMPORTED_MODULE_0__.createTextNode)({ name, color: dataTypeColors[dataType], characters: name, fontSize: 14, textCase: 'UPPER', style: 'Regular' });
    dataTypeNode.appendChild(text);
    return { node: dataTypeNode, id: dataTypeNode.id };
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
    return { node: id, id: text.id };
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
/* harmony import */ var _updateUIFunctions_createDefaultColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateUIFunctions/createDefaultColumn */ "./code/updateUIFunctions/createDefaultColumn.ts");
/* harmony import */ var _updateUIFunctions_deleteTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateUIFunctions/deleteTable */ "./code/updateUIFunctions/deleteTable.ts");
/* harmony import */ var _updateUIFunctions_modifyDataType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateUIFunctions/modifyDataType */ "./code/updateUIFunctions/modifyDataType.ts");
/* harmony import */ var _updateUIFunctions_modifyTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updateUIFunctions/modifyTitle */ "./code/updateUIFunctions/modifyTitle.ts");
/* harmony import */ var _updateUIFunctions_modifyId__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateUIFunctions/modifyId */ "./code/updateUIFunctions/modifyId.ts");
/* harmony import */ var _updateUIFunctions_modifyConstraints__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./updateUIFunctions/modifyConstraints */ "./code/updateUIFunctions/modifyConstraints.ts");
/* harmony import */ var _updateUIFunctions_deleteColumn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./updateUIFunctions/deleteColumn */ "./code/updateUIFunctions/deleteColumn.ts");
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
    REMOVE_COL: 'REMOVE_COL',
    ADD_COL: 'ADD_COL',
    CREATE_TABLE: 'CREATE_TABLE',
    REMOVE_TABLE: 'REMOVE_TABLE',
    MODIFY_TITLE: 'MODIFY_TITLE',
    MODIFY_ID: 'MODIFY_ID',
    MODIFY_DATATYPE: 'MODIFY_DATATYPE',
    MODIFY_CONSTRAINTS: 'MODIFY_CONSTRAINTS',
    MODIFY_KEYS: 'MODIFY_KEYS',
    UPDATE_FIGMA_ID: 'UPDATE_FIGMA_ID',
    UPDATE_FIGMA_IDS_NEW_TABLE: 'UPDATE_FIGMA_IDS_NEW_TABLE',
    UPDATE_FIGMA_IDS_NEW_COLUMN: 'UPDATE_FIGMA_IDS_NEW_COLUMN'
};
figma.ui.onmessage = (message) => {
    const { uuid, figmaId, title, id, newConstraints, dataType } = message.payload;
    let returnMessage;
    switch (message.type) {
        case orchestrateModel.CREATE_TABLE:
            returnMessage = (0,_updateUIFunctions_createDefaultTable__WEBPACK_IMPORTED_MODULE_1__["default"])(uuid);
            delete returnMessage.node;
            figma.ui.postMessage(returnMessage);
            break;
        case orchestrateModel.REMOVE_TABLE:
            returnMessage = (0,_updateUIFunctions_deleteTable__WEBPACK_IMPORTED_MODULE_3__["default"])(uuid, figmaId);
            figma.ui.postMessage(returnMessage);
            break;
        case orchestrateModel.ADD_COL:
            returnMessage = (0,_updateUIFunctions_createDefaultColumn__WEBPACK_IMPORTED_MODULE_2__["default"])(uuid);
            const table = figma.getNodeById(figmaId);
            table.appendChild(returnMessage.node);
            delete returnMessage.node;
            figma.ui.postMessage(returnMessage);
            break;
        case orchestrateModel.REMOVE_COL:
            returnMessage = (0,_updateUIFunctions_deleteColumn__WEBPACK_IMPORTED_MODULE_8__["default"])(uuid, figmaId);
            figma.ui.postMessage(returnMessage);
            break;
        case orchestrateModel.MODIFY_TITLE:
            returnMessage = (0,_updateUIFunctions_modifyTitle__WEBPACK_IMPORTED_MODULE_5__["default"])(uuid, title, figmaId);
            figma.ui.postMessage(returnMessage);
            break;
        case orchestrateModel.MODIFY_ID:
            returnMessage = (0,_updateUIFunctions_modifyId__WEBPACK_IMPORTED_MODULE_6__["default"])(uuid, id, figmaId);
            figma.ui.postMessage(returnMessage);
            break;
        case orchestrateModel.MODIFY_DATATYPE:
            returnMessage = (0,_updateUIFunctions_modifyDataType__WEBPACK_IMPORTED_MODULE_4__["default"])(uuid, dataType, figmaId);
            figma.ui.postMessage(returnMessage);
            break;
        case orchestrateModel.MODIFY_CONSTRAINTS:
            returnMessage = (0,_updateUIFunctions_modifyConstraints__WEBPACK_IMPORTED_MODULE_7__["default"])(uuid, newConstraints, figmaId);
            figma.ui.postMessage(returnMessage);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2xELEtBQUssQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BDLE1BQU07UUFDVixLQUFLLGdCQUFnQixDQUFDLFNBQVM7WUFDM0IsYUFBYSxHQUFHLHVFQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM1QyxLQUFLLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNwQyxNQUFNO1FBQ1YsS0FBSyxnQkFBZ0IsQ0FBQyxlQUFlO1lBQ2pDLGFBQWEsR0FBRyw2RUFBYyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDeEQsS0FBSyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDcEMsTUFBTTtRQUNWLEtBQUssZ0JBQWdCLENBQUMsa0JBQWtCO1lBQ3BDLGFBQWEsR0FBRyxnRkFBaUIsQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2pFLEtBQUssQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BDLE1BQU07UUFDVixLQUFLLGdCQUFnQixDQUFDLFdBQVc7WUFDN0IsZUFBZTtZQUNmLE1BQU07UUFDVjtZQUNJLE1BQU07S0FDWDtBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZWJyYS8uL2NvZGUvdXBkYXRlVUlGdW5jdGlvbnMvY3JlYXRlRGVmYXVsdENvbHVtbi50cyIsIndlYnBhY2s6Ly96ZWJyYS8uL2NvZGUvdXBkYXRlVUlGdW5jdGlvbnMvY3JlYXRlRGVmYXVsdFRhYmxlLnRzIiwid2VicGFjazovL3plYnJhLy4vY29kZS91cGRhdGVVSUZ1bmN0aW9ucy9kZWxldGVDb2x1bW4udHMiLCJ3ZWJwYWNrOi8vemVicmEvLi9jb2RlL3VwZGF0ZVVJRnVuY3Rpb25zL2RlbGV0ZVRhYmxlLnRzIiwid2VicGFjazovL3plYnJhLy4vY29kZS91cGRhdGVVSUZ1bmN0aW9ucy9tb2RpZnlDb25zdHJhaW50cy50cyIsIndlYnBhY2s6Ly96ZWJyYS8uL2NvZGUvdXBkYXRlVUlGdW5jdGlvbnMvbW9kaWZ5RGF0YVR5cGUudHMiLCJ3ZWJwYWNrOi8vemVicmEvLi9jb2RlL3VwZGF0ZVVJRnVuY3Rpb25zL21vZGlmeUlkLnRzIiwid2VicGFjazovL3plYnJhLy4vY29kZS91cGRhdGVVSUZ1bmN0aW9ucy9tb2RpZnlUaXRsZS50cyIsIndlYnBhY2s6Ly96ZWJyYS8uL2NvZGUvdXRpbC9jb2xvci50cyIsIndlYnBhY2s6Ly96ZWJyYS8uL2NvZGUvdXRpbC9mb250LnRzIiwid2VicGFjazovL3plYnJhLy4vY29kZS91dGlsL2ZyYW1lLnRzIiwid2VicGFjazovL3plYnJhLy4vY29kZS91dGlsL3RleHQudHMiLCJ3ZWJwYWNrOi8vemVicmEvLi9jb2RlL3dpZGdldHMvY29sdW1uLnRzIiwid2VicGFjazovL3plYnJhLy4vY29kZS93aWRnZXRzL2NvbnN0cmFpbnQudHMiLCJ3ZWJwYWNrOi8vemVicmEvLi9jb2RlL3dpZGdldHMvZGF0YVR5cGUudHMiLCJ3ZWJwYWNrOi8vemVicmEvLi9jb2RlL3dpZGdldHMvaWQudHMiLCJ3ZWJwYWNrOi8vemVicmEvLi9jb2RlL3dpZGdldHMva2V5LnRzIiwid2VicGFjazovL3plYnJhLy4vY29kZS93aWRnZXRzL3RhYmxlLnRzIiwid2VicGFjazovL3plYnJhLy4vY29kZS93aWRnZXRzL3RpdGxlLnRzIiwid2VicGFjazovL3plYnJhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3plYnJhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly96ZWJyYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3plYnJhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vemVicmEvLi9jb2RlL2NvZGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUNvbHVtbiBmcm9tICcuLi93aWRnZXRzL2NvbHVtbic7XHJcbmltcG9ydCBjcmVhdGVLZXkgZnJvbSAnLi4vd2lkZ2V0cy9rZXknO1xyXG5pbXBvcnQgY3JlYXRlSWQgZnJvbSAnLi4vd2lkZ2V0cy9pZCc7XHJcbmltcG9ydCBjcmVhdGVEYXRhVHlwZSBmcm9tICcuLi93aWRnZXRzL2RhdGFUeXBlJztcclxuaW1wb3J0IGNyZWF0ZUNvbnN0cmFpbnRzIGZyb20gJy4uL3dpZGdldHMvY29uc3RyYWludCc7XHJcbmltcG9ydCB7Y3JlYXRlRnJhbWVOb2RlfSBmcm9tICcuLi91dGlsL2ZyYW1lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRDb2x1bW5zKHV1aWQ6c3RyaW5nKXtcclxuICAgIGNvbnN0IGNvbHVtbnMgPSBbXTtcclxuICAgIGNvbnN0IG5vZGVJZHMgPSB7XHJcbiAgICAgICAgZms6bnVsbCxcclxuICAgICAgICBpZDonJyxcclxuICAgICAgICBkYXRhVHlwZTonJyxcclxuICAgICAgICBjb25zdHJhaW50OiAnJyxcclxuICAgICAgICBwazogbnVsbFxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgY29uc3QgZm9yZWlnbktleUNvbHVtbiA9IGNyZWF0ZUNvbHVtbih7bmFtZTonRk9SRUlHTicsIGNvbG9yOic0RTRGNTEnfSk7XHJcbiAgICAgICAgY29uc3QgZmsgPSBjcmVhdGVLZXkoe3R5cGU6ICdGT1JFSUdOJywga2V5TGlua1NldHRpbmdzOntuYW1lOidGSycsIGNoYXJhY3RlcnM6ICdOL0EnfX0pXHJcbiAgICAgICAgZm9yZWlnbktleUNvbHVtbi5hcHBlbmRDaGlsZChmayk7XHJcbiAgICAgICAgY29sdW1ucy5wdXNoKGZvcmVpZ25LZXlDb2x1bW4pO1xyXG5cclxuICAgIGNvbnN0IGlkQ29sdW1uID0gY3JlYXRlQ29sdW1uKHtuYW1lOidJRCcsIGNvbG9yOic0RTRGNTEnfSk7XHJcbiAgICAgICAgY29uc3QgaWQgPSBjcmVhdGVJZCgnbmV3X2lkJyk7XHJcbiAgICAgICAgaWRDb2x1bW4uYXBwZW5kQ2hpbGQoaWQubm9kZSk7XHJcbiAgICAgICAgbm9kZUlkcy5pZCA9IGlkLmlkO1xyXG4gICAgICAgIGNvbHVtbnMucHVzaChpZENvbHVtbik7XHJcblxyXG4gICAgY29uc3QgZGF0YVR5cGVDb2x1bW4gPSBjcmVhdGVDb2x1bW4oe25hbWU6J0RBVEFUWVBFJywgY29sb3I6JzRFNEY1MSd9KTtcclxuICAgICAgICBjb25zdCBkdCA9IGNyZWF0ZURhdGFUeXBlKCdpbnRlZ2VyJywgJ251bWVyaWMnKTsgICAgICBcclxuICAgICAgICBkYXRhVHlwZUNvbHVtbi5hcHBlbmRDaGlsZChkdC5ub2RlKTtcclxuICAgICAgICBub2RlSWRzLmRhdGFUeXBlID0gZHQuaWQ7XHJcbiAgICAgICAgY29sdW1ucy5wdXNoKGRhdGFUeXBlQ29sdW1uKTtcclxuXHJcbiAgICBjb25zdCBjb25zdHJhaW50c0NvbHVtbiA9IGNyZWF0ZUNvbHVtbih7bmFtZTonQ09OU1RSQUlOVFMnLCBjb2xvcjonNEU0RjUxJ30pO1xyXG4gICAgICAgIGNvbnN0IGNzdCA9IGNyZWF0ZUNvbnN0cmFpbnRzKCdjb25zdHJhaW50MScsIFsnTk9UIE5VTEwnXSk7XHJcbiAgICAgICAgY29uc3RyYWludHNDb2x1bW4uYXBwZW5kQ2hpbGQoY3N0Lm5vZGUpO1xyXG4gICAgICAgIG5vZGVJZHMuY29uc3RyYWludCA9IGNzdC5ub2RlLmlkO1xyXG4gICAgICAgIGNvbHVtbnMucHVzaChjb25zdHJhaW50c0NvbHVtbik7XHJcblxyXG4gICAgY29uc3QgcHJpbWFyeUtleUNvbHVtbiA9IGNyZWF0ZUNvbHVtbih7bmFtZTonUFJJTUFSWScsIGNvbG9yOic0RTRGNTEnfSk7XHJcbiAgICAgICAgY29uc3QgcGsgPSBjcmVhdGVLZXkoe3R5cGU6ICdQUklNQVJZJywga2V5TGlua1NldHRpbmdzOntuYW1lOidQSycsIGNoYXJhY3RlcnM6ICdOL0EnfX0pXHJcbiAgICAgICAgcHJpbWFyeUtleUNvbHVtbi5hcHBlbmRDaGlsZChwayk7XHJcbiAgICAgICAgY29sdW1ucy5wdXNoKHByaW1hcnlLZXlDb2x1bW4pO1xyXG5cclxuICAgIGNvbnN0IGdyaWQgPSBjcmVhdGVGcmFtZU5vZGUoe21haW5BeGlzOiAnSE9SSVpPTlRBTCcsIG5hbWU6ICd0YWJsZURhdGEnfSk7XHJcbiAgICBjb2x1bW5zLmZvckVhY2goY29sdW1uID0+IGdyaWQuYXBwZW5kQ2hpbGQoY29sdW1uKSk7XHJcbiAgICBcclxuICAgIHJldHVybiB7dHlwZTogJ1VQREFURV9GSUdNQV9JRFNfTkVXX0NPTFVNTicsIG5vZGU6IGdyaWQsIGZpZ21hSWRzOiBub2RlSWRzLCB1dWlkfTtcclxufSIsImltcG9ydCBjcmVhdGVUYWJsZSBmcm9tICcuLi93aWRnZXRzL3RhYmxlJztcclxuaW1wb3J0IGNyZWF0ZVRpdGxlIGZyb20gJy4uL3dpZGdldHMvdGl0bGUnO1xyXG5pbXBvcnQgY3JlYXRlRGVmYXVsdENvbHVtbiBmcm9tICcuL2NyZWF0ZURlZmF1bHRDb2x1bW4nO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRUYWJsZSh1dWlkOnN0cmluZyl7XHJcbiAgICBjb25zdCB0YWJsZSA9IGNyZWF0ZVRhYmxlKCdUQUJMRScpO1xyXG4gICAgdGFibGUuc2V0UGx1Z2luRGF0YSgndXVpZCcsIHV1aWQpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVUaXRsZSgndW50aXRsZWQnKTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIGNvbnN0IGdyaWQgPSBjcmVhdGVEZWZhdWx0Q29sdW1uKHV1aWQpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoZ3JpZC5ub2RlKTtcclxuICAgIHJldHVybiB7dHlwZTogJ1VQREFURV9GSUdNQV9JRFNfTkVXX1RBQkxFJywgbm9kZTogdGFibGUsIGZpZ21hSWRzOnt0YWJsZTp0YWJsZS5pZCwgLi4uZ3JpZC5maWdtYUlkc30sIHV1aWR9O1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlVGFibGUodXVpZDpzdHJpbmcsIGZpZ21hSWQ6IHN0cmluZyl7XHJcbiAgICBmaWdtYS5nZXROb2RlQnlJZChmaWdtYUlkKS5yZW1vdmUoKTtcclxuICAgIHJldHVybiB7dHlwZTogJ1JFTU9WRV9UQUJMRScsIHV1aWR9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlVGFibGUodXVpZDpzdHJpbmcsIGZpZ21hSWQ6IHN0cmluZyl7XHJcbiAgICBmaWdtYS5nZXROb2RlQnlJZChmaWdtYUlkKS5yZW1vdmUoKTtcclxuICAgIHJldHVybiB7dHlwZTogJ1JFTU9WRV9UQUJMRScsIHV1aWR9XHJcbn1cclxuIiwiaW1wb3J0IHtjcmVhdGVDb25zdHJhaW50VGlsZXN9IGZyb20gJy4uL3dpZGdldHMvY29uc3RyYWludCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RpZnlDb25zdHJhaW50cyh1dWlkOnN0cmluZywgbmV3Q29uc3RyYWludHM6c3RyaW5nW10sIGZpZ21hSWQ6IHN0cmluZyl7XHJcbiAgICBjb25zdCBjb25zdHJhaW50Tm9kZSA9IGZpZ21hLmdldE5vZGVCeUlkKGZpZ21hSWQpIGFzIEZyYW1lTm9kZTtcclxuICAgIGNvbnN0IHByZXZDb25zdHJhaW50cyA9IGNvbnN0cmFpbnROb2RlLmNoaWxkcmVuO1xyXG4gICAgcHJldkNvbnN0cmFpbnRzLmZvckVhY2gobm9kZT0+bm9kZS5yZW1vdmUoKSk7XHJcbiAgICBjcmVhdGVDb25zdHJhaW50VGlsZXMobmV3Q29uc3RyYWludHMsIGNvbnN0cmFpbnROb2RlKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHt0eXBlOiAnTU9ESUZZX0NPTlNUUkFJTlRTJywgdXVpZH1cclxufSIsIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RpZnlEYXRhdHlwZSh1dWlkOnN0cmluZywgZGF0YVR5cGU6c3RyaW5nLCBmaWdtYUlkOiBzdHJpbmcpe1xyXG4gICAgY29uc3QgZGF0YVR5cGVOb2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoZmlnbWFJZCkgYXMgVGV4dE5vZGU7XHJcbiAgICBkYXRhVHlwZU5vZGUuY2hhcmFjdGVycyA9IGRhdGFUeXBlO1xyXG4gICAgcmV0dXJuIHt0eXBlOiAnTU9ESUZZX0RBVEFfVFlQRScsIHV1aWR9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kaWZ5SWQodXVpZDpzdHJpbmcsIGlkOnN0cmluZywgZmlnbWFJZDogc3RyaW5nKXtcclxuICAgIGNvbnN0IGlkTm9kZSA9IGZpZ21hLmdldE5vZGVCeUlkKGZpZ21hSWQpIGFzIFRleHROb2RlO1xyXG4gICAgaWROb2RlLmNoYXJhY3RlcnMgPSBpZDtcclxuICAgIHJldHVybiB7dHlwZTogJ01PRElGWV9JRCcsIHV1aWR9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RpZnlUaXRsZSh1dWlkOnN0cmluZywgdGl0bGU6c3RyaW5nLCBmaWdtYUlkOiBzdHJpbmcpe1xyXG4gICAgY29uc3QgdGl0bGVOb2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoZmlnbWFJZCkgYXMgVGV4dE5vZGU7XHJcbiAgICB0aXRsZU5vZGUuY2hhcmFjdGVycyA9IHRpdGxlO1xyXG4gICAgcmV0dXJuIHt0eXBlOiAnTU9ESUZZX1RJVExFJywgdXVpZH1cclxufSIsImV4cG9ydCBpbnRlcmZhY2UgUmdiIHtcclxuICAgIHI6IG51bWJlcjtcclxuICAgIGc6IG51bWJlcjtcclxuICAgIGI6IG51bWJlcjtcclxuICB9XHJcbiAgXHJcbmV4cG9ydCBmdW5jdGlvbiBjb2xvckNvbnZlcnRlcihjb2xvcjpSZ2J8c3RyaW5nKXtcclxuICAgIGlmKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycpe1xyXG4gICAgICBpZihjb2xvci5sZW5ndGggIT09IDYpXHJcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2hleCBjb2xvcnMgbXVzdCBoYXZlIDYgY2hhcmFjdGVycycpO1xyXG4gICAgICBjb25zdCByID0gcGFyc2VJbnQoY29sb3Iuc2xpY2UoMCwyKSwgMTYpLzI1NTtcclxuICAgICAgY29uc3QgZyA9IHBhcnNlSW50KGNvbG9yLnNsaWNlKDIsNCksIDE2KS8yNTU7XHJcbiAgICAgIGNvbnN0IGIgPSBwYXJzZUludChjb2xvci5zbGljZSg0LDYpLCAxNikvMjU1O1xyXG4gICAgICByZXR1cm4ge3IsZyxifTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGNvbG9yLnIgLz0gMjU1O1xyXG4gICAgICBjb2xvci5nIC89IDI1NTtcclxuICAgICAgY29sb3IuYiAvPSAyNTU7XHJcbiAgICAgIHJldHVybiBjb2xvcjtcclxuICAgIH1cclxufSIsImludGVyZmFjZSBGb250c3tcclxuICAgIGZhbWlseTogc3RyaW5nLFxyXG4gICAgc3R5bGU6IHN0cmluZ1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNhbGxGb250KGZvbnRzOkZvbnRzW10pe1xyXG4gICAgZm9yKGNvbnN0IGZvbnQgb2YgZm9udHMpXHJcbiAgICAgICAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyhmb250KTtcclxufSIsImltcG9ydCB7UmdiLCBjb2xvckNvbnZlcnRlcn0gZnJvbSBcIi4vY29sb3JcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRnJhbWV7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBwYWRkaW5nRGlyZWN0aW9uPzogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XHJcbiAgICBwYWRkaW5nPzogbnVtYmVyO1xyXG4gICAgY2xpcHNDb250ZW50PzogYm9vbGVhbjtcclxuICAgIGNvbG9yPzogc3RyaW5nfFJnYjtcclxuICAgIG1haW5BeGlzPzogXCJOT05FXCIgfCBcIkhPUklaT05UQUxcIiB8IFwiVkVSVElDQUxcIjtcclxuICAgIG1haW5BeGlzU2l6aW5nPzogXCJGSVhFRFwiIHwgXCJBVVRPXCI7XHJcbiAgICBhbHRBeGlzU2l6aW5nPzogXCJGSVhFRFwiIHwgXCJBVVRPXCI7XHJcbiAgICByZXNpemU/OiBbbnVtYmVyLCBudW1iZXJdO1xyXG4gICAgbWFpbkF4aXNBbGlnbj86IFwiTUlOXCIgfCBcIk1BWFwiIHwgXCJDRU5URVJcIiB8IFwiU1BBQ0VfQkVUV0VFTlwiO1xyXG4gICAgYWx0QXhpc0FsaWduPzogXCJNSU5cIiB8IFwiTUFYXCIgfCBcIkNFTlRFUlwiO1xyXG4gICAgY291bnRlckF4aXNTaXppbmdNb2RlPzogXCJGSVhFRFwiIHwgXCJBVVRPXCI7XHJcbiAgICBwcmltYXJ5QXhpc1NpemluZ01vZGU/OiBcIkZJWEVEXCIgfCBcIkFVVE9cIjtcclxuICAgIGNvcm5lclJhZGl1cz86IG51bWJlclxyXG4gICAgbGF5b3V0QWxpZ24/OiBcIk1JTlwiIHwgXCJDRU5URVJcIiB8IFwiTUFYXCIgfCBcIlNUUkVUQ0hcIiB8IFwiSU5IRVJJVFwiO1xyXG4gICAgaXRlbVNwYWNpbmc/OiBudW1iZXJcclxufTtcclxuXHJcbmNvbnN0IHBhZGRpbmdDbG9jayA9IFsncGFkZGluZ1RvcCcsICdwYWRkaW5nUmlnaHQnLCAncGFkZGluZ0JvdHRvbScsICdwYWRkaW5nTGVmdCddO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZyYW1lTm9kZSh7XHJcbiAgICBuYW1lLFxyXG4gICAgY2xpcHNDb250ZW50PSBmYWxzZSxcclxuICAgIHBhZGRpbmdEaXJlY3Rpb24gPSBbMCwwLDAsMF0sXHJcbiAgICBjb2xvcj0nZmZmZmZmJyxcclxuICAgIG1haW5BeGlzID0gJ0hPUklaT05UQUwnLFxyXG4gICAgbWFpbkF4aXNTaXppbmcgPSAnQVVUTycsXHJcbiAgICBhbHRBeGlzU2l6aW5nID0gJ0FVVE8nLFxyXG4gICAgcmVzaXplLFxyXG4gICAgbWFpbkF4aXNBbGlnbj0gJ0NFTlRFUicsXHJcbiAgICBhbHRBeGlzQWxpZ24gPSAnQ0VOVEVSJyxcclxuICAgIGxheW91dEFsaWduID0gJ1NUUkVUQ0gnLFxyXG4gICAgY29ybmVyUmFkaXVzID0gMCxcclxuICAgIGl0ZW1TcGFjaW5nXHJcbn06RnJhbWUpOkZyYW1lTm9kZXtcclxuICAgIGNvbnN0IGZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcclxuICAgIGZyYW1lLm5hbWUgPSBuYW1lO1xyXG4gICAgZnJhbWUuY2xpcHNDb250ZW50ID0gY2xpcHNDb250ZW50O1xyXG4gICAgZnJhbWUuZmlsbHMgPSBbe3R5cGU6ICdTT0xJRCcsIGNvbG9yOiBjb2xvckNvbnZlcnRlcihjb2xvcil9XTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCA0OyBpKyspXHJcbiAgICAgICAgZnJhbWVbcGFkZGluZ0Nsb2NrW2ldXSA9IHBhZGRpbmdEaXJlY3Rpb25baV07XHJcbiAgICBpZiAoaXRlbVNwYWNpbmcpXHJcbiAgICAgICAgZnJhbWUuaXRlbVNwYWNpbmcgPSBpdGVtU3BhY2luZztcclxuICAgIGZyYW1lLmxheW91dE1vZGUgPSBtYWluQXhpcztcclxuICAgIGZyYW1lLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IG1haW5BeGlzU2l6aW5nO1xyXG4gICAgZnJhbWUuY291bnRlckF4aXNTaXppbmdNb2RlID0gYWx0QXhpc1NpemluZztcclxuICAgIHJlc2l6ZSAmJiBmcmFtZS5yZXNpemUoLi4ucmVzaXplKTtcclxuICAgIGZyYW1lLmNvcm5lclJhZGl1cyA9IGNvcm5lclJhZGl1cztcclxuICAgIGZyYW1lLnByaW1hcnlBeGlzQWxpZ25JdGVtcyA9IG1haW5BeGlzQWxpZ247XHJcbiAgICBmcmFtZS5jb3VudGVyQXhpc0FsaWduSXRlbXMgPSAgYWx0QXhpc0FsaWduO1xyXG4gICAgZnJhbWUubGF5b3V0QWxpZ24gPSBsYXlvdXRBbGlnbjtcclxuICAgIHJldHVybiBmcmFtZTtcclxufSIsIlxyXG5pbXBvcnQge1JnYiwgY29sb3JDb252ZXJ0ZXJ9IGZyb20gXCIuL2NvbG9yXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRleHR7XHJcbiAgICBmYW1pbHk/OiBzdHJpbmc7XHJcbiAgICBzdHlsZT86IHN0cmluZztcclxuICAgIGZvbnRTaXplPzogbnVtYmVyO1xyXG4gICAgYWxpZ25Ib3Jpem9udGFsPzpcIkNFTlRFUlwiIHwgXCJMRUZUXCIgfCBcIlJJR0hUXCIgfCBcIkpVU1RJRklFRFwiO1xyXG4gICAgcmVzaXplV2l0aG91dENvbnN0cmFpbnRzPzogW251bWJlciwgbnVtYmVyXTtcclxuICAgIHJlc2l6ZT86IFtudW1iZXIsIG51bWJlcl0gfCBudWxsO1xyXG4gICAgLy90eXBlPzogc3RyaW5nO1xyXG4gICAgY29sb3I/OiBzdHJpbmd8UmdiO1xyXG4gICAgYWxpZ25WZXJ0aWNhbD86XCJUT1BcIiB8IFwiQ0VOVEVSXCIgfCBcIkJPVFRPTVwiO1xyXG4gICAgYm94QXV0b1Jlc2l6ZT86ICAnV0lEVEhfQU5EX0hFSUdIVCcgfCBcIk5PTkVcIiB8IFwiSEVJR0hUXCI7XHJcbiAgICBhdXRvUmVuYW1lPzogYm9vbGVhbjtcclxuICAgIG5hbWU6c3RyaW5nO1xyXG4gICAgY2hhcmFjdGVyczogc3RyaW5nO1xyXG4gICAgdGV4dENhc2U/OiBcIk9SSUdJTkFMXCIgfCBcIlVQUEVSXCIgfCBcIkxPV0VSXCIgfCBcIlRJVExFXCI7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRleHROb2RlKHtcclxuICAgIGZhbWlseSA9IFwiSUJNIFBsZXggTW9ub1wiLFxyXG4gICAgc3R5bGUgPSBcIlNlbWlCb2xkXCIsXHJcbiAgICBmb250U2l6ZT0xNixcclxuICAgIGFsaWduSG9yaXpvbnRhbCA9IFwiQ0VOVEVSXCIsXHJcbiAgICByZXNpemVXaXRob3V0Q29uc3RyYWludHMgPSBudWxsLFxyXG4gICAgLy90eXBlPSAnU09MSUQnLCBcclxuICAgIGNvbG9yID0gJ2ZmZmZmZicsXHJcbiAgICBhbGlnblZlcnRpY2FsID0gXCJDRU5URVJcIixcclxuICAgIGJveEF1dG9SZXNpemUgPSAnV0lEVEhfQU5EX0hFSUdIVCcsXHJcbiAgICBuYW1lLFxyXG4gICAgcmVzaXplID0gbnVsbCxcclxuICAgIGF1dG9SZW5hbWU9dHJ1ZSxcclxuICAgIGNoYXJhY3RlcnMsXHJcbiAgICB0ZXh0Q2FzZT1cIk9SSUdJTkFMXCJcclxufTpUZXh0KTpUZXh0Tm9kZXtcclxuICAgIGNvbnN0IHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XHJcbiAgICB0ZXh0LmZvbnROYW1lID0ge2ZhbWlseSwgc3R5bGV9O1xyXG4gICAgdGV4dC5mb250U2l6ZSA9IGZvbnRTaXplO1xyXG4gICAgdGV4dC50ZXh0QWxpZ25Ib3Jpem9udGFsID0gYWxpZ25Ib3Jpem9udGFsO1xyXG4gICAgdGV4dC50ZXh0QWxpZ25WZXJ0aWNhbCA9IGFsaWduVmVydGljYWw7XHJcbiAgICB0ZXh0Lm5hbWUgPSBuYW1lO1xyXG4gICAgaWYgKHJlc2l6ZSlcclxuICAgICAgICB0ZXh0LnJlc2l6ZSguLi5yZXNpemUpO1xyXG4gICAgdGV4dC50ZXh0QXV0b1Jlc2l6ZSA9IGJveEF1dG9SZXNpemU7XHJcbiAgICB0ZXh0LmF1dG9SZW5hbWUgPSBhdXRvUmVuYW1lO1xyXG4gICAgdGV4dC5jaGFyYWN0ZXJzID0gY2hhcmFjdGVycztcclxuICAgIHRleHQudGV4dENhc2UgPSB0ZXh0Q2FzZTtcclxuICAgIHRleHQuZmlsbHMgPSBbe3R5cGU6XCJTT0xJRFwiLCBjb2xvcjogY29sb3JDb252ZXJ0ZXIoY29sb3IpfV1cclxuICAgIHJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cyAmJiB0ZXh0LnJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cyguLi5yZXNpemVXaXRob3V0Q29uc3RyYWludHMpO1xyXG4gICAgcmV0dXJuIHRleHQ7XHJcbn0iLCJpbXBvcnQge2NyZWF0ZUZyYW1lTm9kZSwgRnJhbWV9IGZyb20gJy4uL3V0aWwvZnJhbWUnO1xyXG5cclxuLy9kZWZhdWx0IHZhbHVlcyBmb3IgZnJhbWVzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vKlxyXG4gICAgbmFtZSxcclxuICAgIHBhZGRpbmdEaXJlY3Rpb24gPSBbMCwwLDAsMF0sXHJcbiAgICBjb2xvcj0nZmZmZmZmJyxcclxuICAgIG1haW5BeGlzID0gJ0hPUklaT05UQUwnLFxyXG4gICAgbWFpbkF4aXNTaXppbmcgPSAnQVVUTycsXHJcbiAgICBhbHRBeGlzU2l6aW5nID0gJ0FVVE8nLFxyXG4gICAgcmVzaXplLFxyXG4gICAgbWFpbkF4aXNBbGlnbj0gJ0NFTlRFUicsXHJcbiAgICBhbHRBeGlzQWxpZ24gPSAnQ0VOVEVSJ1xyXG4qL1xyXG5cclxuY29uc3QgY29sdW1uU2V0dGluZ3MgPSB7XHJcbiAgICBtYWluQXhpczogJ1ZFUlRJQ0FMJyxcclxuICAgIGFsdEF4aXNTaXppbmc6ICdBVVRPJyxcclxuICAgIG1haW5BeGlzU2l6aW5nOiAnQVVUTycsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDb2x1bW4odXNlclNldHRpbmdzOiBGcmFtZSl7XHJcbiAgICBjb25zdCBzZXR0aW5ncyA9ICBPYmplY3QuYXNzaWduKGNvbHVtblNldHRpbmdzLCB1c2VyU2V0dGluZ3MpO1xyXG4gICAgcmV0dXJuIGNyZWF0ZUZyYW1lTm9kZShzZXR0aW5ncyk7XHJcbn0iLCJpbXBvcnQge2NyZWF0ZVRleHROb2RlLCBUZXh0fSBmcm9tICcuLi91dGlsL3RleHQnXHJcbmltcG9ydCB7IGNyZWF0ZUZyYW1lTm9kZSwgRnJhbWUgfSBmcm9tICcuLi91dGlsL2ZyYW1lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNvbnN0cmFpbnQobmFtZTpzdHJpbmcsIGNvbnN0cmFpbnRzOnN0cmluZ1tdKSB7XHJcbiAgICBjb25zdCB3aWRnZXQgPSBjcmVhdGVGcmFtZU5vZGUoe1xyXG4gICAgICAgIG5hbWUsIFxyXG4gICAgICAgIHBhZGRpbmdEaXJlY3Rpb246IFswLDEwLDAsMTBdLFxyXG4gICAgICAgIGNvbG9yOiAnMjIyMzI2JyxcclxuICAgICAgICBpdGVtU3BhY2luZzogOCxcclxuICAgICAgICBtYWluQXhpczogJ0hPUklaT05UQUwnLCBcclxuICAgICAgICBtYWluQXhpc0FsaWduOiAnTUlOJyxcclxuICAgICAgICByZXNpemU6IFsxMCw0MF1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG5vZGUgPSBjcmVhdGVDb25zdHJhaW50VGlsZXMoY29uc3RyYWludHMsIHdpZGdldCk7XHJcblxyXG4gICAgcmV0dXJuIG5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb25zdHJhaW50VGlsZXMoY29uc3RyYWludHM6c3RyaW5nW10sIHdpZGdldDpGcmFtZU5vZGUpOntub2RlOkZyYW1lTm9kZSxpZHM6c3RyaW5nW119e1xyXG4gICAgY29uc3QgaWRzID0gW107XHJcbiAgICBmb3IoY29uc3QgY29uc3RyYWludCBvZiBjb25zdHJhaW50cyl7XHJcbiAgICAgICAgY29uc3QgaWQgPSBjcmVhdGVGcmFtZU5vZGUoe2xheW91dEFsaWduOiAnQ0VOVEVSJywgcGFkZGluZ0RpcmVjdGlvbjogWzAsOCwwLDhdLCBjb3JuZXJSYWRpdXM6MzAsIG5hbWU6IGNvbnN0cmFpbnQsIGNvbG9yOiAnNjI2MzY0J30pO1xyXG4gICAgICAgIGNvbnN0IHRleHQgPSBjcmVhdGVUZXh0Tm9kZSh7dGV4dENhc2U6XCJVUFBFUlwiLCBuYW1lOiAnY29uc3RyYWludCcsIGNoYXJhY3RlcnM6IGNvbnN0cmFpbnQsIGZvbnRTaXplOiAxNCwgc3R5bGU6ICdSZWd1bGFyJ30pO1xyXG4gICAgICAgIGlkLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgICAgIGlkcy5wdXNoKGlkLmlkKTtcclxuICAgICAgICB3aWRnZXQuYXBwZW5kQ2hpbGQoaWQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtub2RlOiB3aWRnZXQsIGlkc31cclxufSIsImltcG9ydCB7Y3JlYXRlVGV4dE5vZGUsIFRleHR9IGZyb20gJy4uL3V0aWwvdGV4dCdcclxuaW1wb3J0IHsgY3JlYXRlRnJhbWVOb2RlLCBGcmFtZSB9IGZyb20gJy4uL3V0aWwvZnJhbWUnO1xyXG5cclxudHlwZSBEYXRhVHlwZSA9ICdjaGFyYWN0ZXInIHwgJ251bWVyaWMnIHwgJ2RhdGUnIHwgJ2JpbmFyeScgfCAnYm9vbGVhbicgfCAnc3RyaW5nJyB8ICdnZW9tZXRyaWMnIHwgJ25ldHdvcmsgYWRkcmVzcycgfCAnYml0JztcclxuY29uc3QgZGF0YVR5cGVDb2xvcnMgPSB7XHJcbiAgICBjaGFyYWN0ZXI6ICdFRkM5MDAnLFxyXG4gICAgbnVtZXJpYzogJ0YxNzQwMCcsXHJcbiAgICBkYXRlOiAnMDBEMEFCJyxcclxuICAgIGJpbmFyeTogJzAwMjZFRicsXHJcbiAgICBib29sZWFuOiAnMDA3REYxJyxcclxuICAgIHN0cmluZzogJ0QwMDAyNScsXHJcbiAgICBnZW9tZXRyaWM6ICc3RUM2MzknLFxyXG4gICAgJ25ldHdvcmsgYWRkcmVzcyc6ICdDRjJFRDEnLFxyXG4gICAgYml0OiAnMDBGRkY2J1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVEYXRhVHlwZShuYW1lOnN0cmluZywgZGF0YVR5cGU6RGF0YVR5cGUpOntub2RlOkZyYW1lTm9kZSxpZDpzdHJpbmd9IHtcclxuICAgIGNvbnN0IGRhdGFUeXBlTm9kZSA9IGNyZWF0ZUZyYW1lTm9kZSh7bWFpbkF4aXNBbGlnbjogJ01JTicscmVzaXplOiBbMSw0MF0sYWx0QXhpc0FsaWduOiBcIkNFTlRFUlwiLCBuYW1lOiAnaWRfJytuYW1lLCBjb2xvcjogJzIyMjMyNicsIHBhZGRpbmdEaXJlY3Rpb246IFswLDEwLDAsMTBdfSk7XHJcbiAgICBjb25zdCB0ZXh0ID0gY3JlYXRlVGV4dE5vZGUoe25hbWUsIGNvbG9yOiBkYXRhVHlwZUNvbG9yc1tkYXRhVHlwZV0sIGNoYXJhY3RlcnM6IG5hbWUsIGZvbnRTaXplOiAxNCwgdGV4dENhc2U6ICdVUFBFUicsIHN0eWxlOiAnUmVndWxhcid9KVxyXG4gICAgZGF0YVR5cGVOb2RlLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgcmV0dXJuIHtub2RlOiBkYXRhVHlwZU5vZGUsIGlkOiBkYXRhVHlwZU5vZGUuaWR9O1xyXG59XHJcbiIsImltcG9ydCB7Y3JlYXRlVGV4dE5vZGUsIFRleHR9IGZyb20gJy4uL3V0aWwvdGV4dCdcclxuaW1wb3J0IHsgY3JlYXRlRnJhbWVOb2RlLCBGcmFtZSB9IGZyb20gJy4uL3V0aWwvZnJhbWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSWQobmFtZTpzdHJpbmcpOntub2RlOkZyYW1lTm9kZSxpZDpzdHJpbmd9IHtcclxuICAgIGNvbnN0IGlkID0gY3JlYXRlRnJhbWVOb2RlKHtuYW1lLCByZXNpemU6WzEwLDQwXSxtYWluQXhpc0FsaWduOiBcIk1JTlwiLGNvbG9yOiAnMjIyMzI2JywgcGFkZGluZ0RpcmVjdGlvbjogWzAsMCwwLDEwXX0pO1xyXG4gICAgY29uc3QgdGV4dCA9IGNyZWF0ZVRleHROb2RlKHtuYW1lLCBjaGFyYWN0ZXJzOiBuYW1lLCBmb250U2l6ZTogMTR9KVxyXG4gICAgaWQuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICByZXR1cm4ge25vZGU6IGlkLCBpZDogdGV4dC5pZH07XHJcbn1cclxuIiwiaW1wb3J0IHtjcmVhdGVUZXh0Tm9kZSwgVGV4dH0gZnJvbSAnLi4vdXRpbC90ZXh0J1xyXG5pbXBvcnQgeyBjcmVhdGVGcmFtZU5vZGUsIEZyYW1lIH0gZnJvbSAnLi4vdXRpbC9mcmFtZSc7XHJcblxyXG5jb25zdCBkZWZhdWx0S2V5U2V0dGluZ3MgPSB7XHJcbiAgICBtYWluQXhpczogJ1ZFUlRJQ0FMJyxcclxuICAgIHJlc2l6ZTpbMTAsNDBdLFxyXG4gICAgbWFpbkF4aXNTaXppbmc6ICdBVVRPJ1xyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0S2V5VGl0bGVTZXR0aW5ncyA9IHtcclxuICAgIGZvbnRTaXplOiAxMCxcclxuICAgIHJlc2l6ZVdpdGhvdXRDb25zdHJhaW50czogWzY3LCAxM10sXHJcbiAgICBuYW1lOiAna2V5VHlwZSdcclxufVxyXG5jb25zdCBkZWZhbHRLZXlMaW5rU2V0dGluZ3MgPSB7XHJcbiAgICBmb250U2l6ZTogOSxcclxuICAgIHN0eWxlOiAnTGlnaHQnLFxyXG4gICAgY2hhcmFjdGVyczogJ04vQSdcclxufVxyXG5cclxuY29uc3QgZm9yZWlnbktleVNldHRpbmdzID0ge1xyXG4gICAgY29sb3I6ICcyMTJCM0InLFxyXG4gICAgbmFtZTogJ0ZPUkVJR04nLCBcclxuICAgIGNoYXJhY3RlcnM6ICdGSydcclxufVxyXG5cclxuY29uc3QgcHJpbWFyeUtleVNldHRpbmdzID0ge1xyXG4gICAgY29sb3I6ICczODM5M0EnLFxyXG4gICAgbmFtZTogJ1BSSU1BUlknLFxyXG4gICAgY2hhcmFjdGVyczogJ1BLJ1xyXG59XHJcblxyXG50eXBlIGtleVR5cGUgPSAnRk9SRUlHTicgfCAnUFJJTUFSWScgfCAnQ1VTVE9NJztcclxuXHJcbmludGVyZmFjZSBLZXl7XHJcbiAgICB0eXBlOiBrZXlUeXBlLCBcclxuICAgIGtleVRpdGxlU2V0dGluZ3M/OlRleHQsIFxyXG4gICAga2V5TGlua1NldHRpbmdzOlRleHQsXHJcbiAgICBrZXlTZXR0aW5ncz86RnJhbWVcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlS2V5KHtcclxuICAgICAgICB0eXBlLCBcclxuICAgICAgICBrZXlUaXRsZVNldHRpbmdzLFxyXG4gICAgICAgIGtleUxpbmtTZXR0aW5ncyxcclxuICAgICAgICBrZXlTZXR0aW5nc1xyXG4gICAgfTpLZXkpe1xyXG5cclxuICAgIGxldCB0ZXh0Q29sb3I7XHJcbiAgICBsZXQga2V5VHlwZVNldHRpbmdzID0ge307XHJcbiAgICBzd2l0Y2godHlwZSl7XHJcbiAgICAgICAgY2FzZSAnRk9SRUlHTic6XHJcbiAgICAgICAgICAgIGtleVR5cGVTZXR0aW5ncyA9IGZvcmVpZ25LZXlTZXR0aW5ncztcclxuICAgICAgICAgICAgdGV4dENvbG9yID0ge2NvbG9yOiAnMTM3MWZmJ31cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnUFJJTUFSWSc6XHJcbiAgICAgICAgICAgIGtleVR5cGVTZXR0aW5ncyA9IHByaW1hcnlLZXlTZXR0aW5ncztcclxuICAgICAgICAgICAgdGV4dENvbG9yID0ge2NvbG9yOiAnRkY3NjEzJ31cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGV4dENvbG9yID0ge25hbWU6ICdDVVNUT00nfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBrZXlBc3NpZ24gPSBPYmplY3QuYXNzaWduKGRlZmF1bHRLZXlTZXR0aW5ncywga2V5VHlwZVNldHRpbmdzLCBrZXlTZXR0aW5ncyk7XHJcbiAgICBjb25zdCBrZXkgPSBjcmVhdGVGcmFtZU5vZGUoa2V5QXNzaWduKTtcclxuICAgIGNvbnN0IGtleVRpdGxlID0gY3JlYXRlVGV4dE5vZGUoT2JqZWN0LmFzc2lnbihkZWZhdWx0S2V5VGl0bGVTZXR0aW5ncywga2V5VHlwZVNldHRpbmdzLCBrZXlUaXRsZVNldHRpbmdzLCB0ZXh0Q29sb3IpKVxyXG4gICAgY29uc3Qga2V5TGluayA9IGNyZWF0ZVRleHROb2RlKE9iamVjdC5hc3NpZ24oZGVmYWx0S2V5TGlua1NldHRpbmdzLCB0ZXh0Q29sb3IsIGtleUxpbmtTZXR0aW5ncykpXHJcbiAgICBrZXkuYXBwZW5kQ2hpbGQoa2V5VGl0bGUpO1xyXG4gICAga2V5LmFwcGVuZENoaWxkKGtleUxpbmspO1xyXG4gICAgcmV0dXJuIGtleTtcclxufSIsImltcG9ydCB7Y3JlYXRlRnJhbWVOb2RlfSBmcm9tICcuLi91dGlsL2ZyYW1lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRhYmxlKHRhYmxlTmFtZTpzdHJpbmcpe1xyXG4gICAgY29uc3QgdGFibGUgPSBjcmVhdGVGcmFtZU5vZGUoe1xyXG4gICAgICAgIG5hbWU6IHRhYmxlTmFtZSxcclxuICAgICAgICBjbGlwc0NvbnRlbnQ6IHRydWUsXHJcbiAgICAgICAgbGF5b3V0QWxpZ246J1NUUkVUQ0gnLFxyXG4gICAgICAgIGNvcm5lclJhZGl1czogNSxcclxuICAgICAgICBtYWluQXhpczogJ1ZFUlRJQ0FMJyxcclxuICAgICAgICBjb2xvcjogJzRFNEY1MScsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0YWJsZTtcclxufSIsImltcG9ydCB7Y3JlYXRlVGV4dE5vZGUsIFRleHR9IGZyb20gJy4uL3V0aWwvdGV4dCdcclxuaW1wb3J0IHsgY3JlYXRlRnJhbWVOb2RlLCBGcmFtZSB9IGZyb20gJy4uL3V0aWwvZnJhbWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVGl0bGUodGFibGVOYW1lOnN0cmluZyl7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVGcmFtZU5vZGUoe1xyXG4gICAgICAgIGNvbG9yOiAnNGI0YzRlJyxcclxuICAgICAgICBtYWluQXhpczogJ1ZFUlRJQ0FMJyxcclxuICAgICAgICBwYWRkaW5nRGlyZWN0aW9uOiBbMCwwLDAsMTBdLFxyXG4gICAgICAgIG5hbWU6IHRhYmxlTmFtZSxcclxuICAgICAgICBtYWluQXhpc1NpemluZzogJ0ZJWEVEJyxcclxuICAgICAgICBhbHRBeGlzU2l6aW5nOiAnQVVUTycsXHJcbiAgICAgICAgcmVzaXplOiBbNDAwLDQwXSxcclxuICAgICAgICBtYWluQXhpc0FsaWduOiAnQ0VOVEVSJyxcclxuICAgICAgICBhbHRBeGlzQWxpZ246ICdNSU4nXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlVGV4dE5vZGUoe1xyXG4gICAgICAgIGZhbWlseTonV29yayBTYW5zJyxcclxuICAgICAgICBjaGFyYWN0ZXJzOiB0YWJsZU5hbWUsXHJcbiAgICAgICAgYWxpZ25Ib3Jpem9udGFsOiAnTEVGVCcsXHJcbiAgICAgICAgYWxpZ25WZXJ0aWNhbDogJ0NFTlRFUicsXHJcbiAgICAgICAgbmFtZTogdGFibGVOYW1lXHJcbiAgICB9KTtcclxuICBcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY2FsbEZvbnQgZnJvbSAnLi91dGlsL2ZvbnQnO1xyXG5pbXBvcnQgY3JlYXRlRGVmYXVsdFRhYmxlIGZyb20gJy4vdXBkYXRlVUlGdW5jdGlvbnMvY3JlYXRlRGVmYXVsdFRhYmxlJztcclxuaW1wb3J0IGNyZWF0ZURlZmF1bHRDb2x1bW4gZnJvbSAnLi91cGRhdGVVSUZ1bmN0aW9ucy9jcmVhdGVEZWZhdWx0Q29sdW1uJztcclxuaW1wb3J0IGRlbGV0ZVRhYmxlIGZyb20gJy4vdXBkYXRlVUlGdW5jdGlvbnMvZGVsZXRlVGFibGUnO1xyXG5pbXBvcnQgbW9kaWZ5RGF0YVR5cGUgZnJvbSAnLi91cGRhdGVVSUZ1bmN0aW9ucy9tb2RpZnlEYXRhVHlwZSc7XHJcbmltcG9ydCBtb2RpZnlUaXRsZSBmcm9tICcuL3VwZGF0ZVVJRnVuY3Rpb25zL21vZGlmeVRpdGxlJztcclxuaW1wb3J0IG1vZGlmeUlkIGZyb20gJy4vdXBkYXRlVUlGdW5jdGlvbnMvbW9kaWZ5SWQnO1xyXG5pbXBvcnQgbW9kaWZ5Q29uc3RyYWludHMgZnJvbSAnLi91cGRhdGVVSUZ1bmN0aW9ucy9tb2RpZnlDb25zdHJhaW50cyc7XHJcbmltcG9ydCBkZWxldGVDb2x1bW4gZnJvbSAnLi91cGRhdGVVSUZ1bmN0aW9ucy9kZWxldGVDb2x1bW4nO1xyXG5cclxuZmlnbWEuc2hvd1VJKF9faHRtbF9fKTtcclxuXHJcbmZpZ21hLnVpLnJlc2l6ZSg0NTAsIDYwMCk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVBvcHVsYXRlZFRhYmxlKCl7XHJcbiAgYXdhaXQgY2FsbEZvbnQoW1xyXG4gICAgeyBmYW1pbHk6IFwiV29yayBTYW5zXCIsIHN0eWxlOiBcIlNlbWlCb2xkXCIgfSxcclxuICAgIHsgZmFtaWx5OiBcIklCTSBQbGV4IE1vbm9cIiwgc3R5bGU6IFwiTGlnaHRcIiB9LFxyXG4gICAgeyBmYW1pbHk6IFwiSUJNIFBsZXggTW9ub1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSxcclxuICAgIHsgZmFtaWx5OiBcIklCTSBQbGV4IE1vbm9cIiwgc3R5bGU6IFwiU2VtaUJvbGRcIiB9XHJcbiAgXSk7XHJcbn1cclxuLy9pZiAoZmlnbWEuZWRpdG9yVHlwZSA9PT0gJ2ZpZ21hJykgXHJcbmdlbmVyYXRlUG9wdWxhdGVkVGFibGUoKTtcclxuXHJcbmNvbnN0IG9yY2hlc3RyYXRlTW9kZWwgPSB7XHJcbiAgUkVNT1ZFX0NPTDogJ1JFTU9WRV9DT0wnLFxyXG4gIEFERF9DT0w6ICdBRERfQ09MJyxcclxuICBDUkVBVEVfVEFCTEU6ICdDUkVBVEVfVEFCTEUnLFxyXG4gIFJFTU9WRV9UQUJMRTogJ1JFTU9WRV9UQUJMRScsXHJcbiAgTU9ESUZZX1RJVExFOiAnTU9ESUZZX1RJVExFJyxcclxuICBNT0RJRllfSUQ6ICdNT0RJRllfSUQnLFxyXG4gIE1PRElGWV9EQVRBVFlQRTogJ01PRElGWV9EQVRBVFlQRScsXHJcbiAgTU9ESUZZX0NPTlNUUkFJTlRTOiAnTU9ESUZZX0NPTlNUUkFJTlRTJyxcclxuICBNT0RJRllfS0VZUzogJ01PRElGWV9LRVlTJyxcclxuICBVUERBVEVfRklHTUFfSUQ6ICdVUERBVEVfRklHTUFfSUQnLFxyXG4gIFVQREFURV9GSUdNQV9JRFNfTkVXX1RBQkxFOiAnVVBEQVRFX0ZJR01BX0lEU19ORVdfVEFCTEUnLFxyXG4gIFVQREFURV9GSUdNQV9JRFNfTkVXX0NPTFVNTjogJ1VQREFURV9GSUdNQV9JRFNfTkVXX0NPTFVNTidcclxufVxyXG5cclxuLy9BY3RpdmF0ZXMgd2hlbiB0cmlnZ2VyZWQgYnkgUGx1Z2luIFVJXHJcbi8vdXVpZCBpcyB1c2VkIHRvIHJlY29nbml6ZSByZWxldmFudCB0YWJsZSBpbiB0aGUgcGx1Z2luIHVpXHJcbi8vZmlnbWFJZCBpcyB1c2VkIHRvIHJlY29uZ2l6ZSB0aGUgcmVsZXZhbnQgZnJhbWUgaW4gZmlnbWFcclxuLy9hbGwgb3RoZXIgcGFyYW1ldGVycyB1cGRhdGUgdGhlIHZhbHVlcyBpbnNpZGUgZmlnbWFcclxuaW50ZXJmYWNlIE1vZFVJe1xyXG4gIHV1aWQ6c3RyaW5nLFxyXG4gIGZpZ21hSWQ/OnN0cmluZyxcclxuICB0aXRsZT86c3RyaW5nLFxyXG4gIGlkPzpzdHJpbmcsXHJcbiAgbmV3Q29uc3RyYWludHM/OnN0cmluZ1tdLFxyXG4gIGRhdGFUeXBlPzpzdHJpbmdcclxufVxyXG5pbnRlcmZhY2UgUmV0dXJuTWVzc2FnZXtcclxuICB0eXBlOiBzdHJpbmcsIFxyXG4gIHV1aWQ6IHN0cmluZywgXHJcbiAgZmlnbWFJZD86c3RyaW5nLCBcclxuICBmaWdtYUlkcz86IHN0cmluZ1tdIHwge1twcm9wOiBzdHJpbmddOnN0cmluZ3xzdHJpbmdbXX0sXHJcbiAgbm9kZT86IEZyYW1lTm9kZVxyXG59XHJcblxyXG5maWdtYS51aS5vbm1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xyXG4gIGNvbnN0IHt1dWlkLCBmaWdtYUlkLCB0aXRsZSwgaWQsIG5ld0NvbnN0cmFpbnRzLCBkYXRhVHlwZX0gPSBtZXNzYWdlLnBheWxvYWQ7XHJcbiAgbGV0IHJldHVybk1lc3NhZ2U6UmV0dXJuTWVzc2FnZTtcclxuICBzd2l0Y2gobWVzc2FnZS50eXBlKXtcclxuICAgIGNhc2Ugb3JjaGVzdHJhdGVNb2RlbC5DUkVBVEVfVEFCTEU6XHJcbiAgICAgICAgcmV0dXJuTWVzc2FnZSA9IGNyZWF0ZURlZmF1bHRUYWJsZSh1dWlkKTtcclxuICAgICAgICBkZWxldGUgcmV0dXJuTWVzc2FnZS5ub2RlO1xyXG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHJldHVybk1lc3NhZ2UpXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIG9yY2hlc3RyYXRlTW9kZWwuUkVNT1ZFX1RBQkxFOlxyXG4gICAgICAgIHJldHVybk1lc3NhZ2UgPSBkZWxldGVUYWJsZSh1dWlkLCBmaWdtYUlkKTtcclxuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShyZXR1cm5NZXNzYWdlKTtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2Ugb3JjaGVzdHJhdGVNb2RlbC5BRERfQ09MOlxyXG4gICAgICAgIHJldHVybk1lc3NhZ2UgPSBjcmVhdGVEZWZhdWx0Q29sdW1uKHV1aWQpO1xyXG4gICAgICAgIGNvbnN0IHRhYmxlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoZmlnbWFJZCkgYXMgRnJhbWVOb2RlO1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHJldHVybk1lc3NhZ2Uubm9kZSk7XHJcbiAgICAgICAgZGVsZXRlIHJldHVybk1lc3NhZ2Uubm9kZTtcclxuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShyZXR1cm5NZXNzYWdlKVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBvcmNoZXN0cmF0ZU1vZGVsLlJFTU9WRV9DT0w6XHJcbiAgICAgIHJldHVybk1lc3NhZ2UgPSBkZWxldGVDb2x1bW4odXVpZCwgZmlnbWFJZCk7XHJcbiAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHJldHVybk1lc3NhZ2UpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2Ugb3JjaGVzdHJhdGVNb2RlbC5NT0RJRllfVElUTEU6XHJcbiAgICAgICAgcmV0dXJuTWVzc2FnZSA9IG1vZGlmeVRpdGxlKHV1aWQsIHRpdGxlLCBmaWdtYUlkKTtcclxuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShyZXR1cm5NZXNzYWdlKTtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2Ugb3JjaGVzdHJhdGVNb2RlbC5NT0RJRllfSUQ6XHJcbiAgICAgICAgcmV0dXJuTWVzc2FnZSA9IG1vZGlmeUlkKHV1aWQsIGlkLCBmaWdtYUlkKTtcclxuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShyZXR1cm5NZXNzYWdlKTtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2Ugb3JjaGVzdHJhdGVNb2RlbC5NT0RJRllfREFUQVRZUEU6XHJcbiAgICAgICAgcmV0dXJuTWVzc2FnZSA9IG1vZGlmeURhdGFUeXBlKHV1aWQsIGRhdGFUeXBlLCBmaWdtYUlkKTtcclxuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShyZXR1cm5NZXNzYWdlKTtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2Ugb3JjaGVzdHJhdGVNb2RlbC5NT0RJRllfQ09OU1RSQUlOVFM6XHJcbiAgICAgICAgcmV0dXJuTWVzc2FnZSA9IG1vZGlmeUNvbnN0cmFpbnRzKHV1aWQsIG5ld0NvbnN0cmFpbnRzLCBmaWdtYUlkKTtcclxuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShyZXR1cm5NZXNzYWdlKTtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2Ugb3JjaGVzdHJhdGVNb2RlbC5NT0RJRllfS0VZUzpcclxuICAgICAgICAvL21vZGlmeUtleXMoKTtcclxuICAgICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9