
/*
=== Map Marker Awesome ===
https://github.com/jawj/MapMarkerAwesome
Copyright (C) 2017 George MacKerron, released under MIT licence
Except Font Awesome icons, subject to orignal licence: http://fontawesome.io/
*/

const mapMarkerAwesomeFactory = (function (dataURI: boolean) {

  interface FontData {
    codes: { [key: string]: string };
    paths: { [key: string]: [number, string] };
  }
  type SVG = string;

  type Template = string[];
  interface TemplateValues {
    [key: string]: string | number;
  }

  interface RGBA extends TemplateValues {
    r: number;
    g: number;
    b: number;
    a?: number;
  }
  type Color = string | RGBA;
  
  const fontAwesome: FontData = {
    "codes": {
      "graduation-cap": "\uf19d",
      "university": "\uf19c",
      "user-graduate": "\uf501",
      "school": "\uf549",
    },
    "paths": {
      "\uf19d": [
      xf19d,
      "M622.34 294.8c23.5498 -7.24023 23.5498 -38.3594 0 -45.5996l-278.95 -85.7002c-20.3496 -6.25 -37.7295 -2.78027 -46.79 0l-195.569 60.0898c-12.25 -8.41992 -19.9307 -21.7002 -20.6904 -36.7197c9.19043 -5.62012 15.6602 -15.2998 15.6602 -26.8701
c0 -10.7803 -5.67969 -19.8496 -13.8604 -25.6504l25.5303 -114.88c2.21973 -9.98926 -5.37988 -19.4697 -15.6201 -19.4697h-56.1094c-10.2305 0 -17.8301 9.48047 -15.6104 19.4697l25.5303 114.88c-8.18066 5.80078 -13.8604 14.8701 -13.8604 25.6504
c0 11.8896 6.78027 21.8496 16.4102 27.3701c0.649414 17.6201 7.20996 33.71 17.8799 46.8994l-48.6299 14.9404c-23.54 7.23047 -23.54 38.3604 0 45.5898l278.95 85.7002c15.1895 4.66992 31.5898 4.66992 46.79 0zM352.79 132.91l145.03 44.5596l14.1797 -113.47
c0 -35.3496 -85.96 -64 -192 -64s-192 28.6504 -192 64l14.1797 113.46l145.021 -44.5498c12.75 -3.91992 37.0596 -8.75977 65.5898 0z"
    ],
    "\uf19c": [
      xf19c,
      "M496 320v-16c0 -4.41504 -3.58496 -8 -8 -8h-24v-12c0 -6.62695 -5.37305 -12 -12 -12h-392c-6.62695 0 -12 5.37305 -12 12v12h-24c-4.41504 0 -8 3.58496 -8 8v16c0 3.33398 2.03906 6.19141 4.94141 7.3916l232 88
c0.94043 0.389648 1.97168 0.605469 3.05371 0.605469c1.08105 0 2.12305 -0.21582 3.06348 -0.605469l232 -88c2.90234 -1.2002 4.94141 -4.05762 4.94141 -7.3916zM472 16c13.2549 0 24 -10.7451 24 -24v-16c0 -4.41504 -3.58496 -8 -8 -8h-464
c-4.41504 0 -8 3.58496 -8 8v16c0 13.2549 10.7451 24 24 24h432zM96 256h64v-192h64v192h64v-192h64v192h64v-192h36c6.62695 0 12 -5.37305 12 -12v-20h-416v20c0 6.62695 5.37305 12 12 12h36v192z"
    ],
    "\uf501": [
      xf501,
      "M319.4 127.4c71.5 -3.10059 128.6 -61.6006 128.6 -133.801v-9.59961c0 -26.5 -21.5 -48 -48 -48h-352c-26.5 0 -48 21.5 -48 48v9.59961c0 72.2002 57.0996 130.7 128.6 133.801l95.4004 -95.4004zM13.5996 368.2c-18.0996 4.39941 -18.0996 27.2002 0 31.5996
l190.601 45.9004c13 3.09961 26.7002 3.09961 39.7002 0l190.399 -46c18.2002 -4.40039 18.2002 -27.1006 0 -31.5l-96.2998 -23.2002c8.7002 -17.2002 14 -36.4004 14 -57c0 -70.7002 -57.2998 -128 -128 -128s-128 57.2998 -128 128c0 20.5996 5.40039 39.7998 14 57
l-66 15.9004v-52.6006c7 -4.2002 12 -11.5 12 -20.2998c0 -8.40039 -4.59961 -15.4004 -11.0996 -19.7002l15.5996 -62.2998c1.7002 -6.90039 -2.09961 -14 -7.59961 -14h-41.8008c-5.5 0 -9.2998 7.09961 -7.59961 14l15.5996 62.2998
c-6.5 4.2998 -11.0996 11.2998 -11.0996 19.7002c0 8.7998 5 16.0996 12 20.2998v58.4004z"
    ],
    "\uf549": [
      xf549,
      "M0 224c0 17.6699 14.3301 32 32 32h64v-320h-80c-8.83984 0 -16 7.16016 -16 16v272zM360 272c4.41992 0 8 -3.58008 8 -8v-16c0 -4.41992 -3.58008 -8 -8 -8h-48c-4.41992 0 -8 3.58008 -8 8v64c0 4.41992 3.58008 8 8 8h16c4.41992 0 8 -3.58008 8 -8v-40h24z
M497.75 335.96c8.90039 -5.92969 14.25 -15.9297 14.25 -26.6299v-373.33h-128v144c0 8.83984 -7.16016 16 -16 16h-96c-8.83984 0 -16 -7.16016 -16 -16v-144h-128v373.34c0.00195312 11.1084 5.64453 20.8828 14.25 26.6201l160 106.67
c5.0752 3.38086 11.2324 5.35156 17.7822 5.35156s12.6426 -1.9707 17.7178 -5.35156zM320 192c44.1797 0 80 35.8203 80 80s-35.8203 80 -80 80s-80 -35.8203 -80 -80s35.8203 -80 80 -80zM608 256c17.6699 0 32 -14.3301 32 -32v-272c0 -8.83984 -7.16016 -16 -16 -16h-80
v320h64z"
    ]
    }
  };

  const maybeEscape = dataURI ? (s: string) => encodeURIComponent(s) : (s: string) => s;

  function templateFromString(str: string): Template {
    const template = str.split('`');
    for (let i = 0, len = template.length; i < len; i += 2) template[i] = maybeEscape(template[i]);
    return template;
  }
  function applyTemplate(template: Template, values: TemplateValues): string {
    const result = template.slice();
    for (let i = 1, len = template.length; i < len; i += 2) result[i] = String(values[result[i]]);
    return result.join('');
  }
  
  const svgTemplate = templateFromString('<svg xmlns="http://www.w3.org/2000/svg" width="`width`" height="`height`" viewBox="0 0 `width` `height`"><g fill="none" fill-rule="evenodd" transform="scale(`scale`)"><path d="M22 11c0 1.42-.226 2.585-.677 3.496l-7.465 15.117c-.218.43-.543.77-.974 1.016-.43.246-.892.37-1.384.37-.492 0-.954-.124-1.384-.37-.43-.248-.75-.587-.954-1.017L1.677 14.496C1.227 13.586 1 12.42 1 11c0-2.76 1.025-5.117 3.076-7.07C6.126 1.977 8.602 1 11.5 1c2.898 0 5.373.977 7.424 2.93C20.974 5.883 22 8.24 22 11z" stroke="`stroke`" stroke-width=".6" fill="`fill`" fill-rule="nonzero"/>`glyph`</g></svg>');

  const pathTemplate = templateFromString('<path transform="`transform`" d="`path`" fill="`fill`"/>');
  const rgbTemplate = templateFromString('rgb(`r`,`g`,`b`)');
  const rgbaTemplate = templateFromString('rgba(`r`,`g`,`b`,`a`)');

  const processColor = (c: Color): string =>
    typeof c == 'string' ? maybeEscape(c) :
      applyTemplate(c.a == null ? rgbTemplate : rgbaTemplate, c);

  const defaultHeight = 42, originalHeight = 32, originalWidth = 23;

  return function (code: string | null, {
    icon = '#fff',
    fill = '#4182c3',
    stroke = '#fff',
    height = defaultHeight,
    iconTransform = ''
  }: {
      icon?: Color,
      fill?: Color,
      stroke?: Color,
      height?: number | string,
      iconTransform?: string
    } = {}): SVG {
    
    let horizAdjX: number, path: string;
    if (code) {
      const glyph = fontAwesome.paths[code] || fontAwesome.paths[fontAwesome.codes[code.replace(/^fa-/, '')]];
      if (!glyph) throw new Error(`Unknown FontAwesome character: ${code}`);
      [horizAdjX, path] = glyph;
    }
    const transform = `translate(11.5 10) ${iconTransform} scale(0.006 -0.006) translate(${horizAdjX * -0.5}, -768)`;

    if (typeof height == 'string') height = parseFloat(height);
    const scale = height / originalHeight;
    const width = Math.round(originalWidth * scale);
    
    const svg = applyTemplate(svgTemplate, {
      width: width, height: height, scale: scale,
      fill: processColor(fill),
      stroke: processColor(stroke),
      glyph: code ? applyTemplate(pathTemplate, {
        transform: maybeEscape(transform),
        path: maybeEscape(path),
        fill: processColor(icon)
      }) : ''
    });
    return dataURI ? 'data:image/svg+xml,' + svg : svg;
  }
});

declare const module: any;
if (typeof module == 'object') module.exports = mapMarkerAwesomeFactory;
