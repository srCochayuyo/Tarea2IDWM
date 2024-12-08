import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactameButtonComponent } from './contactame-button.component';

describe('ContactameButtonComponent', () => {
  let component: ContactameButtonComponent;
  let fixture: ComponentFixture<ContactameButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactameButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactameButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
