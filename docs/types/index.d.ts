/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/* tslint:disable:max-line-length */
/* tslint:disable:max-file-line-count */

import assert = require( '@stdlib/math-base-assert' );
import ops = require( '@stdlib/math-base-ops' );
import special = require( '@stdlib/math-base-special' );
import tools = require( '@stdlib/math-base-tools' );
import utils = require( '@stdlib/math-base-utils' );

/**
* Interface describing the `base` namespace.
*/
interface Namespace {
	/**
	* Base mathematical assertion utilities.
	*/
	assert: typeof assert;

	/**
	* Base (i.e., lower-level) math operators.
	*/
	ops: typeof ops;

	/**
	* Base (i.e., lower-level) special math functions.
	*/
	special: typeof special;

	/**
	* Base math tools.
	*/
	tools: typeof tools;

	/**
	* Base math utilities.
	*/
	utils: typeof utils;
}

/**
* Base (i.e., lower-level) math functions.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
