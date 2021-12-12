import createTable from '../widgets/table';
import createTitle from '../widgets/title';
import createDefaultColumn from './createDefaultColumn';


export default function createDefaultTable(uuid:string){
    const table = createTable('TABLE');
    table.setPluginData('uuid', uuid);
    const title = createTitle('untitled');
    table.appendChild(title);
    const grid = createDefaultColumn(uuid);
    table.appendChild(grid.node);
    return {type: 'UPDATE_FIGMA_IDS_NEW_TABLE', node: table, figmaIds:{table:table.id, ...grid.figmaIds}, uuid};
}