//Your Code Here:

async function main() {
    let response = await fetch('http://localhost:3001/listBooks')

    let listBooks = await response.json();
    console.log(listBooks);

    listBooks.forEach(renderBook)
}

function renderBook(book) {
    let root = document.querySelector('#root');

    let li = document.createElement('li');
    li.textContent = book.title;

    let quantityInput = document.createElement('input');
    quantityInput.value = book.quantity;

    let submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    submitButton.addEventListener('click', function() {
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: quantityInput.value
            })
        })
    })

    deleteButton.addEventListener('click', function() {
        fetch('http://localhost:3001/removeBook/"${book.id}"', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: quantityInput.value
            })
        })
    })

    li.append(quantityInput, submitButton, deleteButton);

    root.append(li);
}

main()