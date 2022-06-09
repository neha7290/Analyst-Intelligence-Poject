const { test, expect } = require('@playwright/test');
const { Loginpage } = require('../PageObject/LoginPage');
const { SourceTablePage } = require('../PageObject/SourceTablePage');
const { Rbm_PAGE } = require('../PageObject/Rbm_PAGE');
const { ProcessBuilderPage } = require('../PageObject/ProcessBuilderPage');


const Datadriven = require("../DataDriven/testdata.json");
test('Process Builder', async ({ page }) => {
  const loginPage = new Loginpage(page);
  const sourcetablepage = new SourceTablePage(page);
  const rbm_PAGE = new Rbm_PAGE(page);
  const processbuilder = new ProcessBuilderPage(page);

  const CopyFileFrom = 'Current headcount nk';
  const PasteFileTo = 'HC_RBM_Training1654674511826';

  await loginPage.GetURL(Datadriven.Environment.QA);
  await loginPage.ValidLogin(Datadriven.Login.Email, Datadriven.Login.password);

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  function generateString(length) {

    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const UpdateInner = "Paste in Current HR Data_" + generateString(3)
  const Updateouter = "Update Current Headcount File_" + generateString(3)

  await processbuilder.ClickProcessBuilderSetFile(CopyFileFrom, PasteFileTo);
  await processbuilder.UpdateGroups(UpdateInner, Updateouter);





  await processbuilder.TranslateTable();
  await processbuilder.RemoveRow();
  await page.locator("(//*[name()='svg'][@class='MuiSvgIcon-root cell-arrow MuiSvgIcon-colorPrimary'])[1]").click();
  await page.locator('text=Add Column').click();
  await page.locator('(//*[@class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"])[2]').click();
  await page.locator("//div[contains(text(),'/')]").click();
  await page.locator('text=Add Column').click();
  await page.locator("//i[contains(text(),'Add Input')]").click();
  await page.locator('text=Salary [HC_RBM_Training_Uses]FX /​ >> input[type="text"]').fill('77');
  await page.locator('#calculation-box-popover-2 button:has-text("Done")').click();
  await page.locator("//body/div[@id='root']/div[1]/div[4]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/span[1]/div[1]/div[1]/div[2]/div[1]/div[1]/span[2]/div[1]").click();
  await page.locator("//body/div[@id='root']/div[1]/div[4]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/span[1]/div[1]/div[1]/div[2]/div[1]/div[1]/span[2]/div[1]").type("India");
  await page.locator("//body/div[@id='root']/div[1]/div[4]/div[2]/div[1]/div[2]/span[1]/div[1]/div[3]/button[2]/span[1]/*[1]").click();
  await page.locator("//p[contains(text(),'Translate Table')]").dblclick();
  await page.locator("//body/div[@id='root']/div[1]/div[4]/div[2]/div[1]/div[2]/span[1]/div[1]/div[1]/div[1]/div[3]/div[1]/input[1]").fill("convert currency");
  await page.locator("//body/div[@id='root']/div[1]/div[4]/div[2]/div[1]/div[2]/span[1]/div[1]/div[1]/div[1]/div[3]/div[1]/input[1]").press('Enter');
  await page.locator('(//*[@class="MuiButton-label"])[2]').click();
  await page.locator("//span[contains(text(),'Run')]").click();
  await page.locator("//span[contains(text(),'Finish')]").waitFor();
  await page.locator("//span[contains(text(),'Finish')]").click();
  await page.locator('//*[@class="MuiTypography-root MuiTypography-caption MuiTypography-colorTextSecondary MuiTypography-noWrap MuiTypography-displayBlock"]').waitFor();
  //await processbuilder.ClickCopyPasteAppendButton.waitFor();
  await processbuilder.ClickCopyPasteAppendButton.click();
  await page.locator("(//input[@id='copy-source-table'])[2]").click();
  await page.locator("(//input[@id='copy-source-table'])[2]").fill('Open Headcount');
  await page.locator("(//input[@id='copy-source-table'])[2]").press('Enter');
  await page.locator("(//input[@id='copy-target-table'])[2]").click();
  await page.locator("(//input[@id='copy-target-table'])[2]").fill('HC_RBM_Training1654674511826');
  await page.locator("(//input[@id='copy-target-table'])[2]").press('Enter');
  await page.locator("//div[@class='MuiAutocomplete-root copy-table-autocomplete copy-table-new-tag']//input[@id='target-table-field-source_table_136_11446-9']").click();
 



  await page.locator('li[role="option"]:has-text("Salary")').click();

  await page.locator("//div[@class='MuiAutocomplete-root copy-table-autocomplete copy-table-new-tag']//input[@id='target-table-field-source_table_136_11446-11']").click();

  await page.locator('li[role="option"]:has-text("Commisions")').click();

  await page.locator('text=#3Copy/Paste AppendSource TableOpen HeadcountTarget TableHC_RBM_Training16546745 >> button').nth(1).click();

  await page.locator("//p[normalize-space()='Copy/Paste Append']").dblclick();

  await page.locator('[placeholder="Step Name"]').fill('Paste ATS HC Data');
  await page.locator('[placeholder="Step Name"]').press('Enter');
  await processbuilder.ClickCopyPasteAppendButton.click();
await page.locator("(//input[@id='copy-source-table'])[3]").waitFor();
await page.locator("(//input[@id='copy-source-table'])[3]").fill("LRP DATA Nkhan");

await page.locator("(//input[@id='copy-source-table'])[3]").press('Enter');
await page.locator('(//*[@id="copy-target-table"])[3]').fill("HC_RBM_Training1654674511826");



//await page.locator('(//*[@type="text"])[29]').click();
  





}
)

