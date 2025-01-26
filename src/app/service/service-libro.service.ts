import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Questo rende il service disponibile globalmente nell'app
})
export class ServiceLibri {

  public libri: any = [
    {titolo: 'Il Signore degli Anelli', autore: 'J.R.R. Tolkien', genere: 'Fantasy', numeroDiCopie: 10, biblioteca: 'Biblioteca Angelica'},
    {titolo: '1984', autore: 'George Orwell', genere: 'Sci-Fi', numeroDiCopie: 7, biblioteca: 'Biblioteca Nazionale Centrale di Roma'},
    {titolo: 'La Repubblica', autore: 'Platone', genere: 'Filosofia', numeroDiCopie: 5, biblioteca: 'Biblioteca Casanatense'},
    {titolo: 'Harry Potter e la Pietra Filosofale', autore: 'J.K. Rowling', genere: 'Fantasy', numeroDiCopie: 12, biblioteca: 'Biblioteca Vallicelliana'},
    {titolo: 'Dune', autore: 'Frank Herbert', genere: 'Sci-Fi', numeroDiCopie: 8, biblioteca: 'Biblioteca Angelica'},
    {titolo: 'Il mondo di Sofia', autore: 'Jostein Gaarder', genere: 'Filosofia', numeroDiCopie: 6, biblioteca: 'Biblioteca Nazionale Centrale di Roma'},
    {titolo: 'Il Trono di Spade', autore: 'George R.R. Martin', genere: 'Fantasy', numeroDiCopie: 9, biblioteca: 'Biblioteca Casanatense'},
    {titolo: 'Fahrenheit 451', autore: 'Ray Bradbury', genere: 'Sci-Fi', numeroDiCopie: 7, biblioteca: 'Biblioteca Vallicelliana'},
    {titolo: 'Critica della ragion pura', autore: 'Immanuel Kant', genere: 'Filosofia', numeroDiCopie: 4, biblioteca: 'Biblioteca Angelica'},
    {titolo: 'La Storia Infinita', autore: 'Michael Ende', genere: 'Fantasy', numeroDiCopie: 11, biblioteca: 'Biblioteca Nazionale Centrale di Roma'},
    {titolo: 'Neuromante', autore: 'William Gibson', genere: 'Sci-Fi', numeroDiCopie: 5, biblioteca: 'Biblioteca Casanatense'},
    {titolo: 'Così parlò Zarathustra', autore: 'Friedrich Nietzsche', genere: 'Filosofia', numeroDiCopie: 6, biblioteca: 'Biblioteca Vallicelliana'},
    {titolo: 'Il Nome del Vento', autore: 'Patrick Rothfuss', genere: 'Fantasy', numeroDiCopie: 8, biblioteca: 'Biblioteca Angelica'},
    {titolo: 'La macchina del tempo', autore: 'H.G. Wells', genere: 'Sci-Fi', numeroDiCopie: 4, biblioteca: 'Biblioteca Nazionale Centrale di Roma'},
    {titolo: 'La Metafisica', autore: 'Aristotele', genere: 'Filosofia', numeroDiCopie: 3, biblioteca: 'Biblioteca Casanatense'},
    {titolo: 'Eragon', autore: 'Christopher Paolini', genere: 'Fantasy', numeroDiCopie: 10, biblioteca: 'Biblioteca Vallicelliana'},
    {titolo: 'Ubik', autore: 'Philip K. Dick', genere: 'Sci-Fi', numeroDiCopie: 7, biblioteca: 'Biblioteca Angelica'},
    {titolo: 'L\'etica Nicomachea', autore: 'Aristotele', genere: 'Filosofia', numeroDiCopie: 4, biblioteca: 'Biblioteca Nazionale Centrale di Roma'},
    {titolo: 'La Spada di Shannara', autore: 'Terry Brooks', genere: 'Fantasy', numeroDiCopie: 6, biblioteca: 'Biblioteca Casanatense'},
    {titolo: 'Io, Robot', autore: 'Isaac Asimov', genere: 'Sci-Fi', numeroDiCopie: 8, biblioteca: 'Biblioteca Vallicelliana'},
    {titolo: 'Meditazioni', autore: 'Marco Aurelio', genere: 'Filosofia', numeroDiCopie: 3, biblioteca: 'Biblioteca Angelica'},
    {titolo: 'Le Cronache di Narnia', autore: 'C.S. Lewis', genere: 'Fantasy', numeroDiCopie: 9, biblioteca: 'Biblioteca Nazionale Centrale di Roma'},
    {titolo: 'La Guerra dei Mondi', autore: 'H.G. Wells', genere: 'Sci-Fi', numeroDiCopie: 7, biblioteca: 'Biblioteca Casanatense'},
    {titolo: 'Essere e Tempo', autore: 'Martin Heidegger', genere: 'Filosofia', numeroDiCopie: 2, biblioteca: 'Biblioteca Vallicelliana'},
    {titolo: 'La Torre Nera', autore: 'Stephen King', genere: 'Fantasy', numeroDiCopie: 7, biblioteca: 'Biblioteca Angelica'},
    {titolo: 'Il Problema dei Tre Corpi', autore: 'Liu Cixin', genere: 'Sci-Fi', numeroDiCopie: 5, biblioteca: 'Biblioteca Nazionale Centrale di Roma'},
    {titolo: 'La Caverna', autore: 'José Saramago', genere: 'Filosofia', numeroDiCopie: 3, biblioteca: 'Biblioteca Casanatense'},
    {titolo: 'Mistborn', autore: 'Brandon Sanderson', genere: 'Fantasy', numeroDiCopie: 8, biblioteca: 'Biblioteca Vallicelliana'},
    {titolo: 'Hyperion', autore: 'Dan Simmons', genere: 'Sci-Fi', numeroDiCopie: 6, biblioteca: 'Biblioteca Angelica'},
    {titolo: 'Dialoghi', autore: 'Platone', genere: 'Filosofia', numeroDiCopie: 5, biblioteca: 'Biblioteca Nazionale Centrale di Roma'}
  ];
  
  

  constructor() { }

  // Metodo per ottenere la lista dei libri
  getLibri(): any[] {
    return this.libri;
  }

  public getLibriFiltrati(catalogo: string, campo: string) {
    return this.libri.filter((val: any) => 
      val[campo]?.toLowerCase().includes(catalogo.toLowerCase())
    );
  }

  
}
