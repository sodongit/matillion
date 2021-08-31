import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {InGameMessage} from "./inGameMessage";

test('renders a draw message', () => {
    render(<InGameMessage stateOfPlay="draw" />);
    const hDivider = screen.getByTestId('draw');
    expect(hDivider).toBeInTheDocument();
});
test('renders a draw message', () => {
    render(<InGameMessage stateOfPlay="X" />);
    const hDivider = screen.getByTestId('winner');
    expect(hDivider).toBeInTheDocument();
});
test('renders a draw message', () => {
    render(<InGameMessage stateOfPlay="" />);
    const hDivider = screen.getByTestId('next');
    expect(hDivider).toBeInTheDocument();
});