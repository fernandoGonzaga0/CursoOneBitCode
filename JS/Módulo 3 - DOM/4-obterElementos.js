function show() {

    // retornando uma HTMLCollection

    const contactList = document.getElementById('contact-list')
    console.log(contactList)

    const listElements = document.getElementsByTagName('li')
    console.log(listElements)

    const listClasses = document.getElementsByClassName('contact-input')
    console.log(listClasses)

    // retornando uma node list

    const contacts = document.querySelectorAll('#contact-list > li > label')
    console.log(contacts)
    contacts.length

    const contact1 = document.getElementById('contact1')
    console.log(contact1)

}