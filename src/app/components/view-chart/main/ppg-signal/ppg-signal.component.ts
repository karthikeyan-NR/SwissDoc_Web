import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppg-signal',
  templateUrl: './ppg-signal.component.html',
  styleUrl: './ppg-signal.component.scss'
})
export class PpgSignalComponent implements OnInit {
  ppgData: any;
  ngOnInit(): void {
  }

}
