import {test, expect} from '@playwright/test'
 export default class Basepage{

    constructor(page){
        this.page=page;

    }
    async goto(url){
        await this.page.goto(url);
    }
    async fill(locator, value){
        await this.page.fill(locator, value)
        //await locator.fill(value)
    }
    async click(locator){
        await this.page.click(locator)
        //await locator.click();
    }

    async gettext(locator){
       return await this.page.textContent(locator)
      // return await  locator.textContent()
    }
      async isvisable(locator){
        //return await locator.isvisable()
      }

 }