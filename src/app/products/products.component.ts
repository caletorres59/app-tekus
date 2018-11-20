import { Item } from './../item.interface';
import { Component, OnInit } from '@angular/core';
import { PruductsService } from '../pruducts.service';
import { Product } from '../product';
import { Steps } from '../steps.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  /*List products*/
  products: Product[];
 
  /*show container list products*/
  showList: boolean = true;
  /* show steps*/
  showProduct: boolean;
  /*Product global*/
  producto: Product;
  /*List of steps*/ 
  steps: Steps[] = [];
  /*List selected items*/ 
  itemSelect: Item[] = [];
   /*List produucts selected*/ 
   productsSelect: Product [] = [];
  /*step selected by user*/
  stepActual: Steps;
  /*Total*/
  total: number = 0;
  /*pos array steps product*/
  posi: number = 1;
  /* Order Details total*/
  showTotal: boolean;
  
  showConfirm: boolean;
   
  showListItems: boolean;
 // listTotakItems
  showOrderTotal: boolean;
  listTodo: Array<any> = [];
  indexTodo: number = 0;

  imageOrder = '../../assets/img/order-header.jpg';
  
 constructor(private service: PruductsService) {
    
    /*List init products*/

    
    
   }

  ngOnInit() {
    /*Init List Products*/
    this.getProducts();
  }

  /**
    Method list products
    return void
   */
  getProducts():void
  {
    this.service.getProducts().subscribe((content) => {
      this.products = content; 
        // console.log(this.auxList + "lista auxiliar" + typeof(this.auxList));
      }
      );
  }

  /*List first Step and initialite variables producto and list steps*/
  showSingleProduct(product: Product)
  {
    
    this.imageOrder = product.image;
    this.showListItems = true;
    /*show component steps single product*/
    this.showProduct = true;   
    /*Hidden component list products*/ 
    this.showList = false;
    /*Product global*/
    this.producto = product;
    /*List steps*/
    this.steps = this.producto.steps;
    /*Size array steps*/
    let number = this.steps.length; 
    /* Asign first step the actual step*/
    this.stepActual = this.steps[0];
    
    /*Add product selected*/
    this.productsSelect.push(this.producto);

    this.total += this.producto.price;
   
  }
  
  /*
  Method for show Items and choose selected user
  */
  showItems(item:Item)
  {
     
    if (this.posi == this.steps.length)
    {
      this.itemSelect.push(item);
      this.showProduct = false;
      this.showConfirm = true;
      this.posi = 1;
      this.indexTodo++;
      this.listTodo.push({ producto: this.producto.name, items: this.itemSelect });
      this.producto = null;
      
      this.itemSelect = [];
      this.showListItems = false;
    } else
    {
    this.stepActual = this.steps[this.posi];
    this.itemSelect.push(item);
    this.posi++;
    }
  }
  openProducts()
  {
    this.showConfirm = false;
    this.showList = true;
  }
  totalOrder()
  {
    this.showConfirm = false;
    this.showOrderTotal = true;
    this.listTodo.push({total: this.total });
  }



}
