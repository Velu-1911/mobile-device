import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServicefileService } from '../servicefile.service';
import { device } from '../device';

@Component({
  selector: 'app-displaymat',
  templateUrl: './displaymat.component.html',
  styleUrls: ['./displaymat.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports:[MatTableModule]
})
export class DisplaymatComponent {
  constructor(private fb: FormBuilder,private spinner: NgxSpinnerService, private router:Router,private service: ServicefileService) {

  }
  public displayedColumns: string[] = ['ssid','mac','action'];
  public dataSource:any;
  public datasave:device[];
  deleteRows:any;
  getall()
  {
    this.datasave = this.service.getavailabledevice();
    console.log(this.datasave)
    this.dataSource = new MatTableDataSource<any>(this.datasave);
  }
  ngOnInit():void
  {
    this.getall();
  }
  
 
connectclick(i:any)
{
  this.deleteRows= this.dataSource.data.splice(i,1)
  console.log(i);
  this.service.setssid(this.deleteRows[0].ssid);
// <-- Refresh the datasource
    //console.log(this.deleteRows[i].deviceId)
  console.log(typeof(this.deleteRows[0].ssid))
   this.service.setssid(this.deleteRows[0].ssid)
   this.router.navigate(['/searchrouter']);
}
}
