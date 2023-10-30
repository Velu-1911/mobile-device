import { Component, NgModule } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { FormsModule, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mobiledevice';

  constructor(private spinner: NgxSpinnerService) {

  }
  load()
  {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }
}
