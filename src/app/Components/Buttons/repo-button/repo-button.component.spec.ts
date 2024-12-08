import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoButtonComponent } from './repo-button.component';

describe('RepoButtonComponent', () => {
  let component: RepoButtonComponent;
  let fixture: ComponentFixture<RepoButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepoButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
