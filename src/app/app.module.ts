import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { SidebarModule } from 'ng-sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './category/category.component';
import { HttpClientModule } from '@angular/common/http';
import {

  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';

import { AboutComponent } from './category/about/about.component';
import { ArtComponent } from './category/art/art.component';
import { CodeComponent } from './category/code/code.component';

export const routerConfig: Routes = [
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'art',
        component: ArtComponent
    },
    {
        path: 'code',
        component: CodeComponent
    },
    {
        path: '',
        redirectTo: '/about',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    AboutComponent,
    ArtComponent,
    CodeComponent
      ],
  imports: [
    RouterModule.forRoot(
      routerConfig,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SidebarModule.forRoot(),
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

