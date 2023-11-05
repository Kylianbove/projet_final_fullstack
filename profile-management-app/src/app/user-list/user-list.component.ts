import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  sortedBy: string = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.userService.getUsersList()
      .subscribe(
        data => {
          this.users = data;
        },
        error => {
          console.log(error);
        }
      );
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id)
      .subscribe(
        response => {
          console.log(response);
          this.retrieveUsers();
        },
        error => {
          console.log(error);
        }
      );
  }

  editUser(id: number): void {
    this.router.navigate(['/user-form', id]);
    }

    sortListBy(criteria: string): void {
      if (this.sortedBy === criteria) {
        this.users.reverse();
      } else {
        this.users.sort((a, b) => (a[criteria as keyof User] > b[criteria as keyof User] ? 1 : -1));
        this.sortedBy = criteria;
      }
    }
}
