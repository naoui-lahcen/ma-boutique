import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null = null;
  isLoading = true;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data.map(item => ({
          name: item.title ?? item.name,
          price: item.price,
          description: item.description,
          imageUrl: item.image ?? 'https://via.placeholder.com/300'
        }));
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erreur de chargement produits', err);
        this.isLoading = false;
      }
    });
  }

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }

  closeDetails() {
    this.selectedProduct = null;
  }
}
