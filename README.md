# Clockwise Matrix Serializer

## Demo

Open `index.html` in a web browser.

## API

### clockwiseMatrix(matrix, out)

Returns an array of values ordered by a clockwise spiral starting from the top right.

#### Params

- **matrix** `Array` the matrix.
- **out** `Array` the output array (optional).

#### Returns

`Array` or ordered values

#### Example

```js
clockwiseMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
> [1, 2, 3, 6, 9, 8, 7, 4, 5]
```

### parseMatrix(matrixString)

Transforms a string representation of the matrix to an array.

#### Params

- **matrixString** `String` the matrix represented as a string.

#### Returns

`Array` the matrix

#### Example

```js
parseMatrix('[1, 2, 3]\n[4, 5, 6]\n[7, 8, 9]');
> [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]]
```

## Building

```bash
npm install
gulp
```

Code coverage reports are found in the `coverage` directory.
