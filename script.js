const activeMenu = document.querySelectorAll('.navigation li')
const btnNavigator = document.querySelector('.btn-sidebar')
const navigator = document.querySelector('.navigation')
const contentContainer = document.querySelector('.container-content')
const btnClose = document.querySelector('.close-btn')

function activeMenyItem(e){
    activeMenu.forEach((item)=>{
    item.classList.remove('active')
    this.classList.add('active')
    })
    
}
activeMenu.forEach((itemMenu)=>
itemMenu.addEventListener('click',activeMenyItem) 
)   

btnNavigator.addEventListener('click', ()=>{
    navigator.classList.toggle('active')
    contentContainer.classList.toggle('active')
})

btnClose.addEventListener('click',()=>{
    navigator.classList.remove('active')
    contentContainer.classList.remove('active')
})

// itemMenu.addEventListener('mouseover',activeMenyItem)