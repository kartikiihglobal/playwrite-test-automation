import Basepage from "./Basepage";

class loginpage extends Basepage{

    constructor(page){
        super(page)

         this.email = '#email';
         this.password = '#password'
         this.submitbtn = ':text-is("Sign in")'
    }

    async openurl(url){
        await this.goto(url)
    }
    async login(email, password){
       await this.fill(this.email, email)
       await  this.fill(this.password, password)
       await this.click(this.submitbtn)
    }
}

export default loginpage;