import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
declare var require: any;
var math = require('mathjs');
@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  basica: string = "";
  resultadob:string="";
  resultadoa:string="";
  resultadop:string="";
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.get().subscribe((res:any)=>{
      this.resultadoa= res.data
    })
  }

  calculobasicas(ecuacion:string){
    
    this.resultadob=math.evaluate(ecuacion)
    return this.resultadob
  }

  agregar(ecuacion:string){
    this.basica+=ecuacion
  }

  peticion(){
    this.service.post().subscribe((res:any)=>{
      this.resultadop= res.data
    })
  }
}
