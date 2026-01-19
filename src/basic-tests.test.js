import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
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

describe('Portfolio Website - Basic Tests', () => {
    it('renders without crashing', () => {
        render(
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        );
    });

    it('displays the main title', () => {
        render(
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        );
        expect(screen.getByText('Ryan Koskela')).toBeInTheDocument();
    });

    it('displays navigation links', () => {
        render(
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        );

        // Check that navigation links exist
        expect(screen.getByRole('link', { name: 'Ryan Koskela' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Projects/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Ideas/i })).toBeInTheDocument();
    });

    it('displays subheading text', () => {
        render(
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        );
        expect(screen.getByText(/Web developer, writer, sports and food\/drink aficionado/)).toBeInTheDocument();
    });

    it('displays footer with current year', () => {
        render(
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        );
        const currentYear = new Date().getFullYear();
        expect(screen.getByText(`© ${currentYear} Ryan Koskela`)).toBeInTheDocument();
    });

    it('displays mainboxes component', () => {
        render(
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        );
        expect(screen.getByTestId('mainboxes-component')).toBeInTheDocument();
    });

    it('displays techlogos component', () => {
        render(
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        );
        expect(screen.getByTestId('techlogos-component')).toBeInTheDocument();
    });

    it('has proper heading structure', () => {
        render(
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        );

        const h1 = screen.getByRole('heading', { level: 1 });
        expect(h1).toBeInTheDocument();
        expect(h1).toHaveTextContent('Ryan Koskela');
    });

    it('navigation links have correct href attributes', () => {
        render(
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        );

        const homeLink = screen.getByRole('link', { name: 'Ryan Koskela' });
        expect(homeLink).toHaveAttribute('href', '/');

        const aboutLink = screen.getByRole('link', { name: /About/i });
        expect(aboutLink).toHaveAttribute('href', '/about');

        const projectsLink = screen.getByRole('link', { name: /Projects/i });
        expect(projectsLink).toHaveAttribute('href', '/projects');

        const contactLink = screen.getByRole('link', { name: /Contact/i });
        expect(contactLink).toHaveAttribute('href', '/contact');

        const ideasLink = screen.getByRole('link', { name: /Ideas/i });
        expect(ideasLink).toHaveAttribute('href', '/ideas');
    });

    it('displays mainbox items', () => {
        render(
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        );

        expect(screen.getByTestId('mainbox-about')).toBeInTheDocument();
        expect(screen.getByTestId('mainbox-projects')).toBeInTheDocument();
        expect(screen.getByTestId('mainbox-contact')).toBeInTheDocument();
        expect(screen.getByTestId('mainbox-ideas')).toBeInTheDocument();
    });

    it('displays correct headers for mainbox items', () => {
        render(
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        );

        // Use the mainboxes component container to scope the query
        const mainboxesContainer = screen.getByTestId('mainboxes-component');
        expect(mainboxesContainer).toHaveTextContent('About Me');
        expect(mainboxesContainer).toHaveTextContent('Projects');
        expect(mainboxesContainer).toHaveTextContent('Contact Info');
        expect(mainboxesContainer).toHaveTextContent('Items of Interest');
    });

    it('has semantic HTML structure', () => {
        render(
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        );

        const header = document.querySelector('header');
        const main = document.querySelector('.Main');
        const footer = document.querySelector('footer');

        expect(header).toBeInTheDocument();
        expect(main).toBeInTheDocument();
        expect(footer).toBeInTheDocument();
    });
});
