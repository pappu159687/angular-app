import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

function formateName(value:string){
  return "Hi " + value
}


@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  @Input({alias: "userName", transform:formateName}) name =""

  @Input() isSinghle!: boolean;
  @Input() salary!: number













  // name = "Pappu"
  // age = 22
  // isBtnDisabled = true
  // inputVal = "test"

  // onChange(e:Event){
  //   const value = (e.target as HTMLInputElement).value
  //   // console.log(value)
  //   this.inputVal = value
  // }

  // users = [
  //   {name: "Ramesh Singh", cast: "Rajput", status:"Great Man"},
  //   {name: "Umesh Singh", cast: "Rajput", status:"Great Man"},
  //   {name: "Aniruth Mehta", cast: "Koeri", status:"Average Man"},
  // ]











}

