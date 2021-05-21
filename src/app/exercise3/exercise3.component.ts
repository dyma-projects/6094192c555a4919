import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercise3",
  templateUrl: "./exercise3.component.html",
  styleUrls: ["./exercise3.component.css"],
})
export class Exercise3Component implements OnInit {
  public status: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  reverseStatus(): void {
    this.status = !this.status;
  }
}
