import { RedButton, BlueButton, SmButton, LgButton, MainButton } from "./CustomButton.stories";
import CustomButton from "./CustomButton";
import { render, screen } from "@testing-library/react";

const mainColor = "brown";

test("CustomButton 렌더링 테스트 - 기본값", () => {
  render(<CustomButton label="Default Button" />);

  const button = screen.getByRole("button");

  expect(button).toHaveTextContent("Default Button");
  expect(button).toHaveStyle("backgroundColor: black");
  expect(button).toHaveStyle("color: white");
});

test("RedButton 렌더링 테스트", () => {
  render(<RedButton {...RedButton.args} />);
  expect(screen.getByRole("button")).toHaveTextContent(/Red/i);
  expect(screen.getByRole("button")).toHaveStyle("backgroundColor : red");
});

test("BlueButton 렌더링 테스트", () => {
  render(<BlueButton {...BlueButton.args} />);
  expect(screen.getByRole("button")).toHaveTextContent(/Blue/i);
  expect(screen.getByRole("button")).toHaveStyle("backgroundColor : blue");
});

test("SmallButton 렌더링 테스트", () => {
  render(<SmButton {...SmButton.args} />);
  expect(screen.getByRole("button")).toHaveTextContent(/Small Button/i);
  expect(screen.getByRole("button")).toHaveStyle("backgroundColor : gray");
});

test("LgButton 렌더링 테스트", () => {
  render(<LgButton {...LgButton.args} />);
  expect(screen.getByRole("button")).toHaveTextContent(/Large Button/i);
  expect(screen.getByRole("button")).toHaveStyle("backgroundColor : gray");
});

test("MainButton 렌터링 테스트", () => {
  render(<MainButton {...MainButton.args} />);
  const mainButton = screen.getByRole("button"); // 첫 번째 버튼 요소를 가져옵니다.
  expect(mainButton).toHaveTextContent(/Main Button/i);
  expect(mainButton).toHaveStyle(`backgroundColor: ${mainColor}`);
});
