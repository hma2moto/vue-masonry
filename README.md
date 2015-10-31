# vue-masonry

> Masonry plugin for Vue.js

This is simply a directive wrapper for [Masonry](http://masonry.desandro.com/).

## Usage

``` js
var vueMasonry = require('vue-masonry')
Vue.use(vueMasonry)
```

``` html
<div class="grid" v-masonry="{ columnWidth: 200 }">
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  ...
</div>
```

## License

MIT
