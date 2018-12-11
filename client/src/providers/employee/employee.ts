import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

/*
  Generated class for the EmployeeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EmployeeProvider {
data: any;
  constructor(public http: Http) {
    console.log('Hello EmployeeProvider Provider');
  this.data=null;
  }
    
addEmployee(newEmployee)
{
let headers=new Headers();
headers.append('Content-type', 'application/json');
    return this.http.post('http://localhost:8080/api/employee', newEmployee, { headers: headers })
      .pipe(map(res => res.json()));
  }
getEmployee()
{
  return this.http.get('http://localhost:8080/api/employee')
  .pipe(map(res => res.json()));
}

deleteEmployee(id){
  this.http.delete('http://localhost:8080/api/employee/' + id).subscribe((res) => {
    console.log(res);
  }); 
}
  //update the contact
  editEmployee(id, newEmployee)
  {
  var headers = new Headers();
  headers.append('Content-type', 'application/json');
  return this.http.put('http://localhost:8080/api/employee/' + id, newEmployee, { headers: headers })
    .pipe(map(res => res.json()));
}
}
