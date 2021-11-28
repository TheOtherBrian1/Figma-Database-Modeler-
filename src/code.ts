 figma.showUI(__html__);

  figma.ui.resize(400, 600);
  figma.ui.onmessage = msg => {

    if (msg.type === 'create-shapes') {
      const nodes = [];
      for (let i = 0; i < msg.count; i++) {
        const rect = figma.createRectangle();
        rect.x = i * 150;
        rect.fills = [{type: 'SOLID', color: { r: 1, g: 0.5, b: 1 } }];
        figma.currentPage.appendChild(rect);
        nodes.push(rect);
      }
      console.log('milk')
      figma.currentPage.selection = nodes;
      figma.viewport.scrollAndZoomIntoView(nodes);
    }

    figma.closePlugin();
  };
