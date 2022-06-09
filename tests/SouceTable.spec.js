const { test, expect } = require('@playwright/test');
const { Loginpage } = require('../PageObject/LoginPage');
const { SourceTablePage } = require('../PageObject/SourceTablePage');
const Datadriven = require("../DataDriven/testdata.json")

test('Upload Excel file for RBM', async ({ page }) => {
  const loginPage = new Loginpage(page);
  const sourcetablepage = new SourceTablePage(page);
  await loginPage.GetURL(Datadriven.Environment.QA);
  await loginPage.ValidLogin(Datadriven.Login.Email, Datadriven.Login.password);
  await sourcetablepage.UploadFile();

  await page.locator('text=Unique ID').click();

  await page.locator('text=Commission').click({
    modifiers: ['Shift']
  });

  await sourcetablepage.IMPORT_COLUMN.click();
  await sourcetablepage.SetFormat();

  await sourcetablepage.RenameAndSave();

  


})