import { render } from "@testing-library/react";
import FlipCard from "../../components/FlipCard";

it("renders homepage unchanged", () => {
  const { container } = render(
    <FlipCard frontContent={<></>} backContent={<></>} visibleSide={"front"} />
  );
  expect(container).toMatchSnapshot();
});

it("renders homepage unchanged", () => {
  const { container } = render(
    <FlipCard frontContent={<></>} backContent={<></>} visibleSide={"back"} />
  );
  expect(container).toMatchSnapshot();
});
