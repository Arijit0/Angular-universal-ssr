import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  productDetails: any =[];
  titlE: any = "Anfular Universal Application";
  id: any;

  constructor(private meta: Meta,
    private title: Title,
    private route: ActivatedRoute,
    private api: FoodService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getProductDetails();
  }

  

  getProductDetails() {

    this.id = this.route.snapshot.paramMap.get('id');
    let baseUrl = environment.baseUrl;
    let url = baseUrl + this.router.url;
    console.log(url);
    this.api.productDetails(this.id).subscribe((res: any) => {
      console.log(res);
      this.productDetails = res;
      this.meta.addTags([
        { name: 'keywords', content: 'Angular SEO Integration, Angular Universal' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: this.productDetails.title},
        { property: 'og:image', content: this.productDetails.image},
        { property: 'og:description', content: this.productDetails.summary},
        { property: 'og:url', content: url},
        { name: 'author', content: 'Arijit Bag' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'date', content: '2021-07-22', scheme: 'YYYY-MM-DD' },
        { charset: 'UTF-8' }
      ]);

      this.title.setTitle(this.productDetails.title);
    this.meta.updateTag(
      { name: 'summery', content: this.productDetails.summary }
    );

    }, 
    (err: any) => {
      console.log(err);
    })

 

    }
  }


