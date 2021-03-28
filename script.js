let cells = document.querySelectorAll('.row > div')

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

function cellClicked(e) {
    e.target.textContent = 'X';
    console.log(findWinner());
}

function findWinner() {
    if (cells[0].textContent === cells[1].textContent && cells[0].textContent === cells[2].textContent && cells[0].textContent.length === 1) {
        return 'Winner in first row!'
    } else {
        return 'not winner yet';
    }
}
