// src/app/pages/promotions/promotion.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Promotion {
  name: string;
  description: string;
  oldPrice: number;
  newPrice: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  private apiUrl = 'https://fakestoreapi.com/products'; // ou ton API

  constructor(private http: HttpClient) {}

  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(this.apiUrl);
  }
}
