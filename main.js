import Inventario from "./Inventario.js";
import Articulo from "./Articulo.js";

class Main {
  constructor() {
    let inventario = new Inventario(
      document.querySelector("#producto"),
      document.querySelector("#info")
    );

    document.querySelector("#btnAdd").addEventListener("click", () => {
      let form = document.querySelector("#form");

      if (form.checkValidity() === true) {
        let codigo = document.querySelector("#codigo").value;
        let nombre = document.querySelector("#nombre").value;
        let precio = document.querySelector("#precio").value;
        let cantidad = document.querySelector("#cantidad").value;
        let descripcion = document.querySelector("#descripcion").value;


        let objArticulo = {
          codigo : codigo,
          nombre : nombre,
          precio : precio,
          cantidad : cantidad,
          descripcion : descripcion
        };

        let articulo = new Articulo(objArticulo);

        inventario._addToTable(articulo);
      }

      form.classList.add("was-validated");
    });
  }
}

let m = new Main();