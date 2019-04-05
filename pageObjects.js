module.exports = {
    url: 'https://alpha.yoodlize.com/',
    elements: {
        loginStart: {
            selector: '//*[contains(text(),"Log in")]',
            locateStrategy: 'xpath'
        },
        email: 'input[name="email"]',
        password: 'input[name="password"]',
        login: 'button[type="submit"]',
    },
}