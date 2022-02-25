import { Component, OnInit } from '@angular/core';
import * as math from 'mathjs';
@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  basica: string = "";
  resultadob:string="";
  constructor() { }

  ngOnInit(): void {
  }

  calculobasicas(ecuacion:string){
    
    this.resultadob=math.evaluate(ecuacion)
    return this.resultadob
  }

  agregar(ecuacion:string){
    this.basica+=ecuacion
  }


}
