

const form =document.getElementById('form');
const username =document.getElementById('username');
const password =document.getElementById('password');
form.addEventListener('submit',e =>{
    e.preventDefault();
    validateInputs();
});

const setError = (element,message) =>{
    const inputControl = element.parentElement;
}
const validateInputs = () =>{
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

};