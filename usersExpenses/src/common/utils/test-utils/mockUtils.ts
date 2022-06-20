import isArray from 'lodash.isarray';
/**
 * You can send an array of mocking values or a simple value
 *
 * Simple value sample:
 * const mockFn = mockReturnValueOnce('test');
 * expect(mockFn()).toBe('test');
 *
 * Multiple value sample:
 * const mockFn = mockReturnValueOnce(['test', 'test2', 'test3']);
 * expect(mockFn()).toBe('test');
 * expect(mockFn()).toBe('test2');
 * expect(mockFn()).toBe('test3');
 * @returns jest.fn() with the mocked returns
 */
export const mockReturnValueOnce = <T>(values: T[] | T) => {
  const fun = jest.fn();
  if (isArray(values)) {
    values.forEach((value: T) => {
      fun.mockReturnValueOnce(value);
    });
  } else {
    fun.mockReturnValueOnce(values);
  }
  return fun;
};

export const mockReturnValue = <T extends unknown>(fun: Function, value: T) => {
  (fun as jest.Mock).mockReturnValue(value);
};

export const mockImplementation = <T extends unknown>(
  fun: Function,
  dependencies: T,
) => {
  (fun as jest.Mock).mockImplementation(() => dependencies);
};
