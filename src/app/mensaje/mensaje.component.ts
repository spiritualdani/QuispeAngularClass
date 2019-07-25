import { Component, OnInit } from '@angular/core';
import { MensajeService } from '../servicios/mensaje.service';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {
  mensaje:object;
  ocultar:boolean; 
  segundoBoton:string; 
  ocultarButton:boolean; 
  imagenState:boolean; 
  contenidoState:boolean; 
  constructor(private mensajeService:MensajeService) 
  { this.ocultar=!false; this.segundoBoton='mostrar';this.ocultarButton=!false;this.imagenState=true;  
    this.contenidoState=true;
  }

  ngOnInit() {
    this.getMensaje(); 
  }

  getMensaje(){
    return this.mensajeService.getMensaje()
    .subscribe(data=>{
      this.mensaje=data; 
    });

  }

  hideMessage(){
    this.ocultar=!this.ocultar; 
    if(this.ocultar==false){
      this.segundoBoton='mostrar'; 
    }
    else
    {
      this.segundoBoton='ocultar';
    }
  }

  hideButton()
  {
    this.ocultarButton=!this.ocultarButton; 

  }

  mostrarImagen()
  {
    this.imagenState=!this.imagenState; 

  }

  hideContenido()
  {
    this.contenidoState=!this.contenidoState;
  }
}
