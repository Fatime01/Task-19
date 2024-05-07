// let name = window.prompt("What's your name?")
// let lastname = window.prompt("What's your lastname?")
// let age = Number(prompt("How old are you?"))
// if (age=18){
// alert("Qeydiyyat uğurla tamamlandı")
// }
// else if (age<18){
//     alert("Qeydiyyatdan keçmek üçün yaşınız azdır")
// }
// else if(age>18){
//     alert("Qeydiyyatdan keçmek üçün yaşınız çoxdur")
// } else {
//     alert('error')
// }

prompt('What`s your name?')
prompt('What`s your surname?')
let age = Number(prompt('How old are you?'))

if (age > 18) {
    alert('Qeydiyyatdan keçmek üçün yaşınız çoxdur')
} else if (age < 18) {
    alert('Qeydiyyatdan keçmek üçün yaşınız azdır')
} else (
    alert('Qeydiyyat uğurla tamamlandı')
)