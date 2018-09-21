'use strict';

import {isServerSide} from 'metal';
import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './Icons.soy.js';

class Icons extends Component {
	attached() {
		if (isServerSide()) {
			return;
		}
	}
};

Soy.register(Icons, templates);

export default Icons;
