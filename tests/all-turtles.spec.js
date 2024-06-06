const { test, expect } = require('@playwright/test');

test('verify homepage title', async ({ page }) => {
  await page.goto('https://www.all-turtles.com/');
  await expect(page).toHaveTitle('All Turtles | All Turtles')
  await expect(page.getByRole('link', { name: 'Sora Union Your projects' })).toContainText('Sora Union')

  // Go to careers page

  await page.getByRole('link', { name: 'Careers' }).click();
  await expect(page.getByRole('main')).toContainText('Come work with us');

  //await page.pause()
  
 })
