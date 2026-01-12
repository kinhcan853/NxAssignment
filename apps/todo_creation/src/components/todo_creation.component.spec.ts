import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToDoCreation } from './todo_creation.component';

describe('ToDoCreation', () => {
  let component: ToDoCreation;
  let fixture: ComponentFixture<ToDoCreation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoCreation],
    }).compileComponents();

    fixture = TestBed.createComponent(ToDoCreation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
