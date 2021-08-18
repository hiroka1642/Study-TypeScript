export const Practice2 = () => {
  //関数の返り値はnumberだと明示してあげる方がわかりやすい
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };
  const onCLickPractice = () => {
    console.log(getTotalFee(1000));
  };
  return (
    <div>
      <p>練習問題：返却値の型指定</p>
      <button onClick={onCLickPractice}>練習問題2を実行</button>
    </div>
  );
};
