import {Component} from '@angular/core';
import {Employee} from "../models/employee.model";
import {FormPoster} from "../services/form-poster.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'bootstrap',
  templateUrl: './bootstrap.component.html'
})
export class BootstrapComponent {
  minDate = new Date('Nov 5 2016');
  startDate: Date;
  postRating = 5;

  hover(value) {
    console.log("hover: " + value);
  }

  leave(value) {
    console.log("leave: " + value);
  }
}
