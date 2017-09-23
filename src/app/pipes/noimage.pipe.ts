import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (!value || value.length <= 0) {
            return 'assets/img/noimage.png';
        }
        return value[1].url;
    }
}
