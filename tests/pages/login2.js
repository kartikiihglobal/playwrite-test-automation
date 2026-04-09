
import Basepage from './basepage2'

export default class loginpage1 extends Basepage{
 constructor(page){
    super(page);
 

 //locators : 
  this.email = page.locator('#email');
  this.password = page.locator('#password')
  this.lognbtn= page.getByText('Sign in', { exact: true })
  this.logutbtn= page.getByText('Sign out')

  }

  async openbowser(url){
        await this.goto(url)
  }

  async login(email, password){
          await this.fill(this.email, email)
          await this.fill( this.password, password)
          await this.click(this.lognbtn)
  }
  

}