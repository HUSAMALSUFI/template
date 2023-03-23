import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo-add',
  templateUrl: './demo-add.component.html',
  styleUrls: ['./demo-add.component.scss']
})
export class DemoAddComponent implements OnInit {
  form: FormGroup;

  constructor(
    private activated: ActivatedRoute,
    private formbuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.onValidators();
    this.onGet();
  }
  onValidators() {
    this.form = this.formbuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
    });
  }

  onGet() {
    debugger
    let data = this.activated.snapshot.queryParams["DataTable"]
    console.log(data)
  }
}
