/** @format */

import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-form-container",
  templateUrl: "./form-container.component.html",
  styleUrls: ["./form-container.component.css"],
})
export class FormContainerComponent implements OnInit {
  @Input()
  title = "";
  constructor() {}

  ngOnInit() {}
}
