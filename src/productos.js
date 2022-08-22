const DB_PRODUCTOS = [
    {
      "id": 1,
      "title": "Producto 1",
      "price": 200,
      "thumbnail": "https://pbs.twimg.com/profile_images/464182833364234240/Wc3ljeQU_400x400.jpeg"
    },
    {
      "id": 2,
      "title": "Producto 2",
      "price": 400,
      "thumbnail": "https://pbs.twimg.com/profile_images/464182833364234240/Wc3ljeQU_400x400.jpeg"
    },
    {
      "id": 3,
      "title": "Producto 3",
      "price": 500,
      "thumbnail": "https://pbs.twimg.com/profile_images/464182833364234240/Wc3ljeQU_400x400.jpeg"
    },
    {
      "id": 4,
      "title": "Producto 4",
      "price": 200,
      "thumbnail": "https://pbs.twimg.com/profile_images/464182833364234240/Wc3ljeQU_400x400.jpeg"
    },
    {
      "id": 5,
      "title": "Producto 5",
      "price": 400,
      "thumbnail": "https://pbs.twimg.com/profile_images/464182833364234240/Wc3ljeQU_400x400.jpeg"
    },
    {
      "id": 6,
      "title": "Producto 6",
      "price": 500,
      "thumbnail": "https://pbs.twimg.com/profile_images/464182833364234240/Wc3ljeQU_400x400.jpeg"
    }
  
  ];

class Productos{
    constructor(){};
    
    getAll(){
        return DB_PRODUCTOS;
    };

    postProd(datos){
        let cant= DB_PRODUCTOS.length;
        let idprod= cant+1;
        datos = {
          id: idprod,
          ...datos
          
        }
        DB_PRODUCTOS.push(datos);
        return datos
    }
    getProd(idProd){
        let producto = DB_PRODUCTOS.filter( i => i.id == idProd)
        return producto[0];
    }
    putProd(idProd, cuerpo){
      const index = DB_PRODUCTOS.findIndex( i =>i.id == idProd);
      
    if (index >= 0) {
      DB_PRODUCTOS[index].title = cuerpo.title;
      DB_PRODUCTOS[index].price = cuerpo.price;
      DB_PRODUCTOS[index].thumbnail = cuerpo.thumbnail;

    } 
       return  DB_PRODUCTOS[index]; 
    }
    deleteProd(idProd){
        const index = DB_PRODUCTOS.findIndex(i => i.id == idProd);
        if (index >= 0) {
            DB_PRODUCTOS.splice(index, 1)
        }
        return true;
        
    }
};

module.exports = Productos;