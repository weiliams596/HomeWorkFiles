import { getAllUsers, appendNewUser, isHaveTemptUser, getTemptUser, setTemptUser } from './users.js';
const registerForm = document.querySelector('#register-form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const passwordConfirmInput = document.querySelector('#confirm_password');

const typeSelect = document.querySelector('#type');

function showError(message) {
    const errorMsg = document.getElementById('error-message');
    errorMsg.textContent = message;
    setTimeout(() => {
        errorMsg.textContent = '';
    }, 1500);
}

function init() {
    if (isHaveTemptUser()) {
        window.location.href = 'http://localhost:5500/bighomework3/index.html';
    }
    const allUsers = getAllUsers();
    if (!allUsers || !allUsers.length) {
        const adminOption = document.createElement('option');
        adminOption.value = '0';
        adminOption.textContent = 'Admin';
        typeSelect.appendChild(adminOption);
        typeSelect.value = '0';
        typeSelect.disabled = true;
    }
}

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = passwordConfirmInput.value.trim();
    const type = typeSelect.value;

    const allUsers = getAllUsers();

    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        showError('All fields are required.');
        return;
    }

    if (password !== confirmPassword) {
        showError('Passwords do not match.');
        return;
    }

    const userData = {
        username,
        email,
        password,
        type
    };

    if (allUsers === null || allUsers === undefined || !Array.isArray(allUsers)) {
        appendNewUser(userData);
    }
    else {
        if (allUsers.find(user => user.email === email)) {
            showError('Email already exists.');
            return;
        }
        if (allUsers.find(user => user.username === username)) {
            showError('Username already exists.');
            return;
        }
        appendNewUser(userData);
    }

    sessionStorage.setItem('user', JSON.stringify(userData));
    if (userData.type === '0') {
        setTimeout(() => {
            window.location.href = 'http://localhost:5500/bighomework3/front/pages/adminpage.html';
        }, 2000);
        return;
    }
    setTimeout(() => {
        window.location.href = 'http://localhost:5500/bighomework3/index.html';
    }, 2000);
});

init();
