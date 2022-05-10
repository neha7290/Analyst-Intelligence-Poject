const { expect } = require("@playwright/test");

class Rbm_PAGE {

    constructor(page) {
        this.Page = page;

        this.RuleBasedModel_Icon = page.locator("img[alt='Rule-Based Modeling']");
        this.CreateButton = page.locator('button:has-text("Create")');
        this.Name = page.locator("input[name='newName']");
        this.SelectScenerio = page.locator("input[aria-autocomplete='list']");
        this.clickCreateButton = page.locator("button[type='submit'] span:nth-child(1)");
        const GenrateNewName = `HC_RBM_Training${Date.now()}`;
        this.SetBBMformName = GenrateNewName;
        this.SpecifyFixedValue = page.locator('input[name="fixedValue"]');
        this.SetSpecifyFixedValue = page.locator('input[name="fixedValue"]');
        this.
            ClickGLid = page.locator('[placeholder="Not Selected"]');
        this.SelectGLidPayroll = page.locator("text=Payroll Tax (600300)");
        this.ClickUpdateButton = page.locator('button:has-text("Update")');
        this.updateOption = page.locator("//span[normalize-space()='UPDATE']");
        this.ClickEditIcon = page.locator("(//*[name()='svg'][@class='MuiSvgIcon-root'])[14]");
        this.PercentageOff = page.locator('[placeholder="Select"]');
        this.AddBonus = page.locator('li[role="option"]:has-text("Bonus")');
        this.SpecifyFixedValue = page.locator('#percentage');
        this.SetSpecifyFixedValue = page.locator('#percentage');
        this.Bonus = page.locator('text=BonusTypePercentage (%) >> button');

        this.SetGLidBonus = page.locator('text=Variable (600200)');

        this.Salary = page.locator('text=SalaryType$ Input >> button');
        this.SetGLidsalary = page.locator('text=Salaries (600100)');


        this.Benefit = page.locator('text=BenefitsTypePercentage (%) >> button');
        this.SetGLidbenefit = page.locator('text=Benefits (600400)');



        this.Match401k = page.locator('text=401k MatchTypePercentage (%) >> button');
        this.SetGLidMatch401K = page.locator('text=Benefits (600400)');

        this.Headcount = page.locator('text=HeadcountTypeCount >> button');
        this.SetGLidHeadcount = page.locator('text=Benefits (600400)');
        //new calculation group
        this.List1 = page.locator('.MuiBox-root.jss174');

        this.CopyCalculationGroup = page.locator('svg:nth-child(2)');
        this.ClickCopiedCG = page.locator("(//*[name()='svg'][@title='Edit'])[2]");

        this.RenamNewCalculationGroup = page.locator('[placeholder="Calculation Group Name"]');
        this.ClickRenameUpdate = page.locator('button:has-text("Update")');
        this.ThisGoup = page.locator('button:has-text("This Group")');
        this.Click = page.locator("p[title='Copy of 2 - FT-US']");

        this.Remove401k = page.locator("(//*[name()='path'])[32]");



    }


    async clickRBMicon() {

        await this.RuleBasedModel_Icon.click();
        await this.Page.waitForURL('https://app.qa.alterflo.com/dashboard/rule-based-model');
    }

    async CreateRBM() {
        await this.CreateButton.click();
    }

    async SetRBMform() {

        await this.Name.fill(this.SetBBMformName);
        await this.SelectScenerio.fill("20+C");
        await this.clickCreateButton.click();
        await this.Page.locator(".MuiTypography-root.MuiTypography-h2").waitFor();
    }
    async UpdatePayrollTax() {
        await this.ClickEditIcon.click();
        await this.PercentageOff.click();
        await this.AddBonus.click();
        await this.SpecifyFixedValue.click();
        await this.SetSpecifyFixedValue.fill('10');
        await this.ClickGLid.click();
        await this.SelectGLidPayroll.click();

        await this.ClickUpdateButton.click();

        await this.updateOption.click();

    }

    async UpdateBonus() {
        await this.Bonus.first().click();
        await this.ClickGLid.click();

        await this.SetGLidBonus.click();

        await this.ClickUpdateButton.click();
        await this.updateOption.click();

    }
    async UpdateSalary() {
        await this.Salary.first().click();
        await this.ClickGLid.click();
        await this.SetGLidsalary.click();
        await this.ClickUpdateButton.click();
        await this.updateOption.click();

    }
    async UpdateBenefit() {
        await this.Benefit.first().click();
        await this.ClickGLid.click();
        await this.SetGLidbenefit.click();
        await this.ClickUpdateButton.click();
        await this.updateOption.click();

    }
    async Update401Kmatch() {
        await this.Match401k.first().click();
        await this.ClickGLid.click();
        await this.SetGLidMatch401K.click();
        await this.ClickUpdateButton.click();
        await this.updateOption.click();

    }

    async UpdateHeadcount() {
        await this.Headcount.first().click();
        await this.ClickGLid.click();
        await this.SetGLidHeadcount.click();
        await this.ClickUpdateButton.click();
        await this.updateOption.click();

    }


    async CreateFT_IN() {
        await this.List1.click();
        await this.CopyCalculationGroup.first().click();
        await this.Click.click();
        await this.ClickCopiedCG.first().click();
        await this.RenamNewCalculationGroup.fill('FT-IN');
        await this.ClickRenameUpdate.click();
        await this.Remove401k.click();
        await this.ThisGoup.click();
    }


    


}
module.exports = { Rbm_PAGE };