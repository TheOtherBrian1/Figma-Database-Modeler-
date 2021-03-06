import { colorConverter } from "./color";
  
  
export function createTable(tableName){
    const table:FrameNode = figma.createFrame();
    //table.setPluginData(tableName);
    table.name = tableName;
    table.clipsContent = true;
    table.cornerRadius = 5;
    table.layoutMode = 'VERTICAL';
    table.fills = [{type: 'SOLID', color: colorConverter('4E4F51')}];
    //equivalent to hugs content
    table.primaryAxisSizingMode = 'AUTO';
    table.counterAxisSizingMode = 'AUTO';
    return table;
}
  

export function createTitle(tableName:string){
    const header:FrameNode = figma.createFrame();
    header.name = 'Title';
    header.fills = [{type: 'SOLID', color: colorConverter('4B4C4E')}];
    header.paddingLeft = 10;
    header.layoutMode = 'VERTICAL';
    header.primaryAxisSizingMode = 'FIXED';
    header.counterAxisSizingMode = "AUTO";
    header.resize(400, 40);
    header.primaryAxisAlignItems = "CENTER";
    header.counterAxisAlignItems = "MIN";
  
    const text = figma.createText();
    text.fontName = { family: "Work Sans", style: "SemiBold" };
    text.fontSize = 16;
    text.characters = "milk"
    text.textAlignVertical = "CENTER";
    text.textAlignHorizontal = "LEFT";
    text.textAutoResize = "WIDTH_AND_HEIGHT";
    text.name = tableName;
    text.fills = [{type: 'SOLID', color: colorConverter('ffffff')}]
    text.autoRename = true;
  
    header.appendChild(text);
    return header;
}
  
  
export function createKey(value:string = 'N/A'){
    const key:FrameNode = figma.createFrame();
    key.name = value;
    key.fills = [{type: 'SOLID', color: colorConverter('212B3B')}];
    key.layoutMode = 'VERTICAL';
    key.primaryAxisSizingMode = 'AUTO';
    key.counterAxisSizingMode = "AUTO";
    //key.resize(100, 40);
    key.primaryAxisAlignItems = "CENTER";
    key.counterAxisAlignItems = "CENTER";
  
    const fk = figma.createText();
    fk.fontName = { family: "IBM Plex Mono", style: "SemiBold" };
    fk.fontSize = 10;
    fk.textAlignVertical = "CENTER";
    fk.textAlignHorizontal = "CENTER";
    // fk.textAutoResize = "WIDTH_AND_HEIGHT";
    fk.resizeWithoutConstraints(67,13);
    fk.name = 'fk';
    fk.characters = 'FK';
    fk.fills = [{type: 'SOLID', color: colorConverter('1371FF')}];
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
  
    key.appendChild(fk);
    key.appendChild(keyName);
  
    return key;
}
  
export function createFK(tableName:string){
    const foreignKey:FrameNode = figma.createFrame();
    foreignKey.name = 'Foreign Keys';
    foreignKey.fills = [{type: 'SOLID', color: colorConverter('212B3B')}];
    foreignKey.layoutMode = 'VERTICAL';
    foreignKey.primaryAxisSizingMode = 'AUTO';
    foreignKey.counterAxisSizingMode = "AUTO";
    foreignKey.primaryAxisAlignItems = "CENTER";
    foreignKey.counterAxisAlignItems = "CENTER";
  
    const key = createKey();
    foreignKey.appendChild(key);

  
    return foreignKey;
}
  





export function createId(tableName:string){
    const id:FrameNode = figma.createFrame();
    id.name = 'Id';
    id.layoutMode = 'VERTICAL';
    id.primaryAxisSizingMode = 'AUTO';
    id.counterAxisSizingMode = "AUTO";
    id.primaryAxisAlignItems = "CENTER";
    id.counterAxisAlignItems = "CENTER";
    
    const idTitle = figma.createText();
    idTitle.fontName = { family: "IBM Plex Mono", style: "SemiBold" };
    idTitle.fontSize = 14;
    idTitle.textAlignVertical = "CENTER";
    idTitle.textAlignHorizontal = "CENTER";
    idTitle.characters = 'Temp';
    idTitle.fills = [{type: 'SOLID', color: colorConverter('ffffff')}];
    idTitle.autoRename = true;
  
    id.appendChild(idTitle);    
    return id;
}