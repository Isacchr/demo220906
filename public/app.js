console.log('Hey from javascript');

function sayHello() {
    const contactPersonName = contactPerson.value;
   
    document.getElementById('namePlaceholder').innerHTML = contactPersonName;

    const target = document.getElementById('app');
    const newElement = document.createElement('p');
    newElement.innerHTML = 'TESTING';
    newElement.className = 'red';
    target.appendChild(newElement);

}
