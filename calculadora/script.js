let continuar = true;

while (continuar) {
  alert("Calculadora de 2 numeros");
  let primerNumero = prompt("Ingrese el primer numero");

  if (!isNaN(primerNumero) && !(primerNumero.trim()==='')) {
    let segundoNumero = prompt("Ingrese el segundo numero");

    if (!isNaN(segundoNumero) && !(segundoNumero.trim()==='')) {
      let opcion = prompt("Ingrese el numero para seleccionar una opcion\n1.Suma\n2.Resta\n3.Multiplicacion\n4.Division\nPresione 'e' para salir");

      switch (opcion) {
        case "1":
          alert("El total de la suma es: " + (parseFloat(primerNumero) + parseFloat(segundoNumero)))
          break;

        case "2":
          alert("El total de la resta es: " + (parseFloat(primerNumero) - parseFloat(segundoNumero)))
          break;

        case "3":
          alert("El total de la multiplicacion es: " + (parseFloat(primerNumero) * parseFloat(segundoNumero)))
          break;

        case "4":
          alert("El total de la division es: " + (parseFloat(primerNumero) / parseFloat(segundoNumero)))
          break;

        case "e":
          continuar = false;
          break;

        default:
          alert("No digitó una opción correcta");
          break;
      }
    } else {
      alert("El segundo número ingresado no es válido.");
    }
  } else {
    alert("El primer número ingresado no es válido.");
  }
}

