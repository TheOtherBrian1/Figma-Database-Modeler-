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
        console.log('milk');
        figma.currentPage.selection = nodes;
        figma.viewport.scrollAndZoomIntoView(nodes);
    }
    figma.closePlugin();
};

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZUFBZTtBQUN2QztBQUNBO0FBQ0EsNEJBQTRCLHdCQUF3QixzQkFBc0I7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vemVicmEvLi9zcmMvY29kZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJmaWdtYS5zaG93VUkoX19odG1sX18pO1xyXG5maWdtYS51aS5yZXNpemUoNDAwLCA2MDApO1xyXG5maWdtYS51aS5vbm1lc3NhZ2UgPSBtc2cgPT4ge1xyXG4gICAgaWYgKG1zZy50eXBlID09PSAnY3JlYXRlLXNoYXBlcycpIHtcclxuICAgICAgICBjb25zdCBub2RlcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXNnLmNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xyXG4gICAgICAgICAgICByZWN0LnggPSBpICogMTUwO1xyXG4gICAgICAgICAgICByZWN0LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMSwgZzogMC41LCBiOiAxIH0gfV07XHJcbiAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLmFwcGVuZENoaWxkKHJlY3QpO1xyXG4gICAgICAgICAgICBub2Rlcy5wdXNoKHJlY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZygnbWlsaycpO1xyXG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IG5vZGVzO1xyXG4gICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhub2Rlcyk7XHJcbiAgICB9XHJcbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=