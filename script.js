const loveIcon=document.querySelectorAll(".fa-regular.fa-heart");
loveIcon.forEach((icon)=>{
    icon.addEventListener("click",()=>{
        icon.classList.toggle("fa-solid");
        icon.style.color=icon.classList.contains("fa-solid")?"#8B4513":"black";
    })
})