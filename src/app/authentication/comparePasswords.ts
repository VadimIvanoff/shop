import {AbstractControl, ValidatorFn} from '@angular/forms';

export function ComparePasswords(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const password = control.get('password').value;
    const confirm = control.get('confirm').value;
    const result =  password === confirm ? null : {'notMatch': {value: null}};
    if (result !== null) {
      control.get('confirm').setErrors({missMatch: true});
    }
    return result;
  };
}
