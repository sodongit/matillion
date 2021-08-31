import '@testing-library/jest-dom';
import {checkBoard} from "./stateOfPlay";

// no winner

test('no winners', () => {
    const board = ['X', '', '', '', '', '', '', '', '',];
    const result = checkBoard(board);
    expect(result).toBe('');
});
test('no winners', () => {
    const board = ['X', 'O', '', '', '', '', '', '', ''];
    const result = checkBoard(board);
    expect(result).toBe('');
});
test('no winners', () => {
    const board = ['X', 'O', 'X', '', '', '', '', '', ''];
    const result = checkBoard(board);
    expect(result).toBe('');
});
test('no winners', () => {
    const board = ['X', 'O', 'X', 'O', '', '', '', '', ''];
    const result = checkBoard(board);
    expect(result).toBe('');
});
test('no winners', () => {
    const board = ['X', 'O', 'X', 'O', 'X', '', '', '', ''];
    const result = checkBoard(board);
    expect(result).toBe('');
});
test('no winners', () => {
    const board = ['X', 'O', 'X', 'O', 'X', 'O', '', '', ''];
    const result = checkBoard(board);
    expect(result).toBe('');
});
test('no winners', () => {
    const board = ['X', 'O', 'X', 'O', 'X', 'O', 'O', '', ''];
    const result = checkBoard(board);
    expect(result).toBe('');
});
test('no winners', () => {
    const board = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'O', ''];
    const result = checkBoard(board);
    expect(result).toBe('');
});
test('draw', () => {
    const board = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'];
    const result = checkBoard(board);
    expect(result).toBe('draw');
});

//X wins
test('line of X across the top', () => {
    const board = ['X', 'X', 'X', 'O', 'O', '', '', '', ''];
    const result = checkBoard(board);
    expect(result).toBe('X');
});
test('line of X across the middle', () => {
    const board = ['', '', '','X', 'X', 'X', 'O', 'O',  '',];
    const result = checkBoard(board);
    expect(result).toBe('X');
});
test('line of X across the bottom', () => {
    const board = ['O', 'O', '', '', '', '', 'X', 'X', 'X', ];
    const result = checkBoard(board);
    expect(result).toBe('X');
});

test('line of X down the left', () => {
    const board = ['X', 'O', '', 'X', 'O', '', 'X', '', '',];
    const result = checkBoard(board);
    expect(result).toBe('X');
});
test('line of X down the center', () => {
    const board = ['', 'X', 'O', '', 'X', '', '', 'X', 'O', ];
    const result = checkBoard(board);
    expect(result).toBe('X');
});
test('line of X down the right', () => {
    const board = ['', '', 'X', 'O', 'O', 'X', '', '', 'X',];
    const result = checkBoard(board);
    expect(result).toBe('X');
});
test('line of X top left to bottom right', () => {
    const board = ['X', '', 'O', '', 'X', '', '', 'O', 'X', ];
    const result = checkBoard(board);
    expect(result).toBe('X');
});
test('line of X top right to bottom left', () => {
    const board = ['', '', 'X', 'O', 'X', '', 'X', '', 'O',];
    const result = checkBoard(board);
    expect(result).toBe('X');
});

//O wins
test('line of O across the top', () => {
    const board = ['O', 'O', 'O', 'X', 'X', '', '', '', ''];
    const result = checkBoard(board);
    expect(result).toBe('O');
});
test('line of O across the middle', () => {
    const board = ['', '', '','O', 'O', 'O', 'X', 'X',  '',];
    const result = checkBoard(board);
    expect(result).toBe('O');
});
test('line of O across the bottom', () => {
    const board = ['X', 'X', '', '', '', '', 'O', 'O', 'O', ];
    const result = checkBoard(board);
    expect(result).toBe('O');
});

test('line of O down the left', () => {
    const board = ['O', 'X', '', 'O', 'X', '', 'O', '', '',];
    const result = checkBoard(board);
    expect(result).toBe('O');
});
test('line of O down the center', () => {
    const board = ['', 'O', 'X', '', 'O', '', '', 'O', 'X', ];
    const result = checkBoard(board);
    expect(result).toBe('O');
});
test('line of O down the right', () => {
    const board = ['', '', 'O', 'X', 'X', 'O', '', '', 'O',];
    const result = checkBoard(board);
    expect(result).toBe('O');
});
test('line of O top left to bottom right', () => {
    const board = ['O', '', 'O', '', 'O', '', '', 'X', 'O'];
    const result = checkBoard(board);
    expect(result).toBe('O');
});
test('line of O top right to bottom left', () => {
    const board = ['', '', 'O', 'X', 'O', '', 'O', '', 'X'];
    const result = checkBoard(board);
    expect(result).toBe('O');
});