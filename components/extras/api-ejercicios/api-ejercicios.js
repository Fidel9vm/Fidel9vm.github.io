document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('muscle-form');
    const select = document.getElementById('muscle-select');
    const exerciseResults = document.getElementById('exercise-results');
  
    // Al cargar la página, obtén la lista de músculos disponibles
    fetch('https://wger.de/api/v2/muscle/')
      .then(response => response.json())
      .then(data => {
        populateMuscleSelect(data.results);
      })
      .catch(error => {
        console.error('Error fetching muscle data:', error);
      });
  
    function populateMuscleSelect(muscles) {
      muscles.forEach(muscle => {
        const option = document.createElement('option');
        option.value = muscle.id; // Usar el ID del músculo como valor
        option.textContent = muscle.name;
        select.appendChild(option);
      });
    }
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const muscleId = select.value; // Obtener el ID del músculo seleccionado
      getExercisesByMuscle(muscleId);
    });
  
    function getExercisesByMuscle(muscleId) {
      const apiUrl = `https://wger.de/api/v2/exercise/?muscles=${muscleId}`;
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          displayExerciseResults(data.results);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  
    function displayExerciseResults(exercises) {
      exerciseResults.innerHTML = ''; // Limpiar resultados anteriores
      if (exercises.length === 0) {
        exerciseResults.innerHTML = 'No se encontraron ejercicios para este músculo.';
      } else {
        const ul = document.createElement('ul');
        exercises.forEach(exercise => {
          const li = document.createElement('li');
          li.textContent = exercise.name;
          ul.appendChild(li);
        });
        exerciseResults.appendChild(ul);
      }
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const emergencyButton = document.getElementById('emergency-button');
    const emergencyModal = document.getElementById('emergency-modal');
    const closeButton = document.querySelector('.close');
  
    emergencyButton.addEventListener('click', function() {
      emergencyModal.style.display = 'block'; // Mostrar el modal al hacer clic en el botón
    });
  
    closeButton.addEventListener('click', function() {
      emergencyModal.style.display = 'none'; // Ocultar el modal al hacer clic en el botón de cierre
    });
  
    window.addEventListener('click', function(event) {
      if (event.target == emergencyModal) {
        emergencyModal.style.display = 'none'; // Ocultar el modal si se hace clic fuera de él
      }
    });
  });


  