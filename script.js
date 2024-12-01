function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === 'admin' && password === '12345') {
        sessionStorage.setItem('loggedIn', 'true');
        return true;
    } else {
        errorMessage.textContent = 'Incorrect username or password';
        return false;
    }
}

function logout() {
    sessionStorage.removeItem('loggedIn');
    location.href = 'index.html';
}

// Check if the user is logged in
if (sessionStorage.getItem('loggedIn') !== 'true' && location.pathname.includes('admin.html')) {
    location.href = 'index.html';
}
