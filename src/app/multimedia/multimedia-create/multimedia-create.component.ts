import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {ToastrService} from 'ngx-toastr';

import {MultimediaService} from '../multimedia.service';

import {Multimedia} from '../multimedia';

@Component({
    selector: 'app-multimedia-create',
    templateUrl: './multimedia-create.component.html',
    styleUrls: ['./multimedia-create.component.css']
})
export class MultimediaCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param multimediaService The multimedias' services provider
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private multimediaService: MultimediaService,
        private toastrService: ToastrService
    ) {}

    /**
    * The new multimedia
    */
    multimedia: Multimedia;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an multimedia
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new multimedia
    */
    @Output() create = new EventEmitter();

    /**
    * Creates a new multimedia
    */
    createMultimedia(): Multimedia {
        this.multimediaService.createMultimedia(this.multimedia)
            .subscribe((multimedia) => {
                this.multimedia = multimedia;
                this.create.emit();
                this.toastrService.success("The multimedia was created", "Multimedia creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
        return this.multimedia;
    }

    /**
    * Informs the parent component that the user no longer wants to create an multimedia
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.multimedia = new Multimedia();
    }
}