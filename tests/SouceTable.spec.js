const { test, expect } = require('@playwright/test');
const { Loginpage } = require('../PageObject/LoginPage');
const { SourceTablePage } = require('../PageObject/SourceTablePage');
test('Upload file', async ({ page }) => {
  const name = `HC_NN${Date.now()}`;
  const email = "neha5244@yopmail.com";
  const password = "owner123";
  const environment_QA = "https://app.qa.alterflo.com/login";
  const environment_stage = "https://app.staging.alterflo.com/";
  const loginPage = new Loginpage(page);
  const sourcetablepage = new SourceTablePage(page);

  await loginPage.GetURL(environment_QA);
  await loginPage.ValidLogin(email, password);
  await sourcetablepage.ClickSource();
// Browse 
await page.setInputFiles('input[type="file"]','dataset/Training HC RBM QA File.csv');
await page.waitForURL('https://app.qa.alterflo.com/dashboard/source-tables/import-table');
await page.click('data-y="0"');
//await page.locator(".highlight-selected.highlight.highlight-top.highlight-bottom.highlight-left.highlight-right").click();
await page.click('button:has-text("Import Column(S)")');

  //rename
  await page.click('text=vendors');
  await page.fill('[placeholder="Name..."]', name);
  await page.press('[placeholder="Name..."]', 'Enter');


  // Select & Import all columns
  // Select & Import all columns
  // await page.click('text=1');s
  //await page.click('button:has-text("Import Column(s)")');




})