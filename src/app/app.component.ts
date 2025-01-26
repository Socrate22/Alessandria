import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventServiceService } from './service/event-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  public serviziAperto:boolean;

  constructor( private router : Router, private evServ : EventServiceService){
    this.serviziAperto=false;
  }

  toggleServizi() {
    this.serviziAperto = !this.serviziAperto;
  }

  public navToLogin() {
    this.router.navigate(['login']);
    this.evServ.emitEvent(); // Notifica il padre per chiudere il panel

  }

  public navToCatalgo() {
    this.router.navigate(['catalogo']);
    if(this.serviziAperto){
      this.evServ.emitEvent(); // Notifica il padre per chiudere il panel
    }
  }

  public navToHome() {
    this.router.navigate(['home']);
    if(this.serviziAperto){
    this.evServ.emitEvent(); // Notifica il padre per chiudere il panel
  }
}

  ngOnInit(): void {
    // Sottoscrizione all'evento
    this.evServ.getEventEmitter().subscribe(() => {
      this.toggleServizi();
    });
  }

  // Metodo per chiudere il pannello
  closePanel(): void {
    console.log('Panel chiuso!');
    // Logica per chiudere il pannello
  }
}
