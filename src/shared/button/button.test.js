import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {Button} from "./button";

test('renders a button', () => {
    render(<Button />);
    const hDivider = screen.getByTestId('button');
    expect(hDivider).toBeInTheDocument();
});