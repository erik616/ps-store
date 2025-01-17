import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [],
  templateUrl: './price.component.html',
  styleUrl: './price.component.css',
})
export class PriceComponent {
  @Input() type?: string;
  @Input() price?: string;
}
