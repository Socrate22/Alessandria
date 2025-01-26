import { Injectable, EventEmitter } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  private eventEmitter = new EventEmitter<void>();

  // Metodo per emettere l'evento
  emitEvent(): void {
    this.eventEmitter.emit();
  }

  // Metodo per sottoscriversi all'evento
  getEventEmitter(): EventEmitter<void> {
    return this.eventEmitter;
  }

}
