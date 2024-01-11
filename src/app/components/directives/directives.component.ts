import {Component} from '@angular/core';
import {NgFor, NgIf} from "@angular/common";

@Component({
    selector: 'app-directives',
    standalone: true,
    imports: [
        NgFor,
        NgIf
    ],
    templateUrl: './directives.component.html',
})
export class DirectivesComponent {
    habilitar: boolean = true
    courseList: string[] = ['TypeScript', 'JavaScript', 'Java SE', 'C#', "PHP"]

    setHabilitar(): void {
        this.habilitar = !this.habilitar
    }
}
