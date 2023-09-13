const data =[
    {
        "date": "2022-04-17T00:00:00.000Z",
        "count": 1
    },
    {
        "date": "2023-08-02T00:00:00.000Z",
        "count": 3
    },
    {
        "date": "2023-02-16T00:00:00.000Z",
        "count": 5
    },
    {
        "date": "2023-02-04T00:00:00.000Z",
        "count": 2
    },
    {
        "date": "2023-03-07T00:00:00.000Z",
        "count": 3
    },
    {
        "date": "2023-03-06T00:00:00.000Z",
        "count": 1
    },
    {
        "date": "2023-02-28T00:00:00.000Z",
        "count": 1
    },
]
// Sort the data array by date in ascending order (from old to new)
data.sort((a, b) => new Date(a.date) - new Date(b.date));

// Now, the data array is sorted by date
console.log(data);