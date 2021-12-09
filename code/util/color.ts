export interface Rgb {
    r: number;
    g: number;
    b: number;
  }
  
export function colorConverter(color:Rgb|string){
    if(typeof color === 'string'){
      if(color.length !== 6)
        throw Error('hex colors must have 6 characters');
      const r = parseInt(color.slice(0,2), 16)/255;
      const g = parseInt(color.slice(2,4), 16)/255;
      const b = parseInt(color.slice(4,6), 16)/255;
      return {r,g,b};
    }
    else{
      color.r /= 255;
      color.g /= 255;
      color.b /= 255;
      return color;
    }
}