import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionRedesUserComponent } from './section-redes-user.component';

describe('SectionRedesUserComponent', () => {
  let component: SectionRedesUserComponent;
  let fixture: ComponentFixture<SectionRedesUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionRedesUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionRedesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
