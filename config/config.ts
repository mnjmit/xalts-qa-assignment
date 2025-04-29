export const BASE_URL = 'https://xaltsocnportal.web.app';

export const TestData = {
    // Signup test data
    signup: {
        validEmail: 'test_user@yopmail.com',
        invalidEmail: 'invalidemail',
        validPassword: 'TestPass123!',
        invalidPassword: 'short',
        mismatchedPassword: 'DifferentPass123!',
    },
    // Signin test data
    signin: {
        validEmail: 'test_user@yopmail.com',
        validPassword: 'TestPass123!',
        invalidEmail: 'invalid_user@yopmail',
        invalidPassword: 'wrongpass',
    }
}; 