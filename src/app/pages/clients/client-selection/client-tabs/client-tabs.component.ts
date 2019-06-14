import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'ngx-client-tabs',
    templateUrl: './client-tabs.component.html',
    styleUrls: ['./client-tabs.component.scss']
})
export class ClientTabsComponent implements OnInit {

    clientId;
    isAddEmployee = false;

    constructor(private route: ActivatedRoute) {
    }

    onTabChange($event) {
        console.log($event);
        switch ($event.tabTitle) {
            case 'Employees': this.isAddEmployee = false;
                break;
        }
    }

    onClickAddEmployee() {
        this.isAddEmployee = true;
    }

    ngOnInit() {
        this.clientId = this.route.snapshot.paramMap.get('id');
    }

}
