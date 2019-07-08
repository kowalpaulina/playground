import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { formGroupNameProvider } from "@angular/forms/src/directives/reactive_directives/form_group_name";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.css"]
})
export class FormsComponent implements OnInit {
  // name = new FormControl('');
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
    const nameControl = this.formGroup.get("name");

    nameControl.valueChanges
      .pipe
      // debounceTime(500)
      ()
      .subscribe(value => {
        if (value && value.length > 55) {
          nameControl.setValue("kmknjhhf", {
            emitEvent: false
          });
        }
        console.log(value);
        console.log(this.formGroup.value);
        nameControl.setValidators(nameValidator);
      });
  }

  toggleState() {
    this.formGroup.disabled
      ? this.formGroup.get("name").enable({ emitEvent: false })
      : this.formGroup.get("name").disable();
  }

  updateName() {
    this.formGroup.patchValue({
      name: "Ala"
    });
  }

  submit() {
    // #NIEFAJNE
    console.log(this.formGroup.value);
    // #FAJNE
    console.log(this.formGroup.getRawValue());
  }

  formGroup = new FormGroup({
    name: new FormControl("", [ //sync validators
      Validators.required,
      Validators.minLength(4)
    ]
     })
  });

}


function nameValidator(name: FormControl) {
  // console.log('checking');
  if (name.value.includes("fuck")) {
    return { name: true };
  } else {
    return null;
  }
}




  // formGroup = new FormGroup({
  //   name: new FormControl({value: "", disable: true}
  //    )
  // });

  //   formGroup = new FormGroup({
  //   name: new FormControl('', {validators: Validators.required, updateOn: "blur"}}
  //    )
  // });



