const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name=email]');
const message = document.querySelector('textarea[name=message]');
const localStorageKey = 'feedback-form-state';
const savedInfo = localStorage.getItem('feedback-form-state');
let formdata = {
  email_user: '',
  message_user: '',
};

checkData();

let { email_user, message_user } = formdata;

form.addEventListener('submit', handlerSent);
form.addEventListener('input', evt => {
  if (evt.target === email) {
    formdata.email_user = evt.target.value;
  } else if (evt.target === message) {
    formdata.message_user = evt.target.value;
  }
  localStorage.setItem(localStorageKey, JSON.stringify(formdata));
});

function checkData() {
  if (savedInfo) {
    const parsedInfo = JSON.parse(savedInfo);
    formdata.email_user = parsedInfo.email_user;
    formdata.message_user = parsedInfo.message_user;
    email.value = parsedInfo.email_user;
    message.value = parsedInfo.message_user;
  } else {
    email.value = '';
    message.value = '';
  }
}

function handlerSent(evt) {
  evt.preventDefault();
  if (formdata.email_user == '' || formdata.message_user == '') {
    alert('Fill please all fields');
  } else {
    console.log(formdata);
    localStorage.clear();
    form.reset();
    formdata = { email: '', message: '' };
    form.reset();
  }
}
