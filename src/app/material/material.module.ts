import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatCardModule
  ],
  exports:[
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatCardModule
  ]
})
export class MaterialModule { }
