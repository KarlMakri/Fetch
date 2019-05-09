import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users;
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.service.getUsers()
      .subscribe(data => {
        console.log(Object.values(data)[0]); // Car l'api renvoie un tableau
        this.users = Object.values(data)[0];
      }

        );
  }

}
