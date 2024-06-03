import { Component, EventEmitter, Input, Output, booleanAttribute, numberAttribute, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../modal/user';

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

  @Input({alias: "userName", transform:formateName}) name ="";

  @Input({transform:booleanAttribute}) isSingle!: boolean;
  @Input({transform:numberAttribute}) salary!: number
  @Input() status=""

  // passing a simple data from child to parent
  // @Output() myEvent = new EventEmitter<string>()
  // sendData(){
  //   this.myEvent.emit("Coders Never Quit")
  // }

  // passing object from child to parent

  @Output() myEvent = new EventEmitter<User>()
  sendData(){
    this.myEvent.emit({name: this.name, newSalary: 340000})
  }













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

