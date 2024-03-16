import { isString } from './validate';

interface DataTypesTest {
  value: unknown;
  description: string;
  isStringExpected: boolean;
}

const DATA_TYPES_TESTS: DataTypesTest[] = [
  {
    value: true,
    description: 'true',
    isStringExpected: false,
  },
  {
    value: false,
    description: 'false',
    isStringExpected: false,
  },
  {
    value: 1,
    description: '1',
    isStringExpected: false,
  },
  {
    value: 1 === 1,
    description: '1 === 1',
    isStringExpected: false,
  },
  {
    value: 'true',
    description: '"true"',
    isStringExpected: true,
  },
  {
    value: (someString: string) => someString,
    description: 'arrow function',
    isStringExpected: false,
  },
  {
    value: { 1: 1 },
    description: '{ 1: 1 }',
    isStringExpected: false,
  },
  {
    value: [1],
    description: '[1]',
    isStringExpected: false,
  },
  {
    value: '1',
    description: '"1"',
    isStringExpected: true,
  },
  {
    value: '',
    description: '""',
    isStringExpected: true,
  },
  {
    value: 'String',
    description: '"String"',
    isStringExpected: true,
  },
  {
    value: new Date(),
    description: 'Date object',
    isStringExpected: false,
  },
  {
    value: Symbol(),
    description: 'Symbol',
    isStringExpected: false,
  },
  {
    value: null,
    description: 'null',
    isStringExpected: false,
  },
  {
    value: undefined,
    description: 'undefined',
    isStringExpected: false,
  },
];

describe('isString', () => {
  test.each(DATA_TYPES_TESTS)(
    'should return $isStringExpected for $description',
    ({ value, isStringExpected }: DataTypesTest) => {
      expect(isString(value)).toBe(isStringExpected);
    },
  );
});
