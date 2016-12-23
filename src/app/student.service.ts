import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class StudentService {

  constructor(private http : Http) {
  }

  getAllStudents(): Observable<any>{
    return this.http.get("http://localhost:3000/alunos")
      .map((res : Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteStudent(studentId : string): Observable<any>{
    return this.http.delete("http://localhost:3000/alunos/" + studentId);
  }

}
