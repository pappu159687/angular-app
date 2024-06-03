import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserProfileComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    users = [
    {name: "Pappu Kr Singh", isSingle: "true", status:"Great Man", salary:"20000"},
    {name: "Dhruv Raj", isSingle: "false", status:"Great Man", salary: "400000"},
    {name: "Adity Mehta", isSnigle: "false", status:"Average Man", salary: "4000"},
  ]

  recevedData(e:{name: string, newSalary:Number}){
    console.log(e)
  }


}
