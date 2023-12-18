import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTramitesUserComponent } from './section-tramites-user.component';

describe('SectionTramitesUserComponent', () => {
  let component: SectionTramitesUserComponent;
  let fixture: ComponentFixture<SectionTramitesUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTramitesUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionTramitesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
