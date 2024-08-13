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
        this.impuesto = 0.20;
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
    mostrarPedido() {
        let info = `Fecha del Pedido: ${this.fecha}`;
        info += 'Pagos:';
        for (let i = 0; i < this.pagos.length; i++) {
            info += `  Fecha: ${this.pagos[i].fecha}, Monto: ${this.pagos[i].monto}`;
        }
        info += 'Productos:';
        for (let i = 0; i < this.productos.length; i++) {
            info += `  Nombre: ${this.productos[i].nombre}, Precio: ${this.productos[i].precio}, Cantidad: ${this.productos[i].cantidad}`;
        }
        console.log(info);
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
        this.pedidos.push(pedidnuevo);
        
    }
   
    mostrarInformacion() {
        console.log("Información del Cliente:", "Nombre:", this.nombre, "Dirección:", this.direccion, "Teléfono:", this.telefono, "Correo electrónico:", this.email);
        console.log("Pedidos:");
        for (let i = 0; i < this.pedidos.length; i++) {
            let pedido = this.pedidos[i];
            console.log(`  ${i+1}. Fecha: ${pedido.fecha}`);
            for (let j = 0; j < pedido.productos.length; j++) {
                let producto = pedido.productos[j];
                console.log(`    - Nombre: ${producto.nombre}, Precio: ${producto.precio}, Cantidad: ${producto.cantidad}`);
            }
            console.log(`    - Total: ${pedido.calcularTotal()}`);
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


