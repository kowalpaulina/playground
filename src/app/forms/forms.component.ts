import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { formGroupNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  // formGroup: FormGroup;
  constructor(private fb: FormBuilder) {
    // this.formGroup = fb.group({
    //   name: [''],
    //   adress: fb.group({
    //     street: ['']
    //   })
    // })
   }

  ngOnInit() {
    const nameControl = this.formGroup.get('name');


    nameControl.valueChanges
    .pipe(
      // debounceTime(500)
    )
    .subscribe(value => {
      if (value && value.length > 5) {
        nameControl.setValue('kmknjhhf', {
          emitEvent: false
        });
      }
      console.log(value);
      console.log(this.formGroup.value);
      nameControl.setValidators(nameValidator)
    })
  }

  toggleState() {
    this.formGroup.disabled ?
      this.formGroup.get('name').enable({emitEvent: false}) : this.formGroup.get('name').disable()
  }

  submit() {
    // #NIEFAJNE
    console.log(this.formGroup.value);
    // #FAJNE
    console.log(this.formGroup.getRawValue())
  }

  formGroup = new FormGroup({
    name: new FormControl({value: '', disabled: true})
  })



}

function nameValidator(name: FormControl){
  // console.log('checking');
  if(name.value.includes('fuck')){
    return {name: true}
  } else {
    return null
  }
}
