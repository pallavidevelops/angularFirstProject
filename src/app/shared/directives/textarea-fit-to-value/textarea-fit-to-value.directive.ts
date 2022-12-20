import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pmTextareaFitToValue]'
})
export class TextareaFitToValueDirective {
  @Input() minRows = 1;
  @Input() maxRows = 4;

  @HostListener("input")
  private input!: HTMLTextAreaElement;
  private offsetHeight = 0;
  private readonly avgLineHeight = 20;
 
  construtor(element: ElementRef) {
    this.input = element.nativeElement;
    console.log('in directive');
  }
  
onInput(): void {

  if (this.offsetHeight <= 0) {
    this.offsetHeight = this.input.scrollHeight;
  }

  this.input.rows = this.minRows;

  const rows = Math.floor(
    (this.input.scrollHeight - this.offsetHeight) /
    this.avgLineHeight
  );

  const rowsCount = this.minRows + rows;
  console.log(this.input.scrollHeight);
  console.log(this.offsetHeight);
  console.log( this.avgLineHeight);
  console.log(rowsCount);
  if (this.maxRows == 0)   this.input.rows = rowsCount
  else 
      this.input.rows = rowsCount > this.maxRows
        ? this.maxRows
        : rowsCount;
}

}
