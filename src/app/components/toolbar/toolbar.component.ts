import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements AfterViewInit {

  checked = false;
  disabled = false;


  @ViewChild('darkModeSwitch', { read: ElementRef }) element: ElementRef | undefined;

  constructor(
    private renderer: Renderer2
  ) { }

  // Mat-slide-toggle
  ngAfterViewInit() {
    this.setIcon();
  }
  setIcon() {
    if (this.element) {
      const targetSpan: HTMLElement = this.element.nativeElement.querySelector('.mat-slide-toggle-thumb');
      while (targetSpan.firstChild) {
        targetSpan.firstChild.remove();
      }
      const elem = this.renderer.createElement('mat-icon');
      const icon = this.checked ? 'dark_mode' : 'light_mode';
      elem.setAttribute('class', 'mat-icon notranslate material-icons mat-icon-no-color light-mode-switch-icon left-icon');
      elem.textContent = icon
      targetSpan.appendChild(elem);
    }
  }
  changeTheme() {
    this.checked = !this.checked;
    this.setIcon();
    if (this.checked) {
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }

}