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

// Mock images to prevent loading issues
jest.mock('./assets/ryan.jpg', () => 'test-image.jpg');
jest.mock('./assets/Koskela_Ryan_Resume.pdf', () => 'test-resume.pdf');

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

describe('Portfolio Website - Working Tests', () => {
    describe('Main Component Basic Rendering', () => {
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

        it('displays subheading text', () => {
            renderWithRouter(<Main />);
            expect(screen.getByText(/Web developer, writer, sports and food\/drink aficionado/)).toBeInTheDocument();
        });

        it('displays footer with current year', () => {
            renderWithRouter(<Main />);
            const currentYear = new Date().getFullYear();
            expect(screen.getByText(`© ${currentYear} Ryan Koskela`)).toBeInTheDocument();
        });
    });

    describe('Navigation Links Structure', () => {
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

    describe('Mainboxes Component', () => {
        it('renders mainboxes component on root path', () => {
            const { container } = renderWithRouter(<Main />, ['/']);
            expect(container.getByTestId('mainboxes-component')).toBeInTheDocument();
        });

        it('displays all mainbox items', () => {
            const { container } = renderWithRouter(<Main />, ['/']);

            expect(container.getByTestId('mainbox-about')).toBeInTheDocument();
            expect(container.getByTestId('mainbox-projects')).toBeInTheDocument();
            expect(container.getByTestId('mainbox-contact')).toBeInTheDocument();
            expect(container.getByTestId('mainbox-ideas')).toBeInTheDocument();
        });

        it('displays correct headers for mainbox items', () => {
            const { container } = renderWithRouter(<Main />, ['/']);

            expect(container.getByText('About Me')).toBeInTheDocument();
            expect(container.getByText('Projects')).toBeInTheDocument();
            expect(container.getByText('Contact Info')).toBeInTheDocument();
            expect(container.getByText('Items of Interest')).toBeInTheDocument();
        });
    });

    describe('Footer Component', () => {
        it('displays techlogos component', () => {
            const { container } = renderWithRouter(<Main />, ['/']);
            expect(container.getByTestId('techlogos-component')).toBeInTheDocument();
        });

        it('displays copyright text', () => {
            renderWithRouter(<Main />);
            const currentYear = new Date().getFullYear();
            expect(screen.getByText(`© ${currentYear} Ryan Koskela`)).toBeInTheDocument();
        });
    });

    describe('Basic Accessibility', () => {
        it('has proper heading structure', () => {
            renderWithRouter(<Main />);

            const h1 = screen.getByRole('heading', { level: 1 });
            expect(h1).toBeInTheDocument();
            expect(h1).toHaveTextContent('Ryan Koskela');
        });

        it('has accessible navigation links', () => {
            renderWithRouter(<Main />);

            const navLinks = screen.getAllByRole('link');
            expect(navLinks.length).toBeGreaterThan(0);

            navLinks.forEach(link => {
                expect(link).toHaveAttribute('href');
            });
        });

        it('has semantic HTML structure', () => {
            renderWithRouter(<Main />);

            const header = document.querySelector('header');
            const main = document.querySelector('.Main');
            const footer = document.querySelector('footer');

            expect(header).toBeInTheDocument();
            expect(main).toBeInTheDocument();
            expect(footer).toBeInTheDocument();
        });
    });

    describe('Component Integration', () => {
        it('integrates all components properly', () => {
            const { container } = renderWithRouter(<Main />);

            // Check that main components are present
            expect(screen.getByText('Ryan Koskela')).toBeInTheDocument();
            expect(container.getByTestId('mainboxes-component')).toBeInTheDocument();
            expect(container.getByTestId('techlogos-component')).toBeInTheDocument();

            // Check navigation
            expect(screen.getByText('About')).toBeInTheDocument();
            expect(screen.getByText('Projects')).toBeInTheDocument();
            expect(screen.getByText('Contact')).toBeInTheDocument();
            expect(screen.getByText('Ideas')).toBeInTheDocument();

            // Check footer
            const currentYear = new Date().getFullYear();
            expect(screen.getByText(`© ${currentYear} Ryan Koskela`)).toBeInTheDocument();
        });
    });
});
