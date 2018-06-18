

export const renderPortfolio = choice => {
    let markup;

    if (choice === 'workClient') {
        markup = `
        
        `;
    } else if (choice === 'workFullstack') {
        markup = `
        <div class="work-2">
            <div class="work__animation-2">
                <a href="#" class="work__option-2"><div class="work__option-2--1">
                    <p class="work__text-2">PROJECT NAME</p>
                    <p class="work__text-2--sub">Description of project oh mamammama</p>
                </div></a>

                <a href="#" class="work__option-2"><div class="work__option-2--2">
                    <p class="work__text-2">PROJECT NAME</p>
                    <p class="work__text-2--sub">Description of project oh mamammama</p>
                </div></a>

                <a href="#" class="work__option-2"><div class="work__option-2--3">
                    <p class="work__text-2">PROJECT NAME</p>
                    <p class="work__text-2--sub">Description of project oh mamammama</p>
                </div></a>

                <a href="#" class="work__option-2"><div class="work__option-2--4">
                    <p class="work__text-2">PROJECT NAME</p>
                    <p class="work__text-2--sub">Description of project oh mamammama</p>
                </div></a>
            </div>
        </div>
        `;
    } else if (choice === 'workJavascript') {
        markup = `
        
        `;
    }
    elements.workDisplay.insertAdjacentHTML('afterend', markup);
}