import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { Form, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../login.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let form: FormGroup;
  let loginService: LoginService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule, RouterTestingModule],
      declarations: [LoginComponent],
      providers: [LoginService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.loginfrm = form;
    loginService = TestBed.get(LoginService);
    fixture.detectChanges();
  });

  afterEach(() => {
    form = null;
    loginService = null;
    fixture = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check valid form', () => {
    component.onLogin();
    expect(component.loginsubmit).toBe(true); 
    expect(component.loginfrm.invalid).toBe(true);
  });

  it('should call submit form fail', () => {
    const spy = spyOn(loginService, 'login').and.returnValue(of({message: 'ok', result:''}));      
    component.loginfrm.controls['username'].setValue('mohana');
    component.loginfrm.controls['password'].setValue('mohanakavi@123');
    component.onLogin();
    expect(component.loginfrm.valid).toBe(true);
    expect(spy).toHaveBeenCalledWith(component.loginfrm.value);
    expect(component.loading).toBe(false);
  });

  it('should return submit success mesage', () => {
    const spy = spyOn(loginService, 'login').and.returnValue(of({message: 'ok', result:'success'}));
    component.loginfrm.controls['username'].setValue('mohana');
    component.loginfrm.controls['password'].setValue('mohanakavi@123');
    component.onLogin();
    expect(component.loginfrm.invalid).toBe(false);
    expect(spy).toHaveBeenCalledWith(component.loginfrm.value);
  });

});
