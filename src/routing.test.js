import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Main from './main';

// Mock react-ga to prevent analytics calls during tests
jest.mock('react-ga', () => ({
    initialize: jest.fn(),
    pageview: jest.fn(),
}));

// Mock all detailbox components for routing tests
jest.mock('./components/detailbox/detailbox-about.js', () => {
    return function MockDetailboxAbout() {
        return <div data-testid="about-component">About Component</div>;
    };
});

jest.mock('./components/detailbox/detailbox-projects.js', () => {
    return function MockDetailboxProjects() {
        return <div data-testid="projects-component">Projects Component</div>;
    };
});

jest.mock('./components/detailbox/detailbox-contact.js', () => {
    return function MockDetailboxContact() {
        return <div data-testid="contact-component">Contact Component</div>;
    };
});

jest.mock('./components/detailbox/detailbox-ideas.js', () => {
    return function MockDetailboxIdeas() {
        return <div data-testid="ideas-component">Ideas Component</div>;
    };
});

// Mock mainboxes component
jest.mock('./components/combined-mainboxes.js', () => {
    return function MockMainboxes() {
        return <div data-testid="mainboxes-component">Mainboxes Component</div>;
    };
});

// Mock techlogos component
jest.mock('./components/techlogos.js', () => {
    return function MockTechlogos() {
        return <div data-testid="techlogos-component">Techlogos Component</div>;
    };
});

describe('Routing Tests', () => {
    it('renders mainboxes component on root path', () => {
        const history = createMemoryHistory({ initialEntries: ['/'] });
        render(
            <Router history={history}>
                <Main />
            </Router>
        );

        expect(screen.getByTestId('mainboxes-component')).toBeInTheDocument();
    });

    it('renders about component on /about path', () => {
        const history = createMemoryHistory({ initialEntries: ['/about'] });
        render(
            <Router history={history}>
                <Main />
            </Router>
        );

        expect(screen.getByTestId('about-component')).toBeInTheDocument();
    });

    it('renders projects component on /projects path', () => {
        const history = createMemoryHistory({ initialEntries: ['/projects'] });
        render(
            <Router history={history}>
                <Main />
            </Router>
        );

        expect(screen.getByTestId('projects-component')).toBeInTheDocument();
    });

    it('renders contact component on /contact path', () => {
        const history = createMemoryHistory({ initialEntries: ['/contact'] });
        render(
            <Router history={history}>
                <Main />
            </Router>
        );

        expect(screen.getByTestId('contact-component')).toBeInTheDocument();
    });

    it('renders ideas component on /ideas path', () => {
        const history = createMemoryHistory({ initialEntries: ['/ideas'] });
        render(
            <Router history={history}>
                <Main />
            </Router>
        );

        expect(screen.getByTestId('ideas-component')).toBeInTheDocument();
    });

    it('redirects to root for unknown paths', () => {
        const history = createMemoryHistory({ initialEntries: ['/unknown-path'] });
        render(
            <Router history={history}>
                <Main />
            </Router>
        );

        expect(screen.getByTestId('mainboxes-component')).toBeInTheDocument();
        expect(history.location.pathname).toBe('/');
    });

    it('navigation links work correctly', () => {
        render(
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        );

        const aboutLink = screen.getByText('About');
        const projectsLink = screen.getByText('Projects');
        const contactLink = screen.getByText('Contact');
        const ideasLink = screen.getByText('Ideas');

        expect(aboutLink).toHaveAttribute('href', '/about');
        expect(projectsLink).toHaveAttribute('href', '/projects');
        expect(contactLink).toHaveAttribute('href', '/contact');
        expect(ideasLink).toHaveAttribute('href', '/ideas');
    });

    it('home link navigates to root', () => {
        render(
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        );

        const homeLink = screen.getByText('Ryan Koskela');
        expect(homeLink).toHaveAttribute('href', '/');
    });

    it('programmatic navigation works', () => {
        const history = createMemoryHistory({ initialEntries: ['/'] });
        render(
            <Router history={history}>
                <Main />
            </Router>
        );

        // Simulate navigation
        history.push('/about');
        expect(history.location.pathname).toBe('/about');
    });

    it('redirect functionality works with sessionStorage', () => {
        // Mock sessionStorage
        const sessionStorageMock = {
            getItem: jest.fn(() => '/projects'),
            removeItem: jest.fn(),
            setItem: jest.fn(),
        };
        Object.defineProperty(window, 'sessionStorage', {
            value: sessionStorageMock,
            writable: true,
        });

        const history = createMemoryHistory({ initialEntries: ['/'] });
        render(
            <Router history={history}>
                <Main />
            </Router>
        );

        expect(sessionStorageMock.getItem).toHaveBeenCalledWith('redirect');
        expect(sessionStorageMock.removeItem).toHaveBeenCalledWith('redirect');
    });

    it('handles multiple route changes', () => {
        const history = createMemoryHistory({ initialEntries: ['/'] });
        render(
            <Router history={history}>
                <Main />
            </Router>
        );

        // Navigate to different routes
        history.push('/about');
        expect(screen.getByTestId('about-component')).toBeInTheDocument();

        history.push('/projects');
        expect(screen.getByTestId('projects-component')).toBeInTheDocument();

        history.push('/contact');
        expect(screen.getByTestId('contact-component')).toBeInTheDocument();

        history.push('/');
        expect(screen.getByTestId('mainboxes-component')).toBeInTheDocument();
    });

    it('exact path matching works correctly', () => {
        const history = createMemoryHistory({ initialEntries: ['/about/extra'] });
        render(
            <Router history={history}>
                <Main />
            </Router>
        );

        // Should redirect to root since /about/extra doesn't match exactly
        expect(screen.getByTestId('mainboxes-component')).toBeInTheDocument();
        expect(history.location.pathname).toBe('/');
    });
});
