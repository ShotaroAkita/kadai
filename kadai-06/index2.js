try{
    const str1 = "abc"
    JSON.parse(str1)
}catch (error){
    //正しいJSONではないのでパースできない
    //文字列だけのJSONは、ダブルクオーテーションで囲む必要がある。
    //ただしくはconst str1 = '"abc"'のようなJSON文字列となる
}

try {
    const str2 ="'abc'"
    JSON.parse(str2)
} catch (error) {
    
}
    
const str3 ='"abc"'  //OK
JSON.parse(str3)

try {
    const str4 ='{"a":undefinded}'
    JSON.parse(str4)
} catch (error) {
    //undefinedは値として使えない
}

const str5 ='{"a":123}'  //OK
JSON.parse(str5)

try {
    const str6 ='{a:123}'
    JSON.parse(str6)
} catch (error) {
    //aをダブルクオーテーションで囲む必要があるため
}

try {
    const str7 ='{"func":() => console.log("Hi!")}' //()が悪い？
    JSON.parse(str7)
} catch (error) {
    //関数は取り出せない   
}

