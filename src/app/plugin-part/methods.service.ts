import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { apiUrlBaseMethods } from './methods.api.config';

import MethodsModel from './methods.model';

@Injectable()
export default class MethodsService {
  constructor(private  httpClient: HttpClient) { }

  getMethods(methods: string[]): Promise<MethodsModel[]> {
    const send = { methods };
    return this.httpClient.post<MethodsModel[]>(apiUrlBaseMethods, send).toPromise();
  }
}
