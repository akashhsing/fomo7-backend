<!DOCTYPE html>
<html>
<head>
  <title>Fomo7 Clone</title>
</head>
<body>
  <h1>Welcome to Fomo7</h1>
  <button onclick="getBalance()">Check Balance</button>
  <div id="balance"></div>

  <script>
    const username = "akash"; // your username
    async function getBalance() {
      let res = await fetch('https://fomo7-backend.username.repl.co/balance/' + username);
      let data = await res.json();
      document.getElementById("balance").innerText = "Balance: ₹" + data.balance;
    }
  </script>
</body>
</html>
