import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-planta-list',
  templateUrl: './planta-list.component.html',
  styleUrls: ['./planta-list.component.css']
})
export class PlantaListComponent implements OnInit {

  plants:Array<Planta> = []

  constructor(private plantaService: PlantaService) { }

  getPlants():void{
    this.plantaService.getPlants().subscribe((plants)=>{
      this.plants = plants
    })
  }

  ngOnInit(): void {
    this.getPlants()
  }

}
