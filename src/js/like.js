const button = document.getElementById('btn_like');
const imgBlock = document.querySelector('.img_block');

const like = () => {
  button.addEventListener('click', (event) => {
    event.preventDefault();

    const timerId = setInterval(() => {
      const rand = Math.floor(Math.random() * 4) + 1;

      const img = document.createElement('img');
      img.src = 'heart.png';
      img.className = 'like_img';
      img.style.animationName = `heart_${rand}`;

      imgBlock.appendChild(img);
      img.addEventListener('animationend', () => {
        imgBlock.removeChild(img);
      });
    }, 200);

    setTimeout(() => {
      clearInterval(timerId);
    }, 2000);
  });
};

export default like;
