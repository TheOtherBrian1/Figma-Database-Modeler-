
import {Rgb, colorConverter} from "./color";

export interface Text{
    family?: string;
    style?: string;
    fontSize?: number;
    alignHorizontal?:"CENTER" | "LEFT" | "RIGHT" | "JUSTIFIED";
    resizeWithoutConstraints?: [number, number];
    resize?: [number, number] | null;
    //type?: string;
    color?: string|Rgb;
    alignVertical?:"TOP" | "CENTER" | "BOTTOM";
    boxAutoResize?:  'WIDTH_AND_HEIGHT' | "NONE" | "HEIGHT";
    autoRename?: boolean;
    name:string;
    characters: string;
    textCase?: "ORIGINAL" | "UPPER" | "LOWER" | "TITLE";
};


export function createTextNode({
    family = "IBM Plex Mono",
    style = "SemiBold",
    fontSize=16,
    alignHorizontal = "CENTER",
    resizeWithoutConstraints = null,
    //type= 'SOLID', 
    color = 'ffffff',
    alignVertical = "CENTER",
    boxAutoResize = 'WIDTH_AND_HEIGHT',
    name,
    resize = null,
    autoRename=true,
    characters,
    textCase="ORIGINAL"
}:Text):TextNode{
    const text = figma.createText();
    text.fontName = {family, style};
    text.fontSize = fontSize;
    text.textAlignHorizontal = alignHorizontal;
    text.textAlignVertical = alignVertical;
    text.name = name;
    if (resize)
        text.resize(...resize);
    text.textAutoResize = boxAutoResize;
    text.autoRename = autoRename;
    text.characters = characters;
    text.textCase = textCase;
    text.fills = [{type:"SOLID", color: colorConverter(color)}]
    resizeWithoutConstraints && text.resizeWithoutConstraints(...resizeWithoutConstraints);
    return text;
}