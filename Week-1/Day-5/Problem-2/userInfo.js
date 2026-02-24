const user = {
    name : "Pappu Kumar Yadav",
    age : 24,
    city : "Kolkata"
};
 function displayUserInfo(userObj) {
    document.getElementById("userName").innerText = `Name : ${userObj.name}`;
    document.getElementById("userAge").innerText = `Age : ${userObj.age}`;
    document.getElementById("userCity").innerText = `City : ${userObj.city}`;
 }
function showUser(){
    displayUserInfo(user);
}