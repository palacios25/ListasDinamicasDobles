import Articulo from "./Articulo.js";

export default class Inventario {
    constructor(tableProducto, tableInfo) {
        this._tableProducto = tableProducto;
        this._tableInfo = tableInfo;
        this._numProductos = 0;
        this._productos = "";
        this._inicio = null;
        this._ultimo = null;
        this._temporal = null;
        this._contador = 0;

        
    }

    get inicio(){
        return this._inicio;
    }

    get temporal(){
        return this._temporal;
    }

    set inicio(inicio){
        this._inicio = inicio;
    }

    set temporal(temporal){
        this._temporal = temporal;
    }

    toString(){
        return "(" + this._articulos + ")";
    }
    


    _addDeleteToRow(row, articulo){

        let btnDelete = document.createElement("input");
        btnDelete.type = "button";
        btnDelete.value = "Eliminar";
        btnDelete.className = "btn btn-danger";
        btnDelete.addEventListener("click", () => {
          this._deleteArticulo(row, articulo);
        });
    
        row.cells[5].innerHTML = "";
        row.cells[5].appendChild(btnDelete);
      }
    
    _deleteArticulo(row, articulo){
        Swal.fire({
          type: "question",
          title: "Eliminar articulo",
          text: articulo.nombre,
          showCancelButton: true,
          confirmButtonText: "Si",
          cancelButtonText: "No"
        }).then(result => {
          if(result.value){
            let pos = this._findArticulo(articulo.codigo);
            if(pos == this.inicio){
                this.inicio = pos.siguiente;
            } else {
                let pos1 = this._findArticulo(articulo.codigo);
                pos.siguiente.anterior = pos1;
                pos1.siguiente = pos.siguiente;
            }
            row.remove();
            console.log("objeto borrado: ");
            console.log(this._inicio);
          } 
        });
    }
    
      _addToTable(articulo) {
        let row = this._tableProducto.insertRow(-1);
    
        let cellCodigo = row.insertCell(0);
        let cellNombre = row.insertCell(1);
        let cellPrecio = row.insertCell(2);
        let cellCantidad = row.insertCell(3);
        let cellDescripcion = row.insertCell(4);
        row.insertCell(5);
       
    
        cellCodigo.innerHTML = articulo.codigo;
        cellNombre.innerHTML = articulo.nombre;
        cellPrecio.innerHTML = articulo.precio;
        cellCantidad.innerHTML = articulo.cantidad;
        cellDescripcion.innerHTML = articulo.descripcion;
        this._addDeleteToRow(row, articulo);
    
        this._numProductos += parseInt(articulo.cantidad);
        this._productos += articulo.nombre + "<br>";
        
        this._tableInfo.rows[0].cells[1].innerHTML = this._numProductos;
        this._tableInfo.rows[1].cells[1].innerHTML = this._productos;

        let objArticulo = {
        codigo : articulo.codigo,
        nombre : articulo.nombre,
        precio : articulo.precio,
        cantidad : articulo.cantidad,
        descripcion : articulo.descripcion
      }; 
      console.log(objArticulo);
      return objArticulo;

      
    }


    addArticulo(objArticulo){
        if (this._inicio == null) {
            this._inicio = objArticulo;
            this._ultimo = objArticulo;
            this._contador++;
        } else {
            let anterior = this._ultimo;
            this._ultimo.siguiente = objArticulo;
            this._ultimo = objArticulo;
            this.ultimo.anterior =  anterior;
            this._contador++;
            
        }
        console.log(this._inicio);
    }


    _findArticulo(codigo){
        let result = this._inicio;
        while(result.codigo != codigo){
            result = buscar.siguiente;
        }
        return result;
      }

}