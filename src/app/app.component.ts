import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('mainCanvas') myCanvas: ElementRef;
  public context: CanvasRenderingContext2D;

  public ngAfterViewInit(): void {
    const canvasEl = this.myCanvas.nativeElement;
    this.context = canvasEl.getContext('2d');
    console.log(this.context);
    this.draw();
  }

  private draw(): void {
    // this.context.beginPath();
    // this.context.moveTo(0, 0);
    // this.context.lineTo(300, 150);
    // this.context.stroke();
    let img = new Image();
    let ctx = this.context;
    img.src = 'https://sc01.alicdn.com/kf/HTB1NWWlSXXXXXaDXVXX760XFXXXG/200652865/HTB1NWWlSXXXXXaDXVXX760XFXXXG.png';
    img.onload = function() {
      ctx.drawImage(img, 0, 0, (img.width) / 4, (img.height) / 4);
    };
  }

}
