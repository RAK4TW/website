import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import DetailboxIdeas from './detailbox-ideas';

const renderWithRouter = (component) => {
    const history = createMemoryHistory();
    return {
        ...render(
            <Router history={history}>
                {component}
            </Router>
        ),
        history,
    };
};

describe('DetailboxIdeas Component', () => {
    it('renders without crashing', () => {
        renderWithRouter(<DetailboxIdeas />);
    });

    it('displays the Ideas title', () => {
        renderWithRouter(<DetailboxIdeas />);
        expect(screen.getByText('Ideas')).toBeInTheDocument();
    });

    it('displays close button with accessibility attributes', () => {
        renderWithRouter(<DetailboxIdeas />);
        const closeButton = screen.getByText('Close [X]');
        expect(closeButton).toHaveAttribute('role', 'button');
        expect(closeButton).toHaveAttribute('tabIndex', '0');
        expect(closeButton).toHaveAttribute('aria-label', 'Close ideas view');
    });

    it('displays placeholder content', () => {
        renderWithRouter(<DetailboxIdeas />);
        expect(screen.getByText('Please check back later, this area will get some attention.')).toBeInTheDocument();
        expect(screen.getByText(/It\'ll be a blog of sorts :-\)\)/)).toBeInTheDocument();
    });

    it('calls history.replace when close button is clicked', () => {
        const { history } = renderWithRouter(<DetailboxIdeas />);
        const closeButton = screen.getByText('Close [X]');

        fireEvent.click(closeButton);
        expect(history.location.pathname).toBe('/');
    });

    it('calls history.replace when close button is activated with Enter key', () => {
        const { history } = renderWithRouter(<DetailboxIdeas />);
        const closeButton = screen.getByText('Close [X]');

        fireEvent.keyDown(closeButton, { key: 'Enter' });
        expect(history.location.pathname).toBe('/');
    });

    it('calls history.replace when close button is activated with Space key', () => {
        const { history } = renderWithRouter(<DetailboxIdeas />);
        const closeButton = screen.getByText('Close [X]');

        fireEvent.keyDown(closeButton, { key: ' ' });
        expect(history.location.pathname).toBe('/');
    });

    it('displays content in proper structure', () => {
        renderWithRouter(<DetailboxIdeas />);

        const contentDiv = screen.getByText('Please check back later').parentElement;
        expect(contentDiv).toBeInTheDocument();
        expect(contentDiv).toContainElement(screen.getByText('Please check back later'));
        expect(contentDiv).toContainElement(screen.getByText(/It'll be a blog of sorts/));
    });
});
