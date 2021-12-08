interface Rgb {
    r: number;
    g: number;
    b: number;
  }
  
export function colorConverter(color:Rgb|null, hex:null|string='000000'){
    if(!color){
      const r = parseInt(hex.slice(0,2), 16);
      const g = parseInt(hex.slice(2,4), 16);
      const b = parseInt(hex.slice(4,6), 16);
      return {r:r/255, g:g/255, b:b/255};
    }
    else{
      color.r /= 255;
      color.g /= 255;
      color.b /= 255;
      return color;
    }
}