// Formatos e imágenes simuladas
const imagenes = {
    tabletas: "https://via.placeholder.com/400x400.png?text=Vitamina+C+Tabletas",
    efervescente: "https://via.placeholder.com/400x400.png?text=Vitamina+C+Efervescente",
    gomitas: "https://via.placeholder.com/400x400.png?text=Vitamina+C+Gomitas"
  };
  
  const formatoSelect = document.getElementById("formatoSelect");
  const productImage = document.getElementById("productImage");
  const reviewsList = document.getElementById("reviewsList");
  
  // Cambiar imagen al cambiar formato
  formatoSelect.addEventListener("change", () => {
    const formato = formatoSelect.value;
    productImage.src = imagenes[formato];
  });
  
  // Cargar reseñas desde JSON
  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      data.reseñas.forEach(review => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${review.usuario}</strong>: ${review.texto} ⭐${review.rating}`;
        reviewsList.appendChild(li);
      });
    })
    .catch(err => {
      reviewsList.innerHTML = "<li>No se pudieron cargar las reseñas.</li>";
      console.error("Error cargando reseñas:", err);
    });
  