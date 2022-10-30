import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
// const email = document.querySelector(".feedback-form input");
// const textarea = document.querySelector(".feedback-form textarea");

const STORAGE_KEY = 'feedback-form-state';

let formData = {};

// form.addEventListener("input", throttle(onFormSubmit, 500));

form.addEventListener("input", e => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    console.log(formData);
});

form.addEventListener('submit', onFormSubmit);

savedFormData();

function onFormSubmit(e) {
    e.preventDefault();
    e.target.reset();
localStorage.removeItem(STORAGE_KEY);
}

// function onTextareaInput(e) {
//     const message = e.target.value;
//     localStorage.setItem(STORAGE_KEY, message);
// }

// function onEmailImput(e) {
//     const email = e.target.value;
//     localStorage.setItem(STORAGE_KEY, email);
// }

function savedFormData() {
    const savedFormData = localStorage.getItem(STORAGE_KEY);
    const parsedFormData = JSON.parse(savedFormData);
    if (parsedFormData) {
        formData = parsedFormData;
        email.value = formData.email || "";
        textarea.value = formData.message || '';
        console.log(formData);
    }
}
