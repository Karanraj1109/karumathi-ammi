/* ============================================================
   SCRIPT.JS : mesin undangan. JANGAN DIEDIT kecuali paham kode.
   Semua isi undangan ada di data.js
============================================================ */
const $=id=>document.getElementById(id);
const L='id-ID',U={timeZone:'UTC'};
const wall=iso=>new Date(iso.slice(0,19)+'Z');   // jam dibaca persis seperti yang ditulis, tidak bergeser zona waktu
const zona=iso=>({'+07':'WIB','+08':'WITA','+09':'WIT'}[iso.slice(-6,-3)]||'');
const jam=(d,iso)=>d.toLocaleTimeString(L,{...U,hour:'2-digit',minute:'2-digit'}).replace(':','.')+' '+zona(iso);
const tgl=d=>d.toLocaleDateString(L,{...U,weekday:'long',day:'numeric',month:'long',year:'numeric'});
const sd=iso=>{const d=new Date(iso+'T00:00:00');if(isNaN(d))return '<b>?</b><span>cek format</span><span>tanggal</span>';return `<b>${d.getDate()}</b><span>${d.toLocaleDateString(L,{month:'long'})}</span><span>${d.getFullYear()}</span>`};

/* kolam sampul */
(function(){let h='<g fill="none" stroke="#e8cf8f" stroke-width=".7" stroke-linecap="round">',k=0;
  for(let i=0;i<24;i++){const a=i*15*Math.PI/180;h+=`<circle cx="${(94*Math.sin(a)).toFixed(1)}" cy="${(-94*Math.cos(a)).toFixed(1)}" r="1.3" fill="#e8cf8f" stroke="none"/>`}
  h+=`<circle class="dr" pathLength="1" style="--k:${k++}" r="86"/><circle class="dr" pathLength="1" style="--k:${k++}" r="20"/>`;
  for(let i=0;i<8;i++)h+=`<path class="dr" pathLength="1" style="--k:${k++}" transform="rotate(${i*45})" d="M0-20C15-36 15-62 0-82 -15-62 -15-36 0-20z"/>`;
  for(let i=0;i<8;i++)h+=`<path class="dr" pathLength="1" style="--k:${k++}" transform="rotate(${i*45+22.5})" d="M0-20C8-30 8-44 0-58 -8-44 -8-30 0-20z"/>`;
  $('kolam').innerHTML=h+'<circle r="3" fill="#e8cf8f" stroke="none"/></g>'})();

/* isi data */
$('salam').textContent=CFG.salam;$('hub').textContent=CFG.hubungan;$('nama').textContent=CFG.nama;$('cvname').textContent=CFG.singkat;
$('hari').textContent='Doa Hari ke-'+CFG.hariKe;$('hk').textContent=CFG.hariKe;
$('catatan').textContent=CFG.catatan;$('dirindukan').textContent=CFG.dirindukan;
$('lh').innerHTML=sd(CFG.lahir);$('wf').innerHTML=sd(CFG.wafat);
CFG.namaTamil?$('tamil').textContent=CFG.namaTamil:$('tamil').remove();
CFG.wafatKet?$('wfket').textContent=CFG.wafatKet:$('wfket').remove();
if(CFG.foto){const im=new Image();im.alt=CFG.nama;
  im.onload=()=>{$('foto').textContent='';$('foto').appendChild(im)};
  im.onerror=()=>{$('foto').textContent='Foto tidak ditemukan: '+CFG.foto+' (cek nama file dan lokasinya)'};
  im.src=CFG.foto}
const T=wall(CFG.tanggalISO);
$('tgl').textContent=tgl(T);$('jam').textContent=jam(T,CFG.tanggalISO)+' sampai selesai';
$('tempat').textContent=CFG.tempat;$('maps').href=CFG.maps;$('keluarga').textContent=CFG.keluarga;
if(CFG.akhir){const A=wall(CFG.akhir.tanggalISO);$('atgl').textContent=tgl(A);$('ajam').textContent=jam(A,CFG.akhir.tanggalISO);$('atempat').textContent=CFG.akhir.tempat;
  CFG.akhir.ket?$('aket').textContent=CFG.akhir.ket:$('aketRow').remove()}else $('akhirBox').remove();
if(!CFG.kontak.length)$('kontakBox').remove();
CFG.kontak.forEach(c=>{const wa=c.hp.replace(/\D/g,'').replace(/^0/,'62');
  const a=document.createElement('a');a.href='https://wa.me/'+wa;a.target='_blank';a.rel='noopener';
  a.innerHTML=`<div><b>${c.nama}</b><br><span>${c.hp}</span></div><em>WhatsApp</em>`;$('kontak').appendChild(a)});
const toast=t=>{const e=$('toast');e.textContent=t;e.classList.add('show');setTimeout(()=>e.classList.remove('show'),2400)};

/* munculnya halus saat undangan dibuka */
let io;
function reveal(){const els=[...document.querySelectorAll('.el')];
  io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{root:$('card'),threshold:.15});
  els.forEach((e,i)=>{if(i<9)e.style.transitionDelay=(i*.1)+'s';io.observe(e)})}
$('openBtn').addEventListener('click',()=>{$('cover').classList.add('open');$('card').scrollTop=0;reveal();setTimeout(()=>$('cover').style.display='none',1700)});

$('share').addEventListener('click',async()=>{const d={title:'Undangan Karumathi',text:`Undangan Doa Karumathi ${CFG.nama}\n${$('tgl').textContent}, ${$('jam').textContent}\n${CFG.tempat}`,url:location.href};
  try{if(navigator.share)await navigator.share(d);else{await navigator.clipboard.writeText(d.text+'\n'+d.url);toast('Teks undangan disalin')}}catch(e){}});
