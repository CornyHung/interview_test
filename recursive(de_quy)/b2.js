// 2.	Cho mảng dữ liệu với các phần tử bất kỳ không giới hạn số lượng $array với n phần tử. Xử lý để trả ra
//  các mảng con của $array với số phần tử là k (0 <= k <= n). Các mảng con là duy nhất, không trùng nhau (đúng kết quả và cả thứ tự hiển thị). Ví dụ:
// Input:
// -	const array = [1,2,3,4,5,6,7,8,9,10]
// -	const n = 10 phần tử
// -	chọn const k = 3

// Output: 120 mảng con
// [
// 	[1,2,3],
// 	[1,2,4],
// 	[1,2,...],
// 	[1,2,10],
// 	[1,3,4],
// 	[1,3,5],
// 	[1,3,...],
// 	[1,3,10],
// 	……….
// 	[8,9,10]
// ]
//  

function test_b2(arr, arrLen) {
    const res = []
    function combind (start, len) {
        if (len.length === arrLen) {
            res.push([...len])
            return
        }
        for (let i = start; i < arr.length; i++) {
            len.push(arr[i])
            combind(i + 1, len)
            len.pop()            
        }
    }

    combind(0, [])

    return res

}

const arr = [1,2,3,4,5,6,7,8,9,10]
// test_b2()
console.log(test_b2(arr, 3));
