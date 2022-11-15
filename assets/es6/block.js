import {registerBlockType} from '@wordpress/blocks';
import {SelectControl} from '@wordpress/components';
import {__} from '@wordpress/i18n';

registerBlockType('bannerbear/image', {
	title: __( 'Bannerbear Image', 'bannerbear' ),
	description: __( 'Displays a dynamic image', 'bannerbear' ),
	category: 'widgets',
	attributes: {
		id: {
			type: 'int',
			default: bannerbear.default,
		}
	},
	icon: <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="774.000000pt" height="774.000000pt" viewBox="0 0 774.000000 774.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,774.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M3735 7729 c-756 -109 -1495 -1045 -2059 -2607 -266 -737 -451 -1544 -497 -2167 -68 -923 306 -1790 1016 -2358 637 -511 1448 -703 2256 -536 567 117 1125 451 1501 899 348 414 552 878 630 1430 19 142 17 578 -5 760 -116 957 -449 2054 -893 2942 -403 806 -871 1344 -1347 1550 -193 84 -409 115 -602 87z m340 -419 c418 -132 841 -616 1235 -1415 432 -877 785 -2060 861 -2888 16 -179 6 -530 -19 -667 -45 -240 -102 -412 -207 -627 -346 -706 -1012 -1181 -1795 -1279 -135 -17 -381 -18 -518 -3 -775 84 -1456 557 -1811 1258 -157 311 -234 612 -248 966 -28 755 357 2193 862 3220 417 848 869 1352 1300 1451 86 20 251 12 340 -16z"/><path d="M3690 5489 c-162 -9 -354 -42 -505 -85 -337 -97 -558 -256 -627 -452 -60 -168 43 -443 257 -687 236 -269 508 -447 793 -516 l92 -22 0 -407 c0 -453 -1 -463 -66 -539 -114 -133 -316 -140 -435 -14 -52 54 -79 113 -86 188 -11 121 -71 185 -173 185 -101 0 -161 -59 -168 -166 -6 -93 13 -175 65 -284 179 -373 659 -475 980 -209 l63 51 49 -44 c65 -59 172 -114 267 -138 387 -99 781 202 788 600 1 61 -3 81 -21 110 -66 106 -232 106 -292 0 -12 -21 -25 -70 -30 -108 -21 -167 -137 -274 -298 -274 -112 1 -219 69 -267 172 -20 43 -21 62 -24 460 l-3 415 106 27 c249 64 477 199 685 408 261 260 404 547 368 739 -30 165 -160 302 -389 410 -227 107 -462 161 -783 181 -165 10 -166 10 -346 -1z"/><path d="M1137 6896 c-102 -28 -184 -121 -207 -233 -57 -274 279 -466 488 -278 71 64 96 120 96 220 1 91 -18 145 -73 208 -67 75 -201 112 -304 83z"/><path d="M6467 6900 c-141 -36 -227 -144 -227 -286 0 -127 47 -212 151 -269 48 -27 63 -30 139 -30 97 0 152 21 214 81 64 62 81 106 81 209 0 78 -4 97 -27 140 -33 63 -80 108 -139 134 -55 24 -140 34 -192 21z"/></g></svg>,
	supports: {
		html: false
	},

	edit: function (props) {

		return (
			<div style={{ backgroundColor: '#f8f9f9', padding: '14px' }}>
				<SelectControl
					label={__( 'Select Signed URL', 'bannerbear' )}
					value={props.attributes.id}
					options={bannerbear.urls}
					onChange={value => {
						props.setAttributes({ id: value })
					}}
				/>
			</div>
		)
	},

	// Return shortcode
	save: function (props) {
		return '[bannerbear id="' + props.attributes.id + '"]';
	}
})
