// 1.	Cho mảng dữ liệu với các phần tử bất kỳ, số lượng phần tử con của từng phần tử cũng là ngẫu nhiên và không giới hạn (Input). Xử lý để có dữ liệu (Output) theo quy tắc dưới đây (đúng kết quả và cả thứ tự hiển thị):
// Input: 
// 	[
// [S, M, L, …],
// [red, blue, black, white, …],
// [HN, HCM, …],
// 		…………………………………………
// ]

// Output:
// [
// 	[S, red, HN, ...],
// 	[S, red, HCM, ...],
// 	[S, blue, HN, ...],
// 	[S, blue, HCM, ...],
// 	[S, black, HN, ...],
// 	[S, black, HCM, ...],
// 	[S, white, HN, ...],
// 	[S, white, HCM, ...],
// 	[M, red, HN, ...],
// 	………………...
// ]


const inp = [
    ['S', 'M', 'L'],
    ['red', 'blue', 'black', 'white'],
    ['HN', 'HCM']
    ]

function test(arr) {
    const res =[]
    
    function helper(temp, index) {
        if (index === arr.length) {
            res.push([...temp])
            return
        }

        for(let i = 0; i < arr[index].length; i ++) {
            temp.push(arr[index][i])
            helper(temp, index + 1)
            temp.pop()
        }
    }

    helper([], 0)

    return res
}
    
const out = test(inp)
console.log(out);
// out.forEach(combind => console.log(combind))
