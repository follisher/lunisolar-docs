# lunisolar 工厂函数

## lunisolar()

用于创建一个[**Lunisolar**](./lunisolarClass.md)实例对象：

```typescript
lunisolar(date?: string | number | Date | Lunisolar, config?: ConfigType): Lunisolar
```

```typescript
interface ConfigType {
  isUTC: boolean // 是否使用UTC时间，为true时，lunisolar生成的所有时间都是UTC时间，需要用local转为本地时
  offset: number // 时间偏移，以分钟为单位
  changeAgeTerm: number | null // 换岁节气, 默认为2, 即立春，如果为null刚为正月初一换岁
  lang: string // 默認語言
}
```

## lunisolar.fromLunar()

用于通过阴历创建一个**Lunisolar**实例对象：

具体用法请参考文档：[解析-阴历反查](../guide/functional/parse.md#lunisolar-fromlunar-阴历反查)

```typescript
type FromLunarData = {
  year?: number | string 
  // 该年正月初一所在公历年的年份，可以是字符串，默认值为当前日期的年份
  month: number | string 
  // 阴历月份，可以是字符串，必填, 当月份数大于100时，表明时闰月，如闰4月，可输入104
  day: number | string 
  // 阴历日，可以是字符串，必填
  hour?: number | string 
  // 时辰索引值或时辰名，默认为0, 即子时。设置时辰后，返回的小时为该时辰的中间时间，如寅时，会返回4点正的时间。
  isLeapMonth?: boolean 
  // 指明月份是否闰月，默认为false, 当month设为大于100的数时，会无视此设置
}

lunisolar.fromLunar(lunarData: FromLunarData, config: ConfigType): Lunisolar
```

## lunisolar.utc()

用于创建一个UTC时间

```typescript
lunisolar.utc(date?: string | number | Date | Lunisolar, config?: ConfigType): Lunisolar
```

其参数与lunisolar()的参数一致，而config.isUTC会自动设为true

```typescript
// 以下两种写法的效果一致
const lsr1 = lunisolar('2023-03-14 18:00', { isUTC: true })
const lsr2 = lunisolar.utc('2023-03-14 18:00')
```

## lunisolar.config()

更改全局配置

方法会返回lunisolar以便链式操作

```typescript
interface ConfigType {
  isUTC: boolean // 是否使用UTC时间，默认为false, 为true时，lunisolar生成的所有时间都是UTC时间，需要用local转为本地时
  changeAgeTerm: number | null // 换岁节气
  lang: string // 使用语言包的名称
}
lunisolar.config(config: ConfigType): typeof lunisolar
```

## lunisolar.extend()

加载插件

方法会返回lunisolar以便链式操作

具体用法请参考文档：[插件-基本说明](../guide/plugins/about.md)

```typescript
/**
 * @param {PluginFunc} 按规则定义的插件
 * @param {T} 插件用于的参数
 */
lunisolar.extend<T = unknown>(plugin: PluginFunc<T>, options?: T): typeof lunisolar
```

## lunisolar.locale()

载入语言包

方法会返回lunisolar以便链式操作

具体用法请参考文档：[国际化](../guide/i18n.md)

```typescript
/**
 * @param {LsrLocale | LsrLocale[]} localeData 语言包
 * @param {boolean} unChangeLang 是否使用原来正使用的语言包，默认加载新包时会使用新语言包，设置为true时则只加载而不使用
 */
lunisolar.locale(
  localeData: LsrLocale | LsrLocale[],
  unChangeLang: boolean = false
): typeof lunisolar
```

## lunisolar.Lunar

返回[Lunar](./lunar.md)构造函数

## lunisolar.Char8

返回[Char8](./char8.md)构造函数

## lunisolar\.SB

返回[SB](./sb.md)构造函数

## lunisolar.Stem

返回[Stem](./stem.md)构造函数

## lunisolar.Branch

返回[Branch](./branch.md)构造函数

## lunisolar.Element5

返回[Element5](./element5.md)构造函数

## lunisolar.Lunisolar

返回[Lunisolar](./lunisolarClass.md)构造函数

## lunisolar.Trigram8

返回[Trigram8](./trigram8.md)构造函数

## lunisolar.Direction24

返回[Direction24](./direction24.md)构造函数

## lunisolar.Markers

<Badge type="warn" vertical="middle" text="v2.3.0+"/>

返回[Markers](./markers.md)构造函数
