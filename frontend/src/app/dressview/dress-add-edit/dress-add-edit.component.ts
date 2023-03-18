import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-dress-add-edit',
  templateUrl: './dress-add-edit.component.html',
  styleUrls: ['./dress-add-edit.component.css']
})
export class DressAddEditComponent {
  constructor(private service: SharedService) { }
  @Input() dress: any;
  id: string | undefined;
  dressType: string | undefined;
  dressRentalDate: string | undefined;
  dressPicUrl: string | undefined;
  dressPrice: string | undefined;

  ngOnInit(): void {
    this.id = this.dress.id;
    this.dressType = this.dress.type;
    this.dressRentalDate = this.dress.rentalDate;
    this.dressPicUrl = this.dress.picUrl;
    this.dressPrice = this.dress.price;
  }
  ngOnDestroy(): void {
    this.id = "";
    this.dressType = "";
    this.dressRentalDate = "";
    this.dressPicUrl = "";
    this.dressPrice = "";
  }
  AddBook() {
    var val = {
      type: this.dressType,
      rentalDate: this.dressRentalDate,
      picUrl: this.dressPicUrl,
      price: this.dressPrice
    }
    this.service.addDresses(val).subscribe(res => {
      alert(res.toString());
      location.reload();
    });
  }
  reloadCurrentPage() {
    window.location.reload();
   }
  UpdateBook() {
    var val = { 
      id: this.id,
      type: this.dressType,
      rentalDate: this.dressRentalDate,
      picUrl: this.dressPicUrl,
      price: this.dressPrice
    } 
    this.service.updateDresses(val).subscribe(res => {
      alert(res.toString());
      location.reload();
    });
  }
}
