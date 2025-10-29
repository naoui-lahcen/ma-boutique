import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produits', component: ProduitsComponent },
  { path: 'promotions', component: PromotionsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

