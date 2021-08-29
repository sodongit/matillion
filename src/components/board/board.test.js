import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Board from "./board";

test('renders the square ', () => {
    render(<Board/>);
    const square = screen.getByTestId('board');
    expect(square).toBeInTheDocument();
});