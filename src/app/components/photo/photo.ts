import { Component, type OnInit } from '@angular/core';
import { Produtos } from '../../services/produtos';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-photo',
  imports: [],
  templateUrl: './photo.html',
  styleUrl: './photo.css',
})

// OnInit  é usado para mostrar os dados assim que o componente é inicializado
export class Photo implements OnInit {
  produtos: any[] = [];

  constructor(private produtosService: Produtos) {
    this.produtosService.getProdutos().subscribe((data) => {
      this.produtos = data;
    });
  }

  ngOnInit(): void {
    this.loadProdutos();
  }

  private loadProdutos(): void {
    this.produtosService.getProdutos().subscribe({
      next: (data) => {
        this.produtos = data;
      },
      error: (err) => {
        console.error('Failed to load produtos:', err);
      },
    });
  }
}
