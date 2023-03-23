import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { DataService } from "src/app/core/core.index";

@Component({
  selector: "app-events-add",
  templateUrl: "./events-add.component.html",
  styleUrls: ["./events-add.component.scss"],
})
export class EventsAddComponent implements OnInit {
  @Output() onFilter = new EventEmitter();
  public addingEventsForm!: UntypedFormGroup;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private shareData: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    // Add Events form validation
    this.addingEventsForm = this.formBuilder.group({
      eventId: ["", [Validators.required]],
      eventName: ["", [Validators.required]],
      eventDate: ["", [Validators.required]],
    });
  }

  // add event Data API call
  addingEvents() {
    let events = {
      title: this.addingEventsForm.value.eventName,
      date: this.addingEventsForm.value.eventDate,
      className: "bg-purple",
    };
    this.shareData.filter(events);
    this.router.navigate(["/events/events-main"]);
  }
}
