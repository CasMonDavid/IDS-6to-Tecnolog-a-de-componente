// DAVID ALEJANDRO CASTRO MONTAÑO
// COMPONENTE USER CON LOS METODOS DE DIRECCIONAMIENTO GET, POST, PUT, DELETE
// 22/04/2024

var express = require('express');
var router = express.Router();

var users = [
  {
    id: 1,
    name: 'John',
    email: 'john@gmail.com'
  },
  {
    id: 2,
    name: 'Jane',
    email: 'jane@gmail.com'
  },
  {
    id: 3,
    name: 'Armando',
    email: 'ecomoda@gmail.com'
  },
  {
    id: 4,
    name: 'Alondra',
    email: 'solluna@gmail.com'
  }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

router.post('/', function(req, res, next){
  var newUser = req.body;
  users.push(newUser);
  res.send('Se añadio al nuevo usuario con exito!');
})

//OBTIENE UN JSON DONDE SE BUSCA ACTUALIZAR LOS DATOS DE UN ID
router.put('/', function(req, res, next){
  const id = parseInt(req.body.id);
  const updateEmail = req.body.email;

  const isExistObject = users.find(obj => obj.id === id)

  if (isExistObject) {
    isExistObject.email = updateEmail;
    res.send('Se actualizo el email del id: '+id+' con exito!');
  }else{
    res.send('No se encontro el id: '+id);
  }
});

router.delete('/', function(req, res, next){
  const id = parseInt(req.body.id);

  const isExistObject = users.find(obj => obj.id === id)

  if (isExistObject) {
    users = users.filter(obj => obj.id !== id);
    res.send('Se borro el usuario del id: '+id+' con exito!');
  }else{
    res.send('No se encontro el id: '+id);
  }
})

module.exports = router;
