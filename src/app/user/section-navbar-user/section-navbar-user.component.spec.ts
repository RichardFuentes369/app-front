import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionNavbarUserComponent } from './section-navbar-user.component';

describe('SectionNavbarUserComponent', () => {
  let component: SectionNavbarUserComponent;
  let fixture: ComponentFixture<SectionNavbarUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionNavbarUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionNavbarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
