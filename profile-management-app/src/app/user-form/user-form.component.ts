import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { UserType } from '../user-type';
import { UserTypeService } from '../user-type.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: User = new User();
  userTypes: UserType[] = [];

  constructor(private userService: UserService, private userTypeService: UserTypeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadUserTypes();
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.userService.getUser(id).subscribe(
          data => {
            this.user = data;
          },
          error => {
            console.log(error);
          }
        );
      }
    });
  }
  loadUserTypes(): void {
    this.userTypeService.getUserTypesList()
      .subscribe(
        data => {
          this.userTypes = data;
        },
        error => {
          console.log(error);
        });
  }

  createOrUpdateUser(): void {
    if (this.user.id) {
      this.userService.updateUser(this.user.id, this.user)
        .subscribe(
          response => {
            console.log(response);
            this.router.navigate(['/user-list']);
          },
          error => {
            console.log(error);
          });
    } else {
      this.userService.createUser(this.user)
        .subscribe(
          response => {
            console.log(response);
            this.router.navigate(['/user-list']);
          },
          error => {
            console.log(error);
          });
    }
  }
}
