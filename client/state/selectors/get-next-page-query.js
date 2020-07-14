/**
 * Internal dependencies
 */
import getMediaQueryManager from 'state/selectors/get-media-query-manager';
import getNextPageHandle from 'state/selectors/get-next-page-handle';

const DEFAULT_QUERY = Object.freeze( { number: 20 } );

/**
 * Returns a new query object to use to fetch the next page of media for a site
 *
 * @param {object} state The state object
 * @param {number} siteId The site ID
 */
export default function getNextPageQuery( state, siteId ) {
	const queryManager = getMediaQueryManager( state, siteId );
	if ( ! queryManager ) {
		return DEFAULT_QUERY;
	}

	const currentQuery = queryManager.options.query;

	return {
		...currentQuery,
		page_handle: getNextPageHandle( state, siteId ),
	};
}
