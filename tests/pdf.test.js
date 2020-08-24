import { Selector } from "testcafe";

fixture`Test InProgress`
  .page`http://localhost:3007`;


test("should download pdf", async (t) => {
  const dl = Selector("#pdf-download-button");

  await t.click(dl);
});
