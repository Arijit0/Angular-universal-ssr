import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private apiService: FoodService,private router: Router,private route: ActivatedRoute) { }

  productList: any = [];

  ngOnInit(): void {
    this.fetchData();
  } 

  fetchData() {
    this.apiService.fetchFoodList().subscribe((res: any) => {
      console.log(res);
      this.productList = res.results;
    },(err: any) => {
      console.log(err);
    })
  }

 FoodDetails(eachList: any,index: any) {
   (<any>this.router).navigate(['/details',eachList.id]);
  }

}
