import { render } from "@testing-library/react";
import { describe, test } from "vitest";

import { Generator } from "./Generator";

describe("Generator Test", () => {
  
  test("renders headline", () => {
    render(<Generator />);
  });

});