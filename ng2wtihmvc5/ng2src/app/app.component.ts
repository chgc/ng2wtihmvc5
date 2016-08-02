import { Component } from '@angular/core';

declare var $: JQueryStatic;

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    templateUrl: 'template/Users/Index'
})
export class AppComponent {
    constructor() { }
}