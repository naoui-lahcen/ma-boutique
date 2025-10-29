import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PromotionService, Promotion } from '../../services/promotion.service';


@Component({
  selector: 'app-promotions',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {
  promotions: Promotion[] = [];
  selectedPromotion: Promotion | null = null;
  showBuyPopup = false;
  isLoading = true;

  constructor(private promotionService: PromotionService) {}

  ngOnInit() {
    this.loadPromotions();
  }

  loadPromotions() {
    this.promotionService.getPromotions().subscribe({
      next: (data: any[]) => {
        this.promotions = data.map(item => ({
          name: item.title ?? item.name,
          description: item.description ?? 'Promo exceptionnelle !',
          oldPrice: item.price ? item.price + 20 : 100,
          newPrice: item.price ?? 0,
          imageUrl: item.image ?? 'https://via.placeholder.com/300'
        }));
        this.isLoading = false;
      },
      error: (err: any) => {
        console.error('Erreur de chargement promotions', err);
        this.isLoading = false;
      }
    });
  }

  selectPromotion(promo: Promotion) {
	this.selectedPromotion = promo;
  }


  closeDetails() {
    this.selectedPromotion = null;
  }

  openBuyPopup() {
    this.showBuyPopup = true;
  }

  closeBuyPopup() {
    this.showBuyPopup = false;
  }
}
