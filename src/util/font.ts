interface Fonts{
    family: string,
    style: string
}
export async function callFont(fonts:Fonts[]){
    for(const font of fonts)
        await figma.loadFontAsync(font);
}