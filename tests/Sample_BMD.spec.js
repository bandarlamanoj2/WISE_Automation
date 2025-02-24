// @ts-nocheck
const { test, expect } = require('@playwright/test');

test('get started link', async ({ page }) => {
  //To load the required URL
  await page.goto('https://wiseuat.cognizant.com/#/Home');
  //await page.goto('https://login.microsoftonline.com/de08c407-19b9-427d-9fe8-edf254300ca7/saml2?sso_reload=true');

  //const userid = '//div/div[1]/div[3]/div/div/div/div[2]/div[2]/div/input[1]';
  //await page.waitForSelector('xpath=${userid}');
  //await page.fill(userid, '2323698@cognizant.com');

  //To check the title of the landing page
  await expect(page).toHaveTitle(/WiSE/);

  //To click the Bid Centre
  // @ts-ignore
  const Bid_Center = '//div/div[6]/div/div[2]/button';

  // Click on the element using XPath for bid centre
  await page.waitForSelector(`xpath=${Bid_Center}`);
  await page.click(`xpath=${Bid_Center}`);

  //To click the Bid Centre - BMD
  // @ts-ignore
  const BMD = '//div/div[6]/div/div[2]/ul/li[2]/div/div/div[1]/a/span';

  // Click on the element using XPath for bid centre - BMD
  await page.waitForSelector(`xpath=${BMD}`);
  await page.click(`xpath=${BMD}`);

  //manual wait time : 8 seconds
  await new Promise(resolve => setTimeout(resolve, 8000));

  //Xpath for the BMD - Total deals
  // @ts-ignore
  const Total_deals = '//div/app-bidqueue-grid/div[2]/div/div/div/div[13]';

  // Click on the element using XPath for BMD - Total deals
  await page.waitForSelector(`xpath=${Total_deals}`);
  await page.click(`xpath=${Total_deals}`);

  //manual wait time : 8 seconds
  await new Promise(resolve => setTimeout(resolve, 8000));

  // Define the selector for the search bar
  const searchBarSelector = '//app-bidqueue-grid/div[4]/p-table/div/div/table/thead/tr[2]/th[7]/span/input'; // Replace this with the actual selector of the search bar

  // Type the search term and press Enter
  await page.fill(searchBarSelector, '67676767');

  //Xpath for the Winzone click
  // @ts-ignore
  const Winzone_click = '//app-bidqueue-grid/div[4]/p-table/div/div/table/tbody/tr/td[7]/span';

  // Click on the element using XPath for winzone - click
  await page.waitForSelector(`xpath=${Winzone_click}`);
  await page.click(`xpath=${Winzone_click}`);

});