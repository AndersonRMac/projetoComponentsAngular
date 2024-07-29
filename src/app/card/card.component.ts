import { Component, Input, Output, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  
  private _planType: string = '';

@Input({required:true, alias: 'planPriceAlias', transform: numberAttribute})cardPlanPrice: number = 0;
@Input({alias:'planType', transform: (value:string) => value.toUpperCase()}) planType: string ='';





buttonClicked(valueEmitted:string) {
  console.log('Click do componente pai', valueEmitted);
}

}
