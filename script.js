const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const icon = toggleBtn.querySelector("i");

    if(document.body.classList.contains("dark")){
        icon.classList.replace("fa-moon","fa-sun");
    }else{
        icon.classList.replace("fa-sun","fa-moon");
    }
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".card,.project").forEach(el=>{
    observer.observe(el);
});