function calcularVentas() {
    const productos = [
      { nombre: "Aqua", precio: 200 },
      { nombre: "Emoción", precio: 180 },
      { nombre: "Alegría", precio: 160 },
      { nombre: "Frescura", precio: 150 }
    ];
  
    const juana = {
      nombre: "Juana",
      ventas: [
        parseInt(document.getElementById("1cantidad-aqua").value),
        parseInt(document.getElementById("1cantidad-emocion").value),
        parseInt(document.getElementById("1cantidad-alegria").value),
        parseInt(document.getElementById("1cantidad-frescura").value)
      ]
    };
  
    const pedro = {
      nombre: "Pedro",
      ventas: [
        parseInt(document.getElementById("2cantidad-aqua").value),
        parseInt(document.getElementById("2cantidad-emocion").value),
        parseInt(document.getElementById("2cantidad-alegria").value),
        parseInt(document.getElementById("2cantidad-frescura").value)
      ]
    };
  
    const vendedores = [juana, pedro];
  
    let totalVentasJuana = 0;
    let totalVentasPedro = 0;
  
    for (let i = 0; i < productos.length; i++) {
      totalVentasJuana += productos[i].precio * juana.ventas[i];
      totalVentasPedro += productos[i].precio * pedro.ventas[i];
    }
  
    let empleadoDelMes = "";
    if (totalVentasJuana > totalVentasPedro) {
      empleadoDelMes = juana.nombre;
    } else if (totalVentasPedro > totalVentasJuana) {
      empleadoDelMes = pedro.nombre;
    } else {
      empleadoDelMes = "Empate";
    }
  
    const resultado = `
      Cantidad de perfumes vendidos por Juana: ${juana.ventas.join(", ")}<br>
      Cantidad de perfumes vendidos por Pedro: ${pedro.ventas.join(", ")}<br>
      Total de ventas de Juana: ${totalVentasJuana} USD<br>
      Total de ventas de Pedro: ${totalVentasPedro} USD<br>
      Empleado del Mes: ${empleadoDelMes} 💪`;
  
    document.getElementById("resultado").innerHTML = resultado;
  }
