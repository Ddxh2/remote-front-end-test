import React from "react";
import { shallow } from "enzyme";
import PropertyListing from "../PropertyListing";

const DUMMY_PROPERTY = {
  id: 73864112,
  bedrooms: 3,
  summary:
    "Property 1 Situated moments from the River Thames in Old Chelsea...",
  displayAddress: "1 CHEYNE WALK, CHELSEA, SW3",
  propertyType: "Flat",
  price: 1950000,
  branchName: "M2 Property, London",
  propertyUrl: "/property-for-sale/property-73864112.html",
  contactUrl: "/property-for-sale/contactBranch.html?propertyId=73864112",
  propertyTitle: "3 bedroom flat for sale",
  mainImage:
    "https://media.rightmove.co.uk/dir/crop/10:9-16:9/38k/37655/53588679/37655_CAM170036_IMG_01_0000_max_476x317.jpg",
};

describe("PropertyListing", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<PropertyListing />);
    expect(wrapper.find(".PropertyListing")).toHaveLength(1);
  });

  it("should render five property cards", () => {
    // Set up
    const useState = React.useState;
    const useStateMock = jest.fn(() => [
      Array(5).fill({ ...DUMMY_PROPERTY }),
      () => {},
    ]);
    React.useState = useStateMock;

    // Test
    const wrapper = shallow(<PropertyListing />);
    expect(wrapper.find("PropertyCard")).toHaveLength(5);

    // Clean up
    React.useState = useState;
  });
});
