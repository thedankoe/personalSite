export const elements = {
    formDisplay: document.querySelector('#contact-form'),
    formSuccess: document.querySelector('.alert'),
    workDisplay: document.querySelector('.work'),
    workClient: document.querySelector('.work__choice-opt--1'),
    workFullstack: document.querySelector('.work__choice-opt--2'),
    workJavascript: document.querySelector('.work__choice-opt--3')
}

export const clearWork = () => {
    const work = document.querySelector(`.work__option`);
    if (work) {
        work.parentElement.removeChild(work);
    }
};