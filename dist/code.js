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
        constraints: [''],
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
    nodeIds.constraints = cst.ids;
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
    CREATE_TABLE: 'CREATE_TABLE',
    REMOVE_TABLE: 'REMOVE_TABLE',
    CREATE_COLUMN: 'CREATE_COLUMN',
    REMOVE_COLUMN: 'REMOVE_COLUMN',
    MODIFY_TITLE: 'MODIFY_TITLE',
    MODIFY_ID: 'MODIFY_ID',
    MODIFY_DATATYPE: 'MODIFY_DATATYPE',
    MODIFY_CONSTRAINTS: 'MODIFY_CONSTRAINTS',
    MODIFY_KEYS: 'MODIFY_KEYS'
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
        case orchestrateModel.CREATE_COLUMN:
            returnMessage = (0,_updateUIFunctions_createDefaultColumn__WEBPACK_IMPORTED_MODULE_2__["default"])(uuid);
            const table = figma.getNodeById(figmaId);
            table.appendChild(returnMessage.node);
            delete returnMessage.node;
            figma.ui.postMessage(returnMessage);
            break;
        case orchestrateModel.REMOVE_COLUMN:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO1lBQ3BDLE1BQU07UUFDVixLQUFLLGdCQUFnQixDQUFDLFNBQVM7WUFDM0IsYUFBYSxHQUFHLHVFQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM1QyxLQUFLLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNwQyxNQUFNO1FBQ1YsS0FBSyxnQkFBZ0IsQ0FBQyxlQUFlO1lBQ2pDLGFBQWEsR0FBRyw2RUFBYyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDeEQsS0FBSyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDcEMsTUFBTTtRQUNWLEtBQUssZ0JBQWdCLENBQUMsa0JBQWtCO1lBQ3BDLGFBQWEsR0FBRyxnRkFBaUIsQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2pFLEtBQUssQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BDLE1BQU07UUFDVixLQUFLLGdCQUFnQixDQUFDLFdBQVc7WUFDN0IsZUFBZTtZQUNmLE1BQU07UUFDVjtZQUNJLE1BQU07S0FDWDtBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZWJyYS8uL2NvZGUvdXBkYXRlVUlGdW5jdGlvbnMvY3JlYXRlRGVmYXVsdENvbHVtbi50cyIsIndlYnBhY2s6Ly96ZWJyYS8uL2NvZGUvdXBkYXRlVUlGdW5jdGlvbnMvY3JlYXRlRGVmYXVsdFRhYmxlLnRzIiwid2VicGFjazovL3plYnJhLy4vY29kZS91cGRhdGVVSUZ1bmN0aW9ucy9kZWxldGVDb2x1bW4udHMiLCJ3ZWJwYWNrOi8vemVicmEvLi9jb2RlL3VwZGF0ZVVJRnVuY3Rpb25zL2RlbGV0ZVRhYmxlLnRzIiwid2VicGFjazovL3plYnJhLy4vY29kZS91cGRhdGVVSUZ1bmN0aW9ucy9tb2RpZnlDb25zdHJhaW50cy50cyIsIndlYnBhY2s6Ly96ZWJyYS8uL2NvZGUvdXBkYXRlVUlGdW5jdGlvbnMvbW9kaWZ5RGF0YVR5cGUudHMiLCJ3ZWJwYWNrOi8vemVicmEvLi9jb2RlL3VwZGF0ZVVJRnVuY3Rpb25zL21vZGlmeUlkLnRzIiwid2VicGFjazovL3plYnJhLy4vY29kZS91cGRhdGVVSUZ1bmN0aW9ucy9tb2RpZnlUaXRsZS50cyIsIndlYnBhY2s6Ly96ZWJyYS8uL2NvZGUvdXRpbC9jb2xvci50cyIsIndlYnBhY2s6Ly96ZWJyYS8uL2NvZGUvdXRpbC9mb250LnRzIiwid2VicGFjazovL3plYnJhLy4vY29kZS91dGlsL2ZyYW1lLnRzIiwid2VicGFjazovL3plYnJhLy4vY29kZS91dGlsL3RleHQudHMiLCJ3ZWJwYWNrOi8vemVicmEvLi9jb2RlL3dpZGdldHMvY29sdW1uLnRzIiwid2VicGFjazovL3plYnJhLy4vY29kZS93aWRnZXRzL2NvbnN0cmFpbnQudHMiLCJ3ZWJwYWNrOi8vemVicmEvLi9jb2RlL3dpZGdldHMvZGF0YVR5cGUudHMiLCJ3ZWJwYWNrOi8vemVicmEvLi9jb2RlL3dpZGdldHMvaWQudHMiLCJ3ZWJwYWNrOi8vemVicmEvLi9jb2RlL3dpZGdldHMva2V5LnRzIiwid2VicGFjazovL3plYnJhLy4vY29kZS93aWRnZXRzL3RhYmxlLnRzIiwid2VicGFjazovL3plYnJhLy4vY29kZS93aWRnZXRzL3RpdGxlLnRzIiwid2VicGFjazovL3plYnJhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3plYnJhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly96ZWJyYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3plYnJhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vemVicmEvLi9jb2RlL2NvZGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUNvbHVtbiBmcm9tICcuLi93aWRnZXRzL2NvbHVtbic7XHJcbmltcG9ydCBjcmVhdGVLZXkgZnJvbSAnLi4vd2lkZ2V0cy9rZXknO1xyXG5pbXBvcnQgY3JlYXRlSWQgZnJvbSAnLi4vd2lkZ2V0cy9pZCc7XHJcbmltcG9ydCBjcmVhdGVEYXRhVHlwZSBmcm9tICcuLi93aWRnZXRzL2RhdGFUeXBlJztcclxuaW1wb3J0IGNyZWF0ZUNvbnN0cmFpbnRzIGZyb20gJy4uL3dpZGdldHMvY29uc3RyYWludCc7XHJcbmltcG9ydCB7Y3JlYXRlRnJhbWVOb2RlfSBmcm9tICcuLi91dGlsL2ZyYW1lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRDb2x1bW5zKHV1aWQ6c3RyaW5nKXtcclxuICAgIGNvbnN0IGNvbHVtbnMgPSBbXTtcclxuICAgIGNvbnN0IG5vZGVJZHMgPSB7XHJcbiAgICAgICAgZms6bnVsbCxcclxuICAgICAgICBpZDonJyxcclxuICAgICAgICBkYXRhVHlwZTonJyxcclxuICAgICAgICBjb25zdHJhaW50czpbJyddLFxyXG4gICAgICAgIHBrOiBudWxsXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjb25zdCBmb3JlaWduS2V5Q29sdW1uID0gY3JlYXRlQ29sdW1uKHtuYW1lOidGT1JFSUdOJywgY29sb3I6JzRFNEY1MSd9KTtcclxuICAgICAgICBjb25zdCBmayA9IGNyZWF0ZUtleSh7dHlwZTogJ0ZPUkVJR04nLCBrZXlMaW5rU2V0dGluZ3M6e25hbWU6J0ZLJywgY2hhcmFjdGVyczogJ04vQSd9fSlcclxuICAgICAgICBmb3JlaWduS2V5Q29sdW1uLmFwcGVuZENoaWxkKGZrKTtcclxuICAgICAgICBjb2x1bW5zLnB1c2goZm9yZWlnbktleUNvbHVtbik7XHJcblxyXG4gICAgY29uc3QgaWRDb2x1bW4gPSBjcmVhdGVDb2x1bW4oe25hbWU6J0lEJywgY29sb3I6JzRFNEY1MSd9KTtcclxuICAgICAgICBjb25zdCBpZCA9IGNyZWF0ZUlkKCduZXdfaWQnKTtcclxuICAgICAgICBpZENvbHVtbi5hcHBlbmRDaGlsZChpZC5ub2RlKTtcclxuICAgICAgICBub2RlSWRzLmlkID0gaWQuaWQ7XHJcbiAgICAgICAgY29sdW1ucy5wdXNoKGlkQ29sdW1uKTtcclxuXHJcbiAgICBjb25zdCBkYXRhVHlwZUNvbHVtbiA9IGNyZWF0ZUNvbHVtbih7bmFtZTonREFUQVRZUEUnLCBjb2xvcjonNEU0RjUxJ30pO1xyXG4gICAgICAgIGNvbnN0IGR0ID0gY3JlYXRlRGF0YVR5cGUoJ2ludGVnZXInLCAnbnVtZXJpYycpOyAgICAgIFxyXG4gICAgICAgIGRhdGFUeXBlQ29sdW1uLmFwcGVuZENoaWxkKGR0Lm5vZGUpO1xyXG4gICAgICAgIG5vZGVJZHMuZGF0YVR5cGUgPSBkdC5pZDtcclxuICAgICAgICBjb2x1bW5zLnB1c2goZGF0YVR5cGVDb2x1bW4pO1xyXG5cclxuICAgIGNvbnN0IGNvbnN0cmFpbnRzQ29sdW1uID0gY3JlYXRlQ29sdW1uKHtuYW1lOidDT05TVFJBSU5UUycsIGNvbG9yOic0RTRGNTEnfSk7XHJcbiAgICAgICAgY29uc3QgY3N0ID0gY3JlYXRlQ29uc3RyYWludHMoJ2NvbnN0cmFpbnQxJywgWydOT1QgTlVMTCddKTtcclxuICAgICAgICBjb25zdHJhaW50c0NvbHVtbi5hcHBlbmRDaGlsZChjc3Qubm9kZSk7XHJcbiAgICAgICAgbm9kZUlkcy5jb25zdHJhaW50cyA9IGNzdC5pZHM7XHJcbiAgICAgICAgY29sdW1ucy5wdXNoKGNvbnN0cmFpbnRzQ29sdW1uKTtcclxuXHJcbiAgICBjb25zdCBwcmltYXJ5S2V5Q29sdW1uID0gY3JlYXRlQ29sdW1uKHtuYW1lOidQUklNQVJZJywgY29sb3I6JzRFNEY1MSd9KTtcclxuICAgICAgICBjb25zdCBwayA9IGNyZWF0ZUtleSh7dHlwZTogJ1BSSU1BUlknLCBrZXlMaW5rU2V0dGluZ3M6e25hbWU6J1BLJywgY2hhcmFjdGVyczogJ04vQSd9fSlcclxuICAgICAgICBwcmltYXJ5S2V5Q29sdW1uLmFwcGVuZENoaWxkKHBrKTtcclxuICAgICAgICBjb2x1bW5zLnB1c2gocHJpbWFyeUtleUNvbHVtbik7XHJcblxyXG4gICAgY29uc3QgZ3JpZCA9IGNyZWF0ZUZyYW1lTm9kZSh7bWFpbkF4aXM6ICdIT1JJWk9OVEFMJywgbmFtZTogJ3RhYmxlRGF0YSd9KTtcclxuICAgIGNvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4gZ3JpZC5hcHBlbmRDaGlsZChjb2x1bW4pKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHt0eXBlOiAnVVBEQVRFX0ZJR01BX0lEU19ORVdfQ09MVU1OJywgbm9kZTogZ3JpZCwgZmlnbWFJZHM6IG5vZGVJZHMsIHV1aWR9O1xyXG59IiwiaW1wb3J0IGNyZWF0ZVRhYmxlIGZyb20gJy4uL3dpZGdldHMvdGFibGUnO1xyXG5pbXBvcnQgY3JlYXRlVGl0bGUgZnJvbSAnLi4vd2lkZ2V0cy90aXRsZSc7XHJcbmltcG9ydCBjcmVhdGVEZWZhdWx0Q29sdW1uIGZyb20gJy4vY3JlYXRlRGVmYXVsdENvbHVtbic7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFRhYmxlKHV1aWQ6c3RyaW5nKXtcclxuICAgIGNvbnN0IHRhYmxlID0gY3JlYXRlVGFibGUoJ1RBQkxFJyk7XHJcbiAgICB0YWJsZS5zZXRQbHVnaW5EYXRhKCd1dWlkJywgdXVpZCk7XHJcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZVRpdGxlKCd1bnRpdGxlZCcpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgY29uc3QgZ3JpZCA9IGNyZWF0ZURlZmF1bHRDb2x1bW4odXVpZCk7XHJcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChncmlkLm5vZGUpO1xyXG4gICAgcmV0dXJuIHt0eXBlOiAnVVBEQVRFX0ZJR01BX0lEU19ORVdfVEFCTEUnLCBub2RlOiB0YWJsZSwgZmlnbWFJZHM6e3RhYmxlOnRhYmxlLmlkLCAuLi5ncmlkLmZpZ21hSWRzfSwgdXVpZH07XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVUYWJsZSh1dWlkOnN0cmluZywgZmlnbWFJZDogc3RyaW5nKXtcclxuICAgIGZpZ21hLmdldE5vZGVCeUlkKGZpZ21hSWQpLnJlbW92ZSgpO1xyXG4gICAgcmV0dXJuIHt0eXBlOiAnUkVNT1ZFX1RBQkxFJywgdXVpZH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVUYWJsZSh1dWlkOnN0cmluZywgZmlnbWFJZDogc3RyaW5nKXtcclxuICAgIGZpZ21hLmdldE5vZGVCeUlkKGZpZ21hSWQpLnJlbW92ZSgpO1xyXG4gICAgcmV0dXJuIHt0eXBlOiAnUkVNT1ZFX1RBQkxFJywgdXVpZH1cclxufVxyXG4iLCJpbXBvcnQge2NyZWF0ZUNvbnN0cmFpbnRUaWxlc30gZnJvbSAnLi4vd2lkZ2V0cy9jb25zdHJhaW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGlmeUNvbnN0cmFpbnRzKHV1aWQ6c3RyaW5nLCBuZXdDb25zdHJhaW50czpzdHJpbmdbXSwgZmlnbWFJZDogc3RyaW5nKXtcclxuICAgIGNvbnN0IGNvbnN0cmFpbnROb2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoZmlnbWFJZCkgYXMgRnJhbWVOb2RlO1xyXG4gICAgY29uc3QgcHJldkNvbnN0cmFpbnRzID0gY29uc3RyYWludE5vZGUuY2hpbGRyZW47XHJcbiAgICBwcmV2Q29uc3RyYWludHMuZm9yRWFjaChub2RlPT5ub2RlLnJlbW92ZSgpKTtcclxuICAgIGNyZWF0ZUNvbnN0cmFpbnRUaWxlcyhuZXdDb25zdHJhaW50cywgY29uc3RyYWludE5vZGUpO1xyXG4gICAgXHJcbiAgICByZXR1cm4ge3R5cGU6ICdNT0RJRllfQ09OU1RSQUlOVFMnLCB1dWlkfVxyXG59IiwiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGlmeURhdGF0eXBlKHV1aWQ6c3RyaW5nLCBkYXRhVHlwZTpzdHJpbmcsIGZpZ21hSWQ6IHN0cmluZyl7XHJcbiAgICBjb25zdCBkYXRhVHlwZU5vZGUgPSBmaWdtYS5nZXROb2RlQnlJZChmaWdtYUlkKSBhcyBUZXh0Tm9kZTtcclxuICAgIGRhdGFUeXBlTm9kZS5jaGFyYWN0ZXJzID0gZGF0YVR5cGU7XHJcbiAgICByZXR1cm4ge3R5cGU6ICdNT0RJRllfREFUQV9UWVBFJywgdXVpZH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RpZnlJZCh1dWlkOnN0cmluZywgaWQ6c3RyaW5nLCBmaWdtYUlkOiBzdHJpbmcpe1xyXG4gICAgY29uc3QgaWROb2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoZmlnbWFJZCkgYXMgVGV4dE5vZGU7XHJcbiAgICBpZE5vZGUuY2hhcmFjdGVycyA9IGlkO1xyXG4gICAgcmV0dXJuIHt0eXBlOiAnTU9ESUZZX0lEJywgdXVpZH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGlmeVRpdGxlKHV1aWQ6c3RyaW5nLCB0aXRsZTpzdHJpbmcsIGZpZ21hSWQ6IHN0cmluZyl7XHJcbiAgICBjb25zdCB0aXRsZU5vZGUgPSBmaWdtYS5nZXROb2RlQnlJZChmaWdtYUlkKSBhcyBUZXh0Tm9kZTtcclxuICAgIHRpdGxlTm9kZS5jaGFyYWN0ZXJzID0gdGl0bGU7XHJcbiAgICByZXR1cm4ge3R5cGU6ICdNT0RJRllfVElUTEUnLCB1dWlkfVxyXG59IiwiZXhwb3J0IGludGVyZmFjZSBSZ2Ige1xyXG4gICAgcjogbnVtYmVyO1xyXG4gICAgZzogbnVtYmVyO1xyXG4gICAgYjogbnVtYmVyO1xyXG4gIH1cclxuICBcclxuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yQ29udmVydGVyKGNvbG9yOlJnYnxzdHJpbmcpe1xyXG4gICAgaWYodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyl7XHJcbiAgICAgIGlmKGNvbG9yLmxlbmd0aCAhPT0gNilcclxuICAgICAgICB0aHJvdyBFcnJvcignaGV4IGNvbG9ycyBtdXN0IGhhdmUgNiBjaGFyYWN0ZXJzJyk7XHJcbiAgICAgIGNvbnN0IHIgPSBwYXJzZUludChjb2xvci5zbGljZSgwLDIpLCAxNikvMjU1O1xyXG4gICAgICBjb25zdCBnID0gcGFyc2VJbnQoY29sb3Iuc2xpY2UoMiw0KSwgMTYpLzI1NTtcclxuICAgICAgY29uc3QgYiA9IHBhcnNlSW50KGNvbG9yLnNsaWNlKDQsNiksIDE2KS8yNTU7XHJcbiAgICAgIHJldHVybiB7cixnLGJ9O1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgY29sb3IuciAvPSAyNTU7XHJcbiAgICAgIGNvbG9yLmcgLz0gMjU1O1xyXG4gICAgICBjb2xvci5iIC89IDI1NTtcclxuICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgfVxyXG59IiwiaW50ZXJmYWNlIEZvbnRze1xyXG4gICAgZmFtaWx5OiBzdHJpbmcsXHJcbiAgICBzdHlsZTogc3RyaW5nXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY2FsbEZvbnQoZm9udHM6Rm9udHNbXSl7XHJcbiAgICBmb3IoY29uc3QgZm9udCBvZiBmb250cylcclxuICAgICAgICBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKGZvbnQpO1xyXG59IiwiaW1wb3J0IHtSZ2IsIGNvbG9yQ29udmVydGVyfSBmcm9tIFwiLi9jb2xvclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGcmFtZXtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHBhZGRpbmdEaXJlY3Rpb24/OiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcclxuICAgIHBhZGRpbmc/OiBudW1iZXI7XHJcbiAgICBjbGlwc0NvbnRlbnQ/OiBib29sZWFuO1xyXG4gICAgY29sb3I/OiBzdHJpbmd8UmdiO1xyXG4gICAgbWFpbkF4aXM/OiBcIk5PTkVcIiB8IFwiSE9SSVpPTlRBTFwiIHwgXCJWRVJUSUNBTFwiO1xyXG4gICAgbWFpbkF4aXNTaXppbmc/OiBcIkZJWEVEXCIgfCBcIkFVVE9cIjtcclxuICAgIGFsdEF4aXNTaXppbmc/OiBcIkZJWEVEXCIgfCBcIkFVVE9cIjtcclxuICAgIHJlc2l6ZT86IFtudW1iZXIsIG51bWJlcl07XHJcbiAgICBtYWluQXhpc0FsaWduPzogXCJNSU5cIiB8IFwiTUFYXCIgfCBcIkNFTlRFUlwiIHwgXCJTUEFDRV9CRVRXRUVOXCI7XHJcbiAgICBhbHRBeGlzQWxpZ24/OiBcIk1JTlwiIHwgXCJNQVhcIiB8IFwiQ0VOVEVSXCI7XHJcbiAgICBjb3VudGVyQXhpc1NpemluZ01vZGU/OiBcIkZJWEVEXCIgfCBcIkFVVE9cIjtcclxuICAgIHByaW1hcnlBeGlzU2l6aW5nTW9kZT86IFwiRklYRURcIiB8IFwiQVVUT1wiO1xyXG4gICAgY29ybmVyUmFkaXVzPzogbnVtYmVyXHJcbiAgICBsYXlvdXRBbGlnbj86IFwiTUlOXCIgfCBcIkNFTlRFUlwiIHwgXCJNQVhcIiB8IFwiU1RSRVRDSFwiIHwgXCJJTkhFUklUXCI7XHJcbiAgICBpdGVtU3BhY2luZz86IG51bWJlclxyXG59O1xyXG5cclxuY29uc3QgcGFkZGluZ0Nsb2NrID0gWydwYWRkaW5nVG9wJywgJ3BhZGRpbmdSaWdodCcsICdwYWRkaW5nQm90dG9tJywgJ3BhZGRpbmdMZWZ0J107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRnJhbWVOb2RlKHtcclxuICAgIG5hbWUsXHJcbiAgICBjbGlwc0NvbnRlbnQ9IGZhbHNlLFxyXG4gICAgcGFkZGluZ0RpcmVjdGlvbiA9IFswLDAsMCwwXSxcclxuICAgIGNvbG9yPSdmZmZmZmYnLFxyXG4gICAgbWFpbkF4aXMgPSAnSE9SSVpPTlRBTCcsXHJcbiAgICBtYWluQXhpc1NpemluZyA9ICdBVVRPJyxcclxuICAgIGFsdEF4aXNTaXppbmcgPSAnQVVUTycsXHJcbiAgICByZXNpemUsXHJcbiAgICBtYWluQXhpc0FsaWduPSAnQ0VOVEVSJyxcclxuICAgIGFsdEF4aXNBbGlnbiA9ICdDRU5URVInLFxyXG4gICAgbGF5b3V0QWxpZ24gPSAnU1RSRVRDSCcsXHJcbiAgICBjb3JuZXJSYWRpdXMgPSAwLFxyXG4gICAgaXRlbVNwYWNpbmdcclxufTpGcmFtZSk6RnJhbWVOb2Rle1xyXG4gICAgY29uc3QgZnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xyXG4gICAgZnJhbWUubmFtZSA9IG5hbWU7XHJcbiAgICBmcmFtZS5jbGlwc0NvbnRlbnQgPSBjbGlwc0NvbnRlbnQ7XHJcbiAgICBmcmFtZS5maWxscyA9IFt7dHlwZTogJ1NPTElEJywgY29sb3I6IGNvbG9yQ29udmVydGVyKGNvbG9yKX1dO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDQ7IGkrKylcclxuICAgICAgICBmcmFtZVtwYWRkaW5nQ2xvY2tbaV1dID0gcGFkZGluZ0RpcmVjdGlvbltpXTtcclxuICAgIGlmIChpdGVtU3BhY2luZylcclxuICAgICAgICBmcmFtZS5pdGVtU3BhY2luZyA9IGl0ZW1TcGFjaW5nO1xyXG4gICAgZnJhbWUubGF5b3V0TW9kZSA9IG1haW5BeGlzO1xyXG4gICAgZnJhbWUucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gbWFpbkF4aXNTaXppbmc7XHJcbiAgICBmcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBhbHRBeGlzU2l6aW5nO1xyXG4gICAgcmVzaXplICYmIGZyYW1lLnJlc2l6ZSguLi5yZXNpemUpO1xyXG4gICAgZnJhbWUuY29ybmVyUmFkaXVzID0gY29ybmVyUmFkaXVzO1xyXG4gICAgZnJhbWUucHJpbWFyeUF4aXNBbGlnbkl0ZW1zID0gbWFpbkF4aXNBbGlnbjtcclxuICAgIGZyYW1lLmNvdW50ZXJBeGlzQWxpZ25JdGVtcyA9ICBhbHRBeGlzQWxpZ247XHJcbiAgICBmcmFtZS5sYXlvdXRBbGlnbiA9IGxheW91dEFsaWduO1xyXG4gICAgcmV0dXJuIGZyYW1lO1xyXG59IiwiXHJcbmltcG9ydCB7UmdiLCBjb2xvckNvbnZlcnRlcn0gZnJvbSBcIi4vY29sb3JcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGV4dHtcclxuICAgIGZhbWlseT86IHN0cmluZztcclxuICAgIHN0eWxlPzogc3RyaW5nO1xyXG4gICAgZm9udFNpemU/OiBudW1iZXI7XHJcbiAgICBhbGlnbkhvcml6b250YWw/OlwiQ0VOVEVSXCIgfCBcIkxFRlRcIiB8IFwiUklHSFRcIiB8IFwiSlVTVElGSUVEXCI7XHJcbiAgICByZXNpemVXaXRob3V0Q29uc3RyYWludHM/OiBbbnVtYmVyLCBudW1iZXJdO1xyXG4gICAgcmVzaXplPzogW251bWJlciwgbnVtYmVyXSB8IG51bGw7XHJcbiAgICAvL3R5cGU/OiBzdHJpbmc7XHJcbiAgICBjb2xvcj86IHN0cmluZ3xSZ2I7XHJcbiAgICBhbGlnblZlcnRpY2FsPzpcIlRPUFwiIHwgXCJDRU5URVJcIiB8IFwiQk9UVE9NXCI7XHJcbiAgICBib3hBdXRvUmVzaXplPzogICdXSURUSF9BTkRfSEVJR0hUJyB8IFwiTk9ORVwiIHwgXCJIRUlHSFRcIjtcclxuICAgIGF1dG9SZW5hbWU/OiBib29sZWFuO1xyXG4gICAgbmFtZTpzdHJpbmc7XHJcbiAgICBjaGFyYWN0ZXJzOiBzdHJpbmc7XHJcbiAgICB0ZXh0Q2FzZT86IFwiT1JJR0lOQUxcIiB8IFwiVVBQRVJcIiB8IFwiTE9XRVJcIiB8IFwiVElUTEVcIjtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGV4dE5vZGUoe1xyXG4gICAgZmFtaWx5ID0gXCJJQk0gUGxleCBNb25vXCIsXHJcbiAgICBzdHlsZSA9IFwiU2VtaUJvbGRcIixcclxuICAgIGZvbnRTaXplPTE2LFxyXG4gICAgYWxpZ25Ib3Jpem9udGFsID0gXCJDRU5URVJcIixcclxuICAgIHJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cyA9IG51bGwsXHJcbiAgICAvL3R5cGU9ICdTT0xJRCcsIFxyXG4gICAgY29sb3IgPSAnZmZmZmZmJyxcclxuICAgIGFsaWduVmVydGljYWwgPSBcIkNFTlRFUlwiLFxyXG4gICAgYm94QXV0b1Jlc2l6ZSA9ICdXSURUSF9BTkRfSEVJR0hUJyxcclxuICAgIG5hbWUsXHJcbiAgICByZXNpemUgPSBudWxsLFxyXG4gICAgYXV0b1JlbmFtZT10cnVlLFxyXG4gICAgY2hhcmFjdGVycyxcclxuICAgIHRleHRDYXNlPVwiT1JJR0lOQUxcIlxyXG59OlRleHQpOlRleHROb2Rle1xyXG4gICAgY29uc3QgdGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcclxuICAgIHRleHQuZm9udE5hbWUgPSB7ZmFtaWx5LCBzdHlsZX07XHJcbiAgICB0ZXh0LmZvbnRTaXplID0gZm9udFNpemU7XHJcbiAgICB0ZXh0LnRleHRBbGlnbkhvcml6b250YWwgPSBhbGlnbkhvcml6b250YWw7XHJcbiAgICB0ZXh0LnRleHRBbGlnblZlcnRpY2FsID0gYWxpZ25WZXJ0aWNhbDtcclxuICAgIHRleHQubmFtZSA9IG5hbWU7XHJcbiAgICBpZiAocmVzaXplKVxyXG4gICAgICAgIHRleHQucmVzaXplKC4uLnJlc2l6ZSk7XHJcbiAgICB0ZXh0LnRleHRBdXRvUmVzaXplID0gYm94QXV0b1Jlc2l6ZTtcclxuICAgIHRleHQuYXV0b1JlbmFtZSA9IGF1dG9SZW5hbWU7XHJcbiAgICB0ZXh0LmNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzO1xyXG4gICAgdGV4dC50ZXh0Q2FzZSA9IHRleHRDYXNlO1xyXG4gICAgdGV4dC5maWxscyA9IFt7dHlwZTpcIlNPTElEXCIsIGNvbG9yOiBjb2xvckNvbnZlcnRlcihjb2xvcil9XVxyXG4gICAgcmVzaXplV2l0aG91dENvbnN0cmFpbnRzICYmIHRleHQucmVzaXplV2l0aG91dENvbnN0cmFpbnRzKC4uLnJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cyk7XHJcbiAgICByZXR1cm4gdGV4dDtcclxufSIsImltcG9ydCB7Y3JlYXRlRnJhbWVOb2RlLCBGcmFtZX0gZnJvbSAnLi4vdXRpbC9mcmFtZSc7XHJcblxyXG4vL2RlZmF1bHQgdmFsdWVzIGZvciBmcmFtZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8qXHJcbiAgICBuYW1lLFxyXG4gICAgcGFkZGluZ0RpcmVjdGlvbiA9IFswLDAsMCwwXSxcclxuICAgIGNvbG9yPSdmZmZmZmYnLFxyXG4gICAgbWFpbkF4aXMgPSAnSE9SSVpPTlRBTCcsXHJcbiAgICBtYWluQXhpc1NpemluZyA9ICdBVVRPJyxcclxuICAgIGFsdEF4aXNTaXppbmcgPSAnQVVUTycsXHJcbiAgICByZXNpemUsXHJcbiAgICBtYWluQXhpc0FsaWduPSAnQ0VOVEVSJyxcclxuICAgIGFsdEF4aXNBbGlnbiA9ICdDRU5URVInXHJcbiovXHJcblxyXG5jb25zdCBjb2x1bW5TZXR0aW5ncyA9IHtcclxuICAgIG1haW5BeGlzOiAnVkVSVElDQUwnLFxyXG4gICAgYWx0QXhpc1NpemluZzogJ0FVVE8nLFxyXG4gICAgbWFpbkF4aXNTaXppbmc6ICdBVVRPJyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNvbHVtbih1c2VyU2V0dGluZ3M6IEZyYW1lKXtcclxuICAgIGNvbnN0IHNldHRpbmdzID0gIE9iamVjdC5hc3NpZ24oY29sdW1uU2V0dGluZ3MsIHVzZXJTZXR0aW5ncyk7XHJcbiAgICByZXR1cm4gY3JlYXRlRnJhbWVOb2RlKHNldHRpbmdzKTtcclxufSIsImltcG9ydCB7Y3JlYXRlVGV4dE5vZGUsIFRleHR9IGZyb20gJy4uL3V0aWwvdGV4dCdcclxuaW1wb3J0IHsgY3JlYXRlRnJhbWVOb2RlLCBGcmFtZSB9IGZyb20gJy4uL3V0aWwvZnJhbWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ29uc3RyYWludChuYW1lOnN0cmluZywgY29uc3RyYWludHM6c3RyaW5nW10pIHtcclxuICAgIGNvbnN0IHdpZGdldCA9IGNyZWF0ZUZyYW1lTm9kZSh7XHJcbiAgICAgICAgbmFtZSwgXHJcbiAgICAgICAgcGFkZGluZ0RpcmVjdGlvbjogWzAsMTAsMCwxMF0sXHJcbiAgICAgICAgY29sb3I6ICcyMjIzMjYnLFxyXG4gICAgICAgIGl0ZW1TcGFjaW5nOiA4LFxyXG4gICAgICAgIG1haW5BeGlzOiAnSE9SSVpPTlRBTCcsIFxyXG4gICAgICAgIG1haW5BeGlzQWxpZ246ICdNSU4nLFxyXG4gICAgICAgIHJlc2l6ZTogWzEwLDQwXVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgbm9kZSA9IGNyZWF0ZUNvbnN0cmFpbnRUaWxlcyhjb25zdHJhaW50cywgd2lkZ2V0KTtcclxuXHJcbiAgICByZXR1cm4gbm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnN0cmFpbnRUaWxlcyhjb25zdHJhaW50czpzdHJpbmdbXSwgd2lkZ2V0OkZyYW1lTm9kZSk6e25vZGU6RnJhbWVOb2RlLGlkczpzdHJpbmdbXX17XHJcbiAgICBjb25zdCBpZHMgPSBbXTtcclxuICAgIGZvcihjb25zdCBjb25zdHJhaW50IG9mIGNvbnN0cmFpbnRzKXtcclxuICAgICAgICBjb25zdCBpZCA9IGNyZWF0ZUZyYW1lTm9kZSh7bGF5b3V0QWxpZ246ICdDRU5URVInLCBwYWRkaW5nRGlyZWN0aW9uOiBbMCw4LDAsOF0sIGNvcm5lclJhZGl1czozMCwgbmFtZTogY29uc3RyYWludCwgY29sb3I6ICc2MjYzNjQnfSk7XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IGNyZWF0ZVRleHROb2RlKHt0ZXh0Q2FzZTpcIlVQUEVSXCIsIG5hbWU6ICdjb25zdHJhaW50JywgY2hhcmFjdGVyczogY29uc3RyYWludCwgZm9udFNpemU6IDE0LCBzdHlsZTogJ1JlZ3VsYXInfSk7XHJcbiAgICAgICAgaWQuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICAgICAgaWRzLnB1c2goaWQuaWQpO1xyXG4gICAgICAgIHdpZGdldC5hcHBlbmRDaGlsZChpZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge25vZGU6IHdpZGdldCwgaWRzfVxyXG59IiwiaW1wb3J0IHtjcmVhdGVUZXh0Tm9kZSwgVGV4dH0gZnJvbSAnLi4vdXRpbC90ZXh0J1xyXG5pbXBvcnQgeyBjcmVhdGVGcmFtZU5vZGUsIEZyYW1lIH0gZnJvbSAnLi4vdXRpbC9mcmFtZSc7XHJcblxyXG50eXBlIERhdGFUeXBlID0gJ2NoYXJhY3RlcicgfCAnbnVtZXJpYycgfCAnZGF0ZScgfCAnYmluYXJ5JyB8ICdib29sZWFuJyB8ICdzdHJpbmcnIHwgJ2dlb21ldHJpYycgfCAnbmV0d29yayBhZGRyZXNzJyB8ICdiaXQnO1xyXG5jb25zdCBkYXRhVHlwZUNvbG9ycyA9IHtcclxuICAgIGNoYXJhY3RlcjogJ0VGQzkwMCcsXHJcbiAgICBudW1lcmljOiAnRjE3NDAwJyxcclxuICAgIGRhdGU6ICcwMEQwQUInLFxyXG4gICAgYmluYXJ5OiAnMDAyNkVGJyxcclxuICAgIGJvb2xlYW46ICcwMDdERjEnLFxyXG4gICAgc3RyaW5nOiAnRDAwMDI1JyxcclxuICAgIGdlb21ldHJpYzogJzdFQzYzOScsXHJcbiAgICAnbmV0d29yayBhZGRyZXNzJzogJ0NGMkVEMScsXHJcbiAgICBiaXQ6ICcwMEZGRjYnXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZURhdGFUeXBlKG5hbWU6c3RyaW5nLCBkYXRhVHlwZTpEYXRhVHlwZSk6e25vZGU6RnJhbWVOb2RlLGlkOnN0cmluZ30ge1xyXG4gICAgY29uc3QgZGF0YVR5cGVOb2RlID0gY3JlYXRlRnJhbWVOb2RlKHttYWluQXhpc0FsaWduOiAnTUlOJyxyZXNpemU6IFsxLDQwXSxhbHRBeGlzQWxpZ246IFwiQ0VOVEVSXCIsIG5hbWU6ICdpZF8nK25hbWUsIGNvbG9yOiAnMjIyMzI2JywgcGFkZGluZ0RpcmVjdGlvbjogWzAsMTAsMCwxMF19KTtcclxuICAgIGNvbnN0IHRleHQgPSBjcmVhdGVUZXh0Tm9kZSh7bmFtZSwgY29sb3I6IGRhdGFUeXBlQ29sb3JzW2RhdGFUeXBlXSwgY2hhcmFjdGVyczogbmFtZSwgZm9udFNpemU6IDE0LCB0ZXh0Q2FzZTogJ1VQUEVSJywgc3R5bGU6ICdSZWd1bGFyJ30pXHJcbiAgICBkYXRhVHlwZU5vZGUuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICByZXR1cm4ge25vZGU6IGRhdGFUeXBlTm9kZSwgaWQ6IGRhdGFUeXBlTm9kZS5pZH07XHJcbn1cclxuIiwiaW1wb3J0IHtjcmVhdGVUZXh0Tm9kZSwgVGV4dH0gZnJvbSAnLi4vdXRpbC90ZXh0J1xyXG5pbXBvcnQgeyBjcmVhdGVGcmFtZU5vZGUsIEZyYW1lIH0gZnJvbSAnLi4vdXRpbC9mcmFtZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVJZChuYW1lOnN0cmluZyk6e25vZGU6RnJhbWVOb2RlLGlkOnN0cmluZ30ge1xyXG4gICAgY29uc3QgaWQgPSBjcmVhdGVGcmFtZU5vZGUoe25hbWUsIHJlc2l6ZTpbMTAsNDBdLG1haW5BeGlzQWxpZ246IFwiTUlOXCIsY29sb3I6ICcyMjIzMjYnLCBwYWRkaW5nRGlyZWN0aW9uOiBbMCwwLDAsMTBdfSk7XHJcbiAgICBjb25zdCB0ZXh0ID0gY3JlYXRlVGV4dE5vZGUoe25hbWUsIGNoYXJhY3RlcnM6IG5hbWUsIGZvbnRTaXplOiAxNH0pXHJcbiAgICBpZC5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgIHJldHVybiB7bm9kZTogaWQsIGlkOiB0ZXh0LmlkfTtcclxufVxyXG4iLCJpbXBvcnQge2NyZWF0ZVRleHROb2RlLCBUZXh0fSBmcm9tICcuLi91dGlsL3RleHQnXHJcbmltcG9ydCB7IGNyZWF0ZUZyYW1lTm9kZSwgRnJhbWUgfSBmcm9tICcuLi91dGlsL2ZyYW1lJztcclxuXHJcbmNvbnN0IGRlZmF1bHRLZXlTZXR0aW5ncyA9IHtcclxuICAgIG1haW5BeGlzOiAnVkVSVElDQUwnLFxyXG4gICAgcmVzaXplOlsxMCw0MF0sXHJcbiAgICBtYWluQXhpc1NpemluZzogJ0FVVE8nXHJcbn1cclxuXHJcbmNvbnN0IGRlZmF1bHRLZXlUaXRsZVNldHRpbmdzID0ge1xyXG4gICAgZm9udFNpemU6IDEwLFxyXG4gICAgcmVzaXplV2l0aG91dENvbnN0cmFpbnRzOiBbNjcsIDEzXSxcclxuICAgIG5hbWU6ICdrZXlUeXBlJ1xyXG59XHJcbmNvbnN0IGRlZmFsdEtleUxpbmtTZXR0aW5ncyA9IHtcclxuICAgIGZvbnRTaXplOiA5LFxyXG4gICAgc3R5bGU6ICdMaWdodCcsXHJcbiAgICBjaGFyYWN0ZXJzOiAnTi9BJ1xyXG59XHJcblxyXG5jb25zdCBmb3JlaWduS2V5U2V0dGluZ3MgPSB7XHJcbiAgICBjb2xvcjogJzIxMkIzQicsXHJcbiAgICBuYW1lOiAnRk9SRUlHTicsIFxyXG4gICAgY2hhcmFjdGVyczogJ0ZLJ1xyXG59XHJcblxyXG5jb25zdCBwcmltYXJ5S2V5U2V0dGluZ3MgPSB7XHJcbiAgICBjb2xvcjogJzM4MzkzQScsXHJcbiAgICBuYW1lOiAnUFJJTUFSWScsXHJcbiAgICBjaGFyYWN0ZXJzOiAnUEsnXHJcbn1cclxuXHJcbnR5cGUga2V5VHlwZSA9ICdGT1JFSUdOJyB8ICdQUklNQVJZJyB8ICdDVVNUT00nO1xyXG5cclxuaW50ZXJmYWNlIEtleXtcclxuICAgIHR5cGU6IGtleVR5cGUsIFxyXG4gICAga2V5VGl0bGVTZXR0aW5ncz86VGV4dCwgXHJcbiAgICBrZXlMaW5rU2V0dGluZ3M6VGV4dCxcclxuICAgIGtleVNldHRpbmdzPzpGcmFtZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVLZXkoe1xyXG4gICAgICAgIHR5cGUsIFxyXG4gICAgICAgIGtleVRpdGxlU2V0dGluZ3MsXHJcbiAgICAgICAga2V5TGlua1NldHRpbmdzLFxyXG4gICAgICAgIGtleVNldHRpbmdzXHJcbiAgICB9OktleSl7XHJcblxyXG4gICAgbGV0IHRleHRDb2xvcjtcclxuICAgIGxldCBrZXlUeXBlU2V0dGluZ3MgPSB7fTtcclxuICAgIHN3aXRjaCh0eXBlKXtcclxuICAgICAgICBjYXNlICdGT1JFSUdOJzpcclxuICAgICAgICAgICAga2V5VHlwZVNldHRpbmdzID0gZm9yZWlnbktleVNldHRpbmdzO1xyXG4gICAgICAgICAgICB0ZXh0Q29sb3IgPSB7Y29sb3I6ICcxMzcxZmYnfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdQUklNQVJZJzpcclxuICAgICAgICAgICAga2V5VHlwZVNldHRpbmdzID0gcHJpbWFyeUtleVNldHRpbmdzO1xyXG4gICAgICAgICAgICB0ZXh0Q29sb3IgPSB7Y29sb3I6ICdGRjc2MTMnfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB0ZXh0Q29sb3IgPSB7bmFtZTogJ0NVU1RPTSd9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGtleUFzc2lnbiA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdEtleVNldHRpbmdzLCBrZXlUeXBlU2V0dGluZ3MsIGtleVNldHRpbmdzKTtcclxuICAgIGNvbnN0IGtleSA9IGNyZWF0ZUZyYW1lTm9kZShrZXlBc3NpZ24pO1xyXG4gICAgY29uc3Qga2V5VGl0bGUgPSBjcmVhdGVUZXh0Tm9kZShPYmplY3QuYXNzaWduKGRlZmF1bHRLZXlUaXRsZVNldHRpbmdzLCBrZXlUeXBlU2V0dGluZ3MsIGtleVRpdGxlU2V0dGluZ3MsIHRleHRDb2xvcikpXHJcbiAgICBjb25zdCBrZXlMaW5rID0gY3JlYXRlVGV4dE5vZGUoT2JqZWN0LmFzc2lnbihkZWZhbHRLZXlMaW5rU2V0dGluZ3MsIHRleHRDb2xvciwga2V5TGlua1NldHRpbmdzKSlcclxuICAgIGtleS5hcHBlbmRDaGlsZChrZXlUaXRsZSk7XHJcbiAgICBrZXkuYXBwZW5kQ2hpbGQoa2V5TGluayk7XHJcbiAgICByZXR1cm4ga2V5O1xyXG59IiwiaW1wb3J0IHtjcmVhdGVGcmFtZU5vZGV9IGZyb20gJy4uL3V0aWwvZnJhbWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVGFibGUodGFibGVOYW1lOnN0cmluZyl7XHJcbiAgICBjb25zdCB0YWJsZSA9IGNyZWF0ZUZyYW1lTm9kZSh7XHJcbiAgICAgICAgbmFtZTogdGFibGVOYW1lLFxyXG4gICAgICAgIGNsaXBzQ29udGVudDogdHJ1ZSxcclxuICAgICAgICBsYXlvdXRBbGlnbjonU1RSRVRDSCcsXHJcbiAgICAgICAgY29ybmVyUmFkaXVzOiA1LFxyXG4gICAgICAgIG1haW5BeGlzOiAnVkVSVElDQUwnLFxyXG4gICAgICAgIGNvbG9yOiAnNEU0RjUxJyxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRhYmxlO1xyXG59IiwiaW1wb3J0IHtjcmVhdGVUZXh0Tm9kZSwgVGV4dH0gZnJvbSAnLi4vdXRpbC90ZXh0J1xyXG5pbXBvcnQgeyBjcmVhdGVGcmFtZU5vZGUsIEZyYW1lIH0gZnJvbSAnLi4vdXRpbC9mcmFtZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUaXRsZSh0YWJsZU5hbWU6c3RyaW5nKXtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUZyYW1lTm9kZSh7XHJcbiAgICAgICAgY29sb3I6ICc0YjRjNGUnLFxyXG4gICAgICAgIG1haW5BeGlzOiAnVkVSVElDQUwnLFxyXG4gICAgICAgIHBhZGRpbmdEaXJlY3Rpb246IFswLDAsMCwxMF0sXHJcbiAgICAgICAgbmFtZTogdGFibGVOYW1lLFxyXG4gICAgICAgIG1haW5BeGlzU2l6aW5nOiAnRklYRUQnLFxyXG4gICAgICAgIGFsdEF4aXNTaXppbmc6ICdBVVRPJyxcclxuICAgICAgICByZXNpemU6IFs0MDAsNDBdLFxyXG4gICAgICAgIG1haW5BeGlzQWxpZ246ICdDRU5URVInLFxyXG4gICAgICAgIGFsdEF4aXNBbGlnbjogJ01JTidcclxuICAgIH0pO1xyXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVUZXh0Tm9kZSh7XHJcbiAgICAgICAgZmFtaWx5OidXb3JrIFNhbnMnLFxyXG4gICAgICAgIGNoYXJhY3RlcnM6IHRhYmxlTmFtZSxcclxuICAgICAgICBhbGlnbkhvcml6b250YWw6ICdMRUZUJyxcclxuICAgICAgICBhbGlnblZlcnRpY2FsOiAnQ0VOVEVSJyxcclxuICAgICAgICBuYW1lOiB0YWJsZU5hbWVcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjYWxsRm9udCBmcm9tICcuL3V0aWwvZm9udCc7XHJcbmltcG9ydCBjcmVhdGVEZWZhdWx0VGFibGUgZnJvbSAnLi91cGRhdGVVSUZ1bmN0aW9ucy9jcmVhdGVEZWZhdWx0VGFibGUnO1xyXG5pbXBvcnQgY3JlYXRlRGVmYXVsdENvbHVtbiBmcm9tICcuL3VwZGF0ZVVJRnVuY3Rpb25zL2NyZWF0ZURlZmF1bHRDb2x1bW4nO1xyXG5pbXBvcnQgZGVsZXRlVGFibGUgZnJvbSAnLi91cGRhdGVVSUZ1bmN0aW9ucy9kZWxldGVUYWJsZSc7XHJcbmltcG9ydCBtb2RpZnlEYXRhVHlwZSBmcm9tICcuL3VwZGF0ZVVJRnVuY3Rpb25zL21vZGlmeURhdGFUeXBlJztcclxuaW1wb3J0IG1vZGlmeVRpdGxlIGZyb20gJy4vdXBkYXRlVUlGdW5jdGlvbnMvbW9kaWZ5VGl0bGUnO1xyXG5pbXBvcnQgbW9kaWZ5SWQgZnJvbSAnLi91cGRhdGVVSUZ1bmN0aW9ucy9tb2RpZnlJZCc7XHJcbmltcG9ydCBtb2RpZnlDb25zdHJhaW50cyBmcm9tICcuL3VwZGF0ZVVJRnVuY3Rpb25zL21vZGlmeUNvbnN0cmFpbnRzJztcclxuaW1wb3J0IGRlbGV0ZUNvbHVtbiBmcm9tICcuL3VwZGF0ZVVJRnVuY3Rpb25zL2RlbGV0ZUNvbHVtbic7XHJcblxyXG5maWdtYS5zaG93VUkoX19odG1sX18pO1xyXG5cclxuZmlnbWEudWkucmVzaXplKDQ1MCwgNjAwKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlUG9wdWxhdGVkVGFibGUoKXtcclxuICBhd2FpdCBjYWxsRm9udChbXHJcbiAgICB7IGZhbWlseTogXCJXb3JrIFNhbnNcIiwgc3R5bGU6IFwiU2VtaUJvbGRcIiB9LFxyXG4gICAgeyBmYW1pbHk6IFwiSUJNIFBsZXggTW9ub1wiLCBzdHlsZTogXCJMaWdodFwiIH0sXHJcbiAgICB7IGZhbWlseTogXCJJQk0gUGxleCBNb25vXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9LFxyXG4gICAgeyBmYW1pbHk6IFwiSUJNIFBsZXggTW9ub1wiLCBzdHlsZTogXCJTZW1pQm9sZFwiIH1cclxuICBdKTtcclxufVxyXG4vL2lmIChmaWdtYS5lZGl0b3JUeXBlID09PSAnZmlnbWEnKSBcclxuZ2VuZXJhdGVQb3B1bGF0ZWRUYWJsZSgpO1xyXG5cclxuY29uc3Qgb3JjaGVzdHJhdGVNb2RlbCA9IHtcclxuICBDUkVBVEVfVEFCTEU6ICdDUkVBVEVfVEFCTEUnLFxyXG4gIFJFTU9WRV9UQUJMRTogJ1JFTU9WRV9UQUJMRScsXHJcbiAgQ1JFQVRFX0NPTFVNTjogJ0NSRUFURV9DT0xVTU4nLFxyXG4gIFJFTU9WRV9DT0xVTU46ICdSRU1PVkVfQ09MVU1OJyxcclxuICBNT0RJRllfVElUTEU6ICdNT0RJRllfVElUTEUnLFxyXG4gIE1PRElGWV9JRDogJ01PRElGWV9JRCcsXHJcbiAgTU9ESUZZX0RBVEFUWVBFOiAnTU9ESUZZX0RBVEFUWVBFJyxcclxuICBNT0RJRllfQ09OU1RSQUlOVFM6ICdNT0RJRllfQ09OU1RSQUlOVFMnLFxyXG4gIE1PRElGWV9LRVlTOiAnTU9ESUZZX0tFWVMnXHJcbn1cclxuXHJcbi8vQWN0aXZhdGVzIHdoZW4gdHJpZ2dlcmVkIGJ5IFBsdWdpbiBVSVxyXG4vL3V1aWQgaXMgdXNlZCB0byByZWNvZ25pemUgcmVsZXZhbnQgdGFibGUgaW4gdGhlIHBsdWdpbiB1aVxyXG4vL2ZpZ21hSWQgaXMgdXNlZCB0byByZWNvbmdpemUgdGhlIHJlbGV2YW50IGZyYW1lIGluIGZpZ21hXHJcbi8vYWxsIG90aGVyIHBhcmFtZXRlcnMgdXBkYXRlIHRoZSB2YWx1ZXMgaW5zaWRlIGZpZ21hXHJcbmludGVyZmFjZSBNb2RVSXtcclxuICB1dWlkOnN0cmluZyxcclxuICBmaWdtYUlkPzpzdHJpbmcsXHJcbiAgdGl0bGU/OnN0cmluZyxcclxuICBpZD86c3RyaW5nLFxyXG4gIG5ld0NvbnN0cmFpbnRzPzpzdHJpbmdbXSxcclxuICBkYXRhVHlwZT86c3RyaW5nXHJcbn1cclxuaW50ZXJmYWNlIFJldHVybk1lc3NhZ2V7XHJcbiAgdHlwZTogc3RyaW5nLCBcclxuICB1dWlkOiBzdHJpbmcsIFxyXG4gIGZpZ21hSWQ/OnN0cmluZywgXHJcbiAgZmlnbWFJZHM/OiBzdHJpbmdbXSB8IHtbcHJvcDogc3RyaW5nXTpzdHJpbmd8c3RyaW5nW119LFxyXG4gIG5vZGU/OiBGcmFtZU5vZGVcclxufVxyXG5cclxuZmlnbWEudWkub25tZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcclxuICBjb25zdCB7dXVpZCwgZmlnbWFJZCwgdGl0bGUsIGlkLCBuZXdDb25zdHJhaW50cywgZGF0YVR5cGV9ID0gbWVzc2FnZS5wYXlsb2FkO1xyXG4gIGxldCByZXR1cm5NZXNzYWdlOlJldHVybk1lc3NhZ2U7XHJcbiAgc3dpdGNoKG1lc3NhZ2UudHlwZSl7XHJcbiAgICBjYXNlIG9yY2hlc3RyYXRlTW9kZWwuQ1JFQVRFX1RBQkxFOlxyXG4gICAgICAgIHJldHVybk1lc3NhZ2UgPSBjcmVhdGVEZWZhdWx0VGFibGUodXVpZCk7XHJcbiAgICAgICAgZGVsZXRlIHJldHVybk1lc3NhZ2Uubm9kZTtcclxuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShyZXR1cm5NZXNzYWdlKVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBvcmNoZXN0cmF0ZU1vZGVsLlJFTU9WRV9UQUJMRTpcclxuICAgICAgICByZXR1cm5NZXNzYWdlID0gZGVsZXRlVGFibGUodXVpZCwgZmlnbWFJZCk7XHJcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UocmV0dXJuTWVzc2FnZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIG9yY2hlc3RyYXRlTW9kZWwuQ1JFQVRFX0NPTFVNTjpcclxuICAgICAgICByZXR1cm5NZXNzYWdlID0gY3JlYXRlRGVmYXVsdENvbHVtbih1dWlkKTtcclxuICAgICAgICBjb25zdCB0YWJsZSA9IGZpZ21hLmdldE5vZGVCeUlkKGZpZ21hSWQpIGFzIEZyYW1lTm9kZTtcclxuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChyZXR1cm5NZXNzYWdlLm5vZGUpO1xyXG4gICAgICAgIGRlbGV0ZSByZXR1cm5NZXNzYWdlLm5vZGU7XHJcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UocmV0dXJuTWVzc2FnZSlcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2Ugb3JjaGVzdHJhdGVNb2RlbC5SRU1PVkVfQ09MVU1OOlxyXG4gICAgICByZXR1cm5NZXNzYWdlID0gZGVsZXRlQ29sdW1uKHV1aWQsIGZpZ21hSWQpO1xyXG4gICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShyZXR1cm5NZXNzYWdlKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIG9yY2hlc3RyYXRlTW9kZWwuTU9ESUZZX1RJVExFOlxyXG4gICAgICAgIHJldHVybk1lc3NhZ2UgPSBtb2RpZnlUaXRsZSh1dWlkLCB0aXRsZSwgZmlnbWFJZCk7XHJcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UocmV0dXJuTWVzc2FnZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIG9yY2hlc3RyYXRlTW9kZWwuTU9ESUZZX0lEOlxyXG4gICAgICAgIHJldHVybk1lc3NhZ2UgPSBtb2RpZnlJZCh1dWlkLCBpZCwgZmlnbWFJZCk7XHJcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UocmV0dXJuTWVzc2FnZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIG9yY2hlc3RyYXRlTW9kZWwuTU9ESUZZX0RBVEFUWVBFOlxyXG4gICAgICAgIHJldHVybk1lc3NhZ2UgPSBtb2RpZnlEYXRhVHlwZSh1dWlkLCBkYXRhVHlwZSwgZmlnbWFJZCk7XHJcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UocmV0dXJuTWVzc2FnZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIG9yY2hlc3RyYXRlTW9kZWwuTU9ESUZZX0NPTlNUUkFJTlRTOlxyXG4gICAgICAgIHJldHVybk1lc3NhZ2UgPSBtb2RpZnlDb25zdHJhaW50cyh1dWlkLCBuZXdDb25zdHJhaW50cywgZmlnbWFJZCk7XHJcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UocmV0dXJuTWVzc2FnZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIG9yY2hlc3RyYXRlTW9kZWwuTU9ESUZZX0tFWVM6XHJcbiAgICAgICAgLy9tb2RpZnlLZXlzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==