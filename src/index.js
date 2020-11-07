import DrawButton from './DrawButton.js';
import './index.css';

const button = new DrawButton();
button.setScreen(document.getElementById('screen'));
button.appendToParent(document.body);