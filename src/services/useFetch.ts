import createFetch from 'react-redux-fetch-by-actions'
import { promiseListener } from 'store'

const { useFetch } = createFetch(promiseListener);

export { useFetch }