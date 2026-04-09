import {test, expect} from '@playwright/test'
import loginpage1 from './login2'

test("logintest", async({page})=>{

  const lp_page = new loginpage1(page)
  await lp_page.goto("/login")
  await lp_page.login("newdesign@yopmail.com", "Password@123")
  await expect(lp_page.logutbtn).toBeVisible()
  const btn= await lp_page.logutbtn.innerText()
  console.log(btn)
  await page.waitForTimeout(3000)
})

