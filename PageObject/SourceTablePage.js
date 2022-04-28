const { expect } = require("@playwright/test");
class SourceTablePage{
constructor (page)
{
this.SOURCE_TABLE=page.locator("img[alt='Source Tables']");
this.IMPORT_TABLE=page.locator("button[class='MuiButtonBase-root MuiButton-root MuiButton-contained title-button MuiButton-containedPrimary'] span[class='MuiButton-label']");
this.BROWSE=page.locator(".MuiTypography-root.MuiTypography-body1.MuiTypography-colorPrimary.MuiTypography-gutterBottom.MuiTypography-alignCenter.MuiTypography-displayInline");
this.SelectAll=page.locator("tr[class='selected']");
this.Importfile=page.locator("div[class='MuiBox-root jss78'] span[class='MuiButton-label']");

}
async ClickSource(){
//const handle=this.BROWSE.click();
//const Mydata='../Files/Training HC RBM QA File';
await this.SOURCE_TABLE.click();
//await page.waitForTimeout(5000);
await this.IMPORT_TABLE.click();
//await this.BROWSE.click();
}

async SelectTable(){
await this.Importfile.click();
  



}

}
module.exports={SourceTablePage};