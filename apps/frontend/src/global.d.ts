declare global {
  type DeepPartial<T> = T extends object
    ? {
        [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

  type DeepRequired<T> = T extends object
    ? {
        [P in keyof T]-?: DeepRequired<T[P]>;
      }
    : T;

  type Except<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

  interface JSON {
    parse<T = unknown>(text: string, reviver?: (this: unknown, key: string, value: unknown) => unknown): T;
  }

  interface Number {
    toLocaleString(locales?: "en-US", options?: Intl.NumberFormatOptions): string;
  }

  interface ObjectConstructor {
    entries<TValue, TKey extends number | string | symbol>(
      o: ArrayLike<TValue> | Record<TKey, TValue>,
    ): [TKey, TValue][];

    keys<T extends object>(o: T): (keyof T)[];
  }

  type Optional<T> = { [K in keyof T]: T[K] } | { [K in keyof T]?: never };

  interface String {
    toLocaleLowerCase(locales?: string | string[]): Lowercase<string>;

    toLocaleUpperCase(locales?: string | string[]): Uppercase<string>;

    toLowerCase(): Lowercase<string>;

    toUpperCase(): Uppercase<string>;
  }

  interface Window {
    electron: {
      close: () => void;
      minimize: () => void;
      toggleMaximize: () => void;
    };
  }
}

export {};
