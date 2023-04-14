import { initialState } from "./game-state.js";
import { game, state } from './main.js'

export function initGameObjects() {
    const gameScreen = document.querySelector('.game-screen');

    return {
        gameScreen,
        createMilleniumFalcon(initialState) {
            let milleniumFalcon = document.createElement('div');
            milleniumFalcon.classList.add('millenium-falcon');

            milleniumFalcon.style.height = initialState.height + 'px';
            milleniumFalcon.style.width = initialState.width + 'px';
            milleniumFalcon.style.top = initialState.positionTop + 'px';
            milleniumFalcon.style.left = initialState.positionLeft + 'px';

            this.milleniumFalcon = milleniumFalcon;
            game.gameScreen.appendChild(milleniumFalcon);
            return milleniumFalcon;
        },
        createTieFighter(initialState) {
            let tieFighter = document.createElement('div');
            tieFighter.classList.add('tie-fighter');

            tieFighter.style.height = initialState.height + 'px';
            tieFighter.style.width = initialState.width + 'px';

            tieFighter.style.top = Math.random() * 600 + 'px';
            tieFighter.style.left = gameScreen.offsetWidth - initialState.width + 'px';

            this.tieFighter = tieFighter;
            game.gameScreen.appendChild(tieFighter);
            return tieFighter;
        },
        createLivesBonus(initialState){
            let lifeBonus = document.createElement('div');
            lifeBonus.classList.add('lives-bonus');

            lifeBonus.style.height = initialState.height + 'px';
            lifeBonus.style.width = initialState.width + 'px';

            lifeBonus.style.top = Math.random() * 600 + 'px';
            lifeBonus.style.left = gameScreen.offsetWidth - initialState.width + 'px';

            this.lifeBonus = lifeBonus;
            game.gameScreen.appendChild(lifeBonus);
            return lifeBonus
        },
        createFalconLaser(initialState) {
            let laser = document.createElement('div');
            laser.classList.add('falcon-laser');

            laser.style.height = initialState.falconLaser.height + 'px';
            laser.style.width = initialState.falconLaser.width + 'px';

            laser.style.top = (initialState.milleniumFalcon.positionTop + initialState.milleniumFalcon.height / 2 - 12) + 'px';
            laser.style.left = (initialState.milleniumFalcon.positionLeft + initialState.milleniumFalcon.width - 20) + 'px';

            game.gameScreen.appendChild(laser);
            this.laser = laser;
            return laser;
        }

    }
}