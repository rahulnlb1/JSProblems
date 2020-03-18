const parallel = function(array, callback) {
  const length = array.length;

  let index = 0;
  let finalResult = [];
  array.forEach(element => {
    element(function(err, result) {
      if (err) return err;
      finalResult = [...finalResult, result];
      index++;
      if (index == length) {
        callback(null, finalResult);
      }
    });
  });
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
parallel(tasks, abc);
