import { test, expect } from '@playwright/test';

test.describe('Contact Page', () => {
  test('has the correct title', async ({ page }) => {
    await page.goto('/contact', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveTitle(/Contact/);
  });

  test('contact form can be filled and submitted successfully', async ({ page }) => {
    await page.goto('/contact', { waitUntil: 'domcontentloaded' });
    
    // Fill the form
    await page.fill('input[name="name"]', 'Playwright Test');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('textarea[name="message"]', 'This is a test message from Playwright automation.');
    
    // Intercept network request to formspree to prevent spamming actual submissions during tests
    await page.route('https://formspree.io/f/xldbzkve', async route => {
      // Mock successful response
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ok: true })
      });
    });

    // Submit the form
    await page.click('button[type="submit"]');

    // Wait for and verify success message appears
    const successMessage = page.locator('#form-message');
    await expect(successMessage).toBeVisible();
    await expect(successMessage).toContainText('Message sent successfully');
  });

  test('contact form shows error when submission fails', async ({ page }) => {
    await page.goto('/contact', { waitUntil: 'domcontentloaded' });
    
    // Fill the form
    await page.fill('input[name="name"]', 'Playwright Test');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('textarea[name="message"]', 'This is a failing test message.');
    
    // Intercept network request to mock failure
    await page.route('https://formspree.io/f/xldbzkve', async route => {
      await route.fulfill({
        status: 400,
        contentType: 'application/json',
        body: JSON.stringify({ ok: false, error: 'Submission failed' })
      });
    });

    // Submit the form
    await page.click('button[type="submit"]');

    // Verify error message appears
    const errorMessage = page.locator('#form-message');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Oops! There was a problem');
  });
});
