
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('navbar--scrolled');
  } else {
    navbar.classList.remove('navbar--scrolled');
  }
});



const menuToggle = document.getElementById('menu-toggle');
const mobileDrawer = document.getElementById('mobile-drawer');
const iconMenu = menuToggle.querySelector('.navbar__toggle-icon--menu');
const iconClose = menuToggle.querySelector('.navbar__toggle-icon--close');

menuToggle.addEventListener('click', () => {
  const isHidden = mobileDrawer.classList.toggle('hidden');
  
  if (isHidden) {
    iconMenu.classList.remove('hidden');
    iconClose.classList.add('hidden');
  } else {
    iconMenu.classList.add('hidden');
    iconClose.classList.remove('hidden');
  }
});


document.querySelectorAll('.navbar__mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileDrawer.classList.add('hidden');
    iconMenu.classList.remove('hidden');
    iconClose.classList.add('hidden');
  });
});



function selectPlan(planName) {
  const planSelect = document.getElementById('plan');
  if (planSelect) {
    planSelect.value = planName;
    document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
  }
}



const form = document.getElementById('project-form');
const successBlock = document.getElementById('form-success');

form.addEventListener('submit', (e) => {
  e.preventDefault(); 

  
  const formData = new FormData(form);

  
  fetch('enviar.php', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      
      form.classList.add('hidden');
      successBlock.classList.remove('hidden');

      
      setTimeout(() => {
        successBlock.classList.add('hidden');
        form.classList.remove('hidden');
        form.reset(); 
      }, 4000);
    } else {
      
      alert('¡Ups! Hubo un problema en el servidor al procesar el correo. Por favor, intentá de nuevo más tarde o escribime por WhatsApp.');
    }
  })
  .catch(error => {
    console.error('Error detectado en la petición:', error);
    alert('Error de red o conexión. Por favor, verificá tu internet e intentá de nuevo.');
  });
});