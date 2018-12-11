import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Empdetails } from './../../app/empdetails';
//import { EmployeeProvider } from './../../providers/employee/employee';
import { FormGroup} from '@angular/forms';
/**
 * Generated class for the EditdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editdetails',
  templateUrl: 'editdetails.html',
})
export class EditdetailsPage {
  name: string;
  department :string;
  date: string;
  amount:number;
  emp:Empdetails[];
  myForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewctrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditdetailsPage');
  }
  close(): void {
    this.viewctrl.dismiss();
  }
  

  send(edit:any )
  {
    this.myForm.patchValue({
      name: edit.name,
      department: edit.department,
      date: edit.date,
      amount:edit.amount
    }) 
  }
 
  


}
