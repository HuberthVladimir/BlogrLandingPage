const imgHamburgerOpen = img => img.src = 'images/icon-hamburger.svg'
const imgHamburgerClose = img => img.src = 'images/icon-close.svg'

const eventclickDropdown = () => {

    const dropdown = document.querySelectorAll('.dropdown')

    dropdown.forEach(element => {
        const imgDropdown = element.querySelector('img')
        element.querySelector('.dropbtn').addEventListener('click', () => {
            element.querySelector('.dropdownContent').classList.toggle('active')
            imgDropdown.classList.toggle('imgDropdown')
        })
    })

}

const hambugerEvent = () => {
    const iconHamburguer = document.querySelector('.navHamburguer')
    const imgNavHambuerguer = document.querySelector('.navHamburguer img')
    this.menu = document.querySelector('[menu]')
    const tamanhoJanela = window.matchMedia("(max-width: 714px)")

    responsive(tamanhoJanela)

    tamanhoJanela.addEventListener("change", () => {
        if(!tamanhoJanela.matches){
            menu.classList.remove('menuOff')
            menu.classList.remove('menuOn')
            menu.classList.add('menuDesktop')
            document.querySelectorAll('[arrow]').forEach(img => {img.src = 'images/icon-arrow-light.svg'})

        } else {
            menu.classList.add('menuOff')
        }
    })
    
    iconHamburguer.addEventListener('click', () => {
        menu.classList.toggle('menuOff')
        menu.classList.toggle('menuOn')
        
        const veificaImgOff = menu.classList.contains('menuOff')
        const veificaImgOn = menu.classList.contains('menuOn')
        
        if (veificaImgOff) imgHamburgerOpen(imgNavHambuerguer)
        if (veificaImgOn) imgHamburgerClose(imgNavHambuerguer)
    })
}

const responsive = (tamanhoJanela) => {
    if(!tamanhoJanela.matches){
        menu.classList.remove('menuOff')
        menu.classList.remove('menuOn')
        menu.classList.add('menuDesktop')
        document.querySelectorAll('[arrow]').forEach(img => {img.src = 'images/icon-arrow-light.svg'})
    } else {
        menu.classList.add('menuOff')
    }
}

eventclickDropdown()
hambugerEvent()