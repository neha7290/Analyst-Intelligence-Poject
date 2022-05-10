const { expect } = require("@playwright/test");
class SourceTablePage {
    constructor(page) {
        this.Page = page;
        this.SOURCE_TABLE = page.locator("img[alt='Source Tables']");
        this.IMPORT_TABLE = page.locator("button[class='MuiButtonBase-root MuiButton-root MuiButton-contained title-button MuiButton-containedPrimary'] span[class='MuiButton-label']");
        this.BROWSE = page.locator(".MuiTypography-root.MuiTypography-body1.MuiTypography-colorPrimary.MuiTypography-gutterBottom.MuiTypography-alignCenter.MuiTypography-displayInline");
        this.SelectAll = page.locator("tr[class='selected']");
        this.Importfile = page.locator("div[class='MuiBox-root jss78'] span[class='MuiButton-label']");
        const UpdateFileName = `HC_NN${Date.now()}`;
        this.FILETITTLE = page.locator('text=RBM');
        this.UPDATE_PLACEHOLDER = page.locator('[placeholder="Name\\.\\.\\."]');
        this.UpdateFileName = UpdateFileName;
        this.DONEBTN = page.locator('button:has-text("Done")');
        const ENTRY = page.locator(`text=${UpdateFileName}`);
        this.entry = ENTRY;
        this.FirtColumn = page.locator('text=Unique ID');
        this.CUSTOM_COLUMN = page.locator('text=Commissions');
        this.IMPORT_COLUMN = page.locator('button:has-text("Import Column(s)")');
        //data type
        this.Date_Datatype = page.locator('input[name="dataType"]');
        this.Amount_Datatype = page.locator('input[name="dataType"]');

        //Impoted table format column icon
        this.StartDate = page.locator('.MuiBox-root.jss100 img');
        this.EndDate = page.locator('.MuiBox-root.jss101 img');
        this.Salary = page.locator('.MuiBox-root.jss102 img');
        this.Bonus = page.locator('.MuiBox-root.jss103 img');
        this.Commision = page.locator('.MuiBox-root.jss104 img');
        this.Done = page.locator('div[role="presentation"] button:has-text("Done")');


    }
    async UploadFile() {
        await this.SOURCE_TABLE.click();
        await this.IMPORT_TABLE.click();
        await this.Page.setInputFiles('input[type="file"]', 'dataset/RBM.csv');
    }

    async CustomizeAndImport() {
        await this.Page.waitForURL('https://app.qa.alterflo.com/dashboard/source-tables/import-table');
        await this.FirtColumn.click();
        await this.CUSTOM_COLUMN.first().click({ modifiers: ['Shift'] });
        await this.IMPORT_COLUMN.click();

    }

    async SetFormat() {

        await this.StartDate.click();
        await this.Date_Datatype.nth(2).check();
        await this.Done.click();

        await this.EndDate.click();
        await this.Date_Datatype.nth(2).check();
        await this.Done.click();

        await this.Salary.click();
        await this.Amount_Datatype.nth(1).check();
        await this.Done.click();

        await this.Commision.click();
        await this.Amount_Datatype.nth(1).check();
        await this.Done.click();

    }
    async RenameAndSave() {

        await this.FILETITTLE.click();
        await this.UPDATE_PLACEHOLDER.fill(this.UpdateFileName);

        await this.UPDATE_PLACEHOLDER.press('Enter');
        await this.Page.waitForURL("https://app.qa.alterflo.com/dashboard/source-tables/import-table");
        await this.DONEBTN.click();
        await expect(this.entry).toHaveCount(1);
    }

}
module.exports = { SourceTablePage };