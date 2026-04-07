const { test, expect } = require('@playwright/test');

test('open google', async ({ page }) => {
  await page.goto('https://mocono_new.iihdev.com/');
  //await expect(page).toHaveTitle(/Google/);
  await page.locator('#email').fill("gauraviih.accountancytoday@yopmail.com")
  await page.locator('#password').fill("Password@123")
  await page.locator(':text-is("Sign in")').click()
  // await page.getByText('Paid Members').click()
  // const rows = page.locator('table tbody tr')
  // await rows.first().waitFor()
  // const rowscount = await rows.count()
  // console.log('rows_count', rowscount)
  //  let j=0
  //  for (let r=0; r<rowscount;r++){
  //    const colum2 = await rows.nth(r).locator('td').nth(2).innerText()
  //   // console.log(colum1)
  //   if(colum2.includes("yearly")){
  //     j++;
  //   const colum1 = await rows.nth(r).locator('td').nth(10).innerText()
  //    const colum10 = await rows.nth(r).locator('td').nth(0).innerText()
  //    console.log(`user ${colum10} Membership ${colum2} Status ${colum1}`)  
  //   } 
  //  }
  //   console.log("total yearly plan", j)
   
    await page.getByText('Email Signups').click()
    while (true){

   
    const rows = page.locator('table tbody tr')
    await rows.first().waitFor()
    const row_count = await rows.count()
    //console.log(row_count)

    for (let r=0; r<row_count; r++){
        let email= await rows.nth(r).locator('td').nth(0).textContent()
         console.log(email)

    }
     let nxt_btn = page.getByText('Next >')
      await nxt_btn.waitFor()
     if (!(await nxt_btn.isVisible())){
          console.log ("pagination complete")
           break;
    
    }
   await Promise.all([
  page.waitForSelector('table tbody tr'),
  page.getByText('Next >').click()
]);
  }
  }

)

