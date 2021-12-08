import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'cached-request';
  result: string;

  constructor(private apiService: ApiService) { }

  getUsers(): void {
    this.apiService.getClients()
      .pipe(tap(users => this.result = JSON.stringify(users)))
      .subscribe();
  }

  getEmails(): void {
    this.apiService.getEmails()
      .pipe(tap(flowers => this.result = JSON.stringify(flowers)))
      .subscribe();
  }

  getProducts(): void {
    this.apiService.getProducts()
      .pipe(tap(products => this.result = JSON.stringify(products)))
      .subscribe();
  }
}
