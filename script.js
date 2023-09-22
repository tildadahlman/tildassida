let subject = "javascript";
console.log("hello " + subject);

let chooseColor = document.getElementById("chooseColor");
let colorBtn = document.getElementById("colorBtn");

let age = document.getElementById("age");
let testAge = document.getElementById("testAge");
let content = document.getElementById("content");

colorBtn.addEventListener("click", (e) => {
    console.log("klick på knapp")

    let chosenColor = chooseColor.value;
    console.log(chosenColor);
    document.body.style.backgroundColor = chosenColor;
})

testAge.addEventListener("click", (e) => {
    let getAge = age.value;

    console.log("age"+ getAge);

    let yearsleft = 18 - getAge;

    if (getAge < 18 ) {
        console.log("mindre än 18");
        content.innerText = "kom tillbaka om " + yearsleft + "år!";

    } else {
        console.log("större än 18");
        content.innerText = "vassego ta en öl";

    }

})
    