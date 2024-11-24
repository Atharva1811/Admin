function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === 'admin' && password === 'password123') {
        return true;
    } else {
        errorMessage.textContent = 'Incorrect username or password';
        return false;
    }
}
