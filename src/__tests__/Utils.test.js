
import { validateEmail, validatePassword } from "./../Utils";

describe("Utils Tests", () => {

  it("should return error message when email is empty", () => {
    const email = ''
    const errorMessage = validateEmail(email);
    const expectedErrorMessage = 'This is a required field';
    expect(errorMessage).toEqual(expectedErrorMessage);
  });

  it("should return error message when email is invalid", () => {
    const email = 'abc'
    const errorMessage = validateEmail(email);
    const expectedErrorMessage = 'Should be a valid email';
    expect(errorMessage).toEqual(expectedErrorMessage);
  });

  it("should return error message when email is not more than 5 characters", () => {
    const email = 'a@b.c'
    const errorMessage = validateEmail(email);
    const expectedErrorMessage = 'Should me more than 5 characters long';
    expect(errorMessage).toEqual(expectedErrorMessage);
  });

  it("should return no error message when email is following the validations", () => {
    const email = 'abc@xyz.com'
    const errorMessage = validateEmail(email);
    const expectedErrorMessage = '';
    expect(errorMessage).toEqual(expectedErrorMessage);
  });

  it("should return error message when password is empty", () => {
    const password = ''
    const errorMessage = validatePassword(password);
    const expectedErrorMessage = 'This is a required field';
    expect(errorMessage).toEqual(expectedErrorMessage);
  });

  it("should return error message when password contains less than 6 characters", () => {
    const password = 'abcde'
    const errorMessage = validatePassword(password);
    const expectedErrorMessage = 'Min 6 characters';
    expect(errorMessage).toEqual(expectedErrorMessage);
  });

  it("should return error message when password doesn't contain atleast 1 uppercase character", () => {
    const password = 'abcdefghi'
    const errorMessage = validatePassword(password);
    const expectedErrorMessage = 'Should contain 1 uppercase letter';
    expect(errorMessage).toEqual(expectedErrorMessage);
  });

  it("should return no error message when password is following the validations", () => {
    const password = 'abcdEfgh'
    const errorMessage = validatePassword(password);
    const expectedErrorMessage = '';
    expect(errorMessage).toEqual(expectedErrorMessage);
  });

});