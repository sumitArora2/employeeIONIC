import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EmployeeProvider } from './../providers/employee/employee';
import { HttpModule } from '@angular/http';
import { AddDetailsPage } from './../pages/add-details/add-details';
import { EditdetailsPage } from './../pages/editdetails/editdetails';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddDetailsPage,
    EditdetailsPage
  ],
  imports: [
HttpModule,
  HttpClientModule,
  BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddDetailsPage,
    EditdetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmployeeProvider
  ]
})
export class AppModule {}
