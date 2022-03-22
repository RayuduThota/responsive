import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { CrudService } from 'src/app/service/crud.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RouterTestingModule } from '@angular/router/testing'


describe( 'DashboardComponent',() => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
 


 beforeEach {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports :[HttpClientTestingModule ],
    })
    .compileComponents();
 };

beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  ///it('should create', () => {
    //expect(component).toBeTruthy();
  //});
});
