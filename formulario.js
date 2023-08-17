
const formulario = document.getElementById("formulario");
const inputX = document.getElementById("X");

formulario.addEventListener("submit", async function (event) {
  event.preventDefault();

  const X = inputX.value;

  try {
    await addDoc(collection(firestore, "Z"), {
      Y: X
    });
  } catch (error) {
    console.error("Error al agregar datos", error);
  }
});

// Explicacion (X, Y, Z) 
X hace referencia al "id" (#) del input de entrada de datos
inputX hace referencia al elemento "input" + el atributo id que posee
Y hace referencia al nombre de campo (base de datos)
Z hace referencia al nombre de la colección (base de datos)
