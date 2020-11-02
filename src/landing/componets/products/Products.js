<section class="section--container">
    
<h2>¿Qué opinan nuestros usuarios?</h2>
<div class="div--card">
    <mat-card class="example-card" *ngFor="let info of information">
        <mat-card-header>
            <img mat-card-avatar class="example-header-image" [src]="info.picture.large" alt="Photo of a Shiba Inu">
        <mat-card-title>{{info.name.first}}  {{info.name.last}}</mat-card-title>
            <mat-card-subtitle>{{info.email}}</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
            <p *ngFor="let coment of comments">
                {{coment}}
            </p>
        </mat-card-content>
    </mat-card>
</div>

</section>