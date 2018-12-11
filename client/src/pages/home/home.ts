import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import { AddDetailsPage } from './../add-details/add-details';
import { EmployeeProvider } from './../../providers/employee/employee';
import { Empdetails } from '../../app/empdetails';
import { EditdetailsPage } from './../editdetails/editdetails';
import { FormGroup} from '@angular/forms';
//import { FormGroup} from '@angular/forms';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  name: string;
  department :string;
  amount:number;
  date: number;
  employee:Empdetails[];
  myForm: FormGroup;
  constructor(public navCtrl: NavController,private employeeprovider:EmployeeProvider,public modalCtrl:ModalController) {
  }
  navigateToOtherPage(): void {
    this.navCtrl.push(AddDetailsPage);
 }
 addRev()
 {
    let modal = this.modalCtrl.create(AddDetailsPage);
 
    modal.onDidDismiss(empdata => {
      if(empdata){
        this.employee.push(empdata);
        this.employeeprovider.addEmployee(empdata);       
      }
    });
    modal.present();
 }
 ionViewDidLoad() {
  console.log('ionViewDidLoad Home');
  this.employeeprovider.getEmployee()
  .subscribe(employee => this.employee= employee);
}
delemp(abc)
{
    //Remove locally
      let index = this.employee.indexOf(abc);
      if(index > -1){
        this.employee.splice(index, 1);
      }  
    //Remove from database
    this.employeeprovider.deleteEmployee(abc._id);
  }

  editemp(edit :any)
  { 
    let modal = this.modalCtrl.create(EditdetailsPage);
 
    modal.onDidDismiss(empdata => {
      if(empdata){
        this.employee.push(empdata);     
        
      }
    });
    modal.present();
  }




}
