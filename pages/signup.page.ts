import { Page, Locator, expect } from '@playwright/test';
import { TestData } from '../config/config';

export class SignupPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly confirmPasswordInput: Locator;
    readonly signupButton: Locator;
    readonly passwordRequirementError: Locator;
    readonly passwordMismatchError: Locator;
    readonly dashboardHeading: Locator;
    readonly getStartedButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getStartedButton = page.getByRole('button', { name: 'Get Started' });
        this.emailInput = page.getByRole('textbox', { name: 'E-Mail Password Confirm' });
        this.passwordInput = page.locator('div').filter({ hasText: /^Password$/ }).locator('#outlined-basic');
        this.confirmPasswordInput = page.locator('div').filter({ hasText: /^Confirm Password$/ }).locator('#outlined-basic');
        this.signupButton = page.getByRole('button', { name: 'Sign Up' });
        this.passwordRequirementError = page.getByText('Password must contain atelast');
        this.passwordMismatchError = page.getByText('Passwords do not match');
        this.dashboardHeading = page.getByRole('heading', { name: 'Open Capital Network' });
    }

    async goto() {
        await this.page.goto('https://xaltsocnportal.web.app/signup');
        await this.getStartedButton.click();
        await this.emailInput.waitFor({ state: 'visible' });
    }

    async signup(email: string, password: string, confirmPassword: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.confirmPasswordInput.fill(confirmPassword);
        await this.signupButton.click();
    }

    async validatePasswordRequirements() {
        await expect(this.passwordRequirementError).toBeVisible();
    }

    async validatePasswordMismatch() {
        await expect(this.passwordMismatchError).toBeVisible();
    }

    async validateSignupButtonDisabled() {
        await expect(this.signupButton).toBeDisabled();
    }

    async validateSuccessfulSignup() {
        await expect(this.dashboardHeading).toBeVisible();
    }
}