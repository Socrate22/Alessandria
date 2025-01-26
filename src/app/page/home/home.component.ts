import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EventServiceService } from '../../service/event-service.service';
import { ServiceLibri } from '../../service/service-libro.service';


@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public libriFiltrati: any; 
  public formHome : FormGroup;


constructor(private router : Router, private evServ : EventServiceService, private serviceLibri: ServiceLibri){
  this.libriFiltrati=[];
  this.formHome = new FormGroup({
    catalogo: new FormControl(),
    campo: new FormControl()
  });

  this.setCampo()

}

public setCampo(){
  this.formHome.get('campo')?.setValue('titolo')

}

public vaiCatalogo() {
  this.router.navigate(['/catalogo']);
  this.evServ.emitEvent(); 
}

public cercaLibri() {
  let catalogo = this.formHome.get('catalogo')?.value || '';
  let campo = this.formHome.get('campo')?.value || '';

  if (!campo) {
    console.error('Il campo di ricerca non è valido');
    return;
  }
  
  this.libriFiltrati = this.serviceLibri.getLibriFiltrati(catalogo, campo);
  console.log(this.libriFiltrati);
}




}
