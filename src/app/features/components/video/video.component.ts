import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ContentService } from '@social-media/lib/data-access';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'social-media-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss'],
})
export class VideoComponent {
    //Pagination
    public page = 1;
    public limit = 3;

    public title;
    public description;
    public news: Array<string> = [''];

    constructor(
        private contentService: ContentService,
        private router: Router,
        private spinner: NgxSpinnerService,
        private readonly notifier: NotifierService
    ) { }



    generateContent() {
        if (!this.title || this.news[0].length < 0) {
            this.notifier.notify('error', 'Campos obrigatorios inválidos!');
            return;
        }
        this.spinner.show();
        this.contentService.createContent({
            title: this.title,
            description: this.description,
            news: this.news,
        }).subscribe(() => {
            this.notifier.notify('success', 'Conteudo criado com sucesso!');
            this.spinner.hide();
            this.router.navigateByUrl('/')
        })
    }
}
