import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionNoticiasUserComponent } from './section-noticias-user.component';

describe('SectionNoticiasUserComponent', () => {
  let component: SectionNoticiasUserComponent;
  let fixture: ComponentFixture<SectionNoticiasUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionNoticiasUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionNoticiasUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
