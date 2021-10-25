import { Component, OnInit } from '@angular/core';
import { FoodService } from './services/food.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularUniversal';

  constructor(
    private service: FoodService
  ) { }

  ngOnInit() {
    this.service.setCanonicalURL();
  }

}
