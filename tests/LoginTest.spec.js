const {test,expect}=require('@playwright/test');
const{Loginpage}=require('../PageObject/LoginPage');
//const {RbmPage} =require('../PageObject/RbmPage');
test('AI App Login',async ({page})=>
{
    
const email="neha5244@yopmail.com";
const password="owner123";
const environment_QA="https://app.qa.alterflo.com/login";
const environment_stage="https://app.staging.alterflo.com/";
const loginPage=new Loginpage(page);


await loginPage.GetURL(environment_QA);
await loginPage.ValidLogin(email,password);

//await rbm.ClickRBM();



  // Browse file
 
 // await page.setInputFiles('input[type="file"]', 'dataset/HC Related Costs.xlsx');

  // Select & Import all columns
 // await page.click('text=1');
 // await page.click('button:has-text("Import Column(s)")');
})