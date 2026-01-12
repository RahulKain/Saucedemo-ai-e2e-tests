# SauceDemo Playwright Test Automation

## 📋 Executive Summary

This project implements comprehensive end-to-end test automation for the SauceDemo e-commerce application using Playwright and TypeScript. The framework follows enterprise-grade standards for maintainability, scalability, and reliability, with a focus on the Component Object Model (COM) architecture and fixture-driven dependency injection.

## 🛠 Tech Stack

- **Test Framework:** Playwright v1.40+
- **Language:** TypeScript 5.0+
- **Architecture:** Page Object Model with Component Composition
- **CI/CD:** GitHub Actions (configurable)
- **Reporting:** Playwright HTML Reports
- **Environment Management:** dotenv

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd saucedemo-tests
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

4. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

### Environment Configuration

Create a `.env` file in the project root:

```env
# Application URLs
BASE_URL=https://www.saucedemo.com

# Test Environment
NODE_ENV=development
TEST_ENV=local

# SauceDemo Test Credentials
SAUCE_USERNAME=standard_user
SAUCE_PASSWORD=secret_sauce

# CI/CD (set in pipeline secrets)
# CI=true
```

**Security Note:** Never commit `.env` to version control. Use `.env.example` as a template.

## 🏃‍♂️ Running Tests

### Execute All Tests
```bash
npm test
```

### Run Tests in Headed Mode (Visual)
```bash
npm run test:headed
```

### Debug Mode
```bash
npm run test:debug
```

### UI Mode (Interactive Test Runner)
```bash
npm run test:ui
```

### Run Specific Test Case
```bash
npx playwright test --grep="TC001"
```

### Run Specific Module
```bash
# Authentication tests
npx playwright test src/tests/auth/ --workers=1

# All tests with HTML report
npx playwright test --reporter=html
```

### Generate and View Reports
```bash
npm run report
# Opens HTML test report in browser
```

## 📁 Project Structure

```
src/
├── fixtures/
│   └── custom-test.ts          # Playwright fixture extensions
├── pages/
│   └── LoginPage.ts            # Page Object classes
├── components/                 # Reusable UI components
├── tests/
│   └── auth/
│       └── auth.spec.ts        # Test specifications
├── api/                        # API request wrappers (future)
fixtures/                       # Test data fixtures (future)
```

### Key Files

- **`playwright.config.ts`** - Playwright configuration with browser settings
- **`testplan.md`** - High-level test strategy and coverage
- **`testcases.md`** - Detailed test case specifications
- **`AI_TEST_STANDARDS.md`** - Enterprise testing standards reference

## 🧪 Test Organization

### Modules
1. **Authentication** (TC001-TC010) - Login/logout functionality
2. **Product Inventory** (TC011-TC025) - Product browsing and cart operations
3. **Shopping Cart** (TC026-TC040) - Cart management and calculations
4. **Checkout Process** (TC041-TC055) - Order completion flow

### Test Types
- **Functional:** Core feature validation
- **Negative:** Error handling and edge cases
- **Integration:** End-to-end user flows
- **Smoke:** Critical path validation

## 🔧 Development Workflow

### Adding New Tests

1. **Update Test Cases** in `testcases.md`
2. **Create/Update Page Objects** in `src/pages/`
3. **Update Fixtures** in `src/fixtures/custom-test.ts`
4. **Write Test Spec** in `src/tests/[module]/`
5. **Run and Verify** the test

### Code Standards

- **Locator Strategy:** Semantic locators first (`getByRole`), then stable attributes
- **No Manual Instantiation:** Use fixture injection, never `new PageObject(page)`
- **Wait Strategies:** `waitForLoadState('load')` for speed, `networkidle` for complex flows
- **Authentication:** Module 1 tests disable storage state; others use it for efficiency

### Best Practices

- One test case at a time during development
- Run tests with `--workers=1` for debugging
- Use descriptive test names with TC IDs
- Maintain separation between test logic and page objects

## 📊 Test Execution Strategy

### Parallel Execution
- Tests run in parallel by default for efficiency
- Authentication tests run sequentially (single worker)
- Configurable worker count via `--workers` flag

### Browser Support
- **Chromium:** Primary browser for CI/CD
- **Firefox:** Cross-browser validation
- **WebKit:** macOS/Safari compatibility

### Test Data Management
- Environment-specific configuration via `.env`
- Predefined user accounts for SauceDemo
- Dynamic data generation for unique scenarios

## 🔍 Debugging and Troubleshooting

### Common Issues

**Browser Installation:**
```bash
npx playwright install --force  # Reinstall browsers
```

**Test Timeouts:**
- Increase timeout in `playwright.config.ts`
- Check network connectivity to SauceDemo
- Verify application availability

**Locator Issues:**
- Use Playwright Inspector: `npm run test:debug`
- Verify locators in browser dev tools
- Check for DOM changes in application

### Debug Commands
```bash
# Run with debug logging
DEBUG=pw:api npx playwright test

# Run single test with max timeout
npx playwright test --grep="TC001" --timeout=60000

# Generate trace for debugging
npx playwright test --trace=on
```

## 🚀 CI/CD Integration

### GitHub Actions Example
```yaml
name: Playwright Tests
on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
    - run: npm ci
    - run: npx playwright install
    - run: npm test
    - uses: actions/upload-artifact@v3
      if: always()
      with:
        name: playwright-report
        path: playwright-report/
        retention-days: 30
```

## 📈 Reporting and Analytics

### Test Reports
- **HTML Reports:** Generated automatically with `npm run report`
- **Screenshots:** Captured on test failures
- **Videos:** Recorded for failed tests (configurable)
- **Traces:** Available for detailed debugging

### Metrics
- Test execution time
- Pass/fail rates by module
- Browser compatibility results
- Performance trends

## 🤝 Contributing

1. Follow the established coding standards in `AI_TEST_STANDARDS.md`
2. Update test cases in `testcases.md` before implementing code
3. Use the fixture system for all page object dependencies
4. Run tests locally before committing
5. Include test case IDs in commit messages

## 📚 Resources

- [Playwright Documentation](https://playwright.dev/)
- [SauceDemo Application](https://www.saucedemo.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Test Automation Best Practices](AI_TEST_STANDARDS.md)

## 📞 Support

For questions or issues:
1. Check `AI_TEST_STANDARDS.md` for framework guidelines
2. Review existing test implementations
3. Run tests in debug mode for troubleshooting
4. Check Playwright documentation for API references

---

**Framework Version:** 1.0.0
**Last Updated:** January 2026
**Test Coverage:** 55 test cases across 4 modules