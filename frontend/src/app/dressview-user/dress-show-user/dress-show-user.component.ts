import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import { SharedService } from 'src/app/shared.service';

declare var $: any;

@Component({
  selector: 'app-dress-show-user',
  templateUrl: './dress-show-user.component.html',
  styleUrls: ['./dress-show-user.component.css']
})
export class DressShowUserComponent {

  displayModal: boolean = false;
  displayRentModal: boolean = false;

  faPlusCircle = faPlusCircle;
  faSearch = faSearch;

  constructor(private service:SharedService) { }

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
  SendRentalDress(item:any){
    this.displayRentModal = false;
    this.Dress = item;
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
    this.displayModal = true;

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
