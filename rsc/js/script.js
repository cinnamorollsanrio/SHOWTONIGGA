AOS.init({duration:1000, once:true});

// Floating modal logic
const floatingModal = document.getElementById('floatingModal');
const floatingImg = document.getElementById('floatingImg');
const modalName = document.getElementById('modalName');
const modalDesc = document.getElementById('modalDesc');

document.querySelectorAll('.character-card').forEach(card => {
  card.addEventListener('click', () => {
    floatingImg.src = card.dataset.img;
    modalName.innerHTML = card.dataset.name;
    modalDesc.textContent = card.dataset.desc;
    floatingModal.style.display = 'flex';
  });
});

floatingModal.addEventListener('click', e => {
  if (e.target === floatingModal) {
    floatingModal.style.display = 'none';
  }
});

// ------------------------------
// ADD TO CART ALERT
document.addEventListener('click', e => {
    if(e.target.classList.contains('add-to-cart')){
        alert('Item added to cart!');
    }
});

// ------------------------------
// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ------------------------------
// INITIALIZE AOS
AOS.init({ duration: 1000, once: true });
