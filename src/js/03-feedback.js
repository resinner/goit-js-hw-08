import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const email = document.querySelector(".feedback-form input");
const textarea = document.querySelector(".feedback-form textarea");
const STORAGE_KEY = 'feedback-form-state';

let formData = {};

const onSetItem = throttle((e) => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    // console.log(formData);
}, 500);

form.addEventListener('input', onSetItem);

form.addEventListener('submit', onFormSubmit);

savedFormData();

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
        console.log(formData);
}

function savedFormData() {
    const savedFormData = localStorage.getItem(STORAGE_KEY);
    const parsedFormData = JSON.parse(savedFormData);
    if (parsedFormData) {
        formData = parsedFormData;
        email.value = formData.email || "";
        textarea.value = formData.message || "";
    }
}