import { isHaveTemptUser } from "./users.js";
import { initHeaderRight } from "./global.js";

const mainElement = document.getElementById("main");

function init() {
    const localhost = window.location.origin;
    if (!isHaveTemptUser()) {
        window.location.href = `${localhost}/bighomework3/front/pages/login.html`;
    }
    else {
        initHeaderRight();
    }

    const teachersElements = document.querySelectorAll(".teacher-card");
    teachersElements.forEach((teacherElement,index) => {
        teacherElement.addEventListener("click", () => {
            
        });
    });
}

init();