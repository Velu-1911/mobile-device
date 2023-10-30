import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormArray} from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { address } from '../address';
import { ServicefileService } from '../servicefile.service';
import { device } from '../device';


@Component({
  selector: 'app-wifisearch',
  templateUrl: './wifisearch.component.html',
  styleUrls: ['./wifisearch.component.css']
})

export class WifisearchComponent {
  areaform!:FormGroup
  areaname:String ;
  name:any;
  loadadrdress: address = new address();
  getData:device[];
  constructor(private fb: FormBuilder,private spinner: NgxSpinnerService, private router:Router,private service:ServicefileService) {

  }
area:String="";
show:boolean = false;
showtable:boolean=false;

ngOnInit()
{

this.areaform = this.fb.group({
  area:['',Validators.required]
})};
searchavailable()
{


  /** spinner starts on init */
  this.spinner.show();

  setTimeout(() => {
    /** spinner ends after 5 seconds */
    this.spinner.hide();
  }, 900);

  this.loadadrdress.area=this.areaname;

  console.log(this.areaname);

  console.log(this.loadadrdress.area)

  this.service.UpdateRouterDetails(this.loadadrdress).subscribe(
    
    response=>{

    this.getData = response;

    console.log(this.getData);
    this.service.setavailabledevice(this.getData)
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.showtable = true
    }, 1000);
    
    }

   )
   
}
connectclick()
{
  this.router.navigate(['/searchrouter']);
}

}
