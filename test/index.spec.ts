import unicd from '@/index';

describe('unicd', () => {
  it('de should be done', () => {
    expect(unicd.de('\ud83d\udc4d')).toEqual('👍');
    expect(unicd.de('\ud83e\uddd0')).toEqual('🧐');
    expect(unicd.de('\ud83d\udca5')).toEqual('💥');
    expect(unicd.de('\ud83d\udce6')).toEqual('📦');
    expect(unicd.de('\ud83d\udca9')).toEqual('💩');
    expect(unicd.de('\ud83d\udd28')).toEqual('🔨');
    expect(unicd.de('\ud83d\udccc')).toEqual('📌');
    expect(unicd.de('\ud83d\udea8')).toEqual('🚨');
    expect(unicd.de('\u2705')).toEqual('✅');
    expect(unicd.de('\ud83d\udc84')).toEqual('💄');
    expect(unicd.de('\ud83d\ude80')).toEqual('🚀');
    expect(unicd.de('\ud83d\udc1b')).toEqual('🐛');
    expect(unicd.de('\ud83d\udd25')).toEqual('🔥');
    expect(unicd.de('\u26a1\ufe0f')).toEqual('⚡️');
    expect(unicd.de('\ud83c\udfa8')).toEqual('🎨');
    expect(unicd.de('\u597d')).toEqual('好');
  });

  it('en should be done', () => {
    expect(unicd.en('👍')).toEqual('\\ud83d\\udc4d');
    expect(unicd.en('🧐')).toEqual('\\ud83e\\uddd0');
    expect(unicd.en('💥')).toEqual('\\ud83d\\udca5');
    expect(unicd.en('📦')).toEqual('\\ud83d\\udce6');
    expect(unicd.en('💩')).toEqual('\\ud83d\\udca9');
    expect(unicd.en('🔨')).toEqual('\\ud83d\\udd28');
    expect(unicd.en('📌')).toEqual('\\ud83d\\udccc');
    expect(unicd.en('🚨')).toEqual('\\ud83d\\udea8');
    expect(unicd.en('✅')).toEqual('\\u2705');
    expect(unicd.en('💄')).toEqual('\\ud83d\\udc84');
    expect(unicd.en('🚀')).toEqual('\\ud83d\\ude80');
    expect(unicd.en('🐛')).toEqual('\\ud83d\\udc1b');
    expect(unicd.en('🔥')).toEqual('\\ud83d\\udd25');
    expect(unicd.en('⚡️')).toEqual('\\u26a1\\ufe0f');
    expect(unicd.en('🎨')).toEqual('\\ud83c\\udfa8');
    expect(unicd.en('好')).toEqual('\\u597d');
  });
});
