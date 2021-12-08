/*const fk = figma.createText();
    fk.fontName = { family: "IBM Plex Mono", style: "SemiBold" };
    fk.fontSize = 10;
    fk.textAlignVertical = "CENTER";
    fk.textAlignHorizontal = "CENTER";
    // fk.textAutoResize = "WIDTH_AND_HEIGHT";
    fk.resizeWithoutConstraints(67,13);
    fk.name = 'fk';
    fk.characters = 'FK';
    fk.fills = [{type: 'SOLID', color: colorConverter(null, '1371FF')}];
    fk.autoRename = true;
  
    const keyName = figma.createText();
    keyName.fontName = { family: "IBM Plex Mono", style: "Light" };
    keyName.fontSize = 9;
    keyName.characters = value;
    keyName.textAlignVertical = "CENTER";
    keyName.textAlignHorizontal = "CENTER";
    keyName.textAutoResize = "WIDTH_AND_HEIGHT";
    keyName.name = value;
    keyName.fills = [{type: 'SOLID', color: colorConverter('4E94FF')}];
    keyName.autoRename = true;

    const text = figma.createText();
    text.fontName = { family: "Work Sans", style: "SemiBold" };
    text.fontSize = 16;
    text.characters = "milk"
    text.textAlignVertical = "CENTER";
    text.textAlignHorizontal = "LEFT";
    text.textAutoResize = "WIDTH_AND_HEIGHT";
    text.name = tableName;
    text.fills = [{type: 'SOLID', color: colorConverter(null, 'ffffff')}]
    text.autoRename = true;
*/
import {Rgb, colorConverter} from "./color";

interface Text{
    family?: string;
    style?: string;
    fontSize?: number;
    alignHorizontal?:"CENTER" | "LEFT" | "RIGHT" | "JUSTIFIED";
    resizeWithoutConstraints?: [number, number];
    //type?: string;
    color?: string|Rgb;
    alignVertical?:"TOP" | "CENTER" | "BOTTOM";
    boxAutoResize?:string;
    autoRename?: boolean;
    name:string;
    characters: string;

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
    autoRename=true,
    characters
}:Text):TextNode{
    const text = figma.createText();
    text.fontName = {family, style};
    text.fontSize = fontSize;
    text.textAlignHorizontal = alignHorizontal;
    text.textAlignVertical = alignVertical;
    text.name = name;
    text.autoRename = autoRename;
    text.characters = characters;
    text.fills = [{type:"SOLID", color: colorConverter('4E94FF')}]
    resizeWithoutConstraints && text.resizeWithoutConstraints(...resizeWithoutConstraints);
    return text;
}