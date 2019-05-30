import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-PostPreviewTile',
  templateUrl: './PostPreviewTile.component.html',
  styleUrls: ['./PostPreviewTile.component.scss']
})
export class PostPreviewTileComponent implements AfterViewInit, OnInit {

  @ViewChild('increaseBtn') increaseBtn: ElementRef;
  @ViewChild('decreaseBtn') decreaseBtn: ElementRef;

  constructor(
    public el: ElementRef
  ) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('increase', this.increaseBtn);
    console.log('decrease', this.decreaseBtn);

    (this.increaseBtn.nativeElement as HTMLElement).addEventListener('click', this.increaseFontClickHandler.bind(this));
    (this.decreaseBtn.nativeElement as HTMLElement).addEventListener('click', this.decreaseFontClickHandler.bind(this));
  }

  increaseFontClickHandler(e: MouseEvent = null): void {
    // if (this.rootFontSize === this.MAX_FONT_SIZE) {
    //   return;
    // }

    const styles = getComputedStyle(this.el.nativeElement);
    const fontCssVal: string = styles.getPropertyValue('font-size');
    const fontSize: number = +(fontCssVal.split('px') as string[])[0];
    const newSize = (fontSize / 16) + 0.25;

    this.el.nativeElement.style.fontSize = `${newSize}rem`;

    // this.setElementFontSize(this.ROOT_ELEMENT_ID, this.rootFontSize);
  }


  decreaseFontClickHandler(e: MouseEvent = null): void {
    // if (this.rootFontSize === this.MIN_FONT_SIZE) {
    //   return;
    // }

    // this.rootFontSize -= this.FONT_SIZE_ADJUSTMENT_AMOUNT;
    // this.setElementFontSize(this.ROOT_ELEMENT_ID, this.rootFontSize);
  }

  setElementFontSize(elementId: string, size: number): void {
    document.getElementById(elementId).style.fontSize = `${size}px`;
  }

}
