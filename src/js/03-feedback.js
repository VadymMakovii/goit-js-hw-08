import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const messageField = feedbackForm.querySelector('textarea');
const emailField = feedbackForm.querySelector('input');

const formData = {};
const STORAGE_KEY = 'feedback-form-state';

populateForm();

feedbackForm.addEventListener('input', throttle(onInputTextarea, 500));
feedbackForm.addEventListener('submit', onFormSubmit);

function onInputTextarea(e) {
   formData[e.target.name] = e.target.value;
   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};


function populateForm() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedMessage) {
        if(savedMessage.email) {
        emailField.value = savedMessage.email;
        };
        if (savedMessage.message) {
        messageField.value = savedMessage.message;
        };
    };
};


function onFormSubmit(e) {
    e.preventDefault();
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedMessage) {
        console.log(savedMessage);
    };
    e.target.reset();
    localStorage.removeItem(STORAGE_KEY);
};
