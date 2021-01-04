console.log(1)

//サーバーからデータをとってくる
const jsonstring = '{"name":"kamata", "tweet":500, "follows":100, "follower":50}'

let userdata
try {
    userdata = JSON.parse(jsonstring)
    console.log("こんにちは、" + userdata.tweet + "!")
} catch (error) {
    console.log(error)
    console.log("異常なJSONです")
}
