/*!
 * Copyright (c) 2016 Nanchao Inc.
 * All rights reserved.
 */

'use strict';

var mock = require('ruff-mock');
var assert = require('assert');
var when = mock.when;
var EventEmitter = require('events');

var Device = require('../');

require('t');

describe('Driver for vibrating sensor', function () {
    var sensor;
    var gpio;

    before(function () {
        gpio = mock(new EventEmitter(), true);
        sensor = new Device({
            gpio: gpio
        });
    });

    it('should emit `fire` event', function (done) {
        sensor.on('fire', function () {
            done();
        });

        gpio.emit('interrupt');
    });

    it('should get `true` when burning', function (done) {
        when(gpio).read(Function).then(function (callback) {
            callback(undefined, 0);
        });

        sensor.isBurning(function (error, state) {
            if (error) {
                throw error;
            }
            assert(state === true);
            done();
        });
    });

    it('should get `false` when not burning', function (done) {
        when(gpio).read(Function).then(function (callback) {
            callback(undefined, 1);
        });

        sensor.isBurning(function (error, state) {
            if (error) {
                throw error;
            }
            assert(state === false);
            done();
        });
    });
});
