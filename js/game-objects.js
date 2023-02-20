function initGameObjects() {
    const startBtn = document.querySelector('.start-screen');
    const gameScreen = document.querySelector('.game-screen');

    return {
        startBtn,
        gameScreen,
        createMilleniumFalcon (initialState) {
           let milleniumFalcon = document.createElement('div');
           milleniumFalcon.classList.add('millenium-falcon');

           milleniumFalcon.style.height = + initialState.height + 'px';
           milleniumFalcon.style.width = initialState.width + 'px';
           milleniumFalcon.style.top = initialState.positionTop + 'px';
           milleniumFalcon.style.left = initialState.positionLeft + 'px';
           
           this.milleniumFalcon = milleniumFalcon;
           game.gameScreen.appendChild(milleniumFalcon);
        },

    }
}