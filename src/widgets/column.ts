import {createFrameNode, Frame} from '../util/frame';

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

export default function createColumn(userSettings: Frame){
    const settings =  Object.assign(columnSettings, userSettings);
    return createFrameNode(settings);
}