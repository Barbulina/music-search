import { msToTime } from "@/utils/msToTime.js";

describe("msToTime", () => {
  it("Should  call return format time", () => {
    const msTimeMock = 361120;
    const formatTime = msToTime(msTimeMock);
    const expectedFormatTime = "6 min 1 sec";

    expect(formatTime).toEqual(expectedFormatTime);
  });
});
