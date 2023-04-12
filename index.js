import createColor from 'my-colors';
import randomColor from 'randomcolor';

const hue = process.argv[2] ? process.argv[2] : 'random';
const luminosity = process.argv[3] ? process.argv[3] : 'random';

// create the color with randomColor

const color = randomColor({
  luminosity: luminosity,
  hue: hue,
});

const output = `###############################
###############################
###############################
#####                     #####
#####       ${color}       #####
#####                     #####
###############################
###############################
###############################`;

console.log(createColor(color)(output));
