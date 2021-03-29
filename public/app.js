const stepsSection = document.querySelector('.steps');

const API = `https://6059fb9db11aba001745d43f.mockapi.io/api/v1/cards`;

const showMenu = () => document.querySelector('.menu-list').style.display = "flex";

const hideMenu = () => document.querySelector('.menu-list').style.display = "none";

document.querySelector('.openMenu').addEventListener('click', showMenu);

document.querySelector('.closeMenu').addEventListener('click', hideMenu);

const callCards = async () => {
    const response = await fetch(API);
    const data = await response.json();
    const { items } = data;
    
    items.map(item => {
        item.id % 2 == 0 ? (stepsSection.innerHTML +=
            `<div class="row">
                <div class="column">
                    <h3>${item.subtitle}</h3>
                    <h2>${item.title}</h2>
                    <h4>${item.description}</h4>
                </div>
                <div class="column">
                    <img src="${item.image}" alt="${item.image}">
                </div>
            </div>`
            ) : (stepsSection.innerHTML +=
            `<div class="row">
                <div class="column">
                    <img src="${item.image}" alt="${item.image}">
                </div>
                <div class="column">
                    <h3>${item.subtitle}</h3>
                    <h2>${item.title}</h2>
                    <h4>${item.description}</h4>
                </div>
            </div>`
        )
    })
    console.log('The rendering API was called!');
}

callCards();








