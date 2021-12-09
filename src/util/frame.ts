import {Rgb, colorConverter} from "./color";

export interface Frame{
    name: string;
    paddingDirection?: [number, number, number, number];
    padding?: number;
    clipsContent?: boolean;
    color?: string|Rgb;
    mainAxis?: "NONE" | "HORIZONTAL" | "VERTICAL";
    mainAxisSizing?: "FIXED" | "AUTO";
    altAxisSizing?: "FIXED" | "AUTO";
    resize?: [number, number];
    mainAxisAlign?: "MIN" | "MAX" | "CENTER" | "SPACE_BETWEEN";
    altAxisAlign?: "MIN" | "MAX" | "CENTER";
    counterAxisSizingMode?: "FIXED" | "AUTO";
    primaryAxisSizingMode?: "FIXED" | "AUTO";
    cornerRadius?: number
    layoutAlign?: "MIN" | "CENTER" | "MAX" | "STRETCH" | "INHERIT";
    itemSpacing?: number
};

const paddingClock = ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'];

export function createFrameNode({
    name,
    clipsContent= false,
    paddingDirection = [0,0,0,0],
    color='ffffff',
    mainAxis = 'HORIZONTAL',
    mainAxisSizing = 'AUTO',
    altAxisSizing = 'AUTO',
    resize,
    mainAxisAlign= 'CENTER',
    altAxisAlign = 'CENTER',
    layoutAlign = 'STRETCH',
    cornerRadius = 0,
    itemSpacing
}:Frame):FrameNode{
    const frame = figma.createFrame();
    frame.name = name;
    frame.clipsContent = clipsContent;
    frame.fills = [{type: 'SOLID', color: colorConverter(color)}];
    for(let i = 0; i < 4; i++)
        frame[paddingClock[i]] = paddingDirection[i];
    if (itemSpacing)
        frame.itemSpacing = itemSpacing;
    frame.layoutMode = mainAxis;
    frame.primaryAxisSizingMode = mainAxisSizing;
    frame.counterAxisSizingMode = altAxisSizing;
    resize && frame.resize(...resize);
    frame.cornerRadius = cornerRadius;
    frame.primaryAxisAlignItems = mainAxisAlign;
    frame.counterAxisAlignItems =  altAxisAlign;
    frame.layoutAlign = layoutAlign;
    return frame;
}