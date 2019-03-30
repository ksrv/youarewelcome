const files = require.context('.', false, /\.js$/);
const providers = {};

files.keys().forEach( key => {
  if (key === './index.js') return;
  providers[key.replace(/(\.\/|\.js)/g, '')] = files(key).default;
});


export default providers;
