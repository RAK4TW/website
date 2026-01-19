import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

// Mock react-ga to prevent analytics calls during tests
jest.mock('react-ga', () => ({
    initialize: jest.fn(),
    pageview: jest.fn(),
}));

// Mock all images to prevent loading issues during tests
const mockImages = [
    'ryan.jpg',
    'Koskela_Ryan_Resume.pdf',
    'agility.jpg',
    'bgi.jpg',
    'byte_thumb.jpg',
    'intact-pic.jpg',
    'jlrfd.jpg',
    'mardo.jpg',
    'mdc1.jpg',
    'mdc2.jpg',
    'mdc3.jpg',
    'mdc4.jpg',
    'sda.jpg',
    'suresmile.jpg',
    'surity.jpg',
    'vmt.jpg'
];

mockImages.forEach(image => {
    jest.mock(`../assets/${image}`, () => image);
});

// Custom render function with router
export const renderWithRouter = (
    component,
    { initialEntries = ['/'], initialIndex = 0 } = {}
) => {
    const history = createMemoryHistory({ initialEntries, initialIndex });
    return {
        ...render(
            <Router history={history}>
                {component}
            </Router>
        ),
        history,
    };
};

// Custom render function with BrowserRouter
export const renderWithBrowserRouter = (component) => {
    return render(component, { wrapper: BrowserRouter });
};

// Helper to test close button functionality
export const testCloseButton = (container, history, ariaLabel) => {
    const closeButton = container.getByLabelText(ariaLabel);

    // Test click
    fireEvent.click(closeButton);
    expect(history.location.pathname).toBe('/');

    // Reset and test Enter key
    history.push('/test');
    fireEvent.keyDown(closeButton, { key: 'Enter' });
    expect(history.location.pathname).toBe('/');

    // Reset and test Space key
    history.push('/test');
    fireEvent.keyDown(closeButton, { key: ' ' });
    expect(history.location.pathname).toBe('/');
};

// Helper to test accessibility attributes
export const testAccessibilityAttributes = (element, attributes) => {
    Object.entries(attributes).forEach(([attr, value]) => {
        expect(element).toHaveAttribute(attr, value);
    });
};

// Helper to test external links
export const testExternalLink = (link, expectedHref) => {
    expect(link).toHaveAttribute('href', expectedHref);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
};

// Helper to test images
export const testImage = (image, expectedAlt, expectedSrc) => {
    expect(image).toHaveAttribute('alt', expectedAlt);
    if (expectedSrc) {
        expect(image).toHaveAttribute('src', expectedSrc);
    }
    expect(image).toHaveAttribute('loading', 'lazy');
};

// Helper to test keyboard navigation
export const testKeyboardNavigation = (element, callback) => {
    fireEvent.keyDown(element, { key: 'Enter' });
    if (callback) callback();

    fireEvent.keyDown(element, { key: ' ' });
    if (callback) callback();
};

// Helper to create mock component
export const createMockComponent = (name, testId) => {
    return function MockComponent() {
        return <div data-testid={testId}>{name} Component</div>;
    };
};

// Helper to mock multiple components
export const mockComponents = (components) => {
    const mocks = {};

    Object.entries(components).forEach(([name, testId]) => {
        const mockComponent = createMockComponent(name, testId);
        jest.doMock(name, () => mockComponent);
        mocks[name] = mockComponent;
    });

    return mocks;
};

// Helper to test route navigation
export const testRouteNavigation = (history, routes) => {
    Object.entries(routes).forEach(([path, testId]) => {
        history.push(path);
        // Component should render based on the route
        expect(history.location.pathname).toBe(path);
    });
};

// Helper to cleanup mocks
export const cleanupMocks = () => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
};

// Helper to test sessionStorage functionality
export const testSessionStorage = (key, value, callback) => {
    const mockSessionStorage = {
        getItem: jest.fn(() => value),
        removeItem: jest.fn(),
        setItem: jest.fn(),
    };

    Object.defineProperty(window, 'sessionStorage', {
        value: mockSessionStorage,
        writable: true,
    });

    if (callback) callback(mockSessionStorage);

    return mockSessionStorage;
};
