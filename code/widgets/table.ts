import {createFrameNode} from '../util/frame';

export default function createTable(tableName:string){
    const table = createFrameNode({
        name: tableName,
        clipsContent: true,
        layoutAlign:'STRETCH',
        cornerRadius: 5,
        mainAxis: 'VERTICAL',
        color: '4E4F51',
    });
    return table;
}