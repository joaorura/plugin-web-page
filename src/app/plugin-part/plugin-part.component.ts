import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import MethodsService from './methods.service';
import MethodsModel from './methods.model';

@Component({
  selector: 'app-plugin-part',
  templateUrl: './plugin-part.component.html',
  styleUrls: ['./plugin-part.component.css'],
  providers: [ MethodsService ]
})
export class PluginPartComponent implements OnInit {
  constructor(private route: ActivatedRoute, private methodsService: MethodsService) { }

  public methodsModels: MethodsModel[] = null;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.methods === undefined) {
        return;
      }

      this.processMethods(params.methods);
    });
  }

  private processMethods(text: string): void {
    const methods: string[] = text.split('|||');
    this.methodsService.getMethods(methods)
      .then((answer: MethodsModel[]) => {
        this.methodsModels = answer;
      });
  }
}
