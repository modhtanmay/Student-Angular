import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentCreateComponent } from './student/student-create/student-create.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
    { path: '', redirectTo: 'students', pathMatch: 'full' },
    { path: 'students', component: StudentListComponent },
    { path: 'addStudent', component: StudentCreateComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
