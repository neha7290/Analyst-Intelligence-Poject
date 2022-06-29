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
  const OpenHeadcount = 'Open Headcount';

  const LRPfile = "LRP upload";
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
  await processbuilder.SetCalculation();
  await processbuilder.PasteATCdata(OpenHeadcount, PasteFileTo);

  await processbuilder.PasteLRPData(LRPfile, PasteFileTo);
  await processbuilder.Findcalsgroup(PasteFileTo);

  //trans find calc group.



}
)
