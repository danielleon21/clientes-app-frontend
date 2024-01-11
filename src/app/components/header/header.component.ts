import {Component} from "@angular/core";


@Component(
    {
        selector: 'app-header',
        templateUrl: 'header.component.html',
        standalone: true
    }
)
export class HeaderComponent {
    title: string = 'App Angular'
}
