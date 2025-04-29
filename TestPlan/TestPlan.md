# Test Plan

## 1. Introduction
This document outlines the exhaustive test plan for end-to-end testing of the Blockchain Node Onboarding web application. It includes both manual and automated tests to ensure the application meets functional, usability, and security requirements.

## 2. Scope
**In-Scope:**
- Sign Up functionality
- Sign In functionality
- Sign Out functionality
- Submit Request to Onboard Nodes
- Submit Request to Create Private Blockchain

**Out of Scope:**
- Backend/API testing
- Performance Testing (for now)

## 3. Testing Types

| Type                     | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| Functional Testing       | Validate core functionalities (Sign Up, Sign In, Node/Wallet addition).     |
| UI Testing               | Ensure the forms, buttons, and error messages behave correctly.             |
| Negative Testing         | Validate how the application behaves with invalid inputs.                   |
| Field Validation Testing | Check email, password, Node ID, Wallet Address, and IP formats.             |
| Security Testing         | Check password policy enforcement and session management (Sign Out).        |
| Regression Testing       | Ensure new changes do not break existing functionality.                     |
| Automation Testing       | Automate repetitive and important scenarios (Sign Up, Sign In, Sign Out).   |

## 4. Tools and Framework
- **Automation:** Playwright + TypeScript
- **Test Runner:** Playwright Test Runner
- **Assertions:** Playwright's built-in assertions
- **Reporting:** Playwright HTML Reporter
- **Version Control:** GitHub

## 5. Test Environment Setup
- **Browser:** Chrome (latest stable version)
- **Node.js:** v14 or higher
- **npm:** v6 or higher
- **Playwright:** Latest version
- **Test Data:** Configured in `config.ts`
- **Base URL:** https://xaltsocnportal.web.app

## 6. Entry and Exit Criteria
**Entry Criteria:**  
- Application deployed and accessible  
- Test environment is stable  
- Test data is available (dummy emails, wallet addresses, IPs)  
- Playwright is installed and configured
- All required dependencies are installed

**Exit Criteria:**  
- All test cases are executed  
- All critical defects are closed  
- Test reports generated and reviewed
- Code coverage meets minimum requirements
- All automated tests pass
- Manual test results documented

## 7. Test Strategy
- **Manual Testing:** First cycle to identify issues  
- **Automation Testing:** Critical flows will be automated  
- **Test Data:** Dummy but valid Email IDs, Wallets, Node IDs  
- **Bug Tracking:** Document defects in test reports
- **Test Execution:** Run tests in headed mode for debugging
- **Reporting:** Generate HTML reports for test results

## 8. Defect Management
**Severity levels:**  
- **Critical:** Application crashes, login fails  
- **High:** User flow breaks  
- **Medium:** Minor UI glitches  
- **Low:** Cosmetic issues (alignment, typos)  

## 9. Risk & Mitigation

| Risk                          | Mitigation                                  |
|-------------------------------|---------------------------------------------|
| Lack of test data             | Generate dummy email/Node IDs               |
| Late requirement changes      | Agile approach: Retest affected modules    |
| Automation delays             | Prioritize critical tests first            |
| Browser compatibility         | Focus on Chrome initially                  |
| Network issues               | Implement retry mechanisms                 |

## 10. Test Schedule
- **Phase 1:** Manual Testing (2 days)
- **Phase 2:** Automation Development (3 days)
- **Phase 3:** Automated Test Execution (1 day)
- **Phase 4:** Regression Testing (1 day)
- **Phase 5:** Final Review and Reporting (1 day)

## 11. Resource Requirements
- **Testers:** 1 QA Engineer
- **Developers:** 1 for automation support
- **Environment:** Local development machine
- **Tools:** Playwright, VS Code, Git

## 12. Deliverables
- Test Plan (`TestPlan.md`)  
- Test Cases (`TestCases.md`)  
- Automation Code  
- Screenshots (if needed for failed tests)  
- Test Execution Report
- HTML Test Reports
- Code Coverage Report