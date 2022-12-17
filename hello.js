let container = document.querySelector(".container");
//setting up local variable so that everytime I reaload the text change is applied to it
//you can go to instpect- applications- localstorge and delete it to regain form
//else you can just restart teh session
let word = localStorage.getItem("sentence");//we access the stored storage
let item;
if(word == null){
    word="Click to write something"
}
container.innerHTML = word;

let x= 1;
container.addEventListener("click", function () {
    // to prevent the addition of textarea again and again 
    let noTextArea = document.getElementsByClassName("textarea");
    if (noTextArea.length == 0) {
        container.innerHTML = `<textarea class="textarea" id="textarea" rows='25' cols='70' placeholder="Write something" ></textarea>`;
        document.getElementById("textarea").focus();
    }
    let textarea = document.getElementById("textarea");
    //to remove the focus we use blur 
    textarea.addEventListener("blur", function () {
        if(textarea.value==0){
            container.innerHTML = " Click to write Something";
        }
        else{
            container.innerHTML = textarea.value; 
            //we store the sentence in the loacal storage 
            localStorage.setItem("sentence",textarea.value);  
        }
    })

    //it runs only once
    if(x==1){
    let divEle = document.createElement("div");
    let text = document.createTextNode("hello world!");
    divEle.appendChild(text);
    divEle.setAttribute("style", "color: white;");
    let first = document.querySelector("h1");
    first.appendChild(divEle);
    }
    x=0;




})

