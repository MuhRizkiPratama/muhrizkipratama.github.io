// Normalisasi
const buttonNormalisasi = document.getElementById('button-normalisasi');
const modalNormalisasi = document.getElementById('modal-normalisasi');
const closeNormalisasi = document.getElementById('close-normalisasi');

// Denormalisasi
const buttonDenormalisasi = document.getElementById('button-denormalisasi');
const modalDenormalisasi = document.getElementById('modal-denormalisasi');
const closeDenormalisasi = document.getElementById('close-denormalisasi');

// ERD
const buttonErd = document.getElementById('button-erd');
const modalErd = document.getElementById('modal-erd');
const closeErd = document.getElementById('close-erd');

// Normalisasi
buttonNormalisasi.addEventListener('click', function(){
    modalNormalisasi.style.display = 'flex';
});
closeNormalisasi.addEventListener('click', function(){
    modalNormalisasi.style.display = 'none';
});

// Denormalisasi
buttonDenormalisasi.addEventListener('click', function(){
    modalDenormalisasi.style.display = 'flex';
});
closeDenormalisasi.addEventListener('click', function(){
    modalDenormalisasi.style.display = 'none';
});

// ERD
buttonErd.addEventListener('click', function(){
    modalErd.style.display = 'flex';
});
closeErd.addEventListener('click', function(){
    modalErd.style.display = 'none';
});

// Menghitung Luas Segitiga
// const alas = prompt('Masukan alas');
// const tinggi = prompt('Masukan tinggi');

// const menghitungSegitiga = (alas, tinggi) => {
//     return 0.5 * alas * tinggi;
// };

// alert(`Jadi hasil dari luas segitiga dengan ${alas} dan ${tinggi} adalah ${menghitungSegitiga(alas, tinggi)}`);