# Dynamic Form Builder

Веб-приложение, позволяющее динамически создавать формы прямо в браузере: добавлять поля (текст, число, выбор из списка и т.п.), перемещать, менять подписи и тут же видеть, как форма работает.

## Технологии

- **Фреймворк:** Vue 3, Vue Router, Pinia
- **Стили:** PostCSS (с nested rules и mixins)
- **Сборка:** Vite
- **Типизация:** TypeScript, vue-tsc
- **Качество кода:** ESLint, Prettier, Husky, lint-staged
- **UI и тестирование компонентов:** Storybook
- **Утилиты:** nanoid
- **Методология:** Feature Sliced Design

## Запуск проекта

### 1. Клонируйте репозиторий

```
git clone git@github.com:promter11/form-builder.git
cd form-builder
```

### 2. Установите зависимости

```
yarn install
```

### 3. Запустите dev-сервер
```
yarn dev
```

Откройте браузер по адресу http://localhost:5173, чтобы увидеть приложение.
