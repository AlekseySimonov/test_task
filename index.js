const arr = Array.from({ length: 100 }, (_, i) => i + 1)

for (let i = arr.length - 1; i > 0; i--) {
	const j = Math.floor(Math.random() * (i + 1))
	[arr[i], arr[j]] = [arr[j], arr[i]]
}

const missingIndex = Math.floor(Math.random() * arr.length)
const arrWithMissing = arr.slice(0, missingIndex).concat(arr.slice(missingIndex + 1))


function findMissingBySum(arr) {
	const fullSum = (100 * 101) / 2
	const actualSum = arr.reduce((acc, n) => acc + n, 0)
	return fullSum - actualSum
}

function findMissingBySet(arr) {
	const set = new Set(arr)
	for (let i = 1; i <= 100; i++) {
		if (!set.has(i)) return i
	}
}

function findMissingBinary(arr, low = 1, high = 100) {

	if (low === high) return low

	const middle = Math.floor((low + high) / 2)
	const countLeft = arr.filter((num) => (num >= low) && (num <= middle)).length
	const expectedCount = middle - low + 1

	if (countLeft < expectedCount) {
		return findMissingBinary(arr, low, middle)
	} else {
		return findMissingBinary(arr, middle + 1, high)
	}
}

console.log('findMissingBySum: ', findMissingBySum(arrWithMissing))
console.log('findMissingBySet: ', findMissingBySet(arrWithMissing))
console.log('findMissingBinary: ', findMissingBinary(arrWithMissing))

