/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StudentComponent} from './student/student.component';

describe('App: Modelo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
        ,StudentComponent
      ],
    });
  });

//  it('list of students must have more than one record', function() { 
//    
//    expect(StudentComponent.students.length).toBeGreaterThanOrEqual(1);
//  });

//  it('should create the app', async(() => {
//    let fixture = TestBed.createComponent(StudentComponent);
//    let app = fixture.debugElement.componentInstance;
//    expect(StudentComponent.).toBeTruthy();
//  }));

//  it(`should have as title 'app works!'`, async(() => {
//    let fixture = TestBed.createComponent(AppComponent);
//    let app = fixture.debugElement.componentInstance;
//    expect(app.title).toEqual('app works!');
//  }));

//  it('should render title in a h1 tag', async(() => {
//    let fixture = TestBed.createComponent(AppComponent);
//    fixture.detectChanges();
//    let compiled = fixture.debugElement.nativeElement;
//    expect(compiled.querySelector('h1').textContent).toContain('app works!');
//  }));
});
