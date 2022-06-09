const { expect } = require("@playwright/test");

class ProcessBuilderPage {

    constructor(page) {
        this.Page = page;
        this.ProcessBuilderIcon = page.locator('//*[@title="Process Builder"]');
        this.ClickCreateButton = page.locator('button:has-text("Create Process")');
        this.ClickCopyPasteAppendButton = page.locator('text=Copy/Paste Append');
        this.ClickCopyFrom = page.locator('text=Copy FromCopy From >> [placeholder="Select"]');
        this.SelectCopyoption = page.locator('text=Current Head uses');
        this.ClickPasteTo = page.locator('text=Paste IntoPaste Into >> [placeholder="Select"]');
        this.SelectPastetoOption = page.locator('text=HC_RBM_Training_Uses');
        this.clcikSalaryPlaceholder = page.locator('//*[@value="Local Salary"]');
        this.SelectLocalsalary = page.locator('li[role="option"]:has-text("Salary")');
        this.clickCommisionPlaceholder = page.locator('//*[@value="Commission"]');


        
        this.SelectCommision =page.locator('text=Commisions');
        this.ClickCollapsIcon = page.locator("//span[1]//div[1]//div[3]//button[2]//span[1]//*[name()='svg']");
        this.ClickCopyPasetApend = page.locator("(//*[@class='MuiTypography-root MuiTypography-body1'])[2]");
        this.Renamecopypastapend = page.locator('[placeholder="Step Name"]');
        this.clickNewProcess = page.locator('text=New Process');
        this.thisRenameNewProcess = page.locator('[placeholder="Name\\.\\.\\."]');

        this.ClickSave = page.locator('(//*[@class="MuiButton-label"])[2]');
        //translate table
        this.ClickTranlateTable = page.locator('(//*[@class="MuiTypography-root MuiTypography-caption MuiTypography-alignLeft MuiTypography-displayBlock"])[3]');
        this.ClickTargetTable = page.locator("#translate-target-table");

        this.SelectTranslateTable = page.locator("li[id='translate-target-table-option-405'] p[class='MuiTypography-root MuiTypography-body1 MuiTypography-noWrap']");
        this.ClickWhenIcon = page.locator('text=When source columns are equal toThen change these columns to >> svg');
        this.uncheckDate = page.locator('input[name="start_date"]');
        this.uncheckName = page.locator('input[name="name"]');
        this.checkLocation = page.locator('input[name="location"]');
        this.unchecUniqeId = page.locator('input[name="unique_id"]');
        this.ClickApplyButton = page.locator('button:has-text("Apply")');
        this.ClickThenIcon = page.locator('text=When source columns are equal toThen change these columns to >> svg');
        this.CheckSalary = page.locator('input[name="salary"]');

        //remove row
        this.ClickRow3Placeholder = page.locator('[aria-label="grid"] >> text=Rule 3');

        this.ClickThreeDotofThirdrow = page.locator('text=1Rule 12Rule 23Rule 3 >> button');
        this.ClickRow2Placeholder = page.locator('[aria-label="grid"] >> text=Rule 2');
        this.ClickThreeDotofSecondRow = page.locator('text=1Rule 12Rule 2 >> button');
        this.clickRemoveRow = page.locator('text=Delete Row');
    }
    async ClickProcessBuilderSetFile(Copyfrom,PasteTo) {
        await this.ProcessBuilderIcon.click();
        await this.ClickCreateButton.click();
        await this.ClickCopyPasteAppendButton.click();
        await this.ClickCopyFrom.click();
        await this.ClickCopyFrom.fill(Copyfrom);
        await this.ClickCopyFrom.press('Enter');
        
        await this.ClickPasteTo.click();
        await this.ClickPasteTo.fill(PasteTo);
        await this.ClickPasteTo.press('Enter');

    }
    async UpdateGroups(UpdateInner, Updateouter) {
        await this.clcikSalaryPlaceholder.click();
        // Click li[role="option"]:has-text("Salary")
        await this.SelectLocalsalary.click();
        await this.clickCommisionPlaceholder.click();
        await this.SelectCommision.click();
       await this.ClickCollapsIcon.click();
        //update name
        await this.ClickCopyPasetApend.dblclick();
        await this.Renamecopypastapend.fill(UpdateInner);

        await this.Renamecopypastapend.press('Enter');
        await this.clickNewProcess.click();
        await this.thisRenameNewProcess.fill(Updateouter);
        await this.thisRenameNewProcess.press('Enter');
        await this.ClickSave.click()
    }

    async TranslateTable() {
        await this.ClickTranlateTable.click();
        await this.ClickTargetTable.click();
        await this.ClickTargetTable.fill("HC_RBM_Training_Uses");
        await this.ClickTargetTable.press('Enter');
        // await this.SelectTranslateTable.click();
        await this.ClickWhenIcon.first().click();
        await this.uncheckDate.uncheck();
        await this.uncheckName.uncheck();
        await this.checkLocation.check();
        await this.unchecUniqeId.uncheck();
        await this.ClickApplyButton.click();
        // then to
        await this.ClickThenIcon.nth(1).click();
        await this.CheckSalary.check();
        await this.uncheckDate.uncheck();
        await this.uncheckName.uncheck();
        await this.unchecUniqeId.uncheck();
        await this.ClickApplyButton.click();
    }
    async RemoveRow() {
        await this.ClickRow3Placeholder.click();
        await this.ClickThreeDotofThirdrow.nth(2).click();
        await this.clickRemoveRow.click();
        await this.ClickRow2Placeholder.click();
        await this.ClickThreeDotofSecondRow.nth(1).click();
        await this.clickRemoveRow.click();


    }

}
module.exports = { ProcessBuilderPage };   