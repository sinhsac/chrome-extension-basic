export default {
    TD: {},
    getAttrFromObj (obj, attr, defaultVal = null) {
        if (obj == undefined || obj == null || attr == undefined || attr == "") {
            return defaultVal;
        }
        const keys = attr.split(".");

        if (attr.length == 0) {
            return defaultVal;
        }

        let tempData = obj;
        for (let i=0; i<keys.length; i++) {
            if (tempData[keys[i]] == undefined) {
                return defaultVal;
            }
            tempData = tempData[keys[i]];
        }
        return tempData;
    },
    sendToInstagramServer(url, data, callback = null) {
        $.ajax({
            url: url,
            type: "post",
            data: data
            , success: function (res) {
                if (callback != null) {
                    callback(res);
                }
            }
        })
    },
    getVideoDimensionsOf(url){
        return new Promise(resolve => {
            // create the video element
            const video = document.createElement('video');
            // place a listener on it
            video.addEventListener( "loadedmetadata", function () {
                // retrieve dimensions
                const height = this.videoHeight;
                const width = this.videoWidth;
                // send back result
                resolve({height, width});
            }, false );
            // start download meta-datas
            video.src = url;
        });
    },
    sortA2Z(a, b) {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    },
    json2obj(content) {
        try {
            return JSON.parse(content);
        } catch (e) {
            return null;
        }
    }
}