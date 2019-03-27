import { OnInit, Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSelectSubject]'
})
export class SelectSubjectDirective implements OnInit {

  highlightColor: string = 'green';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  ngOnInit() {
  }

  @HostListener('click') click() {
    if (this.backgroundColor === 'green') {
      this.backgroundColor = 'white';
    } else {
      this.backgroundColor = this.highlightColor;
    }
  }
}