# An Implementation of Soft Deletion - Database and API

<!--
```yaml
metadata: true
date: 2018-07-18T13:22:55+0800
titles:
    - An Implementation of Soft Deletion - Database and API
    - An Implementation of Soft Deletions - Database and API
    - Implementation of Soft Deletions - Database and API
key: An-Implementation-of-Soft-Deletion.md
tags: database-design, soft-deletion
```
-->

Soft deletions can be used as a trash bin for records.

## Design of Table Structure

```go
type TypeDeletedTime struct {
	// Whether a resource is deleted, which can be reverted in the trash bin.
	Deleted bool `json:"deleted"`
	// 0 or when the item was deleted.
	DeletedTime int64 `json:"deletedTime"`
}
```

## Design of RESTFul API

- First call of `HTTP DELETE` will delete it temporarily;
	- Set `Deleted` to `true`.
	- Set `DeletedTime` to current time.
- Second call of `HTTP DELETE` will remove it permanently;
	- Remove the item.
- First call with `HTTP DELETE ?remove=true` to remove it permanently;
	- Remove the item.

## References

- https://stackoverflow.com/questions/2549839/are-soft-deletes-a-good-idea
- https://stackoverflow.com/questions/378331/physical-vs-logical-soft-delete-of-database-record
