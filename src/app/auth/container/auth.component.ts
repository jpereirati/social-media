import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '@social-media/lib/data-access';

@Component({
  selector: 'social-media-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  onSubmit(email: string, password: string) {
    this.authService.authenticate({ email, password }).subscribe((res: any) => {
      if (res) {
        this.router.navigate(['/']);
      } else {
        this.snackBar.open(res.code_message, 'Ok', {
          horizontalPosition: 'end',
          verticalPosition: 'top',
        });
      }
    });
  }
}
