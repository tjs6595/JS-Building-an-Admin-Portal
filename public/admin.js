//SOLUTION CODE TO COMPARE TO:

// // Your Code Here

// async function main() {

//     let response = await fetch('http://localhost:3001/listBooks')

//     let books = await response.json()

//     books.forEach(renderBook)
// }

// function renderBook(book) {
//     let root = document.querySelector('#root')

//     let li = document.createElement('li')
//     li.textContent = book.title

//     let quantityInput = document.createElement('input')
//     quantityInput.value = book.quantity

//     let saveButton = document.createElement('button')
//     saveButton.textContent = 'Save'

//     saveButton.addEventListener('click', () => {
//         fetch('http://localhost:3001/updateBook', {
//             method: 'PATCH',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 id: book.id,
//                 quantity: quantityInput.value
//             })
//         })
//     })

//     li.append(quantityInput, saveButton)

//     root.append(li)
// }

// main();


// MY CODE:
// //Your Code Here

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

    let saveButton = document.createElement('button');
    saveButton.textContent = 'Save';

    saveButton.addEventListener('click', function() {
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application.json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: quantityInput.value
            })
    })
})

li.append(quantityInput, saveButton);

root.append(li);


}
main()



    // let bookContainer = document.querySelector('.book-container')
    // bookContainer.innerHTML += `
    //     <div class="col-sm-3">
    //         <div class="card" style="width: 100%;">
    //             ${book.imageURL ? `
    //                 <img class="card-img-top" src="${book.imageURL}" />
    //             `
    //             : ``}
    //             <div class="card-body">
    //                 <h5 class="card-title">${book.title}</h5>
    //                 <h6 class="card-subtitle mb-2 text-muted">Available: ${book.quantity}</h6>
    //                 <p class="card-text">${book.description}</p>
    //             </div>
    //         </div>
    //     </div>
    // `




// let response = await fetch('http://localhost:3001/updateBook', {
//         method: 'PATCH', 
//         headers: {'Content-Type' : 'application/json'}, 
//         body: JSON.stringify({
//             "id": 3, 
//             "title": 'Legends of Arathrae'
//      }), 

// }); 
// let updatedBook = await response.json();
// console.log(updatedBook);

