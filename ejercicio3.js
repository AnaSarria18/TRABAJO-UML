class Producto {
    constructor(nombre, precio, cantidad, existencia) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.existencia = existencia;
    }
}

class Pago {
    constructor(fecha, monto) {
        this.fecha = fecha;
        this.monto = monto;
    }
}

class Pedido {
    constructor(fecha) {
        this.fecha = fecha;
        this.estado = "pendiente";
        this.productos = [];
        this.pagos = [];
        this.impuesto = 20;
    }

    agregarProducto(producto){
        this.productos.push(producto);
        producto.existencia -= producto.cantidad;
    }

    agregarPago(pago) {
        this.pagos.push(pago);
        this.calcularTotal();
        if (this.total >= this.calcularTotalPagado()) {
            this.estado = "pagado";
        }
    }

    calcularTotal() {
        let total = 0;
        for (let i = 0; i < this.productos.length; i++) {
            total += this.productos[i].precio * this.productos[i].cantidad   
 * (1 + this.impuesto);
        }
        this.total = total;
        return total;
    }

    calcularTotalPagado() {
        let totalPagado = 0;
        for (let i = 0; i < this.pagos.length; i++) {
            totalPagado += this.pagos[i].monto;
        }
        return totalPagado;
    }
    mostrarPedido(){
        console.log(this.fecha , this.pagos, this.productos)
    }
}


class Cliente {
    constructor(nombre, direccion, telefono, email) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
        this.pedidos = []
    }
    agregarPedido(pedidnuevo){
        cliente1.pedidos.push(pedidnuevo);
    }
    mostrarInformacion() {
        console.log("Información del Cliente:" + "Nombre:", this.nombre + "Dirección:", this.direccion + "Teléfono:", this.telefono + "Correo electrónico:", this.email + "Pedidos:"  );
        for (let i = 0; i < this.pedidos.length; i++) {
            let pedido = this.pedidos[i];
            console.log(`  ${i+1}. Fecha: ${pedido.producto}, Producto: ${pedido.nombre}, Cantidad: ${Producto.cantidad}`);
        }
    }

}


let producto1 = new Producto("jabon", 15000, 40, 20);
let producto2 = new Producto("suavitel", 10000, 15, 40);


let pedido1 = new Pedido("2024-04-12");


pedido1.agregarProducto(producto1);
pedido1.agregarProducto(producto2);


let pago1 = new Pago("2024-04-25", 20000);


pedido1.agregarPago(pago1);


pedido1.mostrarPedido()
let cliente1 = new Cliente("Sofia Paz", "Avenida 58", "3125847965", "sofia@gmail.com");
cliente1.agregarPedido(pedido1)


cliente1.mostrarInformacion();

