const users = [
    {
       id:  1, 
       nombre: 'Ronnie',
       apellido: 'Santoyo'
    },
    {
       id:  2, 
       nombre: 'Augusto',
       apellido: 'Santoyo'
    },
    {
       id:  3, 
       nombre: 'William',
       apellido: 'Santoyo'
    },
    {
       id:  4, 
       nombre: 'Oliver',
       apellido: 'Santoyo'
    },
    {
       id:  5, 
       nombre: 'Harold',
       apellido: 'Santoyo'
    },
   
]
const cajita=document.querySelector('.cajita')

for (let i = 0; i < users.length; i++) {
  
   cajita.innerHTML+= "<li>"+users[i].nombre+"</li>";
   
    console.log(users[i].nombre)
  
   
    
}