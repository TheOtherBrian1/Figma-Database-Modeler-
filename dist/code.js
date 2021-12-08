/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "colorConverter": () => (/* binding */ colorConverter),
/* harmony export */   "createTable": () => (/* binding */ createTable),
/* harmony export */   "callFont": () => (/* binding */ callFont),
/* harmony export */   "createTitle": () => (/* binding */ createTitle),
/* harmony export */   "createKey": () => (/* binding */ createKey),
/* harmony export */   "createFK": () => (/* binding */ createFK),
/* harmony export */   "createId": () => (/* binding */ createId)
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
function colorConverter(color, hex = '000000') {
    if (!color) {
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        return { r: r / 255, g: g / 255, b: b / 255 };
    }
    else {
        color.r /= 255;
        color.g /= 255;
        color.b /= 255;
        return color;
    }
}
function createTable(tableName) {
    const table = figma.createFrame();
    //table.setPluginData(tableName);
    table.name = tableName;
    table.clipsContent = true;
    table.cornerRadius = 5;
    table.layoutMode = 'VERTICAL';
    table.fills = [{ type: 'SOLID', color: colorConverter(null, '4E4F51') }];
    //equivalent to hugs content
    table.primaryAxisSizingMode = 'AUTO';
    table.counterAxisSizingMode = 'AUTO';
    return table;
}
function callFont(font) {
    return __awaiter(this, void 0, void 0, function* () {
        yield figma.loadFontAsync(font);
    });
}
function createTitle(tableName) {
    const header = figma.createFrame();
    header.name = 'Title';
    header.fills = [{ type: 'SOLID', color: colorConverter(null, '4B4C4E') }];
    header.paddingLeft = 10;
    header.layoutMode = 'VERTICAL';
    header.primaryAxisSizingMode = 'FIXED';
    header.counterAxisSizingMode = "AUTO";
    header.resize(400, 40);
    header.primaryAxisAlignItems = "CENTER";
    header.counterAxisAlignItems = "MIN";
    const text = figma.createText();
    text.fontName = { family: "Work Sans", style: "SemiBold" };
    text.fontSize = 16;
    text.characters = "milk";
    text.textAlignVertical = "CENTER";
    text.textAlignHorizontal = "LEFT";
    text.textAutoResize = "WIDTH_AND_HEIGHT";
    text.name = tableName;
    text.fills = [{ type: 'SOLID', color: colorConverter(null, 'ffffff') }];
    text.autoRename = true;
    header.appendChild(text);
    return header;
}
function createKey(value = 'N/A') {
    const key = figma.createFrame();
    key.name = value;
    key.fills = [{ type: 'SOLID', color: colorConverter(null, '212B3B') }];
    key.layoutMode = 'VERTICAL';
    key.primaryAxisSizingMode = 'AUTO';
    key.counterAxisSizingMode = "AUTO";
    //key.resize(100, 40);
    key.primaryAxisAlignItems = "CENTER";
    key.counterAxisAlignItems = "CENTER";
    const fk = figma.createText();
    fk.fontName = { family: "IBM Plex Mono", style: "SemiBold" };
    fk.fontSize = 10;
    fk.textAlignVertical = "CENTER";
    fk.textAlignHorizontal = "CENTER";
    // fk.textAutoResize = "WIDTH_AND_HEIGHT";
    fk.resizeWithoutConstraints(67, 13);
    fk.name = 'fk';
    fk.characters = 'FK';
    fk.fills = [{ type: 'SOLID', color: colorConverter(null, '1371FF') }];
    fk.autoRename = true;
    const keyName = figma.createText();
    keyName.fontName = { family: "IBM Plex Mono", style: "Light" };
    keyName.fontSize = 9;
    keyName.characters = value;
    keyName.textAlignVertical = "CENTER";
    keyName.textAlignHorizontal = "CENTER";
    keyName.textAutoResize = "WIDTH_AND_HEIGHT";
    keyName.name = value;
    keyName.fills = [{ type: 'SOLID', color: colorConverter(null, '4E94FF') }];
    keyName.autoRename = true;
    key.appendChild(fk);
    key.appendChild(keyName);
    return key;
}
function createFK(tableName) {
    const foreignKey = figma.createFrame();
    foreignKey.name = 'Foreign Keys';
    foreignKey.fills = [{ type: 'SOLID', color: colorConverter(null, '212B3B') }];
    foreignKey.layoutMode = 'VERTICAL';
    foreignKey.primaryAxisSizingMode = 'AUTO';
    foreignKey.counterAxisSizingMode = "AUTO";
    foreignKey.primaryAxisAlignItems = "CENTER";
    foreignKey.counterAxisAlignItems = "CENTER";
    const key = createKey();
    const key2 = createKey();
    const key3 = createKey();
    foreignKey.appendChild(key);
    foreignKey.appendChild(key2);
    foreignKey.appendChild(key3);
    return foreignKey;
}
function createId(tableName) {
    const id = figma.createFrame();
    id.name = 'Id';
    id.layoutMode = 'VERTICAL';
    id.primaryAxisSizingMode = 'AUTO';
    id.counterAxisSizingMode = "AUTO";
    id.primaryAxisAlignItems = "CENTER";
    id.counterAxisAlignItems = "CENTER";
    const idTitle = figma.createText();
    idTitle.fontName = { family: "IBM Plex Mono", style: "SemiBold" };
    idTitle.fontSize = 14;
    idTitle.textAlignVertical = "CENTER";
    idTitle.textAlignHorizontal = "CENTER";
    idTitle.characters = 'Temp';
    idTitle.fills = [{ type: 'SOLID', color: colorConverter(null, 'ffffff') }];
    idTitle.autoRename = true;
    id.appendChild(idTitle);
    return id;
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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.ts");
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
        yield (0,_util__WEBPACK_IMPORTED_MODULE_0__.callFont)({ family: "Work Sans", style: "SemiBold" });
        yield (0,_util__WEBPACK_IMPORTED_MODULE_0__.callFont)({ family: "IBM Plex Mono", style: "Light" });
        yield (0,_util__WEBPACK_IMPORTED_MODULE_0__.callFont)({ family: "IBM Plex Mono", style: "SemiBold" });
        if (figma.editorType === 'figma') {
            const table = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createTable)('hello');
            const title = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createTitle)('brick');
            const fk = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createFK)('milk');
            const dk = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createFK)('milkkk');
            const id = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createId)('mddaf');
            table.appendChild(title);
            table.appendChild(fk);
            table.appendChild(id);
            figma.currentPage.appendChild(table);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDckI7SUFDSCxDQUFDO0NBQUE7QUFDRCxzQkFBc0IsRUFBRSxDQUFDO0FBQ3ZCLDRFQUE0RTtBQUM1RSwyRUFBMkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZWJyYS8uL3NyYy91dGlsLnRzIiwid2VicGFjazovL3plYnJhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3plYnJhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly96ZWJyYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3plYnJhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vemVicmEvLi9zcmMvY29kZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgUmdiIHtcclxuICAgIHI6IG51bWJlcjtcclxuICAgIGc6IG51bWJlcjtcclxuICAgIGI6IG51bWJlcjtcclxuICB9XHJcbiAgXHJcbmV4cG9ydCBmdW5jdGlvbiBjb2xvckNvbnZlcnRlcihjb2xvcjpSZ2J8bnVsbCwgaGV4OnN0cmluZz0nMDAwMDAwJyl7XHJcbiAgICBpZighY29sb3Ipe1xyXG4gICAgICBjb25zdCByID0gcGFyc2VJbnQoaGV4LnNsaWNlKDAsMiksIDE2KTtcclxuICAgICAgY29uc3QgZyA9IHBhcnNlSW50KGhleC5zbGljZSgyLDQpLCAxNik7XHJcbiAgICAgIGNvbnN0IGIgPSBwYXJzZUludChoZXguc2xpY2UoNCw2KSwgMTYpO1xyXG4gICAgICByZXR1cm4ge3I6ci8yNTUsIGc6Zy8yNTUsIGI6Yi8yNTV9O1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgY29sb3IuciAvPSAyNTU7XHJcbiAgICAgIGNvbG9yLmcgLz0gMjU1O1xyXG4gICAgICBjb2xvci5iIC89IDI1NTtcclxuICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgfVxyXG59XHJcbiAgXHJcbiAgXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYWJsZSh0YWJsZU5hbWUpe1xyXG4gICAgY29uc3QgdGFibGU6RnJhbWVOb2RlID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcclxuICAgIC8vdGFibGUuc2V0UGx1Z2luRGF0YSh0YWJsZU5hbWUpO1xyXG4gICAgdGFibGUubmFtZSA9IHRhYmxlTmFtZTtcclxuICAgIHRhYmxlLmNsaXBzQ29udGVudCA9IHRydWU7XHJcbiAgICB0YWJsZS5jb3JuZXJSYWRpdXMgPSA1O1xyXG4gICAgdGFibGUubGF5b3V0TW9kZSA9ICdWRVJUSUNBTCc7XHJcbiAgICB0YWJsZS5maWxscyA9IFt7dHlwZTogJ1NPTElEJywgY29sb3I6IGNvbG9yQ29udmVydGVyKG51bGwsICc0RTRGNTEnKX1dO1xyXG4gICAgLy9lcXVpdmFsZW50IHRvIGh1Z3MgY29udGVudFxyXG4gICAgdGFibGUucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gJ0FVVE8nO1xyXG4gICAgdGFibGUuY291bnRlckF4aXNTaXppbmdNb2RlID0gJ0FVVE8nO1xyXG4gICAgcmV0dXJuIHRhYmxlO1xyXG59XHJcbiAgXHJcbmludGVyZmFjZSBGb250c3tcclxuICAgIGZhbWlseTogc3RyaW5nLFxyXG4gICAgc3R5bGU6IHN0cmluZ1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYWxsRm9udChmb250OkZvbnRzKXtcclxuICAgIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMoZm9udCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRpdGxlKHRhYmxlTmFtZTpzdHJpbmcpe1xyXG4gICAgY29uc3QgaGVhZGVyOkZyYW1lTm9kZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XHJcbiAgICBoZWFkZXIubmFtZSA9ICdUaXRsZSc7XHJcbiAgICBoZWFkZXIuZmlsbHMgPSBbe3R5cGU6ICdTT0xJRCcsIGNvbG9yOiBjb2xvckNvbnZlcnRlcihudWxsLCAnNEI0QzRFJyl9XTtcclxuICAgIGhlYWRlci5wYWRkaW5nTGVmdCA9IDEwO1xyXG4gICAgaGVhZGVyLmxheW91dE1vZGUgPSAnVkVSVElDQUwnO1xyXG4gICAgaGVhZGVyLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9ICdGSVhFRCc7XHJcbiAgICBoZWFkZXIuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XHJcbiAgICBoZWFkZXIucmVzaXplKDQwMCwgNDApO1xyXG4gICAgaGVhZGVyLnByaW1hcnlBeGlzQWxpZ25JdGVtcyA9IFwiQ0VOVEVSXCI7XHJcbiAgICBoZWFkZXIuY291bnRlckF4aXNBbGlnbkl0ZW1zID0gXCJNSU5cIjtcclxuICBcclxuICAgIGNvbnN0IHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XHJcbiAgICB0ZXh0LmZvbnROYW1lID0geyBmYW1pbHk6IFwiV29yayBTYW5zXCIsIHN0eWxlOiBcIlNlbWlCb2xkXCIgfTtcclxuICAgIHRleHQuZm9udFNpemUgPSAxNjtcclxuICAgIHRleHQuY2hhcmFjdGVycyA9IFwibWlsa1wiXHJcbiAgICB0ZXh0LnRleHRBbGlnblZlcnRpY2FsID0gXCJDRU5URVJcIjtcclxuICAgIHRleHQudGV4dEFsaWduSG9yaXpvbnRhbCA9IFwiTEVGVFwiO1xyXG4gICAgdGV4dC50ZXh0QXV0b1Jlc2l6ZSA9IFwiV0lEVEhfQU5EX0hFSUdIVFwiO1xyXG4gICAgdGV4dC5uYW1lID0gdGFibGVOYW1lO1xyXG4gICAgdGV4dC5maWxscyA9IFt7dHlwZTogJ1NPTElEJywgY29sb3I6IGNvbG9yQ29udmVydGVyKG51bGwsICdmZmZmZmYnKX1dXHJcbiAgICB0ZXh0LmF1dG9SZW5hbWUgPSB0cnVlO1xyXG4gIFxyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG4gIFxyXG4gIFxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlS2V5KHZhbHVlOnN0cmluZyA9ICdOL0EnKXtcclxuICAgIGNvbnN0IGtleTpGcmFtZU5vZGUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xyXG4gICAga2V5Lm5hbWUgPSB2YWx1ZTtcclxuICAgIGtleS5maWxscyA9IFt7dHlwZTogJ1NPTElEJywgY29sb3I6IGNvbG9yQ29udmVydGVyKG51bGwsICcyMTJCM0InKX1dO1xyXG4gICAga2V5LmxheW91dE1vZGUgPSAnVkVSVElDQUwnO1xyXG4gICAga2V5LnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9ICdBVVRPJztcclxuICAgIGtleS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcclxuICAgIC8va2V5LnJlc2l6ZSgxMDAsIDQwKTtcclxuICAgIGtleS5wcmltYXJ5QXhpc0FsaWduSXRlbXMgPSBcIkNFTlRFUlwiO1xyXG4gICAga2V5LmNvdW50ZXJBeGlzQWxpZ25JdGVtcyA9IFwiQ0VOVEVSXCI7XHJcbiAgXHJcbiAgICBjb25zdCBmayA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcclxuICAgIGZrLmZvbnROYW1lID0geyBmYW1pbHk6IFwiSUJNIFBsZXggTW9ub1wiLCBzdHlsZTogXCJTZW1pQm9sZFwiIH07XHJcbiAgICBmay5mb250U2l6ZSA9IDEwO1xyXG4gICAgZmsudGV4dEFsaWduVmVydGljYWwgPSBcIkNFTlRFUlwiO1xyXG4gICAgZmsudGV4dEFsaWduSG9yaXpvbnRhbCA9IFwiQ0VOVEVSXCI7XHJcbiAgICAvLyBmay50ZXh0QXV0b1Jlc2l6ZSA9IFwiV0lEVEhfQU5EX0hFSUdIVFwiO1xyXG4gICAgZmsucmVzaXplV2l0aG91dENvbnN0cmFpbnRzKDY3LDEzKTtcclxuICAgIGZrLm5hbWUgPSAnZmsnO1xyXG4gICAgZmsuY2hhcmFjdGVycyA9ICdGSyc7XHJcbiAgICBmay5maWxscyA9IFt7dHlwZTogJ1NPTElEJywgY29sb3I6IGNvbG9yQ29udmVydGVyKG51bGwsICcxMzcxRkYnKX1dO1xyXG4gICAgZmsuYXV0b1JlbmFtZSA9IHRydWU7XHJcbiAgXHJcbiAgICBjb25zdCBrZXlOYW1lID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xyXG4gICAga2V5TmFtZS5mb250TmFtZSA9IHsgZmFtaWx5OiBcIklCTSBQbGV4IE1vbm9cIiwgc3R5bGU6IFwiTGlnaHRcIiB9O1xyXG4gICAga2V5TmFtZS5mb250U2l6ZSA9IDk7XHJcbiAgICBrZXlOYW1lLmNoYXJhY3RlcnMgPSB2YWx1ZTtcclxuICAgIGtleU5hbWUudGV4dEFsaWduVmVydGljYWwgPSBcIkNFTlRFUlwiO1xyXG4gICAga2V5TmFtZS50ZXh0QWxpZ25Ib3Jpem9udGFsID0gXCJDRU5URVJcIjtcclxuICAgIGtleU5hbWUudGV4dEF1dG9SZXNpemUgPSBcIldJRFRIX0FORF9IRUlHSFRcIjtcclxuICAgIGtleU5hbWUubmFtZSA9IHZhbHVlO1xyXG4gICAga2V5TmFtZS5maWxscyA9IFt7dHlwZTogJ1NPTElEJywgY29sb3I6IGNvbG9yQ29udmVydGVyKG51bGwsICc0RTk0RkYnKX1dO1xyXG4gICAga2V5TmFtZS5hdXRvUmVuYW1lID0gdHJ1ZTtcclxuICBcclxuICAgIGtleS5hcHBlbmRDaGlsZChmayk7XHJcbiAgICBrZXkuYXBwZW5kQ2hpbGQoa2V5TmFtZSk7XHJcbiAgXHJcbiAgICByZXR1cm4ga2V5O1xyXG59XHJcbiAgXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGSyh0YWJsZU5hbWU6c3RyaW5nKXtcclxuICAgIGNvbnN0IGZvcmVpZ25LZXk6RnJhbWVOb2RlID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcclxuICAgIGZvcmVpZ25LZXkubmFtZSA9ICdGb3JlaWduIEtleXMnO1xyXG4gICAgZm9yZWlnbktleS5maWxscyA9IFt7dHlwZTogJ1NPTElEJywgY29sb3I6IGNvbG9yQ29udmVydGVyKG51bGwsICcyMTJCM0InKX1dO1xyXG4gICAgZm9yZWlnbktleS5sYXlvdXRNb2RlID0gJ1ZFUlRJQ0FMJztcclxuICAgIGZvcmVpZ25LZXkucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gJ0FVVE8nO1xyXG4gICAgZm9yZWlnbktleS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcclxuICAgIGZvcmVpZ25LZXkucHJpbWFyeUF4aXNBbGlnbkl0ZW1zID0gXCJDRU5URVJcIjtcclxuICAgIGZvcmVpZ25LZXkuY291bnRlckF4aXNBbGlnbkl0ZW1zID0gXCJDRU5URVJcIjtcclxuICBcclxuICAgIGNvbnN0IGtleSA9IGNyZWF0ZUtleSgpO1xyXG4gICAgY29uc3Qga2V5MiA9IGNyZWF0ZUtleSgpO1xyXG4gICAgY29uc3Qga2V5MyA9IGNyZWF0ZUtleSgpO1xyXG4gICAgZm9yZWlnbktleS5hcHBlbmRDaGlsZChrZXkpO1xyXG4gICAgZm9yZWlnbktleS5hcHBlbmRDaGlsZChrZXkyKTtcclxuICAgIGZvcmVpZ25LZXkuYXBwZW5kQ2hpbGQoa2V5Myk7XHJcbiAgXHJcbiAgICByZXR1cm4gZm9yZWlnbktleTtcclxufVxyXG4gIFxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJZCh0YWJsZU5hbWU6c3RyaW5nKXtcclxuICAgIGNvbnN0IGlkOkZyYW1lTm9kZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XHJcbiAgICBpZC5uYW1lID0gJ0lkJztcclxuICAgIGlkLmxheW91dE1vZGUgPSAnVkVSVElDQUwnO1xyXG4gICAgaWQucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gJ0FVVE8nO1xyXG4gICAgaWQuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XHJcbiAgICBpZC5wcmltYXJ5QXhpc0FsaWduSXRlbXMgPSBcIkNFTlRFUlwiO1xyXG4gICAgaWQuY291bnRlckF4aXNBbGlnbkl0ZW1zID0gXCJDRU5URVJcIjtcclxuICAgIFxyXG4gICAgY29uc3QgaWRUaXRsZSA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcclxuICAgIGlkVGl0bGUuZm9udE5hbWUgPSB7IGZhbWlseTogXCJJQk0gUGxleCBNb25vXCIsIHN0eWxlOiBcIlNlbWlCb2xkXCIgfTtcclxuICAgIGlkVGl0bGUuZm9udFNpemUgPSAxNDtcclxuICAgIGlkVGl0bGUudGV4dEFsaWduVmVydGljYWwgPSBcIkNFTlRFUlwiO1xyXG4gICAgaWRUaXRsZS50ZXh0QWxpZ25Ib3Jpem9udGFsID0gXCJDRU5URVJcIjtcclxuICAgIGlkVGl0bGUuY2hhcmFjdGVycyA9ICdUZW1wJztcclxuICAgIGlkVGl0bGUuZmlsbHMgPSBbe3R5cGU6ICdTT0xJRCcsIGNvbG9yOiBjb2xvckNvbnZlcnRlcihudWxsLCAnZmZmZmZmJyl9XTtcclxuICAgIGlkVGl0bGUuYXV0b1JlbmFtZSA9IHRydWU7XHJcbiAgXHJcbiAgICBpZC5hcHBlbmRDaGlsZChpZFRpdGxlKTsgICAgXHJcbiAgICByZXR1cm4gaWQ7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiBpbXBvcnQge1xyXG4gICBjcmVhdGVUYWJsZSwgXHJcbiAgIGNyZWF0ZVRpdGxlLFxyXG4gICBjcmVhdGVLZXksXHJcbiAgIGNyZWF0ZUZLLFxyXG4gICBjb2xvckNvbnZlcnRlcixcclxuICAgY2FsbEZvbnQsXHJcbiAgIGNyZWF0ZUlkXHJcbn0gZnJvbSAnLi91dGlsJztcclxuXHJcbiBmaWdtYS5zaG93VUkoX19odG1sX18pO1xyXG5cclxuICBmaWdtYS51aS5yZXNpemUoNDAwLCA2MDApO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVQb3B1bGF0ZWRUYWJsZSgpe1xyXG5cclxuICBhd2FpdCBjYWxsRm9udCh7IGZhbWlseTogXCJXb3JrIFNhbnNcIiwgc3R5bGU6IFwiU2VtaUJvbGRcIiB9KTtcclxuICBhd2FpdCBjYWxsRm9udCh7IGZhbWlseTogXCJJQk0gUGxleCBNb25vXCIsIHN0eWxlOiBcIkxpZ2h0XCIgfSk7XHJcbiAgYXdhaXQgY2FsbEZvbnQoeyBmYW1pbHk6IFwiSUJNIFBsZXggTW9ub1wiLCBzdHlsZTogXCJTZW1pQm9sZFwiIH0pXHJcblxyXG4gIGlmIChmaWdtYS5lZGl0b3JUeXBlID09PSAnZmlnbWEnKSB7XHJcbiAgICBjb25zdCB0YWJsZSA9IGNyZWF0ZVRhYmxlKCdoZWxsbycpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVUaXRsZSgnYnJpY2snKTtcclxuICAgIGNvbnN0IGZrID0gY3JlYXRlRksoJ21pbGsnKTtcclxuICAgIGNvbnN0IGRrID0gY3JlYXRlRksoJ21pbGtraycpO1xyXG4gICAgY29uc3QgaWQgPSBjcmVhdGVJZCgnbWRkYWYnKTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKGZrKTtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKGlkKTtcclxuXHJcbiAgICBmaWdtYS5jdXJyZW50UGFnZS5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xyXG4gIH1cclxufVxyXG5nZW5lcmF0ZVBvcHVsYXRlZFRhYmxlKCk7XHJcbiAgLy8gTWFrZSBzdXJlIHRvIGNsb3NlIHRoZSBwbHVnaW4gd2hlbiB5b3UncmUgZG9uZS4gT3RoZXJ3aXNlIHRoZSBwbHVnaW4gd2lsbFxyXG4gIC8vIGtlZXAgcnVubmluZywgd2hpY2ggc2hvd3MgdGhlIGNhbmNlbCBidXR0b24gYXQgdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuLlxyXG4gIFxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=