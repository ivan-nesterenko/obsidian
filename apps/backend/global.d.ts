import { OnApplicationBootstrap, OnApplicationShutdown, OnModuleDestroy, OnModuleInit } from "@nestjs/common";

declare global {
  type BaseService = Partial<OnModuleInit & OnApplicationBootstrap & OnModuleDestroy & OnApplicationShutdown> &
    Record<string, any>;

  type Except<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

  type Optional<T> = { [K in keyof T]: T[K] } | { [K in keyof T]?: never };

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

  interface String {
    toLowerCase(): Lowercase<string>;

    toLocaleLowerCase(locales?: string | string[]): Lowercase<string>;

    toUpperCase(): Uppercase<string>;

    toLocaleUpperCase(locales?: string | string[]): Uppercase<string>;
  }

  interface Number {
    toLocaleString(locales?: "en-US", options?: Intl.NumberFormatOptions): string;
  }

  interface ObjectConstructor {
    keys<T extends object>(o: T): (keyof T)[];

    entries<TValue, TKey extends string | number | symbol>(
      o: Record<TKey, TValue> | ArrayLike<TValue>,
    ): [TKey, TValue][];
  }

  interface JSON {
    parse<T = unknown>(text: string, reviver?: (this: unknown, key: string, value: unknown) => unknown): T;
  }
}

export {};
