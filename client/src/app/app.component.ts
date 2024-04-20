import { AccountService } from './_services/account.service';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Glimmer';

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser() {
    if (typeof localStorage !== 'undefined') {
      const userString = localStorage.getItem('user');
      if (!userString) {
        return;
      }
      const user: User = JSON.parse(userString);
      this.accountService.setCurrentUser(user);
    } else {
      console.warn('localStorage is not available.');
    }
  }
}
