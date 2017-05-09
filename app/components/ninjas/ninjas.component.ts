import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../api.service';

@Component({
  selector: 'app-ninjas',
  templateUrl: './ninjas.component.html',
  styleUrls: ['./ninjas.component.css']
})
export class NinjasComponent implements OnInit {
  ninjas: any;
  Math: any;
  lat: number;
  lng: number;
  isNinja = false;

  constructor(private apiService: ApiService) {
    this.Math = Math;
   }

  ngOnInit() {
  }

  private floor(dist, num) {
    return Math.floor(dist / num);
  }

  search(lat, lng) {
    this.apiService.getNinjas(lat, lng).subscribe(ninjas => {
      this.ninjas = ninjas;
    });
  }

 }

