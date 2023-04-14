import { html, render } from '../node_modules/lit-html/lit-html.js'
import { initialState } from './game-state.js';
import { startGame } from './main.js';

let gameDiv = document.querySelector('.game-div');

export function endScreen(score) {
    let view = html`
    <div class="end-screen">
        <span class="end-text">Your score: ${score}</span>
        <div class="start-screen" @click=${startGame}>Try again?</div>
    </div>
    `
    let gameScreen = document.querySelector('.game-screen');
    gameDiv.removeChild(gameScreen);
    render(view, gameDiv)
}

export function onStart() {
    let gameScreenDiv = document.createElement('div');
    gameScreenDiv.classList.add('game-screen');

    let scoreSpan = document.createElement('span');
    scoreSpan.classList.add('score');

    let livesRemaining = document.createElement('span');
    livesRemaining.textContent = 'Lives Left: 10'
    livesRemaining.classList.add('lives');

    gameScreenDiv.appendChild(scoreSpan);
    gameScreenDiv.appendChild(livesRemaining);
    gameDiv.replaceChildren(gameScreenDiv);
}

export function movingLifeBonus(lifeBonuses, state, falcon) {
    lifeBonuses.forEach(bonus => {

        if (parseInt(bonus.style.left) <= 0 - state.livesBonus.width) {
            bonus.remove();
        } else {
            bonus.style.left = parseInt(bonus.style.left) - state.livesBonus.speed + 'px';
        }

        if (detectCollision(falcon, bonus)){
            bonus.remove();
            state.lives += 1;
            console.log(state.lives)
        }
    });
}

export function detectCollision(elementA, elementB){
    let firstObj = elementA.getBoundingClientRect();
    let secondObj = elementB.getBoundingClientRect();

    let hasCollision = !(firstObj.top > secondObj.bottom || firstObj.bottom < secondObj.top || firstObj.right < secondObj.left || firstObj.left > secondObj.right);

    return hasCollision;
}