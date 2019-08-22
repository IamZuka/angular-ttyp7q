import { Component } from '@angular/core';
import {Cliente} from './dados';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    private cliente: Cliente = new Cliente();
    private lista: Cliente[] = [];
    add():void{
      this.lista.push(this.cliente);
      this.clear
    }
    clear():void{
      this.cliente= new Cliente();
    }
    
}
