import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaMarcusComponent } from './tarefa-marcus.component';

describe('TarefaMarcusComponent', () => {
  let component: TarefaMarcusComponent;
  let fixture: ComponentFixture<TarefaMarcusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarefaMarcusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarefaMarcusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
