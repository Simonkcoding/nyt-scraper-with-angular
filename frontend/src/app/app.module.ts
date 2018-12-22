import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import when created
import { ArticleComponent } from './components/article/article.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//manually import
import {FormsModule} from '@angular/forms'
//1a. anuglar material
import {
  MatDatepickerModule,
  MatNativeDateModule,
  MatToolbarModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  MatDividerModule,
  MatSnackBarModule,
  MatFormFieldModule
} from '@angular/material';
//1b. reactive form module
import {ReactiveFormsModule} from '@angular/forms';
//2. httpclientmodule
import { HttpClientModule } from '@angular/common/http';
//3. service
import { ArticleService } from './article.service';

//4. router (if any)

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent //component added automatically
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //manually add:
    HttpClientModule,//2.
    MatToolbarModule, //1a.
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatFormFieldModule,
    ReactiveFormsModule //1b.
    //4. routerModule.forRoot(routes), if any
  ],
  providers: [ArticleService],//3.
  bootstrap: [AppComponent]
})
export class AppModule { }
