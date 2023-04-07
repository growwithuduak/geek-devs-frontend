
let services = {
    designServices : ["web design", "branding", "illustration", "photo editing" ]
    }
  
  let isShopOpen = true;
  
  function time(ms) {
    return new Promise( (resolve, reject) => {
      if( isShopOpen ) {
        setTimeout(resolve, ms);
      } else {
        reject(console.log("Business is closed"));
      }
    });
  }
  
  async function GDesigns49 () {
    try {
      await time(2000);    
      console.log(`${services.designServices[2] + " " + "was selected"}`);
      
      await time(1000)
      console.log("Start production");
      
      await time(2000);
      console.log("Production in progress....");
      
      await time(5000);
      console.log("Production completed");
      
    } catch(error) {
        console.log("Customer is about to leave");
    
    } finally {
        console.log("Hope to see you next time");
    }
  }
  
  GDesigns49();
