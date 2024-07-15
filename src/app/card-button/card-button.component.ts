import { Component, EventEmitter, Output } from '@angular/core';
//componente filho do card-component
@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss']
})
export class CardButtonComponent {

@Output('buttonCick') buttonClickEmitter = new EventEmitter<string>()

msgErro:string = 'Deu certo';

onButtonClick(){
console.log('função click do componente filho card-button');
this.buttonClickEmitter.emit(this.msgErro);
}

}