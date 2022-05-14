import { Component, OnInit } from '@angular/core';
import { UserTraceAuthService } from '@user-trace/client/utcm/auth/data-access';
import { switchMap } from 'rxjs';

@Component({
  selector: 'user-trace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'utcm';

  constructor(private readonly userTraceAuthService: UserTraceAuthService) {}

  public ngOnInit(): void {
    this.userTraceAuthService
      .signIn({ username: 'boy', password: 'kibble' })
      .pipe(
        switchMap(() => {
          return this.userTraceAuthService.getProfile();
        })
      )
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.error(err);
        },
      });
  }
}
