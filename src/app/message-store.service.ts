import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

const PROTOCOL_KEY = '1NdoA7kgUnudC9Q1hywaZi8ru2MJgS999b';
const httpOptions = {
  headers: new HttpHeaders({
    key:  PROTOCOL_KEY
  })
};

/**
 * https://bob.planaria.network/query/1GgmC7Cg782YtQ6R9QkM58voyWeQJmJJzG/ewogICJ2IjogMywKICAicSI6IHsKICAgICJmaW5kIjogewogICAgICAib3V0LnRhcGUuY2VsbCI6IHsKICAgICAgICAiJGVsZW1NYXRjaCI6IHsKICAgICAgICAgICJpIjogMCwKICAgICAgICAgICJzIjogIjFOZG9BN2tnVW51ZEM5UTFoeXdhWmk4cnUyTUpnUzk5OWIiCiAgICAgICAgfQogICAgICB9CiAgICB9LAogICAgInByb2plY3QiOiB7CiAgICAgICJvdXQudGFwZS5jZWxsLnMiOiAxCiAgICB9LAogICAgImxpbWl0IjogNQogIH0sCiAgInIiOiB7CiAgICAiZiI6ICJbIC5bXSB8IC5vdXRbMF0udGFwZVtdIHwgIHsgY2VsbDE6IC5jZWxsIH0gXSIKICB9Cn0=
 */
@Injectable({
  providedIn: 'root'
})
export class MessageStoreService {

  constructor(private http: HttpClient) {
    this.fetchMessages$();
  }

  private messages: BehaviorSubject<string[]> = new BehaviorSubject([]);
  messages$ = this.messages.asObservable();

  fetchMessages$() {
    const params = {
      v: 3,
      q: {
        find: {
          'out.tape.cell': {
            $elemMatch: {
              i: 0,
              s: PROTOCOL_KEY
            }
          }
        },
        project: {
          'out.tape.cell.ls': 1, 'out.tape.cell.s': 1, 'tx.h': 1, blk: 1
        },
        limit: 20
      },
      r: {
        f: '[ .[] | .out[0].tape[] |  { cell1: .cell } ]'
      }
    };
    this.http.get<BobResponse>('https://bob.planaria.network/q/1GgmC7Cg782YtQ6R9QkM58voyWeQJmJJzG/' +
      btoa(JSON.stringify(params)), httpOptions)
      .subscribe(r => {
        this.messages.next(r.c.concat(r.u).map(c => c.cell1).filter(c => c[1]).map(c => c[1].s));
      });
  }
}


interface BobResponse {
  c: Item[];
  u: Item[];
}

interface Item {
  cell1: {s: string}[];
}
