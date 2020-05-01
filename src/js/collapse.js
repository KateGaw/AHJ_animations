const popoverBlock = document.getElementById('popover_block');
const button = document.getElementById('btn');

const toggle = () => {
  popoverBlock.classList.toggle('hidden');
  popoverBlock.removeEventListener('transitionend', toggle);
};

const collapse = () => {
  button.addEventListener('click', () => {
    if (popoverBlock.classList.contains('hidden')) {
      toggle();
      popoverBlock.style.maxHeight = `${popoverBlock.scrollHeight}px`;
    } else {
      popoverBlock.style.maxHeight = 0;
      popoverBlock.addEventListener('transitionend', toggle);
    }
  });
};

export default collapse;
