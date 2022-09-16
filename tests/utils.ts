export class TestUtils {
  public url: string;

  constructor(
    url: string,
  ) {
    this.url = url;
  }
}

let testUtils: TestUtils | undefined;

export function getTestUtils(): TestUtils {
  if (!testUtils) {
    throw new Error('TestUtils not set');
  }

  return testUtils;
}

export function setTestUtils(value: TestUtils): void {
  testUtils = value;
}
