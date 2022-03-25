input.onButtonPressed(Button.A, function () {
    id_group = id_group - 10
    incomingString = "None"
})
input.onButtonPressed(Button.AB, function () {
    basic.showString(incomingString)
})
radio.onReceivedString(function (receivedString) {
    incomingString = receivedString
})
input.onButtonPressed(Button.B, function () {
    id_group = id_group + 10
    incomingString = "None"
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(id_group)
})
let incomingString = ""
let id_group = 0
id_group = 90
incomingString = "None"
basic.forever(function () {
    radio.setGroup(id_group)
})
