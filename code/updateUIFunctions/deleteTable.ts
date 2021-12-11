import createTable from '../widgets/table';
import createTitle from '../widgets/title';
import createDefaultColumn from './createDefaultColumn';


export default function createDefaultTable(uuid:string, figmaId: string){
    console.log('createDefaultTableUUID', uuid)
    figma.getNodeById(figmaId).remove();
    figma.ui.postMessage({uuid});
}
