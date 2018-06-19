import { elements } from './base';

export const renderPortfolio = choice => {
    let markup;

    if (choice === 'workClient') {
        markup = `
        <div class="work-2">
            <div class="work__animation-2">
                <a href="#" class="work__option-2 work__option-2--1 fadeInRight"><div>
                    <p class="work__text-2">Forkify</p>
                    <p class="work__text-2--sub">Find and save recipes with a beautiful interface</p>
                </div></a>

                <a href="#" class="work__option-2 work__option-2--2 fadeInRight"><div>
                    <p class="work__text-2">Budgety</p>
                    <p class="work__text-2--sub">An elegant way to manage your finances</p>
                </div></a>

                <a href="#" class="work__option-2 work__option-2--3 fadeInLeft"><div>
                    <p class="work__text-2">ToDo List</p>
                    <p class="work__text-2--sub">A simple todo list app to plan your day</p>
                </div></a>

                <a href="#" class="work__option-2 work__option-2--4 fadeInLeft"><div>
                    <p class="work__text-2">RGB Color Game</p>
                    <p class="work__text-2--sub">A fun game to test your RGB knowledge</p>
                </div></a>
            </div>
        </div>
        `;
    } else if (choice === 'workFullstack') {
        markup = `
        <div class="work-2">
            <div class="work__animation-2">
                <a href="#" class="work__option-2 work__option-2--1 fadeInRight"><div>
                    <p class="work__text-2">Forkify</p>
                    <p class="work__text-2--sub">Find and save recipes with a beautiful interface</p>
                </div></a>

                <a href="#" class="work__option-2 work__option-2--2 fadeInRight"><div>
                    <p class="work__text-2">Budgety</p>
                    <p class="work__text-2--sub">An elegant way to manage your finances</p>
                </div></a>

                <a href="#" class="work__option-2 work__option-2--3 fadeInLeft"><div>
                    <p class="work__text-2">ToDo List</p>
                    <p class="work__text-2--sub">A simple todo list app to plan your day</p>
                </div></a>

                <a href="#" class="work__option-2 work__option-2--4 fadeInLeft"><div>
                    <p class="work__text-2">RGB Color Game</p>
                    <p class="work__text-2--sub">A fun game to test your RGB knowledge</p>
                </div></a>
            </div>
        </div>
        `;
    } else if (choice === 'workJavascript') {
        markup = `
        <div class="work-2">
            <div class="work__animation-2">
                <a href="#" class="work__option-2 work__option-2--1 animation-right fadeInRight"><div>
                    <p class="work__text-2">Forkify</p>
                    <p class="work__text-2--sub">Find and save recipes with a beautiful interface</p>
                </div></a>

                <a href="#" class="work__option-2 work__option-2--2 animation-right fadeInRight"><div>
                    <p class="work__text-2">Budgety</p>
                    <p class="work__text-2--sub">An elegant way to manage your finances</p>
                </div></a>

                <a href="#" class="work__option-2 work__option-2--3 animation-left fadeInLeft"><div>
                    <p class="work__text-2">ToDo List</p>
                    <p class="work__text-2--sub">A simple todo list app to plan your day</p>
                </div></a>

                <a href="#" class="work__option-2 work__option-2--4 animation-left fadeInLeft"><div>
                    <p class="work__text-2">RGB Color Game</p>
                    <p class="work__text-2--sub">A fun game to test your RGB knowledge</p>
                </div></a>
            </div>
        </div>
        `;
    }
    elements.workDisplay.insertAdjacentHTML('afterend', markup);
}

export const getRender = e => {
    setTimeout(() => {
        if (e.target.matches('.work__choice-opt--1')) {
            renderPortfolio('workClient');
        } else if (e.target.matches('.work__choice-opt--2')) {
            renderPortfolio('workFullstack');
        } else if (e.target.matches('.work__choice-opt--3')) {
            renderPortfolio('workJavascript');
        }
    }, 400);
};