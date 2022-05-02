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
  interiorPlants:number =0
  exteriorPlants:number =0

  constructor(private plantaService: PlantaService) { }

  getPlants():void{
    this.plantaService.getPlants().subscribe((plants)=>{
      this.plants = plants
      this.countPlants()
    })
  }

  countPlants():void {
    this.plants.forEach(plant => {
      if(plant.tipo == "Interior"){
        this.interiorPlants++
      }else{
        this.exteriorPlants++
      }
    });
  }

  ngOnInit(): void {
    this.getPlants()
  }

}


