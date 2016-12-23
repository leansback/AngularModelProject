import { Component, OnInit } from '@angular/core';
import { StudentService} from '../student.service';
import { Http} from '@angular/http'


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  
  students : Object[];
  
  constructor(http: Http,private studentService : StudentService) { }

  ngOnInit() {
    this.getAllStudents();
  }

  getAllStudents(){
    this.studentService.getAllStudents().subscribe(
        data => this.students = data
        , error => console.log('Server error')
        
    );
  }

  deleteStudent(studentId : string){
    this.studentService.deleteStudent(studentId).subscribe(
        data => this.getAllStudents()
    );
    
  }

}
