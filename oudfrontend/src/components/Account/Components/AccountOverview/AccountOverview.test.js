import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr } from "./../../General/Utils";
import AccountOverview from "./AccountOverview";

const setUp = (props = {}) => {
  const component = shallow(<AccountOverview {...props} />);
  return component;
};

describe("AccountOverview", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Account should render without errors", () => {
    const wrapper = findByTestAtrr(component, "accountContainer");
    expect(wrapper.length).toBe(1);
  });

  it("Navbar should render without errors", () => {
    const wrapper = findByTestAtrr(component, "Profile");
    expect(wrapper.length).toBe(1);
  });

  it("MainContainer should render without errors", () => {
    const wrapper = findByTestAtrr(component, "YourPlan");
    expect(wrapper.length).toBe(1);
  });

  it("Footer should render without errors", () => {
    const wrapper = findByTestAtrr(component, "SignOutEverywhere");
    expect(wrapper.length).toBe(1);
  });
  it("Footer should render without errors", () => {
    const wrapper = findByTestAtrr(component, "UserExperienceForm");
    expect(wrapper.length).toBe(1);
  });
});
