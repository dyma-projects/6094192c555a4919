import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public propertyBind: string;
  public numberClicks: number;

  constructor() {
    this.propertyBind = "Hello property bound world";
    this.numberClicks = 0;
  }

  public clicked(): void {
    this.numberClicks++;
  }

  ngOnInit(): void {}
}
