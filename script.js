

document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll("#dataTable tbody tr");
  const viewButton = document.getElementById("ver-seleccion");

  let selectedRow = null;

  rows.forEach((row) => {
    row.addEventListener("click", () => {
      if (selectedRow) {
        selectedRow.style.backgroundColor = ""; // Quita selección previa
      }
      selectedRow = row;
      row.style.backgroundColor = "#d0f0c0"; // Verde claro como selección
    });
  });

  viewButton.addEventListener("click", () => {
    if (selectedRow) {
      const rowData = Array.from(selectedRow.children).map((cell) => cell.textContent);
      alert(`Datos seleccionados: ${rowData.join(", ")}`);
    } else {
      alert("No hay ninguna fila seleccionada.");
    }
  });
});
