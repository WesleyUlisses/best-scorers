import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPlayerContainerComponent } from './show-player-container.component';

describe('ShowPlayerContainerComponent', () => {
  let component: ShowPlayerContainerComponent;
  let fixture: ComponentFixture<ShowPlayerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowPlayerContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPlayerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
