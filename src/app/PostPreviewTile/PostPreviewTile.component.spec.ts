/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PostPreviewTileComponent } from './PostPreviewTile.component';

describe('PostPreviewTileComponent', () => {
  let component: PostPreviewTileComponent;
  let fixture: ComponentFixture<PostPreviewTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostPreviewTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPreviewTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
