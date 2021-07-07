import { ToastAndroid } from 'react-native';

export default class FormValidator {

    form = [];
    validations = {
        required: (control) => `The field ${control} is required`,
        minLength: (control, acepted) => `The field ${control} has a length less than ${acepted}`,
        maxLength: (control, acepted) => `The field ${control} has a length granted than ${acepted}`,
        minValue: (control, acepted) => `The field ${control} is less than ${acepted}`,
        maxValue: (control, acepted) => `The field ${control} is granted than ${acepted}`,
        matchWith: (control, acepted) => `The fields ${control} and  ${acepted} don't match`
    };

    constructor(form) {
        this.form = form;
    }

    controlIsEmpty(control) {
        const value = control.value;
        return value === null || value === '' || value === ' ';
    }

    formIsValid() {
        let isValid = true;

        for (let i = 0; i < this.form.length; i++) {
            const control = this.form[i];
            
            if (!this.controlIsValid(control)) {
                isValid = false;
                break;
            }
        }

        return isValid;
    }

    controlIsValid(control) {
        const cValue = control.value;
        const cValidations = control.validations;

        if(!cValidations) return true;

        if (cValidations.hasMinLengthOf && cValue?.length < cValidations.hasMinLengthOf) {
            ToastAndroid.show(this.validations.minLength(control.label, cValidations.hasMinLengthOf), ToastAndroid.SHORT);
            return false;
        }
        
        if (cValidations.hasMaxLengthOf && cValue?.length > cValidations.hasMaxLengthOf) {
            ToastAndroid.show(this.validations.maxLength(control.label, cValidations.hasMaxLengthOf), ToastAndroid.SHORT);
            return false;
        }
        
        if (cValidations.hasMinValueOf && Number(cValue) < cValidations.hasMinValueOf) {
            ToastAndroid.show(this.validations.minValue(control.label, cValidations.hasMinValueOf), ToastAndroid.SHORT);
            return false;
        }
        
        if (cValidations.hasMaxValueOf && Number(cValue) > cValidations.hasMaxValueOf) {
            ToastAndroid.show(this.validations.maxValue(control.label, cValidations.hasMaxValueOf), ToastAndroid.SHORT);
            return false;
        }
        
        if (cValidations.isRequired && this.controlIsEmpty(control)) {
            ToastAndroid.show(this.validations.required(control.label), ToastAndroid.SHORT);
            return false;
        }

        if (cValidations.isMatchWith)
        {
            let isValid = true;

            for (let matchWith of this.form) {                
                if (matchWith.property === cValidations.isMatchWith && matchWith.value !== cValue) {
                    ToastAndroid.show(this.validations.matchWith(control.label, matchWith.label), ToastAndroid.SHORT);
                    isValid = false;
                    break;
                }
            }

            if (!isValid) return false;
        }
        
        return true;
    }
}