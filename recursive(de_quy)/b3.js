// 3.	Xem ví dụ
// Input: [
// a,b,c,d
// ]
// 	Output: 
// [
// 	[a,b,c,d],
// 	[a,b,d,c],
// 	[a,c,b,d],
// 	[a,c,d,b],
// 	[a,d,b,c],
// 	[a,d,c,b],
// 	[b,a,c,d],
// 	[b,a,d,c],
// 	[b,c,a,d],
// 	[b,c,d,a],
// 	[b,d,a,c],
// 	[b,d,c,a],
// 	[c,a,b,d]
// ] 
// Tìm quy luật ví dụ trên và áp dụng cho bài toán với số lượng phần tử
//  trong input là không giới hạn, các phần tử trong input là unique, trả ra output theo đúng quy luật ((đúng kết quả và cả thứ tự hiển thị))

function test_b3 (arr) {
    const res = []
    const used = new Array(arr.length).fill(false);
    return
    const count = 4
    const len = [];
    function combind() {
        if (len.length === count) {
            res.push([...len])
            return
        }
        for (let i = 0; i < arr.length; i++) {
            if (used[i]) continue;
            used[i] = true;
            len.push(arr[i]);
            combind();
            len.pop();
            used[i] = false;
        }
    }
    combind()
    return res
}

const arr = ['a', 'b', 'c', 'd']
console.log(test_b3(arr));