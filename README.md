# QA Assignment - Playwright Test Automation

This project contains automated tests for the Open Capital Network portal using Playwright. The tests cover signup, signin, and signout functionality.

## Project Structure

```
qa-assignment-playwright/
├── config/
│   └── config.ts          # Test configuration and test data
├── pages/
│   ├── signin.page.ts     # Signin page object model
│   ├── signout.page.ts    # Signout page object model
│   └── signup.page.ts     # Signup page object model
├── tests/
│   ├── signin.spec.ts     # Signin test cases
│   ├── signout.spec.ts    # Signout test cases
│   └── signup.spec.ts     # Signup test cases
├── package.json           # Project dependencies
└── playwright.config.ts   # Playwright configuration
```

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

### Run all tests
```bash
npx playwright test
```

### Run specific test file
```bash
npx playwright test tests/signin.spec.ts
```

### Run tests in headed mode
```bash
npx playwright test --headed
```

### Run tests in specific browser
```bash
npx playwright test --project=chromium
```

## Test Cases

### Signup Tests
- Default state of signup button
- Password policy visibility
- Email validation
- Password validation
- Successful signup flow

### Signin Tests
- Default state of signin button
- Password policy visibility
- Email validation
- Password validation
- Successful signin flow
- Invalid credentials handling

### Signout Tests
- Signout button visibility after signin
- Signin button appearance after signout
- Browser back button behavior after signout

## Configuration

The `config.ts` file contains:
- Base URL configuration
- Test data (valid/invalid credentials)
- Test timeout settings

## Page Objects

The project uses the Page Object Model pattern:
- `SignupPage`: Handles signup page interactions
- `SigninPage`: Handles signin page interactions
- `SignoutPage`: Handles signout page interactions

Each page object contains:
- Locators for page elements
- Methods for page interactions
- Validation methods

## Best Practices

1. **Page Object Model**: Each page has its own class with locators and methods
2. **Test Data Management**: Test data is centralized in the config file
3. **Explicit Waits**: Using Playwright's built-in waiting mechanisms
4. **Error Handling**: Proper error messages and validations
5. **Modularity**: Tests are organized by functionality

## Troubleshooting

If you encounter timeout errors:
1. Check your internet connection
2. Verify the base URL is correct
3. Ensure all required elements are present on the page
4. Check for any network issues or slow responses

## Contributing

1. Create a new branch for your changes
2. Follow the existing code structure and patterns
3. Add appropriate comments and documentation
4. Run tests before submitting changes
5. Create a pull request with a clear description 