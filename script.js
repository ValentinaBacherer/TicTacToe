let cells = document.querySelectorAll('.row > div')
let currentPlayer = 'X'
const button = document.getElementById('clearBtn')
const result = document.getElementById('result')

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}
button.addEventListener('click', clearAll)

function clearAll() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
    }
    result.textContent = ''
}

function cellClicked(e) {
    if (!e.target.textContent) {

        e.target.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
        console.log(findWinner());
    }
}

function findWinner() {
    result.textContent = calcWinner()
}

function calcWinner() {
    if (cells[0].textContent === cells[1].textContent && cells[0].textContent === cells[2].textContent && cells[0].textContent.length === 1)
        return 'Winner in first row!'
    if (cells[03].textContent === cells[4].textContent && cells[3].textContent === cells[5].textContent && cells[3].textContent.length === 1)
        return 'Winner in second row!'
    if (cells[6].textContent === cells[7].textContent && cells[6].textContent === cells[8].textContent && cells[6].textContent.length === 1)
        return 'Winner in third row!'
    if (cells[0].textContent === cells[3].textContent && cells[0].textContent === cells[6].textContent && cells[0].textContent.length === 1)
        return 'Winner in first column!'
    if (cells[1].textContent === cells[4].textContent && cells[7].textContent === cells[5].textContent && cells[3].textContent.length === 1)
        return 'Winner in second column!'
    if (cells[2].textContent === cells[5].textContent && cells[2].textContent === cells[8].textContent && cells[8].textContent.length === 1)
        return 'Winner in third column!'
    if (cells[0].textContent === cells[4].textContent && cells[0].textContent === cells[8].textContent && cells[8].textContent.length === 1)
        return 'Winner in first diagonal!'
    if (cells[2].textContent === cells[4].textContent && cells[2].textContent === cells[6].textContent && cells[6].textContent.length === 1)
        return 'Winner in second diagonal!'

    return '';

}
