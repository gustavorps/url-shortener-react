
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model short_urls
 * 
 */
export type short_urls = $Result.DefaultSelection<Prisma.$short_urlsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Short_urls
 * const short_urls = await prisma.short_urls.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Short_urls
   * const short_urls = await prisma.short_urls.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.short_urls`: Exposes CRUD operations for the **short_urls** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Short_urls
    * const short_urls = await prisma.short_urls.findMany()
    * ```
    */
  get short_urls(): Prisma.short_urlsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    short_urls: 'short_urls'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "short_urls"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      short_urls: {
        payload: Prisma.$short_urlsPayload<ExtArgs>
        fields: Prisma.short_urlsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.short_urlsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$short_urlsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.short_urlsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$short_urlsPayload>
          }
          findFirst: {
            args: Prisma.short_urlsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$short_urlsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.short_urlsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$short_urlsPayload>
          }
          findMany: {
            args: Prisma.short_urlsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$short_urlsPayload>[]
          }
          create: {
            args: Prisma.short_urlsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$short_urlsPayload>
          }
          createMany: {
            args: Prisma.short_urlsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.short_urlsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$short_urlsPayload>[]
          }
          delete: {
            args: Prisma.short_urlsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$short_urlsPayload>
          }
          update: {
            args: Prisma.short_urlsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$short_urlsPayload>
          }
          deleteMany: {
            args: Prisma.short_urlsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.short_urlsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.short_urlsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$short_urlsPayload>[]
          }
          upsert: {
            args: Prisma.short_urlsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$short_urlsPayload>
          }
          aggregate: {
            args: Prisma.Short_urlsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShort_urls>
          }
          groupBy: {
            args: Prisma.short_urlsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Short_urlsGroupByOutputType>[]
          }
          count: {
            args: Prisma.short_urlsCountArgs<ExtArgs>
            result: $Utils.Optional<Short_urlsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    short_urls?: short_urlsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model short_urls
   */

  export type AggregateShort_urls = {
    _count: Short_urlsCountAggregateOutputType | null
    _min: Short_urlsMinAggregateOutputType | null
    _max: Short_urlsMaxAggregateOutputType | null
  }

  export type Short_urlsMinAggregateOutputType = {
    uuid: string | null
    name: string | null
    url: string | null
    slug: string | null
    created_at: Date | null
    modified_at: Date | null
    removed_at: Date | null
    owner_id: string | null
  }

  export type Short_urlsMaxAggregateOutputType = {
    uuid: string | null
    name: string | null
    url: string | null
    slug: string | null
    created_at: Date | null
    modified_at: Date | null
    removed_at: Date | null
    owner_id: string | null
  }

  export type Short_urlsCountAggregateOutputType = {
    uuid: number
    name: number
    url: number
    slug: number
    created_at: number
    modified_at: number
    removed_at: number
    owner_id: number
    _all: number
  }


  export type Short_urlsMinAggregateInputType = {
    uuid?: true
    name?: true
    url?: true
    slug?: true
    created_at?: true
    modified_at?: true
    removed_at?: true
    owner_id?: true
  }

  export type Short_urlsMaxAggregateInputType = {
    uuid?: true
    name?: true
    url?: true
    slug?: true
    created_at?: true
    modified_at?: true
    removed_at?: true
    owner_id?: true
  }

  export type Short_urlsCountAggregateInputType = {
    uuid?: true
    name?: true
    url?: true
    slug?: true
    created_at?: true
    modified_at?: true
    removed_at?: true
    owner_id?: true
    _all?: true
  }

  export type Short_urlsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which short_urls to aggregate.
     */
    where?: short_urlsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of short_urls to fetch.
     */
    orderBy?: short_urlsOrderByWithRelationInput | short_urlsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: short_urlsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` short_urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` short_urls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned short_urls
    **/
    _count?: true | Short_urlsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Short_urlsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Short_urlsMaxAggregateInputType
  }

  export type GetShort_urlsAggregateType<T extends Short_urlsAggregateArgs> = {
        [P in keyof T & keyof AggregateShort_urls]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShort_urls[P]>
      : GetScalarType<T[P], AggregateShort_urls[P]>
  }




  export type short_urlsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: short_urlsWhereInput
    orderBy?: short_urlsOrderByWithAggregationInput | short_urlsOrderByWithAggregationInput[]
    by: Short_urlsScalarFieldEnum[] | Short_urlsScalarFieldEnum
    having?: short_urlsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Short_urlsCountAggregateInputType | true
    _min?: Short_urlsMinAggregateInputType
    _max?: Short_urlsMaxAggregateInputType
  }

  export type Short_urlsGroupByOutputType = {
    uuid: string
    name: string | null
    url: string
    slug: string
    created_at: Date
    modified_at: Date
    removed_at: Date | null
    owner_id: string
    _count: Short_urlsCountAggregateOutputType | null
    _min: Short_urlsMinAggregateOutputType | null
    _max: Short_urlsMaxAggregateOutputType | null
  }

  type GetShort_urlsGroupByPayload<T extends short_urlsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Short_urlsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Short_urlsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Short_urlsGroupByOutputType[P]>
            : GetScalarType<T[P], Short_urlsGroupByOutputType[P]>
        }
      >
    >


  export type short_urlsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    name?: boolean
    url?: boolean
    slug?: boolean
    created_at?: boolean
    modified_at?: boolean
    removed_at?: boolean
    owner_id?: boolean
  }, ExtArgs["result"]["short_urls"]>

  export type short_urlsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    name?: boolean
    url?: boolean
    slug?: boolean
    created_at?: boolean
    modified_at?: boolean
    removed_at?: boolean
    owner_id?: boolean
  }, ExtArgs["result"]["short_urls"]>

  export type short_urlsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    name?: boolean
    url?: boolean
    slug?: boolean
    created_at?: boolean
    modified_at?: boolean
    removed_at?: boolean
    owner_id?: boolean
  }, ExtArgs["result"]["short_urls"]>

  export type short_urlsSelectScalar = {
    uuid?: boolean
    name?: boolean
    url?: boolean
    slug?: boolean
    created_at?: boolean
    modified_at?: boolean
    removed_at?: boolean
    owner_id?: boolean
  }

  export type short_urlsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "name" | "url" | "slug" | "created_at" | "modified_at" | "removed_at" | "owner_id", ExtArgs["result"]["short_urls"]>

  export type $short_urlsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "short_urls"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      name: string | null
      url: string
      slug: string
      created_at: Date
      modified_at: Date
      removed_at: Date | null
      owner_id: string
    }, ExtArgs["result"]["short_urls"]>
    composites: {}
  }

  type short_urlsGetPayload<S extends boolean | null | undefined | short_urlsDefaultArgs> = $Result.GetResult<Prisma.$short_urlsPayload, S>

  type short_urlsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<short_urlsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Short_urlsCountAggregateInputType | true
    }

  export interface short_urlsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['short_urls'], meta: { name: 'short_urls' } }
    /**
     * Find zero or one Short_urls that matches the filter.
     * @param {short_urlsFindUniqueArgs} args - Arguments to find a Short_urls
     * @example
     * // Get one Short_urls
     * const short_urls = await prisma.short_urls.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends short_urlsFindUniqueArgs>(args: SelectSubset<T, short_urlsFindUniqueArgs<ExtArgs>>): Prisma__short_urlsClient<$Result.GetResult<Prisma.$short_urlsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Short_urls that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {short_urlsFindUniqueOrThrowArgs} args - Arguments to find a Short_urls
     * @example
     * // Get one Short_urls
     * const short_urls = await prisma.short_urls.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends short_urlsFindUniqueOrThrowArgs>(args: SelectSubset<T, short_urlsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__short_urlsClient<$Result.GetResult<Prisma.$short_urlsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Short_urls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {short_urlsFindFirstArgs} args - Arguments to find a Short_urls
     * @example
     * // Get one Short_urls
     * const short_urls = await prisma.short_urls.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends short_urlsFindFirstArgs>(args?: SelectSubset<T, short_urlsFindFirstArgs<ExtArgs>>): Prisma__short_urlsClient<$Result.GetResult<Prisma.$short_urlsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Short_urls that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {short_urlsFindFirstOrThrowArgs} args - Arguments to find a Short_urls
     * @example
     * // Get one Short_urls
     * const short_urls = await prisma.short_urls.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends short_urlsFindFirstOrThrowArgs>(args?: SelectSubset<T, short_urlsFindFirstOrThrowArgs<ExtArgs>>): Prisma__short_urlsClient<$Result.GetResult<Prisma.$short_urlsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Short_urls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {short_urlsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Short_urls
     * const short_urls = await prisma.short_urls.findMany()
     * 
     * // Get first 10 Short_urls
     * const short_urls = await prisma.short_urls.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const short_urlsWithUuidOnly = await prisma.short_urls.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends short_urlsFindManyArgs>(args?: SelectSubset<T, short_urlsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$short_urlsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Short_urls.
     * @param {short_urlsCreateArgs} args - Arguments to create a Short_urls.
     * @example
     * // Create one Short_urls
     * const Short_urls = await prisma.short_urls.create({
     *   data: {
     *     // ... data to create a Short_urls
     *   }
     * })
     * 
     */
    create<T extends short_urlsCreateArgs>(args: SelectSubset<T, short_urlsCreateArgs<ExtArgs>>): Prisma__short_urlsClient<$Result.GetResult<Prisma.$short_urlsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Short_urls.
     * @param {short_urlsCreateManyArgs} args - Arguments to create many Short_urls.
     * @example
     * // Create many Short_urls
     * const short_urls = await prisma.short_urls.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends short_urlsCreateManyArgs>(args?: SelectSubset<T, short_urlsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Short_urls and returns the data saved in the database.
     * @param {short_urlsCreateManyAndReturnArgs} args - Arguments to create many Short_urls.
     * @example
     * // Create many Short_urls
     * const short_urls = await prisma.short_urls.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Short_urls and only return the `uuid`
     * const short_urlsWithUuidOnly = await prisma.short_urls.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends short_urlsCreateManyAndReturnArgs>(args?: SelectSubset<T, short_urlsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$short_urlsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Short_urls.
     * @param {short_urlsDeleteArgs} args - Arguments to delete one Short_urls.
     * @example
     * // Delete one Short_urls
     * const Short_urls = await prisma.short_urls.delete({
     *   where: {
     *     // ... filter to delete one Short_urls
     *   }
     * })
     * 
     */
    delete<T extends short_urlsDeleteArgs>(args: SelectSubset<T, short_urlsDeleteArgs<ExtArgs>>): Prisma__short_urlsClient<$Result.GetResult<Prisma.$short_urlsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Short_urls.
     * @param {short_urlsUpdateArgs} args - Arguments to update one Short_urls.
     * @example
     * // Update one Short_urls
     * const short_urls = await prisma.short_urls.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends short_urlsUpdateArgs>(args: SelectSubset<T, short_urlsUpdateArgs<ExtArgs>>): Prisma__short_urlsClient<$Result.GetResult<Prisma.$short_urlsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Short_urls.
     * @param {short_urlsDeleteManyArgs} args - Arguments to filter Short_urls to delete.
     * @example
     * // Delete a few Short_urls
     * const { count } = await prisma.short_urls.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends short_urlsDeleteManyArgs>(args?: SelectSubset<T, short_urlsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Short_urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {short_urlsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Short_urls
     * const short_urls = await prisma.short_urls.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends short_urlsUpdateManyArgs>(args: SelectSubset<T, short_urlsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Short_urls and returns the data updated in the database.
     * @param {short_urlsUpdateManyAndReturnArgs} args - Arguments to update many Short_urls.
     * @example
     * // Update many Short_urls
     * const short_urls = await prisma.short_urls.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Short_urls and only return the `uuid`
     * const short_urlsWithUuidOnly = await prisma.short_urls.updateManyAndReturn({
     *   select: { uuid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends short_urlsUpdateManyAndReturnArgs>(args: SelectSubset<T, short_urlsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$short_urlsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Short_urls.
     * @param {short_urlsUpsertArgs} args - Arguments to update or create a Short_urls.
     * @example
     * // Update or create a Short_urls
     * const short_urls = await prisma.short_urls.upsert({
     *   create: {
     *     // ... data to create a Short_urls
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Short_urls we want to update
     *   }
     * })
     */
    upsert<T extends short_urlsUpsertArgs>(args: SelectSubset<T, short_urlsUpsertArgs<ExtArgs>>): Prisma__short_urlsClient<$Result.GetResult<Prisma.$short_urlsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Short_urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {short_urlsCountArgs} args - Arguments to filter Short_urls to count.
     * @example
     * // Count the number of Short_urls
     * const count = await prisma.short_urls.count({
     *   where: {
     *     // ... the filter for the Short_urls we want to count
     *   }
     * })
    **/
    count<T extends short_urlsCountArgs>(
      args?: Subset<T, short_urlsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Short_urlsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Short_urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Short_urlsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Short_urlsAggregateArgs>(args: Subset<T, Short_urlsAggregateArgs>): Prisma.PrismaPromise<GetShort_urlsAggregateType<T>>

    /**
     * Group by Short_urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {short_urlsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends short_urlsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: short_urlsGroupByArgs['orderBy'] }
        : { orderBy?: short_urlsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, short_urlsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShort_urlsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the short_urls model
   */
  readonly fields: short_urlsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for short_urls.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__short_urlsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the short_urls model
   */
  interface short_urlsFieldRefs {
    readonly uuid: FieldRef<"short_urls", 'String'>
    readonly name: FieldRef<"short_urls", 'String'>
    readonly url: FieldRef<"short_urls", 'String'>
    readonly slug: FieldRef<"short_urls", 'String'>
    readonly created_at: FieldRef<"short_urls", 'DateTime'>
    readonly modified_at: FieldRef<"short_urls", 'DateTime'>
    readonly removed_at: FieldRef<"short_urls", 'DateTime'>
    readonly owner_id: FieldRef<"short_urls", 'String'>
  }
    

  // Custom InputTypes
  /**
   * short_urls findUnique
   */
  export type short_urlsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the short_urls
     */
    select?: short_urlsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the short_urls
     */
    omit?: short_urlsOmit<ExtArgs> | null
    /**
     * Filter, which short_urls to fetch.
     */
    where: short_urlsWhereUniqueInput
  }

  /**
   * short_urls findUniqueOrThrow
   */
  export type short_urlsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the short_urls
     */
    select?: short_urlsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the short_urls
     */
    omit?: short_urlsOmit<ExtArgs> | null
    /**
     * Filter, which short_urls to fetch.
     */
    where: short_urlsWhereUniqueInput
  }

  /**
   * short_urls findFirst
   */
  export type short_urlsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the short_urls
     */
    select?: short_urlsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the short_urls
     */
    omit?: short_urlsOmit<ExtArgs> | null
    /**
     * Filter, which short_urls to fetch.
     */
    where?: short_urlsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of short_urls to fetch.
     */
    orderBy?: short_urlsOrderByWithRelationInput | short_urlsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for short_urls.
     */
    cursor?: short_urlsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` short_urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` short_urls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of short_urls.
     */
    distinct?: Short_urlsScalarFieldEnum | Short_urlsScalarFieldEnum[]
  }

  /**
   * short_urls findFirstOrThrow
   */
  export type short_urlsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the short_urls
     */
    select?: short_urlsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the short_urls
     */
    omit?: short_urlsOmit<ExtArgs> | null
    /**
     * Filter, which short_urls to fetch.
     */
    where?: short_urlsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of short_urls to fetch.
     */
    orderBy?: short_urlsOrderByWithRelationInput | short_urlsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for short_urls.
     */
    cursor?: short_urlsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` short_urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` short_urls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of short_urls.
     */
    distinct?: Short_urlsScalarFieldEnum | Short_urlsScalarFieldEnum[]
  }

  /**
   * short_urls findMany
   */
  export type short_urlsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the short_urls
     */
    select?: short_urlsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the short_urls
     */
    omit?: short_urlsOmit<ExtArgs> | null
    /**
     * Filter, which short_urls to fetch.
     */
    where?: short_urlsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of short_urls to fetch.
     */
    orderBy?: short_urlsOrderByWithRelationInput | short_urlsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing short_urls.
     */
    cursor?: short_urlsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` short_urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` short_urls.
     */
    skip?: number
    distinct?: Short_urlsScalarFieldEnum | Short_urlsScalarFieldEnum[]
  }

  /**
   * short_urls create
   */
  export type short_urlsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the short_urls
     */
    select?: short_urlsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the short_urls
     */
    omit?: short_urlsOmit<ExtArgs> | null
    /**
     * The data needed to create a short_urls.
     */
    data: XOR<short_urlsCreateInput, short_urlsUncheckedCreateInput>
  }

  /**
   * short_urls createMany
   */
  export type short_urlsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many short_urls.
     */
    data: short_urlsCreateManyInput | short_urlsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * short_urls createManyAndReturn
   */
  export type short_urlsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the short_urls
     */
    select?: short_urlsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the short_urls
     */
    omit?: short_urlsOmit<ExtArgs> | null
    /**
     * The data used to create many short_urls.
     */
    data: short_urlsCreateManyInput | short_urlsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * short_urls update
   */
  export type short_urlsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the short_urls
     */
    select?: short_urlsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the short_urls
     */
    omit?: short_urlsOmit<ExtArgs> | null
    /**
     * The data needed to update a short_urls.
     */
    data: XOR<short_urlsUpdateInput, short_urlsUncheckedUpdateInput>
    /**
     * Choose, which short_urls to update.
     */
    where: short_urlsWhereUniqueInput
  }

  /**
   * short_urls updateMany
   */
  export type short_urlsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update short_urls.
     */
    data: XOR<short_urlsUpdateManyMutationInput, short_urlsUncheckedUpdateManyInput>
    /**
     * Filter which short_urls to update
     */
    where?: short_urlsWhereInput
    /**
     * Limit how many short_urls to update.
     */
    limit?: number
  }

  /**
   * short_urls updateManyAndReturn
   */
  export type short_urlsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the short_urls
     */
    select?: short_urlsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the short_urls
     */
    omit?: short_urlsOmit<ExtArgs> | null
    /**
     * The data used to update short_urls.
     */
    data: XOR<short_urlsUpdateManyMutationInput, short_urlsUncheckedUpdateManyInput>
    /**
     * Filter which short_urls to update
     */
    where?: short_urlsWhereInput
    /**
     * Limit how many short_urls to update.
     */
    limit?: number
  }

  /**
   * short_urls upsert
   */
  export type short_urlsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the short_urls
     */
    select?: short_urlsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the short_urls
     */
    omit?: short_urlsOmit<ExtArgs> | null
    /**
     * The filter to search for the short_urls to update in case it exists.
     */
    where: short_urlsWhereUniqueInput
    /**
     * In case the short_urls found by the `where` argument doesn't exist, create a new short_urls with this data.
     */
    create: XOR<short_urlsCreateInput, short_urlsUncheckedCreateInput>
    /**
     * In case the short_urls was found with the provided `where` argument, update it with this data.
     */
    update: XOR<short_urlsUpdateInput, short_urlsUncheckedUpdateInput>
  }

  /**
   * short_urls delete
   */
  export type short_urlsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the short_urls
     */
    select?: short_urlsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the short_urls
     */
    omit?: short_urlsOmit<ExtArgs> | null
    /**
     * Filter which short_urls to delete.
     */
    where: short_urlsWhereUniqueInput
  }

  /**
   * short_urls deleteMany
   */
  export type short_urlsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which short_urls to delete
     */
    where?: short_urlsWhereInput
    /**
     * Limit how many short_urls to delete.
     */
    limit?: number
  }

  /**
   * short_urls without action
   */
  export type short_urlsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the short_urls
     */
    select?: short_urlsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the short_urls
     */
    omit?: short_urlsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Short_urlsScalarFieldEnum: {
    uuid: 'uuid',
    name: 'name',
    url: 'url',
    slug: 'slug',
    created_at: 'created_at',
    modified_at: 'modified_at',
    removed_at: 'removed_at',
    owner_id: 'owner_id'
  };

  export type Short_urlsScalarFieldEnum = (typeof Short_urlsScalarFieldEnum)[keyof typeof Short_urlsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type short_urlsWhereInput = {
    AND?: short_urlsWhereInput | short_urlsWhereInput[]
    OR?: short_urlsWhereInput[]
    NOT?: short_urlsWhereInput | short_urlsWhereInput[]
    uuid?: StringFilter<"short_urls"> | string
    name?: StringNullableFilter<"short_urls"> | string | null
    url?: StringFilter<"short_urls"> | string
    slug?: UuidFilter<"short_urls"> | string
    created_at?: DateTimeFilter<"short_urls"> | Date | string
    modified_at?: DateTimeFilter<"short_urls"> | Date | string
    removed_at?: DateTimeNullableFilter<"short_urls"> | Date | string | null
    owner_id?: StringFilter<"short_urls"> | string
  }

  export type short_urlsOrderByWithRelationInput = {
    uuid?: SortOrder
    name?: SortOrderInput | SortOrder
    url?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    removed_at?: SortOrderInput | SortOrder
    owner_id?: SortOrder
  }

  export type short_urlsWhereUniqueInput = Prisma.AtLeast<{
    slug?: string
    AND?: short_urlsWhereInput | short_urlsWhereInput[]
    OR?: short_urlsWhereInput[]
    NOT?: short_urlsWhereInput | short_urlsWhereInput[]
    uuid?: StringFilter<"short_urls"> | string
    name?: StringNullableFilter<"short_urls"> | string | null
    url?: StringFilter<"short_urls"> | string
    created_at?: DateTimeFilter<"short_urls"> | Date | string
    modified_at?: DateTimeFilter<"short_urls"> | Date | string
    removed_at?: DateTimeNullableFilter<"short_urls"> | Date | string | null
    owner_id?: StringFilter<"short_urls"> | string
  }, "slug">

  export type short_urlsOrderByWithAggregationInput = {
    uuid?: SortOrder
    name?: SortOrderInput | SortOrder
    url?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    removed_at?: SortOrderInput | SortOrder
    owner_id?: SortOrder
    _count?: short_urlsCountOrderByAggregateInput
    _max?: short_urlsMaxOrderByAggregateInput
    _min?: short_urlsMinOrderByAggregateInput
  }

  export type short_urlsScalarWhereWithAggregatesInput = {
    AND?: short_urlsScalarWhereWithAggregatesInput | short_urlsScalarWhereWithAggregatesInput[]
    OR?: short_urlsScalarWhereWithAggregatesInput[]
    NOT?: short_urlsScalarWhereWithAggregatesInput | short_urlsScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"short_urls"> | string
    name?: StringNullableWithAggregatesFilter<"short_urls"> | string | null
    url?: StringWithAggregatesFilter<"short_urls"> | string
    slug?: UuidWithAggregatesFilter<"short_urls"> | string
    created_at?: DateTimeWithAggregatesFilter<"short_urls"> | Date | string
    modified_at?: DateTimeWithAggregatesFilter<"short_urls"> | Date | string
    removed_at?: DateTimeNullableWithAggregatesFilter<"short_urls"> | Date | string | null
    owner_id?: StringWithAggregatesFilter<"short_urls"> | string
  }

  export type short_urlsCreateInput = {
    uuid?: string
    name?: string | null
    url: string
    slug?: string
    created_at?: Date | string
    modified_at?: Date | string
    removed_at?: Date | string | null
    owner_id?: string
  }

  export type short_urlsUncheckedCreateInput = {
    uuid?: string
    name?: string | null
    url: string
    slug?: string
    created_at?: Date | string
    modified_at?: Date | string
    removed_at?: Date | string | null
    owner_id?: string
  }

  export type short_urlsUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    removed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner_id?: StringFieldUpdateOperationsInput | string
  }

  export type short_urlsUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    removed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner_id?: StringFieldUpdateOperationsInput | string
  }

  export type short_urlsCreateManyInput = {
    uuid?: string
    name?: string | null
    url: string
    slug?: string
    created_at?: Date | string
    modified_at?: Date | string
    removed_at?: Date | string | null
    owner_id?: string
  }

  export type short_urlsUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    removed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner_id?: StringFieldUpdateOperationsInput | string
  }

  export type short_urlsUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    removed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type short_urlsCountOrderByAggregateInput = {
    uuid?: SortOrder
    name?: SortOrder
    url?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    removed_at?: SortOrder
    owner_id?: SortOrder
  }

  export type short_urlsMaxOrderByAggregateInput = {
    uuid?: SortOrder
    name?: SortOrder
    url?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    removed_at?: SortOrder
    owner_id?: SortOrder
  }

  export type short_urlsMinOrderByAggregateInput = {
    uuid?: SortOrder
    name?: SortOrder
    url?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    removed_at?: SortOrder
    owner_id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}