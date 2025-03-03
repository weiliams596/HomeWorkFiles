//  import {  getAllUsers, appendNewUser, removeUser, getUserById, getUserByUsername, getUserByEmail, updateUser, clearAllUsers,isHaveTemptUser, getTemptUser,setTemptUser,removeTemptUser } from './users.js';

function getID() {
    let currentIndex = localStorage.getItem('idIndex') ? parseInt(localStorage.getItem('idIndex')) : -1;
    currentIndex++;
    localStorage.setItem('idIndex', currentIndex);
    return currentIndex;
}

export function getAllUsers() {
    const users = JSON.parse(localStorage.getItem('users'));
    return users;
}

export function appendNewUser(user) {
    let users = getAllUsers();
    if(!users){
        users = [];        
    }
    user.id = getID();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    return user;
}

export function removeUser(id) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.id === id);
    users = users.filter(user => user.id !== id);
    localStorage.setItem('users', JSON.stringify(users));
    return user;
}

export function getUserById(id) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find(user => user.id === id);
}

export function getUserByUsername(username) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find(user => user.username === username);
}

export function getUserByEmail(email) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find(user => user.email === email);
}

export function updateUser(id, user) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const index = users.findIndex(user => user.id === id);
    users[index] = user;
    localStorage.setItem('users', JSON.stringify(users));
    return user;
}

export function clearAllUsers() {
    localStorage.setItem('users', JSON.stringify([]));
    localStorage.setItem('idIndex', -1);
}


export function isHaveTemptUser() {
    if (sessionStorage.getItem('user')) {
        return true;
    }
    return false;
}

export function getTemptUser() {
    if (isHaveTemptUser()) {
        return JSON.parse(sessionStorage.getItem('user'));
    }
    return null;
}

export function setTemptUser(user) {
    const temptUser = { id: user.id, username: user.username, email: user.email };
    sessionStorage.setItem('user', JSON.stringify(temptUser));
}

export function removeTemptUser() {
    sessionStorage.removeItem('user');
}
