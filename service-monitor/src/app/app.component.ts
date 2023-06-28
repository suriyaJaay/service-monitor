import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'service-monitor';

  routePaths = [
    { name: 'Over All', value: 'overAll' },
    { name: 'International', value: 'international' },
    { name: 'Heritage', value: 'heritage' },
  ];

  defaultModule:string = 'overAll';

  constructor(private route : Router){}

  ngOnInit(){}

  loadModulesOnSelect(module: string): void{
    this.route.navigateByUrl(module);
    this.defaultModule = module;
  }
}
