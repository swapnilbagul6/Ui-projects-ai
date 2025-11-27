import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { BootstrapClassesService, ClassCategory, BootstrapClass } from './services/bootstrap-classes.service';
import { ClassCardComponent } from './components/class-card/class-card.component';
import { DetailsPanelComponent } from './components/details-panel/details-panel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ClassCardComponent, DetailsPanelComponent]
})
export class AppComponent implements OnInit {
  private classesService = inject(BootstrapClassesService);

  classCategories = signal<ClassCategory[]>([]);
  selectedCategory = signal<ClassCategory | undefined>(undefined);
  selectedClass = signal<BootstrapClass | undefined>(undefined);

  ngOnInit() {
    const categories = this.classesService.getClasses();
    this.classCategories.set(categories);
    // Set initial selection
    if (categories.length > 0) {
      this.selectCategory(categories[0]);
    }
  }

  selectCategory(category: ClassCategory): void {
    this.selectedCategory.set(category);
    if (category.items.length > 0) {
      this.selectClass(category.items[0]);
    } else {
      this.selectedClass.set(undefined);
    }
  }

  selectClass(classInfo: BootstrapClass): void {
    this.selectedClass.set(classInfo);
  }
}
