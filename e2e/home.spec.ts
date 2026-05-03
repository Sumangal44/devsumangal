import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
  });

  test('hero section contains proper introductory text', async ({ page }) => {
    await expect(page).toHaveTitle(/DevSumangal - Home/);
    
    // Check main headings
    await expect(page.getByRole('heading', { name: 'Welcome to My Portfolio' })).toBeVisible();
    await expect(page.getByText(/I build amazing web experiences/i)).toBeVisible();
  });

  test('call to action buttons navigate correctly', async ({ page }) => {
    const viewProjectsBtn = page.getByRole('link', { name: 'View Projects' });
    await expect(viewProjectsBtn).toBeVisible();
    await expect(viewProjectsBtn).toHaveAttribute('href', '/projects');

    const contactMeBtn = page.getByRole('link', { name: 'Contact Me' });
    await expect(contactMeBtn).toBeVisible();
    await expect(contactMeBtn).toHaveAttribute('href', '/contact');
  });

  test('download resume button triggers download animation sequence', async ({ page }) => {
    const downloadBtn = page.locator('#downloadBtn').first();
    await expect(downloadBtn).toBeVisible();
    
    // Intercept the PDF request to prevent actual file download during test
    await page.route('/sumangalkaran.pdf', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/pdf',
        body: Buffer.from('mock pdf content')
      });
    });

    // Start download process
    await downloadBtn.click();

    // Verify button state changes (disabled and shows loading text)
    await expect(downloadBtn).toBeDisabled();
    await expect(page.locator('#buttonText')).toContainText(/Preparing Download|Downloading/);
    
    // Verify it eventually succeeds
    await expect(page.locator('#buttonText')).toContainText('Downloaded Successfully!', { timeout: 10000 });
    
    // Button should eventually become enabled again after reset
    await expect(downloadBtn).toBeEnabled({ timeout: 5000 });
  });

  test('renders featured projects section correctly', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Featured Projects' })).toBeVisible();
    // Verify there are project cards inside the section
    const projectsSection = page.locator('section').filter({ hasText: 'Featured Projects' });
    const projectLinks = projectsSection.locator('a');
    
    const count = await projectLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  test('renders services section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Our Services', exact: true })).toBeVisible();
  });

  test('home page contact component handles form submission properly', async ({ page }) => {
    // Wait for Astro view transitions and GSAP hydration to complete
    await expect(page.locator('.gsap-hero-item').first()).toHaveCSS('opacity', '1', { timeout: 10000 });

    // Intercept form submission
    await page.route('https://formspree.io/f/xldbzkve', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ok: true })
      });
    });

    const form = page.locator('#component-contact-form');
    await expect(form).toBeVisible();

    await form.locator('input[name="name"]').fill('E2E Home Tester');
    await form.locator('input[name="email"]').fill('e2e@example.com');
    await form.locator('textarea[name="message"]').fill('Testing home page inline contact form.');

    const submitBtn = form.locator('button[type="submit"]');
    await submitBtn.click();



    // Message element should eventually appear and indicate success
    const successMessage = page.locator('#component-form-message');
    await expect(successMessage).toBeVisible();
    await expect(successMessage).toContainText('Message sent successfully');
  });
});
