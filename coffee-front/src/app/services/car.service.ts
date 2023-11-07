import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private car: any[] = [];

  getCar(): any[] {
    return this.car;
  }

}
