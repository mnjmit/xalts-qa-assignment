import { test, expect } from '@playwright/test';
import { SignoutPage } from '../pages/signout.page';

test.describe('Signout Tests', () => {
  let signoutPage: SignoutPage;

  test.beforeEach(async ({ page }) => {
    signoutPage = new SignoutPage(page);
    await signoutPage.goto();
    // Sign in first to reach dashboard
    await signoutPage.signin();
  });

  test('after successful signin, signout button should appear in upper right corner', async () => {
    await signoutPage.validateSignoutButtonVisible();
  });

  test('after clicking signout button, signin button should appear in upper right corner', async () => {
    await signoutPage.signout();
    await signoutPage.validateSigninButtonVisible();
  });

  test('after clicking browser backward arrow, should redirect to signin page', async () => {
    await signoutPage.signout();
    await signoutPage.goBack();
    await expect(signoutPage.page).toHaveURL('https://xaltsocnportal.web.app/signin');
  });
});