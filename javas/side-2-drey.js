    // Adăugăm evenimentul de click pentru elementul cu clasa .container-nav-el-2-div
    document.querySelector('.container-nav-el-2-div').addEventListener('click', function() {
      // Modificăm stilurile elementelor cu clasele .container-nav-el-2-p-asp1 și .container-nav-el-2-p-asp2
      const pAsp1 = document.querySelector('.container-nav-el-2-p-asp2');
      const pAsp2 = document.querySelector('.container-nav-el-2-p-asp1');

      // Schimbăm display: none cu display: block și invers
      if (pAsp1.style.display === 'block') {
        pAsp1.style.display = 'none';
        pAsp2.style.display = 'block';
      } else {
        pAsp1.style.display = 'block';
        pAsp2.style.display = 'none';
      }
    });




    let isMenuOpen = false; // Variabilă pentru a verifica dacă meniul este deschis sau închis

// Adăugăm evenimentul de click pentru elementul cu clasa .container-nav-el-2-div
document.querySelector('.container-nav-el-2-div').addEventListener('click', function() {
  const containerSlideTotal = document.querySelector('.container-slide-total');

  if (isMenuOpen) {
    containerSlideTotal.classList.remove('meniu-inchidere');
    containerSlideTotal.classList.add('meniu-deschidere');
  } else {
    containerSlideTotal.classList.remove('meniu-deschidere');
    containerSlideTotal.classList.add('meniu-inchidere');
  }

  isMenuOpen = !isMenuOpen; // Inversăm starea variabilei pentru următoarea apăsare
});