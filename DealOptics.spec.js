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
    
    await page.waitForTimeout(1000);

    await MultiSelect.click();

    const AllItemsSelect = page.locator("//div[@aria-label='All items selected']//checkicon[@class='p-element p-icon-wrapper ng-star-inserted']//*[name()='svg']");
    const AccountNameClick = page.locator("//span[normalize-space()='Account Name']");

    const isSelected = await AllItemsSelect.evaluate(el => el.classList.contains('selected'));
    console.log("Is AllItemsSelect selected:", isSelected);

    //const isActive = await AllItemsSelect.evaluate(el => document.activeElement === el);

    if (isSelected) {
        console.log("The MultiSelect object is active.");
    } else {
        console.error("The MultiSelect object is not active.");
    }

    const CloseMultiSelect = page.locator("//button[@class='p-ripple p-element p-multiselect-close p-link p-button-icon-only ng-star-inserted']");
    await expect(CloseMultiSelect).toBeVisible();
    await CloseMultiSelect.click();

    const MyRadar = page.locator("//div[1]/div[2]/div/div/span[2]");
    await expect(MyRadar).toBeVisible();
    await MyRadar.hover();
    await page.waitForTimeout(1200);

    const MyDeals = page.locator("//div[1]/div[2]/div/div/span[3]");
    await expect(MyDeals).toBeVisible();
    await MyDeals.hover();
    await page.waitForTimeout(1200);

    const DealsWithUPTData = page.locator("//div[1]/div[2]/div/div/span[4]");
    await expect(DealsWithUPTData).toBeVisible();
    await DealsWithUPTData.hover();
    await page.waitForTimeout(1200);

    const DealsWithOutUPTData = page.locator("//div[1]/div[2]/div/div/span[5]");
    await expect(DealsWithOutUPTData).toBeVisible();
    await DealsWithOutUPTData.hover();
    await page.waitForTimeout(1200);

    const DealsReadyForReview = page.locator("//div[1]/div[2]/div/div/span[6]");
    await expect(DealsReadyForReview).toBeVisible();
    await DealsReadyForReview.hover();
    await page.waitForTimeout(1200);

    const TotalDeals = page.locator("//div[1]/div[2]/div/div/span[7]");
    await expect(TotalDeals).toBeVisible();
    await TotalDeals.hover();
    await page.waitForTimeout(1200);

    const AdvanceSearch = page.locator("//span[@class='Deals count_deals']");
    await expect(AdvanceSearch).toBeVisible();
    await AdvanceSearch.click();

    const ApplyButton = page.locator("//button[normalize-space()='Apply']");
    await expect(ApplyButton).toBeVisible();
    await ApplyButton.hover();
    await page.waitForTimeout(1200);

    const ClearButton = page.locator("//button[normalize-space()='Clear']");
    await expect(ClearButton).toBeVisible();
    await ClearButton.hover();
    await page.waitForTimeout(1200);

    const SelectFilterColumn = page.locator("//span[@aria-label='Select Filter Column']");
    await expect(SelectFilterColumn).toBeVisible();
    await SelectFilterColumn.click();

    const SearchBarForFilter = page.locator("//input[@role='searchbox']");
    await expect(SearchBarForFilter).toBeVisible();
    await SearchBarForFilter.fill('Winzone');
    await page.waitForTimeout(700);
    
    const ClickWinzoneID = page.locator("//span[normalize-space()='Winzone ID']");
    await expect(ClickWinzoneID).toBeVisible();
    await ClickWinzoneID.click();

    const SelectCondition = page.locator("//span[@aria-label='Select Condition']");
    await expect(SelectCondition).toBeVisible();
    await SelectCondition.click();

    const SearchCondition = page.locator("//input[@role='searchbox']");
    await expect(SearchCondition).toBeVisible();
    await SearchCondition.fill('Contains');
    await page.waitForTimeout(700);

    const ClickContains = page.locator("//span[normalize-space()='Contains']");
    await expect(ClickContains).toBeVisible();
    await ClickContains.click();

    const EnterValue = page.locator("//input[@placeholder='Enter value']");
    await expect(EnterValue).toBeVisible();
    await EnterValue.fill('2222280');
    await page.waitForTimeout(700);

    const AddFilterButton = page.locator("//div/div[2]/img");
    await expect(AddFilterButton).toBeVisible();
    await AddFilterButton.click();
    await page.waitForTimeout(700);

    await ApplyButton.click();
    await page.waitForTimeout(700);

    const ValidateSearchedResult = page.locator("//tbody/tr[1]/td[3]");
    try {
        await expect(ValidateSearchedResult).toContainText(EnterValue);
        console.log("WinzoneID is Same as Entered Value");
    }
    catch (error) {
        console.error("WinzoneID is not Same as Entered Value");
    }

    const CheckboxDeal = page.locator("//tr[1]/td[1]/span/mat-checkbox/div/div/input");
    await expect(CheckboxDeal).toBeVisible();
    await CheckboxDeal.click();
    await page.waitForTimeout(2000);
    await CheckboxDeal.click();
    await page.waitForTimeout(2000);

    const AddDealFavourite = page.locator("//tbody/tr[1]/td[1]/span[1]/img[2]");
    await expect(AddDealFavourite).toBeVisible();
    await AddDealFavourite.click();

    await page.waitForTimeout(2000);

    const isActive1 = await AddDealFavourite.evaluate(el => document.activeElement === el);

    if (isActive1) {
        console.log("Deal is added to Favourites.");
    } else {
        console.error("Deal is added to Favourites but not visible.");
    }

    const remarksDeal = page.locator("//tr[1]/td[1]/span[1]/a[1]/img[1]");
    await expect(remarksDeal).toBeVisible();
    await remarksDeal.click();

    const SaveRemarks = page.locator("//button[@class='savebtn float-end']")
    await expect(SaveRemarks).toBeVisible();
    await SaveRemarks.click();

    const MandidatedRemarksText = page.locator("//div[@class='text-danger-custom']");
    await expect(MandidatedRemarksText).toBeVisible();
    const MandidatedRemarksTextContent = await MandidatedRemarksText.textContent();
    try {
        expect(MandidatedRemarksTextContent).toContain("Remarks is mandatory");
        console.log("Mandidated Remarks Text is visible");
    }
    catch (error) {
        console.error("Mandidated Remarks Text is not visible");
    }

    const FillRemarks = page.locator("//textarea[@name='remarks']");
    await expect(FillRemarks).toBeVisible();
    await FillRemarks.fill('This is a test remark for the deal optics test case.');
    
    await SaveRemarks.click();

    const SavedRemarksText = page.locator("//h6[normalize-space()='Data Updated Successfully']");
    await expect(SavedRemarksText).toBeVisible();
    const SavedRemarksTextContent = await SavedRemarksText.textContent();
    try {
        expect(SavedRemarksTextContent).toContain("Data Updated Successfully");
        console.log("Deal Remarks saved successfully");
    }
    catch (error) {
        console.error("Deal Remarks not saved successfully");
    }

    await clickOkSave.click();

    const ClickWinzoneID1 = page.locator("//tbody/tr[1]/td[2]");
    await expect(ClickWinzoneID1).toBeVisible();
    await ClickWinzoneID1.click();

    await page.waitForTimeout(2000);

    const SummaryViewPage = page.locator("//a[@aria-current='page'][normalize-space()='Summary View']");
    await expect(SummaryViewPage).toBeVisible();

    const isActive2 = await SummaryViewPage.evaluate(el => document.activeElement === el);

    if (isActive2) {
        console.log("Deal is navigated to Summary View Page.");
    } else {
        console.error("Deal is not navigated to Summary View Page but visible.");
    }

    const AccountName1 = page.locator("//div/div[1]/table/tr[1]/td[2]");
    await expect(AccountName1).toBeVisible();

});