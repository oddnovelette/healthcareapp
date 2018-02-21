import {Component, OnInit} from '@angular/core';
import {User} from '../../../../overall/models/user.model';
import {AuthService} from '../../../../overall/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ido-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  public user: User;

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
