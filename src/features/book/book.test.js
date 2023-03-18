import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import Book from "./book";
import ChangeShelfOptions from "../changeShelfOptions/changeShelfOptions";
configure({ adapter: new Adapter() });

describe("test App Component", () => {
  let wrapper;
  it("component should Call Main Page", () => {
    wrapper = shallow(
         <Book />
      )
    expect(wrapper.find('ChangeShelfOptions')).toHaveLength(1);
  });
});