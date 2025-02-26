
import { getTemptUser } from "./users.js";

function getID() {
    let currentIndex = localStorage.getItem('lessonsIDIndex') ? parseInt(localStorage.getItem('lessonsIDIndex')) : -1;
    currentIndex++;
    localStorage.setItem('lessonsIDIndex', currentIndex);
    return currentIndex;
}

export function getAllLessons() {
    const lessons = JSON.parse(localStorage.getItem('lessons'));
    return lessons;
}

export function addLesson(lesson) {
    const lessons = getAllLessons();
    const user = getTemptUser();
    const id = getID();
    lesson.id = id;
    lesson.uid = user.id;
    lessons.push(lesson);
    localStorage.setItem('lessons', JSON.stringify(lessons));
    return lesson;
}

export function updateLessonByID(id, lesson) {
    const lessons = getAllLessons();
    const oldLesson = lessons.find(l => l.id === id);
    if (lessons) {
        const indexOf = lessons.indexOf(oldLesson);
        lessons[indexOf] = lesson;
        lessons[indexOf].id = id;
        lessons[indexOf].uid = oldLesson.uid;
        localStorage.setItem('lessons', JSON.stringify(lessons));
        return oldLesson;
    }
    return null;
}

export function removeLessonByID(id) {
    const lessons = getAllLessons();
    if(lessons){
        const oldLesson = lessons.find(l => l.id === id);
        const newLessons = lessons.filter(l => l.id !== id);
        localStorage.setItem('lessons', JSON.stringify(newLessons));
        return oldLesson;
    }
    return null;
}

export function removeLessonByUserID(uid) {
    const lessons = getAllLessons();
    if(lessons){
        const oldLessons = lessons.filter(l => l.uid === uid);
        const newLessons = lessons.filter(l => l.uid !== uid);
        localStorage.setItem('lessons', JSON.stringify(newLessons));
        return oldLessons;
    }
    return null;
}

export function clearAllLessons() {
    localStorage.removeItem('lessons');
    localStorage.removeItem('lessonsIDIndex');
}