const loveIcon=document.querySelectorAll(".fa-regular.fa-heart");
loveIcon.forEach((icon)=>{
    icon.addEventListener("click",()=>{
        icon.classList.toggle("fa-solid");
        icon.style.color=icon.classList.contains("fa-solid")?"#8B4513":"black";
    })
})


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



const manItems=document.querySelectorAll(".man-items");
console.log(manItems);
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









