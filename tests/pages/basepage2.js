//base class

export default class Basepage{

    constructor(page){
        this.page=page
    }

    async click(locator){
        await locator.click()
    }
     async goto(url){
        await this.page.goto(url);
    }

    async fill(locator,value){
        await locator.fill(value)
    }

    async gettext(locator){
        return await locator.textContent();
    }

    // async isvisable(locator){

    //     return await locator.isVisable()
    // }

    async waitforElemet(locator){
        await locator.waitFor()
    }
}