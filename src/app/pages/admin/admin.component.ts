import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  jobForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.jobForm.valid) {
      console.log('Form Submitted', this.jobForm.value);
      this.jobForm.reset();
    }
  }
}

