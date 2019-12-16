const queryName = name => {
    const search = location.search.slice(1)
    const obj = {}
    search.split('&').forEach(function (i) {
        var arr = i.split('=')
        obj[arr[0]] = arr[1]
    })
    return obj[name]
}
const url = queryName('url')
location.href = url || `https://url.cn/5UzB4Tz`
