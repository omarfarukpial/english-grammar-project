import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  menuItems = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: '/',
    },
    {
      label: 'Conversions',
      icon: 'pi pi-bolt',
      items: [
        { label: 'Voice Change', routerLink: 'conversions/voice-change'},
        { label: 'Transformation', routerLink: 'conversions/transformation-of-sentence'},
        { label: 'Degree', routerLink: 'conversions/degree-change'}
      ]
    },
    {
      label: 'Ask AI',
      icon: 'pi pi-microchip-ai',
      routerLink: 'ask-ai',
    }
  ];
}
