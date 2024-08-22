import { AutoLogin } from "../../../pages/test-auto-login";
import test from '@playwright/test'
import { loginPostiveDetails, wrongPassword, wrongUsername } from "../../../test-data/auto-login/test-auto-login.td";
import { passwordError, usernameError } from "../../../pages/consts/auto-login-consts";

export class TestAutoLoginSC {

    verifyPositiveFlow() {
        test('Login positive flow', async({page})=> {
            const login = new AutoLogin(page)
           await login.documentLoginDetails(loginPostiveDetails)
           await login.verifyUrlAndLogout()
        })
    }

    verifyUsernameNegitiveFlow() {
        test('Username verification nagitive flow',async({page})=> {
            const login = new AutoLogin(page)
           await login.documentLoginDetails(wrongUsername)
           await login.verifyErrorMessage(usernameError)
        })
    }

    verifyPasswordNegitiveFlow() {
        test('Password verification negitive flow',async({page})=> {
            const login = new AutoLogin(page)
          await login.documentLoginDetails(wrongPassword)
           await login.verifyErrorMessage(passwordError)
        })
    }
}