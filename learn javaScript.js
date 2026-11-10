// alert("我一定要學會 js");
// console.log("大家好啊 大家好!");
// console.log是傳到主控台檢查網頁的
// let 宣告變數
// let 年齡 = 25;
// 修改變數
// 年齡 =26;
// const 圓周率 = 3.14159;
// const 是常數宣告，寫了就不變，如果改了，主控台會有警示
// 圓周率 =3.14; --會有警示

// 變數、常數規則
// 可以包含字母、數字、底線、貨幣符號
// 不能是數字開頭
// 不能有空白符號

// console.log(年齡);
// console.log(圓周率);
//-----------------------------------------------------------------
// let 衣服 = 300;
// let 褲子 = 700;
// let 折扣 = 0.8;
// let 總金額 = (褲子+衣服)*折扣;

//按ctrl+/ 把一區的字全都變注解，在按一次變回去

// 總金額 += 500;
// 總金額 -= 500;
// 加東東 減東東
// console.log(總金額);
//--------------------------------------------------------------------
// let 城市 = "台北市";
// let 街道 = "博愛路300號";
// 字串變數，相加，字會接在一起
// let 地址 = 城市 + 街道;
// console.log("小明住在"+地址);

// 字串模板，要用反引號，在鍵盤左上角
// let 句子 = `小明今天花了${總金額}元，
// 其中衣服原價${衣服}元，褲子原價${褲子}元`
// console.log(句子);
//-----------------------------------------------------------------
// 變數名稱.length，計算字數
// let 字數 = 句子.length;
// console.log(字數);
// // 換字
// let 新句子 = 句子.replace("今天", "昨天");
// console.log(新句子);
// // 擷取字句，可以自己寫開頭結尾
// let 第一句 = 句子.slice(0,10);
// console.log(第一句);
//-------------------------------------------------------------------
// //算平均無法整除，一大堆小數點
// let 總金額2 = 120;
// let 商品數量 = 7;
// let 平均價格 = Math.round(總金額2 / 商品數量); 
// math.round會直接把數字四捨五入到整數
// console.log(平均價格.toFixed(2));
// 寫要留到小數點第幾位 
//---------------------------------------------------------------------------
// 布林值，只有true 和false
//let 分數 = 70;
//let 分數2 = "60";//分數2是字串變數
//let 及格 = 60;
// 判斷相等==，不相等!==
// js不管資料類型，直接比
// 如果連資料類型都要比，放三個=
// 一般常用===，做嚴格比較
//console.log(分數2 == 及格);
//console.log(分數2 === 及格);

// let 分數 = 65;
// let 及格 = 60;
// let 出席率 = 0.7;

// if(分數 >= 及格 && 出席率 >= 0.8){
//     console.log("恭喜通過課程喔!");
// }else if(分數 >= 及格 || 出席率 >= 0.8){
//     console.log("通過但需要補交作業");
// }else{
//     console.log("未通過課程");
// }
//-------------------------------------------------------------------------------
//array 陣列
// let 考試成績 = [85, 90, 75, 60, 95];
// // 加資料
// 考試成績.push(100);
// // console.log(考試成績);
// // console.log(考試成績[2]);
// // console.log(考試成績.pop());
// // // 最後一位的成績
// // console.log(考試成績.indexOf(75));
// // // 找出數字所在位置
// // console.log(考試成績.length);
// // 查有多少資料

// for(let i=0;i<6;i++){
//     console.log(考試成績[i]);
// }// 一個一個輸出成績，如果加資料要手動調，麻煩

// for(let i=0;i < 考試成績.length;i++){
//     console.log(`第${i+1}位同學的成績是${考試成績[i]}分`);
// }

// // for的其他寫法(2種)
// 考試成績.forEach(function(成績, 索引){
//     console.log(`第${索引+1}位同學是${成績}分`);
// });

// 考試成績.forEach((成績, 索引) => {
//     console.log(`第${索引 + 1}位同學是${成績}分`);
// });


// //foreach 每讀到陣列的元素，就會做函式，
// // 第一個參數:是當前被處理的陣列數值
// // 第二個參數:當前被處理的陣列數值的位置

// // 傳統 function 的小括號不能省略
// 考試成績.forEach(function(成績) { ... });

// // 箭頭函式 (=>) 的特權：如果「參數只有一個」，可以省略小括號
// 考試成績.forEach(成績 => { console.log(成績) }); 

// // 但如果「沒有參數」或「兩個以上的參數」，小括號就一定要寫喔！
// 考試成績.forEach((成績, 索引) => { ... });

//------------------------------------------------------------------------------------------------

// function 打招呼(){
//     console.log("你好");
// }// 函式

// 打招呼();
// //呼叫函式

// function 打招呼2(姓名){
//     console.log(`${姓名}你好`);
// }// 函式

// 打招呼2("小明");
// //呼叫函式
//-----------------------------------------------------------------------------------------------------------

// const 任務 = document.querySelector("li");
// console.log(任務.textContent);
// // 只能輸出第一排的字，想輸出其他排，要額外自己命名
// const 任務2 = document.querySelector("li.每周");
// console.log(任務2.textContent);
// // const 所有任務 = document.querySelectorAll("li");
// // 把li全部元素取出
//網頁要動的部分---------------------------------------------------------------------------------------------------------------------
// const 文字欄 = document.querySelector(".文字欄");
// // console.log(文字欄.placeholder);
// const 清單 = document.querySelector(".清單");
// const 按鈕 = document.querySelector(".按鈕");
// //-----------------------------------------------------------------------------------------------------------
// function 新任務(){
//     if(文字欄.value === ""){
//         return;
//         //讓使用者有輸入內容的時候，才能建立列表
//         // 用return來中止程式，不要執行下方的程式
//     }

//     const 任務 = document.createElement("li");
//     // 增加新的元素
//     //任務.textContent = 文字欄.value;
//     // 如果要加其他功能，textContent功能有點不夠
//     // 下面這個可以一次插入一大段html的功能，要用反引號，在左上角
//     任務.innerHTML = `
//         <input type="checkbox" class="打勾方塊">
//         <label>${文字欄.value}</label>
//         <button class="垃圾桶">🗑️</button>
//     `

//     const 垃圾桶 = 任務.querySelector(".垃圾桶");
//     const 打勾方塊 = 任務.querySelector(".打勾方塊");
//     垃圾桶.addEventListener("click", function(){
//         任務.remove();
//         // 刪除語法
//     });

//     打勾方塊.addEventListener("change", function(){
//         //偵測如果方塊狀態改變，偵測方塊是不是被打勾
//         if(打勾方塊.checked){
//             任務.style.textDecoration = "line-through";
//             // 在字上加上橫線
//             任務.style.color = "#999";
//             清單.append(任務);
//             //把做完的任務放到最後
//         }else{
//             任務.style.textDecoration = "none";
//             // 去掉橫線
//             任務.style.color = "";
//             清單.prepend(任務);
//             //把任務放到清單上方
//         }
//     });

//     // 大小寫不能忽略喔，會跑不動
//     // windows+(.) 打開表情符號列
//     // 任務內容是文字欄的內容
//     清單.append(任務);
//     //append 把新的任務添加到清單底部
//     文字欄.value = "";
//     // 文字欄清空，讓下一個使用者可以輸入
// }

// 按鈕.addEventListener("click",新任務);
// // 偵測到如果按下按鈕，就做新任務這個函式

// 文字欄.addEventListener("keyup",function(e){
//     //console.log(e.key);
//     if(e.key === "Enter"){
//         //如果按下enter，主控台就顯示欄內的文字
//         //console.log(文字欄.value);
//         新任務();
//     }
// });
// 可以偵測使用者動作，例如:點擊、移動、按鈕
//keyup按下按鈕後放開的動作，只要按下，就做後面的函式
//所有動作會打包成叫做e的參數送給函式
// key 是回傳使用者按下的鍵名
// 這個括號方式非常神奇，要注意喔!
//在主控台，空格也會偵測，同時重複的字會放在一起ㄟ



//網頁動到這裡-----------------------------------------------------------------------------------------------------------------
// • 字串 (String): "文字"
// • 數字 (Number): 10, 3.14
// • 布林值 (Boolean): true, false
// • 未定義 (Undefined): 變數宣告了但沒給值（例如 let x;），它的值就是 undefined。
// • 空值 (Null): 刻意讓變數是空的（例如 let y = null;）。

//----------------------------------------------------------------------------------------------------------------------------

// 用物件詳細說明詳細資訊，
// // 物件用大括號 {}，裡面是 鍵: 值 (key: value)
// let 學生 = {
//     姓名: "小明",
//     年齡: 25,
//     及格: true
// };
// console.log(學生.姓名); // 輸出: 小明

//--------------------------------------------------------------------------------------------------------------------------------------

// LocalStorage 瀏覽器內建微型資料庫
// ，除非刻意清除瀏覽器快取，否則資料不消失
//只能儲存字串
// 基本語法
// localStorage.setItem("姓名", "小明");
// let 名字 = localStorage.getItem("姓名")
// localStorage.removeItem("姓名");
// localStorage.clear();



// // 如果要要記錄陣列和物件
// const jsonString = JSON.stringify(userProfile);
// console.log(jsonString);
//出來了會是字串喔
// localStorage.setItem("user", jsonString);

// const savedData = localStorage.getItem("user");
// const user = JSON.parse(savedData);
// 還原成javaScript 物件或陣列

// 如果 localStorage.getItem() 找不到資料，它會回傳 null。
// 如果你直接把 null 丟進 JSON.parse(null)
//  雖然不會報錯（會得到 null），
// 但如果後續直接當作物件操作（例如 null.name）程式就會壞掉。
//安全寫法
// const localData = localStorage.getItem("user");
// const user = localData ? JSON.parse(localData) : {name:"訪客"};
// 如果資料有和地端資料相同，就輸出轉換回來的資料，否則輸出原本資料

// 無法儲存「方法（Functions）」：
// JSON.stringify() 只能轉換純資料（數字、字串、布林值、陣列、物件）。
// 如果你的物件裡面寫了 function（例如 sayHello()），
// 在轉成字串的過程中該 function 會直接被忽略並消失
//---------------------------------------------------------------------------------------------------------------------------------------


const 文字欄 = document.querySelector(".文字欄");
const 清單 = document.querySelector(".清單");
const 按鈕 = document.querySelector(".按鈕");
const 篩選按鈕們 = document.querySelectorAll(".篩選按鈕");
// 1. 初始化：從 LocalStorage 讀取資料，如果沒有資料，就給一個空陣列 []
// 因為拿出來的是字串，所以要用 JSON.parse() 轉回陣列
let 任務資料 = JSON.parse(localStorage.getItem("myTodoList")) || [];
let 當前狀態 = "全部";
// 2. 渲染畫面的函式：負責把「任務資料」陣列裡面的東西畫到網頁上
function 渲染畫面() {
    清單.innerHTML = ""; // 每次畫之前先清空，不然會重複產出

    let 篩選後的任務 = 任務資料.filter(項目 =>{
        if(當前狀態==="未完成"){
            return 項目.checked === false;//false 回到是否打勾改狀態
        }else if(當前狀態 === "已完成"){
            return 項目.checked === true;
        }else{
            return true;
        }
    });
    
    篩選後的任務.forEach((項目, 索引) => {
        const 任務 = document.createElement("li");
        
        // 根據資料內部的 checked 狀態，決定要不要加上刪除線樣式
        let 刪除線 = 項目.checked ? "style='text-decoration: line-through; color: #999;'" : "";
        let 是否打勾 = 項目.checked ? "checked" : "";

        任務.innerHTML = `
            <input type="checkbox" class="打勾方塊" ${是否打勾}>
            <label ${刪除線}>${項目.text}</label>
            <button class="垃圾桶">🗑️</button>
        `;

        // 監聽垃圾桶：點擊時刪除該筆資料
        const 垃圾桶 = 任務.querySelector(".垃圾桶");
        垃圾桶.addEventListener("click", function() {
            let 原陣列索引 = 任務資料.indexOf(項目);
            //用 indexOf 尋找該項目在原陣列的索引
            任務資料.splice(原陣列索引, 1); // 從陣列中刪除這筆資料 (索引位置, 刪除1筆)
            更新並儲存(); // 重新儲存並更新畫面
        });

        // 監聽打勾方塊：點擊時改變狀態
        const 打勾方塊 = 任務.querySelector(".打勾方塊");
        打勾方塊.addEventListener("change", function() {
            項目.checked = 打勾方塊.checked; // 把畫面的狀態同步回陣列資料裡
            更新並儲存();
        });

        // 根據打勾狀態，決定放前面還是放後面
        if (項目.checked) {
            清單.append(任務);
        } else {
            清單.prepend(任務);
        }
    });
}

篩選按鈕們.forEach(按鈕 =>{
    按鈕.addEventListener("click",function(){
        //移除其他按鈕的 active 樣式，並把 active 加到被點擊的按鈕上
        篩選按鈕們.forEach(btn => btn.classList.remove("active"));
        按鈕.classList.add("active");
        // 取得按鈕身上的 data-type 屬性（全部 / 未完成 / 已完成）
        當前狀態 = 按鈕.dataset.type;
        渲染畫面();
    });
});

// 3. 儲存資料的函式：負責把陣列轉字串存入 LocalStorage，並重新畫畫面
function 更新並儲存() {
    // 使用 JSON.stringify() 把陣列轉成字串才能存進去
    localStorage.setItem("myTodoList", JSON.stringify(任務資料));
    渲染畫面();
}

// 4. 新增任務的函式
function 新任務() {
    if (文字欄.value.trim() === "") return;

    // 把新任務包裝成一個「物件」，塞進「任務資料」陣列
    let 點心 = {
        text: 文字欄.value,
        checked: false // 預設新任務都是未完成
    };
    
    任務資料.push(點心);
    更新並儲存(); // 儲存並更新
    文字欄.value = "";
}

// 5. 事件監聽
按鈕.addEventListener("click", 新任務);
文字欄.addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
        新任務();
    }
});

// 6. 網頁一打開，立刻執行一次渲染畫面，把以前存的資料秀出來
渲染畫面();
//---------------------------------------------------------------------------------------------------------

let allnumber = [80,50,60,20,40,60,70];
let bignumber = allnumber.filter(number => number >50);
console.log(bignumber);
