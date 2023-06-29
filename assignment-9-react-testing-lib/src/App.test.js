import { fireEvent, render, screen } from "@testing-library/react";
import FeedbackForm from "./FeedbackForm";

describe("Feedback Form", () => {
  test("User is able to submit the form if the score is lower than 5 and additional feedback is provided", () => {
    const score = "3";
    const comment = "The pizza crust was too thick";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    const inputScore = screen.getByLabelText(/Score:/, {selector: 'input'});
    fireEvent.change(inputScore, {target: {value: score}});

    const inputComment = screen.getByLabelText(/Comments:/, { selector: 'textarea' });
    fireEvent.change(inputComment, {target: {value: comment}});

    const clickSubmit = screen.getByText(/Submit/);
    fireEvent.click(clickSubmit);

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment,
    });
  });

  test("User is able to submit the form if the score is higher than 5, without additional feedback", () => {
    const score = "9";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    const inputScore = screen.getByLabelText(/Score:/, {selector: 'input'});
    fireEvent.change(inputScore, {target: {value: score}});

    const clickSubmit = screen.getByText(/Submit/);
    fireEvent.click(clickSubmit);


    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment: "",
    });
  });
});
