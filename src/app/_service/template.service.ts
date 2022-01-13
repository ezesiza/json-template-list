import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TemplateModel } from '../model/template.model';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  JSONURL = 'https://cobiro.s3-eu-west-1.amazonaws.com/json/prod/templates.json';

constructor(private http: HttpClient) { }


getTemplateJson(): Observable<TemplateModel[]>{
  return this.http.get<TemplateModel[]>(this.JSONURL);
}

}
