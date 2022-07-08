import lib from './lib.js'

export default {
    /**
     * @param {string} url
     * @param {Request} data
     * */
    processData(url, data) {
        if (!data.request || !data.request.queryString) {
            return
        }
        let queryString = data.request.queryString
        let objQueries = queryString.reduce((obj, item) => Object.assign(obj, { [item.name]: item.value }), {})
        if (!objQueries.method) {
            return
        }
        let method = objQueries.method
        switch (method) {
            case 'flickr.people.getPhotos':
                console.log("flickr.people.getPhotos", data)
                break
            default:
                break
        }
    }
}