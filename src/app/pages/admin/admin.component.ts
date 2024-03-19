import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  loggedIn: boolean = false;
  username:string=" ";
  password:string="";
  login() {
    // Perform authentication here, check username and password
    // For demonstration, let's assume a simple check
    if (this.username === 'admin' && this.password === '123456') {
      this.loggedIn = true;
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }
    train = {
      trainNo: 0,
      trainName: '',
      departureStationId: 0,
      arrivalStationId: 0,
      departureTime: '',
      arrivalTime: '',
      totalSeats: 0,
      departureDate: ''
    };
  
    constructor(private http: HttpClient) { }
  
    addTrain() {
      this.http.post<any>('https://freeapi.gerasim.in/api/TrainApp/AddNewTrain', this.train)
        .subscribe({
          next: data => {
            alert('Train added successfully!');
            // Clear form fields after successful addition
            this.train = {
              trainNo: 0,
              trainName: '',
              departureStationId: 0,
              arrivalStationId: 0,
              departureTime: '',
              arrivalTime: '',
              totalSeats: 0,
              departureDate: ''
            };
          },
          error: error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
          }
        });
    }

    seats(){
      alert("enter valid number ");

    }
  }