import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoNotification } from './todo_notification';

describe('TodoNotification', () => {
  let component: TodoNotification;
  let fixture: ComponentFixture<TodoNotification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoNotification],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoNotification);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
