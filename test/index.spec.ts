import unicode from '@/index';

describe('unicode', () => {
  it('de should be done', () => {
    expect(unicode.de('\ud83d\udc4d')).toEqual('👍');
    expect(unicode.de('\ud83e\uddd0')).toEqual('🧐');
    expect(unicode.de('\ud83d\udca5')).toEqual('💥');
    expect(unicode.de('\ud83d\udce6')).toEqual('📦');
    expect(unicode.de('\ud83d\udca9')).toEqual('💩');
    expect(unicode.de('\ud83d\udd28')).toEqual('🔨');
    expect(unicode.de('\ud83d\udccc')).toEqual('📌');
    expect(unicode.de('\ud83d\udea8')).toEqual('🚨');
    expect(unicode.de('\u2705')).toEqual('✅');
    expect(unicode.de('\ud83d\udc84')).toEqual('💄');
    expect(unicode.de('\ud83d\ude80')).toEqual('🚀');
    expect(unicode.de('\ud83d\udc1b')).toEqual('🐛');
    expect(unicode.de('\ud83d\udd25')).toEqual('🔥');
    expect(unicode.de('\u26a1\ufe0f')).toEqual('⚡️');
    expect(unicode.de('\ud83c\udfa8')).toEqual('🎨');
    expect(unicode.de('\u597d')).toEqual('好');
  });

  it('en should be done', () => {
    expect(unicode.en('👍')).toEqual('\\ud83d\\udc4d');
    expect(unicode.en('🧐')).toEqual('\\ud83e\\uddd0');
    expect(unicode.en('💥')).toEqual('\\ud83d\\udca5');
    expect(unicode.en('📦')).toEqual('\\ud83d\\udce6');
    expect(unicode.en('💩')).toEqual('\\ud83d\\udca9');
    expect(unicode.en('🔨')).toEqual('\\ud83d\\udd28');
    expect(unicode.en('📌')).toEqual('\\ud83d\\udccc');
    expect(unicode.en('🚨')).toEqual('\\ud83d\\udea8');
    expect(unicode.en('✅')).toEqual('\\u2705');
    expect(unicode.en('💄')).toEqual('\\ud83d\\udc84');
    expect(unicode.en('🚀')).toEqual('\\ud83d\\ude80');
    expect(unicode.en('🐛')).toEqual('\\ud83d\\udc1b');
    expect(unicode.en('🔥')).toEqual('\\ud83d\\udd25');
    expect(unicode.en('⚡️')).toEqual('\\u26a1\\ufe0f');
    expect(unicode.en('🎨')).toEqual('\\ud83c\\udfa8');
    expect(unicode.en('好')).toEqual('\\u597d');
  });
});
