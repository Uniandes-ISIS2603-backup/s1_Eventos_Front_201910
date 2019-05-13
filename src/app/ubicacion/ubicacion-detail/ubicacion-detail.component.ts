import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { UbicacionService } from '../ubicacion.service';
import {Ubicacion} from '../ubicacion'
import { ViewChild } from '@angular/core';
import { } from 'googlemaps';

@Component({
  selector: 'app-ubicacion-detail',
  templateUrl: './ubicacion-detail.component.html',
  styleUrls: ['./ubicacion-detail.component.css']
})
export class UbicacionDetailComponent implements OnInit {

@Input() ubicacion:Ubicacion;
ubicacion_id:number;
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(4.604673983914381, -74.06689060090785),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }
} 
 




