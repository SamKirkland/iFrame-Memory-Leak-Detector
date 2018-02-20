window.searchForCrossFrameReferences = function(windowToSearch) {
    Object.keys(windowToSearch).forEach(function (key) {
        try {
            var val = windowToSearch[key];
            if (typeof val !== 'string' &&
                typeof val !== 'number' &&
                typeof val !== 'boolean' &&
                typeof val !== 'undefined' &&
                ["parent", "top", "frameElement"].indexOf(key) === -1 &&
                val !== null &&
                !(val instanceof windowToSearch.Object) // value was not created from the current window
            ) {
                console.log(key, val);
            }
        }
        catch (e) {
            console.log("Exception : ", e);
        }
    });
}