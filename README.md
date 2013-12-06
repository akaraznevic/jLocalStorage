# jLocalStorage

** jLocalStorage** is a key-value store database to store data locally in the browser - jLocalStorage supports all major browsers: IE8+, Firefox3.5+, Safari4+, Chrome4+, Opera 10.5+, Iphone 2+, Android 2+

## Function reference

### set(key, value)

```javascript
jLocalStorage.set(key, value)
```

Saves a value to local storage. Key needs to be string otherwise an exception is thrown.

### get(key)

```javascript
value = jLocalStorage.get(key)
```

Get retrieves the value by key. Key needs to be string otherwise an exception is thrown.

### unset(key)

```javascript
jLocalStorage.unset(key)
```

Removes a key from the storage. Key needs to be string otherwise an exception is thrown. 

### usedSize()

```javascript
jLocalStorage.usedSize()
```

Returns the size of the stored data.

### isSupport()

```javascript
jLocalStorage.isSupport()
```

Returns true if storage is supported by browser.

## Browser support

Current availability: Internet Explorer 8+, Firefox 3.5+, Safari 4+, Chrome 4+, Opera 10.50+, Iphone 2+, Android 2+

## License

[Unlicense](http://unlicense.org/)
