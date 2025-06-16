import { test, expect } from '@playwright/test';
import { features } from 'process';


test('get started link', async ({ page }) => {

    await page.goto('https://wiseqasolutionzone.cognizant.com/solution/home');
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
    await page.waitForTimeout(30000);

    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });

    const ValidateAdminConsole=page.locator("//button[@id='dropdownMenuButton7']");
    await expect(ValidateAdminConsole).toBeVisible();
    await ValidateAdminConsole.click();

    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });

    const Validate_EscalationMatrix=page.locator("//span[normalize-space()='Escalation Matrix']");
    await expect(Validate_EscalationMatrix).toBeVisible();
    try{
        const validateEscalatoinMatrix1 = await Validate_EscalationMatrix.textContent();   
        expect(validateEscalatoinMatrix1).toBe('Escalation Matrix');
        console.log("Escalation Matrix is present");
        }catch (error) 
    {
        console.error("Escalation Matrix is not present");
    }

    await Validate_EscalationMatrix.click();

    const Breadcrumb_Home=page.locator("//a[normalize-space()='Home']");
    try {
        const breadcrumbText = await Breadcrumb_Home.textContent();
        expect(breadcrumbText).toBe('Home');
        console.log("Breadcrumb Home is present");
    } catch (error) {
        console.error("Breadcrumb Home is not present");
    }

    const Breadcrumb_AdminConsle=page.locator("//a[normalize-space()='Admin Console']");
    try {
        const breadcrumbText = await Breadcrumb_AdminConsle.textContent();
        expect(breadcrumbText).toBe('Admin Console');
        console.log("Breadcrumb Admin Console is present");
    } catch (error) {
        console.error("Breadcrumb Admin Console is not present");
    }

    const Breadcrumb_EscalationMatrix=page.locator("//a[normalize-space()='Escalation Matrix']");
    try {
        const breadcrumbText = await Breadcrumb_EscalationMatrix.textContent();
        expect(breadcrumbText).toBe('Escalation Matrix');
        console.log("Breadcrumb Escalation Matrix is present");
    } catch (error) {
        console.error("Breadcrumb Escalation Matrix is not present");
    }
    

    //Sorting
    const SortEscalatoinName=page.locator("//th[normalize-space()='Escalation Name']");
    await expect(SortEscalatoinName).toBeVisible();
    await SortEscalatoinName.click();
    await page.waitForTimeout(1200);
    await SortEscalatoinName.click();
    await page.waitForTimeout(1200);

    const SortCreatedBy=page.locator("//th[normalize-space()='Created By']");
    await expect(SortCreatedBy).toBeVisible();
    await SortCreatedBy.click();
    await page.waitForTimeout(1200);
    await SortCreatedBy.click();
    await page.waitForTimeout(1200);

    const SortCreatedOn=page.locator("//th[normalize-space()='Created On']");
    await expect(SortCreatedOn).toBeVisible();
    await SortCreatedOn.click();
    await page.waitForTimeout(1200);
    await SortCreatedOn.click();
    await page.waitForTimeout(1200);

    const SortAppliedCount=page.locator("//th[normalize-space()='Applied Count']");
    await expect(SortAppliedCount).toBeVisible();
    await SortAppliedCount.click();
    await page.waitForTimeout(1200);
    await SortAppliedCount.click();
    await page.waitForTimeout(1200);

    const SortStatus=page.locator("//th[normalize-space()='Status']");
    await expect(SortStatus).toBeVisible();
    await SortStatus.click();
    await page.waitForTimeout(1200);
    await SortStatus.click();
    await page.waitForTimeout(1200);

    const SearchEscalationName = page.locator("//th[1]//span[1]//input[1]");
    await expect(SearchEscalationName).toBeVisible();
    await SearchEscalationName.fill('testing microui');
    await page.waitForTimeout(1200);
    await SearchEscalationName.fill('');
    await page.waitForTimeout(1200);
    await SearchEscalationName.fill('No Name');
    await page.waitForTimeout(1200);
    await SearchEscalationName.fill('');
    await page.waitForTimeout(1200);

    const SearchCreatedBy=page.locator("//th[2]//span[1]//input[1]");
    await expect(SearchCreatedBy).toBeVisible();
    await SearchCreatedBy.fill('Sharmila');
    await page.waitForTimeout(1200);
    await SearchCreatedBy.fill('');
    await page.waitForTimeout(1200);
    await SearchCreatedBy.fill('No Name');
    await page.waitForTimeout(1200);
    await SearchCreatedBy.fill('');
    await page.waitForTimeout(1200);

    const SearchCreatedyOn=page.locator("//th[3]//span[1]//input[1]");
    await expect(SearchCreatedyOn).toBeVisible();
    await SearchCreatedyOn.fill('16');
    await page.waitForTimeout(1200);
    await SearchCreatedyOn.fill('');
    await page.waitForTimeout(1200);
    await SearchCreatedyOn.fill('2025');
    await page.waitForTimeout(1200);
    await SearchCreatedyOn.fill('');
    await page.waitForTimeout(1200);

    const SearchAppliedCount=page.locator("//th[4]//span[1]//input[1]");
    await expect(SearchAppliedCount).toBeVisible();
    await SearchAppliedCount.fill('32');
    await page.waitForTimeout(1200);
    await SearchAppliedCount.fill('');
    await page.waitForTimeout(1200);
    await SearchAppliedCount.fill('1000');
    await page.waitForTimeout(1200);
    await SearchAppliedCount.fill('');
    await page.waitForTimeout(1200);

    const SearchStatus=page.locator("//th[5]//span[1]//input[1]");
    await expect(SearchStatus).toBeVisible();
    await SearchStatus.fill('Active');
    await page.waitForTimeout(1200);
    await SearchStatus.fill('');
    await page.waitForTimeout(1200);
    await SearchStatus.fill('Inactive');
    await page.waitForTimeout(1200);
    await SearchStatus.fill('');
    await page.waitForTimeout(1200);

    const AddNewEscalation=page.locator("//button[normalize-space()='Add']");
    await expect(AddNewEscalation).toBeVisible();
    await AddNewEscalation.click();

    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });

    const ClickSaveButton = page.locator("//button[normalize-space()='Save']");
    await expect(ClickSaveButton).toBeVisible();
    await ClickSaveButton.click();
    await page.waitForTimeout(1200);

    await page.evaluate(() => {
        window.scrollTo(0, 0);
    });

    const MandidatedEscalationMsg=page.locator("//div[contains(text(),'Escalation Name required')]");
    await expect(MandidatedEscalationMsg).toBeVisible();
    try{
        const MandEscalationMsgText = await MandidatedEscalationMsg.textContent();
        expect(MandEscalationMsgText).toBe(' Escalation Name required ');
        console.log("Mandatory Escalation Name message is present");
    }
    catch (error) {
        console.error("Mandatory Escalation Name message is not present");
    }

    const MandidatedStatusRequiredMsg=page.locator("//div[contains(text(),'Status Required')]");
    await expect(MandidatedStatusRequiredMsg).toBeVisible();
    try{
        const MandStatusMsgText = await MandidatedStatusRequiredMsg.textContent();
        expect(MandStatusMsgText).toBe(' Status Required ');
        console.log("Status Required Text is present");
    }
    catch (error) {
        console.error("Status Required Text is not present");
    }

    const EscalationdetailsRequiredMsg=page.locator("//div[contains(text(),'Escalation details required')]");
    await expect(EscalationdetailsRequiredMsg).toBeVisible();
    try{
        const EscalationDetailsMsgText = await EscalationdetailsRequiredMsg.textContent();
        expect(EscalationDetailsMsgText).toBe(' Escalation details required ');
        console.log("Escalation details required message is present");
    }
    catch (error) {
        console.error("Escalation details required message is not present");
    }

    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });

    const ManditatoryWhenText = page.locator("//span[normalize-space()='Overdue Required']");
    await expect(ManditatoryWhenText).toBeVisible();
    try {
        const whenText = await ManditatoryWhenText.textContent();
        expect(whenText).toBe(' Overdue Required ');
        console.log("Overdue Required text is present");
    } catch (error) {
        console.error("Overdue Required text is not present");
    }

    const mandidatedFrequencytext = page.locator("//span[normalize-space()='Frequency Required']");
    await expect(mandidatedFrequencytext).toBeVisible();
    try {
        const frequencyText = await mandidatedFrequencytext.textContent();
        expect(frequencyText).toBe(' Frequency Required ');
        console.log("Frequency Required text is present");
    } catch (error) {
        console.error("Frequency Required text is not present");
    }

    const MandidatedmailSubjectText = page.locator("//span[normalize-space()='Mail Subject Required']");
    await expect(MandidatedmailSubjectText).toBeVisible();
    try {
        const mailSubjectText = await MandidatedmailSubjectText.textContent();
        expect(mailSubjectText).toBe(' Mail Subject Required ');
        console.log("Mail Subject Required text is present");
    } catch (error) {
        console.error("Mail Subject Required text is not present");
    }

    const MandidatedComposeMailText = page.locator("//span[normalize-space()='Compose Mail Required']");
    await expect(MandidatedComposeMailText).toBeVisible();
    try {
        const composeMailText = await MandidatedComposeMailText.textContent();
        expect(composeMailText).toBe(' Compose Mail Required ');
        console.log("Compose Mail Required text is present");
    } catch (error) {
        console.error("Compose Mail Required text is not present");
    }

    await page.evaluate(() => {
        window.scrollTo(0, 0);
    });

    const EscalationNameFill= page.locator("//input[@placeholder='Enter Escalation Name']");
    await expect(EscalationNameFill).toBeVisible();
    await EscalationNameFill.fill('Testing Escalation Matrix');
    await page.waitForTimeout(1200);

    const SelectStatusClick = page.locator("//div/div[2]/div[1]/div/p-dropdown/div/span");
    await expect(SelectStatusClick).toBeVisible();
    await SelectStatusClick.click();

    const ClickActive = page.locator("//span[normalize-space()='Active']");
    await expect(ClickActive).toBeVisible();
    await ClickActive.click();
    await page.waitForTimeout(1200);

    const EscalationMatrixDetailsFill = page.locator("//textarea[@name='remarks']");
    await expect(EscalationMatrixDetailsFill).toBeVisible();
    await EscalationMatrixDetailsFill.fill('Testing Escalation Matrix Details');
    await page.waitForTimeout(1200);

    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });

    const FillWhen = page.locator("//input[@name='CountDaysL1']");
    await expect(FillWhen).toBeVisible();
    await FillWhen.fill('3');
    await page.waitForTimeout(1200);

    const clickFrequency = page.locator("//table/tbody/tr[1]/td[5]/p-dropdown/div/span");
    await expect(clickFrequency).toBeVisible();
    await clickFrequency.click();

    const ClickAlternativeDays = page.locator("//span[normalize-space()='Alternate Days']");
    await expect(ClickAlternativeDays).toBeVisible();
    await ClickAlternativeDays.click();

    const FillMailSubject = page.locator("//input[@placeholder='Subject']");
    await expect(FillMailSubject).toBeVisible();
    await FillMailSubject.fill('Testing Escalation Matrix Mail Subject');
    await page.waitForTimeout(1200);

    const FillComposeMail = page.locator("//input[@placeholder='Compose here']");
    await expect(FillComposeMail).toBeVisible();
    await FillComposeMail.fill('Testing Escalation Matrix Compose Mail');
    await page.waitForTimeout(1200);

    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });

    const ClickSave = page.locator("//button[normalize-space()='Save']");
    await expect(ClickSave).toBeVisible();
    await ClickSave.click();

    const SaveTextValidate = page.locator("//h6[normalize-space()='Data Saved sucessfully']");
    await expect(SaveTextValidate).toBeVisible();
    try {
        const saveText = await SaveTextValidate.textContent();
        expect(saveText).toBe('Data Saved sucessfully');
        console.log("Data Saved successfully message is present");
    } catch (error) {
        console.error("Data Saved successfully message is not present");
    }

    const ClickOk = page.locator("//button[normalize-space()='OK']");
    await expect(ClickOk).toBeVisible();
    await ClickOk.click();
    await page.waitForTimeout(1200);

    await expect(SearchEscalationName).toBeVisible();
    await SearchEscalationName.fill('Testing Escalation Matrix');
    await page.waitForTimeout(1200);

    const clicksearchedvalue = page.locator("//td[@class='ChangeBorder']");
    await expect(clicksearchedvalue).toBeVisible();
    await clicksearchedvalue.click();

    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });

    await expect(FillWhen).toBeVisible();
    await FillWhen.fill('4');

    await expect(clickFrequency).toBeVisible();
    await clickFrequency.click();

    await expect(ClickAlternativeDays).toBeVisible();
    await ClickAlternativeDays.click();

    await expect(FillMailSubject).toBeVisible();
    await FillMailSubject.fill('Testing Escalation Matrix Mail Subject 123');
    await page.waitForTimeout(1200);

    await expect(FillComposeMail).toBeVisible();
    await FillComposeMail.fill('Testing Escalation Matrix Compose Mail 1234');
    await page.waitForTimeout(1200);

    await ClickSave.click();

    await expect(SaveTextValidate).toBeVisible();
    try {
        const saveText = await SaveTextValidate.textContent();
        expect(saveText).toBe('Data Updated sucessfully');
        console.log("Data Updated successfully message is present");
    } catch (error) {
        console.error("Data Updated successfully message is not present");
    }

    await ClickOk.click();
    await page.waitForTimeout(1200);

    await SearchEscalationName.fill('Testing Escalation Matrix');
    await page.waitForTimeout(1200);

    const ClickDelete = page.locator("//img[@src='../../../../../assets/solution/delete_main.png']");
    await expect(ClickDelete).toBeVisible();
    await ClickDelete.click();

    const deletetext = page.locator("//h6[normalize-space()='Are you sure you want to delete it?']");
    await expect(deletetext).toBeVisible();
    try {
        const deleteTextContent = await deletetext.textContent();
        expect(deleteTextContent).toBe('Are you sure you want to delete it?');
        console.log("Delete confirmation text is present");
    } catch (error) {
        console.error("Delete confirmation text is not present");
    }

    const ClickDeleteYes = page.locator("//button[normalize-space()='Yes']");
    await expect(ClickDeleteYes).toBeVisible();
    await ClickDeleteYes.click();
    await page.waitForTimeout(1200);

    const DeleteTextValidate = page.locator("//h6[normalize-space()='Data deleted Successfully']");
    await expect(DeleteTextValidate).toBeVisible();
    try {
        const deleteText = await DeleteTextValidate.textContent();
        expect(deleteText).toBe('Data Deleted successfully');
        console.log("Data Deleted successfully message is present");
    } catch (error) {
        console.error("Data Deleted successfully message is not present");
    }

    const DeleteOk = page.locator("//button[normalize-space()='OK']");
    await expect(DeleteOk).toBeVisible();
    await DeleteOk.click();
    await page.waitForTimeout(1200);

});