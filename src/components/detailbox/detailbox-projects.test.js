import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import DetailboxProjects from './detailbox-projects';

// Mock all image imports
jest.mock('../../assets/agility.jpg', () => 'agility.jpg');
jest.mock('../../assets/bgi.jpg', () => 'bgi.jpg');
jest.mock('../../assets/byte_thumb.jpg', () => 'byte.jpg');
jest.mock('../../assets/intact-pic.jpg', () => 'intact.jpg');
jest.mock('../../assets/jlrfd.jpg', () => 'jlrfd.jpg');
jest.mock('../../assets/mardo.jpg', () => 'mardo.jpg');
jest.mock('../../assets/mdc1.jpg', () => 'mdc1.jpg');
jest.mock('../../assets/mdc2.jpg', () => 'mdc2.jpg');
jest.mock('../../assets/mdc3.jpg', () => 'mdc3.jpg');
jest.mock('../../assets/mdc4.jpg', () => 'mdc4.jpg');
jest.mock('../../assets/sda.jpg', () => 'sda.jpg');
jest.mock('../../assets/suresmile.jpg', () => 'suresmile.jpg');
jest.mock('../../assets/surity.jpg', () => 'surity.jpg');
jest.mock('../../assets/vmt.jpg', () => 'vmt.jpg');

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

describe('DetailboxProjects Component', () => {
    it('renders without crashing', () => {
        renderWithRouter(<DetailboxProjects />);
    });

    it('displays the Projects title', () => {
        renderWithRouter(<DetailboxProjects />);
        expect(screen.getByText('Projects')).toBeInTheDocument();
    });

    it('displays close button with accessibility attributes', () => {
        renderWithRouter(<DetailboxProjects />);
        const closeButton = screen.getByText('Close [X]');
        expect(closeButton).toHaveAttribute('role', 'button');
        expect(closeButton).toHaveAttribute('tabIndex', '0');
        expect(closeButton).toHaveAttribute('aria-label', 'Close projects view');
    });

    it('displays project description', () => {
        renderWithRouter(<DetailboxProjects />);
        expect(screen.getByText('A selection of my past projects.')).toBeInTheDocument();
    });

    it('displays all project entries', () => {
        renderWithRouter(<DetailboxProjects />);

        // Check for major project titles
        expect(screen.getByText('Surity')).toBeInTheDocument();
        expect(screen.getByText('SureSmile')).toBeInTheDocument();
        expect(screen.getByText('Byte')).toBeInTheDocument();
        expect(screen.getByText('Agility Fuel Solutions')).toBeInTheDocument();
        expect(screen.getByText('Business Growth Innovators')).toBeInTheDocument();
        expect(screen.getByText('SDA Partnership USA')).toBeInTheDocument();
        expect(screen.getByText('Accelerated Mobile Pages (AMP)')).toBeInTheDocument();
        expect(screen.getByText('Jewelry By Mardo')).toBeInTheDocument();
        expect(screen.getByText('Jaguar Land Rover Facility Design')).toBeInTheDocument();
        expect(screen.getByText('VM-Tech')).toBeInTheDocument();
        expect(screen.getByText('Mobile Design Concepts')).toBeInTheDocument();
    });

    it('displays project images with correct attributes', () => {
        renderWithRouter(<DetailboxProjects />);

        const images = screen.getAllByRole('img');
        expect(images.length).toBeGreaterThan(10);

        // Check that all images have lazy loading
        images.forEach(image => {
            expect(image).toHaveAttribute('loading', 'lazy');
        });
    });

    it('displays external links with correct attributes', () => {
        renderWithRouter(<DetailboxProjects />);

        const externalLinks = screen.getAllByRole('link').filter(link =>
            link.getAttribute('target') === '_blank'
        );

        // Check that all external links have security attributes
        externalLinks.forEach(link => {
            expect(link).toHaveAttribute('target', '_blank');
            expect(link).toHaveAttribute('rel', 'noopener noreferrer');
        });
    });

    it('displays descriptive alt text for images', () => {
        renderWithRouter(<DetailboxProjects />);

        expect(screen.getByAltText('Surity medical device solutions website')).toBeInTheDocument();
        expect(screen.getByAltText('SureSmile orthodontic website')).toBeInTheDocument();
        expect(screen.getByAltText('Byte clear aligners website')).toBeInTheDocument();
        expect(screen.getByAltText('Agility Fuel Solutions website')).toBeInTheDocument();
        expect(screen.getByAltText('Business Growth Innovators website')).toBeInTheDocument();
    });

    it('mobile design concepts section displays multiple images', () => {
        renderWithRouter(<DetailboxProjects />);

        const mobileConceptImages = screen.getAllByAltText(/Responsive Mobile Design concept/);
        expect(mobileConceptImages.length).toBe(4);
    });

    it('calls history.replace when close button is clicked', () => {
        const { history } = renderWithRouter(<DetailboxProjects />);
        const closeButton = screen.getByText('Close [X]');

        fireEvent.click(closeButton);
        expect(history.location.pathname).toBe('/');
    });

    it('calls history.replace when close button is activated with keyboard', () => {
        const { history } = renderWithRouter(<DetailboxProjects />);
        const closeButton = screen.getByText('Close [X]');

        fireEvent.keyDown(closeButton, { key: 'Enter' });
        expect(history.location.pathname).toBe('/');

        // Reset and test space key
        history.push('/projects');
        fireEvent.keyDown(closeButton, { key: ' ' });
        expect(history.location.pathname).toBe('/');
    });

    it('displays correct project descriptions', () => {
        renderWithRouter(<DetailboxProjects />);

        expect(screen.getByText(/Surity is a medical device solutions company/)).toBeInTheDocument();
        expect(screen.getByText(/SureSmile was built from the ground up with Next.js\/React/)).toBeInTheDocument();
        expect(screen.getByText(/Developed new Shopify site using a custom theme/)).toBeInTheDocument();
        expect(screen.getByText(/WordPress site with custom theme edits/)).toBeInTheDocument();
    });

    it('external links have correct href attributes', () => {
        renderWithRouter(<DetailboxProjects />);

        const surityLink = screen.getByAltText('Surity medical device solutions website').closest('a');
        expect(surityLink).toHaveAttribute('href', 'https://www.surity.care');

        const suresmileLink = screen.getByAltText('SureSmile orthodontic website').closest('a');
        expect(suresmileLink).toHaveAttribute('href', 'https://www.suresmile.com');
    });
});
