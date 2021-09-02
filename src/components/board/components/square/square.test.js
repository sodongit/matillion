import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Square from "./square";
import {Cross} from "../cross/cross";
import {Circle} from "../circle/circle";

test('renders the square ', () => {
    const mockType = () => 'div';
    render(<Square type={mockType} id="0"/>);
    const square = screen.getByTestId('square');
    expect(square).toBeInTheDocument();
});

test('renders a cross in the square', () => {

    const mockType = () => Cross;
    render(<Square type={mockType} id="0"/>);
    const square = screen.getByTestId('cross');
    expect(square).toBeInTheDocument();
});
test('renders a circle in the square', () => {

    const mockType = () => Circle;
    render(<Square type={mockType} id="0"/>);
    const square = screen.getByTestId('circle');
    expect(square).toBeInTheDocument();
});