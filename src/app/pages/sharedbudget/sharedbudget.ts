import { Component , inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-sharedbudget',
  imports: [],
  templateUrl: './sharedbudget.html',
  styleUrl: './sharedbudget.scss'
})
export class Sharedbudget {
  private route = inject(ActivatedRoute);
 

  id!: number;
  name!: string;
  date!: string
  email!: string
  phoneNumber!: string
  total!: number
  items!: Product[]



  ngOnInit() {
   this.route.queryParamMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.name = params.get('name') || '';
      this.date = params.get('date') || '';
      this.email = params.get('email') || '';
      this.phoneNumber = params.get('phoneNumber') || '';
      this.total = Number(params.get('total'));
     
      const paramItems = params.get('items') || '';
      this.items = paramItems? JSON.parse(decodeURIComponent(paramItems)) : [];
    });
  }
}
