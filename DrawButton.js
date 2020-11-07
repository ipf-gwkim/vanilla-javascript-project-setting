class DrawButton {
  constructor() {
    this.button = document.createElement('button');
    this.button.classList.add('draw-button');
    this.button.textContent = '클릭';
  }

  setScreen(target) {
    this.target = target;
  }

  appendToParent(parent) {
    this.button.addEventListener('click', () => {
      this.target.append('클릭됨');
    });
    parent.append(this.button);
  }
}

export default DrawButton;