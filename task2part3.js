const getMonth = (callback) => {
    setTimeout(() => {
      let error = true;
      let month = [
        "January","February", "March", "April",
        "May", "June", "July", "August", "September",
        "October", "November", "December",
      ];
      if (!error) {
        callback(null, month);
      } else {
        callback(new Error("Sorry Data Not Found"), []);
      }
    }, 4000);
  };
  
  
const showMonth = (error, result) => {
    if (error) {
      console.log(error);
      // menaampilkan eror
    } else {
      result.map((bulan) => {
        console.log(bulan);
        // menampilkan bulan
      });
    }
  };
  getMonth(showMonth);
