// section 1
var main = document.getElementById("main");
var submain1 = document.getElementById("submain1");
var submain1element1 = document.getElementById("submain1-element-1");
var submain1element1input1 = document.getElementById("submain1-element-1-input1");
var submain2element1 = document.getElementById("submain2-element-1");
var submain2element1submain1 = document.getElementById("submain2-element-1-submain1");
var submain2element1input1 = document.getElementById("submain2-element-1-input1");

// section 2
var button1 = document.getElementById("button1");
var button11 = document.getElementById("button1-1");
var button12 = document.getElementById("button1-2");
var submain2element1textarea = document.getElementById("submain2-element-1-textarea")
var submain2element1input1 = document.getElementById("submain2-element-1-input1");

// section 3
var submain3element1 = document.getElementById("submain3-element-1");
var submain3element1submain1 = document.getElementById("submain3-element-1-submain1");
var button2 = document.getElementById("button2");
var button21 = document.getElementById("button2-1");
var button22 = document.getElementById("button2-2");
var submain3element1submain2 = document.getElementById("submain3-element-1-submain2");

// section 4
var submain4element1submain1submain1inputlist = document.getElementById("submain4-element-1-submain1-submain1-input-list");




submain1element1.addEventListener("click", () => {
    submain1element1.style.border = "1px solid green";
    submain1element1.style.borderRadius = "10px";


    submain2element1.style.border = "none";
    button1.style.display = "none";
    submain3element1.style.border = "none";
    button2.style.display = "none";
    submain5element1.style.border = "none";
    button4.style.display = "none";
    submain4element1.style.border = "none";
    button3.style.display = "none";
    submain6element1.style.border = "none";
    button5.style.display = "none";
    submain7element1.style.border = "none";
    button6.style.display = "none"
    submain8element1.style.border = "none";
    button7.style.display = "none";
})
submain2element1.addEventListener("click", () => {
    submain2element1.style.border = "1px solid green";
    submain2element1.style.borderRadius = "10px";
    submain1element1.style.border = "none";
    button1.style.display = "inline";

    submain3element1.style.border = "none";
    button2.style.display = "none";
    submain5element1.style.border = "none";
    button4.style.display = "none";
    submain4element1.style.border = "none";
    button3.style.display = "none";
    submain6element1.style.border = "none";
    button5.style.display = "none";
    submain7element1.style.border = "none";
    button6.style.display = "none"
    submain8element1.style.border = "none";
    button7.style.display = "none";
})
button11.addEventListener("click", () =>{
    let newbox = document.createElement("span");
    newbox.setAttribute("spellcheck",true);
    newbox.setAttribute("data-text","Briefly describe the new box");
    newbox.setAttribute("contenteditable",true);
    newbox.setAttribute("id",submain2element1input1);
    newbox.style.display = "block";
    newbox.style.color = "black";
    submain2element1textarea.append(newbox);
})

button12.addEventListener("click", () =>{

})

submain3element1.addEventListener("click", () =>{
    submain3element1.style.border = "1px solid green";
    submain3element1.style.borderRadius = "10px";
    button2.style.display = "inline";

    submain2element1.style.border = "none";
    button1.style.display = "none";
    submain1element1.style.border = "none";
    submain5element1.style.border = "none";
    button4.style.display = "none";
    submain4element1.style.border = "none";
    button3.style.display = "none";
    submain6element1.style.border = "none";
    button5.style.display = "none";
    submain7element1.style.border = "none";
    button6.style.display = "none"
    submain8element1.style.border = "none";
    button7.style.display = "none";

})
button21.addEventListener("click", () =>{
    let div0 = document.createElement("div");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");
    let i1 = document.createElement("i");
    let newbox1 = document.createElement("span");
    let newbox11 = document.createElement("span");
    let newbox2 = document.createElement("span");
    let newbox21 = document.createElement("span");
    
    newbox1.setAttribute("spellcheck",true);
    newbox1.setAttribute("data-text","Year");
    newbox1.setAttribute("contenteditable",true);
    newbox1.setAttribute("class","submain3-element-1-submain1-input");

    newbox11.setAttribute("spellcheck",true);
    newbox11.setAttribute("data-text","Period/Duration");
    newbox11.setAttribute("contenteditable",true);
    newbox11.setAttribute("id","submain3-element-1-submain1-input2");
    newbox11.setAttribute("class","submain3-element-1-submain1-input");

    div1.append(newbox1);
    div1.append(newbox11);
    div0.append(div1);
    div1.style.display = "flex";
    div1.style.flexDirection = "column";
    div0.style.display = "flex";
    div0.style.flexDirection = "row";


    submain3element1submain2.append(div0);

    i1.setAttribute("class","fa-solid fa-circle fa-xs");
    newbox2.setAttribute("spellcheck",true);
    newbox2.setAttribute("data-text","Your degree/field of study");
    newbox2.setAttribute("contenteditable",true);
    newbox2.setAttribute("id","submain3-element-1-submain1-input");
    newbox2.setAttribute("class","submain3-element-1-submain1-input");

    div4.style.display = "flex";
    div4.style.flexDirection = "column";
    div4.append(div2)
    div2.append(i1);
    div2.append(newbox2);
    div0.append(div4);
    

    div3.setAttribute("id","submain3-element-1-submain1-submain1");
    newbox21.setAttribute("spellcheck",true);
    newbox21.setAttribute("data-text","University/College");
    newbox21.setAttribute("contenteditable",true);
    newbox21.setAttribute("id","submain3-element-1-submain1-submain1-input1");

    div3.append(newbox21);
    div4.append(div3);
    
})


var subbutton3 = document.getElementById("sub-button3");
var subbutton31 = document.getElementById("sub-button3-1");
var subbutton32 = document.getElementById("sub-button3-2");
var submain4element1submain1submain1inputlistinput = document.getElementById("submain4-element-1-submain1-submain1-input-list-input");
var submain4element1 = document.getElementById("submain4-element-1");
var button3 = document.getElementById("button3");
var button31 = document.getElementById("button3-1");
var button32 = document.getElementById("button3-2");
var submain4element1submainmain1 = document.getElementById("submain4-element-1-submain-main-1");
submain4element1submain1submain1inputlistinput.addEventListener("focusin", () =>{
    subbutton3.style.display = "inline";
})
subbutton31.addEventListener("click", ()=>{
    let li1 = document.createElement("li");
    let newbox1 = document.createElement("span");

    newbox1.setAttribute("spellcheck",true);
    newbox1.setAttribute("data-text","Briefly mention your role and key responsibilities");
    newbox1.setAttribute("contenteditable",true);
    newbox1.setAttribute("id","submain4-element-1-submain1-submain1-input-list-input");
    newbox1.setAttribute("class","submain4-element-1-submain1-submain1-input");
    
    li1.append(newbox1);
    submain4element1submain1submain1inputlist.append(li1);
})

submain4element1.addEventListener("click",()=>{
    submain4element1.style.border = "1px solid green";
    submain4element1.style.borderRadius = "10px";
    button3.style.display = "inline";

    submain5element1.style.border = "none";
    button4.style.display = "none";
    submain2element1.style.border = "none";
    button1.style.display = "none";
    submain3element1.style.border = "none";
    button2.style.display = "none";
    submain1element1.style.border = "none";
    submain6element1.style.border = "none";
    button5.style.display = "none";
    submain7element1.style.border = "none";
    button6.style.display = "none"
    submain8element1.style.border = "none";
    button7.style.display = "none";

})
button31.addEventListener("click",()=>{
    let div0 = document.createElement("div");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");
    let i1 = document.createElement("i");
    let newbox21 = document.createElement("span");
    let newbox22 = document.createElement("span");
    let newbox23 = document.createElement("span");
    let newbox24 = document.createElement("span");
    let newbox25 = document.createElement("span");
    let ul1 = document.createElement("ul");
    let li1 = document.createElement("li");
    
    div0.style.display = "flex";
    div0.style.flexDirection = "row";
    newbox21.setAttribute("spellcheck",true);
    newbox21.setAttribute("data-text","Period/Duration");
    newbox21.setAttribute("contenteditable",true);
    newbox21.setAttribute("class","submain3-element-1-submain1-input");

    div0.append(newbox21);
    submain4element1submainmain1.append(div0);

    i1.setAttribute("class","fa-solid fa-circle fa-xs");
    newbox22.setAttribute("spellcheck",true);
    newbox22.setAttribute("data-text","Title/Role");
    newbox22.setAttribute("contenteditable",true);
    newbox22.setAttribute("class","submain3-element-1-submain1-input");
    div1.style.display = "flex";
    div1.style.flexDirection = "column";
    // div2.style.display = "flex";
    // div2.style.flexDirection = "row";
    
    div2.append(i1);
    div2.append(newbox22);
    div1.append(div2);
    div0.append(div1);

    newbox23.setAttribute("spellcheck",true);
    newbox23.setAttribute("data-text","Company Name");
    newbox23.setAttribute("contenteditable",true);
    newbox23.setAttribute("id","submain3-element-1-submain1-submain1-input1");
    newbox24.setAttribute("spellcheck",true);
    newbox24.setAttribute("data-text","Company's Description");
    newbox24.setAttribute("contenteditable",true);
    newbox24.setAttribute("id","submain3-element-1-submain1-submain1-input2");

    div3.setAttribute("id","submain3-element-1-submain1-submain1");
    div3.style.display = "flex";
    div3.style.flexDirection = "column";

    div3.append(newbox23);
    div3.append(newbox24);
    div1.append(div3);

    ul1.setAttribute("id","submain4-element-1-submain1-submain1-input-list");
    li1.setAttribute("id","submain4-element-1-submain1-submain1-input-list1");
    newbox25.setAttribute("spellcheck",true);
    newbox25.setAttribute("data-text","Briefly mention your role and key responsibilities");
    newbox25.setAttribute("contenteditable",true);
    newbox25.setAttribute("id","submain4-element-1-submain1-submain1-input-list-input");
    newbox25.setAttribute("class","submain4-element-1-submain1-submain1-input");

    li1.append(newbox25);
    ul1.append(li1);
    div3.append(ul1);

})

var button4 = document.getElementById("button4");
var button41 = document.getElementById("button4-1");
var button42 = document.getElementById("button4-2");
var submain5element1submain1 = document.getElementById("submain5-element-1-submain1");
var submain5element1 = document.getElementById("submain5-element-1");

submain5element1.addEventListener("click", ()=>{
    submain5element1.style.border = "1px solid green";
    submain5element1.style.borderRadius = "10px";
    button4.style.display = "inline";

    submain2element1.style.border = "none";
    button1.style.display = "none";
    submain3element1.style.border = "none";
    button2.style.display = "none";
    submain1element1.style.border = "none";
    submain4element1.style.border = "none";
    button3.style.display = "none";
    submain6element1.style.border = "none";
    button5.style.display = "none";

})
button41.addEventListener("click", ()=>{
    let newbox26 = document.createElement("span");
    newbox26.setAttribute("spellcheck",true);
    newbox26.setAttribute("data-text","Your skills");
    newbox26.setAttribute("contenteditable",true);
    newbox26.setAttribute("id","submain5-element-1-submain1-input");
    
    newbox26.style.marginLeft = "10px";
    submain5element1submain1.append(newbox26);
})

var button5 = document.getElementById("button5");
var button51 = document.getElementById("button5-1");
var button52 = document.getElementById("button5-2");
var submain6element1 = document.getElementById("submain6-element-1");
var submain6element1submain1 = document.getElementById("submain6-element-1-submain1");

submain6element1.addEventListener("click", ()=>{
    submain6element1.style.border = "1px solid green";
    submain6element1.style.borderRadius = "10px";
    button5.style.display = "inline";

    submain7element1.style.border = "none";
    button6.style.display = "none"
    submain8element1.style.border = "none";
    button7.style.display = "none";
    
})
button5.addEventListener("click", ()=>{
    let newbox27 = document.createElement("span");
    let newbox28 = document.createElement("span");
    let div0 = document.createElement("div");
    
    newbox27.setAttribute("spellcheck",true);
    newbox27.setAttribute("data-text","Your Achievements");
    newbox27.setAttribute("contenteditable",true);
    newbox27.setAttribute("id","submain6-element-1-submain1-input1");
    newbox27.setAttribute("class","submain6-element-1-submain1-input");

    newbox28.setAttribute("spellcheck",true);
    newbox28.setAttribute("data-text","Briefly describe your achievements");
    newbox28.setAttribute("contenteditable",true);
    newbox28.setAttribute("id","submain6-element-1-submain1-input2");
    newbox28.setAttribute("class","submain6-element-1-submain1-input");

    div0.style.display = "flex";
    div0.style.flexDirection = "column";
    newbox28.style.width = "100%";

    div0.append(newbox27);
    div0.append(newbox28);
    submain6element1submain1.append(div0);

})

var button6 = document.getElementById("button6");
var button61 = document.getElementById("button6-1");
var button62 = document.getElementById("button6-2");
var submain7element1 = document.getElementById("submain7-element-1");
var submain7element1submain1 = document.getElementById("submain7-element-1-submain1");
var submain7element1submain1input1span = document.getElementById("submain7-element-1-submain1-input1-span");
var submain7element1submain1ul = document.getElementById("submain7-element-1-submain1-ul");
var subbutton6 = document.getElementById("sub-button6");
var subbutton61 = document.getElementById("sub-button6-1");
var subbutton62 = document.getElementById("sub-button6-2");
var submain7element1main = document.getElementById("submain7-element-1-main");

submain7element1submain1input1span.addEventListener("focusin", ()=>{
    subbutton6.style.display = "inline";
})
subbutton61.addEventListener("click", ()=>{
    let newli = document.createElement("li");
    let newinput = document.createElement("span");

    newinput.setAttribute("spellcheck",true);
    newinput.setAttribute("data-text","Purpose of the project");
    newinput.setAttribute("contenteditable",true);
    newinput.setAttribute("id","submain7-element-1-submain1-input1");
    newinput.setAttribute("class","submain7-element-1-submain1-input");

    newli.append(newinput);
    submain7element1submain1ul.append(newli);
})
submain7element1.addEventListener("click", ()=>{
    submain7element1.style.border = "1px solid green";
    submain7element1.style.borderRadius = "10px";
    button6.style.display = "inline"

    submain8element1.style.border = "none";
    button7.style.display = "none";
    submain6element1.style.border = "none";
    button5.style.display = "none";
    submain2element1.style.border = "none";
    button1.style.display = "none";
    submain3element1.style.border = "none";
    button2.style.display = "none";
    submain5element1.style.border = "none";
    button4.style.display = "none";
    submain4element1.style.border = "none";
    button3.style.display = "none";
    submain6element1.style.border = "none";
    button5.style.display = "none";
    submain1element1.style.border = "none";
})
button61.addEventListener("click", ()=>{
    let newdiv = document.createElement("div");
    let newbox27 = document.createElement("div");
    let newbox28 = document.createElement("div");
    let span1 = document.createElement("span");
    let span2 = document.createElement("span");
    let span3 = document.createElement("span");
    let span4 = document.createElement("span");
    let ul1 = document.createElement("ul");
    let li1 = document.createElement("li");

    span1.setAttribute("spellcheck",true);
    span1.setAttribute("data-text","Your title");
    span1.setAttribute("contenteditable",true);
    span1.setAttribute("id","submain7-element-1-submain1-input1");
    span1.setAttribute("class","submain7-element-1-submain1-input");
    
    span2.setAttribute("spellcheck",true);
    span2.setAttribute("data-text","Period");
    span2.setAttribute("contenteditable",true);
    span2.setAttribute("id","submain7-element-1-submain1-input2");
    span2.setAttribute("class","submain7-element-1-submain1-input");

    span3.setAttribute("spellcheck",true);
    span3.setAttribute("data-text","Short Description");
    span3.setAttribute("contenteditable",true);
    span3.setAttribute("id","submain7-element-1-submain1-input3");
    span3.setAttribute("class","submain7-element-1-submain1-input");
    
    ul1.setAttribute("id","submain7-element-1-submain1-ul")

    span4.setAttribute("spellcheck",true);
    span4.setAttribute("data-text","Purpose of the project");
    span4.setAttribute("contenteditable",true);
    span4.setAttribute("id","submain7-element-1-submain1-input1-span");
    span4.setAttribute("class","submain7-element-1-submain1-input");

    newdiv.style.display ="flex";
    newdiv.style.flexDirection ="column";

    
    li1.append(span4);
    ul1.append(li1);

    newdiv.append(span1);
    newdiv.append(span2);
    newdiv.append(span3);
    newdiv.append(ul1);
    submain7element1main.append(newdiv);
    


})

var submain8element1submain1 = document.getElementById("submain8-element-1-submain1");
var button7 = document.getElementById("button7");
var button71 = document.getElementById("button7-1");
var button72 = document.getElementById("button7-2");
var submain8element1 = document.getElementById("submain8-element-1");

submain8element1.addEventListener("click",()=>{
    submain8element1.style.border = "1px solid green";
    submain8element1.style.borderRadius = "10px";
    button7.style.display = "inline";

    submain7element1.style.border = "none";
    button6.style.display = "none"
    submain2element1.style.border = "none";
    button1.style.display = "none";
    submain3element1.style.border = "none";
    button2.style.display = "none";
    submain5element1.style.border = "none";
    button4.style.display = "none";
    submain4element1.style.border = "none";
    button3.style.display = "none";
    submain6element1.style.border = "none";
    button5.style.display = "none";
    submain1element1.style.border = "none";
})
button7.addEventListener("click",()=>{
    let span1 = document.createElement("span");

    span1.setAttribute("spellcheck",true);
    span1.setAttribute("data-text","Course Title");
    span1.setAttribute("contenteditable",true);
    span1.setAttribute("id","submain8-element-1-submain1-input");

    submain8element1submain1.append(span1);
})
