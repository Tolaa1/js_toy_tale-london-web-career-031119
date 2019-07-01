const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
const formEl = document.querySelector('.add-toy-form')
const toyCollection = document.querySelector('#toy-collection')
const toyDiv = document.createElement('div')
const toyformEl = document.querySelector('.add-toy-form')

let addToy = false
//fetch all the toy

// YOUR CODE HERE

addBtn.addEventListener('click', () => {
  //  hide & seek with the form
   addToy = !addToy
   if (addToy) {
    toyForm.style.display = 'block'
    //  submit listener here
    } else {
   toyForm.style.display = 'none'
  }
})

 //const formEl = document.querySelector('.add-toy-form')
 const toycollection = document.querySelector('#toy-collection')

// OR HERE!
//addToy
//addToys
//create a toy
//increase likes

//Rendering multiple toys
 const renderToys = toys => {
  toys.forEach( toy => renderToy(toy) )

}
// create  a new toy using form
 formEl.addEventListener('submit', event => {
   event.preventDefault()

   const toy =  {
      name: formEl.name.value,
      image: formEl.image.value,
      likes: 0
    }
   renderToy(toy)
   formEl.reset()
   postToy(toy)
 })
//Rendering a toy

renderToy = toy => {
  const toyDiv = document.createElement('div')
  toyDiv.className = 'card'
  toyDiv.innerHTML = `
    <h2>${toy.name}</h2>
    <img src=${toy.image} class="toy-avatar" />
    <p class= 'likes'>${toy.likes} Likes</p>
    <button class="like-btn">Like <3</button>
    <button class="delete-btn">Delete <3</button>
  `
  const likeBtn = toyDiv.querySelector('.like-btn')
  const deleteBtn = toyDiv.querySelector('.delete-btn')

  deleteBtn.addEventListener('click', () => {
    deleteToy(toy.id)
    toyDiv.remove()
  })

  likeBtn.addEventListener('click', () => {
   // alert('hey!')
    toy.likes++
  const likesEl = toyDiv.querySelector('.likes')
  likesEl.innerText = `${toy.likes} likes`
  updateToy(toy)
  })

toycollection.append(toyDiv)
}
const init = () => {
  fetch ('http://localhost:3000/toys')
  .then(r => r.json())
  .then(toys => renderToys(toys))
}
init();

// bucky robert function tutorial
// function funcky() {
//   alart('oooouch!!')
// }
// <form>
// <input type='button' value='touch me' onclick='funcky()' >
// </form>

