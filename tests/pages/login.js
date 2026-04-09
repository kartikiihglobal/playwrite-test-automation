import Basepage from "./Basepage";

class loginpage extends Basepage{

    constructor(page){
        super(page)

         this.email = '#email';
         this.password = '#password'
         this.submitbtn = ':text-is("Sign in")'
         this.logoutbutton= 'span:has-text("Sign out")'
        
         //other type 
       //this.email = page.getByRole('textbox', { name: 'Email' });
    }

    async openurl(url){
        await this.goto(url)
    }
    async login(email, password){
       await this.fill(this.email, email)
       await  this.fill(this.password, password)
       await this.click(this.submitbtn)
       await this.gettext(this.logoutbutton)
      
    }
}

export default loginpage;