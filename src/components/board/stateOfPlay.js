export const checkBoard = (board) => {
    const haveWeAWinner = lineOfThree(board);

    return haveWeAWinner.length === 1 ?
        haveWeAWinner[0] :
        board.length === 9 && !board.includes('')? 'draw' : '';
};

const lineOfThree = (board) => {
    const possibilities = {
        'top': [0, 1, 2],
        'middle': [3, 4, 5],
        'bottom': [6, 7, 8],
        'left': [0, 3, 6],
        'center': [1, 4, 7],
        'right': [2, 5, 8],
        'topLtoBotR': [0, 4, 8],
        'topRtoBotL': [2, 4, 6],
    }

    return Object.keys(possibilities)
        .map((key) => {
            const [a, b, c] = possibilities[key];
            const group = `${board[a]}${board[b]}${board[c]}`;
            return checkForRunOfThree(group);
        })
        .filter((item) => item !== '');

}

const checkForRunOfThree = (run) => ((run.includes('XXX') || run.includes('OOO')) ?
    run.includes('X') ? 'X' : 'O' :
    '');