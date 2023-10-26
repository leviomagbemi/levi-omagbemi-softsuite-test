import {
  Form as VeeForm,
  Field as VeeField,
  ErrorMessage,
  defineRule,
  configure
} from 'vee-validate';

import { required, min } from '@vee-validate/rules';

export default {
  install(app) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('ErrorMessage', ErrorMessage);

    defineRule('required', required);
    defineRule('min', min);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `Please input a valid ${ctx.field}`,
          max: `${ctx.field} should be miximum of 20 characters`,
          min: `${ctx.field} should be minimum of 2 characters`,
          regex: `${ctx.field} must contain letter, number and symbol`
        };

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `This field ${ctx.field} is invalid`;

        return message;
      },

      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: true,
      validateOnModelUpdate: true
    });
  }
};
