import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { NgxPaginationModule } from 'ngx-pagination';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TodoComponent } from './todo/todo.component';
import { TodoService } from './services/todo.service';
import { AppComponent } from './app.component';
import { HeaderTodoComponent } from './header-todo/header-todo.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoPageComponent,
    HeaderTodoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    NgxPaginationModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
