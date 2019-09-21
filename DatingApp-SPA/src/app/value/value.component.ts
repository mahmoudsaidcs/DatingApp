import { Component, OnInit  } from '@angular/core';
import {enableProdMode} from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line: import-blacklist

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }
  getValues() {


     this.http.get('//localhost:5000/api/values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
    /*const headers = new Headers();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');
    const people = this.http.get(this.heroesUrl);

    people.subscribe(
    data => {
      console.log(data[0]);
    }
  );
  return this;
*/
  }

}
