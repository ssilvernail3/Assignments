class Game {
    constructor(HEIGHT = 6, WIDTH = 7, player1, player2) {
        this.HEIGHT = HEIGHT;
        this.WIDTH = WIDTH;
        this.players = [player1, player2];
        this.makeboard();
        this.makeHtmlBoard();
        this.currPlayer = player1;
    }
    makeboard() {
        this.board = new Array(WIDTH).fill(0).map(() => new Array(HEIGHT).fill(0));
        console.log(board[0][0]);
    }
    makeHtmlBoard() {
        const htmlBoard = document.querySelector('#board');
        htmlBoard.innerHTML = '';
        this.startGame = this.handleClick.bind(this);
        let top = document.createElement('tr');
        top.setAttribute('id', 'column-top');
        top.addEventListener('click', this.startGame);

        for (let x = 0; x < WIDTH; x++) {
            let headCell = document.createElement('td');
            headCell.setAttribute('id', x);
            top.append(headCell);
        }
        htmlBoard.append(top);

        for (let y = 0; y < this.HEIGHT; y++) {
            const row = document.createElement('tr');
            for (let x = 0; x < this.WIDTH; x++) {
                const cell = document.createElement('td');
                cell.setAttribute('id', `${y}-${x}`);
                row.append(cell);
            }
            htmlBoard.append(row);
        }

    }
    findSpotForCol(x) {
        for (let y = this.HEIGHT - 1; y >= 0; y--) {
            if (!this.board[y][x]) {
                return y;
            }
        }
        return null;
    }

    placeInTable(y, x) {
        let gamePiece = document.createElement('div');
        gamePiece.classList.add('piece');
        gamePiece.classList.add(`player${currPlayer}`);
        gamePiece.style.backgroundColor = this.currPlayer.color;
        gamePiece.style.top = -50 * (y + 2);

        let cell = document.getElementById(`${y}-${x}`);
        cell.append(this.gamePiece);
    }
    endGame(msg) {
        alert(msg);
        document.querySelector('top').removeEventListener('click', this.startGame);
    }
    handleClick(event) {
        console.log(event.target);
        let x = +event.target.id;

        let y = this.findSpotForCol(x);
        if (y === null) {
            return;
        }
        this.board[y][x] = this.currPlayer;
        this.placeInTable(y, x);

        if (checkForWin()) {
            return this.endGame(`Player ${currPlayer} won!`);
        }
        if (this.board.every(row => row.every(cell => cell))) {
            return this.endGame('THERE IS A TIE!');
        }
        this.currPlayer = this.currPlayer === this.player1 ? this.player2 : this.player1;
    }
    checkForWin() {
        function _win(cells) {
            return cells.every(
                ([y, x]) =>
                    y >= 0 &&
                    y < HEIGHT &&
                    x >= 0 &&
                    x < WIDTH &&
                    this.board[y][x] === this.currPlayer
            );
        }

        // TODO: read and understand this code. Add comments to help you.

        for (let y = 0; y < HEIGHT; y++) {
            for (let x = 0; x < WIDTH; x++) {
                let horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
                let vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
                let diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
                let diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

                if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
                    return true;
                }
            }
        }
    }
}


class Player {
    constructor(color) {
        this.color = color;
    }
    // constructor(color1, color2) {
    //     this.player1Color = color1;
    //     this.player2Color = color2; 
    // }
    // player1Color() {
    //     let playerOne = this.player1;
    //     let p1Input = document.querySelector('#p1');
    //     playerOne.style.color = p1Input.innerText; 
    // }
    // player2Color() {
    //     let playerTwo = this.player1;
    //     let p2Input = document.querySelector('#p2');
    //     playerTwo.style.color = p1Input.innerText; 
    // }
}

let gameStart = document.querySelector('#btn').addEventListener('click', () => {
    let playerOne = new Player(document.querySelector('#p1').value);
    let playerTwo = new Player(document.querySelector('#p2').value);
    new Game(playeOne, playerTwo);
})

