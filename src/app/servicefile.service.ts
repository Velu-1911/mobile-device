import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { address } from './address';
import { Observable } from 'rxjs';
import { device } from './device';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ServicefileService {
  constructor(private httpClient:HttpClient, private toast:ToastrService)
  {

  }

  private baseURL = "http://localhost:8080/api/router/";
  private search = "searchrouter"
  private addd = "adddevice"
  private getconnected = "getconnectedRouter";
  private addusage = "increaseusage";

  public availabledev:device[];

  public selecteddev:string;

  private afterconnecteddev:device;


  private reusessid :String;


  afterconnected(dev:device){
      console.log(dev)
      this.afterconnecteddev=dev;

  }
  
  getafterconnected(){
    return this.afterconnecteddev;
  }

  setssid(i:string){
      console.log(i)
      this.selecteddev=i;
  }


  getssid(){
    console.log(this.selecteddev)
    return this.selecteddev;
  }

 

  UpdateRouterDetails(area:address):Observable<device[]>{  

    return this.httpClient.post<device[]>(`${this.baseURL}`+this.search,area);

  }


  adddevice(name:device):Observable<String>{  
    console.log(name.ssid);
    console.log(name.password);
    console.log(name.mac);
    return this.httpClient.post(`${this.baseURL}`+this.addd,name,{responseType:'text'});
  }


  getConnectedrouterDetails(name:device):Observable<any>{  
    console.log(name.ssid);
    console.log(name.password);
    console.log(name.mac);
    return this.httpClient.post<any>(`${this.baseURL}`+this.getconnected,name);
  }



  addrouter(name:device):Observable<any>{  
    console.log(name.ssid);
    console.log(name.password);
    console.log(name.mac);
    console.log(name.datause);
    console.log(`${this.baseURL}`+this.addusage)
    return this.httpClient.post<any>(`${this.baseURL}`+this.addusage,name);
  }

  setavailabledevice(devices: device[])
  {
    console.log(devices);
    this.availabledev=devices;
  }

  getavailabledevice()
  {
    console.log(this.availabledev)
    return this.availabledev;
  }

  

  savessidreuse(ssid:String){
    console.log(ssid)
    this.reusessid = ssid;
  }


  getreusessid(){
    return this.reusessid;
  }


/////////////////////Toaster   Code//////////////////////////////////////
  Showsuccess(title:any, message:any)
  {
    this.toast.success(message, title,{
  })
  }
  Showerror(title:any, message:any)
  {
    this.toast.error(message, title)
  }
  Showwarning(title:any, message:any)
  {
    this.toast.warning(message, title,{
      easing:'ease-in',
  })
  }
  Showinfo(title:any, message:any)
  {
    this.toast.info(message, title,{
      easing:'ease-in'
    })
  }
}
