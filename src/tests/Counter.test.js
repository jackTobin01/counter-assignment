import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
    render(<Counter />);
})

test('renders counter message', () => {
    const cMsg = screen.getByText(/Counter/i);
    expect(cMsg).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
    const countElement = screen.getByText(/0/i);
    expect(countElement).toBeInTheDocument;
});

test('clicking + increments the count', () => {
    const btn = screen.getByText('+');
    fireEvent.click(btn);
    const countElement = screen.getByText(/1/i);
    expect(countElement).toBeInTheDocument;
});

test('clicking - decrements the count', () => {
    const btn = screen.getByText('-');
    fireEvent.click(btn);
    const countElement = screen.getByText(/-1/i);
    expect(countElement).toBeInTheDocument;
});
