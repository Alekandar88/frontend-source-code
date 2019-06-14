import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../../@core/data/employee.service";
import {Router} from "@angular/router";

@Component({
    selector: 'ngx-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

    rows = [];
    count = 0;
    offset = 0;
    limit = 9;
    clientId;
    users;

    constructor(private employeeService: EmployeeService, private router: Router) {
    }

    ngOnInit() {
    }

    page(offset, limit) {
        this.employeeService.getEmployees(offset, limit, this.clientId).subscribe(results => {
                // const rows = [];
                // this.users.map((user) => {
                //     user.role = typeof user.role !== 'undefined' && user.role !== null ? user.role.name : '';
                //     user.id = user._id;
                //     rows.push(user);
                // });
                console.log(results);

            },
            (err) => {
                console.log(err);
            }
        );
    }

}
