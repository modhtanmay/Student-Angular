import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
    selector: 'app-student-create',
    templateUrl: './student-create.component.html',
    styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

    student: Student = new Student();
    submitted = false;

    constructor(private studentService: StudentService) { }

    ngOnInit(): void {
    }

    newStudent(): void {
        this.submitted = false;
        this.student = new Student();
    }
    save() {
        this.studentService.createStudent(this.student).subscribe(data => console.log(data), error => console.log(error));
        this.student = new Student();
    }

    onSubmit() {
        this.submitted = true;
        this.save();
    }



}
