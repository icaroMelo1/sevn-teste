let data = [];
let currentRound = 0;
const prevRoundButton = document.getElementById('prev-round');
const nextRoundButton = document.getElementById('next-round');

const svgsJson = {
    a: '<svg style="margin: auto;" width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16 0C14.8835 1.49628 14.1602 4.31649 9.54496 5.01371C9.11253 5.07638 8.70368 5.10772 8.31056 5.10772C5.38575 5.10772 3.61671 3.51743 3.61671 3.51743L0 7.31688C0 7.31688 5.59803 9.10302 1.11646 25.1156C-1.91843 35.9577 14.5926 37.6028 16 40C17.3995 37.6028 33.9106 35.9577 30.8835 25.1156C26.4098 9.10302 32 7.31688 32 7.31688L28.3754 3.51743C28.3754 3.51743 26.6064 5.10772 23.6816 5.10772C23.2885 5.10772 22.8796 5.07638 22.4472 5.01371C17.8398 4.32432 17.1165 1.49628 15.9921 0L16 0Z" fill="url(#paint0_linear_1_28)"/> <defs> <linearGradient id="paint0_linear_1_28" x1="16" y1="0" x2="16" y2="40" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF0000"/> <stop offset="1" stop-color="#E96565" stop-opacity="0.3"/> </linearGradient> </defs> </svg>',
    b: '<svg style="margin: auto;" width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16 0C14.8835 1.49628 14.1602 4.31649 9.54496 5.01371C9.11253 5.07638 8.70368 5.10772 8.31056 5.10772C5.38575 5.10772 3.61671 3.51743 3.61671 3.51743L0 7.31688C0 7.31688 5.59803 9.10302 1.11646 25.1156C-1.91843 35.9577 14.5926 37.6028 16 40C17.3995 37.6028 33.9106 35.9577 30.8835 25.1156C26.4098 9.10302 32 7.31688 32 7.31688L28.3754 3.51743C28.3754 3.51743 26.6064 5.10772 23.6816 5.10772C23.2885 5.10772 22.8796 5.07638 22.4472 5.01371C17.8398 4.32432 17.1165 1.49628 15.9921 0L16 0Z" fill="url(#paint0_linear_1_28)"/> <defs> <linearGradient id="paint0_linear_1_28" x1="16" y1="0" x2="16" y2="40" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF0000"/> <stop offset="1" stop-color="#E96565" stop-opacity="0.3"/> </linearGradient> </defs> </svg>',
    c: '<svg style="margin: auto;" width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16 0C14.8835 1.49628 14.1602 4.31649 9.54496 5.01371C9.11253 5.07638 8.70368 5.10772 8.31056 5.10772C5.38575 5.10772 3.61671 3.51743 3.61671 3.51743L0 7.31688C0 7.31688 5.59803 9.10302 1.11646 25.1156C-1.91843 35.9577 14.5926 37.6028 16 40C17.3995 37.6028 33.9106 35.9577 30.8835 25.1156C26.4098 9.10302 32 7.31688 32 7.31688L28.3754 3.51743C28.3754 3.51743 26.6064 5.10772 23.6816 5.10772C23.2885 5.10772 22.8796 5.07638 22.4472 5.01371C17.8398 4.32432 17.1165 1.49628 15.9921 0L16 0Z" fill="url(#paint0_linear_1_50)"/> <defs> <linearGradient id="paint0_linear_1_50" x1="16" y1="0" x2="16" y2="40" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF9900"/> <stop offset="1" stop-color="#FF9900" stop-opacity="0.3"/> </linearGradient> </defs> </svg>',
    d: '<svg style="margin: auto;" width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16 0C14.8835 1.49628 14.1602 4.31649 9.54496 5.01371C9.11253 5.07638 8.70368 5.10772 8.31056 5.10772C5.38575 5.10772 3.61671 3.51743 3.61671 3.51743L0 7.31688C0 7.31688 5.59803 9.10302 1.11646 25.1156C-1.91843 35.9577 14.5926 37.6028 16 40C17.3995 37.6028 33.9106 35.9577 30.8835 25.1156C26.4098 9.10302 32 7.31688 32 7.31688L28.3754 3.51743C28.3754 3.51743 26.6064 5.10772 23.6816 5.10772C23.2885 5.10772 22.8796 5.07638 22.4472 5.01371C17.8398 4.32432 17.1165 1.49628 15.9921 0L16 0Z" fill="url(#paint0_linear_1_52)"/> <defs> <linearGradient id="paint0_linear_1_52" x1="16" y1="0" x2="16" y2="40" gradientUnits="userSpaceOnUse"> <stop stop-color="#72CB00"/> <stop offset="1" stop-color="#72CB00" stop-opacity="0.3"/> </linearGradient> </defs> </svg>',
    e: '<svg style="margin: auto;" width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16 0C14.8835 1.49628 14.1602 4.31649 9.54496 5.01371C9.11253 5.07638 8.70368 5.10772 8.31056 5.10772C5.38575 5.10772 3.61671 3.51743 3.61671 3.51743L0 7.31688C0 7.31688 5.59803 9.10302 1.11646 25.1156C-1.91843 35.9577 14.5926 37.6028 16 40C17.3995 37.6028 33.9106 35.9577 30.8835 25.1156C26.4098 9.10302 32 7.31688 32 7.31688L28.3754 3.51743C28.3754 3.51743 26.6064 5.10772 23.6816 5.10772C23.2885 5.10772 22.8796 5.07638 22.4472 5.01371C17.8398 4.32432 17.1165 1.49628 15.9921 0L16 0Z" fill="url(#paint0_linear_1_67)"/> <defs> <linearGradient id="paint0_linear_1_67" x1="16" y1="0" x2="16" y2="40" gradientUnits="userSpaceOnUse"> <stop stop-color="#00C797"/> <stop offset="1" stop-color="#00C797" stop-opacity="0.3"/> </linearGradient> </defs> </svg>',
    f: '<svg style="margin: auto;" width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16 0C14.8835 1.49628 14.1602 4.31649 9.54496 5.01371C9.11253 5.07638 8.70368 5.10772 8.31056 5.10772C5.38575 5.10772 3.61671 3.51743 3.61671 3.51743L0 7.31688C0 7.31688 5.59803 9.10302 1.11646 25.1156C-1.91843 35.9577 14.5926 37.6028 16 40C17.3995 37.6028 33.9106 35.9577 30.8835 25.1156C26.4098 9.10302 32 7.31688 32 7.31688L28.3754 3.51743C28.3754 3.51743 26.6064 5.10772 23.6816 5.10772C23.2885 5.10772 22.8796 5.07638 22.4472 5.01371C17.8398 4.32432 17.1165 1.49628 15.9921 0L16 0Z" fill="url(#paint0_linear_1_69)"/> <defs> <linearGradient id="paint0_linear_1_69" x1="16" y1="0" x2="16" y2="40" gradientUnits="userSpaceOnUse"> <stop stop-color="#0088D4"/> <stop offset="1" stop-color="#22B0FF" stop-opacity="0.3"/> </linearGradient> </defs> </svg>',
    g: '<svg style="margin: auto;" width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16 0C14.8835 1.49628 14.1602 4.31649 9.54496 5.01371C9.11253 5.07638 8.70368 5.10772 8.31056 5.10772C5.38575 5.10772 3.61671 3.51743 3.61671 3.51743L0 7.31688C0 7.31688 5.59803 9.10302 1.11646 25.1156C-1.91843 35.9577 14.5926 37.6028 16 40C17.3995 37.6028 33.9106 35.9577 30.8835 25.1156C26.4098 9.10302 32 7.31688 32 7.31688L28.3754 3.51743C28.3754 3.51743 26.6064 5.10772 23.6816 5.10772C23.2885 5.10772 22.8796 5.07638 22.4472 5.01371C17.8398 4.32432 17.1165 1.49628 15.9921 0L16 0Z" fill="url(#paint0_linear_1_84)"/> <defs> <linearGradient id="paint0_linear_1_84" x1="16" y1="0" x2="16" y2="40" gradientUnits="userSpaceOnUse"> <stop stop-color="#AD00FF"/> <stop offset="1" stop-color="#BF65E9" stop-opacity="0.3"/> </linearGradient> </defs> </svg>',
    h: '<svg style="margin: auto;" width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16 0C14.8835 1.49628 14.1602 4.31649 9.54496 5.01371C9.11253 5.07638 8.70368 5.10772 8.31056 5.10772C5.38575 5.10772 3.61671 3.51743 3.61671 3.51743L0 7.31688C0 7.31688 5.59803 9.10302 1.11646 25.1156C-1.91843 35.9577 14.5926 37.6028 16 40C17.3995 37.6028 33.9106 35.9577 30.8835 25.1156C26.4098 9.10302 32 7.31688 32 7.31688L28.3754 3.51743C28.3754 3.51743 26.6064 5.10772 23.6816 5.10772C23.2885 5.10772 22.8796 5.07638 22.4472 5.01371C17.8398 4.32432 17.1165 1.49628 15.9921 0L16 0Z" fill="url(#paint0_linear_1_86)"/> <defs> <linearGradient id="paint0_linear_1_86" x1="16" y1="0" x2="16" y2="40" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF00E6"/> <stop offset="1" stop-color="#FF00D6" stop-opacity="0.3"/> </linearGradient> </defs> </svg>'
}

function incrementCounter(param) {
    if((currentRound === 0 && param === -1) || (param === 1 && currentRound >= (data.length - 1))) {
        console.log("TEM NADA PRA CA NÃO")
        // Caso queira a lógica de retorna
        // if((currentRound === 0 && param === -1)) {
        //     currentRound = (data.length - 1)
        // } else {
        //     currentRound = 0
        // }
        return;
    }
    if(param === 1) {
        currentRound += param;
    }
    if(currentRound !== 0 && param === -1) {
        currentRound = currentRound - 1;
    }
    renderCurrentRound(data[currentRound])
}

function renderCurrentRound (finalData) {
    const gamesContainer = document.getElementById('games-container');
    gamesContainer.innerHTML = '';
    const round = finalData;
    const roundDiv = document.createElement('div');
    roundDiv.classList.add('round');
    roundDiv.innerHTML = `
        <div class="menu">
            <div class="arrow-icons">
                <button class="icon-button" id="prev-round">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="30" height="30" rx="5" fill="#33B667"/>
                    <path d="M17 21L11 15L17 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            <div class="center-titles">
                <h3>
                    Rodadas de Jogos <br>
                    <strong> RODADA ${round.round} </strong>
                </h3>
            </div>
            <div class="arrow-icons">
                <button id="next-round" class="icon-button">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="30" y="30" width="30" height="30" rx="5" transform="rotate(180 30 30)" fill="#33B667"/>
                    <path d="M13 9L19 15L13 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    `;
    round.games.forEach(game => {
        const gameDiv = document.createElement('div');
        gameDiv.classList.add('game');
        gameDiv.innerHTML = `
           ${svgsJson[game.team_home_name.slice(-1).toString().toLowerCase()]}
            <div class="line">
                <h4>${game.team_home_name}</h4>
                <h3 style="font-weight: bolder;  font-size: xx-large; margin-left: 25%"><strong>${game.team_home_score}</strong></h3>
            </div>
            <svg style="margin: auto;" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 1L1 13" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M1 1L13 13" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <div class="line">
                <h3 style="font-weight: bolder;  font-size: xx-large; margin-right: 25%"><strong>${game.team_away_score}</strong></h3>
                <h4>${game.team_away_name}</h4>
            </div>
           ${svgsJson[game.team_away_name.slice(-1).toString().toLowerCase()]}
        `;
        roundDiv.appendChild(gameDiv);
    });

    gamesContainer.appendChild(roundDiv);

    document.getElementById('prev-round').addEventListener('click', () => {
        incrementCounter(-1);
    });
    
    document.getElementById('next-round').addEventListener('click', () => {
        incrementCounter(1);
    });
}

async function fetchGamesData() {
    try {
        const response = await axios.get('https://sevn-pleno-esportes.deno.dev/').then(e => e.data);
        data = response;
        renderCurrentRound(data[0]);
    } catch (error) {
        console.error('Erro ao carregar os dados:', error);
    }
}

fetchGamesData();