import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  private _planType: string = '';

@Input('planType') 
set cardPlanType(value:string){
  this._planType = value.toUpperCase();
}

get planType():string{
  return this._planType;
}



@Input({required:true, alias: 'planPriceAlias'})cardPlanPrice: number = 0;






buttonClicked(valueEmitted:string) {
  console.log('Click do componente pai', valueEmitted);
}

}
