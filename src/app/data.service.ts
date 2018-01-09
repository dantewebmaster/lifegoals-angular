import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

	private goals = new BehaviorSubject<any>(['Learn Angular with Gary Simon', 'Star this great repo', 'Drink some coffee']);
	goal = this.goals.asObservable();

	constructor() { }

	changeGoal(goal) {
		this.goals.next(goal);
	}
}
