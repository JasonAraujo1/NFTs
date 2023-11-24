

var clickSelection = document.querySelectorAll('.orange')

function selection(){
    clickSelection.forEach((item)=>
    item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}
clickSelection.forEach((item)=>
item.addEventListener('click', selection)
)