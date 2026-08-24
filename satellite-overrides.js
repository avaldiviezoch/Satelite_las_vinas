(() => {
  const outer=document.getElementById('inv6Work');
  const BLOCK_ID='sat-inv6-green-location-exact';
  const PHOTO_ID='sat-inv6-photo-collage';
  const STYLE_ID='sat-inv6-green-location-exact-style';
  const DUPLICATE_ID='inv6-green-location-from-inv1';

  function deepestDoc(){
    try{
      const d1=outer.contentDocument||outer.contentWindow.document;
      const f1=d1.getElementById('inviteFrame');
      if(!f1)return null;
      const d2=f1.contentDocument||f1.contentWindow.document;
      const f2=d2.getElementById('inv5');
      return f2?(f2.contentDocument||f2.contentWindow.document):null;
    }catch(e){return null}
  }

function ensureStyle(doc){
  let s=doc.getElementById(STYLE_ID);

  if(!s){
    s=doc.createElement('style');
    s.id=STYLE_ID;
    doc.head.appendChild(s);
  }

  s.textContent=`
    #${DUPLICATE_ID}{display:none!important}

    img.church-green-img:not(#${BLOCK_ID} img),
    img.inv6-green-location-img:not(#${BLOCK_ID} img){
      display:none!important
    }

    #${BLOCK_ID}{
      width:100%!important;
      margin:0!important;
      padding:0!important;
      background:transparent!important;
      position:relative!important;
      overflow:hidden!important
    }

    #${BLOCK_ID} .church-green-wrap{
      width:100%!important;
      max-width:680px!important;
      margin:0 auto!important;
      padding:0!important;
      position:relative!important;
      overflow:hidden!important
    }

    #${BLOCK_ID} .green-img{
      display:block!important;
      width:100%!important;
      height:auto!important;
      border:0!important
    }

    #${BLOCK_ID} .church-overlay-content{
      position:absolute!important;
      inset:0!important;
      z-index:2!important;
      display:flex!important;
      flex-direction:column!important;
      align-items:center!important;
      text-align:center!important;
      padding:105px 32px 120px!important;
      box-sizing:border-box!important;
      color:#FBF8EF!important;
      transform:translateY(20px)!important
    }

    #${BLOCK_ID} .church-kicker{
      margin:0 0 16px!important;
      font-family:'Cormorant Garamond',serif!important;
      font-size:13px!important;
      letter-spacing:5px!important;
      color:#D9D6B9!important
    }

    #${BLOCK_ID} .church-title{
      margin:0 0 24px!important;
      font-family:'Great Vibes',cursive!important;
      font-size:clamp(52px,11vw,72px)!important;
      line-height:.90!important;
      font-weight:400!important;
      color:#FBF8EF!important
    }

    #${BLOCK_ID} .church-title span{
      display:block!important;
      white-space:nowrap!important
    }

    #${BLOCK_ID} .church-main-copy{
      margin:0 0 34px!important;
      font-family:'Cormorant Garamond',serif!important;
      font-size:clamp(18px,4.5vw,25px)!important;
      line-height:1.35!important;
      max-width:320px!important
    }

    #${BLOCK_ID} .church-place-name{
      margin:0 0 14px!important;
      font-family:'Great Vibes',cursive!important;
      font-size:clamp(46px,10vw,64px)!important;
      color:#F2E4AB!important;
      white-space:nowrap!important
    }

    #${BLOCK_ID} .church-address{
      margin:0 0 34px!important;
      font-family:'Cormorant Garamond',serif!important;
      font-size:clamp(18px,4.6vw,24px)!important;
      border-bottom:1px solid rgba(217,214,185,.45)!important;
      padding:0 4px 6px!important;
      white-space:nowrap!important
    }

    #${BLOCK_ID} .church-note{
      margin:0 0 28px!important;
      font-family:'Cormorant Garamond',serif!important;
      font-size:clamp(17px,4.2vw,22px)!important;
      line-height:1.45!important;
      max-width:330px!important
    }

    #${PHOTO_ID}{
      position:relative!important;
      width:100%!important;
      max-width:680px!important;
      height:clamp(500px,104vw,710px)!important;
      margin:0 auto!important;
      background:#eee5d1!important;
      overflow:hidden!important
    }

    #${PHOTO_ID} img{
      position:absolute!important;
      display:block!important;
      height:auto!important;
      object-fit:contain!important
    }

    #${PHOTO_ID} .photo-1{
      width:46%!important;
      left:5%!important;
      top:5%!important;
      z-index:1!important
    }

    #${PHOTO_ID} .photo-2{
      width:46%!important;
      right:4%!important;
      top:16%!important;
      z-index:2!important
    }

    .sat-inv6-next-section{
      margin-top:-58px!important;
      position:relative!important;
      z-index:3!important
    }

    .sat-inv6-crew-title{
      position:absolute!important;
      left:50%!important;
      top:20.2%!important;
      transform:translateX(-50%)!important;
      width:56%!important;
      max-width:360px!important;
      margin:0!important;
      z-index:7!important;
      text-align:center!important;
      font-family:'Cormorant Garamond',serif!important;
      font-size:clamp(17px,2.9vw,24px)!important;
      line-height:1.3!important;
      font-style:italic!important;
      font-weight:700!important;
      color:#5D644F!important
    }

    .sat-inv6-crew-copy{
      position:absolute!important;
      left:50%!important;
      top:33.6%!important;
      transform:translateX(-50%)!important;
      width:56%!important;
      max-width:360px!important;
      margin:0!important;
      z-index:7!important;
      text-align:center!important;
      font-family:Georgia,'Times New Roman',serif!important;
      font-size:clamp(14px,2.5vw,19px)!important;
      line-height:1.45!important;
      font-style:italic!important;
      font-weight:400!important;
      color:#5D644F!important
    }

    .sat-inv6-crew-copy p{
      margin:0 0 12px!important
    }

    #sat-inv6-crew-bottom-photo-section{
      position:relative!important;
      width:100%!important;
      max-width:680px!important;
      margin:-70px auto 0!important;
      padding:0!important;
      overflow:hidden!important;
      background:#eee5d1!important
    }

    #sat-inv6-crew-bottom-photo-section img{
      display:block!important;
      width:100%!important;
      height:auto!important;
      margin:0!important;
      padding:0!important;
      border:0!important
    }

    #sat-inv6-dress-bottom-photo-section{
      position:relative!important;
      width:100%!important;
      max-width:680px!important;
      margin:0 auto!important;
      padding:0!important;
      overflow:hidden!important;
      background:#eee5d1!important
    }

    #sat-inv6-dress-bottom-photo-section img{
      display:block!important;
      width:100%!important;
      height:auto!important;
      margin:0!important;
      padding:0!important;
      border:0!important
    }

    /* =====================================================
       PAPEL ROTO - CABECERA DEL PROGRAMA
       ===================================================== */

    #sat-inv6-paper-bottom-section{
      position:relative!important;
      width:100%!important;
      max-width:680px!important;
      margin:0 auto!important;
      padding:0!important;
      overflow:hidden!important;
      background:transparent!important
    }

    #sat-inv6-paper-bottom-section .sat-inv6-paper-bg{
      display:block!important;
      width:100%!important;
      height:auto!important;
      margin:0!important;
      padding:0!important;
      border:0!important
    }

    #sat-inv6-paper-bottom-section .sat-inv6-paper-program{
      position:absolute!important;
      left:3.5%!important;
      right:4%!important;
      top:50%!important;
      transform:translateY(-50%)!important;
      display:flex!important;
      align-items:center!important;
      justify-content:flex-start!important;
      z-index:4!important
    }

    #sat-inv6-paper-bottom-section .sat-inv6-paper-logo{
      position:relative!important;
      left:auto!important;
      top:auto!important;
      transform:none!important;
      width:30%!important;
      height:auto!important;
      flex:0 0 auto!important;
      margin:0 9% 0 0!important;
      padding:0!important;
      border:0!important
    }

    #sat-inv6-paper-bottom-section .sat-inv6-program-text{
      position:relative!important;
      flex:1!important;
      text-align:left!important;
      color:#F2E4AB!important;
      transform:translateY(0)!important
    }

    #sat-inv6-paper-bottom-section .sat-inv6-program-title{
      font-family:'The Seasons',serif!important;
      font-size:clamp(34px,8.5vw,62px)!important;
      line-height:.9!important;
      font-weight:500!important;
      letter-spacing:.01em!important;
      white-space:nowrap!important;
      color:#F2E4AB!important
    }

    #sat-inv6-paper-bottom-section .sat-inv6-program-script{
      font-family:'Amsterdam Four',cursive!important;
      font-size:clamp(42px,10.5vw,78px)!important;
      line-height:.82!important;
      font-weight:400!important;
      color:#F2E4AB!important;
      margin-top:3px!important;
      margin-left:14%!important;
      white-space:nowrap!important
    }

    /* =====================================================
       PROGRAMA / TIMELINE
       SIN SEGUNDO FONDO
       ===================================================== */

    #sat-inv6-program-timeline-section{
      position:relative!important;
      width:100%!important;
      max-width:680px!important;
      margin:0 auto!important;
      padding:22px 24px 54px!important;
      box-sizing:border-box!important;
      background:transparent!important;
      overflow:hidden!important
    }

    #sat-inv6-program-timeline-section .sat-inv6-program-inner{
      position:relative!important;
      width:100%!important;
      margin:0!important;
      padding:0!important
    }

    #sat-inv6-program-timeline-section .sat-inv6-program-line-wrap{
      position:absolute!important;
      left:50%!important;
      top:44px!important;
      bottom:44px!important;
      width:20px!important;
      transform:translateX(-50%)!important;
      z-index:1!important;
      pointer-events:none!important
    }

    #sat-inv6-program-timeline-section .sat-inv6-program-line{
      position:absolute!important;
      left:50%!important;
      top:0!important;
      width:2px!important;
      height:0;
      transform:translateX(-50%)!important;
      transform-origin:top center!important;
      background:#6D7559!important;
      border-radius:999px!important;
      animation:satInv6ProgramLineGrow 3.6s cubic-bezier(.2,.7,.2,1) forwards!important
    }

    #sat-inv6-program-timeline-section .sat-inv6-program-line-start,
    #sat-inv6-program-timeline-section .sat-inv6-program-line-end{
      position:absolute!important;
      left:50%!important;
      width:11px!important;
      height:11px!important;
      border-radius:50%!important;
      background:#6D7559!important;
      transform:translateX(-50%)!important;
      z-index:3!important
    }

    #sat-inv6-program-timeline-section .sat-inv6-program-line-start{top:-5px!important}
    #sat-inv6-program-timeline-section .sat-inv6-program-line-end{bottom:-5px!important}

    #sat-inv6-program-timeline-section .sat-inv6-program-item{
      position:relative!important;
      z-index:2!important;
      display:grid!important;
      grid-template-columns:minmax(0,1fr) 32px minmax(0,1fr)!important;
      align-items:center!important;
      column-gap:12px!important;
      width:100%!important;
      min-height:132px!important;
      margin:0!important;
      padding:0!important;
      box-sizing:border-box!important
    }

    #sat-inv6-program-timeline-section .sat-inv6-program-node{
      grid-column:2!important;
      grid-row:1!important;
      justify-self:center!important;
      align-self:center!important;
      width:10px!important;
      height:10px!important;
      border-radius:50%!important;
      background:#6D7559!important;
      box-shadow:0 0 0 4px rgba(241,229,218,.96)!important;
      z-index:5!important
    }

    #sat-inv6-program-timeline-section .sat-inv6-program-side{
      width:100%!important;
      box-sizing:border-box!important
    }

    #sat-inv6-program-timeline-section .sat-inv6-program-side.left{
      grid-column:1!important;
      grid-row:1!important;
      text-align:right!important;
      padding-right:8px!important
    }

    #sat-inv6-program-timeline-section .sat-inv6-program-side.right{
      grid-column:3!important;
      grid-row:1!important;
      text-align:left!important;
      padding-left:8px!important
    }

    #sat-inv6-program-timeline-section .sat-inv6-program-time{
      display:block!important;
      margin:0 0 5px!important;
      padding:0!important;
      font-family:'The Seasons',serif!important;
      font-size:clamp(34px,6vw,52px)!important;
      line-height:.9!important;
      font-style:normal!important;
      font-weight:400!important;
      letter-spacing:0!important;
      color:#5D644F!important
    }

    #sat-inv6-program-timeline-section .sat-inv6-program-label{
      display:block!important;
      margin:0!important;
      padding:0!important;
      font-family:'Open Sans',Arial,sans-serif!important;
      font-size:clamp(14px,2.55vw,19px)!important;
      line-height:1.15!important;
      font-style:normal!important;
      font-weight:400!important;
      color:#6D7559!important
    }

    #sat-inv6-program-timeline-section .sat-inv6-program-photo-slot{
      display:block!important;
      width:100%!important;
      min-height:105px!important;
      background:transparent!important
    }

    @keyframes satInv6ProgramLineGrow{
      0%{height:0}
      100%{height:100%}
    }

    .crew-section.is-visible .crew-gif{
      animation:satCrewGifUp 1.15s cubic-bezier(.20,.82,.28,1) forwards!important
    }

    @keyframes satCrewGifUp{
      0%{opacity:0;transform:translateY(-36px) scale(.96)}
      72%{opacity:1;transform:translateY(-74px) scale(1.006)}
      100%{opacity:1;transform:translateY(-70px) scale(1)}
    }

    .crew-section{overflow:visible!important}
    .crew-stage{overflow:visible!important}

    #dressCodeSection .inv5-dress-code{
      font-family:'The Seasons',serif!important;
      color:#6D7559!important;
      font-size:34px!important;
      line-height:1!important;
      font-weight:500!important
    }

    #dressCodeSection .inv5-dress-formal{
      font-family:'Amsterdam Four',cursive!important;
      font-size:60%!important
    }

    #dressCodeSection .inv5-dress-content{transform:translateY(-1%)!important}

    #dressCodeSection .inv5-dress-code + *{
      font-size:50px!important;
      line-height:1!important;
      font-weight:600!important
    }

    #dressCodeSection .inv5-dress-subtitle{
      font-weight:400!important;
      font-size:13px!important;
      line-height:1.32!important
    }

    #dressCodeSection .inv5-dress-white{
      font-weight:400!important;
      font-size:13px!important;
      line-height:1.38!important
    }

    @media(max-width:540px){
      #${PHOTO_ID}{height:106vw!important}
      #${PHOTO_ID} .photo-1{width:48%!important;left:5%!important;top:4%!important}
      #${PHOTO_ID} .photo-2{width:48%!important;right:4%!important;top:16.5%!important}
      .sat-inv6-next-section{margin-top:-42px!important}
      .sat-inv6-crew-title{top:17.8%!important;width:58%!important;max-width:230px!important;font-size:clamp(15px,4.6vw,19px)!important;line-height:1.3!important}
      .sat-inv6-crew-copy{top:26.4%!important;width:58%!important;max-width:255px!important;font-size:clamp(12px,3.4vw,15px)!important;line-height:1.4!important}
      #sat-inv6-paper-bottom-section .sat-inv6-paper-program{left:2.5%!important;right:3%!important}
      #sat-inv6-paper-bottom-section .sat-inv6-paper-logo{width:31%!important;margin-right:9%!important}
      #sat-inv6-paper-bottom-section .sat-inv6-program-title{font-size:clamp(32px,8.2vw,46px)!important}
      #sat-inv6-paper-bottom-section .sat-inv6-program-script{font-size:clamp(40px,10.2vw,58px)!important;margin-left:14%!important}
      #sat-inv6-program-timeline-section{padding:18px 18px 42px!important;background:transparent!important}
      #sat-inv6-program-timeline-section .sat-inv6-program-line-wrap{top:37px!important;bottom:37px!important;width:16px!important}
      #sat-inv6-program-timeline-section .sat-inv6-program-line{width:2px!important}
      #sat-inv6-program-timeline-section .sat-inv6-program-line-start,
      #sat-inv6-program-timeline-section .sat-inv6-program-line-end{width:9px!important;height:9px!important}
      #sat-inv6-program-timeline-section .sat-inv6-program-item{grid-template-columns:minmax(0,1fr) 24px minmax(0,1fr)!important;column-gap:9px!important;min-height:126px!important}
      #sat-inv6-program-timeline-section .sat-inv6-program-node{width:8px!important;height:8px!important;box-shadow:0 0 0 3px rgba(241,229,218,.96)!important}
      #sat-inv6-program-timeline-section .sat-inv6-program-side.left{padding-right:8px!important}
      #sat-inv6-program-timeline-section .sat-inv6-program-side.right{padding-left:8px!important}
      #sat-inv6-program-timeline-section .sat-inv6-program-time{font-size:clamp(28px,7.7vw,38px)!important;line-height:.9!important;margin-bottom:5px!important}
      #sat-inv6-program-timeline-section .sat-inv6-program-label{font-size:clamp(12px,3.35vw,15px)!important;line-height:1.14!important}
      #sat-inv6-program-timeline-section .sat-inv6-program-photo-slot{min-height:92px!important}
    }

    @media(max-width:390px){
      .sat-inv6-next-section{margin-top:-36px!important}
      .sat-inv6-crew-title{top:17.2%!important;width:60%!important;max-width:220px!important;font-size:16px!important;line-height:1.3!important}
      .sat-inv6-crew-copy{top:26.1%!important;width:62%!important;max-width:240px!important;font-size:12px!important;line-height:1.4!important}
      #sat-inv6-paper-bottom-section .sat-inv6-paper-logo{width:32%!important}
      #sat-inv6-paper-bottom-section .sat-inv6-program-title{font-size:31px!important}
      #sat-inv6-paper-bottom-section .sat-inv6-program-script{font-size:40px!important}
      #sat-inv6-program-timeline-section .sat-inv6-program-item{min-height:122px!important}
      #sat-inv6-program-timeline-section .sat-inv6-program-time{font-size:29px!important}
      #sat-inv6-program-timeline-section .sat-inv6-program-label{font-size:12px!important}
    }
  `;
}

  function removeDuplicate(doc){
    const keep=doc.getElementById(BLOCK_ID);
    doc.getElementById(DUPLICATE_ID)?.remove();
    doc.querySelectorAll('img.church-green-img,img.inv6-green-location-img').forEach(img=>{
      if(keep&&keep.contains(img))return;
      const host=img.closest('section')||img.parentElement;
      if(host&&host!==keep)host.remove();
    });
  }

  async function greenSrc(){
    const r=await fetch('https://avaldiviezoch.github.io/Wedding/invitaciones/invitacion_1/invitacion_1.html?v=green-exact-1',{cache:'no-store'});
    const h=await r.text();
    return new DOMParser().parseFromString(h,'text/html').querySelector('img.church-green-img')?.getAttribute('src')||'';
  }

  function following(photos){
    const next=photos?.nextElementSibling;if(!next)return;
    next.classList.add('sat-inv6-next-section');
    const w=next.ownerDocument.createTreeWalker(next,NodeFilter.SHOW_TEXT),nodes=[];
    while(w.nextNode())nodes.push(w.currentNode);
    nodes.forEach(n=>n.nodeValue='');
    next.querySelector('.sat-inv6-crew-title')?.remove();
    next.querySelector('.sat-inv6-crew-copy')?.remove();

    const t=next.ownerDocument.createElement('h2');
    t.className='sat-inv6-crew-title';
    t.textContent='Toda gran aventura necesita una buena tripulación';
    t.style.setProperty('font-family',"Georgia, 'Times New Roman', serif",'important');
    t.style.setProperty('font-weight','800','important');
    t.style.setProperty('font-style','italic','important');
    next.appendChild(t);

    const copy=next.ownerDocument.createElement('div');
    copy.className='sat-inv6-crew-copy';
    copy.innerHTML=`<p>Y nos encantaría que formaras<br>parte de la nuestra.</p><p>Ahora que ya conoces el rumbo,<br>queremos contarte algunos<br>detalles para que<br>disfrutes este día tan especial<br>junto a nosotros.</p>`;
    next.appendChild(copy);

    next.ownerDocument.getElementById('sat-inv6-crew-bottom-photo-section')?.remove();

    const bottomPhotoSection=next.ownerDocument.createElement('section');
    bottomPhotoSection.id='sat-inv6-crew-bottom-photo-section';
    bottomPhotoSection.innerHTML=`<img src="https://raw.githubusercontent.com/avaldiviezoch/Wedding/main/invitaciones/invitacion_6/assets/foto_cortada_superior_6_1.png" alt="">`;
    next.insertAdjacentElement('afterend',bottomPhotoSection);

    const doc=next.ownerDocument;
    const dressCodeSection=doc.getElementById('dressCodeSection');
    const itinerarySection=doc.getElementById('itinerarySection');

    if(dressCodeSection&&itinerarySection){
      itinerarySection.insertAdjacentElement('beforebegin',dressCodeSection);
    }

    if(dressCodeSection){
      bottomPhotoSection.insertAdjacentElement('afterend',dressCodeSection);
    }

    next.ownerDocument.getElementById('sat-inv6-dress-bottom-photo-section')?.remove();

    if(dressCodeSection){
      const dressBottomPhoto=next.ownerDocument.createElement('section');
      dressBottomPhoto.id='sat-inv6-dress-bottom-photo-section';
      dressBottomPhoto.innerHTML=`<img src="https://raw.githubusercontent.com/avaldiviezoch/Wedding/main/invitaciones/invitacion_6/assets/foto_cortada_superior_6_2.png" alt="">`;
      dressCodeSection.insertAdjacentElement('afterend',dressBottomPhoto);

      next.ownerDocument.getElementById('sat-inv6-green-phrase-copy')?.remove();
      next.ownerDocument.getElementById('sat-inv6-paper-bottom-section')?.remove();

      const paperBottomSection=next.ownerDocument.createElement('section');
      paperBottomSection.id='sat-inv6-paper-bottom-section';
      paperBottomSection.innerHTML=`
        <img class="sat-inv6-paper-bg" src="https://raw.githubusercontent.com/avaldiviezoch/Wedding/2bd9b20040e4900fd8f5ff4e89a2c1bab38c99a7/invitaciones/invitacion_6/assets/papel_roto_6_2.png" alt="">
        <div class="sat-inv6-paper-program">
          <img class="sat-inv6-paper-logo" src="https://raw.githubusercontent.com/avaldiviezoch/Wedding/a6a2e681cc11710cdd01bec7191f74126a93a52d/invitaciones/invitacion_6/assets/logo_6_3.png" alt="A y L">
          <div class="sat-inv6-program-text">
            <div class="sat-inv6-program-title">PROGRAMA</div>
            <div class="sat-inv6-program-script">del día</div>
          </div>
        </div>`;

      dressBottomPhoto.insertAdjacentElement('afterend',paperBottomSection);
      next.ownerDocument.getElementById('sat-inv6-program-timeline-section')?.remove();

      const programTimelineSection=next.ownerDocument.createElement('section');
      programTimelineSection.id='sat-inv6-program-timeline-section';
      programTimelineSection.innerHTML=`
        <div class="sat-inv6-program-inner">
          <div class="sat-inv6-program-line-wrap">
            <div class="sat-inv6-program-line-start"></div>
            <div class="sat-inv6-program-line"></div>
            <div class="sat-inv6-program-line-end"></div>
          </div>
          <div class="sat-inv6-program-item"><div class="sat-inv6-program-side left"><h3 class="sat-inv6-program-time">02:00</h3><div class="sat-inv6-program-label">Recepción</div></div><div class="sat-inv6-program-node"></div><div class="sat-inv6-program-side right"><div class="sat-inv6-program-photo-slot"></div></div></div>
          <div class="sat-inv6-program-item"><div class="sat-inv6-program-side left"><h3 class="sat-inv6-program-time">03:00</h3><div class="sat-inv6-program-label">Ceremonia<br>de Boda</div></div><div class="sat-inv6-program-node"></div><div class="sat-inv6-program-side right"><div class="sat-inv6-program-photo-slot"></div></div></div>
          <div class="sat-inv6-program-item"><div class="sat-inv6-program-side left"><div class="sat-inv6-program-photo-slot"></div></div><div class="sat-inv6-program-node"></div><div class="sat-inv6-program-side right"><h3 class="sat-inv6-program-time">04:00</h3><div class="sat-inv6-program-label">Brindis</div></div></div>
          <div class="sat-inv6-program-item"><div class="sat-inv6-program-side left"><h3 class="sat-inv6-program-time">05:00</h3><div class="sat-inv6-program-label">Inicio del<br>Banquete</div></div><div class="sat-inv6-program-node"></div><div class="sat-inv6-program-side right"><div class="sat-inv6-program-photo-slot"></div></div></div>
          <div class="sat-inv6-program-item"><div class="sat-inv6-program-side left"><div class="sat-inv6-program-photo-slot"></div></div><div class="sat-inv6-program-node"></div><div class="sat-inv6-program-side right"><h3 class="sat-inv6-program-time">06:00</h3><div class="sat-inv6-program-label">Fiesta!!</div></div></div>
          <div class="sat-inv6-program-item"><div class="sat-inv6-program-side left"><h3 class="sat-inv6-program-time">00:00</h3><div class="sat-inv6-program-label">Fin de la<br>Celebración!</div></div><div class="sat-inv6-program-node"></div><div class="sat-inv6-program-side right"><div class="sat-inv6-program-photo-slot"></div></div></div>
        </div>`;

      paperBottomSection.insertAdjacentElement('afterend',programTimelineSection);
    }

    if(dressCodeSection){
      const subtitle=dressCodeSection.querySelector('.inv5-dress-subtitle');
      const whiteText=dressCodeSection.querySelector('.inv5-dress-white');
      const palette=dressCodeSection.querySelector('.inv5-dress-palette');
      const lowerText=dressCodeSection.querySelector('.inv5-dress-lower-1');
      const lastText=dressCodeSection.querySelector('.inv5-dress-last');
      const formalText=dressCodeSection.querySelector('.inv5-dress-formal');

      if(subtitle)subtitle.textContent='Queremos que cada uno de ustedes se sienta especial y luzca espectacular en nuestro día. ¡Aquí todos brillamos!';
      if(whiteText)whiteText.textContent='Amaremos que vistan en colores de nuestra paleta de boda, es decir tropicales y pasteles acorde a la estación ☀️🌴 Recuerda que tu mejor accesorio es tu actitud y una gran sonrisa.';
      if(whiteText&&palette)whiteText.insertAdjacentElement('afterend',palette);
      if(lowerText)lowerText.textContent='Reservamos el color blanco para los novios ♡';
      if(lastText)lastText.remove();
      if(formalText){
        formalText.style.setProperty('font-family',"'Amsterdam Four', cursive",'important');
        formalText.style.setProperty('font-size','34px','important');
        formalText.style.setProperty('line-height','1','important');
      }
    }
  }

  async function apply(){
    const doc=deepestDoc();if(!doc)return false;
    const location=doc.querySelector('section.location-section');if(!location)return false;
    ensureStyle(doc);removeDuplicate(doc);
    doc.getElementById(BLOCK_ID)?.remove();
    const block=doc.createElement('section');block.id=BLOCK_ID;
    block.innerHTML=`<div class="church-green-wrap"><img class="green-img" alt=""><div class="church-overlay-content"><div class="church-kicker">UBICACIÓN</div><div class="church-title"><span>Ceremonia</span><span>&amp; Recepción</span></div><p class="church-main-copy">La boda y la recepción se realizarán en el mismo lugar.</p><div class="church-place-name">Residencia Privada</div><div class="church-address">Calle Acapulco 480, La Molina</div><p class="church-note">Te esperamos para compartir juntos cada momento de este día tan especial.</p></div></div>`;
    location.insertAdjacentElement('afterend',block);
    try{block.querySelector('.green-img').src=await greenSrc()}catch(e){console.warn(e)}
    doc.getElementById(PHOTO_ID)?.remove();
    const photos=doc.createElement('section');photos.id=PHOTO_ID;
    photos.innerHTML=`<img class="photo-1" src="https://avaldiviezoch.github.io/Wedding/invitaciones/invitacion_6/assets/foto_pareja_6_1.png" alt=""><img class="photo-2" src="https://avaldiviezoch.github.io/Wedding/invitaciones/invitacion_6/assets/foto_pareja_6_2png.png" alt="">`;
    block.insertAdjacentElement('afterend',photos);following(photos);removeDuplicate(doc);return true;
  }

  function start(){
    [0,250,700,1400,2500,4000].forEach(ms=>setTimeout(apply,ms));
  }

  window.addEventListener('inv6-local-ready',start);
  outer.addEventListener('load',()=>setTimeout(start,300));
})();
