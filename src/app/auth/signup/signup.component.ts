import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../overall/services/user.service';
import {User} from '../../overall/models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'ido-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      'name': new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(32)
        ]),
      'email': new FormControl(
        null,
        [
          Validators.required,
          Validators.email
        ]),
      'password': new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(64)
        ])
    });
  }

  onSubmit(): void {
    const {email, password, name} = this.form.value;
    const user = new User(email, password, name);
    this.userService.createUser(user)
      .subscribe( () => {
        this.router.navigate(['/login'],
          {
            queryParams: {approved: true}
          });
      });
  }
}
