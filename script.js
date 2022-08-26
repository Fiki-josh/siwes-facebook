var database = [
    {username: "Fiki", password: "fikination"},
    {username: "Joshua04", password: "091324"},
    {username: "Ola32", password: "love04"},
    {username: "Dare123",password: "fam042"},
    {username: "Eddie",password: "chrissy"}
];


var newsfeed = [
    {username: "Harrison",timeline: "Hey there am a software developer"},
    {username: "Vikkstar",timeline: "Hey there am about to lauch a new course"},
    {username: "Ksi",timeline: "New YouTube video is on the way"}
];
let promise_ = new Promise((resolve, reject) => {
    for(var i = 0; i < newsfeed.length; i++){
        if(newsfeed.length != 0) resolve("user input exist");
    }
    reject("user input does not exist");
});
promise_.then(() => {
    console.log(newsfeed);
});
promise_.catch((res) => {
    console.log(res);
})

const change = document.getElementsByClassName("face-book")[0];
var divParent = document.createElement("div");
var h1 = document.createElement("h1");
var faceIcon = document.createElement("i");
var input1 = document.createElement("input");
var input2 = document.createElement("input");   
var anchor = document.createElement("a");
divParent.className = "new";

faceIcon.className = "fa-brands fa-facebook-square";
h1.appendChild(faceIcon);

input1.id = "user-name";
input1.type = "text";
input1.placeholder = "Username";

input2.id = "pass-word";
input2.type = "password";
input2.placeholder = "Password";
anchor.className = "log";
anchor.href = "#";
anchor.innerHTML = "Create Account";
anchor.addEventListener("click",function(){
    var store = {username: input1.value, password: input2.value };
    database.unshift(store);  
    alert("Account successfully Created");

    input1.value = '';
    input2.value = '';
});
function changeTrans(){
    divParent.appendChild(h1);
    divParent.appendChild(input1);
    divParent.appendChild(input2);
    divParent.appendChild(anchor);
    
    change.parentNode.replaceChild(divParent, change);
    const tag = document.getElementById("target");
    
    var back = document.createElement("a");
    back.href = "#";
    back.style.color = "#fff";
    back.innerHTML = '<u>' + "Back to login" + '</u>';
    tag.parentNode.replaceChild(back, tag);   
    
    back.addEventListener("click",function(){
        const trans = divParent;
        const tage = back;
        trans.parentNode.replaceChild(change, trans);
        tage.parentNode.replaceChild(tag, tage);
    });
}
function clear(){
    userName.value = '';
    password.value = '';
}
var userName = document.getElementById("username");
var password = document.getElementById("password");
userName.addEventListener("keydown",function(e){
    if(e.key === "Enter"){
        signIn(userName.value, password.value);
        clear();
    }
});
password.addEventListener("keydown",function(e){
    if(e.key === "Enter"){
        signIn(userName.value, password.value);
        clear();
    }
});
var divSen = document.createElement("div");
var divparent = document.createElement("div");
var divChild1 = document.createElement("div");
var divChild2 = document.createElement("div");
var divChild3 = document.createElement("div");
divSen.className = "sen";
divparent.className = "app";

var h11 = document.createElement("h3");
var h2 = document.createElement("h3");
var h3 = document.createElement("h3");

var p1 = document.createElement("p");
var p2 = document.createElement("p");
var p3 = document.createElement("p");

divChild1.className = "Tweets";
divChild2.className = "Tweets";
divChild3.className = "Tweets";

h11.innerHTML = newsfeed[0].username;
h2.innerHTML = newsfeed[1].username;
h3.innerHTML = newsfeed[2].username;

p1.innerHTML = newsfeed[0].timeline;
p2.innerHTML = newsfeed[1].timeline;
p3.innerHTML = newsfeed[2].timeline;

divChild1.appendChild(h11);
divChild1.appendChild(p1);

divChild2.appendChild(h2);
divChild2.appendChild(p2);

divChild3.appendChild(h3);
divChild3.appendChild(p3);

divparent.appendChild(divChild1);
divparent.appendChild(divChild2);
divparent.appendChild(divChild3);

divSen.innerHTML = '<h2 style = "color: #fff; font-size: 2rem">'+" Welcome to facebook Feed" + '</h2>';
divSen.style.textAlign = "center";

divSen.appendChild(divparent);
function isValid(userName,password){ 
    return new Promise((resolve, reject) => {
        for(var i = 0; i < database.length; i++){
            if(userName === database[i].username && password === database[i].password) resolve("user exist");
        }
        reject("user don\'t exist");
    });      
}
function signIn(userName, password){
    if(userName == '' || password == ''){
        alert("Enter username or password");
        return;
    }
    isValid(userName, password)
    .then(() => {
        const trans = divSen;
        change.parentNode.replaceChild(trans, change);
        const tag = document.getElementsByClassName("trag")[0];
        const tag2 = document.getElementsByClassName("trag")[1];
        tag.style.display = "none";
        tag2.style.display = "none";
    })
    .catch(() => {
        alert("Wrong username or password");
    });
}
function callFunc(){
    signIn(userName.value, password.value);    
    clear();
}

