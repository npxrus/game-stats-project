# Game Stats Project

Микросервисная система для игровой статистики: API на Go + CLI на TypeScript.

## Стек
- Go 1.22+
- TypeScript + Node.js
- Vitest, testing.go
- GitHub Actions

## Структура
- `cmd/api` - точка входа API.
- `cmd/cli` - точка входа CLI.
- `internal/api` - логика API.
- `internal/stats` - бизнес-логика статистики.

## Установка и запуск
1. Установить Go и Node.js.
2. `make run-api` - запустить API локально.
3. `make run-cli` - запустить CLI.

## Лицензия
MIT