import { configure } from '@storybook/react';
import '../src/style/index.scss';

// automatically import all files ending in *.stories.js
const req = require.context('./', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
