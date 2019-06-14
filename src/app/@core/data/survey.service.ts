import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {URLService} from "./url.service";

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class SurveyService {

    surveyTypes = [
        {Id: 1, type: 'recap'},
        {Id: 2, type: 'exit'}
    ];

    constructor(private http: HttpClient, private urlService: URLService) {
    }

    // TODO: observables
    getSurveys() {
        return this.http.get(this.urlService.baseUrl + '/api/v1/surveys')
    }

    getSurvey(id) {
        return this.http.get(this.urlService.baseUrl + '/api/v1/surveys/' + id)
    }

    getSurveyQuestion(surveyId) {
        return this.http.get(this.urlService.baseUrl + '/api/v1/surveys/questions/' + surveyId)
    }

    createSurvey(survey) {
        const body = JSON.stringify(survey);
        return this.http.post(this.urlService.baseUrl + '/api/v1/surveys', body, httpOptions)
    }

    updateSurvey(survey, id) {
        const body = JSON.stringify(survey);
        return this.http.put(this.urlService.baseUrl + '/api/v1/surveys/' + id, body, httpOptions)
    }

    deleteSurvey(id) {
        return this.http.delete(this.urlService.baseUrl + '/api/v1/surveys' + id)
    }
}
