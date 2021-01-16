import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

  users:any;
  email:string;

  constructor(private service:UserRegistrationService) { }

  ngOnInit(): void {
    let resp = this.service.getUsers();
    resp.subscribe((data)=>this.users=data);
  }

  public cancelUserReg(id:number){
    let resp = this.service.cancelUserRegById(id);
    resp.subscribe((rs)=>this.users=rs);
  }

  public findUserByEmailId(){
    let resp = this.service.getUserByUserEmail(this.email);
    resp.subscribe((rs)=>this.users=rs);
  }

}
