const formEl = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

formEl.addEventListener('submit', onSubmit);

formEl.addEventListener('input', () => {
  if (event.target === emailInput || event.target === messageInput) {
    const formData = {
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
});

function onSubmit(event) {
  event.preventDefault();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  if (email && message) {
    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';
  } else {
    alert('Заповніть усі поля');
  }
}
function dataStorage() {
  const savedFormData = localStorage.getItem('feedback-form-state');
  if (savedFormData) {
    const { email, message } = JSON.parse(savedFormData);
    emailInput.value = email;
    messageInput.value = message;
  }
}
dataStorage();
