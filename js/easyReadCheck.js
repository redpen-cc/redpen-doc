function validateSentence(sentence) {

    var checkKeywordObj = {
	'更に' : 'さらに',
	'殆ど' : 'ほとんど',
	'下さい' : 'ください',
	'何時か' : 'いつか',
	'事' : 'こと',
	'何時か' : 'いつか',
	'何処か' : 'どこか',
	'何故か' : 'なぜか',
	'後で' : 'あとで',
	'出来るだけ' : 'できるだけ',
	'ひと通り' : 'ひととおり',
	'丁度' : 'ちょうど',
	'時間が経つ' : '時間がたつ',
	'何でも' : 'なんでも',
	'良く' : 'よく',
    }

    // 各センテンスに対して、checkKeywordObj分処理を実施
    for (var i = 0; i < Object.keys(checkKeywordObj).length; i++) {
	// キーワードを正規表現にセット
	var regex = new RegExp(Object.keys(checkKeywordObj)[i])
	// もしセンテンスの文章がcheckKeywordObjにマッチしたら
	if ( sentence.content.match(regex) ){
	    // そのセンテンスが自然言語処理された結果を総当たり
	    for (var j = 0; j < sentence.tokens.length; j++) {
		// 自然言語解析の結果とキーワードが一致したらエラーメッセージを出力
		if ( sentence.tokens[j].surface == Object.keys(checkKeywordObj)[i] ){
		    addError('「' + sentence.tokens[j].surface + '」を「' + checkKeywordObj[Object.keys(checkKeywordObj)[i]] + '」に修正してください', sentence);
		}
	    }
	}
    }
}
