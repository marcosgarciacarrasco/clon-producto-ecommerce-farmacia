// Formatos e imágenes simuladas
const imagenes = {
    tabletas: "https://images.unsplash.com/photo-1588776814546-f1d1fdfc48b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    efervescente: "https://images.unsplash.com/photo-1603398938378-d2051ccefa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    gomitas: "https://images.unsplash.com/photo-1611175694987-2f87112fcaa1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
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
  