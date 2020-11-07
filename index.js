import DrawButton from './DrawButton.js';

const button = new DrawButton();
button.setScreen(document.getElementById('screen'));
button.appendToParent(document.body);