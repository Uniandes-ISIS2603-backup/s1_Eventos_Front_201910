import {Component, OnInit} from '@angular/core';

import {Multimedia} from '../multimedia';
import {MultimediaService} from '../multimedia.service';

/**
* The component for the list of multimedias 
*/
@Component({
    selector: 'app-multimedia',
    templateUrl: './multimedia-list.component.html',
    styleUrls: ['./multimedia-list.component.css']
})
export class MultimediaListComponent implements OnInit {

    /**
    * Constructor for the component
    * @param multimediaService The multimedia's services provider
    */
    constructor(
        private multimediaService: MultimediaService,
    ) {}

    /**
    * The list of multimedias 
    */
    multimedias: Multimedia[];

    /**
    * Shows or hides the create component
    */
    showCreate: boolean;

    /**
     * Shows or hides the edit component.
     */
    showEdit: boolean;

    /**
     * The id of the multimedia being edited.
     */
    multimedia_edit_id: number;

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
    * Shows or hides the create component
    */
    showHideCreate(): void {
        this.showEdit = false;
        this.showCreate = !this.showCreate!
    }

    /**
    * Shows or hides the create component
    */
    showHideEdit(multimedia_id: number): void {
        if (!this.showEdit || (this.showEdit && multimedia_id != this.multimedia_edit_id)) {
            this.showCreate = false;
            this.showEdit = true;
            this.multimedia_edit_id = multimedia_id;
        }
        else {
            this.showEdit = false;
        }
    }

    updateMultimedia(): void {
        this.showEdit = false;
    }

    /**
    * This will initialize the component by retrieving the list of multimedias from the service
    * This method will be called when the component is created
    */
    ngOnInit() {
        this.showCreate = false;
        this.showEdit = false;
        this.getMultimedias();
    }
}
