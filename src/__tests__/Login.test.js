import React from "react";
import { mount, } from "enzyme";
import Login from "./../Login";

describe("Login component Tests", () => {

  let wrapper;
  let emailInput;
  let passwordInput;
  let form;

  beforeEach(() => {
    wrapper = mount(<Login />);
    emailInput = wrapper.find('#email');
    passwordInput = wrapper.find('#password');
    form = wrapper.find('form');
  });

  it("should display two input boxes and 1 submit button initially", () => {
    expect(emailInput).toHaveLength(1);
    expect(passwordInput).toHaveLength(1);
    expect(wrapper.find("button")).toHaveLength(1);
  });

  it("should display error message when email is empty", () => {
    emailInput.simulate('change', { target: { value: '' } });
    form.simulate('submit')
    expect(wrapper.find("#emailError")).toHaveLength(1);
    expect(wrapper.find("#emailError").text()).toEqual('This is a required field');
  });

  it("should display error message when password is empty", () => {
    passwordInput.simulate('change', { target: { value: '' } });
    form.simulate('submit')
    expect(wrapper.find("#passwordError")).toHaveLength(1);
    expect(wrapper.find("#passwordError").text()).toEqual('This is a required field');
  });

  it("should display error messages when both email and password are empty", () => {
    passwordInput.simulate('change', { target: { value: '' } });
    form.simulate('submit')
    expect(wrapper.find("#passwordError")).toHaveLength(1);
    expect(wrapper.find("#emailError")).toHaveLength(1);
    expect(wrapper.find("#emailError").text()).toEqual('This is a required field');
    expect(wrapper.find("#passwordError").text()).toEqual('This is a required field');
  });
});