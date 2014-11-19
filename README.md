# Integer to String Convertor

## Demo

Open `index.html` in a web browser.

## API

### integerToString(value, numberBase)

Convert a number to a given base.

#### Params

- **value** `Number` positive integer to convert.
- **numberBase** `Number` positive integer of the base (values 2 to 36 are valid).

#### Returns

`String` representation of number in the given base.

#### Throws

`Error` if inputs are invalid.

## Building

```bash
npm install
gulp
```

Code coverage reports are found in the `coverage` directory.
