import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ContentService } from '@social-media/lib/data-access';

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
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}



  generateContent() {
    if (!this.title || this.news[0].length < 0) {
      this._snackBar.open('Campos obrigatórios inválidos');
      return;
    }
    this.contentService.createContent({
      title: this.title,
      description: this.description,
      news: this.news,
    }).subscribe(() => this.router.navigateByUrl('/'))
  }
}
