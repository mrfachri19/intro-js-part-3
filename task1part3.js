
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
  
 // promise memkai then dan catch
 //then jika kondisi nya sudah ditepati dan caatch jika gagal ditepati

 //aasync await menggunakan try dan catch
  
   
  const cekHariKerja3 = async (day) => {
    try {
      const response = await cekHariKerja(day);
      console.log(response + ' adalah hari kerja');
    } catch (error) {
      console.log(error);
    }
  };
  
  cekHariKerja3("sabtu");
  
  cekHariKerja('selasa')
      .then((response) => console.log(response + ' adalah hari kerja'))
      .catch((response) => console.log(response));
 
