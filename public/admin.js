async function bookData(){

    let response = await fetch ('http://localhost:3001/listBooks')

    let bookList = await response.json()

    bookList.forEach(bookTitles)
}

function bookTitles(book) {
    let root = document.querySelector('#root')

    let li = document.createElement('li')
    li.textContent = book.title

// text input 
    let bookQuantity = document.createElement('input')
    bookQuantity.value = book.quantity
    
// Submit button
    let submitBtn = document.createElement('button')
    submitBtn.textContent = 'Submit'

    submitBtn.addEventListener('click', (e) => {
        fetch('http://localhost:3001/'), {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: bookQuantity.value
            })
        }
    })


    li.append(quantityInput, saveButton)

    root.append(li)
}

bookData();