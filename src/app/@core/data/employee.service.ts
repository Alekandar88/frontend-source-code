import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {URLService} from "./url.service";
import {Observable} from "rxjs";

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class EmployeeService {

    constructor(private http: HttpClient, private urlService: URLService) {
    }

    // TODO: observables
    getEmployees(page, perPage, clientId): Observable<any> {
        return this.http.get(this.urlService.baseUrl +
            `/api/v1/clients/employees/${clientId}?page=${page}&perPage=${perPage}`);
    }

    getEmployee(id): Observable<any> {
        return this.http.get(this.urlService.baseUrl + '/api/v1/employees/' + id);
    }

    createRole(role): Observable<any> {
        const body = JSON.stringify(role);
        return this.http.post(this.urlService.baseUrl + '/api/v1/roles', body, httpOptions);
    }

    updateRole(role, id): Observable<any> {
        const body = JSON.stringify(role);
        return this.http.put(this.urlService.baseUrl + '/api/v1/roles/' + id, body, httpOptions);
    }

    deleteRole(id): Observable<any> {
        return this.http.delete(this.urlService.baseUrl + '/api/v1/roles/' + id);
    }
}
