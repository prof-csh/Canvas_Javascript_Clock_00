import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 5';

  cshbot_canvas()  {
var c = document.getElementById("cshbot_canvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
console.log("Greetings from cshbot_canvas function!");
  }

  drawRectable() {
    var canvas = document.getElementById('stage');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.fillStyle = "#D74022";
      ctx.fillRect(25, 25, 150, 150);

      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.clearRect(60, 60, 120, 120);
      ctx.strokeRect(90, 90, 80, 80);

      ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();
console.log("Greetings from drawRectable() function!");

    }

  };


  cshbot() {
    var canvas = document.getElementById('cshbot_canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90



      ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();
 ctx.arc(0, 0, radius, 0 , 2*Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();



console.log("Greetings from cshbot() function!");

    }

  }

}
