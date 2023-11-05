import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeUserListComponent } from './type-user-list.component';

describe('TypeUserListComponent', () => {
  let component: TypeUserListComponent;
  let fixture: ComponentFixture<TypeUserListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeUserListComponent]
    });
    fixture = TestBed.createComponent(TypeUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
