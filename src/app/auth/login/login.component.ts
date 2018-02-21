import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../overall/services/user.service';
import {User} from '../../overall/models/user.model';
import {Alert} from '../../overall/models/alert.model';
import {AuthService} from '../../overall/services/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'ido-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public alert: Alert;
  form: FormGroup;

  ngOnInit(): void {
    this.alert = new Alert('danger', '');
    this.route.queryParams.subscribe((params: Params) => {
      if (params['approved']) {
        this.popupAlert({
          text: 'Now you can log in',
          type: 'info'
        });
      }
    });
    this.form = new FormGroup({
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
    const formFields = this.form.value;
    this.userService.getUser(formFields.email)
      .subscribe((user: User) => {
      if (user) {
        if (user.password === formFields.password) {
          this.alert.text = '';
          window.localStorage.setItem('user', JSON.stringify(user));
          this.authService.login();
          this.router.navigate(['/healthapp/main/1']);
        } else {
          this.popupAlert({
            text: 'This password isn\'t correct',
            type: 'danger'
          });
        }
      } else {
        this.popupAlert({
          text: 'User not exists..',
          type: 'danger'
        });
      }
    });
  }

  private popupAlert(alert: Alert): void {
    this.alert = alert;
    window.setTimeout(() => {
      this.alert.text = '';
    }, 6000);
  }

}
