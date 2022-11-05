

//generate random password
function generate(){

    //set password length/complexity
    let complexity =document.getElementById("select").value;

    //possible password values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }


    //add password to previously generated passwords section
    document.getElementById("newPassword").innerHTML = password;

}


function copyPassword() {
  var copyText = document.querySelector("newPassword");
  copyText.select();
  document.execCommand("copy");
}


document.querySelector("#copy").addEventListener('click', copyPassword);



//generate();
//copyPassword();