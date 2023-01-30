import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrderHistoryComponent } from './my-order-history.component';

describe('MyOrderHistoryComponent', () => {
  let component: MyOrderHistoryComponent;
  let fixture: ComponentFixture<MyOrderHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyOrderHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyOrderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
