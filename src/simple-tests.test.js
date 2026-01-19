import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Main from './main';

// Mock react-ga to prevent analytics calls during tests
jest.mock('react-ga', () => ({
    initialize: jest.fn(),
    pageview: jest.fn(),
}));

// Mock images
jest.mock('./assets/ryan.jpg', () => 'test-image.jpg');
jest.mock('./assets/Koskela_Ryan_Resume.pdf', () => 'test-resume.pdf');
jest.mock('./assets/agility.jpg', () => 'agility.jpg');
jest.mock('./assets/bgi.jpg', () => 'bgi.jpg');
jest.mock('./assets/byte_thumb.jpg', () => 'byte.jpg');
jest.mock('./assets/intact-pic.jpg', () => 'intact.jpg');
jest.mock('./assets/jlrfd.jpg', () => 'jlrfd.jpg');
jest.mock('./assets/mardo.jpg', () => 'mardo.jpg');
jest.mock('./assets/mdc1.jpg', () => 'mdc1.jpg');
jest.mock('./assets/mdc2.jpg', () => 'mdc2.jpg');
jest.mock('./assets/mdc3.jpg', () => 'mdc3.jpg');
jest.mock('./assets/mdc4.jpg', () => 'mdc4.jpg');
jest.mock('./assets/sda.jpg', () => 'sda.jpg');
jest.mock('./assets/suresmile.jpg', () => 'suresmile.jpg');
jest.mock('./assets/surity.jpg', () => 'surity.jpg');
jest.mock('./assets/vmt.jpg', () => 'vmt.jpg');

// Mock components
jest.mock('./components/techlogos.js', () => {
    return function MockTechlogos() {
        return <div data-testid="techlogos-component">Techlogos Component</div>;
    };
});

jest.mock('./components/combined-mainboxes.js', () => {
    return function MockMainboxes({ stateinfo }) {
        return (
            <div data-testid="mainboxes-component">
                {stateinfo.map((item, index) => (
                    <div key={index} data-testid={`mainbox-${item.class}`}>
                        <h2>{item.header}</h2>
                        <p>{item.tagline}</p>
                    </div>
                ))}
            </div>
        );
    };
});

jest.mock('./components/detailbox/detailbox-about.js', () => {
    return function MockDetailboxAbout({ history }) {
        return (
            <div data-testid="about-component">
                <h1>About</h1>
                <button
                    onClick={() => history.replace('/')}
                    aria-label="Close about view"
                    role="button"
                    tabIndex="0"
                >
                    Close [X]
                </button>
            </div>
        );
    };
});

jest.mock('./components/detailbox/detailbox-projects.js', () => {
    return function MockDetailboxProjects({ history }) {
        return (
            <div data-testid="projects-component">
                <h1>Projects</h1>
                <button
                    onClick={() => history.replace('/')}
                    aria-label="Close projects view"
                    role="button"
                    tabIndex="0"
                >
                    Close [X]
                </button>
            </div>
        );
    };
});

jest.mock('./components/detailbox/detailbox-contact.js', () => {
    return function MockDetailboxContact({ history }) {
        return (
            <div data-testid="contact-component">
                <h1>Contact</h1>
                <button
                    onClick={() => history.replace('/')}
                    aria-label="Close contact view"
                    role="button"
                    tabIndex="0"
                >
                    Close [X]
                </button>
            </div>
        );
    };
});

jest.mock('./components/detailbox/detailbox-ideas.js', () => {
    return function MockDetailboxIdeas({ history }) {
        return (
            <div data-testid="ideas-component">
                <h1>Ideas</h1>
                <button
                    onClick={() => history.replace('/')}
                    aria-label="Close ideas view"
                    role="button"
                    tabIndex="0"
                >
                    Close [X]
                </button>
            </div>
        );
    };
});

const renderWithRouter = (component, initialEntries = ['/']) => {
    const history = createMemoryHistory({ initialEntries });
    return {
        ...render(
            <Router history={history}>
                {component}
            </Router>
        ),
        history,
    };
};

describe('Portfolio Website Tests', () => {
    describe('Main Component', () => {
        it('renders without crashing', () => {
            renderWithRouter(<Main />);
        });

        it('displays the main title', () => {
            renderWithRouter(<Main />);
            expect(screen.getByText('Ryan Koskela')).toBeInTheDocument();
        });

        it('displays navigation links', () => {
            renderWithRouter(<Main />);
            expect(screen.getByText('About')).toBeInTheDocument();
            expect(screen.getByText('Projects')).toBeInTheDocument();
            expect(screen.getByText('Contact')).toBeInTheDocument();
            expect(screen.getByText('Ideas')).toBeInTheDocument();
        });

        it('displays footer with current year', () => {
            renderWithRouter(<Main />);
            const currentYear = new Date().getFullYear();
            expect(screen.getByText(`© ${currentYear} Ryan Koskela`)).toBeInTheDocument();
        });
    });

    describe('Routing', () => {
        it('renders mainboxes on root path', () => {
            const { container } = renderWithRouter(<Main />, ['/']);
            expect(container.getByTestId('mainboxes-component')).toBeInTheDocument();
        });

        it('renders about component on /about path', () => {
            const { container } = renderWithRouter(<Main />, ['/about']);
            expect(container.getByTestId('about-component')).toBeInTheDocument();
        });

        it('renders projects component on /projects path', () => {
            const { container } = renderWithRouter(<Main />, ['/projects']);
            expect(container.getByTestId('projects-component')).toBeInTheDocument();
        });

        it('renders contact component on /contact path', () => {
            const { container } = renderWithRouter(<Main />, ['/contact']);
            expect(container.getByTestId('contact-component')).toBeInTheDocument();
        });

        it('renders ideas component on /ideas path', () => {
            const { container } = renderWithRouter(<Main />, ['/ideas']);
            expect(container.getByTestId('ideas-component')).toBeInTheDocument();
        });

        it('redirects to root for unknown paths', () => {
            const { container, history } = renderWithRouter(<Main />, ['/unknown']);
            expect(container.getByTestId('mainboxes-component')).toBeInTheDocument();
            expect(history.location.pathname).toBe('/');
        });
    });

    describe('Navigation Links', () => {
        it('has correct href attributes', () => {
            renderWithRouter(<Main />);

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
            renderWithRouter(<Main />);

            const homeLink = screen.getByText('Ryan Koskela');
            expect(homeLink).toHaveAttribute('href', '/');
        });
    });

    describe('Component Accessibility', () => {
        it('about component has accessible close button', () => {
            renderWithRouter(<Main />, ['/about']);
            const closeButton = screen.getByLabelText('Close about view');

            expect(closeButton).toHaveAttribute('role', 'button');
            expect(closeButton).toHaveAttribute('tabIndex', '0');
            expect(closeButton).toHaveAttribute('aria-label', 'Close about view');
        });

        it('projects component has accessible close button', () => {
            renderWithRouter(<Main />, ['/projects']);
            const closeButton = screen.getByLabelText('Close projects view');

            expect(closeButton).toHaveAttribute('role', 'button');
            expect(closeButton).toHaveAttribute('tabIndex', '0');
            expect(closeButton).toHaveAttribute('aria-label', 'Close projects view');
        });

        it('contact component has accessible close button', () => {
            renderWithRouter(<Main />, ['/contact']);
            const closeButton = screen.getByLabelText('Close contact view');

            expect(closeButton).toHaveAttribute('role', 'button');
            expect(closeButton).toHaveAttribute('tabIndex', '0');
            expect(closeButton).toHaveAttribute('aria-label', 'Close contact view');
        });

        it('ideas component has accessible close button', () => {
            renderWithRouter(<Main />, ['/ideas']);
            const closeButton = screen.getByLabelText('Close ideas view');

            expect(closeButton).toHaveAttribute('role', 'button');
            expect(closeButton).toHaveAttribute('tabIndex', '0');
            expect(closeButton).toHaveAttribute('aria-label', 'Close ideas view');
        });
    });

    describe('Close Button Functionality', () => {
        it('about close button navigates home', () => {
            const { history } = renderWithRouter(<Main />, ['/about']);
            const closeButton = screen.getByLabelText('Close about view');

            fireEvent.click(closeButton);
            expect(history.location.pathname).toBe('/');
        });

        it('projects close button navigates home', () => {
            const { history } = renderWithRouter(<Main />, ['/projects']);
            const closeButton = screen.getByLabelText('Close projects view');

            fireEvent.click(closeButton);
            expect(history.location.pathname).toBe('/');
        });

        it('contact close button navigates home', () => {
            const { history } = renderWithRouter(<Main />, ['/contact']);
            const closeButton = screen.getByLabelText('Close contact view');

            fireEvent.click(closeButton);
            expect(history.location.pathname).toBe('/');
        });

        it('ideas close button navigates home', () => {
            const { history } = renderWithRouter(<Main />, ['/ideas']);
            const closeButton = screen.getByLabelText('Close ideas view');

            fireEvent.click(closeButton);
            expect(history.location.pathname).toBe('/');
        });
    });

    describe('Keyboard Navigation', () => {
        it('supports Enter key on close buttons', () => {
            const { history } = renderWithRouter(<Main />, ['/about']);
            const closeButton = screen.getByLabelText('Close about view');

            fireEvent.keyDown(closeButton, { key: 'Enter' });
            expect(history.location.pathname).toBe('/');
        });

        it('supports Space key on close buttons', () => {
            const { history } = renderWithRouter(<Main />, ['/about']);
            const closeButton = screen.getByLabelText('Close about view');

            fireEvent.keyDown(closeButton, { key: ' ' });
            expect(history.location.pathname).toBe('/');
        });
    });
});
