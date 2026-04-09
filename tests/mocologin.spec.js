import { test, expect } from '@playwright/test';
import loginpage from './pages/login';

test("logintest", async({page})=>{
const logpage= new loginpage(page);
await logpage.openurl("https://mocono_new.iihdev.com/login");
await logpage.login("newdesign@yopmail.com", "Password@123")
//const lg_btn= await logpage.gettext(logpage.logoutbutton)
//const lg_btn= await logpage.logoutbutton.textContent()
//expect(lg_btn).toBe("Sign out")
//await expect(lg_btn).toHaveText("Sign out")
await expect(logpage.logoutbutton).toHaveText('Sign out');
await page.waitForTimeout(3000)
})
