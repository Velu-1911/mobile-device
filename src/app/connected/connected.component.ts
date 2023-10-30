import { Component } from '@angular/core';
import { ServicefileService } from '../servicefile.service';
import { Router } from '@angular/router';
import { device } from '../device';

@Component({
  selector: 'app-connected',
  templateUrl: './connected.component.html',
  styleUrls: ['./connected.component.css']
})
export class ConnectedComponent {
showrouter:boolean=false
showusage:boolean=false
data:String;
  connecteddev:device;

  routerdetails:any;
  constructor(private router:Router,private service:ServicefileService) {

  }

  ngOnInit(){
      this.connecteddev = this.service.getafterconnected();
      console.log(this.connecteddev);
  }
showrouterdetails()
{
  this.showrouter = true
  this.showusage = false


  this.service.getConnectedrouterDetails(this.connecteddev).subscribe(
    
    response=>{
      this.routerdetails = response;
      console.log(this.routerdetails.ssid);
      console.log(response.ssid);
    }

   )

  
}

showusagedetails()
{
  this.showusage=true
  this.showrouter = false
}


  sendusage(){
    console.log(this.data)

    this.connecteddev.datause = this.data //this.data;
    console.log(this.connecteddev.datause);
    console.log(typeof(this.connecteddev.datause))  
    this.service.addrouter(this.connecteddev).subscribe(
    
    response=>{

    }

   )
    
  }


  transfer(){
    this.service.savessidreuse(this.connecteddev.ssid)
    this.router.navigate(['searchrouter'])
  }



}
