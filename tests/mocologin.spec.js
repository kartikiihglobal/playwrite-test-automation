import { test, expect } from '@playwright/test';
import loginpage from './pages/login';

test("logintest", async({page})=>{
const logpage= new loginpage(page);
await logpage.openurl("https://mocono_new.iihdev.com/login");
await logpage.login("newdesign@yopmail.com", "Password@1")
})
