export const elements = {
    formDisplay: document.querySelector('#contact-form'),
    formSuccess: document.querySelector('.alert'),
    workDisplay: document.querySelector('.work'),
    workDisplay2: document.querySelector('.work-2'),
    workClient: document.querySelector('.work__choice-opt--1'),
    workFullstack: document.querySelector('.work__choice-opt--2'),
    workJavascript: document.querySelector('.work__choice-opt--3'),
    animationRight: document.querySelectorAll('.animation-right'),
    animationLeft: document.querySelectorAll('.animation-left')
}

export const clearWork = () => {
    const work = document.querySelector('.work__animation');
    const work2 = document.querySelector('.work__animation-2');
    setTimeout(() => {
        if (work) {
            work.parentElement.removeChild(work);
        } else if (work2) {
            work2.parentElement.removeChild(work2);
        }
    }, 400);
};