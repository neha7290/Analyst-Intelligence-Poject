const { test, expect } = require('@playwright/test');
const { Loginpage } = require('../PageObject/LoginPage');
const { SourceTablePage } = require('../PageObject/SourceTablePage');
const { Rbm_PAGE } = require('../PageObject/Rbm_PAGE');

const Datadriven = require("../DataDriven/testdata.json");


test('Create RBM', async ({ page }) => {

    const loginPage = new Loginpage(page);
    const sourcetablepage = new SourceTablePage(page);
    const rbm_PAGE = new Rbm_PAGE(page);

    await loginPage.GetURL(Datadriven.Environment.QA);
    await loginPage.ValidLogin(Datadriven.Login.Email, Datadriven.Login.password);
    await rbm_PAGE.clickRBMicon();
    await rbm_PAGE.CreateRBM();
    await rbm_PAGE.SetRBMform();
    await rbm_PAGE.UpdatePayrollTax();
    await rbm_PAGE.UpdateBonus();
    await rbm_PAGE.UpdateSalary();
    await rbm_PAGE.UpdateBenefit();
    await rbm_PAGE.Update401Kmatch();
    await rbm_PAGE.UpdateHeadcount();
    await rbm_PAGE.CreateFT_IN();
    await rbm_PAGE.CreateUSSLS();
    await rbm_PAGE.EditFT_USSLS_Bonus();
    await rbm_PAGE.DeleteBonus();

    await rbm_PAGE.EditFT_USSLS_Payroll();
    await rbm_PAGE.EditFT_USSLS_Benefits();
    await rbm_PAGE.RenameNewComponnet();
    await rbm_PAGE.DeleteBenefit();

})



