/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UploadTypeComponent } from './upload-type.component';

describe('UploadTypeComponent', () => {
    let component: UploadTypeComponent;
    let fixture: ComponentFixture<UploadTypeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UploadTypeComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UploadTypeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
