import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubButonComponent } from './git-hub-buton.component';

describe('GitHubButonComponent', () => {
  let component: GitHubButonComponent;
  let fixture: ComponentFixture<GitHubButonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitHubButonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitHubButonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
