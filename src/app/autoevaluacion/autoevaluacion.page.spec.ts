import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutoevaluacionPage } from './autoevaluacion.page';

describe('AutoevaluacionPage', () => {
  let component: AutoevaluacionPage;
  let fixture: ComponentFixture<AutoevaluacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoevaluacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutoevaluacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
