//assertion test (soft and hard "except")
//Write assertions in Test files  (not baseclass, page object)

// ================== PLAYWRIGHT ASSERTION CHEAT SHEET ==================

// 🔴 HARD ASSERTION (Stops test if fails)
await expect(page).toHaveURL('/dashboard'); // Check page URL after navigation

// 🟡 SOFT ASSERTION (Does NOT stop test)
await expect.soft(page.locator('#name')).toHaveText('John'); // Validate text but continue test


// ================== PAGE ASSERTIONS ==================

// Check current URL
await expect(page).toHaveURL('/dashboard'); 

// Check page title
await expect(page).toHaveTitle('Dashboard');


// ================== ELEMENT STATE ASSERTIONS ==================

// Element is visible on UI
await expect(locator).toBeVisible();

// Element is hidden
await expect(locator).toBeHidden();

// Element is enabled (clickable)
await expect(locator).toBeEnabled();

// Element is disabled
await expect(locator).toBeDisabled();


// ================== TEXT & VALUE ASSERTIONS ==================

// Exact text match
await expect(locator).toHaveText('John Doe');

// Partial text match
await expect(locator).toContainText('John');

// Input field value check
await expect(locator).toHaveValue('test@test.com');


// ================== ATTRIBUTE ASSERTIONS ==================

// Check element attribute (type, class, id, etc.)
await expect(locator).toHaveAttribute('type', 'email');


// ================== COUNT / LIST ASSERTIONS ==================

// Validate number of elements (list, table rows, etc.)
await expect(locator).toHaveCount(5);


// ================== BOOLEAN ASSERTIONS ==================

// True condition check
expect(isVisible).toBeTruthy();

// False condition check
expect(isHidden).toBeFalsy();


// ================== REAL QA MIX (BEST PRACTICE) ==================

// Critical check → Hard assertion
await expect(page).toHaveURL('/dashboard');

// UI validations → Soft assertions
await expect.soft(page.locator('#name')).toHaveText('John Doe');
await expect.soft(page.locator('#role')).toHaveText('Admin');
await expect.soft(page.locator('#status')).toHaveText('Active');


// ================== QUICK MEMORY FLOW ==================
// URL → Title → Visible → Text → Attribute → Count
// ====================================================================