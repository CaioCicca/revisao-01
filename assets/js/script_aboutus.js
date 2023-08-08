var dado = prompt("digite a sua idade")
if(dado >= 45){
    text.classList.add("old_people")
}
function hi() {
    const personObject = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        age: document.getElementById("age").value,
        eyeColor: document.getElementById("eye").value
    };

    let step = personObject.lastName.split(' ');
console.log(step)
    let lName = "";

    if(step.length > 1){ 
        lName = step[step.length - 1]
    }
console.log(lName)
    let phase = `Olá, meu nome é ${personObject.firstName} ${lName}, tenho ${personObject.age} anos.`

    document.getElementById("result").innerHTML = phase;
}
