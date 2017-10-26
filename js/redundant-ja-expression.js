var redundantExpressions =
  new Array('すること', 'ことも', '可能で', '可能と', 'ことにします',
  'ことにして', '言えます', 'しかしながら' , '一面においては', 'その結果として', 'このような', 'そのような', '意味において', 'まず初', 'まず最初',
  '完全に','となって','そういった','を行う','をおこなう','するもの','したもの', '特に', '万一','かどうか', 'させること','行なった' , 'ことは');

function validateSentence(sentence) {
  for (var i = 0; i < redundantExpressions.length; i++) {
    if (sentence.content.indexOf(redundantExpressions[i]) != -1) {
	addError('冗長な表現 "' + redundantExpressions[i] + '" を利用しています。', sentence);
    }
  }
}
