import { Pipe, PipeTransform } from '@angular/core';

type Todo = {
  label: string;
  status: string;
};

@Pipe({
  name: 'filter',
  pure: true,
})
export class FilterPipe implements PipeTransform {
  transform(todoCollection: Array<Todo>, filteredStatus: string): Array<Todo> {
    console.log('[TRANSFORM]');

    if (filteredStatus === '') {
      return todoCollection;
    }

    let resultArray = [];
    for (let todo of todoCollection) {
      if (filteredStatus === todo['status']) {
        resultArray.push(todo);
      }
    }

    return resultArray;
  }
}
