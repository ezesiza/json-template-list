import { Component, Input, OnInit } from '@angular/core';
import { TemplateModel } from '../model/template.model';

@Component({
  selector: 'template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss']
})
export class TemplateListComponent implements OnInit {

  @Input() templateList: TemplateModel[] =  [];
  constructor(){}

  ngOnInit(): void {

  }

}
