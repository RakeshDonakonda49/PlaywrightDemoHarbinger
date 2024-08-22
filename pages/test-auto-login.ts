import { orLogin } from "./pagesOR/test-auto-login.or"
import {expect} from '@playwright/test'
import { loggedInSuccesfully, loggedInUrl, logout } from "./consts/auto-login-consts"


export class AutoLogin {

    constructor(private page) {
        this.page = page
        }
        
        /**
         * @details - To visit the Auto Login URL
         */
   async visitAutoLoginPage(){
 await this.page.goto('https://practicetestautomation.com/practice-test-login/')
    }

    /**
     * @details - To document login details and click login button
     * @param details - details to be documented should be passed
     * @author - Rakesh
     */
 async documentLoginDetails(details : ILoginDetails) {
    await this.page.locator(orLogin.username).fill(details.username)
    await this.page.locator(orLogin.password).fill(details.password)
    await this.page.locator(orLogin.submit).click()
}

/**
 * @details - To verify the Login URI and title after logining in
 * @author - Rakesh
 */
async verifyUrlAndLogout() {
    await expect(this.page).toHaveTitle(loggedInSuccesfully)
    await expect(this.page).toHaveURL(loggedInUrl)
    await expect(this.page.getByText(logout)).toBeVisible()
    await this.page.getByText(logout).click()
}

/**
 * @details - To verify the error message when username or password is worng
 * @param message - message to be verified to be verified should be passed
 */
async verifyErrorMessage(message : string) {
    await expect(this.page.locator(orLogin.eroor)).toHaveText(message)
}

}