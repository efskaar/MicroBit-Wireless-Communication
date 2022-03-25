function encryptFunc (tekst: string) {
    nyTekst = ""
    for (let bokstav of tekst) {
        if (alfabetet.indexOf(bokstav) != -1) {
            nyTekst = "" + nyTekst + alfabetet[(alfabetet.indexOf(bokstav) + tall) % alfabetet.length]
        } else {
            nyTekst = "" + nyTekst + bokstav
        }
    }
    return nyTekst
}
let nyTekst = ""
let tall = 0
let alfabetet = ""
alfabetet = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
let sendTekst = encryptFunc("Hello there :)")
tall = 50
radio.setGroup(90)
basic.forever(function () {
    radio.sendString(sendTekst)
})
