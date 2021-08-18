export const Practice3 = () => {
  //関数の返り値はnumberだと明示してあげる方がわかりやすい
  const getTotalFee = (num: number) => {
    const total = num * 1.1;
    return total.toString();
  };
  const onCLickPractice = () => {
    let total: number = 0;
    total = getTotalFee(1000);
    console.log(total);
  };
  return (
    <div>
      <p>練習問題：変数の型指定</p>
      <button onClick={onCLickPractice}>練習問題３を実行</button>
    </div>
  );
};
