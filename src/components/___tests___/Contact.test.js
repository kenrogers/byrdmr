import React from "react";
import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";

import Contact from "../Contact";

describe("<Contact/>", () => {
  it("should render properly and match the snapshot", async () => {
    const wrapper = shallow(<Contact />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("should not submit if required fields are empty", () => {
    // Create an object with the name property missing
    const missingName = {
      name: "",
      email: "test@example.com",
      message: "message"
    };

    // setSubmitting function is called by Formik, set up a mock function for it
    const setSubmitting = jest.fn();

    const wrapper = mount(<Contact />);

    // Call the onSubmit action on Formik, passing our bad data and setSubmitting function
    wrapper
      .find("Formik")
      .props()
      .onSubmit(missingName, { setSubmitting });

    // Check to see that we have an error message for our missing name field
    expect(
      wrapper.find('ErrorMessageImpl.name-error[name="name"]').exists()
    ).toEqual(true);
  });
});
