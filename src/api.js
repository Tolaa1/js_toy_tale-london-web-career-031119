// update /patch toys in the url
const updateToy = toy => {
    fetch (`http://localhost:3000/toys/${toy.id}`,{
      method: 'PATCH',
      headers: {'content-type':'application/json'},
      body: JSON.stringify(toy)
 
    }).then(resp => resp(json))
   

}
// //creating toys 
    const postToy = toy => {
  
        fetch (`http://localhost:3000/toys`, {
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(toy)
        }).then(resp => resp.json())
      }

//      //fetch data from localhost
       const init = () => {
       fetch ('http://localhost:3000/toys')
       .then(r => r.json())
       .then(toys => renderToys(toys))
     }
     
     init();
     const deleteToy = id => 
       fetch(`http://localhost:3000/toys/${id}`, {
           method: 'DELETE'
       }).then(r => r.json(toy))