const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', event => {
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (email === "" || password === "") {
        return alert("All form fields must be filled in");
    }

  const formArr = {
      email, password
    };

    console.log(formArr);
    form.reset();
})
