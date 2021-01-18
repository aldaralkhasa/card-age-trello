window.TrelloPowerUp.initialize({
  "card-badges": function (t, opts) {
    return t.card("all").then(function (card) {
      const date1 = new Date(card.dateLastActivity);

      return [
        {
          dynamic: function () {
            const date2 = new Date();
            const diffTime = Math.abs(date2 - date1);
            const diffMinutes = Math.ceil(diffTime / (1000 * 60 * 60));
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            return {
              text: diffDays + " days",
              color: "blue",
              refresh: 1110, // in seconds
            };
          },
          dynamic: function () {
            const date2 = new Date();
            const diffTime = Math.abs(date2 - date1);
            const diffMinutes = Math.ceil(diffTime / (1000 * 60 * 60));
            if (diffMinutes < 1440) {
              return {
                text: diffMinutes + " Minutes",
                color: "blue",
                refresh: 3600, // in seconds
              };
            } else return null;
          },
        },
      ];
    });
  },
});

// for card front badges only
