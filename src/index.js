import DrawButton from './DrawButton.js';
import './index.scss';

const init = () => {
  const screen = document.createElement('div');
  screen.id = 'screen';
  document.body.append(screen);
};

init();

const button = new DrawButton();
button.setScreen(document.getElementById('screen'));
button.appendToParent(document.body);