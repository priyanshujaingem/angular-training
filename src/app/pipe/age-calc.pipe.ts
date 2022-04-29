import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageCalc'
})
export class AgeCalcPipe implements PipeTransform {

  transform(value: any): unknown {
    const today = new Date();
    const birthDate = new Date(value);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0) {
      age--;
    }

    return age;
  }

}
