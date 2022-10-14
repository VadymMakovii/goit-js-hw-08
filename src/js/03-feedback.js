import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const messageField = feedbackForm.querySelector('textarea');
const emailField = feedbackForm.querySelector('input');

let formData = {};
const STORAGE_KEY = 'feedback-form-state';

const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

populateForm();

feedbackForm.addEventListener('input', throttle(onInputTextarea, 500));
feedbackForm.addEventListener('submit', onFormSubmit);


function onInputTextarea(e) {
    if (savedMessage) {
        formData = savedMessage;
    }
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};


function populateForm() {
    if (savedMessage) {
        emailField.value = savedMessage.email ?? '';
        messageField.value = savedMessage.message ?? '';
    };
};


function onFormSubmit(e) {
    e.preventDefault();
    if (!emailField.value || !messageField.value) {
        alert('Please fill in all fields !!!');
        return;
    } 
    console.log(savedMessage);
    e.target.reset();
    localStorage.removeItem(STORAGE_KEY);
};
