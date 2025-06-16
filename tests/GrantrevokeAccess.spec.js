import { test, expect } from '@playwright/test';
import { features } from 'process';


test('get started link', async ({ page }) => {

    await page.goto('https://wiseqa.cognizant.com/solution/home');
    await page.click('text=Sign in');
    await page.fill('input[type="email"]', '2323698@cognizant.com');
    const next1 = '//div/div[4]/div/div/div/div/input';
    await page.click(`xpath=${next1}`);
    await page.fill('input[name="passwd"]', 'Nagalakshmi@30092000');
    const signin ='//div/div[2]/div/div[5]/div/div/div/div/input';
    await page.click(`xpath=${signin}`);
    const authclick ='//div/div[2]/div/div[6]/div[1]/div[2]/div/div/div[1]/a';
    await page.click(`xpath=${authclick}`);
    const clickcode ='//div/div[2]/div/div[2]/div/div[1]/div/div/div[2]/div';
    await page.click(`xpath=${clickcode}`);
    const checkbox1 ='//div[3]/div/div[2]/div/div[3]/div[1]/div/label/input';
    await page.click(`xpath=${checkbox1}`);
    const loginclick ='//div/div[2]/div/div[3]/div[2]/div/div/div[2]/input';
    await page.click(`xpath=${loginclick}`);

    await expect(page).toHaveTitle(/WiSE/);
    await page.waitForTimeout(30000);

    // const clickpursuit="//div[@class='solzone active']";
    // await page.click(`xpath=${clickpursuit}`);

    // await page.waitForTimeout(5000);
    //await page.waitForTimeout(90000);
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });

    const AdminConsoleText = "//span[normalize-space()='Admin Console']";
    try{
        const AdminConsoleText1 = await page.textContent(`xpath=${AdminConsoleText}`);
        const expectedAdminconsoleText = 'Admin Console';
        expect(AdminConsoleText1).toBe(expectedAdminconsoleText);
        console.log("Main Tab Text is Admin Console");
        }catch (error) {
            console.error("Main Tab Text is different");
        }
    
    const admindropdown ="//button[@id='dropdownMenuButton7']";
    await page.click(`xpath=${admindropdown}`);

    const GrantRevokeaccessText="//span[normalize-space()='Grant/Revoke Access']";
    try{
        const GrantRevokeaccessText1 = await page.textContent(`xpath=${GrantRevokeaccessText}`);
        const expectedGrantRevokeAccessText = 'Grant/Revoke Access';
        expect(GrantRevokeaccessText1).toBe(expectedGrantRevokeAccessText);
        console.log("Sub Tab Text is Grant/Revoke Access");
        }catch (error) {
            console.error("Sub Tab Text is different");
        }

    // Click on Grant/Revoke Access
    await page.click(`xpath=${GrantRevokeaccessText}`);

    const BreadcrumbHome="//a[normalize-space()='Home']";
    try{
        const BreadcrumbHome1 = await page.textContent(`xpath=${BreadcrumbHome}`);
        const expectedBreadcrumbText = ' Home ';
        expect(BreadcrumbHome1).toBe(expectedBreadcrumbText);
        console.log("Breadcrumb Text is Home");
        }catch (error) {
            console.error("Breadcrumb Text is different");
        }

    const BreadcrumbAdminConsole="//a[normalize-space()='Admin Console']";
    try{
        const BreadcrumbAdminConsole1 = await page.textContent(`xpath=${BreadcrumbAdminConsole}`);
        const expectedBreadcrumbText = ' Admin Console ';
        expect(BreadcrumbAdminConsole1).toBe(expectedBreadcrumbText);
        console.log("Breadcrumb Text is Admin Console");
        }catch (error) {
            console.error("Breadcrumb Text is different");
        }

    const BreadcrumbGrantRevokeAccess="//a[normalize-space()='Group Maintenance']";
    try{
        const BreadcrumbGrantRevokeAccess1 = await page.textContent(`xpath=${BreadcrumbGrantRevokeAccess}`);
        const expectedBreadcrumbText = ' Group Maintenance ';
        expect(BreadcrumbGrantRevokeAccess1).toBe(expectedBreadcrumbText);
        console.log("Breadcrumb Text is  Group Maintenance ");
        }catch (error) {
            console.error("Breadcrumb Text is different");
        }

    const GroupIDSort="//th[normalize-space()='Group ID']";
    await page.click(`xpath=${GroupIDSort}`);
    await page.waitForTimeout(2000);
    await page.click(`xpath=${GroupIDSort}`);
    await page.waitForTimeout(2000);

    const GroupNameSort="//th[normalize-space()='Group Name']";
    await page.click(`xpath=${GroupNameSort}`);
    await page.waitForTimeout(2000);
    await page.click(`xpath=${GroupNameSort}`);
    await page.waitForTimeout(2000);

    const FeatureListSort="//th[normalize-space()='Feature List']";
    await page.click(`xpath=${FeatureListSort}`);
    await page.waitForTimeout(2000);
    await page.click(`xpath=${FeatureListSort}`);
    await page.waitForTimeout(2000);

    const GSARoleSort="//th[normalize-space()='GSA Role']";
    await page.click(`xpath=${GSARoleSort}`);
    await page.waitForTimeout(2000);
    await page.click(`xpath=${GSARoleSort}`);
    await page.waitForTimeout(2000);

    const GroupIDSearch="//tr[2]/th[1]/span/input";
    await page.fill(`xpath=${GroupIDSearch}`, '1');
    await page.waitForTimeout(2000);
    await page.fill(`xpath=${GroupIDSearch}`, '');
    await page.waitForTimeout(2000);

    await page.fill(`xpath=${GroupIDSearch}`, '153');
    await page.waitForTimeout(2000);
    await page.fill(`xpath=${GroupIDSearch}`, '');
    await page.waitForTimeout(2000);

    const GroupNameSearch="//tr[2]/th[2]/span/input";
    await page.fill(`xpath=${GroupNameSearch}`, 'user connect');
    await page.waitForTimeout(2000);
    await page.fill(`xpath=${GroupNameSearch}`, '');
    await page.waitForTimeout(2000);

    await page.fill(`xpath=${GroupNameSearch}`, 'BD Analyst Access');
    await page.waitForTimeout(2000);
    await page.fill(`xpath=${GroupNameSearch}`, '');
    await page.waitForTimeout(2000);

    const FeatureListSearch="//tr[2]/th[3]/span/input";
    await page.fill(`xpath=${FeatureListSearch}`, 'BID Management - Deals');
    await page.waitForTimeout(2000);
    await page.fill(`xpath=${FeatureListSearch}`, '');
    await page.waitForTimeout(2000);

    await page.fill(`xpath=${FeatureListSearch}`, 'SL Tagging');
    await page.waitForTimeout(2000);
    await page.fill(`xpath=${FeatureListSearch}`, '');
    await page.waitForTimeout(2000);
    
    const GSARoleSearch="//tr[2]/th[4]/span/input";
    await page.fill(`xpath=${GSARoleSearch}`, 'SL BD Tower Lead');
    await page.waitForTimeout(2000);
    await page.fill(`xpath=${GSARoleSearch}`, '');
    await page.waitForTimeout(2000);

    await page.fill(`xpath=${GSARoleSearch}`, 'WiSE Admin Team');
    await page.waitForTimeout(2000);
    await page.fill(`xpath=${GSARoleSearch}`, '');
    await page.waitForTimeout(2000);

    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });
    
    const AddGroupButton="//button[@class='addbtn pointer']";
    await page.click(`xpath=${AddGroupButton}`);

    await page.waitForTimeout(2000);

    const SubmitButton="//button[@class='savebtn'][normalize-space()='Submit']";
    await page.click(`xpath=${SubmitButton}`);

    const ManditoryFieldTextAccessGrp="//div[contains(text(),'Access Group Name is required')]";
    try{
        const ManditoryFieldTextAccessGrp1 = await page.textContent(`xpath=${ManditoryFieldTextAccessGrp}`);
        const expectedManditoryFieldText = 'Access Group Name is required';
        expect(ManditoryFieldTextAccessGrp1).toBe(expectedManditoryFieldText);
        console.log("Error Message is Access Group Name is required");
        }catch (error) {
            console.error("Manditory Message is different or Not displayed");
        }

    const ManditoryFieldTextGSARole="//div[contains(text(),'GSA Role is required')]";
    try{
        const ManditoryFieldTextGSARole1 = await page.textContent(`xpath=${ManditoryFieldTextGSARole}`);
        const expectedManditoryFieldText = ' GSA Role is required';
        expect(ManditoryFieldTextGSARole1).toBe(expectedManditoryFieldText);
        console.log("Error Message is GSA Role is required");
        }catch (error) {
            console.error("Manditory Message is different or Not displayed");
        }

    const ManditoryFieldTextFeatureList="//div[contains(text(),'Feature List is required')]";
    try{
        const ManditoryFieldTextFeatureList1 = await page.textContent(`xpath=${ManditoryFieldTextFeatureList}`);
        const expectedManditoryFieldText = 'Feature List is required';
        expect(ManditoryFieldTextFeatureList1).toBe(expectedManditoryFieldText);
        console.log("Error Message is Feature List is required");
        }catch (error) {
            console.error("Manditory Message is different or Not displayed");
        }
    
    const clickCancel="//button[normalize-space()='Cancel']";
    await page.click(`xpath=${clickCancel}`);

    await page.click(`xpath=${AddGroupButton}`);

    const accessGroupNameInput = page.locator("//app-add-group/form/div[1]/div[2]/div/input");
    await accessGroupNameInput.click();
    await accessGroupNameInput.fill('Validation For Test WiSE');
    
    //To select the GSA Role
    const GSARoleCheckBox="//div[@class='p-element p-multiselect-label-container']";
    await page.click(`xpath=${GSARoleCheckBox}`);

    //Validation for Checkbox
    const SelectallCheckBox="//div[@aria-label='All items unselected']";
    await page.click(`xpath=${SelectallCheckBox}`);
    await page.waitForTimeout(2000);
    await page.click(`xpath=${SelectallCheckBox}`);
    await page.waitForTimeout(2000);

    //To search the elements in the GSA Role
    const ClickSearchbarGSA="//input[@role='searchbox']";
    await page.fill(`xpath=${ClickSearchbarGSA}`, 'SL BD Tower Lead');
    const ClickCheckboxRole1="//div[@class='p-checkbox p-component']//div[@class='p-checkbox-box']";
    await page.click(`xpath=${ClickCheckboxRole1}`);
    await page.fill(`xpath=${ClickSearchbarGSA}`, '');
    await page.waitForTimeout(2000);
    await page.fill(`xpath=${ClickSearchbarGSA}`, 'SS Team');
    const ClickCheckboxRole2="//div[@class='p-checkbox p-component']//div[@class='p-checkbox-box']";
    await page.click(`xpath=${ClickCheckboxRole2}`);
    await page.fill(`xpath=${ClickSearchbarGSA}`, '');
    await page.waitForTimeout(2000);
    await page.click(`xpath=${GSARoleCheckBox}`);  //To Close GSA CheckBox

    const featurelistclick="//button[normalize-space()='Select options']";
    await page.click(`xpath=${featurelistclick}`);

    const SelectDemandsector="//div[2]/div/ngx-treeview-item[1]/div/div[1]/div/input";
    await page.click(`xpath=${SelectDemandsector}`);
    await page.click(`xpath=${featurelistclick}`);
    await page.click(`xpath=${SubmitButton}`);

    const Accessgrouppopup="//h2[@id='swal2-title']";
    const Savedpopup="//div[@id='swal2-html-container']";

    try{
        const Accessgrouppopup1 = await page.textContent(`xpath=${Accessgrouppopup}`);
        const expectedpopupText = 'Access Group';
        expect(Accessgrouppopup1).toBe(expectedpopupText);
        console.log("Access Group");
        }catch (error) {
            console.error("Popup Text is different");
        }

    try{
        const Savedpopup1 = await page.textContent(`xpath=${Savedpopup}`);
        const expectedpopupText = 'Added Successfully';
        expect(Savedpopup1).toBe(expectedpopupText);
        console.log("Added Successfully");
        }catch (error) {
            console.error("Popup Text is different");
        }

    const closepopup="//button[normalize-space()='OK']";
    await page.click(`xpath=${closepopup}`);

    await page.fill(`xpath=${GroupNameSearch}`, 'Validation For Test WiSE');

    const clickEdit="//tbody//a[1]//img[1]";
    await page.click(`xpath=${clickEdit}`);

    const canceledit="//button[normalize-space()='Cancel']";
    await page.click(`xpath=${canceledit}`);
   // await page.click(`xpath=${clickEdit}`);
    
    const deletegroupid="//tbody//a[2]//img[1]";
    await page.click(`xpath=${deletegroupid}`);

   const deletetext="//h6[normalize-space()='You want to delete the Access Group']";
   try{
    const deletetext1 = await page.textContent(`xpath=${deletetext}`);
    const expectedpopupText = 'You want to delete the Access Group';
    expect(deletetext1).toBe(expectedpopupText);
    console.log("You want to delete the Access Group");
    }catch (error) {
        console.error("Popup Text is different");
    }

    const deleteYes="//button[normalize-space()='Yes']";
    await page.click(`xpath=${deleteYes}`);
    
});