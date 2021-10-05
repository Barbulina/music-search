import { debounce } from "@/utils/debounce.js";
import { DEFAULT_DEBOUNCE_TIME } from "@/config.js";

describe("Debounce", () => {
  it("Should  call function once if call in greather than  DEFAULT_DEBOUNCE_TIME", () => {
    let x = 1;
    function mockFn() {
      x++;
    }

    const mockFnLauncher = debounce(mockFn, DEFAULT_DEBOUNCE_TIME);

    mockFnLauncher();
    mockFnLauncher();
    mockFnLauncher();
    setTimeout(() => {
      expect(x).toEqual(2);
    }, DEFAULT_DEBOUNCE_TIME + 1);
  });
});
