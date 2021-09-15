
const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
        let cek = dataDay.find((item) => {
          return item === day;
        });
        if (cek) {
          resolve(cek);
        } else {
          reject(new Error("Hari ini bukan hari kerja"));
        }
      }, 3000);
    });
  };
  
  // then untukmenghandle response sukses
  //catch menghandle response tdksukses
  
  
  // const cekHariKerja2 = (day) => {
  //   cekHariKerja(day)
  //     .then((response) => console.log(response + ' adalah hari kerja'))
  //     .catch((response) => console.log(response));
  
  // };
  // cekHariKerja2("senin");
  
  const cekHariKerja3 = async (day) => {
    try {
      const response = await cekHariKerja(day);
      console.log(response + ' adalah hari kerja');
    } catch (error) {
      console.log(error);
    }
  };
  
  cekHariKerja3("sabtu");