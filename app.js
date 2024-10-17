function getMails(arr) {

    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  
    const emails = arr.filter(item => typeof item === 'string' && emailPattern.test(item));
  
    return emails.sort();
  }
  
  const collections = [
    {},
    15,
    "hello@test.pl",
    null,
    ['aaa', 'bbb', 5],
    'admin@gmail.com',
    undefined,
    'a34@yahoo.com',
    '321@a',
    '321.pl'
  ];
  
  console.log(getMails(collections));