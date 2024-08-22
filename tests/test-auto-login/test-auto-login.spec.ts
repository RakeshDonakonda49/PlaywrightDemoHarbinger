import test from '@playwright/test'
import { AutoLogin } from '../../pages/test-auto-login';
import { TestAutoLoginSC } from "./scenarious/test-auto-login.sc";

const testAutoLoginSC = new TestAutoLoginSC()

test.describe('verifying login page',()=> {
test.beforeEach(async({page})=> {
    const login = new AutoLogin(page)
    login.visitAutoLoginPage()
    
})

testAutoLoginSC.verifyPositiveFlow()
testAutoLoginSC.verifyUsernameNegitiveFlow()
testAutoLoginSC.verifyPasswordNegitiveFlow()
})