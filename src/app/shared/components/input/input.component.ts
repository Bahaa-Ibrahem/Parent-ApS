import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

enum FieldTypes{
  TEXT = "text",
  NUMBER = "number",
  EMAIL = "email",
  TEXTAREA = "textarea"
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() formGroup!: FormGroup;
  @Input() controlName = '';
  @Input() type: string = FieldTypes.TEXT;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() isPercentage: boolean = false;
  @Input() hidden: boolean = false;
  @Input() required: boolean = false;
  @Input() maxlength: number = 500;
  @Input() placeholder: string = '';
  @Input() iconName: string = '';
  @Input() tagText: string = '';
  @Input() inputGroupText: string = '';
  @Input() className: string = '';
  @Output() searchValue =new EventEmitter<string>();
  @Output() eventChange =new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {

  }

  onSearch() {
    this.searchValue.emit(this.formGroup.get(this.controlName)?.value);
  }
}
