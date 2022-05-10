const {test,expect}=require('@playwright/test');
const{Loginpage}=require('../PageObject/LoginPage');
const Datadriven=require("../DataDriven/testdata.json")
//const {RbmPage} =require('../PageObject/RbmPage');
test('AI App Login',async ({page})=>
{const loginPage=new Loginpage(page);
  await loginPage.GetURL(Datadriven.Environment.QA); 
  await loginPage.ValidLogin(Datadriven.Login.Email, Datadriven.Login.password);

})