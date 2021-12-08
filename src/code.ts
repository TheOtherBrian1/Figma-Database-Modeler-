 import {
   createTable, 
   createTitle,
   createKey,
   createFK,
   colorConverter,
   callFont,
   createId
} from './util/util';

 figma.showUI(__html__);

  figma.ui.resize(400, 600);

async function generatePopulatedTable(){

  await callFont({ family: "Work Sans", style: "SemiBold" });
  await callFont({ family: "IBM Plex Mono", style: "Light" });
  await callFont({ family: "IBM Plex Mono", style: "SemiBold" })

  if (figma.editorType === 'figma') {
    const table = createTable('hello');
    const title = createTitle('brick');
    const fk = createFK('milk');
    const dk = createFK('milkkk');
    const id = createId('mddaf');
    table.appendChild(title);
    table.appendChild(fk);
    table.appendChild(id);

    figma.currentPage.appendChild(table);
    figma.closePlugin();
  }
}
generatePopulatedTable();
  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  



