import '../css/Typography.css';

const Typography = ()=> {
  return (
    <>
      <div className='typography'>
        <div className="typography-item">
          <h4>フォント: </h4>
          <select name="font-select" defaultValue="hand-written">
            <option value="hand-written" style={{fontFamily: 'Yomogi'}}>手書き風</option>
            <option value="cute" style={{fontFamily: 'Hachi Maru Pop'}}>かわいい</option>
            <option value="cool" style={{fontFamily: 'Reggae One'}}>かっこいい</option>
            <option value="beautiful" style={{fontFamily: 'Kaisei Tokumin'}}>素敵</option>
            <option value="powerful" style={{fontFamily: 'Dela Gothic One'}}>力強い</option>
            <option value="child" style={{fontFamily: 'Darumadrop One'}}>こども</option>
            <option value="adult" style={{fontFamily: 'Yuji Syuku'}}>大人</option>
            <option value="dirty" style={{fontFamily: 'Slackside One'}}>じきたない</option>
            <option value="mirror" style={{fontFamily: '鏡文字ゴシック'}}>鏡文字</option>
          </select>
        </div>
    
        <div className="typography-item">
          <h4>文字色: </h4>
          <select name="color-select">
            <option value="black" style={{color: 'black'}}>黒</option>
          <option value="red" style={{color: 'red'}}>赤</option>
            <option value="blue" style={{color: 'blue'}}>青</option>
            <option value="aqua" style={{color: '#00BFFF'}}>水色</option>
            <option value="yellow" style={{color: '#FFD700'}}>黄</option>
            <option value="green" style={{color: 'green'}}>緑</option>
            <option value="lime" style={{color: 'lime'}}>黄緑</option>
            <option value="purple" style={{color: 'purple'}}>紫</option>
            <option value="orange" style={{color: 'orange'}}>オレンジ</option>
            <option value="pink" style={{color: '#FF1493'}}>ピンク</option>
          </select>
        </div>

        <label className="typography-item">
          <input id="not-bold" type="checkbox" name="not-bold" value="not-bold" />
          <span className="typography-checkbox">文字を細くする </span>
        </label>
      </div>
    </>
  );
};

export default Typography;