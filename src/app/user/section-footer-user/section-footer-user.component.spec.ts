import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFooterUserComponent } from './section-footer-user.component';

describe('SectionFooterUserComponent', () => {
  let component: SectionFooterUserComponent;
  let fixture: ComponentFixture<SectionFooterUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionFooterUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionFooterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
