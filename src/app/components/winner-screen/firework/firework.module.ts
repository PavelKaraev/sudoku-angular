import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FireworkComponent } from "./firework.component";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FireworkComponent
  ],
  exports: [
    FireworkComponent
  ]
})

export class FireworkModule {}