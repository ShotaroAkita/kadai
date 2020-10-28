// 生まれた日を入力
const day = parseInt(process.argv[2])

if (day % 3 === 0) {
    if ( day % 7 === 0) {
        console.log ('あなたは100000人目のユーザーです！')
    }
    console.log('あなたは明るいな性格です')
} else if (day % 3 === 1) {
    console.log('あなたは暗い性格です')
} else {
    console.log('あなたはきまぐれな性格です')
}