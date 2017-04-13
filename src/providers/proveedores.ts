import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Proveedores {
 
  data: any;
 
  constructor(public http: Http) {
    this.data = null;
  }
 
  getProveedores(){
 
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get('http://ec2-54-186-89-2.us-west-2.compute.amazonaws.com:3000/api/proveedores')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
 
  }
 
  createProveedor(proveedor){
 
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
 
    this.http.post('http://ec2-54-186-89-2.us-west-2.compute.amazonaws.com:3000/api/proveedores', JSON.stringify(proveedor), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });
 
  }

  updateProveedor(id){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
 
    this.http.put('http://ec2-54-186-89-2.us-west-2.compute.amazonaws.com:3000/api/proveedores', JSON.stringify(id), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });  
 
  }
 
  deleteProveedor(id){
 
    this.http.delete('http://ec2-54-186-89-2.us-west-2.compute.amazonaws.com:3000/api/proveedores/' + id).subscribe((res) => {
      console.log(res.json());
    });    
 
  }
 
}
