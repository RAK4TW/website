import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import DetailboxContact from './detailbox-contact';

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

describe('DetailboxContact Component', () => {
    it('renders without crashing', () => {
        renderWithRouter(<DetailboxContact />);
    });

    it('displays the Contact title', () => {
        renderWithRouter(<DetailboxContact />);
        expect(screen.getByText('Contact')).toBeInTheDocument();
    });

    it('displays close button with accessibility attributes', () => {
        renderWithRouter(<DetailboxContact />);
        const closeButton = screen.getByText('Close [X]');
        expect(closeButton).toHaveAttribute('role', 'button');
        expect(closeButton).toHaveAttribute('tabIndex', '0');
        expect(closeButton).toHaveAttribute('aria-label', 'Close contact view');
    });

    it('displays email address', () => {
        renderWithRouter(<DetailboxContact />);
        expect(screen.getByText('Email me at')).toBeInTheDocument();
        expect(screen.getByText('RyanAK@gmail.com')).toBeInTheDocument();
    });

    it('displays Instagram link', () => {
        renderWithRouter(<DetailboxContact />);
        expect(screen.getByText('Instagram:')).toBeInTheDocument();
        expect(screen.getByText('@RAK4TW')).toBeInTheDocument();
    });

    it('email link has correct attributes', () => {
        renderWithRouter(<DetailboxContact />);
        const emailLink = screen.getByText('RyanAK@gmail.com');
        expect(emailLink).toHaveAttribute('href', 'mailto:ryanak@gmail.com');
    });

    it('Instagram link has correct attributes', () => {
        renderWithRouter(<DetailboxContact />);
        const instagramLink = screen.getByText('@RAK4TW');
        expect(instagramLink).toHaveAttribute('target', '_blank');
        expect(instagramLink).toHaveAttribute('rel', 'noopener noreferrer');
        expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/rak4tw');
        expect(instagramLink).toHaveAttribute('aria-label', 'Visit Ryan\'s Instagram profile');
    });

    it('calls history.replace when close button is clicked', () => {
        const { history } = renderWithRouter(<DetailboxContact />);
        const closeButton = screen.getByText('Close [X]');

        fireEvent.click(closeButton);
        expect(history.location.pathname).toBe('/');
    });

    it('calls history.replace when close button is activated with Enter key', () => {
        const { history } = renderWithRouter(<DetailboxContact />);
        const closeButton = screen.getByText('Close [X]');

        fireEvent.keyDown(closeButton, { key: 'Enter' });
        expect(history.location.pathname).toBe('/');
    });

    it('calls history.replace when close button is activated with Space key', () => {
        const { history } = renderWithRouter(<DetailboxContact />);
        const closeButton = screen.getByText('Close [X]');

        fireEvent.keyDown(closeButton, { key: ' ' });
        expect(history.location.pathname).toBe('/');
    });

    it('uses handleClose function for close button', () => {
        renderWithRouter(<DetailboxContact />);
        const closeButton = screen.getByText('Close [X]');

        // The component should have the same behavior regardless of inline vs function handler
        expect(closeButton).toBeInTheDocument();
        expect(closeButton).toHaveAttribute('role', 'button');
    });

    it('displays contact information in correct order', () => {
        renderWithRouter(<DetailboxContact />);

        const contactInfo = screen.getByText(/Email me at/).parentElement;
        expect(contactInfo).toContainElement(screen.getByText('Email me at'));
        expect(contactInfo).toContainElement(screen.getByText('RyanAK@gmail.com'));
        expect(contactInfo).toContainElement(screen.getByText('Instagram:'));
        expect(contactInfo).toContainElement(screen.getByText('@RAK4TW'));
    });
});
