import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
    selector: 'app-student-update',
    templateUrl: './student-update.component.html',
    styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {

    id: number;
    student: any;

    constructor(private route: ActivatedRoute, private router: Router, private studentService: StudentService) { }

    ngOnInit() {
        this.student = new Student();
        this.id = this.route.snapshot.params['id'];

        this.studentService.getStudent(this.id).subscribe(data => {
            console.log(data);
            this.student = data;
        }, error => console.log(error));
    }

    updateStudent() {
        this.studentService.updateStudent(this.id, this.student).subscribe(data => {
            console.log(data);
            this.student = new Student();
            this.gotoList();
        }, error => console.log(error));
    }

    onSubmit() {
        this.updateStudent();
    }

    gotoList() {
        this.router.navigate(['/students']);
    }

}
