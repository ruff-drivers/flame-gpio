[![Build Status](https://travis-ci.org/ruff-drivers/flame-gpio.svg)](https://travis-ci.org/ruff-drivers/flame-gpio)

# Flame Sensor Driver for Ruff

Flame Sensor driver with GPIO interface.

## Supported Engines

* Ruff: >=1.2.0 <2.0.0

## Supported Models

- [flame-gpio](https://rap.ruff.io/devices/flame-gpio)

## Installing

Execute following command and enter a **supported model** to install.

```sh
# Please replace `<device-id>` with a proper ID.
# And this will be what you are going to query while `$('#<device-id>')`.
rap device add <device-id>

# Then enter a supported model, for example:
# ? model: flame-gpio
```

## Usage

Here is the basic usage of this driver.

```js
$('#<device-id>').on('fire', function() {
    console.log('fire detected');
});
```

## API References

### Methods

#### `isBurning(callback)`

Check whether there is any fire around the ambient.

- `callback:` The callback that takes the first argument as the possible error and the second argument as the state of fire. The state can be `ture` or `false`.

### Events

#### `fire`

Emitted when flame is detected.

## Contributing

Contributions to this project are warmly welcome. But before you open a pull request, please make sure your changes are passing code linting and tests.

You will need the latest [Ruff SDK](https://ruff.io/) to install rap dependencies and then to run tests.

### Installing Dependencies

```sh
npm install
rap install
```

### Running Tests

```sh
npm test
```

## License

The MIT License (MIT)

Copyright (c) 2016 Nanchao Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
