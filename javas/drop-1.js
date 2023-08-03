document.addEventListener("DOMContentLoaded", function () {
    const containerEl = document.querySelector('.container-slide-el-1-drop');
    const triggerEl = document.querySelector('.container-slide-el-1-p-asp');
    const faMicitEl = document.querySelector('.fa-micit');

    let isExpanded = false;

    triggerEl.addEventListener("click", function () {
        if (containerEl.style.height === "0px" || containerEl.style.height === "") {
            containerEl.style.height = "auto";
            faMicitEl.classList.add('rotate');
            isExpanded = true;
        } else {
            containerEl.style.height = "0px";
            faMicitEl.classList.remove('rotate');
            isExpanded = false;
        }
    });
});

/*********************************************************************/

document.addEventListener("DOMContentLoaded", function () {
    const containerEl2 = document.querySelector('.container-slide-el-1-drop2');
    const triggerEl2 = document.querySelector('.container-slide-el-1-p-asp2');
    const faMicitEl2 = document.querySelector('.fa-micit2');

    let isExpanded2 = false;

    triggerEl2.addEventListener("click", function () {
        if (containerEl2.style.height === "0px" || containerEl2.style.height === "") {
            containerEl2.style.height = "auto";
            faMicitEl2.classList.add('rotate');
            isExpanded2 = true;
        } else {
            containerEl2.style.height = "0px";
            faMicitEl2.classList.remove('rotate');
            isExpanded2 = false;
        }
    });
});

/*********************************************************************/

document.addEventListener("DOMContentLoaded", function () {
    const containerEl3 = document.querySelector('.container-slide-el-1-drop3');
    const triggerEl3 = document.querySelector('.container-slide-el-1-p-asp3');
    const faMicitEl3 = document.querySelector('.fa-micit3');

    let isExpanded3 = false;

    triggerEl3.addEventListener("click", function () {
        if (containerEl3.style.height === "0px" || containerEl3.style.height === "") {
            containerEl3.style.height = "auto";
            faMicitEl3.classList.add('rotate');
            isExpanded3 = true;
        } else {
            containerEl3.style.height = "0px";
            faMicitEl3.classList.remove('rotate');
            isExpanded3 = false;
        }
    });
});