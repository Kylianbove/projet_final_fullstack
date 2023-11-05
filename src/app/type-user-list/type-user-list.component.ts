import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserTypeService } from '../user-type.service';
import { UserType } from '../user-type';

@Component({
  selector: 'app-type-user-list',
  templateUrl: './type-user-list.component.html',
  styleUrls: ['./type-user-list.component.css']
})
export class TypeUserListComponent implements OnInit {
  userTypes: UserType[] = [];
  sortedBy: string = '';

  constructor(private userTypeService: UserTypeService, private router: Router) { }

  ngOnInit(): void {
    this.retrieveUserTypes();
  }

  retrieveUserTypes(): void {
    this.userTypeService.getUserTypesList().subscribe(
      data => {
        this.userTypes = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  editUserType(id: number): void {
    this.router.navigate(['/type-user-form', id]);
  }

  deleteUserType(id: number): void {
    this.userTypeService.deleteUserType(id).subscribe(
      response => {
        console.log(response);
        this.retrieveUserTypes();
      },
      error => {
        console.log(error);
      }
    );
  }

  sortListBy(criteria: string): void {
    if (this.sortedBy === criteria) {
      this.userTypes.reverse();

    }
    else {
      this.userTypes.sort((a, b) => (a[criteria as keyof UserType] > b[criteria as keyof UserType] ? 1 : -1));
      this.sortedBy = criteria;
    }
  }
}
