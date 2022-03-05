

// ======= Show Menu ======= //
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')


// ======= Remove Menu Mobile======= //

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// ======= Scroll Sections Active Link ======= //
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetHeight -50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// ======= SHOW Scroll ToP ======= //

function scrollTop(){
    const scrollTop = document.getElementById('scrolltop')
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop)

// ======= Dark - Light Theme ======= //

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// if user selected
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


// Validate if user previously chose a topic
if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with Button
themeButton.addEventListener('click', ()=> {
    //Add or remove dark/icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // Save the theme and icon user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


//======= REDUCE SIZE AND PRINT A4 SHEET ======= //

function scaleCV(){
    document.body.classList.add('scale-cv')
}

// ====== REMOVE SIZE WHEN CV DOWNLOADED ===== //
function removeScale(){
    document.body.classList.remove('scale-cv')
}

// ===== GENERATE PDF ====== //
let areaCV = document.getElementById('area-cv')

let resumeButton = document.getElementById('resume-button')


let opt = {
    margin:      0,
    filename:    'ResumeCVPadilha.pdf',
    image:       {type:'jpeg', quality: 0.98},
    html2canvas: {scale: 4},
    jsPDF:       {format:'a4', orientation: 'portrait' }
}

function generateResume(){
    html2pdf(areaCV, opt)
}

//Exe 3 functions
resumeButton.addEventListener('click', ()=>{

    scaleCV()

    generateResume()

    setTimeout(removeScale, 5000)
})
