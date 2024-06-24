// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

const delay = document.querySelector('input[name=delay]');

form.addEventListener('submit', handlerSent);

function handlerSent(evt) {
  evt.preventDefault();
  const delayValue = parseInt(delay.value);
  const state = evt.target.querySelector('input[name="state"]:checked').value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delayValue);
      } else {
        reject(delayValue);
      }
    }, delayValue);
  });

  promise
    .then(delayValue => {
      iziToast.success({
        position: 'topRight',
        message: `Promise fulfilled after ${delayValue} ms`,
      });
    })
    .catch(delayValue => {
      iziToast.error({
        position: 'topRight',
        message: `Promise rejected after ${delayValue} ms`,
      });
    });
}
