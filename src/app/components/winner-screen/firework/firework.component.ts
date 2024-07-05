import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: 'firework',
  templateUrl: 'firework.component.html',
  styleUrls: ['firework.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FireworkComponent {
  public readonly fireworks = new Array(3);
  public readonly parts = new Array(72);
}