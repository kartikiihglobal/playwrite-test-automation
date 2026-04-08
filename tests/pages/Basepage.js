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
    }
    async click(locator){
        await this.page.click(locator)
    }

    async gettext(locator){
       return await this.page.textContent(locator)
    }


 }