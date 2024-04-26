// 多形
// typescipt 本身具有子類別的函式複寫父類別的函式功能
class Human {
  eat(): void {
    console.log('I am eating')
  }
}

class TaiwanPeople extends Human {
  override eat(): void {
    console.log('I am eating with chopstick');
  }
}

class indiaPeople extends Human {
  override eat(): void {
    console.log('I am eating with hand');
  }
}

const Anna = new Human();
const Tom = new TaiwanPeople();
Anna.eat();
Tom.eat(); // 這裡會發現子類別的 eat function 已經覆寫父類別的
// 這裡有一種情境是，如果父類別的 eat function 被刪掉了，但子類別的 eat function 還存在，卻永遠都不能被調用
// 所以上述情境的解法會是增加關鍵字 override，如果父類別的 eat function 被刪掉了，子類別覆寫的 eat function 就會報錯
// 這時候我們就會知道父類別的 eat function 被刪掉了
// noImplicotOverride 這時候就建議打開了