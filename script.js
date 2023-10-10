const mailUsBtn = document.querySelector('.mail-us-btn')
const nextBtn = document.querySelector('.next-btn')
const backBtn = document.querySelector('.back-btn')
const subHeaderContainer = document.querySelector('.sub-header-container-div')
const screenWidth = window.screen.width;
let initialTranslate = 0

console.log(screenWidth)

mailUsBtn.addEventListener('click', function(){
  window.open('mailto:euler.pernas@gmail.com')
})

nextBtn.addEventListener('click', function(e){
  subHeaderContainer.style.transform = `translateX(${initialTranslate += -200}px)`
  if(initialTranslate < screenWidth){
    initialTranslate = -screenWidth
  }
  console.log(initialTranslate)
})

backBtn.addEventListener('click', function(e){
  subHeaderContainer.style.transform = `translateX(${initialTranslate += 200}px)`
  if(initialTranslate > screenWidth){
    initialTranslate = screenWidth
  }
  console.log(initialTranslate)
})