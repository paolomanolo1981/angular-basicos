import { Component, /* OnInit */ } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  //styleUrls: ['./listado.component.css']
})
export class ListadoComponent /*implements OnInit*/{

   heroes:string[]=["Spiderman","Ironman","Hulk","Goku","Capitan America"];
   heroeBorrado:string;//|undefined;
  constructor() { 
    console.log("constructor");
    this.heroeBorrado="";
  }
/*
  ngOnInit(): void {
    console.log("ngOnInit");
  }*/

  borrarHeroe(){
    const valor=this.heroes.shift();
    this.heroeBorrado = valor || "";
   
   console.log(this.heroeBorrado);
  }

}
