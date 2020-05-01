const chatForm = document.getElementById('chat_form');
const button = document.getElementById('btn_chat');
const close = document.getElementById('close_btn');


const callback = () => {
  button.addEventListener('click', () => {
    if (chatForm.classList.contains('chat_form_hide')) {
      chatForm.classList.remove('chat_form_hide');
      button.classList.add('btn_chat_hide');
    }
  });

  close.addEventListener('click', () => {
    if (!chatForm.classList.contains('chat_form_hide')) {
      chatForm.classList.add('chat_form_hide');
      button.classList.remove('btn_chat_hide');
    }
  });
};

export default callback;
