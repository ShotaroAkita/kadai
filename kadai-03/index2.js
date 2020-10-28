const max = parseInt(process.argv[2])


//3の倍数のとき、特別なメッセージ
for (let n = 1; n <= max; n++) {
    if (n % 3 === 0) {
        console.log("アホになれ！")
    } else {
        console.log(n)
    }
    
}