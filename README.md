# Vite Library mode - tree-shaking build
- vue3
- ts
- css/scss
- tree-shaking
- css inject in js or css-modules
- npm i ../ds --install-links (для установки пакета в необходимый проект) см после package.json

Папка dist специально включена для того, чтобы увидеть билд. Каждый файл компонента содержит свои стили. У всех компонентов есть свои d.ts файлы. Все пропсы, включая те, которые используют интерфейсы из внешнего файла, корректно отображаются в конечном приложении.

Также для примера используются дополнительные общие стили, которые не связаны с компонентами. Их можно отдельно импортировать.

Пример импорта в конечном Vue приложении:

```
<script setup lang="ts">
  import { UiButton, UiInput } from "tree-shaking-vue-lib";
</script>

<style>
  @import "tree-shaking-vue-lib";
</style>
```

or
```
//main.ts

//global css
import "tree-shaking-vue-lib/dist/style.css";
```
