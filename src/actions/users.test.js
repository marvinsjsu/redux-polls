const users = require("./users")
// @ponicode
describe("users.receiveUsers", () => {
    test("0", () => {
        let callFunction = () => {
            users.receiveUsers("username")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            users.receiveUsers("user-name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            users.receiveUsers(123)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            users.receiveUsers("user123")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            users.receiveUsers("user name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            users.receiveUsers(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
