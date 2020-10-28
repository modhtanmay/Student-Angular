import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { Student } from './student.model';

@Injectable({
    providedIn: "root"
})

export class StudentService {

    private baseUrl = 'http://localhost:8081/api/v1/students';

    constructor(private http: HttpClient) { }

    //     @GetMapping("/students/{id}")
    //     public ResponseEntity<Student> getStudentById(@PathVariable(value = "id") Long studentId)
    //     throws ResourceNotFoundException {
    //     Student student = studentRepository.findById(studentId)
    //         .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + studentId));
    //     return ResponseEntity.ok().body(student);
    //     }

    getStudent(id: number): Observable<Object> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    // @PostMapping("/students")
    // public Student createStudent(@Valid @RequestBody Student student) {
    //     return studentRepository.save(student);
    // }

    createStudent(student: object): Observable<Object> {
        return this.http.post(`${this.baseUrl}`, student);
    }

    //     @PutMapping("/students/{id}")
    //     public ResponseEntity<Student> updateStudent(@PathVariable(value = "id") Long studentId,
    //         @Valid @RequestBody Student studentDetails) throws ResourceNotFoundException {
    //     Student student = studentRepository.findById(studentId)
    //         .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + studentId));

    //     student.setEmailId(studentDetails.getEmailId());
    //     student.setLastName(studentDetails.getLastName());
    //     student.setFirstName(studentDetails.getFirstName());
    //     final Student updatedStudent = studentRepository.save(student);
    //     return ResponseEntity.ok(updatedStudent);
    // }

    updateStudent(id: number, student: any): Observable<Object> {
        return this.http.put(`${this.baseUrl}/${id}`, student);
    }

    //     @DeleteMapping("/students/{id}")
    //     public Map<String, Boolean> deleteStudent(@PathVariable(value = "id") Long studentId)
    //     throws ResourceNotFoundException {
    //     Student student = studentRepository.findById(studentId)
    //         .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + studentId));

    //     studentRepository.delete(student);
    //     Map < String, Boolean > response = new HashMap<>();
    //     response.put("deleted", Boolean.TRUE);
    //     return response;
    // }

    deleteStudent(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }

    // @GetMapping("/students")
    // public List<Student> getAllStudents() {
    //     return studentRepository.findAll();
    // }

    getStudentsList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
    }

}