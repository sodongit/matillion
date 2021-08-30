import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Square from "./square";

test('renders the square ', () => {
    const mockType = () => '';
    render(<Square type={mockType} id="0"/>);
    const square = screen.getByTestId('square');
    expect(square).toBeInTheDocument();
});

test('renders a cross in the square', () => {

    const mockType = () => 'X';
    render(<Square type={mockType} id="0"/>);
    const square = screen.getByTestId('cross');
    expect(square).toBeInTheDocument();
});
test('renders a circle in the square', () => {

    const mockType = () => 'O';
    render(<Square type={mockType} id="0"/>);
    const square = screen.getByTestId('circle');
    expect(square).toBeInTheDocument();
});