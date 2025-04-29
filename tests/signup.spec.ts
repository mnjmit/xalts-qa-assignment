import { test, expect } from '@playwright/test';
import { SignupPage } from '../pages/signup.page';
import { TestData } from '../config/config';

test.describe('Signup Page Tests', () => {
  let signupPage: SignupPage;

  test.beforeEach(async ({ page }) => {
    signupPage = new SignupPage(page);
    await signupPage.goto();
  });

  test('signup button should be disabled by default', async () => {
    await signupPage.validateSignupButtonDisabled();
  });
  

  test('password policy message should be visible by default', async () => {
    await expect(signupPage.passwordRequirementError).toBeVisible();
    await expect(signupPage.passwordRequirementError).toContainText(
      'Password must contain atelast one lowercase letter, uppercase letter, number and special character and be a minimum of 8 characters in length'
    );
  });

  test('signup button should be disabled with invalid email and password', async () => {
    await signupPage.emailInput.fill(TestData.signup.invalidEmail);
    await signupPage.passwordInput.fill(TestData.signup.invalidPassword);
    await signupPage.confirmPasswordInput.fill(TestData.signup.invalidPassword);
    await signupPage.validateSignupButtonDisabled();
  });

  test('signup button should be disabled with valid email but invalid password', async () => {
    await signupPage.emailInput.fill(TestData.signup.validEmail);
    await signupPage.passwordInput.fill(TestData.signup.invalidPassword);
    await signupPage.confirmPasswordInput.fill(TestData.signup.invalidPassword);
    await signupPage.validateSignupButtonDisabled();
  });

  test('should show password mismatch error with mismatched passwords', async () => {
    await signupPage.emailInput.fill(TestData.signup.validEmail);
    await signupPage.passwordInput.fill(TestData.signup.validPassword);
    await signupPage.confirmPasswordInput.fill(TestData.signup.mismatchedPassword);
    await signupPage.validatePasswordMismatch();
  });

  test('signup button should be enabled with valid credentials', async () => {
    await signupPage.emailInput.fill(TestData.signup.validEmail);
    await signupPage.passwordInput.fill(TestData.signup.validPassword);
    await signupPage.confirmPasswordInput.fill(TestData.signup.validPassword);
    await expect(signupPage.signupButton).toBeEnabled();
  });

  test('should redirect to dashboard after successful signup', async () => {
    await signupPage.emailInput.fill(TestData.signup.validEmail);
    await signupPage.passwordInput.fill(TestData.signup.validPassword);
    await signupPage.confirmPasswordInput.fill(TestData.signup.validPassword);
    await signupPage.signupButton.click();
    await signupPage.validateSuccessfulSignup();
  });

  test('should show error for already registered email', async ({ page }) => {
    // First register the email
    await signupPage.emailInput.fill(TestData.signup.validEmail);
    await signupPage.passwordInput.fill(TestData.signup.validPassword);
    await signupPage.confirmPasswordInput.fill(TestData.signup.validPassword);
    await signupPage.signupButton.click();
    
    // Try to register the same email again
    await signupPage.goto();
    await signupPage.emailInput.fill(TestData.signup.validEmail);
    await signupPage.passwordInput.fill(TestData.signup.validPassword);
    await signupPage.confirmPasswordInput.fill(TestData.signup.validPassword);
    await signupPage.signupButton.click();
    
    // Handle the alert
    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('E-mail is already in use');
      await dialog.accept();
    });
  });
});