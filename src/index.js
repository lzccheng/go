function queryName (name) {
    var search = location.search.slice(1)
    var obj = {}
    search.split('&').forEach(function (i) {
        var arr = i.split('=')
        obj[arr[0]] = arr[1]
    })
    return obj[name]
}
var url = queryName('url')
location.href = url || `https://url.cn/5UzB4Tz`
