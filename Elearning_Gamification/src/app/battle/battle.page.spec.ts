import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BattlePage } from './battle.page';

describe('BattlePage', () => {
  let component: BattlePage;
  let fixture: ComponentFixture<BattlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BattlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
