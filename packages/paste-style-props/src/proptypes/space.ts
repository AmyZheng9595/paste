import {DefaultTheme} from '@twilio-paste/theme';
import {propValidator} from './utils/propValidator';

// Tokens
const SpaceOptions = Object.keys(DefaultTheme.space);

export const isSpaceTokenProp = propValidator(SpaceOptions);
