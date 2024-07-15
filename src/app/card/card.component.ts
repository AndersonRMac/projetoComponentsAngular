import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

@Input('planTypeAlias')cardPlanType: string = '';
@Input({required:true, alias: 'planPriceAlias'})cardPlanPrice: number = 0;

buttonClicked(valueEmitted:string) {
  console.log('Click do componente pai', valueEmitted);
}

}
