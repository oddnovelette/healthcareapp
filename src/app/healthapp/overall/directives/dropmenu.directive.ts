import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[idoDropmenu]'
})
export class DropmenuDirective {
  @HostBinding('class.open') open = false;
  @HostListener('click') onClick() {
    this.open = !this.open;
  }
}
