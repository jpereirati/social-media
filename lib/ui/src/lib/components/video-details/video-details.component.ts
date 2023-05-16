import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
  CommonContent,
  ContentService,
  docs,
} from '@social-media/lib/data-access';

@Component({
  selector: 'social-media-ui-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss'],
})
export class VideoDetailsComponent implements OnInit {
  public VideoDocuments: docs;
  public news: CommonContent[];
  public form: FormGroup;

  constructor(
    public dialog: MatDialog,
    private _formBuilder: FormBuilder,
    private contentService: ContentService
  ) {}

  ngOnInit() {
    const formData: any = {};
    this.news = this.VideoDocuments.news;
    this.news.forEach((element) => {
      formData[element._id as string] = true;
    });

    this.form = this._formBuilder.group(formData);
  }

  patchNews() {
    const selectedNews: CommonContent[] = [];
    this.news.forEach((element: any) => {
      let currentKey;
      for (const k in this.form.value) {
        if (element._id === k) currentKey = element._id;
      }
      const currentElement = this.form.value[currentKey];

      if (currentElement === false) return;
      selectedNews.push(element);
    });
    console.log(selectedNews);
    this.contentService
      .updateContent(
        {
          news: selectedNews,
        },
        this.VideoDocuments._id
      )
      .subscribe((e) => console.log(e));
    this.dialog.closeAll();
  }
}
