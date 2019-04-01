import { Component, OnInit } from '@angular/core';
import { Multimedia } from '../multimedia';
import { MultimediaService } from '../multimedia.service';

@Component({
  selector: 'app-multimedia-list',
  templateUrl: './multimedia-list.component.html',
  styleUrls: ['./multimedia-list.component.css']
})
export class MultimediaListComponent implements OnInit {
/**
    * Constructor of the component
    * @param multimediaService The multimedia's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private multimediaService: MultimediaService
        
    ) { }

    /**
    * The list of multimedias 
    */
    multimedias: Multimedia[];

    /**
    * Asks the service to update the list of multimedias
    */
    getMultimedias(): void {
        this.multimediaService.getMultimedias()
            .subscribe(multimedias => {
                this.multimedias = multimedias;
            });
    }

    /**
    * This will initialize the component by retrieving the list of multimedias from the service
    * This method will be called when the component is created
    */
    ngOnInit() {
        this.getMultimedias();
    }
}
