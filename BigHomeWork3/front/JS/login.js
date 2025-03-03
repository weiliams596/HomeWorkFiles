import { getAllUsers, getUserByUsername, getUserByEmail, isHaveTemptUser, getTemptUser, setTemptUser } from './users.js';

const formBtn = document.getElementById('login-btn');
const errorMSG = document.getElementById('error-msg');

function init() {
  if (isHaveTemptUser()) {
    window.location.href = 'http://localhost:5500/bighomework3/index.html';
  }
  const allUsers = getAllUsers();
  if (!allUsers || allUsers.length === 0) {
    window.location.href = 'http://localhost:5500/bighomework3/front/pages/register.html';
  }
}

function showError(msg) {
  errorMSG.innerHTML = msg;
  setTimeout(() => {
    errorMSG.innerHTML = '';
  }, 2000);
}

formBtn.addEventListener('click', function (event) {
  event.preventDefault();
  let userName = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (!userName || !password) {
    showError('Please enter both username and password');
    return;
  }
  if (userName.includes('@') && userName.includes('.com')) {
    const user = getUserByEmail(userName);
    if (user && user.password === password) {
      setTemptUser(user);
      if (user.type === '1') {
        setTimeout(() => {
          window.location.href = 'http://localhost:5500/bighomework3/front/pages/teacher-lesson-controller.html';
        }, 2000);
        return;
      }
      else if(user.type==='0'){
        setTimeout(() => {
          window.location.href='http://localhost:5500/bighomework3/front/pages/AdminPage.html';
        }, 2000);
      }
      setTimeout(() => {
        window.location.href = 'http://localhost:5500/bighomework3/index.html';
      }, 2000);

    }
    else {
      showError('Invalid email or password');
      return;
    }
  }
  else {
    const user = getUserByUsername(userName);
    if (user && user.password === password) {
      setTemptUser(user);
      setTimeout(() => {
        window.location.href = 'http://localhost:5500/bighomework3/index.html';
      }, 2000);
    }
    else {
      showError('Invalid username or password');
      return;
    }
  }


});

init();
