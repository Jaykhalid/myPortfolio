window.addEventListener("load", () => {
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
    
    /*------ Page Loader -------*/
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout( () => {
        document.querySelector(".page-loader").style.display = "none";
    }, 700);
});



/* --------------------- Toggle Navbar ---------------------- */

const navToggler = document.querySelector(".nav-toggler");
    navToggler.addEventListener("click", () => {
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});

function hideSection() {
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar() {
    document.querySelector(".header").classList.toggle("active");
}


/* --------------------- Active Section ---------------------- */
document.addEventListener("click", (p) => {
    if (p.target.classList.contains("link-item") && p.target.hash !== "") {
        // activate the overlay to prevent multiple clicks 
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide");

        if (p.target.classList.contains("nav-item")) {
            toggleNavbar();
        }
        else { 
            hideSection();
            document.body.classList.add("hide-scrolling");
        }

        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(p.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        }, 500);
    }
});

/* --------------------- About Tabs ---------------------- */

const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener(
    "click", (p) => {
        if(p.target.classList.contains("tab-item") && !p.target.classList.contains("active")) {
            tabsContainer.querySelector(".active").classList.remove("active");
            p.target.classList.add("active");
            const target = p.target.getAttribute("data-target");
            console.log(target);
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            aboutSection.querySelector(target).classList.add("active");
        }
    }
);

/* --------------------- Portfolio Item Details Popup ---------------------- */

document.addEventListener("click", (p) => {
    if(p.target.classList.contains("view-project-btn")) {
        togglePortfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0,0);
        portfolioItemDetails(p.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}

document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

// hide popup when clicking outside of it
document.addEventListener("click", (p) => {
    if(p.target.classList.contains("pp-inner")) {
        togglePortfolioPopup();
    }
});

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".portfolio-item-thumbnail img").src;
    document.querySelector(".pp-header h3").innerHTML = portfolioItem.querySelector(".portfolio-item-title").innerHTML;
    document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}

/*------ Addition Feature Home Button Animation ------*/
document.querySelector(".btn").addEventListener("mouseover", () => {
changeHoverBtnp();
});

document.querySelector(".btn").addEventListener("mouseout", () => {
changeHoverBtnpOut();
});

function changeHoverBtnp() {
    document.querySelector(".btnp").classList.toggle("btnpc");
}
function changeHoverBtnpOut() {
    document.querySelector(".btnp").classList.toggle("btnpc");
}

switch (tabsContainer) {
    case navToggler:
        console.log("nav ")
        break;

    case aboutSection:
        console.log("about")
        break;
        
    default:
        console.log("default")
}

for(let arr; arr <= 100; ++arr) {
    console.log(arr);   
}

// How to Fetch an API | Step #1
/*
const userAPI  = "https://jsonplaceholder.typicode.com/users";
const response = fetch(userAPI).then(response => response.json()).then(dataUser => console.log(dataUser)); format data in json
const response = fetch(userAPI).then(response => response.text()).then(dataUser => console.log(dataUser)); // format data in text
*/

// How to Fetch an API | Step #2
/*
async function fetchText() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let dataUser = await response.text();
    
    console.log(dataUser); 
}
*/

// How to Fetch an API | Step #3

async function fetchText() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    console.log(response.status);   // 200
    console.log(response.statusText); // relative
    if(response.status === 200) {
        let dataUser = await response.json();
        dataUser.forEach(user => {
            console.log(`${user.id}. ${user.name} : ${user.email}`)
        });
        // for (const user in dataUser) {
        //     console.log(user.name)
        // }
    }
}

// Instance of a Promise
fetchText();