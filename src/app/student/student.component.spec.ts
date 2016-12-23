import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { StudentComponent } from './student.component';
import { HttpModule } from '@angular/http';
import { StudentService } from '../student.service';

describe('App: Angular2', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, StudentComponent
      ],
      imports: [ HttpModule ],
      providers: [ StudentService ]
    });
  });

  // it('should create the app', async(() => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   let app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));

  // it(`should have as title 'Model Eleva'`, async(() => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   let app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('Model Eleva');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   let compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Model Eleva');
  // }));

  //   it('verifica lista de candidatos', async(() => {
  //   let fixture = TestBed.createComponent(CandidateComponent);
  //   fixture.detectChanges();
  //   let compiled = fixture.debugElement.nativeElement;
  //   expect(fixture.componentInstance.candidates.length).toBeGreaterThan(1);
  // }));
});

function multiplicaDoisNumeros ( valor1, valor2 ) {
 return valor1 * valor2;
}

describe('função que multiplica dois números', function () {
 let mult = multiplicaDoisNumeros;
 it('verifica se estamos multiplicando corretamente', function () {
  expect( mult ).toBeDefined();
  expect( mult( 3, 7 ) ).toBe( 21 );
 });
});