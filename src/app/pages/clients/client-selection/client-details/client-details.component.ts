import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../../../@core/data/client.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'ngx-client-details',
    templateUrl: './client-details.component.html',
    styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {

    clientId;

    constructor(private clientService: ClientService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
    }

}
