const cssColors = [
  {
    "name": "aliceblue",
    "color": "#f0f8ff"
  },
  {
    "name": "antiquewhite",
    "color": "#faebd7"
  },
  {
    "name": "aqua",
    "color": "#00ffff"
  },
  {
    "name": "aquamarine",
    "color": "#7fffd4"
  },
  {
    "name": "azure",
    "color": "#f0ffff"
  },
  {
    "name": "beige",
    "color": "#f5f5dc"
  },
  {
    "name": "bisque",
    "color": "#ffe4c4"
  },
  {
    "name": "black",
    "color": "#000000"
  },
  {
    "name": "blanchedalmond",
    "color": "#ffebcd"
  },
  {
    "name": "blue",
    "color": "#0000ff"
  },
  {
    "name": "blueviolet",
    "color": "#8a2be2"
  },
  {
    "name": "brown",
    "color": "#a52a2a"
  },
  {
    "name": "burlywood",
    "color": "#deb887"
  },
  {
    "name": "cadetblue",
    "color": "#5f9ea0"
  },
  {
    "name": "chartreuse",
    "color": "#7fff00"
  },
  {
    "name": "chocolate",
    "color": "#d2691e"
  },
  {
    "name": "coral",
    "color": "#ff7f50"
  },
  {
    "name": "cornflowerblue",
    "color": "#6495ed"
  },
  {
    "name": "cornsilk",
    "color": "#fff8dc"
  },
  {
    "name": "crimson",
    "color": "#dc143c"
  },
  {
    "name": "cyan",
    "color": "#00ffff"
  },
  {
    "name": "darkblue",
    "color": "#00008b"
  },
  {
    "name": "darkcyan",
    "color": "#008b8b"
  },
  {
    "name": "darkgoldenrod",
    "color": "#b8860b"
  },
  {
    "name": "darkgreen",
    "color": "#006400"
  },
  {
    "name": "darkgrey",
    "color": "#a9a9a9"
  },
  {
    "name": "darkkhaki",
    "color": "#bdb76b"
  },
  {
    "name": "darkmagenta",
    "color": "#8b008b"
  },
  {
    "name": "darkolivegreen",
    "color": "#556b2f"
  },
  {
    "name": "darkorange",
    "color": "#ff8c00"
  },
  {
    "name": "darkorchid",
    "color": "#9932cc"
  },
  {
    "name": "darkred",
    "color": "#8b0000"
  },
  {
    "name": "darksalmon",
    "color": "#e9967a"
  },
  {
    "name": "darkseagreen",
    "color": "#8fbc8f"
  },
  {
    "name": "darkslateblue",
    "color": "#483d8b"
  },
  {
    "name": "darkslategrey",
    "color": "#2f4f4f"
  },
  {
    "name": "darkturquoise",
    "color": "#00ced1"
  },
  {
    "name": "darkviolet",
    "color": "#9400d3"
  },
  {
    "name": "deeppink",
    "color": "#ff1493"
  },
  {
    "name": "deepskyblue",
    "color": "#00bfff"
  },
  {
    "name": "dimgrey",
    "color": "#696969"
  },
  {
    "name": "dodgerblue",
    "color": "#1e90ff"
  },
  {
    "name": "firebrick",
    "color": "#b22222"
  },
  {
    "name": "floralwhite",
    "color": "#fffaf0"
  },
  {
    "name": "forestgreen",
    "color": "#228b22"
  },
  {
    "name": "fuchsia",
    "color": "#ff00ff"
  },
  {
    "name": "gainsboro",
    "color": "#dcdcdc"
  },
  {
    "name": "ghostwhite",
    "color": "#f8f8ff"
  },
  {
    "name": "goldenrod",
    "color": "#daa520"
  },
  {
    "name": "gold",
    "color": "#ffd700"
  },
  {
    "name": "green",
    "color": "#008000"
  },
  {
    "name": "greenyellow",
    "color": "#adff2f"
  },
  {
    "name": "grey",
    "color": "#808080"
  },
  {
    "name": "honeydew",
    "color": "#f0fff0"
  },
  {
    "name": "hotpink",
    "color": "#ff69b4"
  },
  {
    "name": "indianred",
    "color": "#cd5c5c"
  },
  {
    "name": "indigo",
    "color": "#4b0082"
  },
  {
    "name": "ivory",
    "color": "#fffff0"
  },
  {
    "name": "khaki",
    "color": "#f0e68c"
  },
  {
    "name": "lavenderblush",
    "color": "#fff0f5"
  },
  {
    "name": "lavender",
    "color": "#e6e6fa"
  },
  {
    "name": "lawngreen",
    "color": "#7cfc00"
  },
  {
    "name": "lemonchiffon",
    "color": "#fffacd"
  },
  {
    "name": "lightblue",
    "color": "#add8e6"
  },
  {
    "name": "lightcoral",
    "color": "#f08080"
  },
  {
    "name": "lightcyan",
    "color": "#e0ffff"
  },
  {
    "name": "lightgoldenrodyellow",
    "color": "#fafad2"
  },
  {
    "name": "lightgreen",
    "color": "#90ee90"
  },
  {
    "name": "lightgrey",
    "color": "#d3d3d3"
  },
  {
    "name": "lightpink",
    "color": "#ffb6c1"
  },
  {
    "name": "lightsalmon",
    "color": "#ffa07a"
  },
  {
    "name": "lightseagreen",
    "color": "#20b2aa"
  },
  {
    "name": "lightskyblue",
    "color": "#87cefa"
  },
  {
    "name": "lightslategrey",
    "color": "#778899"
  },
  {
    "name": "lightsteelblue",
    "color": "#b0c4de"
  },
  {
    "name": "lightyellow",
    "color": "#ffffe0"
  },
  {
    "name": "lime",
    "color": "#00ff00"
  },
  {
    "name": "limegreen",
    "color": "#32cd32"
  },
  {
    "name": "linen",
    "color": "#faf0e6"
  },
  {
    "name": "magenta",
    "color": "#ff00ff"
  },
  {
    "name": "maroon",
    "color": "#800000"
  },
  {
    "name": "mediumaquamarine",
    "color": "#66cdaa"
  },
  {
    "name": "mediumblue",
    "color": "#0000cd"
  },
  {
    "name": "mediumorchid",
    "color": "#ba55d3"
  },
  {
    "name": "mediumpurple",
    "color": "#9370db"
  },
  {
    "name": "mediumseagreen",
    "color": "#3cb371"
  },
  {
    "name": "mediumslateblue",
    "color": "#7b68ee"
  },
  {
    "name": "mediumspringgreen",
    "color": "#00fa9a"
  },
  {
    "name": "mediumturquoise",
    "color": "#48d1cc"
  },
  {
    "name": "mediumvioletred",
    "color": "#c71585"
  },
  {
    "name": "midnightblue",
    "color": "#191970"
  },
  {
    "name": "mintcream",
    "color": "#f5fffa"
  },
  {
    "name": "mistyrose",
    "color": "#ffe4e1"
  },
  {
    "name": "moccasin",
    "color": "#ffe4b5"
  },
  {
    "name": "navajowhite",
    "color": "#ffdead"
  },
  {
    "name": "navy",
    "color": "#000080"
  },
  {
    "name": "oldlace",
    "color": "#fdf5e6"
  },
  {
    "name": "olive",
    "color": "#808000"
  },
  {
    "name": "olivedrab",
    "color": "#6b8e23"
  },
  {
    "name": "orange",
    "color": "#ffa500"
  },
  {
    "name": "orangered",
    "color": "#ff4500"
  },
  {
    "name": "orchid",
    "color": "#da70d6"
  },
  {
    "name": "palegoldenrod",
    "color": "#eee8aa"
  },
  {
    "name": "palegreen",
    "color": "#98fb98"
  },
  {
    "name": "paleturquoise",
    "color": "#afeeee"
  },
  {
    "name": "palevioletred",
    "color": "#db7093"
  },
  {
    "name": "papayawhip",
    "color": "#ffefd5"
  },
  {
    "name": "peachpuff",
    "color": "#ffdab9"
  },
  {
    "name": "peru",
    "color": "#cd853f"
  },
  {
    "name": "pink",
    "color": "#ffc0cb"
  },
  {
    "name": "plum",
    "color": "#dda0dd"
  },
  {
    "name": "powderblue",
    "color": "#b0e0e6"
  },
  {
    "name": "purple",
    "color": "#800080"
  },
  {
    "name": "rebeccapurple",
    "color": "#663399"
  },
  {
    "name": "red",
    "color": "#ff0000"
  },
  {
    "name": "rosybrown",
    "color": "#bc8f8f"
  },
  {
    "name": "royalblue",
    "color": "#4169e1"
  },
  {
    "name": "saddlebrown",
    "color": "#8b4513"
  },
  {
    "name": "salmon",
    "color": "#fa8072"
  },
  {
    "name": "sandybrown",
    "color": "#f4a460"
  },
  {
    "name": "seagreen",
    "color": "#2e8b57"
  },
  {
    "name": "seashell",
    "color": "#fff5ee"
  },
  {
    "name": "sienna",
    "color": "#a0522d"
  },
  {
    "name": "silver",
    "color": "#c0c0c0"
  },
  {
    "name": "skyblue",
    "color": "#87ceeb"
  },
  {
    "name": "slateblue",
    "color": "#6a5acd"
  },
  {
    "name": "slategrey",
    "color": "#708090"
  },
  {
    "name": "snow",
    "color": "#fffafa"
  },
  {
    "name": "springgreen",
    "color": "#00ff7f"
  },
  {
    "name": "steelblue",
    "color": "#4682b4"
  },
  {
    "name": "tan",
    "color": "#d2b48c"
  },
  {
    "name": "teal",
    "color": "#008080"
  },
  {
    "name": "thistle",
    "color": "#d8bfd8"
  },
  {
    "name": "tomato",
    "color": "#ff6347"
  },
  {
    "name": "turquoise",
    "color": "#40e0d0"
  },
  {
    "name": "violet",
    "color": "#ee82ee"
  },
  {
    "name": "wheat",
    "color": "#f5deb3"
  },
  {
    "name": "white",
    "color": "#ffffff"
  },
  {
    "name": "whitesmoke",
    "color": "#f5f5f5"
  },
  {
    "name": "yellow",
    "color": "#ffff00"
  },
  {
    "name": "yellowgreen",
    "color": "#9acd32"
  }
]