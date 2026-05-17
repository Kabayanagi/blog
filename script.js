window.addEventListener('load', function() {
    const fpg = document.getElementById('front-page');
    if (fpg) {
        const wthStr = window.getComputedStyle(fpg).width;
        const wth = parseFloat(wthStr);
        const divs = fpg.querySelectorAll(':scope > div');
        if (wth === 800) {
            divs.forEach(div => {
                div.style.width = (800 / 3) + 'px';
            });
        } else if (wth >= 1600 / 3) {
            divs.forEach(div => {
                div.style.width = (wth / 2) + 'px';
            });
        } else {
            divs.forEach(div => {
                div.style.width = wthStr;
            });
        }
    }
});
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
