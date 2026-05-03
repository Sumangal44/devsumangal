import { test, expect } from '@playwright/test';

test.describe('About Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about', { waitUntil: 'domcontentloaded' });
  });

  test('has correct title and headings', async ({ page }) => {
    await expect(page).toHaveTitle(/DevSumangal - About/);
    await expect(page.getByRole('heading', { name: 'About Me' })).toBeVisible();
  });

  test('displays avatar image', async ({ page }) => {
    const avatar = page.getByAltText('DevSumangal Avatar');
    await expect(avatar).toBeVisible();
    await expect(avatar).toHaveAttribute('src', /avatars\.githubusercontent\.com/);
  });

  test('displays skills section with icons', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'My Skills' })).toBeVisible();
    
    // Verify skill items are rendered
    const skillItems = page.locator('ul > li.gsap-about-skill');
    const count = await skillItems.count();
    expect(count).toBeGreaterThan(0);
    
    // Check that the first skill has an image icon
    await expect(skillItems.first().locator('img')).toBeVisible();
  });

  test('displays journey and connect sections', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'My Journey' })).toBeVisible();
    await expect(page.getByRole('heading', { name: "Let's Connect" })).toBeVisible();
    
    // Check "Get in Touch" button
    const connectLink = page.getByRole('link', { name: 'Get in Touch' });
    await expect(connectLink).toBeVisible();
    await expect(connectLink).toHaveAttribute('href', '/contact');
  });
});
