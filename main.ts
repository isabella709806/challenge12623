input.onButtonPressed(Button.A, function () {
    testVariable += 1
    basic.showNumber(testVariable,50)
})
input.onButtonPressed(Button.AB, function () {
    testVariable = 0
    basic.showNumber(testVariable,50)
})
input.onButtonPressed(Button.B, function () {
    testVariable += -1
    basic.showNumber(testVariable,50)
})
let testVariable = 0
testVariable = 0
basic.showNumber(testVariable,50)
