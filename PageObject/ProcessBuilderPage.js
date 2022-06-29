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



        this.SelectCommision = page.locator('text=Commisions');
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

        //
        this.ClickOnSalaryCell = page.locator("(//*[name()='svg'][@class='MuiSvgIcon-root cell-arrow MuiSvgIcon-colorPrimary'])[1]");
        this.ClickOnAddcolumn = page.locator('text=Add Column');
        this.ClickonSalarybox = page.locator('(//*[@class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"])[2]');
        this.ClickonDividedIcon = page.locator("//div[contains(text(),'/')]");
        this.ClickOnAddcolumn = page.locator('text=Add Column');

        this.clickonAddinput = page.locator("//i[contains(text(),'Add Input')]");
        this.clickandsetdividedvalue = page.locator('//*[@class="MuiInputBase-input MuiOutlinedInput-input MuiAutocomplete-input MuiAutocomplete-inputFocused MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"]');
        this.ClickonDone = page.locator('#calculation-box-popover-2 button:has-text("Done")');
        this.ClickFirstCell = page.locator("//body/div[@id='root']/div[1]/div[4]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/span[1]/div[1]/div[1]/div[2]/div[1]/div[1]/span[2]/div[1]");

        this.ClickCollaps = page.locator("//body/div[@id='root']/div[1]/div[4]/div[2]/div[1]/div[2]/span[1]/div[1]/div[3]/button[2]/span[1]/*[1]");
        this.ClickOnTranslateTable = page.locator("//p[contains(text(),'Translate Table')]");
        this.SetRenameTranslate = page.locator("//body/div[@id='root']/div[1]/div[4]/div[2]/div[1]/div[2]/span[1]/div[1]/div[1]/div[1]/div[3]/div[1]/input[1]");

        this.ClickOnSaveButton = page.locator('(//*[@class="MuiButton-label"])[2]');
        this.runTimeTextVisible = page.locator("//span[contains(text(),'Run')]");
        this.WaitForFininshButtonIsvisible = page.locator("//span[contains(text(),'Finish')]");
        this.ClickOnFinishButton = page.locator("//span[contains(text(),'Finish')]");
        this.WaitforDisplayBlock = page.locator('//*[@class="MuiTypography-root MuiTypography-caption MuiTypography-colorTextSecondary MuiTypography-noWrap MuiTypography-displayBlock"]');
        this.ClickOnCopyFrom = page.locator("(//input[@id='copy-source-table'])[2]");
        this.ClickOnPasteTo = page.locator("(//input[@id='copy-target-table'])[2]");
        this.SalaryPlaceholder = page.locator("//div[@class='MuiAutocomplete-root copy-table-autocomplete copy-table-new-tag']//input[@id='target-table-field-source_table_136_11446-9']");
        this.SelectSalary = page.locator('li[role="option"]:has-text("Salary")');
        this.CommisionPlaceholder = page.locator("//div[@class='MuiAutocomplete-root copy-table-autocomplete copy-table-new-tag']//input[@id='target-table-field-source_table_136_11446-11']");

        this.SelectComssion = page.locator('li[role="option"]:has-text("Commisions")');
        this.CollapsPasteATCdata = page.locator('text=#3Copy/Paste AppendSource TableOpen HeadcountTarget TableHC_RBM_Training16546745 >> button');
        this.DoubleclickonCopyPaste = page.locator("//p[normalize-space()='Copy/Paste Append']");


        this.RenameATS = page.locator('[placeholder="Step Name"]');


        this.SourceCopyFrom = page.locator("(//input[@id='copy-source-table'])[3]");
        this.SourcePasteto = page.locator('(//*[@id="copy-target-table"])[3]');
        //

        this.CountPlaceholder = page.locator("//div[@class='MuiAutocomplete-root copy-table-autocomplete copy-table-new-tag']//input[@id='target-table-field-source_table_136_11446-9']");

        this.SelectLRPHeadcount = page.locator("#target-table-field-source_table_136_11446-9-option-12");

        this.clickComissionPlaceholder = page.locator("//input[@id='target-table-field-source_table_136_11446-12']");
        this.SelectComission = page.locator("#target-table-field-source_table_136_11446-12-option-7");
        this.CollapsLRPATC = page.locator('(//*[@class="MuiSvgIcon-root"])[45]');
        this.ClickCopypasterename = page.locator('(//*[@class="MuiTypography-root MuiTypography-body1"])[9]');
        this.RenamePlaceHolderLRP = page.locator('//*[@class="MuiInputBase-input MuiOutlinedInput-input"]');

        //cals
        this.clickonPasteinputebox = page.locator('(//*[@id="translate-target-table"])[2]');
        this.clickonWhentableIcon = page.locator('(//*[@class="MuiSvgIcon-root MuiSvgIcon-colorPrimary"])[3]');
        //
        this.checkkDepatment = page.locator('//*[@name="department"]');
        this.checkLocation = page.locator('//*[@name="location"]');
        this.unchecUniqeId = page.locator('//*[@name="unique_id"]');
        this.uncheckName = page.locator('//*[@name="name"]');
        this.uncheckStartdate = page.locator('//*[@name="start_date"]');
        this.clickSaveButton = page.locator("//span[normalize-space()='Apply']");
        this.clickonThenTable = page.locator('(//*[@class="MuiSvgIcon-root MuiSvgIcon-colorPrimary"])[4]');
        this.checkGroup = page.locator('//*[@name="calculation_group"]');
        this.ClickOnRunButton = page.locator("//span[normalize-space()='Run']");
    }

    async ClickProcessBuilderSetFile(Copyfrom, PasteTo) {
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
        await this.ClickOnSaveButton.click();

        //if test fails so above save button line override with below commenthing line
        //await this.ClickSave.click()
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

    async SetCalculation() {
        await this.ClickOnSalaryCell.click();
        await this.ClickOnAddcolumn.click();
        await this.ClickonSalarybox.click();
        await this.ClickonDividedIcon.click();
        await this.ClickOnAddcolumn.click();
        await this.clickonAddinput.click();
        await this.clickandsetdividedvalue.fill('77');
        //
        await this.ClickonDone.click();
        await this.ClickFirstCell.click();
        await this.ClickFirstCell.type("India");
        await this.ClickCollaps.click();
        await this.ClickOnTranslateTable.dblclick();
        await this.SetRenameTranslate.fill("convert currency");
        await this.SetRenameTranslate.press('Enter');
        await this.ClickOnSaveButton.click();
        await this.runTimeTextVisible.click();
        await this.WaitForFininshButtonIsvisible.waitFor();
        await this.ClickOnFinishButton.click();
        
    }
    //'Open Headcount'
    async PasteATCdata(OpenheadcountFile, PasteFileTo) {
        await this.WaitforDisplayBlock.waitFor();
        await this.ClickCopyPasteAppendButton.click();
        await this.ClickOnCopyFrom.click();
        await this.ClickOnCopyFrom.fill(OpenheadcountFile);
        await this.ClickOnCopyFrom.press('Enter');
        await this.ClickOnPasteTo.click();
        await this.ClickOnPasteTo.fill(PasteFileTo);
        await this.ClickOnPasteTo.press('Enter');
        await this.SalaryPlaceholder.click();
        await this.SelectSalary.click();
        await this.CommisionPlaceholder.click();
        await this.SelectComssion.click();
        await this.CollapsPasteATCdata.nth(1).click();
        await this.DoubleclickonCopyPaste.dblclick();
        await this.RenameATS.fill('Paste ATS HC Data');
        await this.RenameATS.press('Enter');

    }
    //"LRP upload"
    async PasteLRPData(UploadLRP, PasteFileTo) {

        await this.ClickCopyPasteAppendButton.click();
        await this.SourceCopyFrom.waitFor();
        await this.SourceCopyFrom.click();
        await this.SourceCopyFrom.click();
        await this.SourceCopyFrom.fill(UploadLRP);
        await this.SourceCopyFrom.press('Enter');
        await this.SourcePasteto.fill(PasteFileTo);
        await this.SourcePasteto.press('Enter');
        await this.CountPlaceholder.click();
        await this.SelectLRPHeadcount.click();
        await this.clickComissionPlaceholder.click();
        await this.SelectComission.click();
        await this.CollapsLRPATC.click();
        await this.ClickCopypasterename.dblclick();
        await this.RenamePlaceHolderLRP.fill("Paste LRP Data");
        await this.RenamePlaceHolderLRP.press('Enter');
    }

    async Findcalsgroup(PasteFileTo) {
        await this.ClickTranlateTable.click();
        await this.clickonPasteinputebox.waitFor();
        await this.clickonPasteinputebox.click();
        await this.clickonPasteinputebox.fill(PasteFileTo);
        await this.clickonPasteinputebox.press('Enter')
        //to set table list
        await this.clickonWhentableIcon.click();
        await this.checkkDepatment.check();
        await this.checkLocation.check();
        //await page.locator('//*[@name="department"]').check();
        await this.unchecUniqeId.uncheck();
        await this.uncheckName.uncheck();
        await this.uncheckStartdate.uncheck();
        await this.clickSaveButton.click();
        //second column to customize
        await this.clickonThenTable.click();
        await this.checkGroup.check();
        await this.unchecUniqeId.uncheck();
        await this.uncheckName.uncheck();
        await this.uncheckStartdate.uncheck();
        await this.clickSaveButton.click();
        await this.ClickOnRunButton.click();
        await this.ClickOnSaveButton.waitFor();
       
        await this.ClickOnSaveButton.click();



    }

}
module.exports = { ProcessBuilderPage };   