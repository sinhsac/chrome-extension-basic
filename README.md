## Basic chrome extension
This is basic chrome extension using manifest v3 for configuration, you can embedded multiple js, or css file into the a website.
You also can using background worker for process the js in the website. 

## Usage
* create new js file in src folder, and add to the function XXM.loadMore
It look like
```javascript
XXM.loadMore = function () {
    console.log("load more js")
    XXM.loadJS("src/your-code.js", () => console.log("done"), document.body)
}
```
