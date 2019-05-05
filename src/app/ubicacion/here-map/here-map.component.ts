import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

declare var H: any;

@Component({
    selector: 'here-map',
    templateUrl: './here-map.component.html',
    styleUrls: ['./here-map.component.css']
})
export class HereMapComponent implements OnInit {

    @ViewChild("map")
    public mapElement: ElementRef;

   

    public constructor() { }

    public ngOnInit() { }

    public ngAfterViewInit() {
        let platform = new H.service.Platform({
            "app_id": 'pWMx9km1UA0rzENhVJWx',
            "app_code": 'gomqrYmFSTWNiym1mvy_ig'
        });
        let defaultLayers = platform.createDefaultLayers();
        let map = new H.Map(
            this.mapElement.nativeElement,
            defaultLayers.normal.map,
            {
                zoom: 10,
                center: { lat:52.5159, lng:13.3777 }
            }
        );
    }

}