/*
const header:FrameNode = figma.createFrame();
header.name = 'Title';
header.fills = [{type: 'SOLID', color: colorConverter(null, '4B4C4E')}];
header.paddingLeft = 10;
header.layoutMode = 'VERTICAL';
header.primaryAxisSizingMode = 'FIXED';
header.counterAxisSizingMode = "AUTO";
header.resize(400, 40);
header.primaryAxisAlignItems = "CENTER";
header.counterAxisAlignItems = "MIN";

const key:FrameNode = figma.createFrame();
key.name = value;
key.fills = [{type: 'SOLID', color: colorConverter(null, '212B3B')}];
key.layoutMode = 'VERTICAL';
key.primaryAxisSizingMode = 'AUTO';
key.counterAxisSizingMode = "AUTO";
//key.resize(100, 40);
key.primaryAxisAlignItems = "CENTER";
key.counterAxisAlignItems = "CENTER";

const id:FrameNode = figma.createFrame();
id.name = 'Id';
id.layoutMode = 'VERTICAL';
id.primaryAxisSizingMode = 'AUTO';
id.counterAxisSizingMode = "AUTO";
id.primaryAxisAlignItems = "CENTER";
id.counterAxisAlignItems = "CENTER";
*/

import {Rgb, colorConverter} from "./color";

interface Frame{
    name: string;
    paddingLeft?: number;
    paddingRight?: number;
    paddingTop?: number;
    paddingBottom?: number;
    padding?: number;
    color?: string|Rgb;
    mainAxis?: "NONE" | "HORIZONTAL" | "VERTICAL";
    mainAxisSizing?: "FIXED" | "AUTO";
    altAxisSizing?: "FIXED" | "AUTO";
    resize?: [number, number];
    mainAxisAlign?: "MIN" | "MAX" | "CENTER" | "SPACE_BETWEEN";
    altAxisAlign?: "MIN" | "MAX" | "CENTER";
};


export function createTextNode({
    name,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    padding,
    color='ffffff',
    mainAxis = 'HORIZONTAL',
    mainAxisSizing = 'AUTO',
    altAxisSizing = 'AUTO',
    resize,
    mainAxisAlign= 'CENTER',
    altAxisAlign = 'CENTER'
}:Frame):FrameNode{
    const frame = figma.createFrame();
    frame.name = name;
    frame.fills = [{type: 'SOLID', color: colorConverter(color)}];
    if(paddingLeft)
        frame.paddingLeft = paddingLeft;
    frame.layoutMode = mainAxis;
    frame.primaryAxisSizingMode = mainAxisSizing;
    frame.counterAxisSizingMode = altAxisSizing;
    resize && frame.resize(...resize);
    frame.primaryAxisAlignItems = mainAxisAlign;
    frame.counterAxisAlignItems =  altAxisAlign;
    return frame;
}