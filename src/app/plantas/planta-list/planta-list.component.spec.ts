import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

import { PlantaListComponent } from './planta-list.component';

describe('PlantaListComponent', () => {
  let component: PlantaListComponent;
  let fixture: ComponentFixture<PlantaListComponent>;
  let debug: DebugElement;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantaListComponent ],
      providers:[PlantaService],
      imports:[HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaListComponent);
    component = fixture.componentInstance;

    component.plants=[
      new Planta(8,"girasol", "girasolus florus", "Interior", 80, "Templado, calido","Tierra organica"),
      new Planta(9,"gladolo", "gladiolus florus", "Interior", 90, "Templado","Tierra abonada"),
      new Planta(10,"manzano", "manzanus arbulus", "exterior", 100, "Calido","Tierra con abundante agua"),
    ]

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    expect(debug.query(By.css('.title')).nativeElement.textContent).toContain(
      'Vivero El Otoño'
    );
  });

  it('should render headers', () => {
    expect(debug.query(By.css('#number')).nativeElement.textContent).toContain('#');
    expect(debug.query(By.css('#name')).nativeElement.textContent).toContain('Nombre comun');
    expect(debug.query(By.css('#type')).nativeElement.textContent).toContain('Tipo');
    expect(debug.query(By.css('#climate')).nativeElement.textContent).toContain('Clima');
  });

  it('should render 3 rows', () => {
    component.plants.forEach(p=>{
      expect(debug.query(By.css('#'+p.nombre_comun)).nativeElement).toBeTruthy();
      expect(debug.query(By.css('#'+p.nombre_comun)).nativeElement.textContent).toContain(p.id);

    })
  });

});
