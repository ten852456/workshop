import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import { SharedService } from 'src/app/shared.service';
import { DatePipe } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-dress-show-user',
  templateUrl: './dress-show-user.component.html',
  styleUrls: ['./dress-show-user.component.css']
})
export class DressShowUserComponent {
  rentalDate: string;

  displayModal: boolean = false;
  displayRentModal: boolean = false;

  faPlusCircle = faPlusCircle;
  faSearch = faSearch;
  item: any;
  isDateValid: any | undefined;
  canRent = true;

  constructor(private service:SharedService,private datePipe: DatePipe) {
    const today  = new Date();
    today.setDate(today.getDate() + 3); // set the date to today + 3 days
    const formattedDate = this.datePipe.transform(today, 'yyyy-MM-dd');
    this.rentalDate = formattedDate || ''; // set to empty string if formattedDate is null
   }

  DressViewList:any=[];

  Dress:any=[];

  RentName!: string;
  RentCalNum!: string;
  RentEmail!: string;

  ModalTitle: string | undefined;
  ActivateAddEditBook:boolean = false;
  dress:any;

  DressIDFiltered:string="";
  DressTypeFiltered:string="";
  DressListWithoutFiltered:any=[];


  ngOnInit(): void {
    this.RefreshDressList();
  }
  closeClick(){
    this.displayModal=false;
    this.RefreshDressList;
  }

  SendRentalDress(item:any){
    this.displayRentModal = false;
    this.Dress = item;
    this.service.updateRentalDate(this.Dress.id, this.rentalDate)
    .subscribe(
      dress => console.log('Updated dress:', dress),
      error => console.error('Error updating dress:', error)
    );
    this.reloadCurrentPage();
  }
  RentDress(item:any){
    this.displayModal = false;
    this.displayRentModal = true;
    this.Dress = item;
  }
  ShowModalDialog() {
    this.displayModal = true;
  }
  ShowData(item:any){
    this.Dress = item;
    let date = new Date(Date.parse(this.Dress.rentalDate));
    let today = new Date();
    if (date > today){
    this.canRent = false;
    }
    else{
    this.canRent = true;
    }
    this.displayModal = true;
    console.log(this.displayModal);

  }
  reloadCurrentPage() {
    window.location.reload();
   }

  RefreshDressList(){
    this.service.getDresses().subscribe(data=>{
      this.DressViewList = data;
      this.DressListWithoutFiltered=data;
    });
  }

  Filtered(){
    var DressIDFilter = this.DressIDFiltered;
    var DressTypeFilter = this.DressTypeFiltered;

    this.DressViewList = this.DressListWithoutFiltered.filter(function (el: { id: { toString: () => string; }; type: { toString: () => string; }; }){
      return el.id.toString().toLowerCase().includes(
        DressIDFilter.toString().trim().toLowerCase()
      )&&
      el.type.toString().toLowerCase().includes(
        DressTypeFilter.toString().trim().toLowerCase()
      )
    })
  }

}
