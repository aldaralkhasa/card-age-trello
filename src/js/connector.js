window.TrelloPowerUp.initialize({
  "card-badges": function (t, opts) {
    return t.card("all").then(function (card) {
      return [
        {
          dynamic: function (card) {
            const date1 = new Date(card.dateLastActivity);
            const date2 = new Date();
            console.log("card ", card.dateLastActivity);

            console.log("date1: ", date1);
            console.log("date2: ", date2);

            const diffTime = Math.abs(date2 - date1);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            console.log(diffTime + " milliseconds");
            console.log(diffDays + " days");
            return {
              text: diffDays + " days",
              color: "blue",
              refresh: 1110, // in seconds
            };
          },
        },
      ];
    });
  },
});

// for card front badges only
