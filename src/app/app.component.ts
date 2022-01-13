import { Component } from '@angular/core';
import { TemplateModel } from './model/template.model';
import { TemplateService } from './_service/template.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cobiro';
  appTemplateList: TemplateModel[] =  [];


  constructor(private templateService: TemplateService) { }

  ngOnInit() {
    this.templateService.getTemplateJson().subscribe((items)=>{
      this.appTemplateList =  items;
    })
  }
}
