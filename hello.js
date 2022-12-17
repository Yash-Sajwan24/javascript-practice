let container = document.querySelector(".container");
let x= 1;
container.addEventListener("click", function () {
    // to prevent the addition of textarea again and again 
    let noTextArea = document.getElementsByClassName("textarea");
    if (noTextArea.length == 0) {
        container.innerHTML = `<textarea class="textarea" id="textarea" rows='25' cols='70' placeholder="Write something" ></textarea>`;
        document.getElementById("textarea").focus();
    }
    let textarea = document.getElementById("textarea");
    textarea.addEventListener("blur", function () {
        if(textarea.value==0){
            container.innerHTML = " Click to write Something";
        }
        else{
            container.innerHTML = textarea.value;   
        }
    })

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

