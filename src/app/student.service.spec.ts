 /* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StudentService } from './student.service';
import { Http, Response} from '@angular/http';
import {HttpModule} from '@angular/http';
import { StudentComponent} from './student/student.component';

describe('Service: Student', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentComponent ],
      providers: [StudentService]
      , imports: [HttpModule]
    });
  });

it('should construct', async(inject([StudentService], (service) => {
    expect(service).toBeDefined();
  })));

 // it('verifica lista de candidatos', async(() => {
 //    let fixture = TestBed.createComponent(StudentComponent);
 //    
 //    fixture.detectChanges();
 //    let compiled = fixture.debugElement.nativeElement;
 //    expect(fixture.componentInstance.students.length).toBeGreaterThan(0);


 //  }));

});
