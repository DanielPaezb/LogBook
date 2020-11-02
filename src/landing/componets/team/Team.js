<section class="section--container">
<div class="div--title">
  <h2>Este proyecto fue desarrolado por</h2>
  <img class="img--team" src="../../../assets/svg/Team.svg" alt="Team image">
</div>
<div class="div--team">
    <div class="div--card">
      <div class="div--name">
        <img [src]="urlDave" alt="Imagen desarrollador">
        <h5 class="card-title">Dave Gallego </h5>
      </div>
      <p class="card-text">Front-End developer.</p>
      <div class="div--centerButton">
        <a (click)="goToLink('https://github.com/DaveGallegoHernandez')" class="btn btn-primary">Ver perfil.</a>
      </div>
    </div>
              
    <div class="div--card">
      <div class="div--name">
        <img [src]="urlNicolas" alt="Imagen desarrollador">
        <h5 class="card-title">Nicolas Jiménez</h5>
      </div>
      <p class="card-text">Diseñador UI/UX Front-End developer.</p>
      <div class="div--centerButton">
        <a (click)="goToLink('https://github.com/Nicolas-alt')" class="btn btn-primary">Ver perfil.</a>
      </div>
    </div>

    <div class="div--card">
      <div class="div--name">
        <img [src]="urlDaniel" alt="Imagen desarrollador">
        <h5 class="card-title">Daniel  Páez</h5>
      </div>
      <p class="card-text">Front-End developer.</p>
      <div class="div--centerButton">
      <a (click)="goToLink('https://github.com/DanielPaezb')" class="btn btn-primary">Ver perfil.</a>
      </div>
    </div>

    <div class="div--card">
      <div class="div--name">
        <img [src]="urlSantiago" alt="Imagen desarrollador">
        <h5 class="card-title">Santiago Guerrero</h5>
      </div>
      <p class="card-text">Web Designer.</p>
      <div class="div--centerButton">
        <a (click)="goToLink('https://github.com/Santiago1109')" class="btn btn-primary">Ver perfil.</a>
      </div>
    </div>
    </div>
</section>