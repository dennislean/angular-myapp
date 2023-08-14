import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { ReqresUserComponent } from './components/reqres-user/reqres-user.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      declarations: [
        FooterComponent,
        HomeComponent,
        HeaderComponent,
        ReqresUserComponent,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
