import { /* getAllUsers, appendNewUser, removeUser, getUserById, getUserByUsername, getUserByEmail, updateUser, clearAllUsers,*/isHaveTemptUser, getTemptUser, removeTemptUser, setTemptUser } from './users.js';

//  <script type="module" src="global.js"></script>


function initRadioButtons() {
    const header = document.querySelector('.header');
    if (header) {
        const radioButtons = header.querySelectorAll('input[type="radio"]');
        radioButtons.forEach((radioButton, index) => {
            radioButton.addEventListener('change', (e) => {
                switch (index) {
                    case 0:
                        window.location.href = `${window.location.origin}/BigHomeWork3/index.html`;
                        break;
                    case 1:
                        window.location.href = `${window.location.origin}/BigHomeWork3/front/pages/teachers.html`;
                        break;
                    case 2:
                        window.location.href = `${window.location.origin}/BigHomeWork3/front/pages/lessons.html`;
                        break;
                    case 3:
                        window.location.href = `${window.location.origin}/BigHomeWork3/front/pages/aboutUs.html`;
                        break;
                    default:
                        break;
                }
            });
        });
    }
}

export function initHeaderRight() {
    const localhost = window.location.origin;
    const headerRightElement = document.querySelector('.right-items');
    if (isHaveTemptUser()) {
        headerRightElement.innerHTML = '';
        const temptUser = getTemptUser();

        const a_element = document.createElement('a');
        a_element.href = '';
        a_element.addEventListener('click', () => {
            removeTemptUser();
            window.location.href = `${localhost}/BigHomeWork3/front/Pages/login.html`;
        });
        a_element.innerText = `Logout-${temptUser.username} ?`;
        headerRightElement.appendChild(a_element);
    }
    else {
        window.location.href = `${localhost}/bighomework3/front/pages/login.html`;
    }
    initRadioButtons();
}
