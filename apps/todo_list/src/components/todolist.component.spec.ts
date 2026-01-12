import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToDoList } from './todolist.component';

describe('ToDoList', () => {
  let component: ToDoList;
  let fixture: ComponentFixture<ToDoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoList],
    }).compileComponents();

    fixture = TestBed.createComponent(ToDoList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
