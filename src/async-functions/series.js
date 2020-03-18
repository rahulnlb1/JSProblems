const series = function(array, callback) {
  const seriesExecution = function(_array, _callback, results = []) {
    if (_array.length === 0) {
      _callback(null, results);
    } else {
      const [toExecute, ...restArray] = [..._array];
      toExecute(function(err, result) {
        if (err) return err;
        results = [...results, result];
        seriesExecution(restArray, _callback, results);
      });
    }
  };
  seriesExecution(array, callback);
};

// Simulate async operations by using the setTimeout function with random timeout value. All it does is the print the number passed into the function.
const asyncTask = function(num) {
  return function(cb) {
    setTimeout(function() {
      console.log(num);
      cb(null, num);
    }, Math.random() * 1000);
  };
};

// An array of asyncTask
const tasks = [
  asyncTask(1),
  asyncTask(2),
  asyncTask(3),
  asyncTask(4),
  asyncTask(5)
];

function abc(err, result) {
  if (err) console.log(err);
  console.log(result);
}

// run the async tasks in parallel
series(tasks, abc);
