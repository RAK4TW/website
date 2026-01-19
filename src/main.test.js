import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Main from './main';

// Mock react-ga to prevent analytics calls during tests
jest.mock('react-ga', () => ({
	initialize: jest.fn(),
	pageview: jest.fn(),
}));

// Wrapper component for testing with router
const TestWrapper = () => (
	<BrowserRouter>
		<Main />
	</BrowserRouter>
);

describe('Main Component', () => {
	it('renders without crashing', () => {
		render(<TestWrapper />);
	});

	it('displays the main title', () => {
		render(<TestWrapper />);
		expect(screen.getByText('Ryan Koskela')).toBeInTheDocument();
	});

	it('displays navigation links', () => {
		render(<TestWrapper />);
		expect(screen.getByText('About')).toBeInTheDocument();
		expect(screen.getByText('Projects')).toBeInTheDocument();
		expect(screen.getByText('Contact')).toBeInTheDocument();
		expect(screen.getByText('Ideas')).toBeInTheDocument();
	});

	it('displays subheading text', () => {
		render(<TestWrapper />);
		expect(screen.getByText(/Web developer, writer, sports and food\/drink aficionado/)).toBeInTheDocument();
	});

	it('displays footer with current year', () => {
		render(<TestWrapper />);
		const currentYear = new Date().getFullYear();
		expect(screen.getByText(`© ${currentYear} Ryan Koskela`)).toBeInTheDocument();
	});
});
