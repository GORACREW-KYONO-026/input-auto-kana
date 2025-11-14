import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { convertToKatakana } from './kana';
import './App.css';

function App(): JSX.Element {
  const [fullName, setFullName] = useState('');
  const [isAutoKanaActive, setIsAutoKanaActive] = useState(true);
  const [kanaOverride, setKanaOverride] = useState('');

  const kanaValue = useMemo(() => {
    if (!isAutoKanaActive) {
      return kanaOverride;
    }

    return convertToKatakana(fullName);
  }, [fullName, isAutoKanaActive, kanaOverride]);

  useEffect(() => {
    if (isAutoKanaActive) {
      setKanaOverride('');
    }
  }, [isAutoKanaActive]);

  const handleFullNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };

  const handleKanaChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKanaOverride(event.target.value);
    setIsAutoKanaActive(false);
  };

  const handleReset = () => {
    setIsAutoKanaActive(true);
    setKanaOverride('');
  };

  return (
    <div className="app">
      <header className="app__header">
        <h1>氏名自動カナ変換フォーム</h1>
        <p>
          氏名を入力すると、フリガナを自動でカタカナに変換します。うまく変換できない場合は
          フリガナ欄を直接編集してください。
        </p>
      </header>

      <form className="app__form" autoComplete="off">
        <div className="field">
          <label className="field__label" htmlFor="fullName">
            氏名
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            className="field__input"
            placeholder="例）山田太郎"
            value={fullName}
            onChange={handleFullNameChange}
          />
          <p className="field__help">
            ひらがな・ローマ字で入力すると、カタカナが自動生成されます。
          </p>
        </div>

        <div className="field">
          <label className="field__label" htmlFor="kana">
            フリガナ（カタカナ）
          </label>
          <input
            id="kana"
            name="kana"
            type="text"
            className="field__input"
            placeholder="例）ヤマダ タロウ"
            value={kanaValue}
            onChange={handleKanaChange}
          />
          <div className="field__actions">
            <span className="field__status">
              {isAutoKanaActive ? '自動変換中' : '手動入力モード'}
            </span>
            {!isAutoKanaActive && (
              <button type="button" className="field__reset" onClick={handleReset}>
                自動変換に戻す
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
