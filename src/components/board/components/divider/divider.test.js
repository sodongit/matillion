import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {Divider} from "./divider";

test('renders a divider', () => {
    render(<Divider />);
    const hDivider = screen.getByTestId('divider');
    expect(hDivider).toBeInTheDocument();
});