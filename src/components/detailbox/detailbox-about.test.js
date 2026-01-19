import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import DetailboxAbout from './detailbox-about';

// Mock the image imports
jest.mock('../../assets/ryan.jpg', () => 'test-image.jpg');
jest.mock('../../assets/Koskela_Ryan_Resume.pdf', () => 'test-resume.pdf');

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

describe('DetailboxAbout Component', () => {
    it('renders without crashing', () => {
        renderWithRouter(<DetailboxAbout />);
    });

    it('displays the About title', () => {
        renderWithRouter(<DetailboxAbout />);
        expect(screen.getByText('About')).toBeInTheDocument();
    });

    it('displays the close button', () => {
        renderWithRouter(<DetailboxAbout />);
        expect(screen.getByText('Close [X]')).toBeInTheDocument();
    });

    it('displays personal description text', () => {
        renderWithRouter(<DetailboxAbout />);
        expect(screen.getByText(/After taking interest in a variety of different careers/)).toBeInTheDocument();
        expect(screen.getByText(/web development/)).toBeInTheDocument();
        expect(screen.getByText(/front end development/)).toBeInTheDocument();
    });

    it('displays download resume link', () => {
        renderWithRouter(<DetailboxAbout />);
        const resumeLink = screen.getByText('Download Resume');
        expect(resumeLink).toBeInTheDocument();
        expect(resumeLink).toHaveAttribute('download');
        expect(resumeLink).toHaveAttribute('href', 'test-resume.pdf');
    });

    it('displays profile image with correct attributes', () => {
        renderWithRouter(<DetailboxAbout />);
        const image = screen.getByAltText('Ryan Koskela - Web Developer');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', 'test-image.jpg');
        expect(image).toHaveAttribute('loading', 'lazy');
        expect(image).toHaveClass('img-fluid', 'rounded', 'float-md-right');
    });

    it('close button has correct accessibility attributes', () => {
        renderWithRouter(<DetailboxAbout />);
        const closeButton = screen.getByText('Close [X]');
        expect(closeButton).toHaveAttribute('role', 'button');
        expect(closeButton).toHaveAttribute('tabIndex', '0');
        expect(closeButton).toHaveAttribute('aria-label', 'Close about view');
    });

    it('calls history.replace when close button is clicked', () => {
        const { history } = renderWithRouter(<DetailboxAbout />);
        const closeButton = screen.getByText('Close [X]');

        fireEvent.click(closeButton);
        expect(history.location.pathname).toBe('/');
    });

    it('calls history.replace when close button is activated with Enter key', () => {
        const { history } = renderWithRouter(<DetailboxAbout />);
        const closeButton = screen.getByText('Close [X]');

        fireEvent.keyDown(closeButton, { key: 'Enter' });
        expect(history.location.pathname).toBe('/');
    });

    it('calls history.replace when close button is activated with Space key', () => {
        const { history } = renderWithRouter(<DetailboxAbout />);
        const closeButton = screen.getByText('Close [X]');

        fireEvent.keyDown(closeButton, { key: ' ' });
        expect(history.location.pathname).toBe('/');
    });

    it('resume link has accessibility attributes', () => {
        renderWithRouter(<DetailboxAbout />);
        const resumeLink = screen.getByText('Download Resume');
        expect(resumeLink).toHaveAttribute('aria-label', "Download Ryan Koskela's resume");
    });
});
