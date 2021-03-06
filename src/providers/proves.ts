import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Proves {
 
  data: any;
 
  constructor(public http: Http) {
    this.data = null;
  }
 
  getProves(){
 
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get('http://ec2-34-209-87-65.us-west-2.compute.amazonaws.com:3000/api/proves')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
 
  }
 
  createProve(prove){
 
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
 
    this.http.post('http://ec2-34-209-87-65.us-west-2.compute.amazonaws.com:3000/api/proves', JSON.stringify(prove), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });
 
  }

  updateProve(prove){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let id = prove.id;
 
    this.http.put('http://ec2-34-209-87-65.us-west-2.compute.amazonaws.com:3000/api/proves/' + id, JSON.stringify(prove), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });  
 
  }
 
  deleteProve(id){
 
    this.http.delete('http://ec2-34-209-87-65.us-west-2.compute.amazonaws.com:3000/api/proves/' + id).subscribe((res) => {
      console.log(res.json());
    });    
 
  }
 
}
