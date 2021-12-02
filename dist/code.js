/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
figma.showUI(__html__);
figma.ui.resize(400, 600);
figma.ui.onmessage = msg => {
    if (msg.type === 'create-shapes') {
        const nodes = [];
        for (let i = 0; i < msg.count; i++) {
            const rect = figma.createRectangle();
            rect.x = i * 150;
            rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 1 } }];
            figma.currentPage.appendChild(rect);
            nodes.push(rect);
        }
        figma.currentPage.selection = nodes;
        figma.viewport.scrollAndZoomIntoView(nodes);
    }
    figma.closePlugin();
};

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZUFBZTtBQUN2QztBQUNBO0FBQ0EsNEJBQTRCLHdCQUF3QixzQkFBc0I7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3plYnJhLy4vc3JjL2NvZGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZmlnbWEuc2hvd1VJKF9faHRtbF9fKTtcclxuZmlnbWEudWkucmVzaXplKDQwMCwgNjAwKTtcclxuZmlnbWEudWkub25tZXNzYWdlID0gbXNnID0+IHtcclxuICAgIGlmIChtc2cudHlwZSA9PT0gJ2NyZWF0ZS1zaGFwZXMnKSB7XHJcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1zZy5jb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcclxuICAgICAgICAgICAgcmVjdC54ID0gaSAqIDE1MDtcclxuICAgICAgICAgICAgcmVjdC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDEsIGc6IDAuNSwgYjogMSB9IH1dO1xyXG4gICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5hcHBlbmRDaGlsZChyZWN0KTtcclxuICAgICAgICAgICAgbm9kZXMucHVzaChyZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gbm9kZXM7XHJcbiAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KG5vZGVzKTtcclxuICAgIH1cclxuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==