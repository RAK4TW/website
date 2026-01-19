# Testing Documentation

This document outlines the testing strategy and implementation for the Ryan Koskela portfolio website.

## 🧪 Testing Stack

- **Jest** - Test runner (included with Create React App)
- **React Testing Library** - Component testing utilities
- **jest-axe** - Accessibility testing
- **React Router Testing** - Routing functionality testing

## 📁 Test Files Structure

```
src/
├── basic-tests.test.js          # ✅ Working basic functionality tests
├── main.test.js                 # ✅ Updated main component tests
├── test-utils.js                # 🛠️ Testing utilities and helpers
├── setupTests.js                # ⚙️ Global test configuration
├── components/detailbox/
│   ├── detailbox-about.test.js   # 📝 About component tests
│   ├── detailbox-projects.test.js # 📝 Projects component tests
│   ├── detailbox-contact.test.js # 📝 Contact component tests
│   └── detailbox-ideas.test.js   # 📝 Ideas component tests
├── routing.test.js              # 📝 Comprehensive routing tests
├── accessibility.test.js        # 📝 Accessibility tests (jest-axe)
└── __mocks__/fileMock.js        # 🎭 File mocking utilities
```

## 🚀 Available Test Scripts

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in CI mode
npm run test:ci

# Run specific test types
npm run test:a11y      # Accessibility tests only
npm run test:unit      # Unit tests only
npm run test:routing   # Routing tests only

# Debug tests
npm run test:debug
```

## 🎯 Test Coverage Areas

### ✅ Currently Working Tests

**Basic Functionality Tests (`basic-tests.test.js`)**
- ✅ Component rendering
- ✅ Navigation structure
- ✅ Heading hierarchy
- ✅ Link attributes
- ✅ Semantic HTML structure
- ✅ Footer content
- ✅ Mainbox component integration

### 📝 Additional Test Files (Need Fixes)

**Unit Tests** - Component-specific functionality
**Routing Tests** - Navigation and route handling
**Accessibility Tests** - ARIA compliance and screen reader support

## 🛠️ Testing Utilities

### `test-utils.js` provides:
- `renderWithRouter()` - Render components with routing
- `testCloseButton()` - Test close button functionality
- `testAccessibilityAttributes()` - Test ARIA attributes
- `testExternalLink()` - Test external link security
- `testImage()` - Test image attributes and lazy loading
- `testKeyboardNavigation()` - Test keyboard interactions

## 🎭 Mocking Strategy

### Images and Assets
```javascript
jest.mock('./assets/ryan.jpg', () => 'test-image.jpg');
```

### Components
```javascript
jest.mock('./components/techlogos.js', () => {
  return function MockTechlogos() {
    return <div data-testid="techlogos-component">Techlogos Component</div>;
  };
});
```

### Third-party Libraries
```javascript
jest.mock('react-ga', () => ({
  initialize: jest.fn(),
  pageview: jest.fn(),
}));
```

## 🔧 Configuration

### Jest Configuration (`jest.config.js`)
- Test environment: jsdom
- Coverage thresholds: 70% for all metrics
- File mocking for static assets
- CSS/Sass mocking with identity-obj-proxy

### Test Setup (`setupTests.js`)
- Custom Jest matchers (jest-axe)
- Mock window.matchMedia
- Mock IntersectionObserver and ResizeObserver
- Console warning suppression

## 📊 Test Categories

### 1. Unit Tests
- Individual component rendering
- Component state and props
- Event handlers
- Accessibility attributes

### 2. Integration Tests
- Component interactions
- Routing behavior
- Navigation flow
- Data flow between components

### 3. Accessibility Tests
- ARIA compliance
- Keyboard navigation
- Screen reader compatibility
- Color contrast (future enhancement)

### 4. Routing Tests
- Route matching
- Navigation functionality
- Redirect handling
- Browser history management

## 🎯 Best Practices Implemented

### ✅ What's Working Well
1. **Component Isolation** - Each component tested independently
2. **Mock Strategy** - Proper mocking of external dependencies
3. **Accessibility First** - ARIA attributes and keyboard navigation
4. **User-Focused Testing** - Testing from user perspective
5. **Semantic HTML** - Proper heading hierarchy and structure

### 🔧 Areas for Improvement
1. **E2E Testing** - Add Cypress or Playwright for full user journeys
2. **Visual Regression** - Add visual testing with Percy or Chromatic
3. **Performance Testing** - Add performance benchmarks
4. **API Testing** - Mock and test external API calls
5. **Cross-browser Testing** - Browser compatibility testing

## 🚨 Common Issues & Solutions

### Issue: "container.getByLabelText is not a function"
**Solution**: Use `screen.getByLabelText()` instead of `container.getByLabelText()`

### Issue: "Found multiple elements with the text"
**Solution**: Use more specific queries or scope to specific containers

### Issue: Component requires history prop
**Solution**: Use `renderWithRouter()` utility or pass mock history

### Issue: Images not loading in tests
**Solution**: Mock all image imports with file stubs

## 📈 Coverage Goals

Current coverage targets:
- **Branches**: 70%
- **Functions**: 70%
- **Lines**: 70%
- **Statements**: 70%

## 🔄 Continuous Integration

Tests are configured to run in CI mode with:
- Coverage reporting
- No watch mode
- Exit on failure
- Detailed output

## 🎉 Success Metrics

✅ **12/12 basic tests passing**
✅ **Component rendering verified**
✅ **Navigation structure validated**
✅ **Accessibility attributes confirmed**
✅ **Semantic HTML structure verified**
✅ **Integration with mocked components working**

## 🚀 Next Steps

1. **Fix remaining test files** - Update component tests to work with current structure
2. **Add E2E tests** - Implement Cypress for full user journey testing
3. **Visual testing** - Add visual regression testing
4. **Performance testing** - Add performance benchmarks
5. **Cross-browser testing** - Set up browser compatibility testing

---

**Testing Status**: ✅ Basic functionality fully tested and working  
**Next Priority**: Fix remaining component and routing tests  
**Long-term Goal**: Comprehensive E2E and visual testing suite
