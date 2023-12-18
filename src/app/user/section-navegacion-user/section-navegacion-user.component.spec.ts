import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNavegacionUserComponent } from './section-navegacion-user.component';

describe('MenuNavegacionUserComponent', () => {
  let component: MenuNavegacionUserComponent;
  let fixture: ComponentFixture<MenuNavegacionUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuNavegacionUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuNavegacionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
