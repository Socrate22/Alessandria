import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { CatalogoComponent } from './page/catalogo/catalogo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatLabel } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiziComponent } from './component/servizi/servizi.component';
import { MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RegistrazioneComponent } from './page/registrazione/registrazione.component';
import { Ex } from './page/ex/ex'; 



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CatalogoComponent,
    ServiziComponent,
    RegistrazioneComponent,
    Ex
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormField,
    MatSelect,
    MatOption,
    MatTableModule,
    MatLabel,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    MatDatepickerModule,
    MatAccordion,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule

  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    provideNativeDateAdapter(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
