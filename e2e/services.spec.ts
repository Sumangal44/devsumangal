import { test, expect } from '@playwright/test';

test.describe('Services Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/services', { waitUntil: 'domcontentloaded' });
  });

  test('has correct title and main heading', async ({ page }) => {
    await expect(page).toHaveTitle(/DevSumangal - Our Services/);
    await expect(page.getByRole('heading', { name: 'Our Services', exact: true })).toBeVisible();
  });

  test('displays all specific service offerings', async ({ page }) => {
    const expectedServices = [
      'Web Development',
      'UI/UX Design',
      'SEO Optimization',
      'Maintenance & Support'
    ];

    for (const serviceName of expectedServices) {
      const card = page.locator('.gsap-service-card', { hasText: serviceName });
      await expect(card).toBeVisible();
      // Verify that there is descriptive text along with the heading
      await expect(card.locator('p')).toBeVisible();
    }
  });
});
