import { runRCLTest } from "../utils/runRCLTest";
const TICK_NUM = 200000;
const RCL = 7;

describe(`测试 RCL${RCL} -> RCL${RCL + 1}`, () => {
  it(`测试 RCL${RCL} -> RCL${RCL + 1}`, async () => {
    await runRCLTest(RCL, RCL + 1, TICK_NUM);
  });
});
