let input1 = document.getElementById("lightDisplay");

let buttons1 = document.querySelectorAll(" .light-theme button")

let string1 = "";

let arr1 = Array.from(buttons1);

arr1.forEach(btn1 => {

    btn1.addEventListener("click", (e) => {

        if (e.target.innerHTML == "DEL") {
            string1 = string1.substring(0, string1.length - 1)
            input1.value = string1;
        }
        else if (e.target.innerHTML == "AC") {
            string1 = "";
            input1.value = string1;
        }
        else if (e.target.innerHTML == "=") {
            string1 = eval(string1);
            input1.value = string1;
        }
        else {
            string1 += e.target.innerHTML;
            input1.value = string1;
        }
        // console.log(e.target.innerHTML)
    });
});

// Js for Calculator-02 //

let input2 = document.getElementById("darkDisplay");

let buttons2 = document.querySelectorAll(" .dark-theme button");

let string2 = "";

let arr2 = Array.from(buttons2);

arr2.forEach(btn2 => {
    btn2.addEventListener("click", (e) => {


        if (e.target.innerHTML == "DEL") {
            string2 = string2.substring(0, string2.length -1)
            input2.value = string2;
        }
        else if (e.target.innerHTML == "AC") {
            string2 = "";
            input2.value = string2;
        }
        else if (e.target.innerHTML == "=") {
            string2 = eval(string2)
            input2.value = string2;
        }
        else {
            string2 += e.target.innerHTML;
            input2.value = string2;
        }

    })

});