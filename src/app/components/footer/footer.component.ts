import {Component} from "@angular/core";

@Component({
    selector: 'app-footer',
    templateUrl: 'footer.component.html',
    standalone: true,
    styleUrls: ['footer.component.css']
})
export class FooterComponent {
    public author: any = {
        name: 'Daniel',
        lastname: 'Leon'
    }
}
