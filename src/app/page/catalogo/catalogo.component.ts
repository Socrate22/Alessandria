import { Component, OnInit } from '@angular/core';
import { ServiceLibri } from '../../service/service-libro.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-catalogo',
  standalone: false,

  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css',
})
export class CatalogoComponent implements OnInit {
  public filterDataForm: FormGroup;

  public libreria: any;

  public dataSourceTable: MatTableDataSource<any>;

  public displayedColumns: any;

  constructor(private serlibri: ServiceLibri) {
    this.filterDataForm = new FormGroup({
      colonna: new FormControl(''),
      valore: new FormControl(''),
      ordine: new FormControl(''),
    });

    this.libreria = [];
    this.displayedColumns = ['titolo', 'autore', 'genere', 'numeroDiCopie'];
    this.dataSourceTable = new MatTableDataSource<any>(this.serlibri.libri);

    this.setColonna();

    this.setOrdine();
  }

  ngOnInit(): void {
    this.libreria = this.serlibri.getLibri();
    this.dataSourceTable = new MatTableDataSource<any>(this.libreria);
  }

  public sortBook() {
    let colonna = this.filterDataForm.get('colonna')?.value;
    let ordine = this.filterDataForm.get('ordine')?.value;

    this.libreria.sort((a: any, b: any) => {
      if (ordine === 'asc') {
        return a[colonna].localeCompare(b[colonna]); 
      } else if (ordine === 'desc') {
        return b[colonna].localeCompare(a[colonna]); 
      }
    });
  
    console.log(this.libreria); // Verifica se l'array è stato ordinato
  
    this.dataSourceTable = new MatTableDataSource<any>(this.libreria); 
  }

  public FiltertBook() {
    let colonna = this.filterDataForm.get('colonna')?.value;

    let valore = this.filterDataForm.get('valore')?.value;

    let filterList = this.libreria.filter((a: any) => {
      return a[colonna] == valore;
    });

    this.dataSourceTable = new MatTableDataSource<any>(filterList);
  }

  public setColonna() {
    this.filterDataForm.get('colonna')?.setValue('titolo');
  }

  public setOrdine() {
    this.filterDataForm.get('ordine')?.setValue('asc');
  }

  
}
