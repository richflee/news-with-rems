import { Component, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {

  rootFontSize = 0;

  readonly ROOT_ELEMENT_ID = 'root-container';
  readonly MAX_FONT_SIZE = 36;
  readonly MIN_FONT_SIZE = 8;
  readonly FONT_SIZE_ADJUSTMENT_AMOUNT = 2;

  ngOnInit() {

    const increaseBtn = document.getElementById('increase-font-size-btn');
    increaseBtn.addEventListener('click', this.increaseFontClickHandler.bind(this));

    const decreaseBtn = document.getElementById('decrease-font-size-btn');
    decreaseBtn.addEventListener('click', this.decreaseFontClickHandler.bind(this));

    this.rootFontSize = this.getElementFontSize(this.ROOT_ELEMENT_ID);
  }


  increaseFontClickHandler(e: MouseEvent = null): void {
    if (this.rootFontSize === this.MAX_FONT_SIZE) {
      return;
    }

    this.rootFontSize += this.FONT_SIZE_ADJUSTMENT_AMOUNT;
    this.setElementFontSize(this.ROOT_ELEMENT_ID, this.rootFontSize);
  }


  decreaseFontClickHandler(e: MouseEvent = null): void {
    if (this.rootFontSize === this.MIN_FONT_SIZE) {
      return;
    }

    this.rootFontSize -= this.FONT_SIZE_ADJUSTMENT_AMOUNT;
    this.setElementFontSize(this.ROOT_ELEMENT_ID, this.rootFontSize);
  }


  /**
   * This function presumes the root font size has been set in pixels.
   */
  getElementFontSize(elementId: string): number {
    const root: HTMLElement = document.getElementById(elementId);

    if (!root) {
      return;
    }

    const compStyles: CSSStyleDeclaration = window.getComputedStyle(root);
    const fontCssVal: string = compStyles.getPropertyValue('font-size');
    return +(fontCssVal.split('px') as string[])[0];
  }


  setElementFontSize(elementId: string, size: number): void {
    document.getElementById(elementId).style.fontSize = `${size}px`;
  }
}
