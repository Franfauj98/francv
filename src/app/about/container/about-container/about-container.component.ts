import {Component, HostListener, OnInit} from '@angular/core';
import {Coordinates} from "../../data-model/coordinates";

@Component({
  selector: 'app-about-container',
  templateUrl: './about-container.component.html',
  styleUrls: ['./about-container.component.scss']
})
export class AboutContainerComponent implements OnInit {
  public largeurCanvas = 890;
  public hauteurCanvas = 600;
  public ballRadius = 20;
  public gridBlocks: Coordinates[] = [];
  public dashCoordinates = new Coordinates(350, 550, 200, 20);
  public ballCoorrdinates = new Coordinates(0, 500, 0, 0);

  ngOnInit(): void {
    setTimeout(() => {
      this.setGridBlocks();
      let ctx = this.getCanvasCtx();
      this.drawGameGrid(ctx);
      this.drawDash(ctx);
      let ballPos = this.ballRadius;
      let vitesseDeplacement = 5;
      setInterval(() => {
        if (ctx) {
          ctx.clearRect(ballPos - 25, 500 - this.ballRadius, 60, 40);
          this.drawGameGrid(ctx);
          this.collisionDetection(new Coordinates(ballPos + 40, 500, 0, 0));
          this.ballCoorrdinates.x = ballPos;
          this.drawBall(ctx);
          if (this.collisionDetection(new Coordinates(ballPos, 500, 0, 0))) {
            vitesseDeplacement = -vitesseDeplacement;
          }
          ballPos = ballPos + vitesseDeplacement;
        }
      }, 10);
    }, 100);
  }

  setGridBlocks = () => {
    const hauteurBlock = 60;
    const decalageHauteur = 20;
    const largeurBlock = 40;
    const decalageLargeur = 20;

    const decalageCadre = 35;

    const nbBlockParLigne = 14;
    const nbLigneDeBlocs = 3;

    for (let j = 0; j < nbLigneDeBlocs; j++) {
      for (let i = 0; i < nbBlockParLigne; i++) {
        this.gridBlocks.push(new Coordinates(
          (largeurBlock * i) + (decalageLargeur * i) + decalageCadre,
          j * hauteurBlock + decalageHauteur * j + decalageCadre,
          largeurBlock,
          hauteurBlock));
      }
    }
  }

  collisionDetection(ballCoordinates: Coordinates): boolean {
    return ballCoordinates.x < this.ballRadius || ballCoordinates.x > this.largeurCanvas - this.ballRadius ||
      ballCoordinates.y < this.ballRadius || ballCoordinates.y > this.hauteurCanvas - this.ballRadius;
  }

  getCanvasCtx(): CanvasRenderingContext2D {
    let canvas = document.getElementById('stage') as HTMLCanvasElement;
    return canvas.getContext('2d')!;
  }

  drawDash = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "black";
    ctx.fillRect(this.dashCoordinates.x, this.dashCoordinates.y, this.dashCoordinates.w, this.dashCoordinates.h);
  }

  drawBall = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(this.ballCoorrdinates.x, this.ballCoorrdinates.y, this.ballRadius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }

  drawGameGrid = (ctx: CanvasRenderingContext2D) => {
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, 0, this.largeurCanvas, this.hauteurCanvas);
    let i = 0;
    this.gridBlocks.forEach(block => {
      if (i === 9) {
        ctx.fillStyle = "red";
        ctx.fillRect(block.x, block.y, block.w, block.h);
      } else {
        ctx.strokeRect(block.x, block.y, block.w, block.h);
      }
      i++;
    });
  }

  moveDash = (right: boolean = true) => {
    let ctx = this.getCanvasCtx();
    ctx.clearRect(this.dashCoordinates.x, this.dashCoordinates.y, this.dashCoordinates.w, this.dashCoordinates.h);
    if (right) {
      if (this.dashCoordinates.x + this.dashCoordinates.w < this.largeurCanvas) {
        this.dashCoordinates.x = this.dashCoordinates.x + 20;
      }
    } else {
      if (this.dashCoordinates.x > 0) {
        this.dashCoordinates.x = this.dashCoordinates.x - 20;
      }
    }
    this.drawDash(ctx);
  }

  @HostListener('document:keydown.ArrowRight', ['$event'])
  handleKeyboardArrowRightEvent(event: KeyboardEvent) {
    this.moveDash(true);
  }

  @HostListener('document:keydown.ArrowLeft', ['$event'])
  handleKeyboardArrowLeftEvent(event: KeyboardEvent) {
    this.moveDash(false);
  }

}
