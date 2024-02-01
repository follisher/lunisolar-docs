# 神煞宜忌

## 1 简介

`theGods`作为`lunisolar`的一个插件，其神煞、宜忌的内容主要参考中国古代典籍 **《协纪纪辨方书》** 。

本库中的所有**宜忌词条**，除特别说明的外，皆出于《协纪纪辨方书 * 卷十一》。

宜忌的推导，需要先查出当日的所有神煞（卷九），每个神煞都有各自的宜忌（卷十），然后通过宜忌等第表、铺注条例（卷十）对宜忌进行整理，最后跟据（卷十一）用事表格进行排序和筛选。

正因为神煞和宜忌的数据复杂烦琐，为了方便维护和以免影响lunisolar的打包体积，故TheGods作为一个lunisolar的插件开发。

---

## 2 快速上手

### 安装

::: code-tabs#installation

@tab:active pnpm

```sh
pnpm add @lunisolar/plugin-thegods
```

@tab yarn

```sh
yarn add @lunisolar/plugin-thegods
```

@tab npm

```sh
npm install @lunisolar/plugin-thegods
```

:::

:::warning 注意

使用`lunisolar@2.x`版本时，lunisolar包已内置有该插件，

可通过 `import theGods from 'lunisolar/plugins/theGods'` 直接导入使用，无需另外安装。

后续版本将 **移除** 所有内置的插件，用户请按需安装下载使用。

:::

### 加载

```typescript
// 引入lunisolar
import lunisolar from 'lunisolar'
// 引入 theGods 插件
import { theGods } from '@lunisolar/plugin-thegods'
// lunisolar@v2.x可通下以下方式导入，后续版本会取消，不再推荐使用
// import theGods from 'lunisolar/plugins/theGods'

// 加载插件
lunisolar.extend(theGods)
```

### 使用

```typescript

// ---  使用
const lsr = lunisolar('2018-10-04')
// 取神煞
lsr.theGods.getGods('M') // 取得当日的月神
lsr.theGods.getGods('D') // 取得当日的日神
lsr.theGods.getGods('MD') // 取得当日的月神和日神
lsr.theGods.getDuty12God() // 取得当日建除十二神（建、除、满....）
lsr.theGods.getLife12God('day') // 取得当日长生十二神 (长生、沐浴、冠帶...)
lsr.theGods.getBy12God('day') // 取得当日串宫十二神（青龍、明堂、天刑...）

// 取宜忌
lsr.theGods.getActs(0) // 取得当日宜忌 {good: string[], bad: string[]}
lsr.theGods.query('this day gods') // 取得当日神煞 （用于取宜忌的神煞）
lsr.theGods.query('good act 1') // 取得当日所宜（通书六十事）
lsr.theGods.query('bad act 1') // 取得当日所忌（通书六十事）
lsr.theGods.query('good act 2') // 取得当日所宜（御用六十七事）
lsr.theGods.query('good act 2') // 取得当日所忌（御用六十七事）
lsr.theGods.query('good act 3') // 取得当日所宜（民三十七事）
lsr.theGods.query('good act 3') // 取得当日所忌（民用三十七事）
lsr.theGods.query('good act') // 取得当日所宜（卷十一的所有词条）
lsr.theGods.query('bad act') // 取得当日所忌（卷十一的所有词条）

// 取得当日所有时辰吉凶
lunisolar('2022-10-21').theGods.getLuckHours() // [-1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1] 大于0为吉，少于0为凶

// 取得当日吉神所在方位
const [d24, god] = lunisolar('2022-11-25').theGods.getLuckDirection('財神')
d24.direction // 南
d24.sign.toString() // 午
d24.angle // 180


// 更多和详细用法请继续往下阅读
```

---

## 3 建除十二神

**建除十二神**，又称**十二值神**。即 “`建、除、满、平、定、执、破、危、成、收、开、闭`”共十二位神，每日轮值，周而复始，观所值以定吉凶。

> 《历书》曰：“历家以建、除、满、平、定、执、破、危、成、收、开、闭，凡十二日，周而复始，观所值以定吉凶。每月交节则叠两值日。其法从月建上起，建与斗杓所指相应，如正月建寅则寅日起建，顺行十二辰也。”

* 方法

```typescript
lunisolar().theGods.getDuty12God()
```

---

## 4 长生十二神

**长生十二神** 分别为：长生、沐浴、冠带、临官、帝旺、衰、病、死、墓、绝、胎、养

|    | 甲 | 乙 | 丙 | 丁 | 戊 | 己 | 庚 | 辛 | 壬 | 癸 |
|----|---|---|---|---|---|---|---|---|---|---|
| 長生 | 亥 | 午 | 寅 | 酉 | 寅 | 酉 | 巳 | 子 | 申 | 卯 |
| 沐浴 | 子 | 巳 | 卯 | 申 | 卯 | 申 | 午 | 亥 | 酉 | 寅 |
| 冠帶 | 丑 | 辰 | 辰 | 未 | 辰 | 未 | 未 | 戌 | 戌 | 丑 |
| 臨官 | 寅 | 卯 | 巳 | 午 | 巳 | 午 | 申 | 酉 | 亥 | 子 |
| 帝旺 | 卯 | 寅 | 午 | 巳 | 午 | 巳 | 酉 | 申 | 子 | 亥 |
| 衰  | 辰 | 丑 | 未 | 辰 | 未 | 辰 | 戌 | 未 | 丑 | 戌 |
| 病  | 巳 | 子 | 申 | 卯 | 申 | 卯 | 亥 | 午 | 寅 | 酉 |
| 死  | 午 | 亥 | 酉 | 寅 | 酉 | 寅 | 子 | 巳 | 卯 | 申 |
| 墓  | 未 | 戌 | 戌 | 丑 | 戌 | 丑 | 丑 | 辰 | 辰 | 未 |
| 絕  | 申 | 酉 | 亥 | 子 | 亥 | 子 | 寅 | 卯 | 巳 | 午 |
| 胎  | 酉 | 申 | 子 | 亥 | 子 | 亥 | 卯 | 寅 | 午 | 巳 |
| 養  | 戌 | 未 | 丑 | 戌 | 丑 | 戌 | 辰 | 丑 | 未 | 辰 |

方法:

```typescript
lunisolar().theGods.getDuty12God(ymdh: 'year' | 'month' | 'day' | 'hour'): God
```

参数:
  
```typescript
ymdh: 'year' | 'month' | 'day' | 'hour'
```

指定year，或返回八字年柱的长生十二神，同理 'month'、'day'、'hour'其它各柱亦如是。

---

## 5 串宫十二神 (黄道黑道十二神)

青龙、明堂、天刑、朱雀、金匮、天德、白虎、玉堂、天牢、玄武、司命、勾陈

顺序口诀
> 青龙明堂与天刑，朱雀金匮天德神，
> 白虎玉堂天牢黑，玄武司命共勾陈。

黄黑道口诀 （有走之底的字为黄道，其它为黑道）
> 道远几时通达，路遥何日还乡。

方法:

```typescript
lunisolar().theGods.getBy12God(dh: 'day' | 'hour'): God
```

方法名 getBy12God，b指black黑道，y指yellow黄道，故取此方法名。

参数:
  
按《辨方书》黄道黑道十二神分到日神和时神中，故以参数指定是日还是时

```typescript
dh: 'day' | 'hour'
```

---

## 6 其它神煞（年神，月神，日神，时神）

按《辨方书·卷九》把各类神煞划分为[年神](../../reference/gods/godBuilder/yearGods.md)、[月神](../../reference/gods/godBuilder/monthGods.md)、[日神](../../reference/gods/godBuilder/dayGods.md)、[时神](../../reference/gods/godBuilder/hourGods.md)

### 6.1 getGods方法

取得指定年、月、日、时的神煞

```typescript
lunisolar().theGods.getGods(ymdh: 'Y' | 'M' | 'D' | 'H' | string): God[]
```

参数：

```typescript
ymdh?: 'Y' | 'M' | 'D' | 'H' | string
// 默认值为 "MD"
```

参数ymdh可以指定`'Y' | 'M' | 'D' | 'H'`其中一个，分别以取当时的年、月、日、时神。

此外可通过组合同时取得组合后的神煞, 例如:

```typescript
lunisolar().theGods.getGods('YMD') // 同时取得年、月、日神
lunisolar().theGods.getGods('MD') // 同时取得月、日神
```

---

### 6.2 getGoodGods方法

取得指定指定年、月、日、时的吉神

```typescript
lunisolar().theGods.getGoodGods(ymdh: 'Y' | 'M' | 'D' | 'H' | string): God[]
```

参数:

参数与`getGods`方法一致, 默认值为 "MD"

---

### 6.3 getBadGods方法

取得指定指定年、月、日、时的凶神

```typescript
lunisolar().theGods.getBadGods(ymdh: 'Y' | 'M' | 'D' | 'H' | string): God[]
```

参数:

参数与`getGods`方法一致, 默认值为 "MD"

---

## 7 宜忌

本库中的所有**宜忌词条**，除特别说明的外，皆出于《协纪纪辨方书 * 卷十一》。

按《协纪纪辨方书 * 卷十一》宜忌分为 通書六十事、御用六十七事、 民用三十七事。

### 7.1 getActs() 方法

```typescript
lunisolar().theGods.getActs(actType?: 0 | 1 | 2 | 3, returnKey?: boolean, replacer?: {}): {good: string[], bad: string[]}
```

参数说明:

```typescript
actType: 0 | 1 | 2 | 3
/**
 宜忌类型
 defalut: 0
 0：所有词条，不会按通书、御用、民事里的词条进行筛选
 1：按`通书六十事`的词条进行筛选，不在此60个词条内者，不会出现
 2：按`御用六十七事`的词条进行筛选
 3: 按`民用三十七事`的词条进行筛选
*/

returnKey：boolean
/**
 是否返回宜忌key
 defalut: false
 false: 词条将按国际化翻译后返回
 true: 返回宜忌key，（本库宜忌以繁体中文作为key）
*/

replacer?:  { [key: string]: string }
/**
 宜忌词条替换 
 default: undefined
 例如要把“剃頭”替換成"理髮" 可設定為 {剃頭: "理髮"}
*/
```

---

### 7.2 getGoodActs() 方法

取得本日所宜

```typescript
lunisolar().theGods.getGoodActs(actType?: 0 | 1 | 2 | 3, returnKey?: boolean, replacer?: {}): string[]

// 參數與getActs相同
// 此方法等同于:
lunisolar().theGods.getActs(actType, returnKey, replacer).good
```

---

### 7.3 getBadActs() 方法

取得本日所忌

```typescript
lunisolar().theGods.getBadActs(actType?: 0 | 1 | 2 | 3, returnKey?: boolean, replacer?: {}): string[]

// 參數與getActs相同
// 此方法等同于:
lunisolar().theGods.getActs(actType, returnKey, replacer).bad
```

---

## 8 时辰吉凶

### 8.1 getAllDayHourGods() 方法

取得整日各时辰的神煞

```typescript
lunisolar().theGods.getAllDayHourGods(): God[][]

// 返回结果为二维数组：
[
  [God, God, ...], // 子时
  [God, God, God, ...], // 丑时
  [God, God, God, ...], // 寅时
  [God, God, ...], // 卯时
  [God, ...], // 辰时
  [God, ...], // 巳时
  ...
  ...
  [God, ...], //亥时
]
```

---

### 8.2 getLuckHours() 方法

取得整日各时辰的吉凶

```typescript
lunisolar().theGods.getLuckHours(luckType: 0 | 1 = 1): number[]
// 返回数组表示各时辰，数组元素指示吉凶，大于0为吉，小于0为凶
[1, 1, -1, 1, -1, -1, -1, -1, 1, 1, -1, -1]
```

参数说明

```typescript
luckeType: 0 | 1
/**
选择吉凶取法
default: 0
0: 按黄黑道十二神（即青龙明堂等）决定吉凶
1：按黄黑道十二神（即青龙明堂等）决定吉凶
*/
```

---

## 9 吉神方

### 9.1 getAllLuckDirection() 方法

```typescript
// 示例：
const lsr = lunisolar('2022-11-25')
const allDirections = lsr.theGods.getAllLuckDirection()
for (let i = 0; i < allDirections.length; i++) {
  const [d24, god] = allDirections[i]
  console.log(d24.direction, god.name)
}
// 南 喜神
// 東南 福神
// 南 財神
// 東 陽貴
// 東南 陰貴
```

取得当日所有神煞吉方

将会返回元素为`[二十四山对象, 神煞对象]`元组的列表

二十四山对象说明参考[本连接](./%E4%BA%8C%E5%8D%81%E5%9B%9B%E5%B1%B1.md)

---

### 9.2 getLuckDirection(godKeyOrName) 方法

取得指定吉神所在方位

将会返回`[二十四山对象, 神煞对象]`元组

```typescript
// 示例：
const lsr = lunisolar('2022-11-25')
const [d24, god] = lsr.theGods.getLuckDirection('財神')
console.log(d24.direction) // 南
```

参数说明

```typescript
godKeyOrName:string
/**
吉方神煞名称，一般为 '喜神' | '福神' | '財神' | '陽貴' | '陰貴'
可以是国际化翻译后的名称
不在此范围内者，将返回null
*/
```

---

## 其它方法

### **query() 方法**

通过query方法，传入指定的字符串，可取得对应的神煞或宜忌

```typescript
lunisolar().theGods.query(queryString): God | God[] | string[] | null
```

参数说明

queryString 存入的字符串，对应返回的内容参见下表, 其中zh的中文字条取决于你是否使用zh语言名才能使用该字条。故建议使用key中的字条存入存数。

| key | zh | 说明 | 返回类型 |
|---| ---  | --- | ---- |
| year gods  | 年神 | 取得年神 | God[] |
| month gods  | 月神 | 取得月神 | God[] |
| day gods  | 日神 | 取得日神 | God[] |
| hour gods  | 時神 | 取得時神 | God[] |
| this day gods  | 本日神煞 | 取得本日神煞 | God[] |
| day of yellow-black god  | 本日黃黑十二神 | 取得本日的串宫十二神 | God[] |
| hour of yellow-black god  | 此時黃黑十二神 | 取得此时辰的串宫十二神 | God[] |
| duty god | 建除十二神 | 取得建除 | God |
| year of long-life god | 年長生十二神 | 取得年长生十二神 | God |
| month of long-life god | 月長生十二神 | 取得月长生十二神 | God |
| day of long-life god | 日長生十二神 | 取得日长生十二神 | God |
| hour of long-life god | 時長生十二神 | 取得时辰长生十二神 | God |
| good act | 宜 | 取得本日所宜 | string[] |
| good act 1 | 宜1 | 取得本日通书所宜 | string[] |
| good act 2 | 宜2 | 取得本日御用所宜 | string[] |
| good act 3 | 宜3 | 取得本日民用所宜 | string[] |
| bad act | 忌 | 取得本日所忌 | string[] |
| bad act 1 | 忌1 | 取得本日通书所忌  | string[] |
| bad act 2 | 忌2 | 取得本日御用所忌 | string[] |
| bad act 3 | 忌3 | 取得本日民用所忌 | string[] |

---

## 对象API

* [**God**](../../api/god.md)
* [**Direction24**](../../api/direction24.md)
