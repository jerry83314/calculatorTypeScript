"use strict";
// Class 類別
// 1. 是不是實體
// 預設不寫 public 也會是 public
// public 為公開的，代表所有人都可以讀取，如果只要只屬於這個類別可以使用 private，如果有子類別會繼承可以使用 protected
class Person {
    constructor(_name, _age, _gender, _weight, _hiehgt) {
        this._name = _name;
        this._age = _age;
        this._gender = _gender;
        this._weight = _weight;
        this._hiehgt = _hiehgt;
    }
}
// 透過 new 關鍵字用類別創建另一個實體
const leo = new Person('王小明', 28, true, 180, 70);
console.log('結果：', leo instanceof Person);
// 2. 子類別繼承父類別
// 繼承關鍵字為 extends 
class Taiwanese extends Person {
    // 子類別繼承父類別時，建構函式中都要繼承上面的屬性
    constructor(_name, _age, _gender, _weight, _hiehgt, _test) {
        // 且要用 super 函式呼叫，依序把屬性帶進去參數
        super(_name, _age, _gender, _weight, _hiehgt);
        this._from = 'Taiwan'; // readonly 只能在建構子中初始化，且只能讀取不能改寫
    }
}
const jerry = new Taiwanese('黃小異', 30, false, 170, 50, 'test');
console.log('結果2:', jerry);
console.log(jerry instanceof Taiwanese); // true
console.log(jerry instanceof Person); // true
// 3. 試試看子類別再繼承子類別
class Test extends Taiwanese {
    constructor(_name, _age, _gender, _weight, _hiehgt, _test) {
        super(_name, _age, _gender, _weight, _hiehgt, _test);
    }
}
const TestVar = new Test('tom', 35, true, 180, 80, 'test2');
// 比較特殊的一點是 Taiwanese 只能讀取的 _from 也有被繼承
console.log('TestVar', TestVar);
console.log(TestVar instanceof Taiwanese); // true
console.log(TestVar instanceof Person); // true
