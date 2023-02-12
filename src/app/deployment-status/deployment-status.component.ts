import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-deployment-status',
  template: `
    <div *ngFor="let deployment of deployments">
      <h2>{{ deployment.status }}</h2>
      <p>{{ deployment.message }}</p>
    </div>
  `
})
export class DeploymentStatusComponent implements OnInit {
  deployments: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://your-api.com/deployments').subscribe(deployments => {
      this.deployments = deployments;
    });
  }
}
