let images=document.querySelectorAll('.image img')
let left=document.querySelector('.left')
let right=document.querySelector('.right')
let close=document.querySelector('.close')
var galleryImg=document.querySelector('.gallery-inside img')
var gallery=document.querySelector('.gallery')
let currentIndex=0
function galleryShow(){
    if(currentIndex==0){
        left.classList.add('hide')
    }
    else if(currentIndex==images.length-1){
        right.classList.add('hide')
    }
    else{
        left.classList.remove('hide')
    }
    gallery.classList.add('show')
    galleryImg.src=images[currentIndex].src
}
images.forEach((item,index)=>{
    item.addEventListener('click',function(){
        currentIndex=index
        galleryShow()
    })
})
close.addEventListener('click',function(){
    gallery.classList.remove('show')
})
document.addEventListener('keydown',function(e){
    if(e.keyCode==27){
        gallery.classList.remove('show')
    }
})
left.addEventListener('click',function(){
    if(currentIndex >0){
        currentIndex--
        galleryShow()
    }

})
right.addEventListener('click',function(){
    if(currentIndex < images.length-1){
        currentIndex++
        galleryShow()
    }

})