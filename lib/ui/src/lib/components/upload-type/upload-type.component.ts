import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
    ContentService,
} from '@social-media/lib/data-access';
import { NotifierService } from 'angular-notifier';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'social-media-ui-upload-type',
    templateUrl: './upload-type.component.html',
    styleUrls: ['./upload-type.component.scss'],
})
export class UploadTypeComponent implements OnInit {

    public id: string;
    public type: string;
    public form: FormGroup;

    constructor(
        public dialog: MatDialog,
        private _formBuilder: FormBuilder,
        private contentService: ContentService,
        private spinner: NgxSpinnerService,
        private readonly notifier: NotifierService
    ) { }

    ngOnInit() { }

    generate(upload: string) {
        this.spinner.show();
        this.contentService
            .generate({ id: this.id, type: this.type, upload })
            .subscribe((e) => {
                this.spinner.hide();
                this.notifier.notify('default', `O video foi feito upload com sucesso na modalidade: ${upload}`);
                this.dialog.closeAll();
            });
    }
}
