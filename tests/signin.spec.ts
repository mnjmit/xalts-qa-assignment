import { test, expect } from '@playwright/test';
import { SigninPage } from '../pages/signin.page';
import { TestData } from '../config/config';

test.describe('Signin Page Tests', () => {
  let signinPage: SigninPage;

  test.beforeEach(async ({ page }) => {
    signinPage = new SigninPage(page);
    await signinPage.goto();
  });

  test('signin button should be disabled by default', async () => {
    await signinPage.validateSigninButtonDisabled();
  });

  test('password policy message should be visible with only email entered', async () => {
    await signinPage.emailInput.fill(TestData.signin.validEmail);
    await signinPage.validatePasswordPolicyVisible();
  });

  test('password policy message should disappear with valid password', async () => {
    await signinPage.emailInput.fill(TestData.signin.validEmail);
    await signinPage.passwordInput.fill(TestData.signin.validPassword);
    await signinPage.validatePasswordPolicyHidden();
  });

  test('signin button should be disabled with invalid email and valid password', async () => {
    await signinPage.emailInput.fill(TestData.signin.invalidEmail);
    await signinPage.passwordInput.fill(TestData.signin.validPassword);
    await signinPage.validateSigninButtonDisabled();
  });

  test('should show incorrect credentials alert with valid email and valid password format but incorrect value', async () => {
    // Use a password that meets policy requirements but is incorrect
    const incorrectPassword = 'Testing@900'; // Meets policy but different from actual password
    await signinPage.emailInput.fill(TestData.signin.validEmail);
    await signinPage.passwordInput.fill(incorrectPassword);
    // Verify password policy message is hidden (since password meets requirements)
    await signinPage.validatePasswordPolicyHidden();
    // Verify signin button is enabled (since both fields are valid)
    await expect(signinPage.signinButton).toBeEnabled();
    // Attempt to sign in
    await signinPage.signinButton.click();
    await signinPage.handleAlert('Incorrect E-Mail or Password');
  });

  test('should show user not found alert with unregistered email', async () => {
    await signinPage.signin('test_unregister@yopmail.com', TestData.signin.validPassword);
    await signinPage.handleAlert('User not found');
  });

  test('signin button should be enabled with valid credentials', async () => {
    await signinPage.emailInput.fill(TestData.signin.validEmail);
    await signinPage.passwordInput.fill(TestData.signin.validPassword);
    await expect(signinPage.signinButton).toBeEnabled();
  });

  test('should redirect to dashboard and show signout button after successful signin', async () => {
    await signinPage.signin(TestData.signin.validEmail, TestData.signin.validPassword);
    await signinPage.validateSignoutButtonVisible();
  });
});