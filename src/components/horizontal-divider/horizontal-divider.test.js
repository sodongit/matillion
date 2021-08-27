import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HorizontalDivider from "./horizontal-divider";

test('renders horizonal divider', () => {
    render(<HorizontalDivider />);
    const hDivider = screen.getByTestId('horizontal-divider');
    expect(hDivider).toBeInTheDocument();
});