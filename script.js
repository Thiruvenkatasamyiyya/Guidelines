const pre = document.querySelector('.pre');
const requirements = document.querySelector('.requirements')
const homenav = document.querySelector('.homenav')
const home = document.querySelector('.home');
const counav = document.querySelector('.counav');
const counselling = document.querySelector('.cs');
const navul = document.querySelector('.navul')
const faq = document.querySelector('.faq')
const univer = document.querySelector('.univer')
const cont = document.querySelector('.cont')
const contact = document.querySelector('.contact')

pre.addEventListener('click', function(){
    requirements.scrollIntoView({behavior:'smooth'})
})

homenav.addEventListener('click', function(){
    home.scrollIntoView({behavior:'smooth'})
})

counav.addEventListener('click', function(){
    counselling.scrollIntoView({behavior:'smooth'})
})

faq.addEventListener('click', ()=>{
    window.location.href = 'faq.html'
})

univer.addEventListener('click',()=>{
    window.location.href = "https://www.annauniv.edu/pdf/College%20Rankings.pdf"

})

cont.addEventListener('click', ()=>{
    contact.scrollIntoView({behavior:'smooth'})
})

function demo(){
    navul.addEventListener('click',(e)=>{
        console.log(e.target.className());
        console.log('hello');
        
        
    })
}
