import { /* getAllUsers, appendNewUser, removeUser, getUserById, getUserByUsername, getUserByEmail, updateUser, clearAllUsers,*/isHaveTemptUser, getTemptUser, removeTemptUser, setTemptUser } from './users.js';

//  <script type="module" src="global.js"></script>


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
}
