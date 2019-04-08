import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MultimediaService } from '../multimedia.service';
import { Multimedia } from '../multimedia';
import { MultimediaDetail } from '../multimedia-detail';

@Component({
    selector: 'app-multimedia-detail',
    templateUrl: './multimedia-detail.component.html',
    styleUrls: ['./multimedia-detail.component.css']
})
export class MultimediaDetailComponent implements OnInit {

    /**
    * The component's constructor
    * @param multimediaService The multimedia's service
    * @param route The route element which helps to obtain the multimedia's id
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private multimediaService: MultimediaService,
        private route: ActivatedRoute
    ) { }

    /**
    * The multimedia whose details we want to show
    */
    multimediaDetail: MultimediaDetail;



    /**
    * The multimedia's id retrieved from the address
    */
    multimedia_id: number;

    /**
    * The method which retrieves the books of an multimedia
    */
    getMultimediaDetail(): void {
        this.multimediaService.getMultimediaDetail(this.multimedia_id)
            .subscribe(multimediaDetail => {
                this.multimediaDetail = multimediaDetail
            });
    }

    /**
    * The method which initializes the component
    * We need to initialize the multimedia so it is never considered as undefined
    */
    ngOnInit() {
        this.multimedia_id = +this.route.snapshot.paramMap.get('id');
        this.multimediaDetail = new MultimediaDetail();
        this.getMultimediaDetail();
    }

}