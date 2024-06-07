import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-visiteurs',
  templateUrl: './visiteurs.component.html',
  styleUrls: ['./visiteurs.component.css']
})
export class VisiteursComponent {

  public lineChartData: ChartDataSets[] = [
    { data: [15, 25, 18, 24, 20], label: 'Courbe 1' },
    { data: [16, 24, 20, 26, 15], label: 'Courbe 2' },
    { data: [14, 26, 17, 28, 10], label: 'Courbe 3' }
  ];

  public lineChartLabels: Label[] = ['14 Aug', '15 Aug', '16 Aug', '17 Aug', '18 Aug'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors = [
    {
      borderColor: 'blue',
      backgroundColor: 'rgba(0,0,255,0.3)',
    },
    {
      borderColor: 'green',
      backgroundColor: 'rgba(0,255,0,0.3)',
    },
    {
      borderColor: 'purple',
      backgroundColor: 'rgba(128,0,128,0.3)',
    }
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';

  filterData(month: string) {
    // Logique de filtrage en fonction du mois
    // Actualisez les données du graphique en conséquence
  }
}
