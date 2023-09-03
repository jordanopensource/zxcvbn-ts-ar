# @josango/zxcvbn-ts-language-ar

The Arabic dictionary and language package for [**zxcvbn-ts**](https://github.com/zxcvbn-ts/zxcvbn)

## Installation

### npm

```sh
# install zxcvbn core and common packages
npm i @zxcvbn-ts/core @zxcvbn-ts/language-common

# install the Arabic package
npm i @josango/zxcvbn-ts-language-ar --save

```

### yarn

```sh
# install zxcvbn core and common packages
yarn add @zxcvbn-ts/core @zxcvbn-ts/language-common

# install the Arabic package
yarn add @josango/zxcvbn-ts-language-ar
```

## Setup

```js
import { zxcvbn, zxcvbnOptions } from '@zxcvbn-ts/core'
import * as zxcvbnCommonPackage from '@zxcvbn-ts/language-common'
import * as zxcvbnArPackage from '@josango/zxcvbn-ts-language-ar'

const password = 'somePassword'
const options = {
  translations: zxcvbnArPackage.translations,
  graphs: zxcvbnCommonPackage.adjacencyGraphs,
  dictionary: {
    ...zxcvbnCommonPackage.dictionary,
    ...zxcvbnArPackage.dictionary,
  },
}
zxcvbnOptions.setOptions(options)

zxcvbn(password)
```
