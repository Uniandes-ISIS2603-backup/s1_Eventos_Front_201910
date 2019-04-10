import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {MultimediaService} from '../multimedia.service';
import {MultimediaDetail} from '../multimedia-detail';


@Component({
    selector: 'app-multimedia-edit',
    templateUrl: './multimedia-edit.component.html',
    styleUrls: ['./multimedia-edit.component.css']
})
export class MultimediaEditComponent implements OnInit {

    /**
    * The component's constructor
    * @param multimediaService The multimedia's service
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private multimediaService: MultimediaService,
        private toastrService: ToastrService
    ) {}

    /**
    * The id of the multimedia that the user wants to edit
    * This is passed as a parameter by the parent component
    */
    @Input() multimedia_id: number;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an multimedia
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new multimedia
    */
    @Output() update = new EventEmitter();

    /**
    * The multimedia to edit
    */
    multimedia: MultimediaDetail;

    /**
    * Retrieves the information of the multimedia
    */
    getMultimedia(): void {
        this.multimediaService.getMultimediaDetail(this.multimedia_id)
            .subscribe(multimedia => {
                this.multimedia = multimedia;
            });
    }

    /**
    * Updates the multimedia's information
    */
    editMultimedia(): void {
        this.multimediaService.updateMultimedia(this.multimedia)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The multimedia's information was updated", "Multimedia edition");
            });
    }

    /**
    * Informs the parent component that the user no longer wants to update the multimedia
    */
    cancelEdition(): void {
        this.cancel.emit();
    }

    /**
    * The function which initializes the component
    */
    ngOnInit() {
        this.multimedia = new MultimediaDetail();
        this.getMultimedia();
    }

    /**
    * The function which is called every time the user chooses to edit a different multimedia
    */
    ngOnChanges() {
        this.ngOnInit();
    }
}