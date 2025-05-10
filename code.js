function quicksort(array) {
    
    if (array.legth < 2) return array;

    let stack = [];
    stack.push({ low: 0, high: array.length - 1});

    while (stack.length > 0) {
        let {low, high} = stack.pop();

        if (low < high) {
            let pivotIndex = partition(array, low, high);

            if (pivotIndex + 1 < high) {
                stack.push({ low: pivotIndex + 1, high: high })
            }

            if (low < pivotIndex -1) {
                stack.push({ low: low, high: pivotIndex -1});
            }
        }
    }
    return array;

}

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++)
        if (arr[j] <= pivot) {
            i++
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}