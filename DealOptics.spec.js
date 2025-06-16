import { test, expect } from '@playwright/test';
import { features } from 'process';


test('get started link', async ({ page }) => {

    await page.goto('https://wiseuat.cognizant.com/solution/home');
    await page.click('text=Sign in');
    await page.fill('input[type="email"]', '2323698@cognizant.com');
    const next1 = page.locator('//div/div[4]/div/div/div/div/input');
    await expect(next1).toBeVisible();
    await next1.click();
    await page.fill('input[name="passwd"]', 'Nagalakshmi@30092000');
    const signin =page.locator('//div/div[2]/div/div[5]/div/div/div/div/input');
    await expect(signin).toBeVisible();
    await signin.click();
    // const authclick =page.locator('//div/div[2]/div/div[6]/div[1]/div[2]/div/div/div[1]/a');
    // await expect(authclick).toBeVisible();
    // await authclick.click();
    // const clickcode =page.locator('//div/div[2]/div/div[2]/div/div[1]/div/div/div[2]/div');
    // await expect(clickcode).toBeVisible();
    // await clickcode.click();
    const checkbox1 =page.locator('//div[3]/div/div[2]/div/div[3]/div[1]/div/label/input');
    await expect(checkbox1).toBeVisible();
    await checkbox1.click();
    const loginclick =page.locator('//div/div[2]/div/div[3]/div[2]/div/div/div[2]/input');
    await expect(loginclick).toBeVisible();
    await loginclick.click();

    await expect(page).toHaveTitle(/WiSE/);
    await page.waitForTimeout(10000);

    const ReviewCornerHeader = page.locator("//span[normalize-space()='Review Corner']");
    const ClickReviewCornerDropDown = page.locator("//button[@id='dropdownMenuButton4']");
    const ValidateDO = page.locator("//span[normalize-space()='Deal Optics']");
    const Breadcrumb_Home=page.locator("//a[normalize-space()='Home']");
    const BreadCrumb_RevireCorner = page.locator("//a[normalize-space()='Review Corner']");
    const Breadcrumb_DO = page.locator("//a[normalize-space()='Deal Optics']");
    const ActiveMyDeals = page.locator("//div/div/span[3]");
    const BookMarkClick = page.locator("//app-bookmark-common/div/button/img");
    const AddBookmark = page.locator("//div/ul/div[2]/img");
    const BookmarkName = page.locator("//input[@placeholder='Bookmark Name']");
    const SaveBookmark = page.locator("//button[@class='savebtn_bookmark float-end m-2']");
    const NewBookmarkSavedText = page.locator("//h6[normalize-space()='Bookmark Added Successfully']");
    const clickOkSave = page.locator("//button[@class='savebtn ng-star-inserted']");
    const MoreInfoBookmark = page.locator("//div/ul/li/div[1]/div[2]");
    const markasdefaultBookmark = page.locator("//span[@class='bookmark_records ng-star-inserted']");
    const ValidateDefaultMadeTextBookmark = page.locator("//h6[normalize-space()='Bookmark Marked as default']");
    const RenameBookmark = page.locator("//span[normalize-space()='Rename']");

    await expect(ReviewCornerHeader).toBeVisible();
    try{
        const ReviewCornerHeader1 = await ReviewCornerHeader.textContent();
        expect(ReviewCornerHeader1).toContain("Review Corner");
        console.log("Review Corner is visible");
    } catch (error) {
        console.error("Review Corner is not visible");
    }

    await ClickReviewCornerDropDown.click();

    await expect(ValidateDO).toBeVisible();
    try {
        const ValidateDO1 = await ValidateDO.textContent();
        expect(ValidateDO1).toContain("Deal Optics");
        console.log("Deal Optics is visible");
    } catch (error) {
        console.error("Deal Optics is not visible");
    }

    await ValidateDO.click();

    try {
        const breadcrumbText = await Breadcrumb_Home.textContent();
        expect(breadcrumbText).toBe('Home');
        console.log("Breadcrumb Home is present");
    } catch (error) {
        console.error("Breadcrumb Home is not present");
    }

    try {
        const breadcrumbText1 = await BreadCrumb_RevireCorner.textContent();
        expect(breadcrumbText1).toBe('Review Corner');
        console.log("Breadcrumb Review Corner is present");
    } catch (error) {
        console.error("Breadcrumb Review Corner is not present");
    }

    try {
        const breadcrumbText2 = await Breadcrumb_DO.textContent();
        expect(breadcrumbText2).toBe('Deal Optics');
        console.log("Breadcrumb Deal Optics is present");
    } catch (error) {
        console.error("Breadcrumb Deal Optics is not present");
    }

    await expect(ActiveMyDeals).toBeVisible();
    const isVisible = await ActiveMyDeals.isVisible();
    try{
    console.log("MyDeals is visible");
    }
    catch (error) {
        console.error("MyDeals is not visible");
    }

    const isEnabled = await ActiveMyDeals.isEnabled();
    try{
    console.log("MyDeals is enabled");
    }
    catch (error) {
        console.error("MyDeals is not enabled");
    }

    const isFocused = await ActiveMyDeals.evaluate((el) => document.activeElement === el);
    try{
    console.log("User is focused in the My deals Tab");
    }
    catch (error) {
        console.error("User is not focused in the My deals Tab");
    }

    //Validating the BookMark Functionality
    await BookMarkClick.click();

    await expect(AddBookmark).toBeVisible();
    await AddBookmark.click();

    await expect(BookmarkName).toBeVisible();
    await BookmarkName.fill('Playwright Bookmark Test');

    await expect(SaveBookmark).toBeVisible();
    await SaveBookmark.click();

    await expect(NewBookmarkSavedText).toBeVisible();
    const NewBookmarkText = await NewBookmarkSavedText.textContent();
    try{
        expect(NewBookmarkText).toContain("Bookmark Added Successfully");
        console.log("Bookmark added successfully");
    }
    catch (error) {
        console.error("Bookmark not added successfully");
    }

    await expect(clickOkSave).toBeVisible();
    await clickOkSave.click();

    await page.waitForTimeout(2000);

    await BookMarkClick.click();

    await expect(MoreInfoBookmark).toBeVisible();
    await MoreInfoBookmark.click();

    await expect(markasdefaultBookmark).toBeVisible();
    await markasdefaultBookmark.click();

    await expect(ValidateDefaultMadeTextBookmark).toBeVisible();
    const ValidateDefaultText = await ValidateDefaultMadeTextBookmark.textContent();
    try{
        expect(ValidateDefaultText).toContain("Bookmark Marked as default");
        console.log("Bookmark marked as default successfully");
    }
    catch (error) {
        console.error("Bookmark not marked as default successfully");
    }

    await clickOkSave.click();

    await page.waitForTimeout(2000);
    await BookMarkClick.click();
    await MoreInfoBookmark.click();

    await expect(RenameBookmark).toBeVisible();
    await RenameBookmark.click();

    await SaveBookmark.click();

    const BookmarkUpdatedText = page.locator("//h6[normalize-space()='Bookmark Updated Successfully']");
    await expect(BookmarkUpdatedText).toBeVisible();
    const BookmarkUpdatedTextContent = await BookmarkUpdatedText.textContent();
    try{
        expect(BookmarkUpdatedTextContent).toContain("Bookmark Updated Successfully");
        console.log("Bookmark updated successfully");
    }
    catch (error) {
        console.error("Bookmark not updated successfully");
    }

    await clickOkSave.click();

    await BookMarkClick.click();
    await MoreInfoBookmark.click();

    const DeleteBookamark = page.locator("//span[normalize-space()='Delete']");
    await expect(DeleteBookamark).toBeVisible();
    await DeleteBookamark.click();

    const DeleteBookmarkText = page.locator("//h6[normalize-space()='Bookmark Deleted Successfully']");
    await expect(DeleteBookmarkText).toBeVisible();
    const DeleteBookmarkTextContent = await DeleteBookmarkText.textContent();
    try{
        expect(DeleteBookmarkTextContent).toContain("Bookmark Deleted Successfully");
        console.log("Bookmark deleted successfully");
    }
    catch (error) {
        console.error("Bookmark not deleted successfully");
    }

    await clickOkSave.click();
    
});