import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    CommonContent,
    ContentResponse,
    ContentService,
    docs,
} from '@social-media/lib/data-access';
import { UploadTypeComponent, VideoDetailsComponent } from '@social-media/lib/ui';
import { Observable } from 'rxjs';

@Component({
    selector: 'social-media-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public docs$: Observable<ContentResponse>;
    public limit = 3;
    public page = 2;
    public selectedNews: CommonContent[];

    constructor(
        private contentService: ContentService,
        private dialog: MatDialog,
    ) { }

    ngOnInit(): void {
        this.getContent(1);
    }

    getContent(page) {
        this.page = page;
        this.docs$ = this.contentService.getContent({
            page: page,
            limit: this.limit,
        });
    }

    generateVideo(id, type) {
        const dialogRef = this.dialog.open(UploadTypeComponent, {
            backdropClass: 'custom-backdrop',
            panelClass: 'custom-panel',
        });
        dialogRef.componentInstance.id = id;
        dialogRef.componentInstance.type = type;
    }

    detailsDialog(ContentDocument: docs) {
        const dialogRef = this.dialog.open(VideoDetailsComponent, {
            backdropClass: 'custom-backdrop',
            panelClass: 'custom-panel',
        });
        console.log(ContentDocument);
        dialogRef.componentInstance.VideoDocuments = ContentDocument;
        dialogRef.afterClosed().subscribe(() => {
            this.getContent(this.page);
        });
    }
}
