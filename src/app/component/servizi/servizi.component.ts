
import {ChangeDetectionStrategy, Component, signal, EventEmitter,Output} from '@angular/core';
import { Router } from '@angular/router';
import { EventServiceService } from '../../service/event-service.service';



@Component({
  selector: 'app-servizi',
  standalone: false,
  templateUrl: './servizi.component.html',
  styleUrl: './servizi.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,


})
export class ServiziComponent {
  readonly panelOpenState = signal(false);


  constructor(private router: Router, private eventService: EventServiceService) {}

 
  public navToAccount() {
    this.router.navigate(['registrazione']);
    this.eventService.emitEvent(); // Notifica il padre per chiudere il panel

  }

  public navToCatalogo() {
    this.router.navigate(['login']);
    this.eventService.emitEvent(); // Notifica il padre per chiudere il panel

  }



 
}




