import {Dimensions, Platform} from 'react-native';

export const LEFTPADDING = 25;
export const RIGHTPADDING = 25;
export const LEFT_HEADER_PADDING = 15;
export const RIGHT_HEADER_PADDING = 15;
export const HEADER_HEIGHT = 50;
export const FOOTER_HEIGHT = Platform.OS === 'ios' ? 70 : 60;
export const NOTE_PREVIEW_WIDTH = Dimensions.get('window').width - 30;
export const NOTE_PREVIEW_MAX_HEIGHT = 600;

export const LIGHT_BG_COLOR = '#FFFFFF';
