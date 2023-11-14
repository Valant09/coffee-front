import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldingCartComponent } from './folding-cart.component';

describe('FoldingCartComponent', () => {
  let component: FoldingCartComponent;
  let fixture: ComponentFixture<FoldingCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoldingCartComponent]
    });
    fixture = TestBed.createComponent(FoldingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
