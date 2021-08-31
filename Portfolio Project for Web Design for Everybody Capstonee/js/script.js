//preloader 

window.addEventListener("load" , function(){
    document.querySelector(".preloader").classList.add("opacity-0");
    setTimeout( function(){
        document.querySelector(".preloader").style.display="none";
    }, 1000)
})

//portfolio item Filter
const  portfolioItems=document.querySelectorAll(".portfolio-item"),
       totalPortflioItem = portfolioItems.length;


// Aside Navbar
    const nav = document.querySelector(".navv"),
        navlist = nav.querySelectorAll("li"),
        totalNavlist = navlist.length,
        allsection=document.querySelectorAll(".section");

    for(let i=0; i< totalNavlist; i++){
        const a = navlist[i].querySelector("a");
        a.addEventListener("click",function(){
            //remove back section class
            for(let i=0; i<allsection.length; i++){
                allsection[i].classList.remove("back-section");
            }

            for(let j=0; j< totalNavlist; j++){
                if(navlist[j].querySelector("a").classList.contains("active")){
                    //add back section class
                    allsection[j].classList.add("back-section");
                }
                navlist[j].querySelector("a").classList.remove("active");
            }

            this.classList.add("active");
            showsection(this);
        })
    }

    function showsection(element){
        for(let i=0; i<allsection.length; i++){
            allsection[i].classList.remove("active");
        }

        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#"+ target).classList.add("active")
    }

    const navTogglerBtn = document.querySelector(".nav-toggler"),
         aside = document.querySelector(".aside");

        navTogglerBtn.addEventListener("click",asideTogglBtn)
    
    // another way to write  ("click",()=>
    // { 
    //     asideTogglBtn();
    // })

    function asideTogglBtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0; i<allsection.length; i++){
            allsection[i].classList.toggle("open");
        }
    }

//Hire Me Button
    document.querySelector(".hire-me").addEventListener("click",function(){
        showsection(this)
    })
