export default class Articulo{
    constructor(articulo){
        this._codigo = articulo.codigo;
        this._nombre = articulo.nombre;
        this._precio = articulo.precio;
        this._cantidad = articulo.cantidad;
        this._descripcion = articulo.descripcion;
    }

    get codigo(){
        return this._codigo;
    }

    get nombre(){
        return this._nombre;
    }

    get precio(){
        return this._precio;
    }

    get cantidad(){
        return this._cantidad;
    }

    get descripcion(){
        return this._descripcion;
    }

    set codigo(codigo){
        this._codigo = codigo;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set precio(precio){
        this._precio =  precio;
    }

    set cantidad(cantidad){
        this._cantidad = cantidad;
    }

    set descripcion(descripcion){
        this._descripcion = descripcion;
    }
}