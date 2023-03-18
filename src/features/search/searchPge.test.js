import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import Search from "./searchPage";
import { Provider } from "react-redux";
import { store } from "../../app/store";
configure({ adapter: new Adapter() });

describe("test App Component", () => {
  let wrapper;
  it("component should Call Main Page", () => {
    wrapper = shallow(
        <Provider store={store} >
         <Search />
         </Provider>
      )
    expect(wrapper.find('Book')).toBeDefined();
  });
});