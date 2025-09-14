function funcion1() {
    // Datos de inversión para Bs (ejemplo)
    const inversionesBs = {
        semana15: 0,
        semana16: 0,
        semana17: 0,
        semana18: 0,
        semana19: 0,
        semana20: 0,
        semana21: 0,
        semana22: 0,
        semana23: 0,
        semana24: 0,
        semana25: 0,
        semana26: 0,
        semana27: 0,
        semana28: 0,
        semana29: 0,
        semana30: 0,
        semana31: 0,
        semana32: 0,
        semana33: 0,
        semana34: 0,
        semana35: 0,
        semana36: 0,
        semana37: 0,
        semana38: 0,
        semana39: 0,
        semana40: 0,
        semana41: 0,
        semana42: 0,
        semana43: 0,
        semana44: 0,
        semana45: 0,
        semana46: 0,
        semana47: 0,
        semana48: 0,
        semana49: 0,
        semana50: 0,
        semana51: 0,
        semana52: 0
    };
    // Función para calcular el total de inversión
    function calcularTotalInversion(inversiones) {
        return Object.values(inversiones).reduce((total, monto) => total + monto, 0);
    }
    // Actualiza el valor en la página (Bs)
    document.getElementById('semanaBs-15').appendChild(crearNodoTexto(inversionesBs.semana15));
    document.getElementById('semanaBs-16').appendChild(crearNodoTexto(inversionesBs.semana16));
    document.getElementById('semanaBs-17').appendChild(crearNodoTexto(inversionesBs.semana17));
    document.getElementById('semanaBs-18').appendChild(crearNodoTexto(inversionesBs.semana18));
    document.getElementById('semanaBs-19').appendChild(crearNodoTexto(inversionesBs.semana19));
    document.getElementById('semanaBs-20').appendChild(crearNodoTexto(inversionesBs.semana20));
    document.getElementById('semanaBs-21').appendChild(crearNodoTexto(inversionesBs.semana21));
    document.getElementById('semanaBs-22').appendChild(crearNodoTexto(inversionesBs.semana22));
    document.getElementById('semanaBs-23').appendChild(crearNodoTexto(inversionesBs.semana23));
    document.getElementById('semanaBs-24').appendChild(crearNodoTexto(inversionesBs.semana24));
    document.getElementById('semanaBs-25').appendChild(crearNodoTexto(inversionesBs.semana25));
    document.getElementById('semanaBs-26').appendChild(crearNodoTexto(inversionesBs.semana26));
    document.getElementById('semanaBs-27').appendChild(crearNodoTexto(inversionesBs.semana27));
    document.getElementById('semanaBs-28').appendChild(crearNodoTexto(inversionesBs.semana28));
    document.getElementById('semanaBs-29').appendChild(crearNodoTexto(inversionesBs.semana29));
    document.getElementById('semanaBs-30').appendChild(crearNodoTexto(inversionesBs.semana30));
    document.getElementById('semanaBs-31').appendChild(crearNodoTexto(inversionesBs.semana31));
    document.getElementById('semanaBs-32').appendChild(crearNodoTexto(inversionesBs.semana32));
    document.getElementById('semanaBs-33').appendChild(crearNodoTexto(inversionesBs.semana33));
    document.getElementById('semanaBs-34').appendChild(crearNodoTexto(inversionesBs.semana34));
    document.getElementById('semanaBs-35').appendChild(crearNodoTexto(inversionesBs.semana35));
    document.getElementById('semanaBs-36').appendChild(crearNodoTexto(inversionesBs.semana36));
    document.getElementById('semanaBs-37').appendChild(crearNodoTexto(inversionesBs.semana37));
    document.getElementById('semanaBs-38').appendChild(crearNodoTexto(inversionesBs.semana38));
    document.getElementById('semanaBs-39').appendChild(crearNodoTexto(inversionesBs.semana39));
    document.getElementById('semanaBs-40').appendChild(crearNodoTexto(inversionesBs.semana40));
    document.getElementById('semanaBs-41').appendChild(crearNodoTexto(inversionesBs.semana41));
    document.getElementById('semanaBs-42').appendChild(crearNodoTexto(inversionesBs.semana42));
    document.getElementById('semanaBs-43').appendChild(crearNodoTexto(inversionesBs.semana43));
    document.getElementById('semanaBs-44').appendChild(crearNodoTexto(inversionesBs.semana44));
    document.getElementById('semanaBs-45').appendChild(crearNodoTexto(inversionesBs.semana45));
    document.getElementById('semanaBs-46').appendChild(crearNodoTexto(inversionesBs.semana46));
    document.getElementById('semanaBs-47').appendChild(crearNodoTexto(inversionesBs.semana47));
    document.getElementById('semanaBs-48').appendChild(crearNodoTexto(inversionesBs.semana48));
    document.getElementById('semanaBs-49').appendChild(crearNodoTexto(inversionesBs.semana49));
    document.getElementById('semanaBs-50').appendChild(crearNodoTexto(inversionesBs.semana50));
    document.getElementById('semanaBs-51').appendChild(crearNodoTexto(inversionesBs.semana51));
    document.getElementById('semanaBs-52').appendChild(crearNodoTexto(inversionesBs.semana52));
    // Calcula y muestra el total (Bs)
    const totalInversionBs = calcularTotalInversion(inversionesBs);
    console.log(`Total de inversión de Bs.: Bs. ${totalInversionBs}`);
    // Función para crear un nodo de texto con "Bs."
    function crearNodoTexto(valor) {
        const nodoTexto = document.createTextNode(`Bs. ${valor}`);
        return nodoTexto;
    }
    // Función para calcular el total de inversión por mes
    function calcularTotalMes(inversiones, inicioSemana, finSemana) {
        const valoresMes = Object.values(inversiones).slice(inicioSemana - 15, finSemana - 14);
        return valoresMes.reduce((total, monto) => total + monto, 0);
    }
    // Calcula y muestra los totales mensuales
    const totalAbril = calcularTotalMes(inversionesBs, 15, 18);
    const totalMayo = calcularTotalMes(inversionesBs, 19, 22);
    const totalJunio = calcularTotalMes(inversionesBs, 23, 27);
    const totalJulio = calcularTotalMes(inversionesBs, 28, 31);
    const totalAgosto = calcularTotalMes(inversionesBs, 32, 36);
    const totalSeptiembre = calcularTotalMes(inversionesBs, 37, 40);
    const totalOctubre = calcularTotalMes(inversionesBs, 41, 44);
    const totalNoviembre = calcularTotalMes(inversionesBs, 45, 48);
    const totalDiciembre = calcularTotalMes(inversionesBs, 49, 52);
    document.getElementById('totalBs-abril').appendChild(crearNodoTexto(totalAbril));
    document.getElementById('totalBs-mayo').appendChild(crearNodoTexto(totalMayo));
    document.getElementById('totalBs-junio').appendChild(crearNodoTexto(totalJunio));
    document.getElementById('totalBs-julio').appendChild(crearNodoTexto(totalJulio));
    document.getElementById('totalBs-agosto').appendChild(crearNodoTexto(totalAgosto));
    document.getElementById('totalBs-septiembre').appendChild(crearNodoTexto(totalSeptiembre));
    document.getElementById('totalBs-octubre').appendChild(crearNodoTexto(totalOctubre));
    document.getElementById('totalBs-noviembre').appendChild(crearNodoTexto(totalNoviembre));
    document.getElementById('totalBs-diciembre').appendChild(crearNodoTexto(totalDiciembre));
    // Calcula el sub-total (suma de los totales mensuales)
    const subTotalBs = totalAbril + totalMayo + totalJunio + totalJulio + totalAgosto + totalSeptiembre + totalOctubre + totalNoviembre + totalDiciembre;
    // Interés (constante 0.00)
    const interesBs = 0;
    // Total final (sub-total + interés)
    const totalFinalBs = subTotalBs + interesBs;
    // Muestra el sub-total
    document.getElementById('Bs-subtotal').appendChild(crearNodoTexto(subTotalBs));
    // Muestra el interés
    document.getElementById('Bs-interes').appendChild(crearNodoTexto(interesBs));
    // Muestra el total final
    document.getElementById('Bs-total').appendChild(crearNodoTexto(totalFinalBs));
    // Password check (replace with server-side authentication)
    const password = prompt("Ingrese la contraseña:");
    if (password !== "20124815emml")
    if (password !== "Jehova") {
        alert("Contraseña incorrecta. Acceso denegado.");
        return; // Prevent further code execution if password is wrong
    }
    // Muestra el contenido si la contraseña es correcta
    document.getElementById("contenido").style.display = "block";
}
function funcion2() {
  // Datos de inversión para $ (ejemplo)
  const inversiones$ = {
    semana15: 15,
    semana16: 15,
    semana17: 10,
    semana18: 10,
    semana19: 20,
    semana20: 10,
    semana21: 10,
    semana22: 10,
    semana23: 10,
    semana24: 10,
    semana25: 10,
    semana26: 10,
    semana27: 10,
    semana28: 25,
    semana29: 25,
    semana30: 20,
    semana31: 10,
    semana32: 10,
    semana33: 0,
    semana34: 0,
    semana35: 0,
    semana36: 9,
    semana37: 0,
    semana38: 0,
    semana39: 0,
    semana40: 0,
    semana41: 0,
    semana42: 0,
    semana43: 0,
    semana44: 0,
    semana45: 0,
    semana46: 0,
    semana47: 0,
    semana48: 0,
    semana49: 0,
    semana50: 0,
    semana51: 0,
    semana52: 0
    // ... Agrega más semanas
  };
  // Función para calcular el total de inversión
  function calcularTotalInversion(inversiones) {
    return Object.values(inversiones).reduce((total, monto) => total + monto, 0);
  }
  // Actualiza el valor en la página ($)
  document.getElementById('semana$-15').appendChild(crearNodoTexto(inversiones$.semana15));
  document.getElementById('semana$-16').appendChild(crearNodoTexto(inversiones$.semana16));
  document.getElementById('semana$-17').appendChild(crearNodoTexto(inversiones$.semana17));
  document.getElementById('semana$-18').appendChild(crearNodoTexto(inversiones$.semana18));
  document.getElementById('semana$-19').appendChild(crearNodoTexto(inversiones$.semana19));
  document.getElementById('semana$-20').appendChild(crearNodoTexto(inversiones$.semana20));
  document.getElementById('semana$-21').appendChild(crearNodoTexto(inversiones$.semana21));
  document.getElementById('semana$-22').appendChild(crearNodoTexto(inversiones$.semana22));
  document.getElementById('semana$-23').appendChild(crearNodoTexto(inversiones$.semana23));
  document.getElementById('semana$-24').appendChild(crearNodoTexto(inversiones$.semana24));
  document.getElementById('semana$-25').appendChild(crearNodoTexto(inversiones$.semana25));
  document.getElementById('semana$-26').appendChild(crearNodoTexto(inversiones$.semana26));
  document.getElementById('semana$-27').appendChild(crearNodoTexto(inversiones$.semana27));
  document.getElementById('semana$-28').appendChild(crearNodoTexto(inversiones$.semana28));
  document.getElementById('semana$-29').appendChild(crearNodoTexto(inversiones$.semana29));
  document.getElementById('semana$-30').appendChild(crearNodoTexto(inversiones$.semana30));
  document.getElementById('semana$-31').appendChild(crearNodoTexto(inversiones$.semana31));
  document.getElementById('semana$-32').appendChild(crearNodoTexto(inversiones$.semana32));
  document.getElementById('semana$-33').appendChild(crearNodoTexto(inversiones$.semana33));
  document.getElementById('semana$-34').appendChild(crearNodoTexto(inversiones$.semana34));
  document.getElementById('semana$-35').appendChild(crearNodoTexto(inversiones$.semana35));
  document.getElementById('semana$-36').appendChild(crearNodoTexto(inversiones$.semana36));
  document.getElementById('semana$-37').appendChild(crearNodoTexto(inversiones$.semana37));
  document.getElementById('semana$-38').appendChild(crearNodoTexto(inversiones$.semana38));
  document.getElementById('semana$-39').appendChild(crearNodoTexto(inversiones$.semana39));
  document.getElementById('semana$-40').appendChild(crearNodoTexto(inversiones$.semana40));
  document.getElementById('semana$-41').appendChild(crearNodoTexto(inversiones$.semana41));
  document.getElementById('semana$-42').appendChild(crearNodoTexto(inversiones$.semana42));
  document.getElementById('semana$-43').appendChild(crearNodoTexto(inversiones$.semana43));
  document.getElementById('semana$-44').appendChild(crearNodoTexto(inversiones$.semana44));
  document.getElementById('semana$-45').appendChild(crearNodoTexto(inversiones$.semana45));
  document.getElementById('semana$-46').appendChild(crearNodoTexto(inversiones$.semana46));
  document.getElementById('semana$-47').appendChild(crearNodoTexto(inversiones$.semana47));
  document.getElementById('semana$-48').appendChild(crearNodoTexto(inversiones$.semana48));
  document.getElementById('semana$-49').appendChild(crearNodoTexto(inversiones$.semana49));
  document.getElementById('semana$-50').appendChild(crearNodoTexto(inversiones$.semana50));
  document.getElementById('semana$-51').appendChild(crearNodoTexto(inversiones$.semana51));
  document.getElementById('semana$-52').appendChild(crearNodoTexto(inversiones$.semana52));
  // Calcula y muestra el total ($)
  const totalInversion$ = calcularTotalInversion(inversiones$);
  console.log(`Total de inversión de $: ${totalInversion$}`);
  function crearNodoTexto(valor) {
    const nodoTexto = document.createTextNode(`$ ${valor}`);
    return nodoTexto;
  }
  // Función para calcular el total de inversión por mes
  function calcularTotalMes(inversiones, inicioSemana, finSemana) {
    const valoresMes = Object.values(inversiones).slice(inicioSemana - 15, finSemana - 14);
    return valoresMes.reduce((total, monto) => total + monto, 0);
  }
  // Calcula y muestra los totales mensuales
  const totalAbril = calcularTotalMes(inversiones$, 15, 18);
  const totalMayo = calcularTotalMes(inversiones$, 19, 22);
  const totalJunio = calcularTotalMes(inversiones$, 23, 27);
  const totalJulio = calcularTotalMes(inversiones$, 28, 31);
  const totalAgosto = calcularTotalMes(inversiones$, 32, 36);
  const totalSeptiembre = calcularTotalMes(inversiones$, 37, 40);
  const totalOctubre = calcularTotalMes(inversiones$, 41, 44);
  const totalNoviembre = calcularTotalMes(inversiones$, 45, 48);
  const totalDiciembre = calcularTotalMes(inversiones$, 49, 52);
  document.getElementById('total$-abril').appendChild(crearNodoTexto(`${totalAbril}`));
  document.getElementById('total$-mayo').appendChild(crearNodoTexto(`${totalMayo}`));
  document.getElementById('total$-junio').appendChild(crearNodoTexto(`${totalJunio}`));
  document.getElementById('total$-julio').appendChild(crearNodoTexto(`${totalJulio}`));
  document.getElementById('total$-agosto').appendChild(crearNodoTexto(`${totalAgosto}`));
  document.getElementById('total$-septiembre').appendChild(crearNodoTexto(`${totalSeptiembre}`));
  document.getElementById('total$-octubre').appendChild(crearNodoTexto(`${totalOctubre}`));
  document.getElementById('total$-noviembre').appendChild(crearNodoTexto(`${totalNoviembre}`));
  document.getElementById('total$-diciembre').appendChild(crearNodoTexto(`${totalDiciembre}`));
  // Calcula el sub-total (suma de los totales mensuales)
  const subTotal$ = totalAbril + totalMayo + totalJunio + totalJulio + totalAgosto + totalSeptiembre + totalOctubre + totalNoviembre + totalDiciembre;
  // Interés (constante = $0.00)
  const interes$ = 0;
  // Total final (sub-total + interés)
  const totalFinal$ = subTotal$ + interes$;
  // Muestra el sub-total
  document.getElementById('$-subtotal').appendChild(crearNodoTexto(`${subTotal$}`));
  // Muestra el interés
  document.getElementById('$-interes').appendChild(crearNodoTexto(`${interes$}`));
  // Muestra el total final
  document.getElementById('$-total').appendChild(crearNodoTexto(`${totalFinal$}`));   
}


function funcion3() {
  // Datos de inversión para T (ejemplo)
  const inversionesT = {
    semana15: 0,
    semana16: 0,
    semana17: 0,
    semana18: 0,
    semana19: 0,
    semana20: 0,
    semana21: 0,
    semana22: 0,
    semana23: 0,
    semana24: 0,
    semana25: 0,
    semana26: 0,
    semana27: 0,
    semana28: 0,
    semana29: 0,
    semana30: 0,
    semana31: 0,
    semana32: 0,
    semana33: 20,
    semana34: 15,
    semana35: 15,
    semana36: 0,
    semana37: 0,
    semana38: 0,
    semana39: 0,
    semana40: 0,
    semana41: 0,
    semana42: 0,
    semana43: 0,
    semana44: 0,
    semana45: 0,
    semana46: 0,
    semana47: 0,
    semana48: 0,
    semana49: 0,
    semana50: 0,
    semana51: 0,
    semana52: 0
    // ... Agrega más semanas
  };
  // Función para calcular el total de inversión
  function calcularTotalInversion(inversiones) {
    return Object.values(inversiones).reduce((total, monto) => total + monto, 0);
  }
  // Actualiza el valor en la página (T)
  document.getElementById('semanaT-15').appendChild(crearNodoTexto(inversionesT.semana15));
  document.getElementById('semanaT-16').appendChild(crearNodoTexto(inversionesT.semana16));
  document.getElementById('semanaT-17').appendChild(crearNodoTexto(inversionesT.semana17));
  document.getElementById('semanaT-18').appendChild(crearNodoTexto(inversionesT.semana18));
  document.getElementById('semanaT-19').appendChild(crearNodoTexto(inversionesT.semana19));
  document.getElementById('semanaT-20').appendChild(crearNodoTexto(inversionesT.semana20));
  document.getElementById('semanaT-21').appendChild(crearNodoTexto(inversionesT.semana21));
  document.getElementById('semanaT-22').appendChild(crearNodoTexto(inversionesT.semana22));
  document.getElementById('semanaT-23').appendChild(crearNodoTexto(inversionesT.semana23));
  document.getElementById('semanaT-24').appendChild(crearNodoTexto(inversionesT.semana24));
  document.getElementById('semanaT-25').appendChild(crearNodoTexto(inversionesT.semana25));
  document.getElementById('semanaT-26').appendChild(crearNodoTexto(inversionesT.semana26));
  document.getElementById('semanaT-27').appendChild(crearNodoTexto(inversionesT.semana27));
  document.getElementById('semanaT-28').appendChild(crearNodoTexto(inversionesT.semana28));
  document.getElementById('semanaT-29').appendChild(crearNodoTexto(inversionesT.semana29));
  document.getElementById('semanaT-30').appendChild(crearNodoTexto(inversionesT.semana30));
  document.getElementById('semanaT-31').appendChild(crearNodoTexto(inversionesT.semana31));
  document.getElementById('semanaT-32').appendChild(crearNodoTexto(inversionesT.semana32));
  document.getElementById('semanaT-33').appendChild(crearNodoTexto(inversionesT.semana33));
  document.getElementById('semanaT-34').appendChild(crearNodoTexto(inversionesT.semana34));
  document.getElementById('semanaT-35').appendChild(crearNodoTexto(inversionesT.semana35));
  document.getElementById('semanaT-36').appendChild(crearNodoTexto(inversionesT.semana36));
  document.getElementById('semanaT-37').appendChild(crearNodoTexto(inversionesT.semana37));
  document.getElementById('semanaT-38').appendChild(crearNodoTexto(inversionesT.semana38));
  document.getElementById('semanaT-39').appendChild(crearNodoTexto(inversionesT.semana39));
  document.getElementById('semanaT-40').appendChild(crearNodoTexto(inversionesT.semana40));
  document.getElementById('semanaT-41').appendChild(crearNodoTexto(inversionesT.semana41));
  document.getElementById('semanaT-42').appendChild(crearNodoTexto(inversionesT.semana42));
  document.getElementById('semanaT-43').appendChild(crearNodoTexto(inversionesT.semana43));
  document.getElementById('semanaT-44').appendChild(crearNodoTexto(inversionesT.semana44));
  document.getElementById('semanaT-45').appendChild(crearNodoTexto(inversionesT.semana45));
  document.getElementById('semanaT-46').appendChild(crearNodoTexto(inversionesT.semana46));
  document.getElementById('semanaT-47').appendChild(crearNodoTexto(inversionesT.semana47));
  document.getElementById('semanaT-48').appendChild(crearNodoTexto(inversionesT.semana48));
  document.getElementById('semanaT-49').appendChild(crearNodoTexto(inversionesT.semana49));
  document.getElementById('semanaT-50').appendChild(crearNodoTexto(inversionesT.semana50));
  document.getElementById('semanaT-51').appendChild(crearNodoTexto(inversionesT.semana51));
  document.getElementById('semanaT-52').appendChild(crearNodoTexto(inversionesT.semana52));
// Calcula y muestra el total (T)
  const totalInversionT = calcularTotalInversion(inversionesT);
  console.log(`Total de inversión de T: ${totalInversionT}`);
  function crearNodoTexto(valor) {
    const nodoTexto = document.createTextNode(`T ${valor}`);
    return nodoTexto;
  }
  // Función para calcular el total de inversión por mes
  function calcularTotalMes(inversiones, inicioSemana, finSemana) {
    const valoresMes = Object.values(inversiones).slice(inicioSemana - 15, finSemana - 14);
    return valoresMes.reduce((total, monto) => total + monto, 0);
  }
  // Calcula y muestra los totales mensuales
  const totalAbril = calcularTotalMes(inversionesT, 15, 18);
  const totalMayo = calcularTotalMes(inversionesT, 19, 22);
  const totalJunio = calcularTotalMes(inversionesT, 23, 27);
  const totalJulio = calcularTotalMes(inversionesT, 28, 31);
  const totalAgosto = calcularTotalMes(inversionesT, 32, 36);
  const totalSeptiembre = calcularTotalMes(inversionesT, 37, 40);
  const totalOctubre = calcularTotalMes(inversionesT, 41, 44);
  const totalNoviembre = calcularTotalMes(inversionesT, 45, 48);
  const totalDiciembre = calcularTotalMes(inversionesT, 49, 52);
  document.getElementById('totalT-abril').appendChild(crearNodoTexto(`${totalAbril}`));
  document.getElementById('totalT-mayo').appendChild(crearNodoTexto(`${totalMayo}`));
  document.getElementById('totalT-junio').appendChild(crearNodoTexto(`${totalJunio}`));
  document.getElementById('totalT-julio').appendChild(crearNodoTexto(`${totalJulio}`));
  document.getElementById('totalT-agosto').appendChild(crearNodoTexto(`${totalAgosto}`));
  document.getElementById('totalT-septiembre').appendChild(crearNodoTexto(`${totalSeptiembre}`));
  document.getElementById('totalT-octubre').appendChild(crearNodoTexto(`${totalOctubre}`));
  document.getElementById('totalT-noviembre').appendChild(crearNodoTexto(`${totalNoviembre}`));
  document.getElementById('totalT-diciembre').appendChild(crearNodoTexto(`${totalDiciembre}`));
  // Calcula el sub-total (suma de los totales mensuales)
  const subTotalT = totalAbril + totalMayo + totalJunio + totalJulio + totalAgosto + totalSeptiembre + totalOctubre + totalNoviembre + totalDiciembre;
  // Interés (constante = T0.00)
  const interesT = 0;
  // Total final (sub-total + interés)
  const totalFinalT = subTotalT + interesT;
  // Muestra el sub-total
  document.getElementById('T-subtotal').appendChild(crearNodoTexto(`${subTotalT}`));
  // Muestra el interés
  document.getElementById('T-interes').appendChild(crearNodoTexto(`${interesT}`));
  // Muestra el total final
  document.getElementById('T-total').appendChild(crearNodoTexto(`${totalFinalT}`));
}
