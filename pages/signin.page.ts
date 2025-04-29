import { Page, Locator, expect } from '@playwright/test';
import { TestData } from '../config/config';

export class SigninPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signinButton: Locator;
  readonly signoutButton: Locator;
  readonly passwordRequirementError: Locator;
  readonly alreadyHaveAccountButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByRole('textbox', { name: 'E-Mail Password' });
    this.passwordInput = page.locator('input[type="password"]');
    this.signinButton = page.getByRole('button', { name: 'Sign In' });
    this.signoutButton = page.getByRole('button', { name: 'Sign Out' });
    this.passwordRequirementError = page.getByText('Password must contain atelast');
    this.alreadyHaveAccountButton = page.getByRole('button', { name: 'Already have an account?' });
  }

  async goto() {
    // First go to signup page
    await this.page.goto('https://xaltsocnportal.web.app/signin');
    // Click the "Already have an account?" button
    await this.alreadyHaveAccountButton.click();
    // Wait for the signin form to be visible
    await this.emailInput.waitFor({ state: 'visible' });
  }

  async signin(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signinButton.click();
  }

  async validateSigninButtonDisabled() {
    await expect(this.signinButton).toBeDisabled();
  }

  async validatePasswordPolicyVisible() {
    await expect(this.passwordRequirementError).toBeVisible();
  }

  async validatePasswordPolicyHidden() {
    await expect(this.passwordRequirementError).toBeHidden();
  }

  async validateSignoutButtonVisible() {
    await expect(this.signoutButton).toBeVisible();
  }

  async handleAlert(expectedMessage: string) {
    this.page.on('dialog', async dialog => {
      expect(dialog.message()).toContain(expectedMessage);
      await dialog.accept();
    });
  }
}