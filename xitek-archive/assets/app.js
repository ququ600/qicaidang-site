
document.querySelectorAll('.tabs button').forEach(function(b){
  b.addEventListener('click',function(){
    var id=b.dataset.tab;
    document.querySelectorAll('.tabs button').forEach(function(x){x.classList.toggle('on',x===b)});
    document.querySelectorAll('.panel').forEach(function(p){p.classList.toggle('on',p.id===id)});
    history.replaceState(null,'','#'+id);
  });
});
var h=location.hash.slice(1);
if(h){var b=document.querySelector('.tabs button[data-tab="'+h+'"]'); if(b) b.click();}
var lb=document.querySelector('.lightbox');
document.querySelectorAll('.grid .g').forEach(function(g){
  g.addEventListener('click',function(){
    var src=g.dataset.full||g.querySelector('img').src;
    lb.querySelector('img').src=src; lb.classList.add('on');
  });
});
if(lb) lb.addEventListener('click',function(){lb.classList.remove('on')});
