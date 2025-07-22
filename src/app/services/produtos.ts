import { HttpClient } from '@angular/common/http';
import { Injectable, type OnInit } from '@angular/core';
import type { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Produtos implements OnInit {
  private API_URL = 'http://localhost:3000/produtos';
  produtos: any[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getProdutos();
  }

  // definir o retorno como Observable<any[]> para melhor tipagem
  getProdutos(): Observable<any> {
    this.http.get<any>(this.API_URL).subscribe((data) => {
      console.log('Produtos loaded:', data);
      this.produtos = data;
    });

    return this.http.get<any>(this.API_URL);
  }
}
