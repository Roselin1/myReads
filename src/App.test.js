import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import App from "./App";
configure({ adapter: new Adapter() });

describe("test App Component", () => {
  let wrapper;
  it("component should Call Main Page", () => {
    wrapper = shallow(
         <App />
      )
    expect(wrapper.find('Route')).toHaveLength(2);
  });
});