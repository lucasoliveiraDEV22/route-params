/* 
    -Query Params => meusite.com/users?name=rodolfo&age=28//FILTROS
    -Route Params => /users/2 //BUSCAR, DELETAR OU ATUALIZAR ALGO ESPECÍFICO
*/

const port = 3000
const express = require ('express')
const app = express ()
app.get ('/users/:id', (request, response) => {
    // const name = request.query.name
    // const age = request.query.age
    // console.log (name,age)
    const {id} = request.params
    console.log (id)
    //console.log (request)
    return response.send ('Hello Express')
})
app.listen (port, () =>  {
    console.log('🚀 Server started on port 3000')
})