import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Pagina1Component } from '../pagina1/pagina1.component';
import { Pagina2Component } from '../pagina2/pagina2.component';
import { Pagina3Component } from '../pagina3/pagina3.component';
import { Pagina4Component } from '../pagina4/pagina4.component';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    Pagina1Component,
    Pagina2Component,
    Pagina3Component,
    Pagina4Component
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatSidenavModule,
    RouterModule,
    MatListModule,
    MatGridListModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatTableModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatSidenavModule,
    Pagina1Component,
    Pagina2Component,
    Pagina3Component,
    Pagina4Component,
    MatListModule,
    MatGridListModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatTableModule
  ]
})
export class MaterialModule { }
