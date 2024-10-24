import { Component, Input } from '@angular/core';
import { LabelComponent } from "./label/label.component";
import { PriceComponent } from "./price/price.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [LabelComponent, PriceComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() cover?: string

  @Input() label?: string
  @Input() type?: string;
  @Input() price?: string;
}
