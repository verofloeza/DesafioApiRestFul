const DB_PRODUCTOS = [
    {
      "id": 1,
      "title": "Producto 1",
      "precio": 200,
      "thumbnail": "https://pbs.twimg.com/profile_images/464182833364234240/Wc3ljeQU_400x400.jpeg"
    },
    {
      "id": 2,
      "title": "Producto 2",
      "precio": 400,
      "thumbnail": "https://pbs.twimg.com/profile_images/464182833364234240/Wc3ljeQU_400x400.jpeg"
    },
    {
      "id": 3,
      "title": "Producto 3",
      "precio": 500,
      "thumbnail": "https://pbs.twimg.com/profile_images/464182833364234240/Wc3ljeQU_400x400.jpeg"
    },
    {
      "id": 4,
      "title": "Producto 4",
      "precio": 200,
      "thumbnail": "https://pbs.twimg.com/profile_images/464182833364234240/Wc3ljeQU_400x400.jpeg"
    },
    {
      "id": 5,
      "title": "Producto 5",
      "precio": 400,
      "thumbnail": "https://pbs.twimg.com/profile_images/464182833364234240/Wc3ljeQU_400x400.jpeg"
    },
    {
      "id": 6,
      "title": "Producto 6",
      "precio": 500,
      "thumbnail": "https://pbs.twimg.com/profile_images/464182833364234240/Wc3ljeQU_400x400.jpeg"
    }
  
  ];

class Productos{
    constructor(){};
    
    getAll(){
        return DB_PRODUCTOS;
    };

    postProd(array){
        let cant= DB_PRODUCTOS.length;
        let idprod= parseInt(cant)+1;
        DB_PRODUCTOS.push({ id: idprod, data: array});
         return { id: idprod, data: array};
    }
    getProd(idProd){
        let producto = DB_PRODUCTOS.filter( i => i.id === parseInt(idProd))
        if(producto.length === 0){
            return "Producto no encontrado";
        }else{
            return producto;
        }
    }
    putProd(idProd, cuerpo){
        const index = DB_PRODUCTOS.findIndex(proj => proj.id == parseInt(idProd));
        DB_PRODUCTOS[index] = cuerpo;
        console.log(DB_PRODUCTOS[index]);
        if (index >= 0) {
          DB_PRODUCTOS[index].title = cuerpo.title
          DB_PRODUCTOS[index].price = cuerpo.price
          DB_PRODUCTOS[index].thumbnail = cuerpo.thumbnail

          return DB_PRODUCTOS[index];
          }else{
            return "Producto no encontrado";
          }
        
    }
    deleteProd(idProd){
        const index = DB_PRODUCTOS.findIndex(proj => proj.id == parseInt(idProd));
        console.log(index)
        if (index >= 0) {
            DB_PRODUCTOS.splice(index, 1)
           return DB_PRODUCTOS; 
        }else{
          return "Producto no encontrado";
        }
        
    }
};

module.exports = Productos;