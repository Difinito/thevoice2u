import { HttpStatus, ValidationPipe } from '@nestjs/common';

const PASSWORD_RULE =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

const PASSWOR_RULE_MESSAGE =
  'Password should have 1 upper case, lowercase letter along with a number and special character';

export const REGEX = {
  PASSWORD_RULE,
};

export const MESSAGES = {
  PASSWOR_RULE_MESSAGE,
};

const VALIDATION_PIPE = new ValidationPipe({
  errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
});

export const SETTINGS = {
  VALIDATION_PIPE,
};
