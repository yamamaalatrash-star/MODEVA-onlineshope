//additing love section to loved photo 

const loveIcon=document.querySelectorAll(".fa-regular.fa-heart");
loveIcon.forEach((icon)=>{
    icon.addEventListener("click",()=>{
        icon.classList.toggle("fa-solid");
        icon.style.color = icon.classList.contains("fa-solid") ? "brown"   : "" ;
    })
})

//additing transform to woemen section 

const items=document.querySelectorAll(".item");

const seeMoreBtn=document.querySelector(".see-more");

let count =0;
seeMoreBtn.addEventListener("click", ()=>{
    items.forEach(item=>{
        item.style.transform=`translateX(${count*(-90)}%)`;
    })
    if(count==items.length-1){
        count=0;
    }else{
        count++;
    }
})

//adding transform to man section 

const manItems=document.querySelectorAll(".man-items");

const seeMoreManClothes=document.querySelector(".see-more-manClothes");
let i=0;
seeMoreManClothes.addEventListener("click", ()=>{
    manItems.forEach(manItem=>{
        manItem.style.transform=`translateX(${i*(-90)}%)`;
    })
    if (i==manItems.length-1) {
        i=0;
    }else{
        i++;
    }
})

const lastInNav=document.querySelectorAll(".lastInNav");
const child=document.querySelectorAll(".child ")
const  searchHistory=document.querySelector(".searchHistory")
const searchForm=document.querySelector(".searchForm")

const input=document.querySelector(".input")

const searchBtn=document.querySelector(".searchBtn")

const ulSearchHistory=document.querySelector(".ulSearchHistory")
const li=document.querySelector(".li")

let arr=localStorage.getItem("arr")? JSON.parse(localStorage.getItem("arr")): []


input.addEventListener("click", (event) => {
    if (arr.length > 0) {
        ulSearchHistory.style.display = "block";
        read();
    }
});
function read() {
    ulSearchHistory.innerHTML="";
    arr.forEach(item=>{
        ulSearchHistory.innerHTML+=`<li class="li">${item}<a href="/about.html?id">edit</a></li>`;   
    })
}    

searchBtn.addEventListener("click",(event)=>{
    
    event.preventDefault()   
    
    let newSearched=input.value.trim();
    if (newSearched !=="") {
        arr.unshift(newSearched)
        
        localStorage.setItem("searchedId",JSON.stringify(u))
        localStorage.setItem("arr",JSON.stringify(arr))
    }
    input.value=''
    ulSearchHistory.style.display="none"; 
        read()
})


















