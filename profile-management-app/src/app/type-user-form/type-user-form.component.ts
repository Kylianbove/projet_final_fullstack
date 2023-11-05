import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { UserTypeService } from '../user-type.service';
import { UserType } from '../user-type';

@Component({
  selector: 'app-type-user-form',
  templateUrl: './type-user-form.component.html',
  styleUrls: ['./type-user-form.component.css']
})
export class TypeUserFormComponent implements OnInit {
  userType: UserType = { id: 0, type: '' }; 

  constructor(private userTypeService: UserTypeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.userTypeService.getUserType(id).subscribe(
          data => {
            this.userType = data;
          },
          error => {
            console.log(error);
          }
        );
      }
    });
  }


  
  createOrUpdateUserType(): void {
    if (this.userType.id) {
      this.userTypeService.updateUserType(this.userType.id, this.userType).subscribe((response) => {
        console.log(response);
        this.gotoUserTypeList();
      });
    } else {
      this.userTypeService.createUserType(this.userType).subscribe((response) => {
        console.log(response);
        this.gotoUserTypeList();
      });
    }
  }

  gotoUserTypeList(): void {
    this.router.navigate(['/type-user-list']);
  }
}
