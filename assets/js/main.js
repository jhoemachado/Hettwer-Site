/* Dados de contato exibidos na página. Deixe vazio o que ainda não estiver definido. */
var CONTATO = { whatsapp: "(55) 99638-2681", whatsappIntl: "5555996382681", email: "", endereco: "Santa Rosa, RS" };
/* Links das redes sociais: cole o endereço completo do perfil. O ícone só aparece quando há link. */
var REDES = { instagram: "", facebook: "" };

(function(){
  var ICONS = {
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect class="st" x="3.5" y="3.5" width="17" height="17" rx="5"/><circle class="st" cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path class="st" d="M15 4h-2.2C10.9 4 9.5 5.4 9.5 7.3V10h-2v3h2v7h3v-7H15l.5-3h-3V7.6c0-.4.3-.6.7-.6H15z"/></svg>'
  };
  var links = [];
  if (CONTATO.whatsappIntl) links.push(['WhatsApp', 'https://wa.me/' + CONTATO.whatsappIntl, ICONS.whatsapp]);
  if (REDES.instagram) links.push(['Instagram', REDES.instagram, ICONS.instagram]);
  if (REDES.facebook) links.push(['Facebook', REDES.facebook, ICONS.facebook]);
  document.querySelectorAll('[data-social]').forEach(function(ul){
    links.forEach(function(l){
      var li = document.createElement('li'), a = document.createElement('a');
      a.href = l[1]; a.target = '_blank'; a.rel = 'noopener'; a.setAttribute('aria-label', l[0] + ' da Hettwer'); a.innerHTML = l[2];
      li.appendChild(a); ul.appendChild(li);
    });
  });

  var info = document.getElementById('info');
  function line(k, v){ var li = document.createElement('li'); var a = document.createElement('span'); a.textContent = k; var b = document.createElement('b'); b.style.fontWeight = 400; b.textContent = v; li.appendChild(a); li.appendChild(b); info.appendChild(li); }
  if (CONTATO.whatsapp) line('WhatsApp', CONTATO.whatsapp);
  if (CONTATO.email) line('E-mail', CONTATO.email);
  if (CONTATO.endereco) line('Cidade', CONTATO.endereco);

  /* linha do tempo: a linha verde avança com a rolagem e cada etapa aparece ao entrar na tela */
  var journey = document.getElementById('journey');
  if (journey){
    var rows = journey.querySelectorAll('.jrow'), nodes = journey.querySelectorAll('.jnode');
    var calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!calm && 'IntersectionObserver' in window){
      journey.classList.add('js-reveal');
      var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }); }, { threshold: 0.2 });
      rows.forEach(function(r){ io.observe(r); });
      setTimeout(function(){ rows.forEach(function(r){ r.classList.add('in'); }); }, 4000);
    }
    var ticking = false;
    function spine(){
      ticking = false;
      var r = journey.getBoundingClientRect(), line = window.innerHeight * 0.55;
      var span = Math.max(r.height - 64, 1);
      var p = Math.min(1, Math.max(0, (line - (r.top + 32)) / span));
      journey.style.setProperty('--p', p.toFixed(4));
      nodes.forEach(function(n){ var nr = n.getBoundingClientRect(); n.classList.toggle('on', nr.top + nr.height / 2 <= line); });
    }
    function req(){ if (!ticking){ ticking = true; requestAnimationFrame(spine); } }
    window.addEventListener('scroll', req, { passive: true });
    window.addEventListener('resize', req);
    spine();
  }

  var form = document.getElementById('form'), result = document.getElementById('result');
  var text = document.getElementById('resultText'), wa = document.getElementById('wa');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var nome = document.getElementById('nome').value.trim();
    if (!nome){ document.getElementById('nome').focus(); return; }
    var fone = document.getElementById('fone').value.trim();
    var amb = document.getElementById('amb').value;
    var msg = document.getElementById('msg').value.trim();
    var m = 'Olá, Hettwer! Meu nome é ' + nome + '. Quero um orçamento para: ' + amb + '.';
    if (msg) m += '\n' + msg;
    if (fone) m += '\nMeu WhatsApp: ' + fone;
    text.value = m;
    var digits = (CONTATO.whatsappIntl || '').replace(/\D/g, '');
    if (digits){ wa.href = 'https://wa.me/' + digits + '?text=' + encodeURIComponent(m); wa.hidden = false; } else { wa.hidden = true; }
    form.hidden = true; result.hidden = false;
  });
  document.getElementById('back').addEventListener('click', function(){ result.hidden = true; form.hidden = false; });
  document.getElementById('copy').addEventListener('click', function(){
    var btn = this;
    function done(){ btn.textContent = 'Copiado'; setTimeout(function(){ btn.textContent = 'Copiar mensagem'; }, 1800); }
    try {
      navigator.clipboard.writeText(text.value).then(done, function(){ text.select(); });
    } catch (err) { text.select(); }
  });
})();
