const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

let dom;
let document;
let window;

describe('addContact function', () => {
  beforeEach(() => {
    dom = new JSDOM(html);
    document = dom.window.document;
    window = dom.window;

    global.document = document;
    global.window = window;

    const script = require('../6-manipulandoDOM.js');
  });
});
