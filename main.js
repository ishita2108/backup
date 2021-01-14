
const contactMobile = document.getElementById("contact-mobile")
const contactDesktop = document.getElementById("contact")

if(window.matchMedia("(max-width: 768px)").matches){
    contactDesktop.classList.add("none")
    contactMobile.classList.remove("none")
}
else{
    contactDesktop.classList.remove("none")
    contactMobile.classList.add("none")
}



const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    let handleClick = () => {
        nav.classList.toggle('nav-active')
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation =''
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        burger.classList.toggle('toggle');
    }
 

    burger.addEventListener('click', handleClick);
  
}
navSlide();

var liItems = document.querySelectorAll(".accordion_wrap ul li");
var ulItems = document.querySelector('.accordion_wrap ul');

liItems.forEach(function(item){
    item.addEventListener("click", function(){
    
        const wetherActive = item.classList.contains('active')
        liItems.forEach(function(item){
            item.classList.remove('active');
        })
        if(wetherActive){
            item.classList.remove('active');
        }
        else{item.classList.add('active');}
        
    })
})





const myFunction = (e) => {
    console.log(window.scrollY);
    const yoffset = window.scrollY;
    if(yoffset<460){
        navService.classList.remove("active")
        navFeatures.classList.remove("active")
        navContact.classList.remove("active")
        navHome.classList.add("active")
    }
    else if(yoffset>460 && yoffset<850){
        navService.classList.add("active")
        navHome.classList.remove("active")
        navFeatures.classList.remove("active")
        navContact.classList.remove("active")
    }
    else if(yoffset>950 && yoffset<1214){
        navFeatures.classList.add("active")
        navService.classList.remove("active")
        navHome.classList.remove("active")
        navContact.classList.remove("active")
    }
    else if(yoffset>1214){
       navContact.classList.add("active")
        navFeatures.classList.remove("active")
        navService.classList.remove("active")
        navHome.classList.remove("active")
    }

}

const navHome = document.getElementById("nav-home")
const navService = document.getElementById("nav-services")
const navFeatures = document.getElementById("nav-features")
const navContact = document.getElementById("nav-contact")

