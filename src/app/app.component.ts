import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
cardPlanType = 'Simples';
cardPlanPrice = 150

handlePlanType(text: string){
this.cardPlanType = text;
}
   
}
