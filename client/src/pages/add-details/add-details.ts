import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { EmployeeProvider } from './../../providers/employee/employee';
import { Empdetails } from './../../app/empdetails';
/**
 * Generated class for the AddDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-details',
  templateUrl: 'add-details.html',
})
export class AddDetailsPage {
  name: string;
  department :string;
  date: string;
  amount:number;
  emp:Empdetails[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewctrl:ViewController,private employeeprovider:EmployeeProvider) {
  }
  save() 
  {
  let newEmployee={
    name:this.name,
    department:this.department,
    date:this.date,
    amount:this.amount
  }
  this.employeeprovider.addEmployee(newEmployee)
  .subscribe(employee=>{
  this.emp.push(employee.data);
  this.viewctrl.dismiss(newEmployee);
  });
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDetailsPage');
    this.employeeprovider.getEmployee()
    .subscribe(employee => this.emp= employee);
  }
  close(): void {
    this.viewctrl.dismiss();
  }
}
