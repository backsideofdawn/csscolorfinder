// Set appropriate color theme
const colorTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light';

document.documentElement.setAttribute('data-bs-theme', colorTheme);
document.getElementById('favicon').setAttribute('href', `favicon-${colorTheme}.ico`);

const colorPicker = document.getElementById('color-picker');

const mainColor = new Color(colorPicker.value);

colorPicker.onchange = calculateColors;
document.body.onload = calculateColors;

const colorContainer = document.getElementById('color-container');

function calculateColors() {
  mainColor.color = colorPicker.value;
  cssColors.sort(compareColors);
  colorContainer.replaceChildren();
  let place = 1
  for (let color of cssColors.slice(0, 5)) {
    colorContainer.insertAdjacentHTML('beforeend', 
    `<div class="card container m-0 p-2" style="width: 70vw;">
    <div class="row">
      <div class="col">#${place}</div>
      <div class="col"><div style="background-color: ${color.name}; height: 100%; width: 20vw; border-radius: 5px;"></div></div>
      <div class="col">${color.name}</div>
    </div>
  </div>`
    );
    place++;
  }
}

const distances = {};

function compareColors(color1, color2) {
  const color1Dist = mainColor.calculateColorDistance(new Color(color1['color']));
  const color2Dist = mainColor.calculateColorDistance(new Color(color2['color']));
  
  if (color1Dist < color2Dist) {
    return -1;
  } else if (color1Dist > color2Dist) {
    return 1;
  } else {
    return 0;
  }
}