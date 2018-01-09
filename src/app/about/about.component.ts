import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	goals: any;

	constructor(
		private router: Router,
		private _data: DataService
	) { }

	ngOnInit() {
		this._data.goal.subscribe(res => this.goals = res);
	}

	backToHome() {
		this.router.navigate(['']);
	}

}
