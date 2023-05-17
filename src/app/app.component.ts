import { Component, OnInit } from '@angular/core';
import { UserModel } from './Model/userModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  user1!: UserModel;
  user2!: UserModel;
  user3!: UserModel;

  ngOnInit() {
    this.user1 = {
      lastName : "Toshinori",
      firstName : "Yagi",
      pseudo : "Allmight",
      citation : "",
      pics : "https://static1.millenium.org/articles/7/37/97/07/@/1498973-all-might-vign-article_image_t-1.jpg",
      age : 50,
    }

    this.user2 = {
      lastName : "Roronoa",
      firstName : "Zoro",
      pseudo : "Zoro",
      citation : "",
      pics : "https://www.laboutique-onepiece.com/_i/136023/p%7B1000%7D-49738/1066/40/10-choses-savoir-roronoa-zoro-boutique-one-piece-11.jpeg",
      age : 21,
    }

    this.user3 = {
      lastName : "Satoru",
      firstName : "Gojo",
      pseudo : "Saikyo",
      citation : "",
      pics : "https://media.techtribune.net/uploads/2022/02/jujutsu-kaisen-satoru-gojo-anime-1259613-803x420.jpg",
      age : 27,
    }
  }
}
