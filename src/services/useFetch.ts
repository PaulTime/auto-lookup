import createFetch from 'react-redux-fetch-by-actions'
import { promiseListener } from 'store'

const { fetchDecorator, useFetch } = createFetch(promiseListener);

export { fetchDecorator, useFetch }