const { expect } = require("@playwright/test");

class Loginpage{

    constructor(page)
    {
      this.page=page;
      this.userName=page.locator("#username");
      this.Password=page.locator("#password");
      this.signBtn=page.locator(".MuiButton-label");
    

    
}

async GetURL(environment){

    await this.page.goto(environment);


}

async ValidLogin(username,password){


await this.userName.fill(username);
await this.Password.fill(password);
await this.signBtn.click();
await this.page.waitForNavigation("https://app.qa.alterflo.com/dashboard");
//





}
}
module.exports={Loginpage};