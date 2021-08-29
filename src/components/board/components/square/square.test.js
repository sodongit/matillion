import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Square from "./square";

test('renders the square ', () => {
    render(<Square />);
    const square = screen.getByTestId('square');
    expect(square).toBeInTheDocument();
});