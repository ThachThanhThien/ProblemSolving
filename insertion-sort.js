function insertionSort2(n, arr) {
    let i, key, j; 
    for (i = 1; i < n; i++)
    { 
        key = arr[i]; 
        j = i - 1; 
        
        while (j >= 0 && arr[j] > key)
        { 
            arr[j + 1] = arr[j]; 
            j = j - 1; 
        } 
        arr[j + 1] = key; 
        console.log(arr.join(' '))
    }
}

insertionSort2(7, [4, 1, 5, 2, 6, 3])