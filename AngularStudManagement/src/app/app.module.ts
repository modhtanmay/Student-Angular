import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentCreateComponent } from './student/student-create/student-create.component';
import { StudentUpdateComponent } from './student/student-update/student-update.component';

@NgModule({
    declarations: [
        AppComponent,
        StudentComponent,
        StudentListComponent,
        StudentCreateComponent,
        StudentUpdateComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule, HttpClientModule, FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
