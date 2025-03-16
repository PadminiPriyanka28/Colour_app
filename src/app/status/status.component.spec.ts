import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusComponent } from './status.component';

describe('StatusComponent', () => {
  let component: StatusComponent;
  let fixture: ComponentFixture<StatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatusComponent]
    });
    fixture = TestBed.createComponent(StatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Yes, I am working!" when working button is clicked', () => {
    const workingButton = fixture.nativeElement.querySelector('.working-button');
    workingButton.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.message').textContent).toContain('Yes, I am working!');
  });

  it('should display "No, I am dead!" when dead button is clicked', () => {
    const deadButton = fixture.nativeElement.querySelector('.dead-button');
    deadButton.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.message').textContent).toContain('No, I am dead!');
  });
});