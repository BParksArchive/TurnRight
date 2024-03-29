/*
 * Game Develop JS Platform
 * Copyright 2013 Florian Rival (Florian.Rival@gmail.com). All rights reserved.
 * This project is released under the GNU Lesser General Public License.
 */

/**
 * @namespace gdjs.evtTools
 * @class common
 * @static
 * @private
 */
gdjs.evtTools.common = gdjs.evtTools.common || {eventsObjectsMap: new Hashtable()};

/**
 * Clear the map containing objects lists.
 * Should be used by events generated code only.
 */
gdjs.evtTools.common.clearEventsObjectsMap = function() {
    gdjs.evtTools.common.eventsObjectsMap.clear();

    return gdjs.evtTools.common;
};

/**
 * Add an objects list to the objects lists map.
 * Should be used by events generated code only.
 */
gdjs.evtTools.common.addObjectsToEventsMap = function(name, objectList) {
    gdjs.evtTools.common.eventsObjectsMap.put(name, objectList);
    return gdjs.evtTools.common;
};

/**
 * Return the objects lists map.
 * Should be used by events generated code only.
 */
gdjs.evtTools.common.getEventsObjectsMap = function() {
    return gdjs.evtTools.common.eventsObjectsMap.clone();
};

/**
 * Convert a string to a float.
 * @method toNumber
 * @private
 * @static
 */
gdjs.evtTools.common.toNumber = function(str) {
    return parseFloat(str);
};

/**
 * Convert a number to a string.
 * @method toString
 * @private
 * @static
 */
gdjs.evtTools.common.toString = function(num) {
    return num.toString();
};

/**
 * Always return false.
 * @method returnFalse
 * @private
 * @static
 */
gdjs.evtTools.common.returnFalse = function() {
    return false;
};

gdjs.evtTools.common.acosh = function(arg) {
	// http://kevin.vanzonneveld.net
	// +   original by: Onno Marsman
	return Math.log(arg + Math.sqrt(arg * arg - 1));
};

gdjs.evtTools.common.asinh = function(arg) {
	// http://kevin.vanzonneveld.net
	// +   original by: Onno Marsman
	return Math.log(arg + Math.sqrt(arg * arg + 1));
};

gdjs.evtTools.common.atanh = function(arg) {
	// http://kevin.vanzonneveld.net
	// +   original by: Onno Marsman
	return 0.5 * Math.log((1 + arg) / (1 - arg));
};

gdjs.evtTools.common.cosh = function(arg) {
	return (Math.exp(arg) + Math.exp(-arg)) / 2;
};

gdjs.evtTools.common.sinh = function(arg) {
	return (Math.exp(arg) - Math.exp(-arg)) / 2;
};

gdjs.evtTools.common.tanh = function(arg) {
	return (Math.exp(arg) - Math.exp(-arg)) / (Math.exp(arg) + Math.exp(-arg));
};

gdjs.evtTools.common.cot = function(arg) {
	return 1/Math.tan(arg);
};

gdjs.evtTools.common.csc = function(arg) {
	return 1/Math.sin(arg);
};

gdjs.evtTools.common.sec = function(arg) {
	return 1/Math.cos(arg);
};

gdjs.evtTools.common.log10 = function(arg) {
	return Math.log(arg) / Math.LN10;
};

gdjs.evtTools.common.log2 = function(arg) {
	return Math.log(arg) / Math.LN2;
};

gdjs.evtTools.common.sign = function(arg) {
    if ( arg === 0 ) return 0;

    return (arg > 0 ? +1 : -1);
};

gdjs.evtTools.common.cbrt = function(x) {
    return Math.pow(x, 1/3);
};

gdjs.evtTools.common.nthroot = function(x, n) {
    return Math.pow(x, 1/n);
};

gdjs.evtTools.common.mod = function(x, y) {
    return x - y * Math.floor(x / y);
};

gdjs.evtTools.common.angleDifference = function(angle1, angle2) {
    return gdjs.evtTools.common.mod(gdjs.evtTools.common.mod(angle1 - angle2, 360.0) + 180.0, 360.0) - 180.0;
};

gdjs.evtTools.common.trunc = function(x) {
    return x|0;
};