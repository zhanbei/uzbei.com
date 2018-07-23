# An Implementation of Expiration - Database and API

<!--
```yaml
metadata: true
titles:
    - An Implementation of Expiration - Database and API
date: 2018-07-18T13:04:46+0800
keys:
    - An-Implementation-of-Expiration.md
tags: database-design, expiration
```
-->

Some contents can be expired over time, this post shows an implementation of expiration in database.

## Design of Table Structure



```go
type TypeExpiredTime struct {
	// The item is expired if the value is true, or expired time > current time.
	Expired bool `json:"expired"`
	// When the item will be expired, or when the item was expired, if the value is not 0.
	// 0 stands for the item will not be expired automatically.
	ExpiredTime int64 `json:"expiredTime"`
}
```

## Design of RESTFul API

An int64 `expiration` may be used to manipulate the expiration of an item.

- [`PATCH ?Expiration = 0`] to expire an item;
	- Set `Expired` to `true`.
	- Set `ExpiredTime` to current time.
- [`PATCH ?Expiration < 0`] to reset expiration of an item;
	- Set `Expired` to `false`.
	- Set `ExpiredTime` to 0.
- [`PATCH ?Expiration > 0`] to reset expiration of an item;
	- Set `Expired` to `false`.
	- Set `ExpiredTime` to current time plus the expiration.
