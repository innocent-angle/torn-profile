clear();

{
  let income = 73872820;
  
  for (let i = 150; i < 250; i++) {
      if ((income / i) % 1 == 0) {
        const amount = income / i;
        const price = i;

        console.log(
          `${amount} sold for $${price}`
      );
    }
  } 
}