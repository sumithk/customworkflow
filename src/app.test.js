const rewire = require("rewire")
const app = rewire("./app")
const sayHi = app.__get__("sayHi")
// @ponicode
describe("sayHi", () => {
    test("0", () => {
        let callFunction = () => {
            sayHi()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("app.add", () => {
    test("0", () => {
        let callFunction = () => {
            app.add(-1, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            app.add(0, -1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            app.add(-5.48, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            app.add(10, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            app.add(10, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            app.add(Infinity, Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
