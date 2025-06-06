import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="app-container">
      <div class="content-wrapper">
        <header>
          <h1>Gestión de Viajes</h1>
          <nav>
            <button (click)="navegarA('/mis-viajes')" class="btn">
              <span class="icon">✈️</span>
              Mis Viajes
            </button>
            <button (click)="navegarA('/nuevo-viaje')" class="btn">
              <span class="icon">➕</span>
              Nuevo Viaje
            </button>
          </nav>
        </header>
        <main>
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

    * {
      font-family: 'Poppins', sans-serif;
    }

    .app-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
      padding: 2rem 1rem;
    }

    .content-wrapper {
      max-width: 1200px;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 20px;
      padding: 2rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    header {
      margin-bottom: 3rem;
      text-align: center;
    }

    h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 3rem;
      font-weight: 700;
      color: #1e3c72;
      margin-bottom: 2rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }

    nav {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 2rem;
      border: none;
      border-radius: 12px;
      background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
      color: white;
      cursor: pointer;
      font-size: 1.1rem;
      font-weight: 500;
      transition: all 0.3s ease;
      min-width: 200px;
      justify-content: center;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }

    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
      background: linear-gradient(135deg, #2a5298 0%, #1e3c72 100%);
    }

    .btn:active {
      transform: translateY(1px);
    }

    .icon {
      font-size: 1.2rem;
    }

    main {
      flex: 1;
    }

    @media (max-width: 768px) {
      .content-wrapper {
        padding: 1.5rem;
      }

      h1 {
        font-size: 2.5rem;
      }

      .btn {
        min-width: 180px;
        padding: 0.8rem 1.5rem;
      }
    }

    @media (max-width: 480px) {
      .app-container {
        padding: 1rem 0.5rem;
      }

      .content-wrapper {
        padding: 1rem;
        border-radius: 15px;
      }

      h1 {
        font-size: 2rem;
      }

      nav {
        flex-direction: column;
        align-items: stretch;
      }

      .btn {
        width: 100%;
      }
    }
  `]
})
export class AppComponent {
  constructor(private router: Router) {}

  navegarA(ruta: string) {
    console.log('Navegando a:', ruta);
    this.router.navigate([ruta]);
  }
} 