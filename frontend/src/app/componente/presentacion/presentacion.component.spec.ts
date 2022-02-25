import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionComponent } from './presentacion.component';

describe('CalculadoraComponent', () => {
  let app: PresentacionComponent;
  beforeEach(async(()=>{
    app= new PresentacionComponent();
  }));


  it('la potencia debe dar 4', async(()=>{
    expect(app.calculobasicas("2^2").toString()).toEqual("4");
  }));

  it('combinacion suma,resta, multiplicacion,division y potencia 19', async(()=>{
    expect(app.calculobasicas("5+5+5*(5^2)^(1/2)-2*8").toString()).toEqual("19");
  }));

});
