const user = {
    name: 'Imię',
    surname: 'Nazwisko',
    allGrades: [
      {
        subjectName: 'Name1',
        grades: [5, 4, 3, 5, 2],
        weight: 3
      },
      {
        subjectName: 'Name2',
        grades: [3, 3.5, 2],
        weight: 1
      },
      {
        subjectName: 'Name3',
        grades: [4, 3, 4, 3.5],
        weight: 5
      }
    ]
  };
  
  function calcAvg(user) {
    let sum = 0;
    let wSum = 0;
  
    user.allGrades.forEach(sub => {
      const avg = sub.grades.reduce((a, b) => a + b, 0) / sub.grades.length;
      sum += avg * sub.weight;
      wSum += sub.weight;
    });
  
    const wAvg = sum / wSum;
    console.log(`Imię: ${user.name}, Nazwisko: ${user.surname}, Średnia ważona: ${wAvg.toFixed(2)}`);
  }
  
  calcAvg(user);
  