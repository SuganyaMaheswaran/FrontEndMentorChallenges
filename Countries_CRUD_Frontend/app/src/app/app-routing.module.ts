import { Routes } from '@angular/router';
import { CardContainerComponent } from './component/card-container/card-container.component';
import { CardDetailComponent } from './component/card-detail/card-detail.component';

export const routes: Routes = [
  { path: '', component: CardContainerComponent },       // master view
  { path: 'detail/:id', component: CardDetailComponent } // detail view
];
