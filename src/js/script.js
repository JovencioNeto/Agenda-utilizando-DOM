function addContact(){
    const contactSection = document.getElementById('contact-list')

    const h3 = document.createElement('h3')
    h3.innerText = 'Contato'

    const ul = document.createElement('ul')

    //Name
    const nameLi = document.createElement('li')
    nameLi.innerText = 'Nome: '

    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'fullname'

    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)
    ul.appendChild(document.createElement('br'))

    //Contact
    const phoneLi = document.createElement('li')
    phoneLi.innerText = 'Contato:'

    const phoneInput = document.createElement('input')
    phoneInput.type = 'number'
    phoneInput.name = 'phone'

    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)
    ul.appendChild(document.createElement('br'))

    //Address
    const addressLi = document.createElement('li')
    addressLi.innerHTML ='<label for= "adress">Endereço: </label>'

    const addressInput = document.createElement('input')
    addressInput.type = 'text'
    addressInput.name = 'address'
    addressInput.id = 'address'

    ul.appendChild(addressLi)
    addressLi.appendChild(addressInput)

    contactSection.append(h3, ul)
}

function removeContact(){
    const contactSection = document.getElementById('contact-list')

    const title = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')

    contactSection.removeChild(title[title.length-1])
    contactSection.removeChild(contacts[contacts.length-1])
}