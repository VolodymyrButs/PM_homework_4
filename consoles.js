// 1 '+' try to convert all to string if ve have string in sentense
console.log('2 + "2"=="2" + 2   =>', 2 + "2" == "2" + 2);
console.log("because '22'=='22'");
console.log("--------------------");
// 2
console.log('2 + "3"=="3" + 2   =>', 2 + "3" == "3" + 2);
console.log("because '23'!=='32'");
console.log("--------------------");
// 3
console.log('"3" + "2"==3 + 2   =>', "3" + "2" == 3 + 2);
console.log("because '32'!==5");
console.log("--------------------");
// 4
console.log('"3" + "2" == "3" + 2  =>', "3" + "2" == "3" + 2);
console.log("because '32'=='32'");
console.log("--------------------");
// 5
console.log('"3" + "2" == 2 + "3"   =>', "3" + "2" == 2 + "3");
console.log("because '32'!=='23'");
console.log("--------------------");
// 6
console.log(
  '2 + Number("3")==Number("3") + 2   =>',
  2 + Number("3") == Number("3") + 2
);
console.log("because 5==5");
console.log("--------------------");
// 7
console.log('12/"6"   =>', 12 / "6");
console.log(
  "because all Arithmetic operators except plus try convert to numbers"
);
console.log("--------------------");
// 8
console.log('"number" + 15 + 3   =>', "number" + 15 + 3);
console.log("from left to the right");
console.log("--------------------");
// 9
console.log('15 + 3 + "number"   =>', 15 + 3 + "number");
console.log("from left to the right");
console.log("--------------------");
// 10
console.log("[1] > null  =>", [1] > null);
console.log("[1] toPrimitive, null to 0");
console.log("--------------------");
// 11
console.log('"foo" + + "bar"  =>', "foo" + +"bar");
console.log(
  "unary plus has Precedence 17 (plus - 14) and try to convert 'bar' to number => NaN 'foo'+'NaN'"
);
console.log("--------------------");
// 12
console.log('"true" == true  =>', "true" == true);
console.log("after toNumber NaN!==1");
console.log("--------------------");
// 13
console.log('false == "false"  =>', false == "false");
console.log("after toNumber 0!==NaN");
console.log("--------------------");
// 14
console.log('null == ""  =>', null == "");
console.log("null return true just with null and undefined");
console.log("--------------------");
// 15
console.log('!!"false" == !!"true"  =>', !!"false" == !!"true");
console.log("toBoolean - any not empty string return true");
console.log("--------------------");
// 16
console.log("['x']=='x'   =>", ["x"] == "x");
console.log("['x'] toPrimitive,");
console.log("--------------------");

const enemy = {
  name: "Bob",
};

const friend = {
  name: "Alex",
};

const me = friend;

me.name = "Bob";
console.log(
  `const enemy = {
        name: "Bob",
      }
      
const friend = {
        name: "Alex",
      };
      
const me = friend;
      
me.name = "Bob"`
);
console.log(friend.name);
console.log("me and friend reference to ONE object");
console.log(me === friend);
console.log("me and friend reference to SAME object");
console.log(me === enemy);
console.log("different objects");
