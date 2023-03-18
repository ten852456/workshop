import { Component } from '@angular/core';
import { faPlusCircle, faSearch, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { SharedService } from 'src/app/shared.service'

@Component({
  selector: 'app-dress-show',
  templateUrl: './dress-show.component.html',
  styleUrls: ['./dress-show.component.css']
})
export class DressShowComponent {
  //icon
  faPlusCircle = faPlusCircle;
  faSearch = faSearch;
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;

  constructor(private service:SharedService) { }

  DressViewList:any=[];

  ModalTitle: string | undefined;
  ActivateAddEditBook:boolean = false;
  dress:any;

  BookIdFiltered:string="";
  BookNameFiltered:string="";
  BooklistwithoutFiltered:any=[];


  ngOnInit(): void {
    this.refreshBooklist();
  }

  addClick(){
    this.dress={
      id:0,
      type:"",
      price: 0,
      rentalDate: ""
    }
    this.ModalTitle="Add Dress";
    this.ActivateAddEditBook=true;
  }
  
  editClick(item: any){
    this.dress=item;
    this.ModalTitle="Edit Dress"
    this.ActivateAddEditBook=true;
  }


  closeClick(){
    this.ActivateAddEditBook=false;
    this.refreshBooklist;
  }

  refreshBooklist(){
    this.service.getDresses().subscribe(data=>{
      this.DressViewList = data;
      this.BooklistwithoutFiltered=data;
    });
  }
  reloadCurrentPage() {
    window.location.reload();
   }
  deleteClick(item: any){
    if(confirm('Are you sure??')){
      this.service.deleteDresses(item.id).subscribe(data=>{
        alert(data.toString());
      })
    }
    this.reloadCurrentPage();

  }
  filterfn(){
    var dressIdFilter = this.BookIdFiltered;
    var dressTypeFilter = this.BookNameFiltered;

    this.DressViewList = this.BooklistwithoutFiltered.filter(function (el: { id: { toString: () => string; }; dressname: { toString: () => string; }; }){
      return el.id.toString().toLowerCase().includes(
        dressIdFilter.toString().trim().toLowerCase()
      )&&
      el.dressname.toString().toLowerCase().includes(
        dressTypeFilter.toString().trim().toLowerCase()
      )
    })
  }
}
