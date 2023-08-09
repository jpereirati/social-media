import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '@social-media/lib/data-access';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'social-media-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
    constructor(
        private authService: AuthService,
        private router: Router,
        private spinner: NgxSpinnerService,
        private readonly notifier: NotifierService
    ) { }

    onSubmit(email: string, password: string) {
        this.spinner.show();
        this.authService.authenticate({ email, password }).subscribe((res: any) => {
            if (res) {
                this.spinner.hide();
                this.notifier.notify('success', 'Autenticado com sucesso!')
                this.router.navigate(['/']);
            } else {
                this.spinner.hide();
                this.notifier.notify('error', res.code_message)
            }
        });
    }
}
