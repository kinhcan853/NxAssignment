import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoProgress } from './todo_progress';

describe('TodoProgress', () => {
  let component: TodoProgress;
  let fixture: ComponentFixture<TodoProgress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoProgress],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoProgress);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
