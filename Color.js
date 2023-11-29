function RGBtoXYZ([R, G, B]) {
  const [var_R, var_G, var_B] = [R, G, B]
      .map(x => x / 255)
      .map(x => x > 0.04045
          ? Math.pow(((x + 0.055) / 1.055), 2.4)
          : x / 12.92)
      .map(x => x * 100)

  // Observer. = 2°, Illuminant = D65
  X = var_R * 0.4124 + var_G * 0.3576 + var_B * 0.1805
  Y = var_R * 0.2126 + var_G * 0.7152 + var_B * 0.0722
  Z = var_R * 0.0193 + var_G * 0.1192 + var_B * 0.9505
  return [X, Y, Z]
}

function XYZtoRGB([X, Y, Z]) {
  //X, Y and Z input refer to a D65/2° standard illuminant.
  //sR, sG and sB (standard RGB) output range = 0 ÷ 255

  let var_X = X / 100
  let var_Y = Y / 100
  let var_Z = Z / 100

  var_R = var_X *  3.2406 + var_Y * -1.5372 + var_Z * -0.4986
  var_G = var_X * -0.9689 + var_Y *  1.8758 + var_Z *  0.0415
  var_B = var_X *  0.0557 + var_Y * -0.2040 + var_Z *  1.0570

  return [var_R, var_G, var_B]
      .map(n => n > 0.0031308
          ? 1.055 * Math.pow(n, (1 / 2.4)) - 0.055
          : 12.92 * n)
      .map(n => n * 255)
}

const ref_X =  95.047;
const ref_Y = 100.000;
const ref_Z = 108.883;

function XYZtoLAB([x, y, z]) {
  const [ var_X, var_Y, var_Z ] = [ x / ref_X, y / ref_Y, z / ref_Z ]
      .map(a => a > 0.008856
          ? Math.pow(a, 1 / 3)
          : (7.787 * a) + (16 / 116))

  CIE_L = (116 * var_Y) - 16
  CIE_a = 500 * (var_X - var_Y)
  CIE_b = 200 * (var_Y - var_Z)

  return [CIE_L, CIE_a, CIE_b]
}

function LABtoXYZ([l, a, b]) {

  const var_Y = (l + 16) / 116
  const var_X = a / 500 + var_Y
  const var_Z = var_Y - b / 200

  const [X, Y, Z] = [var_X, var_Y, var_Z]
      .map(n => Math.pow(n, 3) > 0.008856
          ? Math.pow(n, 3)
          : (n - 16 / 116) / 7.787)

  return [X * ref_X, Y * ref_Y, Z * ref_Z]
}

function RGBtoLAB([R, G, B]) {
  return XYZtoLAB(RGBtoXYZ([R, G, B]));
}

class Color {
  constructor(color) {
    this.color = color;
  }

  set color(hex) {
    this.red = parseInt(hex.slice(1, 3), 16);
    this.green = parseInt(hex.slice(3, 5), 16);
    this.blue = parseInt(hex.slice(5, 7), 16);
  }

  get color() {
    return `#${this.red.toString(16)}${this.green.toString(16)}${this.blue.toString(16)}`;
  }

  calculateColorDistance(distColor) {
    const color1 = RGBtoLAB([this.red, this.green, this.blue]);
    const color2 = RGBtoLAB([distColor.red, distColor.green, distColor.blue]);
    return ((color1[0] - color2[0]) ** 2) +
      ((color1[1] - color2[1]) ** 2) +
      ((color1[2] - color2[2]) ** 2);
  }
}