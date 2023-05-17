import { Component,OnInit,Input } from '@angular/core';
import { UserModel } from '../Model/userModel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserMod implements OnInit{
@Input() user!:UserModel;
buttonText!:string;
isHiding!:boolean;

ngOnInit(): void {
this.buttonText = "Hide"
this.isHiding = true;
}

hide(){
if(this.buttonText==="Hide"){
  this.isHiding = false;
  this.buttonText="Show";
}else{
  this.isHiding = true;
  this.buttonText="Hide";
}
}
}
