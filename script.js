const loveIcon=document.querySelectorAll(".fa-regular.fa-heart");
loveIcon.forEach((icon)=>{
    icon.addEventListener("click",()=>{
        icon.classList.toggle("fa-solid");
        icon.style.color=icon.classList.contains("fa-solid")?"#8B4513":"black";
    })
})


const items=document.querySelectorAll(".item");
console.log(items);
const seeLessBtn=document.querySelector(".see-less");

const seeMoreBtn=document.querySelector(".see-more");

let count =0;
seeMoreBtn.addEventListener("click", ()=>{
    if(count==items.length-1){
        count=0;
    }else{
        count++;
    }
    items.forEach(item=>{
        item.style.transform=`translateX(${count * (-50)}%)`;
        seeLessBtn.style.display="block";
        

    })
})

seeLessBtn.addEventListener("click", ()=>{
    if(count==0){
        count=items.length-1;
        seeLessBtn.style.display="none";
    }else{
        count--;
    }
    items.forEach(item=>{
        item.style.transform=`translateX(${count * (50)}%)`;
    })
})



