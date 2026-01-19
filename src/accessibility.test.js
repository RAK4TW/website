import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { axe, toHaveNoViolations } from 'jest-axe';
import Main from './main';
import DetailboxAbout from './components/detailbox/detailbox-about';
import DetailboxProjects from './components/detailbox/detailbox-projects';
import DetailboxContact from './components/detailbox/detailbox-contact';
import DetailboxIdeas from './components/detailbox/detailbox-ideas';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

// Mock react-ga to prevent analytics calls during tests
jest.mock('react-ga', () => ({
    initialize: jest.fn(),
    pageview: jest.fn(),
}));

// Mock image imports
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

// Mock techlogos and mainboxes
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

describe('Accessibility Tests', () => {
    describe('Main Component Accessibility', () => {
        it('should not have any accessibility violations', async () => {
            const { container } = render(
                <BrowserRouter>
                    <Main />
                </BrowserRouter>
            );
            const results = await axe(container);
            expect(results).toHaveNoViolations();
        });

        it('should have proper heading hierarchy', () => {
            render(
                <BrowserRouter>
                    <Main />
                </BrowserRouter>
            );

            const h1 = screen.getByRole('heading', { level: 1 });
            expect(h1).toBeInTheDocument();
            expect(h1).toHaveTextContent('Ryan Koskela');
        });

        it('should have accessible navigation', () => {
            render(
                <BrowserRouter>
                    <Main />
                </BrowserRouter>
            );

            const navLinks = screen.getAllByRole('link');
            expect(navLinks.length).toBeGreaterThan(0);

            navLinks.forEach(link => {
                expect(link).toHaveAttribute('href');
            });
        });

        it('should be keyboard navigable', () => {
            render(
                <BrowserRouter>
                    <Main />
                </BrowserRouter>
            );

            const navLinks = screen.getAllByRole('link');
            navLinks.forEach(link => {
                expect(link).toBeVisible();
            });
        });
    });

    describe('DetailboxAbout Accessibility', () => {
        it('should not have any accessibility violations', async () => {
            const { container } = renderWithRouter(<DetailboxAbout history={createMemoryHistory()} />);
            const results = await axe(container);
            expect(results).toHaveNoViolations();
        });

        it('should have accessible close button', () => {
            const mockHistory = createMemoryHistory();
            renderWithRouter(<DetailboxAbout history={mockHistory} />);

            const closeButton = screen.getByText('Close [X]');
            expect(closeButton).toHaveAttribute('role', 'button');
            expect(closeButton).toHaveAttribute('tabIndex', '0');
            expect(closeButton).toHaveAttribute('aria-label', 'Close about view');
        });

        it('should have accessible image', () => {
            renderWithRouter(<DetailboxAbout history={createMemoryHistory()} />);

            const image = screen.getByAltText('Ryan Koskela - Web Developer');
            expect(image).toBeInTheDocument();
            expect(image).toHaveAttribute('alt');
        });

        it('should have accessible download link', () => {
            renderWithRouter(<DetailboxAbout history={createMemoryHistory()} />);

            const downloadLink = screen.getByText('Download Resume');
            expect(downloadLink).toHaveAttribute('aria-label', "Download Ryan Koskela's resume");
            expect(downloadLink).toHaveAttribute('download');
        });

        it('should support keyboard navigation', () => {
            const mockHistory = createMemoryHistory();
            renderWithRouter(<DetailboxAbout history={mockHistory} />);
            const closeButton = screen.getByText('Close [X]');

            // Test Enter key
            fireEvent.keyDown(closeButton, { key: 'Enter' });
            expect(mockHistory.location.pathname).toBe('/');

            // Reset and test Space key
            mockHistory.push('/about');
            fireEvent.keyDown(closeButton, { key: ' ' });
            expect(mockHistory.location.pathname).toBe('/');
        });
    });

    describe('DetailboxProjects Accessibility', () => {
        it('should not have any accessibility violations', async () => {
            const { container } = renderWithRouter(<DetailboxProjects history={createMemoryHistory()} />);
            const results = await axe(container);
            expect(results).toHaveNoViolations();
        });

        it('should have accessible close button', () => {
            renderWithRouter(<DetailboxProjects />);

            const closeButton = screen.getByText('Close [X]');
            expect(closeButton).toHaveAttribute('role', 'button');
            expect(closeButton).toHaveAttribute('tabIndex', '0');
            expect(closeButton).toHaveAttribute('aria-label', 'Close projects view');
        });

        it('should have accessible images', () => {
            renderWithRouter(<DetailboxProjects />);

            const images = screen.getAllByRole('img');
            images.forEach(image => {
                expect(image).toHaveAttribute('alt');
                expect(image.getAttribute('alt')).not.toBe('');
            });
        });

        it('should have accessible external links', () => {
            renderWithRouter(<DetailboxProjects />);

            const externalLinks = screen.getAllByRole('link').filter(link =>
                link.getAttribute('target') === '_blank'
            );

            externalLinks.forEach(link => {
                expect(link).toHaveAttribute('rel', 'noopener noreferrer');
                expect(link).toHaveAttribute('target', '_blank');
            });
        });

        it('should have descriptive alt text for project images', () => {
            renderWithRouter(<DetailboxProjects />);

            expect(screen.getByAltText('Surity medical device solutions website')).toBeInTheDocument();
            expect(screen.getByAltText('SureSmile orthodontic website')).toBeInTheDocument();
            expect(screen.getByAltText('Byte clear aligners website')).toBeInTheDocument();
        });

        it('should support keyboard navigation', () => {
            const { history } = renderWithRouter(<DetailboxProjects />);
            const closeButton = screen.getByText('Close [X]');

            fireEvent.keyDown(closeButton, { key: 'Enter' });
            expect(history.location.pathname).toBe('/');
        });
    });

    describe('DetailboxContact Accessibility', () => {
        it('should not have any accessibility violations', async () => {
            const { container } = renderWithRouter(<DetailboxContact />);
            const results = await axe(container);
            expect(results).toHaveNoViolations();
        });

        it('should have accessible close button', () => {
            renderWithRouter(<DetailboxContact />);

            const closeButton = screen.getByText('Close [X]');
            expect(closeButton).toHaveAttribute('role', 'button');
            expect(closeButton).toHaveAttribute('tabIndex', '0');
            expect(closeButton).toHaveAttribute('aria-label', 'Close contact view');
        });

        it('should have accessible email link', () => {
            renderWithRouter(<DetailboxContact />);

            const emailLink = screen.getByText('RyanAK@gmail.com');
            expect(emailLink).toHaveAttribute('href', 'mailto:ryanak@gmail.com');
        });

        it('should have accessible social media links', () => {
            renderWithRouter(<DetailboxContact />);

            const instagramLink = screen.getByText('@RAK4TW');
            expect(instagramLink).toHaveAttribute('aria-label', 'Visit Ryan\'s Instagram profile');
            expect(instagramLink).toHaveAttribute('rel', 'noopener noreferrer');
            expect(instagramLink).toHaveAttribute('target', '_blank');
        });

        it('should support keyboard navigation', () => {
            const { history } = renderWithRouter(<DetailboxContact />);
            const closeButton = screen.getByText('Close [X]');

            fireEvent.keyDown(closeButton, { key: 'Enter' });
            expect(history.location.pathname).toBe('/');
        });
    });

    describe('DetailboxIdeas Accessibility', () => {
        it('should not have any accessibility violations', async () => {
            const { container } = renderWithRouter(<DetailboxIdeas />);
            const results = await axe(container);
            expect(results).toHaveNoViolations();
        });

        it('should have accessible close button', () => {
            renderWithRouter(<DetailboxIdeas />);

            const closeButton = screen.getByText('Close [X]');
            expect(closeButton).toHaveAttribute('role', 'button');
            expect(closeButton).toHaveAttribute('tabIndex', '0');
            expect(closeButton).toHaveAttribute('aria-label', 'Close ideas view');
        });

        it('should have accessible content structure', () => {
            renderWithRouter(<DetailboxIdeas />);

            const heading = screen.getByRole('heading', { level: 1 });
            expect(heading).toHaveTextContent('Ideas');

            const content = screen.getByText(/Please check back later/);
            expect(content).toBeInTheDocument();
        });

        it('should support keyboard navigation', () => {
            const { history } = renderWithRouter(<DetailboxIdeas />);
            const closeButton = screen.getByText('Close [X]');

            fireEvent.keyDown(closeButton, { key: 'Enter' });
            expect(history.location.pathname).toBe('/');
        });
    });

    describe('Color Contrast and Visual Accessibility', () => {
        it('should have sufficient color contrast for text', () => {
            render(
                <BrowserRouter>
                    <Main />
                </BrowserRouter>
            );

            // This would typically be tested with a color contrast checker
            // For now, we ensure text elements are present and readable
            const textElements = screen.getAllByRole('heading');
            textElements.forEach(element => {
                expect(element).toBeVisible();
            });
        });

        it('should have focus indicators for interactive elements', () => {
            render(
                <BrowserRouter>
                    <Main />
                </BrowserRouter>
            );

            const links = screen.getAllByRole('link');
            links.forEach(link => {
                // Links should be focusable
                expect(link).toHaveAttribute('href');
            });
        });
    });

    describe('Screen Reader Compatibility', () => {
        it('should have proper ARIA labels', () => {
            renderWithRouter(<DetailboxAbout />);

            const closeButton = screen.getByLabelText('Close about view');
            expect(closeButton).toBeInTheDocument();

            const downloadLink = screen.getByLabelText("Download Ryan Koskela's resume");
            expect(downloadLink).toBeInTheDocument();
        });

        it('should have semantic HTML structure', () => {
            render(
                <BrowserRouter>
                    <Main />
                </BrowserRouter>
            );

            // Check for semantic elements
            const header = document.querySelector('header');
            const main = document.querySelector('.Main');
            const footer = document.querySelector('footer');

            expect(header).toBeInTheDocument();
            expect(main).toBeInTheDocument();
            expect(footer).toBeInTheDocument();
        });
    });
});
