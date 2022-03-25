input.onButtonPressed(Button.A, function () {
    id_group = id_group - 10
    incomingString = "None"
})

function decryptFunc (tekst2: string) {
    nyTekst = ""
    for (let bokstav2 of tekst2) {
        if (rAlfabetet.indexOf(bokstav2) != -1) {
            nyTekst = "" + nyTekst + rAlfabetet[(rAlfabetet.indexOf(bokstav2) + tall) % rAlfabetet.length]
        } else {
            nyTekst = "" + nyTekst + bokstav2
        }
    }
    return nyTekst
}
input.onButtonPressed(Button.AB, function () {
    basic.showString(incomingString)
})
radio.onReceivedString(function (receivedString) {
    incomingString = decryptFunc(receivedString)
})
input.onButtonPressed(Button.B, function () {
    id_group = id_group + 10
    incomingString = "None"
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(id_group)
})
let nyTekst = ""
let incomingString = ""
let id_group = 90
let tall = 0
let rAlfabetet = ""
rAlfabetet = "mnbvcxzlkjhgfdsapoiuytrewqMNBVCXZLKJHGFDSAPOIUYTREWQ"
tall = 50
radio.setGroup(90)
basic.forever(function () {
    radio.setGroup(id_group)
})
