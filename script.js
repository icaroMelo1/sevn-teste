let data = [];
let currentRound = 0;
const prevRoundButton = document.getElementById('prev-round');
const nextRoundButton = document.getElementById('next-round');

function incrementCounter(param) {
    if(param === 1) currentRound += param;
    if(currentRound !== 0 && param === -1) {
        currentRound = currentRound - 1;
    }
    if(currentRound === 0 && param === -1) currentRound = data.length - 1;
    if(currentRound === data.length) currentRound = 0;
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
                    <i class="material-icons">arrow_back</i>
                </button>
            </div>
            <div class="center-titles">
                <p>
                    Rodadas de Jogos <br>
                    <strong> RODADA ${round.round} </strong>
                </p>
            </div>
            <div class="arrow-icons">
                <button id="next-round" class="icon-button">
                    <i class="material-icons">arrow_forward</i>
                </button>
            </div>
        </div>
    `;
    round.games.forEach(game => {
        const gameDiv = document.createElement('div');
        gameDiv.classList.add('game');
        gameDiv.innerHTML = `
            <i class="shield material-icons" id="shield-${game.team_home_name.slice(-1)}">shield</i>
            <div class="line">
                <h4>${game.team_home_name}</h4>
                <h3 style="font-weight: bolder;  font-size: xx-large; margin-left: 25%"><strong>${game.team_home_score}</strong></h3>
            </div>
            <h3>X</h3>
            <div class="line">
                <h3 style="font-weight: bolder;  font-size: xx-large; margin-right: 25%"><strong>${game.team_away_score}</strong></h3>
                <h4>${game.team_away_name}</h4>
            </div>
            <i class="shield material-icons" id="shield-${game.team_away_name.slice(-1)}">shield</i>
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