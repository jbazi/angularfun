import {Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ "Title: " + getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <button class="btn btn-primary" [class.active]="isActive">Class Binding</button>
        <button [style.background]="isActive ? 'blue' : 'green'">Style Binding</button>
        <div (click) = "eventBubleUp()">
            <button (click)="onSave($event)">Event Binding</button>
        </div>
        <div>
            <!--<input #name (keyup.enter)="onKeyUp(name.value)" />-->
            <br>
            <input [(ngModel)]="name" (keyup.enter)="onKeyUp()" />
        </div>
        
        <div>
            {{ hobbies.title }} <br/>
            {{ hobbies.rating | number }} <br/>
            {{ hobbies.type }} <br/>
            {{ hobbies.salary | currency:'USD':true:'3.0-1' }}
        </div>
        
        <div>
            {{text | summary }}
            
        </div>
    `
})
export class CoursesComponent{
    text = "God is good all the time, and all the time God is good!!"
    title = "List of courses";
    name = "Yvette Kayumba";
    isActive = false;
    hobbies = {
        title: "List of Hobbies",
        rating: 1.0,
        type: "Coding",
        salary: 120000.97 
    }
    courses;
    
    
    //service is a dependency
    //passing it in a constructor means am decoupling 
    constructor(service: CoursesService){
        //let service = new CoursesService(); <- here am tightly coupled my class to my implementation, and I can't change that at runtime
        this.courses = service.getCourses();
    }
    
    eventBubleUp(){
        console.log("this method is for event bubble up");
    }
    onSave($event){
        $event.stopPropagation();
        console.log("button was clicked", $event);
        //alert("Hey Shema, Angular is fun");
    }
    onKeyUp(){
        console.log("Your name is: " + this.name);
    }
    getTitle(){
        return this.title;
    }
}