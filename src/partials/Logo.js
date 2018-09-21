'use strict';

import {isServerSide} from 'metal';
import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './Logo.soy.js';

class Logo extends Component {
	attached() {
		if (isServerSide()) {
			return;
		}
	}
};

Soy.register(Logo, templates);

export default Logo;
