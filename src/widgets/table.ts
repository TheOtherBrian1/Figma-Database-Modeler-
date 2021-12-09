import {createFrameNode} from '../util/frame';

export default function createTable(tableName:string){
    const table = createFrameNode({
        name: tableName,
        clipsContent: true,
        cornerRadius: 5,
        mainAxis: 'VERTICAL',
        color: '4E4F51',
    });
    //table.setPluginData(tableName);
    //equivalent to hugs content
    //table.primaryAxisSizingMode = 'AUTO';
    //table.counterAxisSizingMode = 'AUTO';
    return table;
}