import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BootstrapClass } from '../../services/bootstrap-classes.service';

@Component({
  selector: 'app-class-card',
  templateUrl: './class-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClassCardComponent {
  classInfo = input.required<BootstrapClass>();
  isSelected = input<boolean>(false);
}
