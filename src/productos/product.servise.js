import Productos from './Productos'


export function getAllProducts(marcaId) {
  return new Promise((resolve) => {
    setTimeout(() => { 
        if (marcaId) {
          resolve(Productos.filter((product) => product.marca === marcaId));
        } else {
          resolve(Productos);
        }
    }, 0);
    });
}

export function getProductById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {      
        resolve(Productos.find((x) => x.id === id));
    }, 0);
  });
}