import { test, expect } from '@playwright/test';

test.describe('Projects Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/projects', { waitUntil: 'domcontentloaded' });
  });

  test('has correct title and introductory text', async ({ page }) => {
    await expect(page).toHaveTitle(/DevSumangal - Projects/);
    await expect(page.getByRole('heading', { name: 'My Projects' })).toBeVisible();
    await expect(page.getByText(/collection of my recent work/i)).toBeVisible();
  });

  test('displays a populated grid of project cards', async ({ page }) => {
    const projectCards = page.locator('.gsap-project-card');
    
    // Check that at least one project exists
    await expect(projectCards.first()).toBeVisible();
    const count = await projectCards.count();
    expect(count).toBeGreaterThan(0);
    
    // Check the structure of the first project card
    const firstProject = projectCards.first();
    await expect(firstProject.locator('img')).toBeVisible(); // Cover image
    await expect(firstProject.locator('[data-slot="card-title"]')).toBeVisible(); // Title
    await expect(firstProject.locator('[data-slot="card-description"]')).toBeVisible(); // Description
    await expect(firstProject.locator('a[href]')).toBeVisible(); // External link/button
  });
});
