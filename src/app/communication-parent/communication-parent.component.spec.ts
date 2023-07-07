import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationParentComponent } from './communication-parent.component';

describe('CommunicationParentComponent', () => {
  let component: CommunicationParentComponent;
  let fixture: ComponentFixture<CommunicationParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunicationParentComponent]
    });
    fixture = TestBed.createComponent(CommunicationParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
