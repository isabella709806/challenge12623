input.onButtonPressed(Button.A, function () {
    testVariable += 1
    basic.showNumber(testVariable)
})
input.onButtonPressed(Button.AB, function () {
    testVariable = 0
    basic.showNumber(testVariable)
})
input.onButtonPressed(Button.B, function () {
    testVariable += -1
    basic.showNumber(testVariable)
})
let testVariable = 0
testVariable = 0
basic.showNumber(testVariable)
