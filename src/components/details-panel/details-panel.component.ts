import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { BootstrapClass } from '../../services/bootstrap-classes.service';

@Component({
  selector: 'app-details-panel',
  standalone: true,
  templateUrl: './details-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsPanelComponent {
  classInfo = input.required<BootstrapClass>();

  copyStatus = signal<'Copy' | 'Copied!'>('Copy');

  copyCode(): void {
    if (this.copyStatus() === 'Copied!') return;

    navigator.clipboard.writeText(this.classInfo().htmlExample)
      .then(() => {
        this.copyStatus.set('Copied!');
        setTimeout(() => this.copyStatus.set('Copy'), 2000);
      })
      .catch(err => console.error('Failed to copy text: ', err));
  }
}
