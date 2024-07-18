var overlay=document.querySelector(".overlay")
var popup=document.querySelector(".popup")
var add=document.getElementById("hoverbook")
var form=document.querySelector("form")
//+ button
add.addEventListener("click",function(){
    popup.style.display="block"
    overlay.style.display="block"
    form.reset() 
})
//cancel button
var cancel=document.getElementById("cancel")
cancel.addEventListener("click",function(event){
    event.preventDefault()
     popup.style.display="none"
    overlay.style.display="none"
})
//book,add button items
var container=document.querySelector(".container")
var addbook=document.getElementById("addbook")
var movie=document.getElementById("moviename")
var director=document.getElementById("author")
var story=document.getElementById("review")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    if(movie.value==""){
        alert("No Words Found")
    }else{
    var div=document.createElement("div")
    div.setAttribute("class","book")
    div.innerHTML=`<h2>${movie.value}</h2>
            <h4>${director.value}</h4>
            <br>
            <p>${story.value}</p>
            <button onclick="removestory(event)">Delete</button>`
    container.append(div)
    popup.style.display="none"
    overlay.style.display="none" 
       } 
    
})
function removestory(event) {
    event.target.parentElement.remove()
    
}