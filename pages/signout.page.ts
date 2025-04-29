import { Page, Locator, expect } from '@playwright/test';
import { TestData } from '../config/config';

export class SignoutPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signinButton: Locator;
  readonly signoutButton: Locator;
  readonly dashboardHeading: Locator;
  readonly alreadyHaveAccountButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByRole('textbox', { name: 'E-Mail Password' });
    this.passwordInput = page.locator('input[type="password"]');
    this.signinButton = page.getByRole('button', { name: 'Sign In' });
    this.signoutButton = page.getByRole('button', { name: 'Sign Out' });
    this.dashboardHeading = page.getByRole('heading', { name: 'Open Capital Network' });
    this.alreadyHaveAccountButton = page.getByRole('button', { name: 'Already have an account?' });
  }

  async goto() {
    await this.page.goto('https://xaltsocnportal.web.app/signin');
    await this.alreadyHaveAccountButton.click();
    await this.emailInput.waitFor({ state: 'visible' });
  }

  async signin() {
    await this.emailInput.fill(TestData.signin.validEmail);
    await this.passwordInput.fill(TestData.signin.validPassword);
    await this.signinButton.click();
    await this.dashboardHeading.waitFor({ state: 'visible' });
  }

  async signout() {
    await this.signoutButton.click();
    await this.validateSigninButtonVisible();
  }

  async validateDashboard() {
    await expect(this.dashboardHeading).toBeVisible();
    await expect(this.page).toHaveURL('https://xaltsocnportal.web.app/signin');
  }

  async validateSignoutButtonVisible() {
    await expect(this.signoutButton).toBeVisible();
  }

  async validateSigninButtonVisible() {
    await expect(this.signinButton).toBeVisible();
  }

  async goBack() {
    await this.page.goBack();
    await expect(this.page).toHaveURL('https://xaltsocnportal.web.app/signin');
  }

  async validateSigninPage() {
    await expect(this.page).toHaveURL('https://xaltsocnportal.web.app/signin');
    await expect(this.signinButton).toBeVisible();
  }
}