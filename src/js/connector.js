window.TrelloPowerUp.initialize({
  "card-badges": function (t, opts) {
    return t.card("all").then(function (card) {
      const date1 = new Date(card.dateLastActivity);

      return [
        {
          dynamic: function () {
            const date2 = new Date();
            const diffTime = Math.abs(date2 - date1);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - 1;

            return {
              text: diffDays + " days",
              refresh: 1110, // in seconds
              color: "sky",
            };
          },
        },
        {
          dynamic: function () {
            const date2 = new Date();
            const diffTime = Math.abs(date2 - date1);
            const diffMinutes = Math.ceil(diffTime / (1000 * 60 * 60));
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - 1;

            return {
              text: diffMinutes + " Minutes",
              refresh: 3600, // in seconds
              color: "light-gray",
            };
          },
        },
      ];
    });
  },
});

// for card front badges only
