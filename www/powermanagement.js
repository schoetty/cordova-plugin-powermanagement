/*
 * Copyright 2013 Wolfgang Koller
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PowerManagement = function() {};

/**
 * Acquire a new wake-lock (keep device awake)
 *
 * @param successCallback function to be called when the wake-lock was acquired successfully
 * @param errorCallback function to be called when there was a problem with acquiring the wake-lock
 */
PowerManagement.prototype.acquire = function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'PowerManagement', 'acquire', []);
};

/**
 * Release the wake-lock
 *
 * @param successCallback function to be called when the wake-lock was released successfully
 * @param errorCallback function to be called when there was a problem while releasing the wake-lock
 * @param lock String type of lock to release. e.g. 'wifi'
 */
PowerManagement.prototype.release = function(successCallback, errorCallback, lock) {
    cordova.exec(successCallback, errorCallback, 'PowerManagement', 'release', [lock]);
};

/**
 * Enable or disable releasing of the wakelock on pause
 *
 * @param enabled boolean - true to enable releasing of wakelock on pause, or false to disable
 * @param successCallback
 * @param errorCallback
 */
PowerManagement.prototype.setReleaseOnPause = function(enabled, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'PowerManagement', 'setReleaseOnPause', [enabled]);
};

/**
 * Acquire a partial wake-lock. Ensures that the CPU is running;
 * the screen and keyboard backlight will be allowed to go off
 *
 * @param successCallback function to be called when the wake-lock was acquired successfully
 * @param errorCallback function to be called when there was a problem with acquiring the wake-lock
 */
PowerManagement.prototype.partial = function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'PowerManagement', 'acquire', ['partial']);
};

/**
 * Acquire a wifi-lock. Allows an application to keep the Wi-Fi radio awake
 *
 * @param successCallback function to be called when the wake-lock was acquired successfully
 * @param errorCallback function to be called when there was a problem with acquiring the wake-lock
 */
PowerManagement.prototype.wifi = function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'PowerManagement', 'acquire', ['wifi']);
};

module.exports = new PowerManagement();
