document.addEventListener('DOMContentLoaded', function() {
  const yearSpan = document.getElementById('bfr');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
const hnb = document.getElementById('hnb');
const nkm = document.getElementById('nkm');
const zzz = document.getElementById('zzz');
const zzzz = document.getElementById('zzzz');
const krd = document.getElementById('krd');
hnb.addEventListener('click', () =>{
hnb.classList.toggle('open');
nkm.classList.toggle('open');
krd.classList.toggle('open');
if (zzz.classList.contains('open')){
setTimeout(() => {
zzz.classList.toggle('open');
zzzz.classList.toggle('open');
},700);
}else{
zzz.classList.toggle('open');
zzzz.classList.toggle('open');
}
});
